// Splices real variant data (from src/data/priceList.json, itself generated
// from the customer-supplied CSV) into src/data/initialData.ts's PRODUCTS
// array, replacing each matched product's "variants" block in place via
// precise bracket-matched text substitution -- everything else in the file
// (images, descriptions, ids, ratings, formatting) is left byte-identical.
//
// originalPrice is set equal to price for every merged variant: the CSV has
// no discount data, and the existing UI already hides discount badges/
// strikethrough whenever originalPrice <= price, so this needs no UI change.
//
// "Custom Masala Blend" is intentionally skipped -- it duplicates pricing the
// app already computes live via the Custom Masala Builder.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_FILE = path.join(ROOT, 'src', 'data', 'initialData.ts');
const PRICE_LIST = path.join(ROOT, 'src', 'data', 'priceList.json');
const REPORT_FILE = path.join(__dirname, 'wire-price-list-report.json');

const SKIP_PRODUCTS = new Set(['Custom Masala Blend']);

// Confirmed by the user: these live-site product names differ from
// priceList.json only by punctuation (slashes/hyphens stripped). Same
// product, safe to merge -- pricing can be corrected later if needed.
const NAME_ALIASES = {
  'Bay Leaves Tej Patta': 'Bay Leaves / Tej Patta',
  'Cashew Roasted And Salted': 'Cashew - Roasted And Salted',
  'Cashew Split': 'Cashew - Split',
  'Corn Maize': 'Corn/ Maize',
  'Incha Acacia Wild': 'Incha/ Acacia Wild',
  'Mulethi Root Powder Irattimadhuram': 'Mulethi Root Powder/ Irattimadhuram',
  'Pista Plain w o Shell': 'Pista Plain w/o Shell',
  'Red Rajma Kidney Beans': 'Red Rajma/ Kidney Beans',
  'Travancore Tamarind Vaalan Puli': 'Travancore Tamarind/ Vaalan Puli',
};

function findMatchingBracket(text, openIndex) {
  const openChar = text[openIndex];
  const closeChar = openChar === '{' ? '}' : ']';
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let i = openIndex; i < text.length; i++) {
    const c = text[i];
    if (inString) {
      if (escape) escape = false;
      else if (c === '\\') escape = true;
      else if (c === '"') inString = false;
      continue;
    }
    if (c === '"') {
      inString = true;
      continue;
    }
    if (c === openChar) depth++;
    else if (c === closeChar) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function indentBlock(jsonStringifyOutput, extraSpaces) {
  const lines = jsonStringifyOutput.split('\n');
  return lines.map((line, i) => (i === 0 ? line : ' '.repeat(extraSpaces) + line)).join('\n');
}

const text = fs.readFileSync(DATA_FILE, 'utf8');
const priceList = JSON.parse(fs.readFileSync(PRICE_LIST, 'utf8'));
const priceListByName = new Map(priceList.map((p) => [p.productName, p]));

const arrayDeclIdx = text.indexOf('export const PRODUCTS: Product[] = [');
if (arrayDeclIdx === -1) throw new Error('Could not find PRODUCTS array declaration');
// Skip past the "Product[]" type annotation's own brackets -- the real
// array literal starts at the "= [" that follows it.
const eqIdx = text.indexOf('=', arrayDeclIdx);
const arrayOpenIdx = text.indexOf('[', eqIdx);
const arrayCloseIdx = findMatchingBracket(text, arrayOpenIdx);
if (arrayCloseIdx === -1) throw new Error('Could not find matching close bracket for PRODUCTS array');

// Walk the array, find each top-level product object span.
const objectSpans = []; // { start, end } inclusive, absolute file indices
let pos = arrayOpenIdx + 1;
while (pos < arrayCloseIdx) {
  const c = text[pos];
  if (c === '{') {
    const objEnd = findMatchingBracket(text, pos);
    if (objEnd === -1) throw new Error(`Unmatched brace at position ${pos}`);
    objectSpans.push({ start: pos, end: objEnd });
    pos = objEnd + 1;
  } else {
    pos++;
  }
}

const merged = [];
const skippedNoMatch = [];
const skippedExcluded = [];
const replacements = []; // { start, end, text } for the "variants": [...] span, applied back-to-front

for (const span of objectSpans) {
  const objText = text.slice(span.start, span.end + 1);
  let obj;
  try {
    obj = JSON.parse(objText);
  } catch (e) {
    throw new Error(`Failed to JSON.parse product object at ${span.start}: ${e.message}`);
  }

  if (SKIP_PRODUCTS.has(obj.name)) {
    skippedExcluded.push(obj.name);
    continue;
  }

  const lookupName = NAME_ALIASES[obj.name] || obj.name;
  const priceEntry = priceListByName.get(lookupName);
  if (!priceEntry) {
    skippedNoMatch.push(obj.name);
    continue;
  }

  const newVariants = priceEntry.variants.map((v) => ({
    weight: v.size,
    price: v.price,
    originalPrice: v.price,
    inStock: v.available,
  }));

  // Locate the "variants": [ ... ] span within this object, in absolute file coords.
  const variantsKeyIdx = objText.indexOf('"variants":');
  if (variantsKeyIdx === -1) {
    skippedNoMatch.push(`${obj.name} (no "variants" key found -- left untouched)`);
    continue;
  }
  const relBracketOpen = objText.indexOf('[', variantsKeyIdx);
  const relBracketClose = findMatchingBracket(objText, relBracketOpen);
  if (relBracketClose === -1) throw new Error(`Unmatched "variants" bracket in ${obj.name}`);

  const absOpen = span.start + relBracketOpen;
  const absClose = span.start + relBracketClose;

  const stringified = JSON.stringify(newVariants, null, 2);
  const replacementText = indentBlock(stringified, 4);

  replacements.push({ start: absOpen, end: absClose, text: replacementText });
  merged.push({ name: obj.name, variantCount: newVariants.length });
}

// Apply back-to-front so earlier offsets stay valid.
replacements.sort((a, b) => b.start - a.start);
let newText = text;
for (const r of replacements) {
  newText = newText.slice(0, r.start) + r.text + newText.slice(r.end + 1);
}

fs.writeFileSync(DATA_FILE, newText, 'utf8');

const report = {
  totalProductsInSite: objectSpans.length,
  mergedCount: merged.length,
  merged,
  skippedExcluded,
  skippedNoMatchCount: skippedNoMatch.length,
  skippedNoMatch,
};
fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2), 'utf8');

console.log(`Total products in initialData.ts: ${report.totalProductsInSite}`);
console.log(`Merged from priceList.json:        ${report.mergedCount}`);
console.log(`Excluded (Custom Masala Blend etc): ${skippedExcluded.length} -> ${skippedExcluded.join(', ')}`);
console.log(`No match in priceList.json (left untouched, still old/mock data): ${skippedNoMatch.length}`);
skippedNoMatch.forEach((n) => console.log(`  - ${n}`));
console.log(`\nWrote: ${path.relative(ROOT, DATA_FILE)}`);
console.log(`Wrote: ${path.relative(ROOT, REPORT_FILE)}`);
