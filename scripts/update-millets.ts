import mongoose from 'mongoose';
import dns from 'dns';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoUri = process.env.MONGODB_URI;

// Define Product model (matching server.ts schema)
const ProductSchema = new mongoose.Schema({}, { strict: false });
const ProductModel = mongoose.model('Product', ProductSchema);

async function main() {
  if (!mongoUri) {
    console.error('MONGODB_URI not set');
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const updates = [
      {
        name: 'Ragi (Finger Millet)',
        description: 'Dhaanya Ragi, also known as Finger Millet, is a traditional Indian grain recognised for its earthy flavour and naturally high calcium content. It has been a part of South Indian food traditions for generations and is commonly enjoyed in both everyday meals and traditional preparations. Naturally gluten-free, provides dietary fibre and plant-based nutrients.',
        benefits: ['Naturally gluten-free grain when handled without gluten cross-contact', 'A notable dietary source of calcium', 'Contains dietary fibre and plant-based nutrients', 'Offers a distinctive earthy flavour', 'Suitable for traditional and modern recipes']
      },
      {
        name: 'Jowar (Sorghum Millet)',
        description: 'Dhaanya Jowar, also known as Sorghum, is a traditional cereal grain with a mild, earthy flavour and versatile culinary uses. It is consumed in several regions of India and can be enjoyed as whole grain or flour. Naturally gluten-free and provides carbohydrates, plant-based protein and dietary fibre.',
        benefits: ['Naturally gluten-free grain', 'Mild flavour that works well in different recipes', 'Provides dietary fibre and plant-based nutrients', 'Useful alternative for increasing grain variety', 'Suitable for whole-grain and flour-based preparations']
      },
      {
        name: 'Pearl Millet (Bajra)',
        description: 'Dhaanya Pearl Millet, commonly known as Bajra, is a traditional grain with a distinctive earthy flavour and hearty character. It has long been used in Indian diets, especially in regions where millet-based flatbreads form part of everyday food traditions. Bajra provides plant-based protein, minerals and dietary fibre.',
        benefits: ['Naturally gluten-free grain', 'Provides plant-based protein and minerals', 'Offers a distinctive earthy and nutty flavour', 'Suitable for traditional grain-based meals', 'Helps add variety to everyday cereal consumption']
      },
      {
        name: 'Foxtail Millet (Navane)',
        description: 'Dhaanya Foxtail Millet, known as Navane in Kannada, is a small-seeded traditional millet with a mild, slightly nutty flavour. It is commonly used as a rice alternative in grain-based dishes and can be incorporated into a variety of everyday meals. Provides dietary fibre and plant-based nutrients, making it useful for diversifying grain consumption.',
        benefits: ['Naturally gluten-free grain', 'Mild flavour suitable for different preparations', 'Provides dietary fibre and plant-based nutrients', 'Works well in rice-style dishes', 'A versatile option for everyday grain variety']
      },
      {
        name: 'Browntop Millet (Korale)',
        description: 'Dhaanya Browntop Millet, known as Korale in Kannada, is a traditional small millet valued for its distinctive grain characteristics and place in regional food traditions. It has a mild earthy flavour and can be used to add variety to grain-based meals. Browntop Millet provides dietary fibre and plant-based nutrients.',
        benefits: ['Naturally gluten-free grain', 'A traditional millet variety with regional relevance', 'Provides dietary fibre and plant-based nutrients', 'Helps diversify everyday grain choices', 'Suitable for experimenting with traditional and modern recipes']
      },
      {
        name: 'Little Millet (Samai)',
        description: 'Dhaanya Little Millet, known as Samai, is a small traditional millet with a subtle flavour and versatile cooking applications. It can be prepared as a cooked grain or incorporated into flour-based recipes. Little Millet is useful for people seeking variety beyond commonly consumed rice and wheat, with a versatile texture and flavour suitable for both traditional and contemporary meals.',
        benefits: ['Naturally gluten-free grain', 'Provides dietary fibre and plant-based nutrients', 'Mild flavour suitable for everyday cooking', 'Can be used in both sweet and savoury dishes', 'A versatile grain for expanding dietary variety']
      },
      {
        name: 'Barnyard Millet (Oodalu)',
        description: 'Dhaanya Barnyard Millet, known as Oodalu in Kannada, is a small traditional millet used in different grain-based preparations. It has a relatively mild flavour and can be cooked as a rice-style grain or incorporated into other recipes. Barnyard Millet contributes carbohydrates and plant-based nutrients and can be part of a varied, balanced diet.',
        benefits: ['Naturally gluten-free grain', 'A traditional alternative to commonly consumed cereals', 'Provides dietary fibre and plant-based nutrients', 'Suitable for different cooking styles', 'Useful for adding variety to everyday meals']
      }
    ];

    // Try by ID instead
    const millet = await ProductModel.findOne({ id: 'prod-226' }).lean();
    if (millet) {
      console.log('Found by ID prod-226:', millet.name);
    } else {
      console.log('Not found by ID. Trying MongoDB _id...');
      const all = await ProductModel.find({}).limit(1).lean();
      if (all.length > 0) {
        console.log('Sample product:', JSON.stringify(all[0], null, 2).substring(0, 200));
      }
    }

    const milletUpdates = [
      { id: 'prod-226', description: 'Dhaanya Ragi, also known as Finger Millet, is a traditional Indian grain recognised for its earthy flavour and naturally high calcium content...', benefits: ['Naturally gluten-free grain when handled without gluten cross-contact', 'A notable dietary source of calcium', 'Contains dietary fibre and plant-based nutrients', 'Offers a distinctive earthy flavour', 'Suitable for traditional and modern recipes'] },
      { id: 'prod-132', description: 'Dhaanya Jowar, also known as Sorghum, is a traditional cereal grain with a mild, earthy flavour and versatile culinary uses...', benefits: ['Naturally gluten-free grain', 'Mild flavour that works well in different recipes', 'Provides dietary fibre and plant-based nutrients', 'Useful alternative for increasing grain variety', 'Suitable for whole-grain and flour-based preparations'] },
      { id: 'prod-202', description: 'Dhaanya Pearl Millet, commonly known as Bajra, is a traditional grain with a distinctive earthy flavour and hearty character...', benefits: ['Naturally gluten-free grain', 'Provides plant-based protein and minerals', 'Offers a distinctive earthy and nutty flavour', 'Suitable for traditional grain-based meals', 'Helps add variety to everyday cereal consumption'] },
      { id: 'prod-102', description: 'Dhaanya Foxtail Millet, known as Navane in Kannada, is a small-seeded traditional millet with a mild, slightly nutty flavour...', benefits: ['Naturally gluten-free grain', 'Mild flavour suitable for different preparations', 'Provides dietary fibre and plant-based nutrients', 'Works well in rice-style dishes', 'A versatile option for everyday grain variety'] },
      { id: 'prod-41', description: 'Dhaanya Browntop Millet, known as Korale in Kannada, is a traditional small millet valued for its distinctive grain characteristics...', benefits: ['Naturally gluten-free grain', 'A traditional millet variety with regional relevance', 'Provides dietary fibre and plant-based nutrients', 'Helps diversify everyday grain choices', 'Suitable for experimenting with traditional and modern recipes'] },
      { id: 'prod-146', description: 'Dhaanya Little Millet, known as Samai, is a small traditional millet with a subtle flavour and versatile cooking applications...', benefits: ['Naturally gluten-free grain', 'Provides dietary fibre and plant-based nutrients', 'Mild flavour suitable for everyday cooking', 'Can be used in both sweet and savoury dishes', 'A versatile grain for expanding dietary variety'] },
      { id: 'prod-25', description: 'Dhaanya Barnyard Millet, known as Oodalu in Kannada, is a small traditional millet used in different grain-based preparations...', benefits: ['Naturally gluten-free grain', 'A traditional alternative to commonly consumed cereals', 'Provides dietary fibre and plant-based nutrients', 'Suitable for different cooking styles', 'Useful for adding variety to everyday meals'] }
    ];

    for (const update of milletUpdates) {
      const result = await ProductModel.updateOne(
        { id: update.id },
        { $set: { description: update.description, benefits: update.benefits } }
      );
      if (result.modifiedCount > 0) {
        console.log(`✅ Updated ${update.id}`);
      } else {
        console.log(`❌ Not found: ${update.id}`);
      }
    }

    console.log('✅ All millet products updated successfully!');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
