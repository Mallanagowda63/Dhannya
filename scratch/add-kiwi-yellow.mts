import mongoose from 'mongoose';
import dns from 'dns';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();
dns.setServers(['8.8.8.8', '1.1.1.1']);
const M = mongoose.model('Product', new mongoose.Schema({ id: String }, { strict: false, timestamps: true, id: false }));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI!, { dbName: 'ecomm' });
  if (await M.exists({ name: 'Kiwi Yellow Dried' })) { console.log('already exists'); return mongoose.disconnect(); }
  const ids = (await M.find({}, { id: 1 }).lean()).map((d: any) => Number(String(d.id).split('-')[1]) || 0);
  const id = `prod-${Math.max(...ids) + 1}`;
  const img = '/images/dhannya_Products_final/Kiwi%20Yellow%20Dried/01.jpg';
  const v = (weight: string, price: number) => ({ weight, price, originalPrice: price, inStock: true });
  await M.create({
    id, name: 'Kiwi Yellow Dried', category: 'Dry Fruits', concern: ['Skin & Hair'],
    description: '100% Pure, authentic, and naturally processed Kiwi Yellow Dried sourced carefully for daily health, wellness, and rich taste.',
    ingredients: ['100% Pure Natural Kiwi Yellow Dried'],
    benefits: ['Rich in vital micronutrients and antioxidants', 'Unadulterated natural quality with zero preservatives', 'Supports everyday immunity, digestion, and overall vitality'],
    image: img, gallery: [img],
    variants: [v('1kg', 850), v('250g', 212.5), v('500g', 425)],
    rating: 0, reviewCount: 0, isBestSeller: false, isRecommended: false, stock: 50,
    tags: ['Dry Fruits', 'Organic', 'Natural', 'Dhaanya'],
  });
  console.log('added', id, 'total', await M.countDocuments());
  await mongoose.disconnect();
}
main();
