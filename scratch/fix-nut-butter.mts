import mongoose from 'mongoose'; import dns from 'dns'; import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); dotenv.config(); dns.setServers(['8.8.8.8','1.1.1.1']);
await mongoose.connect(process.env.MONGODB_URI!, { dbName: 'ecomm' });
const c = mongoose.connection.db!.collection('products');
for (const name of ['Almond Nut Butter','Cashew Nut Butter','Hazelnut Nut Butter','Peanut Plain Roasted Nut Butter']) {
  const d = await c.findOne({ name });
  const v = { ...d!.variants[0], weight: '250g' };
  const r = await c.updateOne({ _id: d!._id }, { $set: { variants: [v] } });
  console.log(name, '->', v.weight, v.price, 'modified', r.modifiedCount);
}
await mongoose.disconnect();
