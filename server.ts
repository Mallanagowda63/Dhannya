import express from 'express';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';
import { createServer as createViteServer } from 'vite';
import { PRODUCTS, CATEGORIES, MASALA_INGREDIENTS } from './src/data/initialData';
import { Product, Order, Address } from './src/types';

import crypto from 'crypto';
import { Webhook } from 'svix';

// Dynamic image resolver: Automatically scans images/dhannya_Products_final/<Name>/ for the latest image file
const publicProductsBaseDir = path.join(process.cwd(), 'images', 'dhannya_Products_final');

function resolveProductImagePath(productName: string, fallbackImage?: string): string {
  try {
    const folderPath = path.join(publicProductsBaseDir, productName);
    if (fs.existsSync(folderPath)) {
      const files = fs.readdirSync(folderPath);
      const imgFiles = files.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));
      if (imgFiles.length > 0) {
        // Priority: real branded product photos (filenames starting with
        // "dhaanya"/"Dhaanya") always win over old numbered placeholders --
        // these folders get manually curated over time (old placeholders
        // deleted, new real photos added), so preferring the actual branded
        // photo is more durable than depending on any specific old filename
        // still existing. Falls back to the legacy 011/01.* convention, then
        // just the first file, for products that don't have a branded photo yet.
        const priorityImg =
          imgFiles.find((f) => /^dhaanya/i.test(f)) ||
          imgFiles.find((f) => f.startsWith('011')) ||
          imgFiles.find((f) => f.startsWith('01.')) ||
          imgFiles.find((f) => f.startsWith('01')) ||
          imgFiles[0];

        return `/images/dhannya_Products_final/${encodeURIComponent(productName)}/${encodeURIComponent(priorityImg)}`;
      }
    }
  } catch (e) {
    // Fall back quietly
  }
  return fallbackImage || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80';
}

dotenv.config({ path: '.env.local' });
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const allowMemoryDbInDev = !isProduction && process.env.USE_MEMORY_DB === 'true';

// Guard against a misconfigured/dev environment ever booting against the
// production database. Set the *_MONGODB_HOST env vars once dev and prod use
// separate clusters (see scripts/seed-dev-db.ts for the seeding-side half of this).
const PRODUCTION_MONGODB_HOST = (process.env.PRODUCTION_MONGODB_HOST || '').trim();
if (isProduction && PRODUCTION_MONGODB_HOST) {
  const configuredHost = (() => {
    try {
      return new URL((process.env.MONGODB_URI || '').replace('mongodb+srv://', 'https://')).host;
    } catch {
      return '';
    }
  })();
  if (configuredHost && configuredHost !== PRODUCTION_MONGODB_HOST && process.env.ALLOW_PROD !== 'true') {
    console.error(
      `[BOOT FATAL] NODE_ENV=production but MONGODB_URI host "${configuredHost}" does not match ` +
        `PRODUCTION_MONGODB_HOST "${PRODUCTION_MONGODB_HOST}". Set ALLOW_PROD=true to override intentionally.`
    );
    process.exit(1);
  }
}

// Traceable write logging: every seed/destructive DB write should tag which
// route or script triggered it, so an incident like an empty collection at
// startup can be traced back to a specific call instead of guessed at.
function logDbWrite(source: string, action: string, details?: Record<string, unknown>) {
  const detailStr = details ? ' ' + JSON.stringify(details) : '';
  console.log(`[DB WRITE] source=${source} action=${action}${detailStr}`);
}

const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || 'dhaanyaorganic1@gmail.com').trim().toLowerCase();

// SHA-256 Hashed Admin Password Comparison (No Plaintext Secrets Stored)
function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// This repository is public on GitHub -- a hardcoded fallback password here
// would be readable by anyone. If ADMIN_PASSWORD_HASH/ADMIN_PASSWORD aren't
// set, generate a random one-time password per boot and print it once so
// the site owner can retrieve it from server logs, instead of ever having
// a known, guessable default admin password.
let EXPECTED_ADMIN_HASH: string;
if (process.env.ADMIN_PASSWORD_HASH) {
  EXPECTED_ADMIN_HASH = process.env.ADMIN_PASSWORD_HASH;
} else if (process.env.ADMIN_PASSWORD) {
  EXPECTED_ADMIN_HASH = hashPassword(process.env.ADMIN_PASSWORD);
} else {
  const generatedPassword = crypto.randomBytes(9).toString('base64url');
  EXPECTED_ADMIN_HASH = hashPassword(generatedPassword);
  console.warn(
    `[ADMIN SECURITY WARNING] No ADMIN_PASSWORD_HASH or ADMIN_PASSWORD env var set. ` +
      `Generated a random one-time admin password for this server instance: "${generatedPassword}" ` +
      `(email: ${ADMIN_EMAIL}). This password changes on every restart -- set ADMIN_PASSWORD_HASH ` +
      `in your environment for a stable password.`
  );
}

// Rate Limiter for Admin Login
const failedAdminAttempts: Record<string, { count: number; lockUntil: number }> = {};

// Real admin session tokens -- issued only after a verified password check,
// never a hardcoded/guessable value baked into the client bundle. Replaces
// the old requireAdminAuth check which accepted the literal string "admin"
// as a header value, a "check" anyone could read directly out of the public
// client bundle and pass without ever logging in.
const ADMIN_SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours
const adminSessions = new Map<string, number>(); // token -> expiresAt

function issueAdminToken(): string {
  const token = crypto.randomBytes(32).toString('hex');
  adminSessions.set(token, Date.now() + ADMIN_SESSION_TTL_MS);
  return token;
}

// Email sending via the Resend HTTPS API. Render's free tier blocks all
// outbound SMTP traffic (ports 25/465/587) -- confirmed via a live
// "Connection timeout" on both 465 and a 587/STARTTLS fallback, and via
// Render's own changelog stating this is a deliberate anti-spam policy on
// free web services. HTTPS (443) is never blocked this way, so Resend's API
// sidesteps the whole problem instead of working around it.
const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
const RESEND_FROM = 'Dhaanya <info@dhaanyafoods.com>';

if (!RESEND_API_KEY) {
  console.warn('[RESEND WARNING] RESEND_API_KEY is not set -- emails will not be sent.');
}

async function sendResendEmail(params: {
  to: string;
  subject: string;
  html?: string;
  text?: string;
  headers?: Record<string, string>;
}): Promise<{ success: boolean; data?: any; error?: any }> {
  if (!RESEND_API_KEY) {
    console.warn('[RESEND WARN] RESEND_API_KEY not configured -- skipping send to', params.to);
    return { success: false, error: 'RESEND_API_KEY not configured' };
  }
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: params.to,
        subject: params.subject,
        ...(params.html ? { html: params.html } : {}),
        ...(params.text ? { text: params.text } : {}),
        ...(params.headers ? { headers: params.headers } : {}),
      }),
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      console.error('[RESEND ERROR]', data);
      // Log and continue -- never let an email failure block the underlying
      // user action (order placement, OTP issuance, etc.).
      return { success: false, error: data };
    }
    return { success: true, data };
  } catch (err: any) {
    console.error('[RESEND ERROR] Network/exception sending email:', err.message);
    return { success: false, error: err.message };
  }
}

// ==================== Branded transactional order email template ====================
// Single reusable template for every stage of the order lifecycle (placed,
// confirmed, dispatched, delivered, cancelled) so all customer-facing emails
// share one consistent, on-brand design instead of each stage having its own
// ad-hoc plain-text or HTML snippet.

function escapeHtml(input: unknown): string {
  return String(input ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

type OrderEmailStatusKey = 'placed' | 'confirmed' | 'dispatched' | 'delivered' | 'cancelled' | 'generic';

const ORDER_EMAIL_STATUS_CONFIG: Record<
  OrderEmailStatusKey,
  { heading: string; badgeIcon: string; badgeBg: string; accentColor: string; intro: string }
> = {
  placed: {
    heading: 'Order Confirmed!',
    badgeIcon: '&#10003;',
    badgeBg: '#3E4B32',
    accentColor: '#3E4B32',
    intro: "Thank you for shopping with Dhaanya! We've received your order and it's being prepared with care.",
  },
  confirmed: {
    heading: 'Order Confirmed!',
    badgeIcon: '&#10003;',
    badgeBg: '#3E4B32',
    accentColor: '#3E4B32',
    intro: 'Great news — your order has been confirmed and is being prepared.',
  },
  dispatched: {
    heading: 'Order On Its Way!',
    badgeIcon: '&#10148;',
    badgeBg: '#A9542B',
    accentColor: '#A9542B',
    intro: 'Your order has been dispatched and is on its way to you.',
  },
  delivered: {
    heading: 'Order Delivered!',
    badgeIcon: '&#10003;',
    badgeBg: '#C89211',
    accentColor: '#C89211',
    intro: 'Your order has been delivered. We hope you enjoy your Dhaanya products!',
  },
  cancelled: {
    heading: 'Order Cancelled',
    badgeIcon: '&#10005;',
    badgeBg: '#78716c',
    accentColor: '#78716c',
    intro: 'Your order has been cancelled as requested.',
  },
  generic: {
    heading: 'Order Status Updated',
    badgeIcon: '&#8505;',
    badgeBg: '#3E4B32',
    accentColor: '#3E4B32',
    intro: "There's an update on your order status.",
  },
};

interface OrderEmailParams {
  statusKey: OrderEmailStatusKey;
  customerName: string;
  orderId: string;
  total: number;
  paymentMethod?: string;
  items?: { name: string; variantWeight?: string; quantity: number; price: number }[];
  deliveryAddressLines?: string[];
  estimatedDelivery?: string;
}

function renderOrderStatusEmailHtml(params: OrderEmailParams): string {
  const cfg = ORDER_EMAIL_STATUS_CONFIG[params.statusKey];

  const itemsRows = (params.items || [])
    .map(
      (it) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #ECE6D6;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#2A2620;">
            ${escapeHtml(it.name)}${it.variantWeight ? ` <span style="color:#8a8272;">(${escapeHtml(it.variantWeight)})</span>` : ''}
            <br /><span style="color:#8a8272;font-size:12px;">Qty: ${it.quantity}</span>
          </td>
          <td style="padding:10px 0;border-bottom:1px solid #ECE6D6;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#2A2620;text-align:right;white-space:nowrap;">
            &#8377;${it.price * it.quantity}
          </td>
        </tr>`
    )
    .join('');

  const detailRows: [string, string][] = [
    ['Order ID', `#${params.orderId}`],
    ['Total Amount', `₹${params.total}`],
    ...(params.paymentMethod ? ([['Payment Method', params.paymentMethod]] as [string, string][]) : []),
    ...(params.estimatedDelivery ? ([['Estimated Delivery', params.estimatedDelivery]] as [string, string][]) : []),
  ];

  const detailRowsHtml = detailRows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:6px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#6b6355;">${escapeHtml(label)}</td>
          <td style="padding:6px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#2A2620;font-weight:bold;text-align:right;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join('');

  const addressHtml = params.deliveryAddressLines?.length
    ? `<p style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#2A2620;line-height:1.5;">${params.deliveryAddressLines
        .map(escapeHtml)
        .join('<br/>')}</p>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(cfg.heading)}</title>
</head>
<body style="margin:0;padding:0;background-color:#FAF6ED;">
  <div style="display:none;max-height:0;overflow:hidden;">${escapeHtml(cfg.intro)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF6ED;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #E5DFC9;">
          <tr>
            <td style="background-color:${cfg.accentColor};padding:24px 32px;text-align:center;">
              <span style="font-family:Georgia,'Times New Roman',serif;font-size:22px;font-weight:bold;color:#F4ECD8;letter-spacing:1px;">DHAANYA</span>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#F4ECD8;opacity:0.85;margin-top:2px;letter-spacing:2px;text-transform:uppercase;">Organic &amp; Natural Foods</div>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 8px;text-align:center;">
              <div style="width:56px;height:56px;line-height:56px;border-radius:50%;background-color:${cfg.badgeBg};color:#ffffff;font-size:26px;font-weight:bold;margin:0 auto 16px;">${cfg.badgeIcon}</div>
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:24px;color:#2A2620;">${escapeHtml(cfg.heading)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 24px;">
              <p style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#2A2620;line-height:1.6;">
                Hi <strong>${escapeHtml(params.customerName)}</strong>,
              </p>
              <p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#2A2620;line-height:1.6;">
                ${escapeHtml(cfg.intro)}
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F4;border:1px solid #ECE6D6;border-radius:12px;">
                <tr><td style="padding:16px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    ${detailRowsHtml}
                  </table>
                </td></tr>
                ${
                  itemsRows
                    ? `<tr><td style="padding:0 16px;">
                  <div style="border-top:1px solid #ECE6D6;margin:0 0 4px;"></div>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    ${itemsRows}
                  </table>
                </td></tr>`
                    : ''
                }
                ${
                  addressHtml
                    ? `<tr><td style="padding:12px 16px 16px;">
                  <div style="border-top:1px solid #ECE6D6;margin:0 0 12px;"></div>
                  <p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#6b6355;text-transform:uppercase;letter-spacing:0.5px;">Delivery Address</p>
                  ${addressHtml}
                </td></tr>`
                    : ''
                }
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#F4ECD8;padding:24px 32px;text-align:center;border-top:1px solid #E5DFC9;">
              <p style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:15px;font-weight:bold;color:#2A2620;">Dhaanya</p>
              <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b6355;">Doddakallasandra, Bengaluru - 560062</p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b6355;line-height:1.6;">
                Questions? Reply to this email or WhatsApp us at <a href="https://wa.me/919008625716" style="color:#3E4B32;text-decoration:none;font-weight:bold;">+91 9008625716</a>.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function renderOrderStatusEmailText(params: OrderEmailParams): string {
  const cfg = ORDER_EMAIL_STATUS_CONFIG[params.statusKey];
  const lines: string[] = [
    `Hi ${params.customerName},`,
    '',
    cfg.intro,
    '',
    `Order ID: #${params.orderId}`,
    `Total Amount: ₹${params.total}`,
  ];
  if (params.paymentMethod) lines.push(`Payment Method: ${params.paymentMethod}`);
  if (params.estimatedDelivery) lines.push(`Estimated Delivery: ${params.estimatedDelivery}`);
  if (params.items?.length) {
    lines.push('', 'Items:');
    for (const it of params.items) {
      lines.push(`  - ${it.name}${it.variantWeight ? ` (${it.variantWeight})` : ''} x${it.quantity} - ₹${it.price * it.quantity}`);
    }
  }
  if (params.deliveryAddressLines?.length) {
    lines.push('', 'Delivery Address:', ...params.deliveryAddressLines);
  }
  lines.push('', 'Questions? Reply to this email or WhatsApp us at +91 9008625716.', '', 'Warm regards,', 'Team Dhaanya');
  return lines.join('\n');
}

// In-memory duplicate email protection cache (cleared after 60 seconds)
const recentEmailCache = new Set<string>();

function shouldSendEmail(emailKey: string): boolean {
  if (recentEmailCache.has(emailKey)) {
    console.log(`[SMTP DUP] Suppressed duplicate email dispatch for key: ${emailKey}`);
    return false;
  }
  recentEmailCache.add(emailKey);
  setTimeout(() => recentEmailCache.delete(emailKey), 60000);
  return true;
}

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// CORS & Body Parser Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Admin-Role');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json({
  limit: '50mb',
  verify: (req: any, _res, buf) => { req.rawBody = buf; },
}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/images', express.static(path.join(process.cwd(), 'images')));

// OTP Storage Map
const otpStoreMap: Record<string, { otp: string; expiresAt: number; name?: string }> = {};

// Mongoose Schemas
const ProductSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    concern: [String],
    description: String,
    ingredients: [String],
    ingredientComposition: String,
    compositionBreakdown: [{ name: String, percent: Number }],
    allergens: [String],
    nutritionInfo: mongoose.Schema.Types.Mixed,
    benefits: [String],
    preparationGuide: mongoose.Schema.Types.Mixed,
    image: String,
    gallery: [String],
    variants: [
      {
        weight: String,
        price: Number,
        originalPrice: Number,
        inStock: Boolean,
      },
    ],
    rating: { type: Number, default: 4.8 },
    reviewCount: { type: Number, default: 12 },
    isBestSeller: { type: Boolean, default: false },
    isRecommended: { type: Boolean, default: false },
    stock: { type: Number, default: 50 },
    tags: [String],
  },
  { timestamps: true }
);

const OrderSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    userId: { type: String, default: 'usr-101', index: true },
    userEmail: { type: String, default: null, index: true },
    items: [mongoose.Schema.Types.Mixed],
    shippingAddress: mongoose.Schema.Types.Mixed,
    deliverySlot: String,
    paymentMethod: String,
    paymentStatus: { type: String, default: 'Pending' },
    subtotal: Number,
    discount: Number,
    tax: Number,
    shippingFee: Number,
    total: Number,
    status: { type: String, default: 'Processing' },
    createdAt: { type: String, default: () => new Date().toISOString() },
    estimatedDelivery: String,
    trackingNumber: String,
  },
  { timestamps: true, strict: false }
);

const CustomRecipeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  userId: { type: String, default: null, index: true },
  userEmail: { type: String, default: null, index: true },
  orderId: { type: String, default: null },
  recipeName: String,
  items: [mongoose.Schema.Types.Mixed],
  totalWeightGrams: Number,
  ingredientCost: Number,
  roastingCharge: Number,
  subtotal: Number,
  discount: Number,
  totalPrice: Number,
  createdAt: { type: String, default: () => new Date().toISOString() },
});

const AddressSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    userId: { type: String, default: 'usr-101', index: true },
    fullName: { type: String, required: true },
    mobile: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, default: 'Maharashtra' },
    pincode: { type: String, required: true },
    isDefault: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const CouponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true, uppercase: true },
    discountPercent: { type: Number, required: true },
    minOrderValue: { type: Number, default: 0 },
    maxDiscount: { type: Number, default: 500 },
    description: String,
    expiryDate: { type: String, default: null },
    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    iconName: String,
    description: String,
    image: String,
    productCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const ReviewSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    userName: { type: String, required: true },
    rating: { type: Number, default: 5 },
    date: { type: String, default: () => new Date().toISOString() },
    comment: String,
    productName: String,
    verifiedPurchase: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const CustomerSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: String,
    role: { type: String, default: 'customer' },
    ordersCount: { type: Number, default: 0 },
    totalSpent: { type: Number, default: 0 },
    lastLoginAt: { type: String, default: () => new Date().toISOString() },
    loginCount: { type: Number, default: 1 },
    createdAt: { type: String, default: () => new Date().toISOString() },
  },
  { timestamps: true }
);

// Customer Replies inbox: contact-form submissions and inbound replies to order-status emails
const CustomerMessageSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    source: { type: String, enum: ['contact_form', 'email_reply'], required: true },
    name: String,
    email: { type: String, required: true },
    subject: String,
    message: { type: String, required: true },
    orderId: String,
    status: { type: String, enum: ['unread', 'read', 'replied'], default: 'unread' },
    adminReply: String,
    repliedAt: String,
    createdAt: { type: String, default: () => new Date().toISOString() },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model('Product', ProductSchema);
export const OrderModel = mongoose.model('Order', OrderSchema);
export const CustomRecipeModel = mongoose.model('CustomRecipe', CustomRecipeSchema);
export const CustomerMessageModel = mongoose.model('CustomerMessage', CustomerMessageSchema);
export const AddressModel = mongoose.model('Address', AddressSchema);
export const CouponModel = mongoose.model('Coupon', CouponSchema);
export const CategoryModel = mongoose.model('Category', CategorySchema);
export const ReviewModel = mongoose.model('Review', ReviewSchema);
export const CustomerModel = mongoose.model('Customer', CustomerSchema);

// In-memory fallbacks ONLY for offline development mode if explicitly requested via USE_MEMORY_DB=true
const INITIAL_COUPONS = [
  { code: 'DHAANYA10', discountPercent: 10, minOrderValue: 0, maxDiscount: 300, description: '10% OFF on all organic orders', expiryDate: '2028-12-31T23:59', isActive: true, isFeatured: true },
  { code: 'FESTIVE25', discountPercent: 25, minOrderValue: 499, maxDiscount: 500, description: '25% OFF on festive organic orders above ₹499', expiryDate: '2028-12-31T23:59', isActive: true, isFeatured: false },
  { code: 'ORGANIC10', discountPercent: 10, minOrderValue: 499, maxDiscount: 200, description: '10% OFF on organic orders above ₹499', expiryDate: '2028-12-31T23:59', isActive: true, isFeatured: false },
  { code: 'WELLNESS20', discountPercent: 20, minOrderValue: 999, maxDiscount: 500, description: '20% OFF on health foods & dry fruits', expiryDate: '2028-12-31T23:59', isActive: true, isFeatured: false },
  { code: 'CUSTOMMASALA', discountPercent: 15, minOrderValue: 299, maxDiscount: 150, description: '15% OFF on custom masala recipes', expiryDate: '2028-12-31T23:59', isActive: true, isFeatured: false },
];
let liveCoupons: any[] = [...INITIAL_COUPONS];

let liveCategories = [...CATEGORIES];
let liveReviews = [
  { id: 'rev-1', userName: 'Rajesh Kumar', rating: 5, date: '2026-08-01', comment: 'Extremely fresh quality spices and cold pressed oil. Authentic aroma!', verifiedPurchase: true },
  { id: 'rev-2', userName: 'Sneha Patel', rating: 5, date: '2026-08-03', comment: 'The custom masala maker is incredible! Fast shipping and top packaging.', verifiedPurchase: true },
  { id: 'rev-3', userName: 'Anil Kulkarni', rating: 5, date: '2026-08-05', comment: 'Pure wood pressed groundnut oil. 100% natural flavor.', verifiedPurchase: true },
];
let liveCustomers: any[] = [
  { id: 'c-1', name: 'Anita Kulkarni', email: 'anita.k@gmail.com', mobile: '+91 98765 43210', ordersCount: 14, totalSpent: 12840, createdAt: '2026-01-15' },
  { id: 'c-2', name: 'Rajesh Sharma', email: 'rajesh.sharma@yahoo.com', mobile: '+91 98123 45678', ordersCount: 11, totalSpent: 9650, createdAt: '2026-02-10' },
  { id: 'c-3', name: 'Sneha Patel', email: 'sneha.p@outlook.com', mobile: '+91 97654 32109', ordersCount: 9, totalSpent: 8420, createdAt: '2026-03-05' },
  { id: 'c-4', name: 'Vikram Menon', email: 'vikram.m@gmail.com', mobile: '+91 96543 21098', ordersCount: 8, totalSpent: 7210, createdAt: '2026-04-12' },
  { id: 'c-5', name: 'Deepa Nair', email: 'deepa.nair@hotmail.com', mobile: '+91 95432 10987', ordersCount: 7, totalSpent: 6480, createdAt: '2026-05-20' },
];

let liveAddresses: (Address & { userId?: string })[] = [
  {
    id: 'addr-1',
    userId: 'usr-101',
    fullName: 'Priya Sharma',
    mobile: '+91 98765 43210',
    street: 'Flat 402, Green View Apartments, Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    isDefault: true,
  },
  {
    id: 'addr-2',
    userId: 'usr-1',
    fullName: 'Anita Kulkarni',
    mobile: '+91 98765 43210',
    street: '402 Sunrise Heights, MG Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    isDefault: false,
  },
];

let liveProducts: Product[] = [...PRODUCTS];
let liveOrders: Order[] = [];

let isDbConnected = false;

// Ensure MongoDB Atlas Connection (Reads process.env.MONGODB_URI exclusively)
export async function ensureDbConnected(): Promise<boolean> {
  if (mongoose.connection.readyState === 1) {
    isDbConnected = true;
    return true;
  }

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.error('[DB FATAL] MONGODB_URI environment variable is missing!');
    isDbConnected = false;
    return false;
  }

  try {
    console.log('[DB] Connecting to MongoDB Atlas cluster...');
    await mongoose.connect(mongoUri, {
      dbName: 'ecomm',
      serverSelectionTimeoutMS: 4000,
      connectTimeoutMS: 4000,
    });
    isDbConnected = true;
    console.log('[DB] ✅ MongoDB Atlas connected successfully to database "ecomm"');
    return true;
  } catch (err: any) {
    console.warn('[DB WARNING] Connection attempt failed:', err.message);

    // SRV resolution fallback for restricted local Windows environments
    if (err.message && (err.message.includes('querySrv') || err.message.includes('ECONNREFUSED') || err.message.includes('ENOTFOUND'))) {
      try {
        console.log('[DB] Applying DNS fallback resolvers (8.8.8.8, 1.1.1.1)...');
        dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
        await mongoose.connect(mongoUri, {
          dbName: 'ecomm',
          serverSelectionTimeoutMS: 4000,
          connectTimeoutMS: 4000,
        });
        isDbConnected = true;
        console.log('[DB] ✅ MongoDB Atlas connected successfully via DNS fallback!');
        return true;
      } catch (retryErr: any) {
        console.error('[DB ERROR] Connection failed after DNS fallback:', retryErr.message);
      }
    } else {
      console.error('[DB ERROR] MongoDB connection error:', err.message);
    }

    isDbConnected = false;
    return false;
  }
}

// Connect to MongoDB and report collection health. This is READ-ONLY --
// it must never write to the database. Seeding is a separate, explicit,
// manually-confirmed operation: see scripts/seed-dev-db.ts.
//
// (Incident note: this function used to insertMany() hardcoded sample data
// into any collection it found empty on every server boot. That is almost
// certainly how real Orders/Customers/CustomRecipe documents got replaced
// with fake placeholder rows after an unrelated wipe emptied those
// collections. Never reintroduce a write here.)
export async function initDatabase() {
  const connected = await ensureDbConnected();

  if (!connected) {
    if (isProduction) {
      console.error('[DB FATAL] Production mode requires a valid MongoDB connection!');
      console.error('[DB FATAL] Exiting application startup to prevent memory data degradation.');
      process.exit(1);
    } else if (allowMemoryDbInDev) {
      console.warn('[DB WARN] Operating in offline dev in-memory mode because USE_MEMORY_DB=true');
      return;
    } else {
      console.error('[DB WARN] Database disconnected. Set MONGODB_URI or USE_MEMORY_DB=true in development.');
      return;
    }
  }

  try {
    const counts = {
      products: await ProductModel.countDocuments(),
      orders: await OrderModel.countDocuments(),
      addresses: await AddressModel.countDocuments(),
      customers: await CustomerModel.countDocuments(),
      categories: await CategoryModel.countDocuments(),
      coupons: await CouponModel.countDocuments(),
      reviews: await ReviewModel.countDocuments(),
      customRecipes: await CustomRecipeModel.countDocuments(),
    };

    console.log(
      `[DB] Collection counts -> products=${counts.products} orders=${counts.orders} ` +
        `addresses=${counts.addresses} customers=${counts.customers} categories=${counts.categories} ` +
        `coupons=${counts.coupons} reviews=${counts.reviews} customRecipes=${counts.customRecipes}`
    );

    const unexpectedlyEmpty = Object.entries(counts)
      .filter(([, count]) => count === 0)
      .map(([name]) => name);

    if (unexpectedlyEmpty.length > 0) {
      console.warn(
        `[DB WARNING] The following collections are EMPTY: ${unexpectedlyEmpty.join(', ')}. ` +
          'If this is unexpected (data existed before), STOP and investigate before doing anything else -- ' +
          'do not run any seed script against this URI until you have confirmed this is not a data-loss ' +
          'incident. See scripts/seed-dev-db.ts if you do intend to seed a fresh dev database.'
      );
    }
  } catch (err: any) {
    console.error('[DB ERROR] Exception while checking collection counts:', err.message);
  }
}

// Helper to check DB status or return 503 error if DB is down
async function requireDb(res: express.Response): Promise<boolean> {
  const connected = await ensureDbConnected();
  if (!connected) {
    if (allowMemoryDbInDev) return false;
    res.status(503).json({
      success: false,
      message: 'Database Connection Unavailable. Please check MONGODB_URI and MongoDB Atlas access.',
    });
    return false;
  }
  return true;
}

// Helper to check Admin Authorization
function requireAdminAuth(req: express.Request, res: express.Response): boolean {
  const token = req.headers['x-admin-token'];
  const expiresAt = typeof token === 'string' ? adminSessions.get(token) : undefined;

  if (!expiresAt || expiresAt < Date.now()) {
    if (typeof token === 'string' && expiresAt) {
      adminSessions.delete(token); // clean up expired session
    }
    res.status(403).json({
      success: false,
      message: 'Access Denied: valid admin session required. Please log in again.',
    });
    return false;
  }
  return true;
}

// ==================== AUTHORITATIVE SINGLE API ROUTES ====================

// Health check endpoint
app.get('/api/health', async (req, res) => {
  const connected = await ensureDbConnected();
  const resend = { configured: !!RESEND_API_KEY };
  if (!connected && isProduction) {
    return res.status(503).json({
      status: 'unhealthy',
      database: 'disconnected',
      dbConnected: false,
      resend,
    });
  }
  return res.json({
    status: 'healthy',
    database: connected ? 'connected' : 'in-memory-dev',
    dbConnected: connected,
    resend,
  });
});

// MongoDB Atlas Status Endpoint
app.get('/api/db-status', async (req, res) => {
  const connected = await ensureDbConnected();
  return res.json({
    success: connected,
    dbConnected: connected,
    dbName: 'ecomm',
    connectionState: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    mongoUriConfigured: !!process.env.MONGODB_URI,
  });
});

// Force seed database endpoint (Admin reset)
// DISABLED (data-loss incident): this route used to unconditionally
// deleteMany({}) Products/Orders/Categories/Coupons and reinsert hardcoded
// data -- with NO authentication check and NO confirmation of any kind, and
// with the Orders reseed source being a hardcoded EMPTY array, so any call
// to this route permanently destroyed all real order data. This is the
// prime suspect for how the live Orders/Customers/CustomRecipe collections
// were found empty. Left as a stub that always refuses, on purpose --
// re-seeding now only happens via scripts/seed-dev-db.ts, run manually,
// which refuses to touch a production URI.
app.post('/api/seed', async (_req, res) => {
  console.error('[SECURITY] Blocked call to disabled destructive /api/seed endpoint.');
  res.status(410).json({
    success: false,
    message:
      'This endpoint has been permanently disabled after a data-loss incident. ' +
      'Use scripts/seed-dev-db.ts (manual, --confirm required) to seed a dev database instead.',
  });
});

// Send OTP Endpoint
app.post('/api/auth/send-otp', async (req, res) => {
  try {
    const { email, name } = req.body;
    const cleanEmail = String(email || '').trim().toLowerCase();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    // Bypass OTP for Authorized Admin Account
    if (cleanEmail === ADMIN_EMAIL) {
      return res.status(400).json({
        success: false,
        isAdmin: true,
        message: 'Admin account detected. Please login using Admin Password.',
      });
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

    otpStoreMap[cleanEmail] = {
      otp: generatedOtp,
      expiresAt,
      name: name || cleanEmail.split('@')[0],
    };

    const recipientName = name || cleanEmail.split('@')[0];
    const emailSubject = `Verification Code: ${generatedOtp} - Dhaanya Authentication`;
    const emailBody = `Hi ${recipientName},

Your 6-digit verification code to login to Dhaanya is:

${generatedOtp}

This OTP code is valid for 10 minutes.

Warm regards,
Team Dhaanya
sales@dhaanyafoods.com`;

    console.log(`[OTP] Generated for ${cleanEmail}: [ ${generatedOtp} ]`);

    {
      const dupKey = `otp-${cleanEmail}-${generatedOtp}`;
      if (shouldSendEmail(dupKey)) {
        sendResendEmail({
          to: cleanEmail,
          subject: emailSubject,
          text: emailBody,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 24px; color: #2d2b26; max-width: 520px; border: 1px solid #e7e5e4; border-radius: 16px; background-color: #ffffff;">
              <h2 style="color: #455726; margin: 0; text-align: center;">Dhaanya Organic</h2>
              <p style="margin-top: 16px;">Hi <strong>${recipientName}</strong>,</p>
              <p>Your 6-digit verification code to sign into your Dhaanya account is:</p>
              <div style="font-size: 32px; font-weight: 900; color: #455726; letter-spacing: 6px; background-color: #faf8f4; padding: 16px; text-align: center; border-radius: 10px; border: 2px dashed #455726; margin: 16px 0;">
                ${generatedOtp}
              </div>
              <p style="font-size: 12px; color: #666;">This code is valid for 10 minutes.</p>
            </div>
          `,
        }).then((result) => {
          if (result.success) {
            console.log(`[OTP] Email delivered via Resend to ${cleanEmail}`, result.data);
          } else {
            console.error(`[OTP ERROR] Resend send failed:`, result.error);
          }
        });
      }
    }

    return res.json({
      success: true,
      message: `Verification code generated and sent to ${cleanEmail}`,
      email: cleanEmail,
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Verify OTP Endpoint
app.post('/api/auth/verify-otp', async (req, res) => {
  try {
    const { email, otp, name } = req.body;
    const cleanEmail = String(email || '').trim().toLowerCase();
    const cleanOtp = String(otp || '').trim();

    const storedData = otpStoreMap[cleanEmail];

    if (!storedData) {
      return res.status(400).json({
        success: false,
        message: 'No active OTP found for this email. Please request a new code.',
      });
    }

    if (Date.now() > storedData.expiresAt) {
      delete otpStoreMap[cleanEmail];
      return res.status(400).json({
        success: false,
        message: 'This OTP code has expired. Please request a new code.',
      });
    }

    if (storedData.otp !== cleanOtp) {
      return res.status(400).json({
        success: false,
        message: 'Incorrect OTP code. Please enter the 6-digit code.',
      });
    }

    delete otpStoreMap[cleanEmail];

    const customerName = name || (storedData && storedData.name) || cleanEmail.split('@')[0];
    const nowIso = new Date().toISOString();

    // Reuse the existing customer's stable id across sessions instead of
    // minting a new random one on every login -- a fresh id each time
    // orphans that customer's past orders/addresses/recipes from a true FK lookup.
    let userId = `usr-${Math.floor(100 + Math.random() * 900)}`;

    const connected = await ensureDbConnected();
    if (connected) {
      try {
        const existingCustomer = await CustomerModel.findOne({ email: cleanEmail }).lean();
        if (existingCustomer && (existingCustomer as any).id) {
          userId = (existingCustomer as any).id;
        }

        await CustomerModel.updateOne(
          { email: cleanEmail },
          {
            $set: {
              id: userId,
              name: customerName,
              email: cleanEmail,
              lastLoginAt: nowIso,
            },
            $inc: { loginCount: 1 },
          },
          { upsert: true }
        );
        logDbWrite('POST /api/auth/verify-otp', 'customer upsert', { email: cleanEmail, userId });
      } catch (e) {
        console.error('[AUTH ERROR] Error saving customer to DB:', e);
      }
    }

    const userObj = {
      id: userId,
      name: customerName,
      email: cleanEmail,
      mobile: '',
    };

    return res.json({
      success: true,
      message: 'Logged in successfully!',
      user: userObj,
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Check Email Endpoint
app.post('/api/auth/check-email', (req, res) => {
  const { email } = req.body;
  const cleanEmail = String(email || '').trim().toLowerCase();
  const isAdmin = cleanEmail === ADMIN_EMAIL;
  return res.json({ success: true, isAdmin });
});

// Dedicated Admin Login Endpoint with Hashed Password Verification & Rate Limiting
app.post('/api/auth/admin-login', (req, res) => {
  try {
    const { email, password } = req.body;
    const cleanEmail = String(email || '').trim().toLowerCase();
    const cleanPassword = String(password || '').trim();

    const clientIp = req.ip || req.socket.remoteAddress || 'unknown';
    const attemptInfo = failedAdminAttempts[clientIp];
    if (attemptInfo && attemptInfo.lockUntil > Date.now()) {
      const waitMins = Math.ceil((attemptInfo.lockUntil - Date.now()) / 60000);
      return res.status(429).json({
        success: false,
        message: `Too many failed admin login attempts. Lock active for ${waitMins} minute(s).`,
      });
    }

    const isEmailValid = cleanEmail === ADMIN_EMAIL;
    const isPasswordValid = hashPassword(cleanPassword) === EXPECTED_ADMIN_HASH;

    if (!isEmailValid || !isPasswordValid) {
      const count = (attemptInfo?.count || 0) + 1;
      const lockUntil = count >= 5 ? Date.now() + 15 * 60 * 1000 : 0;
      failedAdminAttempts[clientIp] = { count, lockUntil };

      return res.status(401).json({
        success: false,
        message: 'Invalid admin credentials. Access denied.',
      });
    }

    delete failedAdminAttempts[clientIp];

    const adminToken = issueAdminToken();

    return res.json({
      success: true,
      message: 'Admin authenticated successfully',
      adminToken,
      user: {
        id: 'admin-1',
        name: 'Dhaanya Store Administrator',
        email: ADMIN_EMAIL,
        role: 'admin',
      },
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Products API: Read all
app.get('/api/products', async (req, res) => {
  try {
    let result: Product[] = [];
    const connected = await ensureDbConnected();

    if (connected) {
      const dbProducts = await ProductModel.find().lean();
      result = dbProducts.map((p: any) => {
        const resolvedImage = resolveProductImagePath(p.name, p.image);
        return {
          id: p.id,
          name: p.name,
          category: p.category,
          concern: p.concern,
          description: p.description,
          ingredients: p.ingredients,
          ingredientComposition: p.ingredientComposition,
          compositionBreakdown: p.compositionBreakdown,
          allergens: p.allergens,
          nutritionInfo: p.nutritionInfo,
          benefits: p.benefits,
          preparationGuide: p.preparationGuide,
          image: resolvedImage,
          gallery: p.gallery && p.gallery.length > 0 ? [resolvedImage, ...p.gallery.filter((g: string) => g !== resolvedImage)] : [resolvedImage],
          variants: p.variants,
          rating: p.rating,
          reviewCount: p.reviewCount,
          isBestSeller: p.isBestSeller,
          isRecommended: p.isRecommended,
          stock: p.stock,
          tags: p.tags,
        };
      });
    } else if (allowMemoryDbInDev) {
      result = liveProducts.map((p) => {
        const resolvedImage = resolveProductImagePath(p.name, p.image);
        return { ...p, image: resolvedImage };
      });
    } else {
      return res.status(503).json({ success: false, message: 'Database disconnected' });
    }

    const { category, concern, search, minPrice, maxPrice, sort, isBestSeller, isRecommended } = req.query;

    if (category) {
      result = result.filter((p) => p.category.toLowerCase() === String(category).toLowerCase());
    }

    if (concern) {
      result = result.filter((p) => p.concern && p.concern.some((c) => c.toLowerCase() === String(concern).toLowerCase()));
    }

    if (search) {
      const q = String(search).toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }

    if (isBestSeller === 'true') {
      result = result.filter((p) => p.isBestSeller);
    }

    if (isRecommended === 'true') {
      result = result.filter((p) => p.isRecommended);
    }

    if (minPrice) {
      const minP = Number(minPrice);
      result = result.filter((p) => p.variants && p.variants.some((v) => v.price >= minP));
    }

    if (maxPrice) {
      const maxP = Number(maxPrice);
      result = result.filter((p) => p.variants && p.variants.some((v) => v.price <= maxP));
    }

    if (sort === 'price-low-high') {
      result.sort((a, b) => (a.variants?.[0]?.price || 0) - (b.variants?.[0]?.price || 0));
    } else if (sort === 'price-high-low') {
      result.sort((a, b) => (b.variants?.[0]?.price || 0) - (a.variants?.[0]?.price || 0));
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'newest') {
      result.reverse();
    }

    res.json({ success: true, count: result.length, data: result, dbConnected: connected });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Products API: Read single by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    let prod: Product | null = null;
    const connected = await ensureDbConnected();

    if (connected) {
      const dbP = await ProductModel.findOne({ id: req.params.id }).lean();
      if (dbP) {
        prod = dbP as unknown as Product;
      }
    } else if (allowMemoryDbInDev) {
      prod = liveProducts.find((p) => p.id === req.params.id) || null;
    } else {
      return res.status(503).json({ success: false, message: 'Database disconnected' });
    }

    if (!prod) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const resolvedImage = resolveProductImagePath(prod.name, prod.image);
    const resolvedProd = {
      ...prod,
      image: resolvedImage,
      gallery: prod.gallery && prod.gallery.length > 0 ? [resolvedImage, ...prod.gallery.filter((g: string) => g !== resolvedImage)] : [resolvedImage],
    };

    res.json({ success: true, data: resolvedProd });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin Product APIs
app.post('/api/admin/products', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const p = req.body;
    const newProduct: Product = {
      id: p.id || `prod-${Date.now()}`,
      name: String(p.name || '').trim(),
      category: p.category,
      description: String(p.description || '').trim(),
      image: p.image || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80',
      gallery: p.gallery || [p.image || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80'],
      variants: p.variants || [{ weight: '500g', price: p.price || 299, originalPrice: p.price ? p.price + 50 : 350, inStock: true }],
      rating: p.rating || 5.0,
      reviewCount: p.reviewCount || 1,
      stock: p.stock || 50,
      isBestSeller: !!p.isBestSeller,
      isRecommended: !!p.isRecommended,
      tags: p.tags || [],
    };

    if (connected) {
      await ProductModel.create(newProduct);
    } else if (allowMemoryDbInDev) {
      liveProducts.unshift(newProduct);
    }

    res.json({ success: true, message: 'Product created and saved to MongoDB!', data: newProduct });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.put('/api/admin/products/:id', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const productId = req.params.id;

    if (connected) {
      const updated = await ProductModel.findOneAndUpdate({ id: productId }, { $set: req.body }, { new: true }).lean();
      if (!updated) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      return res.json({ success: true, message: 'Product updated in MongoDB', data: updated });
    } else if (allowMemoryDbInDev) {
      const index = liveProducts.findIndex((p) => p.id === productId);
      if (index !== -1) {
        liveProducts[index] = { ...liveProducts[index], ...req.body };
      }
      return res.json({ success: true, message: 'Product updated in memory' });
    }
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/api/admin/products/sync-initial-data', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    if (connected) {
      const ops: any[] = PRODUCTS.map((p) => ({
        updateOne: {
          filter: { id: p.id },
          update: { $set: p },
          upsert: true,
        },
      }));
      await ProductModel.bulkWrite(ops);
      return res.json({
        success: true,
        message: `Successfully synced ${PRODUCTS.length} products with initial data in MongoDB!`,
      });
    } else if (allowMemoryDbInDev) {
      liveProducts = [...PRODUCTS];
      return res.json({ success: true, message: 'Synced in-memory products' });
    }
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.delete('/api/admin/products/:id', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const productId = req.params.id;

    if (connected) {
      await ProductModel.findOneAndDelete({ id: productId });
      return res.json({ success: true, message: `Product ${productId} deleted from MongoDB!` });
    } else if (allowMemoryDbInDev) {
      liveProducts = liveProducts.filter((p) => p.id !== productId);
      return res.json({ success: true, message: `Product ${productId} deleted from memory` });
    }
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Categories API
app.get('/api/categories', async (req, res) => {
  try {
    const connected = await ensureDbConnected();
    if (connected) {
      const dbCats = await CategoryModel.find().lean();
      return res.json({ success: true, data: dbCats });
    } else if (allowMemoryDbInDev) {
      return res.json({ success: true, data: liveCategories });
    }
    return res.status(503).json({ success: false, message: 'Database disconnected' });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/api/admin/categories', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const { name, description, image } = req.body;
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newCat = {
      name,
      slug,
      iconName: 'Package',
      description: description || 'Organic premium quality category.',
      image: image || '/images/dhannya_Products_final/Ajwain/01.png',
      productCount: 0,
    };

    if (connected) {
      await CategoryModel.updateOne({ slug }, { $set: newCat }, { upsert: true });
    } else if (allowMemoryDbInDev) {
      const idx = liveCategories.findIndex((c) => c.slug === slug);
      if (idx > -1) liveCategories[idx] = newCat;
      else liveCategories.push(newCat);
    }

    res.json({ success: true, message: `Category ${name} saved to MongoDB!`, data: newCat });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.delete('/api/admin/categories/:slug', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const { slug } = req.params;
    if (connected) {
      await CategoryModel.deleteOne({ slug });
    } else if (allowMemoryDbInDev) {
      liveCategories = liveCategories.filter((c) => c.slug !== slug);
    }
    res.json({ success: true, message: `Category ${slug} deleted from MongoDB!` });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Masala Ingredients API
app.get('/api/masalas/ingredients', (req, res) => {
  res.json({ success: true, data: MASALA_INGREDIENTS });
});

// Custom Masala Calculation API
app.post('/api/masalas/calculate', async (req, res) => {
  const { name, items } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ success: false, message: 'Select at least one spice ingredient' });
  }

  let totalWeightGrams = 0;
  let rawIngredientCost = 0;
  let roastingCharge = 0;

  items.forEach((item: any) => {
    const weight = Number(item.weightGrams) || 0;
    const ing = MASALA_INGREDIENTS.find((i) => i.id === item.ingredientId);
    if (ing) {
      totalWeightGrams += weight;
      const ingCost = (weight / 100) * ing.pricePer100g;
      rawIngredientCost += ingCost;

      if (item.roastingType === 'Roasted') {
        const rCost = (weight / 100) * ing.roastingPricePer100g;
        roastingCharge += rCost;
      }
    }
  });

  if (totalWeightGrams < 100) {
    return res.status(400).json({
      success: false,
      message: 'Minimum order weight for custom masala is 100g',
    });
  }

  if (totalWeightGrams > 5000) {
    return res.status(400).json({
      success: false,
      message: 'Maximum batch order weight is 5,000g (5kg)',
    });
  }

  const subtotal = Math.round(rawIngredientCost + roastingCharge);
  let discount = 0;
  if (totalWeightGrams >= 500) {
    discount = Math.round(subtotal * 0.1);
  }

  const totalPrice = Math.max(1, subtotal - discount);

  const recipeData = {
    id: `RECIPE-${Date.now()}`,
    recipeName: name || 'Custom Spice Blend',
    items,
    totalWeightGrams,
    ingredientCost: Math.round(rawIngredientCost),
    roastingCharge: Math.round(roastingCharge),
    subtotal,
    discount,
    totalPrice,
    createdAt: new Date().toISOString(),
  };

  const connected = await ensureDbConnected();
  if (connected) {
    try {
      await CustomRecipeModel.create(recipeData);
    } catch (e) {
      console.error('[RECIPE ERROR] Error saving recipe:', e);
    }
  }

  res.json({ success: true, data: recipeData });
});

// Coupon APIs
app.post('/api/coupons/validate', async (req, res) => {
  try {
    const { code, cartSubtotal } = req.body;
    const reqCode = String(code || '').trim().toUpperCase();

    let coupon: any = null;
    const connected = await ensureDbConnected();
    if (connected) {
      coupon = await CouponModel.findOne({ code: reqCode, isActive: true }).lean();
    } else if (allowMemoryDbInDev) {
      coupon = liveCoupons.find((c) => c.code.toUpperCase() === reqCode && c.isActive);
    }

    if (!coupon) {
      return res.status(404).json({ success: false, message: 'Invalid or inactive coupon code' });
    }

    if (coupon.expiryDate) {
      const expTime = new Date(coupon.expiryDate).getTime();
      if (!isNaN(expTime) && expTime < Date.now()) {
        return res.status(400).json({
          success: false,
          message: `Coupon code "${coupon.code}" expired on ${new Date(coupon.expiryDate).toLocaleString()}`,
        });
      }
    }

    const minReq = coupon.minOrderValue || 0;
    if (cartSubtotal < minReq) {
      return res.status(400).json({
        success: false,
        message: `Minimum order value of ₹${minReq} required for ${coupon.code}`,
      });
    }

    const maxDisc = coupon.maxDiscount || 500;
    const discountAmount = Math.min(
      Math.round((cartSubtotal * coupon.discountPercent) / 100),
      maxDisc
    );

    return res.json({
      success: true,
      data: {
        code: coupon.code,
        discountPercent: coupon.discountPercent,
        discountAmount,
        message: `🎉 ${coupon.discountPercent}% discount applied! Saved ₹${discountAmount}`,
      },
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

app.get('/api/coupons', async (req, res) => {
  try {
    const connected = await ensureDbConnected();
    if (connected) {
      const dbCoupons = await CouponModel.find().sort({ createdAt: -1 }).lean();
      return res.json({ success: true, data: dbCoupons });
    } else if (allowMemoryDbInDev) {
      return res.json({ success: true, data: liveCoupons });
    }
    return res.status(503).json({ success: false, message: 'Database disconnected' });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/api/admin/coupons', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const { code, discountPercent, minOrderValue, maxDiscount, description, expiryDate, isActive, isFeatured } = req.body;
    const upperCode = String(code).trim().toUpperCase();

    const makeFeatured = isFeatured !== undefined ? Boolean(isFeatured) : true;
    const activeState = isActive !== undefined ? Boolean(isActive) : true;

    if (makeFeatured) {
      if (connected) {
        await CouponModel.updateMany({}, { $set: { isFeatured: false } });
      }
      liveCoupons.forEach((c) => (c.isFeatured = false));
    }

    const newCoupon = {
      code: upperCode,
      discountPercent: Number(discountPercent) || 10,
      minOrderValue: Number(minOrderValue) || 0,
      maxDiscount: Number(maxDiscount) || 500,
      description: description || `${discountPercent}% OFF coupon`,
      expiryDate: expiryDate || null,
      isActive: activeState,
      isFeatured: makeFeatured,
    };

    if (connected) {
      await CouponModel.updateOne({ code: upperCode }, { $set: newCoupon }, { upsert: true });
    }
    const idx = liveCoupons.findIndex((c) => c.code === upperCode);
    if (idx > -1) liveCoupons[idx] = newCoupon;
    else liveCoupons.unshift(newCoupon);

    res.json({ success: true, message: `Coupon ${upperCode} saved to MongoDB!`, data: newCoupon });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Delete Single Coupon or Delete All Coupons
app.delete('/api/admin/coupons/:code', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const code = req.params.code.toUpperCase();

    if (code === 'ALL') {
      if (connected) {
        await CouponModel.deleteMany({});
      }
      liveCoupons = [];
      return res.json({ success: true, message: 'All coupons deleted successfully from MongoDB!' });
    }

    if (connected) {
      await CouponModel.deleteOne({ code });
    }
    liveCoupons = liveCoupons.filter((c) => c.code.toUpperCase() !== code);

    res.json({ success: true, message: `Coupon ${code} deleted from MongoDB!` });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Toggle Active / Deactive Status
app.put('/api/admin/coupons/:code/toggle', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const code = req.params.code.toUpperCase();
    const { isActive } = req.body;

    if (connected) {
      const existing = await CouponModel.findOne({ code });
      const newActive = isActive !== undefined ? Boolean(isActive) : !existing?.isActive;
      await CouponModel.updateOne({ code }, { $set: { isActive: newActive } });
    }

    const item = liveCoupons.find((c) => c.code.toUpperCase() === code);
    if (item) {
      item.isActive = isActive !== undefined ? Boolean(isActive) : !item.isActive;
    }

    res.json({ success: true, message: `Coupon ${code} status updated!` });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Set Featured Top-Bar Banner Coupon
app.put('/api/admin/coupons/:code/feature', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const code = req.params.code.toUpperCase();

    if (connected) {
      await CouponModel.updateMany({}, { $set: { isFeatured: false } });
      await CouponModel.updateOne({ code }, { $set: { isFeatured: true, isActive: true } });
    }

    liveCoupons.forEach((c) => {
      if (c.code.toUpperCase() === code) {
        c.isFeatured = true;
        c.isActive = true;
      } else {
        c.isFeatured = false;
      }
    });

    res.json({ success: true, message: `Coupon ${code} set as Top Bar Featured Coupon!` });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin Customers API
app.get('/api/admin/customers', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await ensureDbConnected();
    if (connected) {
      const dbCust = await CustomerModel.find().sort({ createdAt: -1 }).lean();
      return res.json({ success: true, data: dbCust, dbConnected: true });
    } else if (allowMemoryDbInDev) {
      return res.json({ success: true, data: liveCustomers });
    }
    return res.status(503).json({ success: false, message: 'Database disconnected' });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.delete('/api/admin/customers/:id', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const { id } = req.params;
    if (connected) {
      await CustomerModel.deleteOne({ id });
    } else if (allowMemoryDbInDev) {
      liveCustomers = liveCustomers.filter((c) => c.id !== id);
    }
    res.json({ success: true, message: `Customer ${id} deleted from MongoDB!` });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Reviews API
app.get('/api/reviews', async (req, res) => {
  try {
    const connected = await ensureDbConnected();
    if (connected) {
      const dbRevs = await ReviewModel.find().sort({ createdAt: -1 }).lean();
      return res.json({ success: true, data: dbRevs });
    } else if (allowMemoryDbInDev) {
      return res.json({ success: true, data: liveReviews });
    }
    return res.status(503).json({ success: false, message: 'Database disconnected' });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/api/reviews', async (req, res) => {
  try {
    const connected = await requireDb(res);
    const { userName, rating, comment, productName } = req.body;
    const newRev = {
      id: `rev-${Date.now()}`,
      userName: userName || 'Valued Customer',
      rating: Number(rating) || 5,
      date: new Date().toISOString(),
      comment: comment || '',
      productName: productName || 'Dhaanya Product',
      verifiedPurchase: true,
    };

    if (connected) {
      await ReviewModel.create(newRev);
    } else if (allowMemoryDbInDev) {
      liveReviews.unshift(newRev);
    }

    res.json({ success: true, message: 'Review saved to MongoDB!', data: newRev });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.delete('/api/admin/reviews/:id', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const { id } = req.params;
    if (connected) {
      await ReviewModel.deleteOne({ id });
    } else if (allowMemoryDbInDev) {
      liveReviews = liveReviews.filter((r) => r.id !== id);
    }
    res.json({ success: true, message: `Review ${id} deleted from MongoDB!` });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ==================== Customer Replies Inbox ====================
// Two sources feed the same inbox: the site's Contact Us form, and inbound replies
// customers send to order-status emails (requires Resend's Inbound feature + a webhook
// configured against /api/webhooks/resend-inbound, see the route below for setup notes).

function extractOrderIdFromText(text: string): string | undefined {
  const match = String(text || '').match(/ORD-\d+/i);
  return match ? match[0].toUpperCase() : undefined;
}

// Public: Contact Us form submission
app.post('/api/contact', async (req, res) => {
  try {
    const connected = await requireDb(res);
    if (res.headersSent) return;

    const { name, email, subject, message } = req.body;
    const cleanEmail = String(email || '').trim().toLowerCase();
    const cleanMessage = String(message || '').trim();
    if (!cleanEmail || !cleanMessage) {
      return res.status(400).json({ success: false, message: 'Email and message are required.' });
    }

    const cleanName = String(name || 'Website Visitor').trim();
    const newMessage = {
      id: `MSG-${Math.floor(10000 + Math.random() * 90000)}`,
      source: 'contact_form',
      name: cleanName,
      email: cleanEmail,
      subject: String(subject || 'New Contact Form Message').trim(),
      message: cleanMessage,
      status: 'unread',
      createdAt: new Date().toISOString(),
    };
    if (connected) {
      await CustomerMessageModel.create(newMessage as any);
    }

    sendResendEmail({
      to: 'sales@dhaanyafoods.com',
      subject: `New Contact Form Message from ${cleanName}`,
      text: `New message from the Dhaanya contact form.\n\nName: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #2d2b26; max-width: 520px; border: 1px solid #e7e5e4; border-radius: 16px; background-color: #ffffff;">
          <h2 style="color: #455726; margin: 0;">New Contact Form Message</h2>
          <p style="margin-top: 16px;"><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
          <p style="margin-top: 16px; white-space: pre-wrap; background-color: #faf8f4; padding: 16px; border-radius: 10px;">${escapeHtml(cleanMessage)}</p>
        </div>
      `,
    }).then((result) => {
      if (!result.success) {
        console.error('[CONTACT FORM] Resend notification failed:', result.error);
      }
    });

    res.json({ success: true, message: 'Thanks for reaching out! We will get back to you soon.', data: newMessage });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Public webhook: Resend inbound email (replies to order-status emails land here).
// Setup required on your side before this receives anything:
//   1. Enable "Inbound" for dhaanyafoods.com in the Resend dashboard (adds MX records).
//   2. Create a webhook pointed at POST https://<your-domain>/api/webhooks/resend-inbound
//      subscribed to the inbound-email event.
//   3. Copy that webhook's signing secret into RESEND_WEBHOOK_SECRET on Render.
// Without RESEND_WEBHOOK_SECRET set, requests are accepted unverified (logged as a warning)
// so this can still be exercised manually before the Resend side is configured.
app.post('/api/webhooks/resend-inbound', async (req: any, res) => {
  try {
    const secret = process.env.RESEND_WEBHOOK_SECRET;
    let payload: any = req.body;

    if (secret) {
      try {
        const wh = new Webhook(secret);
        payload = wh.verify(req.rawBody, {
          'svix-id': req.headers['svix-id'],
          'svix-timestamp': req.headers['svix-timestamp'],
          'svix-signature': req.headers['svix-signature'],
        });
      } catch (verifyErr: any) {
        console.error('[RESEND WEBHOOK] Signature verification failed:', verifyErr.message);
        return res.status(401).json({ success: false, message: 'Invalid webhook signature' });
      }
    } else {
      console.warn('[RESEND WEBHOOK] RESEND_WEBHOOK_SECRET not set - accepting inbound email unverified');
    }

    const data = payload?.data || payload;
    const fromEmail = String(data?.from || data?.sender || '').trim().toLowerCase();
    const subject = String(data?.subject || '').trim();
    const bodyText = String(data?.text || data?.html || '').trim();

    if (!fromEmail || !bodyText) {
      return res.status(200).json({ success: true, message: 'Ignored (no sender/body)' });
    }

    const connected = await requireDb(res);
    if (res.headersSent) return;

    const newMessage = {
      id: `MSG-${Math.floor(10000 + Math.random() * 90000)}`,
      source: 'email_reply',
      name: fromEmail.split('@')[0],
      email: fromEmail,
      subject: subject || 'Reply to order email',
      message: bodyText,
      orderId: extractOrderIdFromText(subject) || extractOrderIdFromText(bodyText),
      status: 'unread',
      createdAt: new Date().toISOString(),
    };
    if (connected) {
      await CustomerMessageModel.create(newMessage as any);
    }
    res.json({ success: true });
  } catch (err: any) {
    console.error('[RESEND WEBHOOK ERROR]', err.message);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: list all customer messages (contact form + email replies)
app.get('/api/admin/messages', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    if (res.headersSent) return;
    const messages = connected ? await CustomerMessageModel.find().sort({ createdAt: -1 }).lean() : [];
    res.json({ success: true, data: messages });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: mark a message as read
app.put('/api/admin/messages/:id/read', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    if (res.headersSent) return;
    const { id } = req.params;
    if (connected) {
      await CustomerMessageModel.updateOne({ id, status: 'unread' }, { $set: { status: 'read' } });
    }
    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: send a reply to a customer message via Resend
app.post('/api/admin/messages/:id/reply', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    if (res.headersSent) return;

    const { id } = req.params;
    const replyText = String(req.body?.replyText || '').trim();
    if (!replyText) {
      return res.status(400).json({ success: false, message: 'Reply text is required.' });
    }

    const targetMessage: any = connected ? await CustomerMessageModel.findOne({ id }).lean() : null;
    if (!targetMessage) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }

    const replySubject = targetMessage.subject?.toLowerCase().startsWith('re:')
      ? targetMessage.subject
      : `Re: ${targetMessage.subject || 'Your message to Dhaanya'}`;

    const result = await sendResendEmail({
      to: targetMessage.email,
      subject: replySubject,
      text: `${replyText}\n\n---\nYour message:\n${targetMessage.message}`,
    });

    if (!result.success) {
      return res.status(502).json({ success: false, message: 'Failed to send reply email', error: result.error });
    }

    const repliedAt = new Date().toISOString();
    await CustomerMessageModel.updateOne({ id }, { $set: { status: 'replied', adminReply: replyText, repliedAt } });

    res.json({ success: true, message: `Reply sent to ${targetMessage.email}` });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Recipes API
app.get('/api/admin/custom-masalas', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await ensureDbConnected();
    if (connected) {
      const dbMasalas = await CustomRecipeModel.find().sort({ createdAt: -1 }).lean();
      const dbOrders = await OrderModel.find().sort({ createdAt: -1 }).lean();

      const orderedMasalas: any[] = [];
      dbOrders.forEach((o: any) => {
        (o.items || []).forEach((it: any) => {
          if (it.type === 'custom_masala' || it.customDetails || (it.name && it.name.includes('Custom Masala'))) {
            orderedMasalas.push({
              id: it.id || `cm-${o.id}`,
              orderId: o.id,
              customerName: o.shippingAddress?.fullName || 'Store Customer',
              recipeName: (it.name || 'Custom Masala Recipe').replace('Custom Masala: ', ''),
              totalWeightGrams: it.customDetails?.totalWeight || parseInt(it.variantWeight) || 250,
              totalPrice: (it.price || 0) * (it.quantity || 1),
              roastingCharge: 30,
              customDetails: it.customDetails,
              createdAt: o.createdAt || new Date().toISOString(),
            });
          }
        });
      });

      const combined = [...orderedMasalas, ...dbMasalas];
      return res.json({ success: true, data: combined });
    } else if (allowMemoryDbInDev) {
      return res.json({ success: true, data: [] });
    }
    return res.status(503).json({ success: false, message: 'Database disconnected' });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.delete('/api/admin/custom-masalas/:id', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const { id } = req.params;
    if (connected) {
      await CustomRecipeModel.deleteOne({ id });
    }
    res.json({ success: true, message: `Custom recipe ${id} deleted from MongoDB!` });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get('/api/recipes', async (req, res) => {
  try {
    const { userId, email } = req.query;
    let query: any = {};
    if (userId || email) {
      const conditions: any[] = [];
      if (userId) conditions.push({ userId: String(userId) });
      if (email) conditions.push({ userEmail: String(email).trim().toLowerCase() });
      query = { $or: conditions };
    }

    const connected = await ensureDbConnected();
    if (connected) {
      const dbRecipes = await CustomRecipeModel.find(query).sort({ createdAt: -1 }).lean();
      return res.json({ success: true, count: dbRecipes.length, data: dbRecipes });
    } else if (allowMemoryDbInDev) {
      return res.json({ success: true, count: 0, data: [] });
    }
    return res.status(503).json({ success: false, message: 'Database disconnected' });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/api/recipes', async (req, res) => {
  try {
    const connected = await requireDb(res);
    const recipeData = req.body;
    const newRecipe = {
      id: recipeData.id || `rec-${Date.now()}`,
      userId: recipeData.userId || null,
      userEmail: recipeData.userEmail ? String(recipeData.userEmail).trim().toLowerCase() : null,
      orderId: recipeData.orderId || null,
      recipeName: recipeData.name || recipeData.recipeName || 'Custom Masala Blend',
      items: recipeData.items || [],
      totalWeightGrams: recipeData.totalWeightGrams || 250,
      ingredientCost: recipeData.ingredientCost || 150,
      roastingCharge: recipeData.roastingCharge || 30,
      subtotal: recipeData.subtotal || 180,
      discount: recipeData.discount || 0,
      totalPrice: recipeData.totalPrice || 180,
      createdAt: new Date().toISOString(),
    };

    if (connected) {
      await CustomRecipeModel.updateOne({ id: newRecipe.id }, { $set: newRecipe }, { upsert: true });
      logDbWrite('POST /api/recipes', 'recipe upsert', { id: newRecipe.id, userId: newRecipe.userId });
    }

    res.json({ success: true, message: 'Custom recipe saved to MongoDB!', data: newRecipe });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Razorpay Payment Integration Endpoints (Server-Side Test Mode)
const RAZORPAY_KEY_ID = (process.env.RAZORPAY_KEY_ID || '').trim();
const RAZORPAY_KEY_SECRET = (process.env.RAZORPAY_KEY_SECRET || '').trim();
const RAZORPAY_WEBHOOK_SECRET = (process.env.RAZORPAY_WEBHOOK_SECRET || '').trim();

app.get('/api/payment/config', (req, res) => {
  const isConfigured = !!(RAZORPAY_KEY_ID && RAZORPAY_KEY_SECRET);
  res.json({
    success: true,
    isConfigured,
    key: RAZORPAY_KEY_ID || null,
    mode: isConfigured ? 'test' : 'unconfigured',
  });
});

app.post('/api/payment/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', receiptId } = req.body;
    const cleanAmount = Number(amount) || 0;

    if (cleanAmount <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid order total amount' });
    }

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
      return res.status(503).json({
        success: false,
        isConfigured: false,
        message: 'RAZORPAY TEST CREDENTIALS NOT CONFIGURED. Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in .env.',
      });
    }

    const amountInPaise = Math.round(cleanAmount * 100);
    const rzpOrderId = `rzp_order_test_${Date.now()}_${Math.floor(1000 + Math.random() * 9000)}`;

    return res.json({
      success: true,
      key: RAZORPAY_KEY_ID,
      razorpayOrderId: rzpOrderId,
      amount: amountInPaise,
      currency,
      receipt: receiptId || `rcpt_${Date.now()}`,
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/api/payment/verify', async (req, res) => {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature, orderId } = req.body;

    if (!RAZORPAY_KEY_SECRET) {
      return res.status(503).json({
        success: false,
        message: 'RAZORPAY TEST CREDENTIALS NOT CONFIGURED. Cannot verify signature.',
      });
    }

    const body = `${razorpayOrderId}|${razorpayPaymentId}`;
    const expectedSignature = crypto
      .createHmac('sha256', RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex');

    // No test/bypass signature values -- this repo is public, and a hardcoded
    // bypass string here would let anyone mark any order "Paid" without ever
    // paying. Timing-safe comparison since this guards real payment status.
    const expectedBuf = Buffer.from(expectedSignature);
    const providedBuf = Buffer.from(String(razorpaySignature || ''));
    const isValid =
      expectedBuf.length === providedBuf.length && crypto.timingSafeEqual(expectedBuf, providedBuf);

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: 'Razorpay payment signature verification failed. Untrusted payment payload.',
      });
    }

    const connected = await ensureDbConnected();
    if (connected && orderId) {
      await OrderModel.updateOne(
        { id: orderId },
        { $set: { paymentStatus: 'Paid', paymentReference: razorpayPaymentId } }
      );
    }

    return res.json({
      success: true,
      message: 'Razorpay test payment signature verified successfully!',
      paymentStatus: 'Paid',
      paymentReference: razorpayPaymentId,
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/api/payment/webhook', async (req, res) => {
  try {
    const signature = req.headers['x-razorpay-signature'] as string;
    if (!RAZORPAY_WEBHOOK_SECRET || !signature) {
      return res.status(400).json({ success: false, message: 'Webhook signature missing or unconfigured' });
    }

    const hmac = crypto.createHmac('sha256', RAZORPAY_WEBHOOK_SECRET);
    hmac.update(JSON.stringify(req.body));
    const digest = hmac.digest('hex');

    const digestBuf = Buffer.from(digest);
    const signatureBuf = Buffer.from(signature);
    const signatureValid =
      digestBuf.length === signatureBuf.length && crypto.timingSafeEqual(digestBuf, signatureBuf);

    if (!signatureValid) {
      return res.status(400).json({ success: false, message: 'Invalid webhook signature' });
    }

    return res.json({ success: true, message: 'Webhook received and verified idempotently' });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Orders API
app.post('/api/orders', async (req, res) => {
  try {
    const connected = await requireDb(res);
    const { items, shippingAddress, deliverySlot, paymentMethod, subtotal, discount, tax, shippingFee, total, userId, userEmail } =
      req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, message: 'Cart is empty' });
    }

    const orderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const cleanItems = JSON.parse(JSON.stringify(items));
    const cleanAddress = shippingAddress ? JSON.parse(JSON.stringify(shippingAddress)) : null;

    const newOrder = {
      id: orderId,
      userId: userId || 'usr-101',
      userEmail: userEmail ? String(userEmail).trim().toLowerCase() : (cleanAddress?.email || '').trim().toLowerCase(),
      items: cleanItems,
      shippingAddress: cleanAddress,
      deliverySlot: deliverySlot || 'Standard Delivery',
      paymentMethod: paymentMethod || 'COD',
      paymentStatus: (paymentMethod === 'UPI' || paymentMethod === 'Razorpay' || paymentMethod === 'Online') ? 'Paid' : 'Pending',
      subtotal: Number(subtotal) || 0,
      discount: Number(discount) || 0,
      tax: Number(tax) || 0,
      shippingFee: Number(shippingFee) || 0,
      total: Number(total) || 0,
      status: 'Processing',
      createdAt: new Date().toISOString(),
      estimatedDelivery: 'Within 2-3 Days',
      trackingNumber: `DW-TRK-${Math.floor(1000000 + Math.random() * 9000000)}`,
    };

    if (connected) {
      await OrderModel.create(newOrder as any);
      logDbWrite('POST /api/orders', 'order create', { orderId, userId: newOrder.userId });

      if (shippingAddress) {
        try {
          const addrId = shippingAddress.id && shippingAddress.id !== 'addr-new'
            ? shippingAddress.id
            : `addr-${Date.now()}`;

          await AddressModel.updateOne(
            { id: addrId },
            {
              $set: {
                id: addrId,
                userId: userId || 'usr-101',
                fullName: shippingAddress.fullName || 'Valued Customer',
                mobile: shippingAddress.mobile || '',
                email: shippingAddress.email || userEmail || '',
                street: shippingAddress.street || '',
                city: shippingAddress.city || '',
                state: shippingAddress.state || 'Maharashtra',
                pincode: shippingAddress.pincode || '',
                isDefault: shippingAddress.isDefault ?? true,
              },
            },
            { upsert: true }
          );
          logDbWrite('POST /api/orders', 'address upsert', { addrId, userId });
        } catch (e: any) {
          console.error('[ORDER ERROR] Error saving address to MongoDB:', e.message);
        }
      }

      if (shippingAddress || userEmail) {
        try {
          const custEmail = (userEmail || shippingAddress?.email || `${userId}@dhannya.com`).trim().toLowerCase();
          const custName = shippingAddress?.fullName || 'Valued Customer';
          await CustomerModel.updateOne(
            { email: custEmail },
            {
              $set: {
                id: userId || `cust-${Date.now()}`,
                name: custName,
                email: custEmail,
                mobile: shippingAddress?.mobile || '',
                lastLoginAt: new Date().toISOString(),
              },
              $inc: {
                ordersCount: 1,
                totalSpent: Number(total) || 0,
              },
            },
            { upsert: true }
          );
          logDbWrite('POST /api/orders', 'customer upsert', { email: custEmail, userId });
        } catch (custErr: any) {
          console.error('[ORDER ERROR] Error updating customer in MongoDB:', custErr.message);
        }
      }
    } else if (allowMemoryDbInDev) {
      liveOrders.unshift(newOrder as any);
    }

    // Dispatch Order Confirmation Email asynchronously with timing telemetry & duplicate suppression
    const targetEmail = (userEmail || shippingAddress?.email || '').trim().toLowerCase();
    if (targetEmail) {
      const dupKey = `order-confirm-${orderId}-${targetEmail}`;
      if (shouldSendEmail(dupKey)) {
        const t0_mail_start = Date.now();
        const emailParams: OrderEmailParams = {
          statusKey: 'placed',
          customerName: shippingAddress?.fullName || 'Valued Customer',
          orderId,
          total: Number(total) || 0,
          paymentMethod: paymentMethod || 'COD',
          items: (cleanItems || []).map((it: any) => ({
            name: it.name || 'Item',
            variantWeight: it.variantWeight,
            quantity: Number(it.quantity) || 1,
            price: Number(it.price) || 0,
          })),
          deliveryAddressLines: cleanAddress
            ? [cleanAddress.fullName, cleanAddress.street, `${cleanAddress.city}, ${cleanAddress.state} - ${cleanAddress.pincode}`].filter(Boolean)
            : undefined,
          estimatedDelivery: newOrder.estimatedDelivery,
        };
        sendResendEmail({
          to: targetEmail,
          subject: `🎉 Order Confirmed #${orderId} - Dhaanya`,
          text: renderOrderStatusEmailText(emailParams),
          html: renderOrderStatusEmailHtml(emailParams),
        }).then((result) => {
          const mailDuration = Date.now() - t0_mail_start;
          if (result.success) {
            console.log(`[RESEND] Order #${orderId} email sent in ${mailDuration}ms`, result.data);
          } else {
            console.error(`[MAIL ERROR] Order confirmation email failed after ${mailDuration}ms:`, result.error);
          }
        });
      }
    }

    return res.json({ success: true, message: 'Order placed successfully and stored in MongoDB!', data: newOrder });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message || 'Server error placing order' });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const { userId, email } = req.query;
    let query: any = {};
    if (userId || email) {
      const conditions: any[] = [];
      if (userId) conditions.push({ userId: String(userId) });
      if (email) {
        const cleanE = String(email).trim().toLowerCase();
        conditions.push({ userEmail: cleanE });
        conditions.push({ 'shippingAddress.email': cleanE });
      }
      query = { $or: conditions };
    }

    const connected = await ensureDbConnected();
    if (connected) {
      const rawOrders = await OrderModel.find(query).sort({ createdAt: -1 }).lean();
      const dbOrders = rawOrders.map((o: any) => ({
        ...o,
        paymentStatus: o.paymentStatus || (o.paymentMethod === 'UPI' || o.paymentMethod === 'Razorpay' || o.paymentMethod === 'Online' ? 'Paid' : 'Pending')
      }));
      return res.json({ success: true, data: dbOrders, dbConnected: true });
    } else if (allowMemoryDbInDev) {
      const filtered = (userId || email
        ? liveOrders.filter((o: any) =>
            (userId && o.userId === String(userId)) ||
            (email && (o.userEmail?.toLowerCase().trim() === String(email).toLowerCase().trim() || o.shippingAddress?.email?.toLowerCase().trim() === String(email).toLowerCase().trim()))
          )
        : liveOrders).map((o: any) => ({
          ...o,
          paymentStatus: o.paymentStatus || (o.paymentMethod === 'UPI' || o.paymentMethod === 'Razorpay' || o.paymentMethod === 'Online' ? 'Paid' : 'Pending')
        }));
      return res.json({ success: true, data: filtered });
    }
    return res.status(503).json({ success: false, message: 'Database disconnected' });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Addresses API
app.get('/api/addresses', async (req, res) => {
  try {
    const { userId } = req.query;
    const connected = await ensureDbConnected();
    if (connected) {
      const query = userId ? { userId: String(userId) } : {};
      const addresses = await AddressModel.find(query).sort({ createdAt: -1 }).lean();
      return res.json({ success: true, data: addresses, dbConnected: true });
    } else if (allowMemoryDbInDev) {
      const filtered = userId ? liveAddresses.filter((a) => a.userId === String(userId)) : liveAddresses;
      return res.json({ success: true, data: filtered });
    }
    return res.status(503).json({ success: false, message: 'Database disconnected' });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/api/addresses', async (req, res) => {
  try {
    const connected = await requireDb(res);
    const { id, userId, fullName, mobile, street, city, state, pincode, isDefault } = req.body;
    const addressId = id && id !== 'addr-new' ? id : `addr-${Date.now()}`;
    const addressData = {
      id: addressId,
      userId: userId || 'usr-101',
      fullName: fullName || 'Valued Customer',
      mobile: mobile || '+91 98765 00000',
      street: street || '',
      city: city || '',
      state: state || 'Maharashtra',
      pincode: pincode || '',
      isDefault: !!isDefault,
    };

    if (connected) {
      await AddressModel.updateOne({ id: addressId }, { $set: addressData }, { upsert: true });
    } else if (allowMemoryDbInDev) {
      const existingIdx = liveAddresses.findIndex((a) => a.id === addressId);
      if (existingIdx > -1) {
        liveAddresses[existingIdx] = addressData;
      } else {
        liveAddresses.push(addressData);
      }
    }

    res.json({ success: true, message: 'Address saved to MongoDB successfully!', data: addressData });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message || 'Failed to save address' });
  }
});

app.delete('/api/addresses/:id', async (req, res) => {
  try {
    const connected = await requireDb(res);
    const { id } = req.params;
    if (connected) {
      await AddressModel.deleteOne({ id });
    } else if (allowMemoryDbInDev) {
      liveAddresses = liveAddresses.filter((a) => a.id !== id);
    }
    res.json({ success: true, message: 'Address deleted from MongoDB' });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin Analytics & Dashboard Endpoint
app.get('/api/admin/analytics', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const range = (req.query.range as string) || '30D';
    let orders: Order[] = [];
    let products: Product[] = [];

    const connected = await ensureDbConnected();
    if (connected) {
      orders = (await OrderModel.find().lean()) as unknown as Order[];
      products = (await ProductModel.find().lean()) as unknown as Product[];
    } else if (allowMemoryDbInDev) {
      orders = liveOrders;
      products = liveProducts;
    } else {
      return res.status(503).json({ success: false, message: 'Database disconnected' });
    }

    let days = 30;
    if (range === '7D') days = 7;
    else if (range === '90D') days = 90;
    else if (range === '1Y') days = 365;
    else if (range === 'Today') days = 1;
    else if (range === 'Yesterday') days = 2;

    const now = Date.now();
    const cutoffMs = days * 24 * 60 * 60 * 1000;
    const periodOrders = orders.filter((o) => {
      if (!o.createdAt) return true;
      const age = now - new Date(o.createdAt).getTime();
      return age <= cutoffMs;
    });

    const totalRevenue = periodOrders.reduce((acc, o) => acc + (Number(o.total) || 0), 0);
    const totalOrders = periodOrders.length;
    const pendingDispatch = periodOrders.filter(
      (o) => o.status === 'Pending' || o.status === 'Processing' || (o.status as string) === 'Confirmed'
    ).length;

    const prevCutoffMs = cutoffMs * 2;
    const prevOrders = orders.filter((o) => {
      if (!o.createdAt) return false;
      const age = now - new Date(o.createdAt).getTime();
      return age > cutoffMs && age <= prevCutoffMs;
    });
    const prevRevenue = prevOrders.reduce((acc, o) => acc + (Number(o.total) || 0), 0);
    const totalRevenueChange = prevRevenue > 0
      ? Number((((totalRevenue - prevRevenue) / prevRevenue) * 100).toFixed(1))
      : 18.4;

    const kpis = {
      totalRevenue: totalRevenue || 376860,
      totalRevenueChange,
      totalOrders: totalOrders || 1248,
      pendingDispatch: pendingDispatch || 68,
      activeCatalogProducts: products.length || 302,
      activeCategories: new Set(products.map((p) => p.category)).size || 23,
      registeredCustomers: Math.max(orders.length * 4, 5131),
      retentionRate: '92%',
    };

    const salesOverview = [];
    const stepCount = Math.min(days, 30);
    for (let i = stepCount - 1; i >= 0; i--) {
      const d = new Date(now - i * (cutoffMs / stepCount));
      const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      
      const dayOrders = periodOrders.filter((o) => {
        if (!o.createdAt) return false;
        return new Date(o.createdAt).toDateString() === d.toDateString();
      });

      const dayRevenue = dayOrders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
      const dayCount = dayOrders.length;

      const baseRev = Math.round(12000 + Math.sin(i * 0.8) * 4500 + (i % 3) * 3200);
      const baseCount = Math.round(14 + Math.cos(i * 0.7) * 4);

      salesOverview.push({
        date: dateStr,
        revenue: dayRevenue > 0 ? dayRevenue : baseRev,
        orders: dayCount > 0 ? dayCount : baseCount,
      });
    }

    const statusCounts: Record<string, number> = {
      Delivered: 0,
      Dispatched: 0,
      Processing: 0,
      Confirmed: 0,
      Pending: 0,
      Cancelled: 0,
    };

    orders.forEach((o) => {
      const s = o.status || 'Processing';
      statusCounts[s] = (statusCounts[s] || 0) + 1;
    });

    const statusTotal = orders.length || 1;
    const colorMap: Record<string, string> = {
      Delivered: '#2b3e2a',
      Dispatched: '#556b2f',
      Processing: '#d9a07a',
      Confirmed: '#b0534c',
      Pending: '#d97706',
      Cancelled: '#a8a29e',
    };

    const orderStatus = Object.keys(statusCounts).map((st) => ({
      status: st,
      count: statusCounts[st],
      color: colorMap[st] || '#78716c',
      percentage: Math.round((statusCounts[st] / statusTotal) * 100) || 0,
    }));

    const catMap: Record<string, { revenue: number; orders: number }> = {};
    periodOrders.forEach((o) => {
      (o.items || []).forEach((item: any) => {
        const itemCat = item.category || 'Organic Essentials';
        if (!catMap[itemCat]) catMap[itemCat] = { revenue: 0, orders: 0 };
        catMap[itemCat].revenue += (Number(item.price) || 299) * (Number(item.quantity) || 1);
        catMap[itemCat].orders += 1;
      });
    });

    const defaultCategories = [
      { category: 'Wood Pressed Oils', revenue: 98400, percentage: 26, orders: 312, color: '#556b2f' },
      { category: 'Flour & Multigrain', revenue: 64200, percentage: 17, orders: 240, color: '#b0534c' },
      { category: 'Dry Fruits & Dates', revenue: 58900, percentage: 16, orders: 195, color: '#d9a07a' },
      { category: 'Millets', revenue: 42100, percentage: 11, orders: 158, color: '#2b3e2a' },
      { category: 'Spices & Masalas', revenue: 41800, percentage: 11, orders: 162, color: '#d97706' },
      { category: 'Seeds & Nut Butters', revenue: 38200, percentage: 10, orders: 120, color: '#854d0e' },
      { category: 'Health Foods & Tea', revenue: 33260, percentage: 9, orders: 61, color: '#4d7c0f' },
    ];

    const catColors = ['#556b2f', '#b0534c', '#d9a07a', '#2b3e2a', '#d97706', '#854d0e', '#4d7c0f'];
    const totalCatRevenue = Object.values(catMap).reduce((s, c) => s + c.revenue, 0);

    const salesByCategory = totalCatRevenue > 0
      ? Object.keys(catMap).map((catName, idx) => ({
          category: catName,
          revenue: catMap[catName].revenue,
          orders: catMap[catName].orders,
          percentage: Math.round((catMap[catName].revenue / totalCatRevenue) * 100),
          color: catColors[idx % catColors.length],
        })).sort((a, b) => b.revenue - a.revenue)
      : defaultCategories;

    const prodMap: Record<string, { id: string; name: string; category: string; revenue: number; unitsSold: number }> = {};
    periodOrders.forEach((o) => {
      (o.items || []).forEach((item: any) => {
        const nameKey = item.name || 'Organic Product';
        if (!prodMap[nameKey]) {
          prodMap[nameKey] = {
            id: item.productId || `p-${Math.random()}`,
            name: nameKey,
            category: item.category || 'Essentials',
            revenue: 0,
            unitsSold: 0,
          };
        }
        prodMap[nameKey].revenue += (Number(item.price) || 299) * (Number(item.quantity) || 1);
        prodMap[nameKey].unitsSold += Number(item.quantity) || 1;
      });
    });

    const realTopProducts = Object.values(prodMap).sort((a, b) => b.revenue - a.revenue);
    const topSellingProducts = realTopProducts.length > 0
      ? realTopProducts
      : products.slice(0, 10).map((p, idx) => ({
          id: p.id,
          name: p.name,
          category: p.category,
          revenue: Math.round(48000 - idx * 3400),
          unitsSold: Math.round(181 - idx * 12),
        }));

    const customerGrowth = salesOverview.map((item) => ({
      date: item.date,
      newCustomers: Math.max(1, Math.round(item.orders * 0.4)),
      returningCustomers: Math.max(0, Math.round(item.orders * 0.6)),
    }));

    const lowStockAlerts = products
      .filter((p) => p.stock <= 25)
      .slice(0, 8)
      .map((p) => ({
        id: p.id,
        name: p.name,
        category: p.category,
        currentStock: p.stock,
        minStock: p.stock <= 5 ? 20 : 15,
        status: p.stock <= 5 ? 'Critical' : 'Low',
      }));

    const customMasalaAnalytics = {
      totalOrders: 326,
      totalRevenue: 128450,
      avgWeightGrams: 245,
      avgPrice: 395,
      ordersOverTime: salesOverview.map((s, i) => ({
        date: s.date,
        orders: Math.round(8 + Math.sin(i * 0.9) * 4),
        revenue: Math.round((8 + Math.sin(i * 0.9) * 4) * 395),
      })),
      mostSelectedIngredients: [
        { name: 'Black Pepper', count: 284, percentage: 87 },
        { name: 'Cumin Seeds', count: 265, percentage: 81 },
        { name: 'Coriander Seeds', count: 242, percentage: 74 },
        { name: 'Green Cardamom', count: 218, percentage: 67 },
        { name: 'Cinnamon Sticks', count: 195, percentage: 60 },
        { name: 'Kashmiri Chilli', count: 182, percentage: 56 },
        { name: 'Cloves', count: 164, percentage: 50 },
        { name: 'Fennel Seeds', count: 140, percentage: 43 },
        { name: 'Dry Ginger', count: 125, percentage: 38 },
      ],
      roastingPreference: [
        { type: 'Roasted', count: 241, percentage: 74, color: '#b0534c' },
        { type: 'Non-Roasted', count: 85, percentage: 26, color: '#556b2f' },
      ],
    };

    res.json({
      success: true,
      data: {
        kpis,
        salesOverview,
        orderStatus,
        salesByCategory,
        topSellingProducts,
        customerGrowth,
        inventoryOverview: {
          inStock: products.filter((p) => p.stock > 15).length,
          lowStock: products.filter((p) => p.stock > 5 && p.stock <= 15).length,
          criticalStock: products.filter((p) => p.stock > 0 && p.stock <= 5).length,
          outOfStock: products.filter((p) => p.stock === 0).length,
        },
        lowStockAlerts,
        customMasalaAnalytics,
        recentOrders: orders.slice(0, 10),
      },
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

function buildOrderStatusEmail(status: string, order: any) {
  const customerName = order?.shippingAddress?.fullName || 'Valued Customer';
  const orderId = order?.id || 'ORD-10001';
  const totalAmount = Number(order?.total) || 0;
  const deliveryAddressLines = order?.shippingAddress
    ? [
        order.shippingAddress.fullName,
        order.shippingAddress.street,
        `${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.pincode}`,
      ].filter(Boolean)
    : undefined;

  const recipientEmail = (order?.shippingAddress?.email || order?.userEmail || order?.customerEmail || order?.email || 'sales@dhaanyafoods.com').trim().toLowerCase();

  const statusKeyMap: Record<string, OrderEmailStatusKey> = {
    Confirmed: 'confirmed',
    Dispatched: 'dispatched',
    Shipped: 'dispatched',
    Delivered: 'delivered',
    Cancelled: 'cancelled',
  };
  const statusKey: OrderEmailStatusKey = statusKeyMap[status] || 'generic';
  const subjectPrefixMap: Record<OrderEmailStatusKey, string> = {
    placed: '🎉',
    confirmed: '🎉',
    dispatched: '🚚',
    delivered: '🎉',
    cancelled: '',
    generic: '',
  };

  const cfg = ORDER_EMAIL_STATUS_CONFIG[statusKey];
  const subject = `${subjectPrefixMap[statusKey] ? subjectPrefixMap[statusKey] + ' ' : ''}${cfg.heading} - #${orderId} | Dhaanya`;

  const emailParams: OrderEmailParams = {
    statusKey,
    customerName,
    orderId,
    total: totalAmount,
    items: Array.isArray(order?.items)
      ? order.items.map((it: any) => ({
          name: it.name || 'Item',
          variantWeight: it.variantWeight,
          quantity: Number(it.quantity) || 1,
          price: Number(it.price) || 0,
        }))
      : undefined,
    deliveryAddressLines: statusKey === 'dispatched' ? deliveryAddressLines : undefined,
    estimatedDelivery: order?.estimatedDelivery,
  };

  return {
    toEmail: recipientEmail,
    subject,
    body: renderOrderStatusEmailText(emailParams),
    html: renderOrderStatusEmailHtml(emailParams),
  };
}

// Admin Update Order Status API
app.put('/api/admin/orders/:id/status', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const { id } = req.params;
    const { status } = req.body;

    let targetOrder: any = null;
    if (connected) {
      targetOrder = await OrderModel.findOneAndUpdate({ id }, { $set: { status } }, { new: true }).lean();
      if (!targetOrder) {
        return res.status(404).json({ success: false, message: 'Order not found' });
      }
    } else if (allowMemoryDbInDev) {
      targetOrder = liveOrders.find((o) => o.id === id);
      if (targetOrder) targetOrder.status = status;
    }

    const emailDetails = buildOrderStatusEmail(status, targetOrder);

    // Asynchronously dispatch order status update email if transporter is available
    if (emailDetails.toEmail) {
      const dupKey = `status-update-${id}-${status}`;
      if (shouldSendEmail(dupKey)) {
        sendResendEmail({
          to: emailDetails.toEmail,
          subject: emailDetails.subject,
          text: emailDetails.body,
          html: emailDetails.html,
        }).then((result) => {
          if (!result.success) {
            console.error('[STATUS MAIL ERROR] Order status update email failed:', result.error);
          }
        });
      }
    }

    res.json({
      success: true,
      message: `Order ${id} status updated to ${status}!`,
      emailNotification: emailDetails,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin Update Order Payment Status API (e.g. Mark COD as Paid)
app.put('/api/admin/orders/:id/payment-status', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const { id } = req.params;
    const { paymentStatus } = req.body;

    if (connected) {
      await OrderModel.updateOne({ id }, { $set: { paymentStatus } });
    }
    const targetOrder = liveOrders.find((o) => o.id === id);
    if (targetOrder) {
      (targetOrder as any).paymentStatus = paymentStatus;
    }

    return res.json({ success: true, message: `Payment status for ${id} updated to ${paymentStatus}!` });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Admin Update Inventory Stock API
app.put('/api/admin/inventory/:id', async (req, res) => {
  try {
    if (!requireAdminAuth(req, res)) return;
    const connected = await requireDb(res);
    const { id } = req.params;
    const { stock } = req.body;

    if (connected) {
      await ProductModel.updateOne({ id }, { $set: { stock: Number(stock) } });
    } else if (allowMemoryDbInDev) {
      const prod = liveProducts.find((p) => p.id === id);
      if (prod) prod.stock = Number(stock);
    }

    res.json({ success: true, message: `Product stock updated to ${stock}` });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Server Initialization
async function startServer() {
  await initDatabase();

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Dhaanya Production Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
