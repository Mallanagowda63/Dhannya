import fs from 'fs';
import path from 'path';

const baseDir = 'c:/Users/ASUS/Downloads/dailywell---organic-&-custom-masala-store/public/images/Dailywell_Products';

async function scanProductFolderImages() {
  console.log('🔍 Scanning all folders in Dailywell_Products...');
  if (!fs.existsSync(baseDir)) {
    console.error('Base directory does not exist!');
    return;
  }

  const folders = fs.readdirSync(baseDir, { withFileTypes: true });
  const folderMap = {};

  for (const f of folders) {
    if (f.isDirectory()) {
      const folderPath = path.join(baseDir, f.name);
      const files = fs.readdirSync(folderPath);
      const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
      if (imageFiles.length > 0) {
        folderMap[f.name] = imageFiles;
      }
    }
  }

  console.log(`Found ${Object.keys(folderMap).length} folders with image files.`);
  console.log('\nSample Folder Maps:');
  const sampleKeys = Object.keys(folderMap).slice(0, 20);
  for (const k of sampleKeys) {
    console.log(`  "${k}":`, folderMap[k]);
  }
}

scanProductFolderImages();
