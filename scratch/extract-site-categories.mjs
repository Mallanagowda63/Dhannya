import fs from 'fs';

const data = fs.readFileSync('src/data/initialData.ts', 'utf8');
const re = /"name":\s*"((?:[^"\\]|\\.)*)"[\s\S]{0,300}?"category":\s*"([^"]+)"/g;

const map = new Map();
let m;
let count = 0;
while ((m = re.exec(data))) {
  count++;
  const name = m[1].replace(/\\"/g, '"');
  const cat = m[2];
  if (!map.has(name)) map.set(name, new Set());
  map.get(name).add(cat);
}

console.log('total name/category pairs matched:', count);
console.log('unique product names:', map.size);

let multi = 0;
for (const [n, cats] of map) {
  if (cats.size > 1) {
    multi++;
    if (multi <= 15) console.log('MULTI-CAT:', n, [...cats]);
  }
}
console.log('names with inconsistent categories across entries:', multi);

// Only keep values that are real Product categories (types.ts ProductCategory),
// discarding MasalaIngredient.category values ('Whole Spices', 'Herbs & Seeds',
// 'Pungent & Heat', 'Aromatics', 'Color & Texture') that share the same "name"/
// "category" key shape but belong to a different taxonomy.
const VALID_PRODUCT_CATEGORIES = new Set([
  'Wood Pressed Oils', 'Flour', 'Dry Fruits', 'Seeds', 'Millets', 'Spices',
  'Masalas', 'Health Foods', 'Coffee', 'Tea', 'Pickles', 'Natural Sweeteners',
  'Pulses', 'Nut Butters', 'Rice', 'Rava', 'Poha', 'Pasta', 'Noodles',
  'Eco Friendly', 'Quick Bites', 'Skin Care', 'Hair Care',
]);

const clean = {};
for (const [name, cats] of map) {
  const valid = [...cats].filter((c) => VALID_PRODUCT_CATEGORIES.has(c));
  if (valid.length > 0) clean[name] = valid[0]; // single Product category expected after filtering
}

fs.writeFileSync('scratch/site-name-category-map.json', JSON.stringify(clean, null, 2));
console.log('clean product-category entries written:', Object.keys(clean).length);
