// Normalises variant weight labels: "1KG"/"1 kg" -> "1kg", "250G"/"250gm" -> "250g".
import mongoose from 'mongoose'; import dns from 'dns'; import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); dotenv.config(); dns.setServers(['8.8.8.8','1.1.1.1']);
const norm = (w: string) => w.replace(/(\d+(?:\.\d+)?)\s*kg\b/gi, '$1kg').replace(/(\d+(?:\.\d+)?)\s*(?:gm|g)\b/gi, '$1g');
await mongoose.connect(process.env.MONGODB_URI!, { dbName: 'ecomm' });
const c = mongoose.connection.db!.collection('products');
const ops: any[] = [];
for (const d of await c.find({}, { projection: { name: 1, variants: 1 } }).toArray()) {
  const changes: string[] = [];
  const variants = (d.variants || []).map((v: any) => {
    const w = norm(String(v.weight ?? ''));
    if (w !== v.weight) changes.push(`${v.weight} -> ${w}`);
    return w !== v.weight ? { ...v, weight: w } : v;
  });
  if (changes.length) {
    console.log(`${d.name}: ${changes.join(', ')}`);
    ops.push({ updateOne: { filter: { _id: d._id }, update: { $set: { variants } } } });
  }
}
if (ops.length) console.log('modified', (await c.bulkWrite(ops)).modifiedCount, 'products');
await mongoose.disconnect();
