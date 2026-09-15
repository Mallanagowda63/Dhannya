// Normalizes product photography onto a consistent frame:
// trims each photo's background/whitespace down to the subject, then
// re-composites the subject onto a fixed-size warm cream canvas at a
// consistent scale (~63% of frame width) so every card shows the product
// at the same size, position, and background tone regardless of how the
// original photo was shot/cropped.
//
// This CANNOT fix camera angle or prop count differences baked into the
// original photo composition -- only framing/scale/background tone.
//
// Usage:
//   node scripts/normalize-product-images.mjs                 (process everything)
//   node scripts/normalize-product-images.mjs --folders "Cow Ghee,Coconut Oil"  (test a subset)

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'public', 'images', 'Dailywell_Products');
const OUT_DIR = path.join(ROOT, 'public', 'images', 'normalized');

const CANVAS_SIZE = 1400;
const SUBJECT_RATIO = 0.63; // subject occupies ~63% of the canvas's longest side
const BG_COLOR = '#F4ECD8'; // brand parchment -- warm neutral cream
const TRIM_THRESHOLD = 12;

const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

function parseArgs() {
  const args = process.argv.slice(2);
  const foldersArg = args.find((a) => a.startsWith('--folders='));
  if (!foldersArg) return null;
  return foldersArg
    .slice('--folders='.length)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

async function normalizeOne(srcPath, outPath) {
  const subjectSize = Math.round(CANVAS_SIZE * SUBJECT_RATIO);

  const trimmed = sharp(srcPath).trim({ threshold: TRIM_THRESHOLD }).normalize();

  const subjectBuffer = await trimmed
    .resize({
      width: subjectSize,
      height: subjectSize,
      fit: 'inside',
      withoutEnlargement: false,
    })
    .toBuffer();

  const subjectMeta = await sharp(subjectBuffer).metadata();

  await sharp({
    create: {
      width: CANVAS_SIZE,
      height: CANVAS_SIZE,
      channels: 3,
      background: BG_COLOR,
    },
  })
    .composite([
      {
        input: subjectBuffer,
        left: Math.round((CANVAS_SIZE - (subjectMeta.width || subjectSize)) / 2),
        top: Math.round((CANVAS_SIZE - (subjectMeta.height || subjectSize)) / 2),
      },
    ])
    .jpeg({ quality: 88 })
    .toFile(outPath);
}

async function main() {
  const folderFilter = parseArgs();

  if (!fs.existsSync(SRC_DIR)) {
    console.error(`Source directory not found: ${SRC_DIR}`);
    process.exit(1);
  }

  const allFolders = fs.readdirSync(SRC_DIR, { withFileTypes: true }).filter((d) => d.isDirectory());
  const folders = folderFilter
    ? allFolders.filter((d) => folderFilter.includes(d.name))
    : allFolders;

  if (folderFilter && folders.length !== folderFilter.length) {
    const found = folders.map((f) => f.name);
    const missing = folderFilter.filter((f) => !found.includes(f));
    if (missing.length) console.warn(`Folders not found, skipping: ${missing.join(', ')}`);
  }

  let processed = 0;
  let failed = 0;

  for (const folder of folders) {
    const srcFolderPath = path.join(SRC_DIR, folder.name);
    const outFolderPath = path.join(OUT_DIR, folder.name);
    const files = fs.readdirSync(srcFolderPath).filter((f) => IMAGE_EXT.test(f));

    if (files.length === 0) continue;
    fs.mkdirSync(outFolderPath, { recursive: true });

    for (const file of files) {
      const srcPath = path.join(srcFolderPath, file);
      const outName = file.replace(IMAGE_EXT, '.jpg');
      const outPath = path.join(outFolderPath, outName);

      try {
        await normalizeOne(srcPath, outPath);
        processed++;
        console.log(`✓ ${folder.name}/${file} -> normalized/${folder.name}/${outName}`);
      } catch (err) {
        failed++;
        console.error(`✗ ${folder.name}/${file}: ${err.message}`);
      }
    }
  }

  console.log(`\nDone. Processed ${processed} image(s), ${failed} failure(s).`);
  console.log(`Output: ${OUT_DIR}`);
}

main();
