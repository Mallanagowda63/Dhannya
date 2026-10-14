import mongoose from 'mongoose';
import dns from 'dns';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();
dns.setServers(['8.8.8.8', '1.1.1.1']);

async function main() {
  await mongoose.connect(process.env.MONGODB_URI!, { dbName: 'ecomm' });
  const c = mongoose.connection.db!.collection('products');
  console.log('kiwi before:', await c.findOne({ name: 'Kiwi Yellow Dried' }, { projection: { id: 1 } }));
  await c.updateOne({ name: 'Kiwi Yellow Dried' }, { $set: { id: 'prod-305' } });
  console.log('kiwi after:', await c.findOne({ name: 'Kiwi Yellow Dried' }, { projection: { id: 1 } }));
  console.log('null ids:', await c.countDocuments({ id: null }));
  await mongoose.disconnect();
}
main();
