// Rich website copy for Dhaanya atta & wheat products.
// Merged into PRODUCT_DETAILS (initialData.ts); "Label: text" strings render with a bold label.

export interface ProductDetailExtra {
  tagline?: string;
  about: string;
  notes?: string[];
  why: string[];
  whyTitle?: string;
  uses?: string[];
  usesTitle?: string;
  usage?: string;
  steps?: string[];
  hydration?: string;
  expect?: string[];
  expectGroups?: { title: string; points: string[] }[];
  expectNote?: string;
  facts: string[];
  allergen?: string;
  how?: string;
  storage?: string;
}

const LIVE_MILLING = 'Live Milling: Milled after your order or live at our store.';

export const ATTA_DETAILS: Record<string, ProductDetailExtra> = {
  'Dhaanya High Protein Atta': {
    tagline: '70% Wheat • 30% Pulses & Legumes',
    about:
      'Dhaanya High Protein Atta combines wheat with soybean, chickpea, moong, and masoor. A thoughtfully crafted blend that brings the familiar goodness of wheat together with plant-based protein ingredients for everyday meals.',
    notes: [LIVE_MILLING],
    why: [
      'Plant-based protein ingredients from pulses and soybean.',
      'Thoughtfully crafted blend for everyday meals.',
      'Wheat-forward flavour with mild earthy and nutty notes.',
      'Suitable for chapatis, rotis, and traditional flatbreads.',
      'Freshly prepared through our Live Milling process.',
    ],
    steps: [
      'Add water gradually: Begin with approximately 65–75 ml lukewarm water per 100 g flour. Adjust to dough consistency.',
      'Knead: Knead for approximately 5–7 minutes until smooth and workable. Avoid adding excessive dry flour.',
      'Rest: Cover and rest for 20–30 minutes.',
      'Roll & cook: Roll gently and cook on a preheated tawa over medium to medium-high heat. Avoid prolonged cooking.',
      'Keep covered: Store cooked rotis in a covered container to help retain moisture.',
    ],
    hydration:
      '65–75 ml water per 100 g flour. Begin lower and increase gradually. Confirm the final ratio through kitchen testing.',
    expect: [
      'Texture: Soft to moderately soft when properly hydrated and rested.',
      'Flavour: Wheat-forward with mild earthy and nutty notes.',
      'Handling: May feel different from regular wheat atta because of the pulse and soybean content.',
      'Best enjoyed: Fresh and warm with curries, vegetables, or dal.',
    ],
    expectNote: 'Texture depends on hydration, resting, rolling, and cooking time.',
    facts: [
      'Why soybean? Contributes plant-based protein to the blend.',
      'Why rest the dough? Allows water to distribute through the flour and can improve handling.',
      'Why can texture differ? Pulse and soybean ingredients change dough behaviour compared with 100% wheat atta.',
    ],
    allergen: 'Contains wheat (gluten) and soybean.',
  },

  'Dhaanya Nuts & Seeds Atta': {
    tagline: '85% Wheat • 15% Nuts & Seeds',
    about:
      'Dhaanya Nuts & Seeds Atta combines wheat with almond, cashew, pumpkin seeds, sunflower seeds, flaxseed, sesame, and amaranth. A thoughtfully crafted blend bringing the natural variety of nuts and seeds into everyday meals.',
    notes: [LIVE_MILLING],
    why: [
      'Variety of nuts and seeds in one blend.',
      'Contributes protein, fibre, and fats from its ingredients.',
      'Mildly nutty and aromatic flavour.',
      'Suitable for everyday rotis and traditional flatbreads.',
      'Freshly prepared through our Live Milling process.',
    ],
    steps: [
      'Add water gradually: Begin with approximately 65–75 ml lukewarm water per 100 g flour. Adjust as needed.',
      'Knead gently: Mix thoroughly and knead for around 4–6 minutes until workable. Avoid aggressive or prolonged kneading.',
      'Rest: Cover and rest for 25–35 minutes to allow hydration.',
      'Roll & cook: Roll gently with minimal dry flour. Cook on a preheated tawa over medium heat and avoid overcooking.',
      'Keep covered: Store cooked rotis in a covered container to help retain moisture.',
    ],
    hydration:
      '65–75 ml water per 100 g flour. Nuts and seeds can alter dough texture and hydration needs, so adjust after testing.',
    expect: [
      'Texture: Soft to moderately soft when properly hydrated; may have a slightly textured bite.',
      'Flavour: Mildly nutty, aromatic, and wheat-forward.',
      'Handling: Nuts and seeds may affect dough smoothness and rolling.',
      'Best enjoyed: Fresh and warm with curries, vegetables, or dal.',
    ],
    expectNote: 'Texture depends on hydration, resting, rolling, and cooking time.',
    facts: [
      'Why nuts and seeds? They contribute different flavours, textures, and nutritional characteristics.',
      'Why rest the dough? Helps the flour absorb water and can improve handling.',
      'Why can texture differ? Nuts and seeds change the composition and dough behaviour compared with regular wheat atta.',
    ],
    allergen: 'Contains wheat, almond, cashew, and sesame.',
  },

  'Dhaanya Gluten-Free Atta': {
    tagline: 'Millet + Pulse Blend • Gluten-Free Formulation',
    about:
      'Dhaanya Gluten-Free Atta combines jowar, bajra, ragi, foxtail millet, soybean, amaranth, dried jackfruit, and psyllium husk. A distinctive millet and pulse blend designed as a wheat-free flour option.',
    notes: [
      LIVE_MILLING,
      'Gluten-free suitability requires appropriate ingredient sourcing and cross-contact controls.',
    ],
    why: [
      'Made without wheat ingredients.',
      'Combines multiple millets, pulses, and amaranth.',
      'Includes psyllium husk for fibre and binding support.',
      'Distinctive earthy and mildly aromatic flavour.',
      'A differentiated option for gluten-free meal planning.',
    ],
    steps: [
      'Add warm water gradually: Begin with approximately 75–90 ml water per 100 g flour and adjust carefully.',
      'Mix gently: Combine thoroughly until the flour is evenly hydrated. Gluten-free dough does not require wheat-style gluten development.',
      'Rest: Cover and rest for 10–20 minutes. Psyllium needs time to hydrate and develop binding.',
      'Shape gently: Pat or roll between sheets while the dough is workable. Avoid excessive dry flour.',
      'Cook & serve: Cook on a preheated tawa. Avoid prolonged cooking and keep covered after cooking.',
    ],
    hydration:
      '75–90 ml water per 100 g flour. The final ratio depends on millet particle size, psyllium characteristics, and dough binding.',
    expect: [
      'Texture: Earthy, mildly dense, and potentially tender when freshly prepared.',
      'Flavour: Aromatic with a subtle natural sweetness and millet notes.',
      'Handling: More delicate than regular wheat roti; careful hydration and shaping help.',
      'Best enjoyed: Fresh and warm with curries, vegetables, or dal.',
    ],
    expectNote: 'Texture depends on hydration, binding, shaping, and cooking time.',
    facts: [
      'Why psyllium husk? Contributes fibre and can help provide binding in gluten-free dough.',
      'Why no prolonged kneading? Gluten-free flour has no wheat gluten network to develop.',
      'Why use multiple millets? Each grain contributes its own flavour and nutritional characteristics.',
    ],
    allergen: 'Contains soybean. Gluten-free claims require appropriate sourcing and cross-contact controls.',
  },

  'Dhaanya Fibre Atta': {
    tagline: '75% Wheat • 25% Fibre-Contributing Ingredients',
    about:
      'Dhaanya Fibre Atta combines wheat with barley, bajra, oats, and psyllium husk. It brings together a variety of fibre-contributing ingredients in a familiar wheat-based atta for everyday meals.',
    notes: [LIVE_MILLING],
    why: [
      'Combines wheat with barley, bajra, oats, and psyllium husk.',
      'Includes a variety of fibre-contributing ingredients.',
      'Familiar wheat base with mild grain and earthy notes.',
      'Suitable for everyday chapatis and rotis.',
      'Freshly prepared through our Live Milling process.',
    ],
    steps: [
      'Add water gradually: Begin with approximately 70–80 ml lukewarm water per 100 g flour and adjust as needed.',
      'Knead well: Knead for approximately 5–7 minutes until workable. Psyllium and fibre can affect dough consistency.',
      'Rest: Cover and rest for 25–35 minutes to allow hydration.',
      'Roll & cook: Roll gently and cook on a preheated tawa over medium heat. Avoid overcooking.',
      'Keep covered: Store cooked rotis in a covered container to help retain moisture.',
    ],
    hydration: '70–80 ml water per 100 g flour. Start lower and add gradually depending on dough consistency.',
    expect: [
      'Texture: Soft to moderately soft when adequately hydrated and not overcooked.',
      'Flavour: Wheat-forward with mild earthy and grain notes.',
      'Handling: May feel different from regular wheat atta due to added grains and psyllium husk.',
      'Best enjoyed: Fresh and warm with curries, vegetables, or dal.',
    ],
    expectNote: 'Texture depends on hydration, resting, rolling, and cooking time.',
    facts: [
      'Why barley and oats? Contribute their own fibre and grain characteristics to the blend.',
      'Why psyllium husk? Adds fibre and influences dough moisture and texture.',
      'Why rest the dough? Allows hydration and can improve handling.',
    ],
    allergen:
      'Contains wheat and gluten. Barley and oats require particular attention for people following a strict gluten-free diet.',
  },

  'Dhaanya Multi Millet Atta': {
    tagline: 'Wheat Range: 80%–50% • Multi-Millet Blend',
    about:
      'Dhaanya Multi Millet Atta brings together wheat and a diverse selection of millets, including ragi, jowar, bajra, foxtail, little, kodo, barnyard, and browntop millet. Available in different wheat-to-millet proportions to suit varied taste and texture preferences.',
    notes: [LIVE_MILLING],
    why: [
      'A diverse blend of traditional millets.',
      'Available in 80%, 65%, and 50% wheat formulations.',
      'Choose your preferred balance of wheat and millet ingredients.',
      'Offers a range of earthy, nutty, and grain flavours.',
      'Suitable for everyday rotis and traditional meals.',
    ],
    steps: [
      'Add water gradually: Begin with approximately 65–80 ml water per 100 g flour. Adjust according to the selected blend.',
      'Knead according to wheat content: Knead the 80% wheat blend for around 5–7 minutes. Mix and knead the higher-millet blends gently until workable.',
      'Rest: Cover and rest for 20–30 minutes. Higher-millet formulations may require individual testing for ideal hydration and handling.',
      'Roll & cook: Roll gently and cook on a preheated tawa. Higher millet proportions may need extra care during rolling.',
      'Keep covered: Store cooked rotis in a covered container to help retain moisture.',
    ],
    hydration:
      'Begin around 65–80 ml water per 100 g flour. Adjust according to wheat percentage, flour characteristics, and dough consistency.',
    expectGroups: [
      {
        title: '80% Wheat + 20% Millets',
        points: [
          'Softer and closer to regular wheat roti.',
          'Mild millet flavour with good puffing potential when well prepared.',
          'Starting dough rest: 20–30 minutes.',
        ],
      },
      {
        title: '65% Wheat + 35% Millets',
        points: [
          'Soft to moderately soft, with a noticeable millet flavour.',
          'Suitable for regular family meals when properly prepared.',
          'Starting dough rest: 20–30 minutes.',
        ],
      },
      {
        title: '50% Wheat + 50% Millets',
        points: [
          'Moderately soft and potentially slightly denser.',
          'More pronounced earthy and nutty millet flavour.',
          'Starting dough rest: 20–30 minutes, subject to testing.',
        ],
      },
    ],
    expectNote:
      'Higher millet proportions change dough handling, texture, and puffing behaviour. Research on wheat–millet chapati supports the importance of optimizing the formulation and preparation conditions.',
    facts: [],
  },

  'Dhaanya Emmer Khapli Wheat': {
    tagline: 'Traditional Ancient Wheat Variety',
    about:
      'Dhaanya Emmer Khapli Wheat is a traditional ancient wheat variety recognised for its characteristic elongated grains, earthy flavour and mildly nutty taste. It brings variety to everyday meals while connecting modern kitchens with heritage grains.',
    notes: [LIVE_MILLING],
    why: [
      'Traditional ancient wheat variety.',
      'Distinctive elongated grain structure.',
      'Naturally earthy and mildly nutty flavour.',
      'Provides dietary fibre, protein and other nutrients.',
      'Suitable for rotis, porridge and traditional recipes.',
      'Live-milled for freshness and transparency.',
    ],
    steps: [
      'Add water gradually: Start with approximately 65–75 ml water per 100 g flour. Adjust according to the flour and desired dough consistency.',
      'Knead gently: Knead until the dough becomes cohesive and workable. Avoid adding too much flour while kneading.',
      'Rest: Cover and rest for around 15–20 minutes. Adjust based on hydration and dough handling.',
      'Roll carefully: Roll gently using sufficient dry flour, without pressing excessively.',
      'Cook properly: Cook on a preheated tawa and avoid overcooking, which may make the roti firm.',
      'Keep covered: Store cooked rotis in a covered container to retain moisture.',
    ],
    hydration:
      'Approximately 65–75 ml water per 100 g flour. Actual requirements depend on milling, grain characteristics and flour absorption.',
    expect: [
      'Mildly nutty and earthy wheat flavour.',
      'A slightly rustic texture compared with regular wheat roti.',
      'Can be soft and pliable when prepared with suitable hydration and cooking.',
      'May require some adjustment in rolling and handling.',
    ],
    expectNote: 'Roti texture varies with the grain, milling fineness, hydration and cooking method.',
    facts: [
      'Why is it called an ancient wheat? Emmer is an old wheat type that has been cultivated for thousands of years.',
      'What makes it different? Its grain shape and flavour profile differ from common modern wheat varieties.',
      'Is it gluten-free? No. Emmer is a wheat variety and contains gluten.',
      'Can I use it every day? It can be used in regular meals if you tolerate wheat and enjoy its distinctive texture and flavour.',
    ],
  },

  'Dhaanya Sharbati Wheat (Rajni Gandha)': {
    tagline: 'Traditional Indian Wheat',
    about:
      'Dhaanya Sharbati Wheat, also known as Rajni Gandha in some markets, is a traditional Indian wheat variety appreciated for its pleasant wheat flavour and mild natural sweetness. It is a versatile choice for everyday rotis, chapatis and other wheat-based preparations.',
    notes: [LIVE_MILLING],
    why: [
      'Traditional Indian wheat variety.',
      'Pleasant flavour with mild natural sweetness.',
      'Suitable for everyday rotis and chapatis.',
      'Provides carbohydrates, protein and dietary fibre.',
      'Versatile for parathas and traditional recipes.',
      'Live-milled for freshness and transparency.',
    ],
    steps: [
      'Add water gradually: Start with approximately 60–70 ml water per 100 g flour. Increase gradually as required.',
      'Knead well: Knead for around 4–6 minutes until the dough becomes smooth and workable.',
      'Rest: Cover and rest for approximately 15–20 minutes to allow the flour to hydrate.',
      'Roll evenly: Use moderate pressure and avoid using excessive dry flour.',
      'Cook on a hot tawa: Cook both sides properly and avoid prolonged cooking to help retain softness.',
      'Keep covered: Place cooked rotis in a covered container or cloth.',
    ],
    hydration:
      'Approximately 60–70 ml water per 100 g flour. Adjust based on flour absorption and dough consistency.',
    expect: [
      'Familiar wheat flavour with a mild natural sweetness.',
      'Soft and pliable texture when properly hydrated and cooked.',
      'Suitable for everyday family meals.',
      'Good versatility for chapatis, rotis and parathas.',
    ],
    expectNote: 'Softness depends on grain quality, flour freshness, hydration, kneading and cooking time.',
    facts: [
      'Why is it popular? Sharbati wheat is appreciated in several parts of India for its flavour and everyday cooking qualities.',
      'Does it taste sweet? It may have a mild natural sweetness, but it is not a sweetened product.',
      'Is it gluten-free? No. Sharbati is a wheat variety and contains gluten.',
      'What is it suitable for? Everyday rotis, chapatis, parathas and other wheat-based dishes.',
    ],
  },

  'Dhaanya Rajwadi Lokwan Wheat': {
    tagline: 'Traditional Everyday Wheat',
    about:
      'Dhaanya Rajwadi Lokwan Wheat is a traditional wheat variety valued for its everyday versatility and familiar wheat flavour. Its kernels are generally more compact and less elongated than Emmer Khapli grains, making it visually distinct from some heritage wheat varieties.\n\nIt is a practical option for preparing everyday rotis, chapatis and traditional wheat-based meals.',
    notes: [LIVE_MILLING],
    why: [
      'Traditional wheat variety for everyday use.',
      'Familiar wheat flavour and aroma.',
      'Suitable for rotis, chapatis and parathas.',
      'Provides energy, protein and dietary fibre.',
      'Versatile for regular family meals.',
      'Live-milled for freshness and transparency.',
    ],
    steps: [
      'Add water gradually: Start with approximately 60–70 ml water per 100 g flour. Adjust according to absorption.',
      'Knead properly: Knead for around 4–6 minutes until the dough becomes smooth and cohesive.',
      'Rest: Cover and rest for approximately 15–20 minutes.',
      'Roll gently: Roll evenly using minimal dry flour to prevent the roti from becoming dry.',
      'Cook on a preheated tawa: Cook until done without keeping the roti on heat for too long.',
      'Keep covered: Store the cooked rotis in a covered container to retain moisture.',
    ],
    hydration:
      'Approximately 60–70 ml water per 100 g flour. Actual water requirements may vary with milling and flour characteristics.',
    expect: [
      'Familiar wheat flavour suitable for everyday meals.',
      'Soft-to-pliable texture when properly prepared.',
      'Generally suitable for regular chapatis and rotis.',
      'A balanced option for those who prefer conventional wheat-based meals.',
    ],
    expectNote: 'Roti softness depends on flour quality, hydration, kneading, resting and cooking technique.',
    facts: [
      'What is Lokwan wheat? Lokwan is a wheat variety commonly sold and used for flour and traditional Indian preparations.',
      'How is it different from Khapli? Lokwan and Emmer Khapli differ in grain characteristics, flavour and dough behaviour.',
      'Is it gluten-free? No. Lokwan is a wheat variety and contains gluten.',
      'Can it be used daily? Yes, it can be used as everyday wheat flour for people who tolerate wheat.',
    ],
  },
};
