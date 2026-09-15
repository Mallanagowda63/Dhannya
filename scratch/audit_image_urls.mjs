import fs from 'fs';

async function auditImages() {
  console.log('🔍 Auditing all Product Image URLs in the system...');
  const res = await fetch('http://localhost:3000/api/products');
  const json = await res.json();
  const products = json.data || [];

  let missingCount = 0;
  let totalChecked = 0;

  for (const prod of products) {
    const images = Array.isArray(prod.images) ? prod.images : [prod.image].filter(Boolean);
    for (const imgUrl of images) {
      totalChecked++;
      if (imgUrl.startsWith('http://') || imgUrl.startsWith('https://')) {
        // External URL, check with HEAD request
        try {
          const imgRes = await fetch(imgUrl, { method: 'HEAD' });
          if (imgRes.status >= 400) {
            console.warn(`⚠️ Warning: External Image 404 for product "${prod.name}" (${prod.id}): ${imgUrl}`);
            missingCount++;
          }
        } catch (e) {
          console.warn(`⚠️ Warning: Failed to reach external image for product "${prod.name}": ${imgUrl}`);
          missingCount++;
        }
      } else if (imgUrl.startsWith('/')) {
        // Local public file
        const localPath = `c:/Users/ASUS/Downloads/dailywell---organic-&-custom-masala-store/public${imgUrl}`;
        if (!fs.existsSync(localPath)) {
          console.warn(`❌ Local Image Missing for product "${prod.name}" (${prod.id}): ${imgUrl}`);
          missingCount++;
        }
      }
    }
  }

  console.log(`\nAudit Complete: Checked ${totalChecked} image links across ${products.length} products.`);
  console.log(`Missing / Broken images found: ${missingCount}`);
}

auditImages();
