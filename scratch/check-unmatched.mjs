import fs from 'fs';

const report = JSON.parse(fs.readFileSync('scratch/wire-price-list-report.json', 'utf8'));
const priceList = JSON.parse(fs.readFileSync('src/data/priceList.json', 'utf8'));

const normalize = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');

const priceListNorm = priceList.map((p) => ({ name: p.productName, norm: normalize(p.productName) }));

for (const siteName of report.skippedNoMatch) {
  const n = normalize(siteName);
  const exact = priceListNorm.find((p) => p.norm === n);
  if (exact) {
    console.log(`LIKELY SAME (punctuation only): "${siteName}"  <->  "${exact.name}"`);
    continue;
  }
  // loose containment match
  const partial = priceListNorm.filter((p) => p.norm.includes(n) || n.includes(p.norm));
  if (partial.length > 0) {
    console.log(`POSSIBLE (partial overlap): "${siteName}"  <->  ${partial.map((p) => `"${p.name}"`).join(', ')}`);
  } else {
    console.log(`NO CANDIDATE in priceList.json: "${siteName}"`);
  }
}
