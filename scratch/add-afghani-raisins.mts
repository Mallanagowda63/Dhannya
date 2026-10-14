import mongoose from 'mongoose';
import dns from 'dns';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();
dns.setServers(['8.8.8.8', '1.1.1.1']);
const M = mongoose.model('Product', new mongoose.Schema({ id: String }, { strict: false, timestamps: true, id: false }));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI!, { dbName: 'ecomm' });
  if (await M.exists({ name: 'Afghani Ball Raisins (Chemical Free)' })) { console.log('already exists'); return mongoose.disconnect(); }
  const ids = (await M.find({}, { id: 1 }).lean()).map((d: any) => Number(String(d.id).split('-')[1]) || 0);
  const id = `prod-${Math.max(...ids) + 1}`;
  const img = '/images/dhannya_Products_final/Afghani%20Ball%20Raisins%20(Chemical%20Free)/01.jpg';
  const v = (weight: string, price: number) => ({ weight, price, originalPrice: price, inStock: true });
  await M.create({
    id, name: 'Afghani Ball Raisins (Chemical Free)', category: 'Dry Fruits', concern: ['Skin & Hair'],
    description: '100% Pure, authentic, and naturally processed Afghani Ball Raisins (Chemical Free) sourced carefully for daily health, wellness, and rich taste.',
    ingredients: ['100% Pure Natural Afghani Ball Raisins (Chemical Free)'],
    benefits: ['Rich in vital micronutrients and antioxidants', 'Unadulterated natural quality with zero preservatives', 'Supports everyday immunity, digestion, and overall vitality'],
    image: img, gallery: [img],
    variants: [v('1kg', 1190), v('250g', 297.5), v('500g', 595)],
    rating: 0, reviewCount: 0, isBestSeller: false, isRecommended: false, stock: 50,
    tags: ['Dry Fruits', 'Organic', 'Natural', 'Dhaanya'],
  });
  console.log('added', id, 'total', await M.countDocuments());
  await mongoose.disconnect();
}
main();
