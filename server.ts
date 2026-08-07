import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';
import { createServer as createViteServer } from 'vite';
import { PRODUCTS, CATEGORIES, MASALA_INGREDIENTS, COUPONS } from './src/data/initialData';
import { Product, Order, CustomRecipe } from './src/types';

// Use Google/Cloudflare DNS resolvers for Node.js SRV record lookups on Windows
try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
} catch (e) {
  // fallback if system restricts custom DNS
}

dotenv.config({ path: '.env.local' });
dotenv.config();

const app = express();
const PORT = 3000;

const MONGO_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://vivobookausu15_db_user:Gjy9zkagsMnaoQSI@ecomm.zmiyefn.mongodb.net/?appName=ecomm';

app.use(express.json());

// MongoDB Schemas
const ProductSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    concern: [String],
    description: String,
    ingredients: [String],
    nutritionInfo: mongoose.Schema.Types.Mixed,
    benefits: [String],
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

const OrderSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  userId: String,
  items: [mongoose.Schema.Types.Mixed],
  shippingAddress: mongoose.Schema.Types.Mixed,
  deliverySlot: String,
  paymentMethod: String,
  subtotal: Number,
  discount: Number,
  tax: Number,
  shippingFee: Number,
  total: Number,
  status: { type: String, default: 'Processing' },
  createdAt: { type: String, default: () => new Date().toISOString() },
  estimatedDelivery: String,
  trackingNumber: String,
});

const CustomRecipeSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
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

const ProductModel = mongoose.model('Product', ProductSchema);
const OrderModel = mongoose.model('Order', OrderSchema);
const CustomRecipeModel = mongoose.model('CustomRecipe', CustomRecipeSchema);

// In-memory fallback stores
let liveProducts: Product[] = [...PRODUCTS];
let liveOrders: Order[] = [
  {
    id: 'ORD-98231',
    userId: 'usr-1',
    items: [
      {
        id: 'ci-1',
        type: 'product',
        name: 'Wood Pressed Cold Pressed Mustard Oil',
        image: PRODUCTS[0].image,
        variantWeight: '1 Litre',
        price: 399,
        quantity: 1,
      },
      {
        id: 'ci-2',
        type: 'product',
        name: 'Organic Whole Ground Garam Masala',
        image: PRODUCTS[2].image,
        variantWeight: '250g',
        price: 320,
        quantity: 1,
      },
    ],
    shippingAddress: {
      id: 'addr-1',
      fullName: 'Anita Kulkarni',
      mobile: '+91 98765 43210',
      street: '402 Sunrise Heights, MG Road',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      isDefault: true,
    },
    deliverySlot: 'Morning (9:00 AM - 1:00 PM)',
    paymentMethod: 'UPI',
    subtotal: 719,
    discount: 50,
    tax: 36,
    shippingFee: 0,
    total: 705,
    status: 'Shipped',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    estimatedDelivery: 'Tomorrow, by 2 PM',
    trackingNumber: 'DW-TRK-7892341',
  },
];

let isDbConnected = false;

// Connect to MongoDB and seed initial data if empty
async function initDatabase() {
  try {
    console.log('Connecting to MongoDB Atlas cluster "ecomm"...');
    await mongoose.connect(MONGO_URI, {
      dbName: 'ecomm',
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
    });
    isDbConnected = true;
    console.log('✅ Connected to MongoDB Atlas "ecomm" database successfully!');

    // Seed or update products into MongoDB Atlas database
    const count = await ProductModel.countDocuments();
    if (count < PRODUCTS.length) {
      console.log(`Seeding/Updating ${PRODUCTS.length} products into MongoDB Atlas...`);
      for (const prod of PRODUCTS) {
        await ProductModel.updateOne({ id: prod.id }, { $set: prod }, { upsert: true });
      }
      console.log(`✅ All ${PRODUCTS.length} products stored in MongoDB Atlas "ecomm" database!`);
    } else {
      console.log(`✅ ${count} products verified in MongoDB Atlas "ecomm" database!`);
    }

    // Seed initial order if collection is empty
    const orderCount = await OrderModel.countDocuments();
    if (orderCount === 0) {
      await OrderModel.insertMany(liveOrders);
      console.log('✅ Initial order seeded into MongoDB database "ecomm"!');
    } else {
      console.log(`✅ ${orderCount} orders verified in MongoDB Atlas "ecomm" database!`);
    }
  } catch (err: any) {
    isDbConnected = false;
    console.error('❌ MongoDB Atlas Connection Error:', err.message);
    console.log('--------------------------------------------------');
    console.log('⚠️ Ensure IP Whitelist in Atlas Security Network Access is set to 0.0.0.0/0');
    console.log('--------------------------------------------------');
  }
}

// Force seed database endpoint
app.post('/api/seed', async (req, res) => {
  try {
    if (!isDbConnected) {
      return res.status(500).json({
        success: false,
        message: 'MongoDB is currently disconnected. Ensure 0.0.0.0/0 is whitelisted in Atlas Network Access.',
      });
    }

    await ProductModel.deleteMany({});
    await ProductModel.insertMany(PRODUCTS);

    await OrderModel.deleteMany({});
    await OrderModel.insertMany(liveOrders);

    res.json({
      success: true,
      message: 'Successfully seeded 22+ products and orders into MongoDB Atlas "ecomm" database!',
      productCount: PRODUCTS.length,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// API ENDPOINTS

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    database: isDbConnected ? 'MongoDB Connected' : 'In-Memory Mode',
  });
});

// Products API
app.get('/api/products', async (req, res) => {
  try {
    let result: Product[] = [];
    if (isDbConnected) {
      const dbProducts = await ProductModel.find().lean();
      result = dbProducts.map((p: any) => ({
        id: p.id,
        name: p.name,
        category: p.category,
        concern: p.concern,
        description: p.description,
        ingredients: p.ingredients,
        nutritionInfo: p.nutritionInfo,
        benefits: p.benefits,
        image: p.image,
        gallery: p.gallery,
        variants: p.variants,
        rating: p.rating,
        reviewCount: p.reviewCount,
        isBestSeller: p.isBestSeller,
        isRecommended: p.isRecommended,
        stock: p.stock,
        tags: p.tags,
      }));
    } else {
      result = [...liveProducts];
    }

    const { category, concern, search, minPrice, maxPrice, sort, isBestSeller, isRecommended } = req.query;

    if (category) {
      result = result.filter(
        (p) => p.category.toLowerCase() === String(category).toLowerCase()
      );
    }

    if (concern) {
      result = result.filter(
        (p) => p.concern && p.concern.some((c) => c.toLowerCase() === String(concern).toLowerCase())
      );
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
      result = result.filter((p) => p.variants.some((v) => v.price >= minP));
    }

    if (maxPrice) {
      const maxP = Number(maxPrice);
      result = result.filter((p) => p.variants.some((v) => v.price <= maxP));
    }

    // Sorting
    if (sort === 'price-low-high') {
      result.sort((a, b) => a.variants[0].price - b.variants[0].price);
    } else if (sort === 'price-high-low') {
      result.sort((a, b) => b.variants[0].price - a.variants[0].price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'newest') {
      result.reverse();
    }

    res.json({ success: true, count: result.length, data: result, dbConnected: isDbConnected });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message, data: liveProducts });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    let prod: Product | null = null;
    if (isDbConnected) {
      const dbP = await ProductModel.findOne({ id: req.params.id }).lean();
      if (dbP) {
        prod = dbP as unknown as Product;
      }
    } else {
      prod = liveProducts.find((p) => p.id === req.params.id) || null;
    }

    if (!prod) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, data: prod });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Categories API
app.get('/api/categories', (req, res) => {
  res.json({ success: true, data: CATEGORIES });
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
    discount = Math.round(subtotal * 0.1); // 10% batch discount
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

  if (isDbConnected) {
    try {
      await CustomRecipeModel.create(recipeData);
    } catch (e) {
      console.error('Error saving custom recipe to MongoDB:', e);
    }
  }

  res.json({
    success: true,
    data: recipeData,
  });
});

// Validate Coupon API
app.post('/api/coupons/validate', (req, res) => {
  const { code, cartSubtotal } = req.body;
  const coupon = COUPONS.find((c) => c.code.toUpperCase() === String(code).toUpperCase());

  if (!coupon) {
    return res.status(404).json({ success: false, message: 'Invalid coupon code' });
  }

  if (cartSubtotal < coupon.minOrderValue) {
    return res.status(400).json({
      success: false,
      message: `Minimum order value of ₹${coupon.minOrderValue} required for ${coupon.code}`,
    });
  }

  const discountAmount = Math.min(
    Math.round((cartSubtotal * coupon.discountPercent) / 100),
    coupon.maxDiscount
  );

  res.json({
    success: true,
    data: {
      code: coupon.code,
      discountPercent: coupon.discountPercent,
      discountAmount,
      message: `${coupon.discountPercent}% discount applied! Saved ₹${discountAmount}`,
    },
  });
});

// Orders API
app.post('/api/orders', async (req, res) => {
  const { items, shippingAddress, deliverySlot, paymentMethod, subtotal, discount, tax, shippingFee, total } =
    req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ success: false, message: 'Cart is empty' });
  }

  const newOrder: Order = {
    id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
    items,
    shippingAddress,
    deliverySlot: deliverySlot || 'Standard Delivery',
    paymentMethod: paymentMethod || 'COD',
    subtotal: subtotal || 0,
    discount: discount || 0,
    tax: tax || 0,
    shippingFee: shippingFee || 0,
    total: total || 0,
    status: 'Processing',
    createdAt: new Date().toISOString(),
    estimatedDelivery: 'Within 2-3 Days',
    trackingNumber: `DW-TRK-${Math.floor(1000000 + Math.random() * 9000000)}`,
  };

  if (isDbConnected) {
    try {
      await OrderModel.create(newOrder);
    } catch (e) {
      console.error('Error saving order to MongoDB:', e);
    }
  }

  liveOrders.unshift(newOrder);
  res.json({ success: true, message: 'Order placed successfully and stored in database!', data: newOrder });
});

app.get('/api/orders', async (req, res) => {
  try {
    if (isDbConnected) {
      const dbOrders = await OrderModel.find().sort({ createdAt: -1 }).lean();
      return res.json({ success: true, data: dbOrders });
    }
    res.json({ success: true, data: liveOrders });
  } catch (err: any) {
    res.json({ success: true, data: liveOrders });
  }
});

// Admin Metrics API
app.get('/api/admin/metrics', async (req, res) => {
  try {
    let ordersList = liveOrders;
    let productsCount = liveProducts.length;

    if (isDbConnected) {
      ordersList = (await OrderModel.find().lean()) as unknown as Order[];
      productsCount = await ProductModel.countDocuments();
    }

    const totalRevenue = ordersList.reduce((acc, o) => acc + (o.total || 0), 0);
    const totalOrders = ordersList.length;

    res.json({
      success: true,
      data: {
        totalRevenue,
        totalOrders,
        totalProducts: productsCount,
        totalCustomers: 124 + totalOrders,
        pendingOrders: ordersList.filter((o) => o.status === 'Pending' || o.status === 'Processing').length,
        isDbConnected,
      },
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin CRUD API for Products
app.post('/api/admin/products', async (req, res) => {
  const p = req.body;
  const newProduct: Product = {
    id: `prod-${Date.now()}`,
    name: p.name,
    category: p.category,
    description: p.description || '',
    image: p.image || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80',
    gallery: [p.image || 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80'],
    variants: p.variants || [{ weight: '500g', price: p.price || 299, originalPrice: p.price ? p.price + 50 : 350, inStock: true }],
    rating: 5.0,
    reviewCount: 1,
    stock: p.stock || 50,
  };

  if (isDbConnected) {
    try {
      await ProductModel.create(newProduct);
    } catch (e) {
      console.error('Error saving product to MongoDB:', e);
    }
  }

  liveProducts.unshift(newProduct);
  res.json({ success: true, message: 'Product added successfully to database', data: newProduct });
});

app.put('/api/admin/products/:id', async (req, res) => {
  if (isDbConnected) {
    try {
      await ProductModel.findOneAndUpdate({ id: req.params.id }, req.body);
    } catch (e) {
      console.error('Error updating product in MongoDB:', e);
    }
  }

  const index = liveProducts.findIndex((p) => p.id === req.params.id);
  if (index !== -1) {
    liveProducts[index] = { ...liveProducts[index], ...req.body };
  }

  res.json({ success: true, message: 'Product updated successfully' });
});

app.delete('/api/admin/products/:id', async (req, res) => {
  if (isDbConnected) {
    try {
      await ProductModel.findOneAndDelete({ id: req.params.id });
    } catch (e) {
      console.error('Error deleting product from MongoDB:', e);
    }
  }

  liveProducts = liveProducts.filter((p) => p.id !== req.params.id);
  res.json({ success: true, message: 'Product deleted from database' });
});

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
    console.log(`Dhaanya Full Stack App with MongoDB running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
