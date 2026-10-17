import mongoose from 'mongoose'; import dns from 'dns'; import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); dotenv.config(); dns.setServers(['8.8.8.8','1.1.1.1']);
await mongoose.connect(process.env.MONGODB_URI!, { dbName: 'ecomm' });
const c = mongoose.connection.db!.collection('products');
const docs = await c.find({ name: /oregano/i }, { projection: { name:1, stock:1 } }).toArray();
console.log(docs.map(d => `${d.name} (stock ${d.stock})`));
if (docs.length === 1) {
  const r = await c.updateOne({ _id: docs[0]._id }, { $set: { stock: 0, 'variants.$[].inStock': false } });
  console.log('modified', r.modifiedCount);
}
await mongoose.disconnect();
