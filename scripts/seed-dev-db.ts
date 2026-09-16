/**
 * Explicit, manual dev-database seeding script.
 *
 * This replaces the old automatic "seed if empty on every server boot"
 * behavior that used to live in server.ts's initDatabase(). That automatic
 * behavior is how real Orders/Customers/CustomRecipe documents ended up
 * silently replaced with hardcoded fake placeholder data after an unrelated
 * incident emptied those collections -- the server just re-filled them with
 * sample data on its next restart, with no human ever approving that write.
 *
 * Safety rules enforced below, in order:
 *   1. Refuses to run if NODE_ENV=production.
 *   2. Refuses to run if MONGODB_URI's host matches PRODUCTION_MONGODB_HOST
 *      (set that env var once you have a separate prod cluster/host).
 *   3. Requires an explicit --confirm flag on the command line.
 *   4. Per collection, only INSERTS when the collection is already empty --
 *      this script will never delete or overwrite existing documents.
 *
 * Usage:
 *   npm run seed:dev -- --confirm
 */
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { PRODUCTS, CATEGORIES, COUPONS, REVIEWS } from '../src/data/initialData';

dotenv.config({ path: '.env.local' });
dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const mongoUri = process.env.MONGODB_URI;
const productionHost = (process.env.PRODUCTION_MONGODB_HOST || '').trim();
const hasConfirmFlag = process.argv.includes('--confirm');

function resolveHost(uri: string): string {
  try {
    return new URL(uri.replace('mongodb+srv://', 'https://').replace('mongodb://', 'https://')).host;
  } catch {
    return '';
  }
}

async function main() {
  console.log('=== Dhaanya dev DB seed script ===');

  if (isProduction) {
    console.error('[REFUSED] NODE_ENV=production. This script will never run against a production environment.');
    process.exit(1);
  }

  if (!mongoUri) {
    console.error('[REFUSED] MONGODB_URI is not set.');
    process.exit(1);
  }

  const configuredHost = resolveHost(mongoUri);

  if (productionHost && configuredHost === productionHost) {
    console.error(
      `[REFUSED] MONGODB_URI host "${configuredHost}" matches PRODUCTION_MONGODB_HOST. ` +
        'Refusing to seed what is configured as the production database.'
    );
    process.exit(1);
  }

  console.log(`Target cluster host: ${configuredHost || '(could not parse)'}`);
  console.log(
    productionHost
      ? `Configured production host to guard against: ${productionHost}`
      : 'No PRODUCTION_MONGODB_HOST configured yet -- set it once dev/prod use separate clusters.'
  );

  if (!hasConfirmFlag) {
    console.error('[REFUSED] Missing --confirm flag. Re-run as: npm run seed:dev -- --confirm');
    console.error(`About to connect to: ${configuredHost || mongoUri}`);
    process.exit(1);
  }

  await mongoose.connect(mongoUri, { dbName: 'ecomm', serverSelectionTimeoutMS: 8000 });
  console.log('[DB] Connected.');

  const ProductModel = mongoose.model('Product', new mongoose.Schema({}, { strict: false }));
  const CategoryModel = mongoose.model('Category', new mongoose.Schema({}, { strict: false }));
  const CouponModel = mongoose.model('Coupon', new mongoose.Schema({}, { strict: false }));
  const ReviewModel = mongoose.model('Review', new mongoose.Schema({}, { strict: false }));

  async function seedIfEmpty(name: string, model: mongoose.Model<any>, data: any[]) {
    const count = await model.countDocuments();
    if (count > 0) {
      console.log(`[SKIP] ${name}: already has ${count} document(s). Not touching it.`);
      return;
    }
    if (!data || data.length === 0) {
      console.log(`[SKIP] ${name}: no seed data provided.`);
      return;
    }
    await model.insertMany(data);
    console.log(`[SEEDED] ${name}: inserted ${data.length} document(s).`);
  }

  // Only catalog/reference data is seeded here on purpose -- Orders,
  // Customers, and CustomRecipe are real transactional/customer data with
  // no legitimate "sample" to fabricate, and are deliberately left out of
  // this script. They should only ever be created through real usage of
  // the app's own APIs.
  await seedIfEmpty('Products', ProductModel, PRODUCTS);
  await seedIfEmpty('Categories', CategoryModel, CATEGORIES);
  await seedIfEmpty('Coupons', CouponModel, COUPONS);
  await seedIfEmpty('Reviews', ReviewModel, REVIEWS);

  await mongoose.disconnect();
  console.log('[DB] Disconnected. Done.');
}

main().catch((err) => {
  console.error('[SEED ERROR]', err.message);
  process.exit(1);
});
