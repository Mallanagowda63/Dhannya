import mongoose from 'mongoose';
import dns from 'dns';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config({ path: '.env.local' });
dotenv.config();
dns.setServers(['8.8.8.8', '1.1.1.1']);

const plan = JSON.parse(fs.readFileSync(process.argv[2], 'utf8')) as {
  updates: { name: string; variants: any[] }[];
  deletes: string[];
};
const M = mongoose.model('Product', new mongoose.Schema({}, { strict: false }));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI!, { dbName: 'ecomm' });
  let updated = 0;
  for (const u of plan.updates) {
    const r = await M.updateOne({ name: u.name }, { $set: { variants: u.variants } });
    if (r.matchedCount !== 1) console.warn('NOT FOUND for update:', u.name);
    updated += r.modifiedCount;
  }
  const del = process.argv[3] === '--delete' ? await M.deleteMany({ name: { $in: plan.deletes } }) : { deletedCount: 0 };
  console.log(`updated ${updated}/${plan.updates.length}, deleted ${del.deletedCount}/${plan.deletes.length}, remaining ${await M.countDocuments()}`);
  await mongoose.disconnect();
}
main();
