import mongoose from 'mongoose';
import dns from 'dns';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();
dns.setServers(['8.8.8.8', '1.1.1.1']);

async function main() {
  await mongoose.connect(process.env.MONGODB_URI!, { dbName: 'ecomm' });
  const c = mongoose.connection.db!.collection('products');
  const v = (weight: string, price: number) => ({ weight, price, originalPrice: price, inStock: true });
  const r = await c.updateOne({ name: 'Black Salt' }, { $set: { variants: [v('1kg', 110), v('250g', 27.5), v('500g', 55)] } });
  console.log('matched', r.matchedCount, 'modified', r.modifiedCount);
  await mongoose.disconnect();
}
main();
