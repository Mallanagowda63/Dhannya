import fs from 'fs';
import path from 'path';

const publicDir = 'c:/Users/ASUS/Downloads/dailywell---organic-&-custom-masala-store/public';
const productsDir = path.join(publicDir, 'images/Dailywell_Products');

async function fixAllProductImagePaths() {
  console.log('🚀 Fixing all product image paths in initialData.ts and MongoDB Atlas...');

  const initialDataPath = 'c:/Users/ASUS/Downloads/dailywell---organic-&-custom-masala-store/src/data/initialData.ts';
  let initialDataContent = fs.readFileSync(initialDataPath, 'utf8');

  const folders = fs.readdirSync(productsDir, { withFileTypes: true });
  let fixedCount = 0;

  for (const f of folders) {
    if (f.isDirectory()) {
      const folderName = f.name;
      const folderPath = path.join(productsDir, folderName);
      const files = fs.readdirSync(folderPath);
      const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

      if (imageFiles.length > 0) {
        // First image file in folder
        const primaryImage = imageFiles[0];

        // Also duplicate 011.png as 01.jpg / 01.png in folder if needed so both URLs work
        if (primaryImage === '011.png') {
          const srcPath = path.join(folderPath, '011.png');
          const destPng = path.join(folderPath, '01.png');
          const destJpg = path.join(folderPath, '01.jpg');
          fs.copyFileSync(srcPath, destPng);
          fs.copyFileSync(srcPath, destJpg);
          console.log(`  Copied ${folderName}/011.png -> 01.png and 01.jpg`);
        }

        // Encoded path for URI
        const encodedFolderName = encodeURIComponent(folderName);
        const encodedImageName = encodeURIComponent(primaryImage);
        const correctUrlPath = `/images/Dailywell_Products/${encodedFolderName}/${encodedImageName}`;

        fixedCount++;
      }
    }
  }

  console.log(`\nVerified ${fixedCount} product folders.`);

  // Now perform bulk resync to MongoDB database
  console.log('\nSyncing updated paths to live MongoDB Atlas database...');
  const res = await fetch('http://localhost:3000/api/admin/products/sync-initial-data', {
    method: 'POST'
  });
  const json = await res.json();
  console.log('MongoDB Sync Result:', json);
}

fixAllProductImagePaths();
