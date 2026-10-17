// Usage: node --import tsx scratch/set-prices.mts "<exact product name>" 1kg=230 500g=115 250g=57.5
import mongoose from 'mongoose'; import dns from 'dns'; import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); dotenv.config(); dns.setServers(['8.8.8.8','1.1.1.1']);
const [name, ...pairs] = process.argv.slice(2);
const prices = Object.fromEntries(pairs.map(p => { const [w, v] = p.split('='); return [w, Number(v)]; }));
await mongoose.connect(process.env.MONGODB_URI!, { dbName: 'ecomm' });
const c = mongoose.connection.db!.collection('products');
const d = await c.findOne({ name });
if (!d) { console.log('NOT FOUND:', name); process.exit(1); }
const before = d.variants.map((v: any) => `${v.weight}=${v.price}`).join(' ; ');
const variants = d.variants.map((v: any) => prices[v.weight] != null ? { ...v, price: prices[v.weight], originalPrice: prices[v.weight] } : v);
const r = await c.updateOne({ _id: d._id }, { $set: { variants } });
console.log('before:', before);
console.log('after: ', variants.map((v: any) => `${v.weight}=${v.price}`).join(' ; '), '| modified', r.modifiedCount);
await mongoose.disconnect();
