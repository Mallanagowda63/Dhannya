// Rich website copy for Dhaanya pulses, legumes & grains. Merged into PRODUCT_DETAILS (initialData.ts).
import type { ProductDetailExtra } from './attaDetails';

const WHY_TITLE = 'Why Choose This & Where Is It Used?';

const P = (about: string, why: string[], facts: string[]): ProductDetailExtra => ({
  about,
  whyTitle: WHY_TITLE,
  why,
  facts,
});

const BASE: Record<string, ProductDetailExtra> = {
  'White Rajma (Pinto Beans)': P(
    'Dhaanya White Rajma, also known as Pinto Beans, is a nutritious legume appreciated for its creamy texture, mild earthy flavour, and versatility in everyday cooking. When cooked properly, these beans develop a soft interior that absorbs spices and seasonings beautifully.\n\nThey provide plant-based protein, dietary fibre, and essential minerals, making them a useful addition to balanced meals. Their mild flavour makes them suitable for both traditional Indian dishes and international recipes.',
    [
      'A good source of plant-based protein and fibre.',
      'Develops a creamy texture when slow-cooked.',
      'Absorbs spices and gravies effectively.',
      'Useful for hearty, filling meals.',
      'Common uses: Rajma curry, bean salads, soups, stews, Mexican-style beans, and grain bowls.',
    ],
    [
      'Pinto means “speckled” in Spanish, referring to the bean’s appearance before cooking.',
      'The beans generally become lighter and more uniform in colour after cooking.',
      'Soaking helps reduce cooking time.',
      'Beans should be thoroughly boiled before consumption.',
    ]
  ),

  'Red Rajma (Kidney Beans)': P(
    'Dhaanya Red Rajma, commonly known as Kidney Beans, is a popular Indian kitchen staple known for its rich colour, hearty texture, and ability to absorb robust spices. It is especially popular in North Indian cuisine, where it is traditionally cooked into a thick, flavourful curry.\n\nRed Rajma contains plant-based protein, dietary fibre, folate, and minerals. When properly soaked and cooked, it develops a soft interior while retaining a satisfying bite.',
    [
      'A valuable source of plant-based protein and fibre.',
      'Suitable for hearty and filling meals.',
      'Works well with strong spices and thick gravies.',
      'Useful in vegetarian and vegan meal planning.',
      'Common uses: Rajma masala, rice bowls, salads, soups, and bean-based fillings.',
    ],
    [
      'Kidney beans are named for their shape, which resembles a kidney.',
      'Raw or undercooked kidney beans contain naturally occurring lectins.',
      'Proper soaking and thorough boiling are important for safe consumption.',
      'The beans absorb flavours particularly well during slow cooking.',
    ]
  ),

  'Lobia (Red Cowpeas)': P(
    'Dhaanya Lobia, also called Red Cowpeas, is a versatile pulse with a mild, earthy flavour and a soft yet slightly firm texture when cooked. It is widely used in Indian households for its ease of preparation and suitability for everyday meals.\n\nLobia provides plant-based protein, dietary fibre, and various micronutrients. Its balanced flavour allows it to work well in both lightly spiced and rich preparations.',
    [
      'Provides protein and fibre in everyday meals.',
      'Has a mild flavour that pairs well with Indian spices.',
      'Suitable for curries, salads, and one-pot meals.',
      'A practical alternative to commonly used beans.',
      'Common uses: Lobia curry, sundal, salads, pulao, soups, and mixed-bean dishes.',
    ],
    [
      'Cowpeas are cultivated and consumed in many parts of the world.',
      'They belong to the legume family.',
      'Soaking can help improve cooking time and texture.',
      'Lobia is commonly paired with rice or roti for a balanced meal.',
    ]
  ),

  'Urad Gola Fine-Ball': P(
    'Dhaanya Urad Gola Fine-Ball is a whole black gram variety with a pale interior and a rounded grain shape. Urad is valued in Indian cooking for its creamy consistency, protein content, and important role in traditional fermented foods.\n\nWhen cooked, it develops a rich texture and can add body to dals, curries, and batter-based preparations.',
    [
      'A source of plant-based protein and dietary fibre.',
      'Provides a creamy texture when cooked.',
      'Important for traditional South Indian fermentation.',
      'Suitable for both everyday and festive recipes.',
      'Common uses: Dal makhani, idli batter, dosa batter, vada, papad, and traditional urad dal preparations.',
    ],
    [
      'Urad dal is one of the key ingredients in idli and dosa batter.',
      'Fermentation improves the texture and flavour of many urad-based preparations.',
      'Whole urad generally requires soaking before cooking.',
      'Urad is traditionally used in several Indian papad varieties.',
    ]
  ),

  'Urad White Chilka (Split)': P(
    'Dhaanya Urad White Chilka is split black gram with its dark outer skin removed or partially removed, leaving the pale inner portion. It cooks into a smooth and creamy consistency and is widely used in Indian dals and traditional batter preparations.\n\nIts mild flavour allows it to blend easily with spices, vegetables, and other pulses.',
    [
      'Cooks relatively quickly compared with many whole pulses.',
      'Provides plant-based protein and fibre.',
      'Creates a smooth texture in dals and batters.',
      'Useful for traditional Indian recipes.',
      'Common uses: Urad dal, dosa and idli batter, vada, papad, and mixed dals.',
    ],
    [
      'Splitting the pulse changes its cooking characteristics.',
      'Urad contributes fermentation-friendly properties to traditional batters.',
      'The dal can become creamy without requiring additional thickeners.',
      'It pairs well with rice, spices, and tempering ingredients.',
    ]
  ),

  'Urad Dal Black Split': P(
    'Dhaanya Black Split Urad Dal is split black gram that retains its dark outer skin. It offers a distinctive appearance, earthy flavour, and a hearty texture when cooked.\n\nThe skin contributes additional fibre and gives the dal a deeper colour compared with skinless urad dal. It is suitable for comforting dals and traditional regional recipes.',
    [
      'Retains the outer skin of the black gram.',
      'Provides protein and dietary fibre.',
      'Offers a deeper, earthy flavour.',
      'Works well in rustic and traditional preparations.',
      'Common uses: Split urad dal, mixed dals, khichdi, sprouts, and regional pulse recipes.',
    ],
    [
      'The dark skin is naturally present on the black gram seed.',
      'Keeping the skin changes the colour and texture of the cooked dish.',
      'Soaking can improve cooking consistency.',
      'It can be combined with other dals for varied texture and flavour.',
    ]
  ),

  'Sago (Tapioca Pearls)': P(
    'Dhaanya Sago, commonly called Sabudana, consists of small translucent pearls made from tapioca starch. When soaked and cooked, the pearls become soft, slightly chewy, and translucent.\n\nSago is primarily a source of carbohydrates and is used in several traditional Indian recipes, especially during fasting and festive occasions.',
    [
      'Provides an easily prepared carbohydrate-rich ingredient.',
      'Develops a soft and chewy texture when properly soaked.',
      'Useful for quick snacks and traditional recipes.',
      'Naturally free from gluten-containing grains.',
      'Common uses: Sabudana khichdi, vada, kheer, payasam, puddings, and fasting recipes.',
    ],
    [
      'Sago is made from starch, not from a whole grain.',
      'It is relatively low in protein and fibre compared with whole pulses.',
      'Soaking time affects the final texture of sabudana khichdi.',
      'It is often paired with peanuts to add flavour and texture.',
    ]
  ),

  'Lapsi Daliya (Broken Wheat)': P(
    'Dhaanya Lapsi Daliya is made from broken wheat grains and is valued for its hearty texture, mild nutty flavour, and versatility. Because the grain is broken rather than finely milled, it can provide a more textured eating experience.\n\nIt contains naturally occurring wheat components, including gluten, and can be used in both savoury and sweet preparations.',
    [
      'Offers a wholesome alternative to refined cereal products.',
      'Provides carbohydrates and some dietary fibre.',
      'Suitable for filling, everyday meals.',
      'Easy to combine with vegetables, pulses, and spices.',
      'Common uses: Vegetable daliya, sweet lapsi, porridge, khichdi, upma, and breakfast bowls.',
    ],
    [
      'Daliya is made by breaking wheat into smaller pieces.',
      'Cooking time depends on the size of the broken grains.',
      'It can be prepared with milk for a sweet dish or vegetables for a savoury meal.',
      'It is different from refined wheat flour because the grain retains a more textured form.',
    ]
  ),

  'Horse Gram (Muthira)': P(
    'Dhaanya Horse Gram, traditionally known as Muthira, is a hardy legume with a distinct earthy flavour and firm texture. It has been used in Indian regional cuisines for generations, particularly in South India.\n\nHorse gram contains plant-based protein, dietary fibre, and several minerals. It is particularly suitable for hearty dishes and traditional preparations.',
    [
      'A protein- and fibre-containing traditional pulse.',
      'Offers a strong, earthy flavour.',
      'Suitable for hearty curries and soups.',
      'Adds variety to regular pulse consumption.',
      'Common uses: Horse gram curry, rasam, chutney, sprouts, sundal, soups, and traditional South Indian preparations.',
    ],
    [
      'Horse gram is known for its ability to grow in relatively challenging conditions.',
      'It is used in traditional food cultures across several Indian regions.',
      'Soaking and pressure cooking help soften the grain.',
      'Roasting can deepen its flavour before grinding.',
    ]
  ),

  'Green Gram (Whole Moong)': P(
    'Dhaanya Green Gram, also known as Whole Moong, is a small green legume with a mild flavour and firm outer skin. It is valued for its versatility, protein content, and ability to be used in both cooked and sprouted forms.\n\nWhole moong offers a combination of plant-based protein, fibre, and micronutrients.',
    [
      'Provides plant-based protein and dietary fibre.',
      'Suitable for sprouting and cooking.',
      'Has a mild flavour that works with many seasonings.',
      'Useful for light meals and traditional recipes.',
      'Common uses: Sprouts, moong curry, sundal, salads, khichdi, soups, and mixed dals.',
    ],
    [
      'Whole moong can be sprouted under suitable conditions.',
      'Sprouting changes its texture and flavour.',
      'It generally requires soaking before cooking.',
      'It can be used in both savoury and lightly sweet preparations.',
    ]
  ),

  'Green Peas': P(
    'Dhaanya Green Peas are small, naturally sweet legumes with a fresh flavour and tender texture when cooked. They are commonly used to add colour, sweetness, and nutritional variety to everyday meals.\n\nGreen peas provide carbohydrates, plant-based protein, fibre, and several micronutrients.',
    [
      'Adds natural sweetness and colour to dishes.',
      'Provides fibre and plant-based protein.',
      'Versatile in everyday cooking.',
      'Suitable for curries, rice dishes, and snacks.',
      'Common uses: Matar masala, pulao, peas curry, soups, cutlets, upma, and vegetable mixes.',
    ],
    [
      'Green peas are legumes, even though they are commonly used like vegetables.',
      'Their natural sweetness comes partly from their carbohydrate composition.',
      'Dried peas require soaking and longer cooking than fresh peas.',
      'They pair well with potatoes, paneer, rice, and Indian spices.',
    ]
  ),

  'Corn (Maize)': P(
    'Dhaanya Corn, also known as Maize, is a versatile cereal grain used across different food traditions. It has a naturally mild sweetness and can be consumed whole, ground, or processed into different food products.\n\nCorn primarily provides carbohydrates and can contribute fibre depending on the form in which it is consumed.',
    [
      'A versatile traditional cereal grain.',
      'Provides energy through carbohydrates.',
      'Useful in both savoury and sweet recipes.',
      'Can be ground into flour or used as whole kernels.',
      'Common uses: Corn porridge, makki roti, corn snacks, soups, popcorn, cornmeal dishes, and mixed flour preparations.',
    ],
    [
      'Corn is botanically classified as a cereal grain.',
      'Different varieties are used for food, flour, animal feed, and other purposes.',
      'Yellow corn gets its colour from naturally occurring pigments.',
      'Corn flour and corn starch are different products with different cooking properties.',
    ]
  ),

  'Bengal Gram Dal (Besan)': P(
    'Dhaanya Bengal Gram Dal, commonly associated with Chana Dal and Besan production, is a versatile pulse ingredient with a mild, nutty flavour. It is widely used in Indian cooking for its texture, flavour, and ability to work in both whole and ground forms.\n\nWhen ground into flour, it becomes besan, a staple ingredient in many Indian snacks and dishes.',
    [
      'Provides plant-based protein and dietary fibre.',
      'Has a mild nutty flavour.',
      'Useful in both traditional and modern recipes.',
      'Naturally gluten-free when uncontaminated.',
      'Common uses: Chana dal, besan, pakora, dhokla, kadhi, ladoo, cheela, and savoury batters.',
    ],
    [
      'Besan is generally made by grinding Bengal gram or desi chickpeas.',
      'Chana dal and besan have different textures and cooking applications.',
      'Besan is widely used as a binding ingredient.',
      'It can be roasted to develop a deeper nutty aroma.',
    ]
  ),

  'Masoor Dal (Split)': P(
    'Dhaanya Masoor Dal is split red lentil known for its quick cooking time, mild earthy flavour, and soft texture. It is a convenient ingredient for everyday meals and is commonly used in Indian households.\n\nMasoor dal provides plant-based protein, fibre, and essential nutrients, making it a practical addition to balanced meals.',
    [
      'Convenient and relatively quick to cook.',
      'Provides plant-based protein and fibre.',
      'Develops a soft texture with minimal cooking.',
      'Pairs well with a variety of spices and vegetables.',
      'Common uses: Masoor dal, soups, khichdi, dal tadka, vegetable stews, and lentil-based gravies.',
    ],
    [
      'Red lentils generally cook faster than many whole legumes.',
      'They often soften without requiring a long soaking period.',
      'Their colour becomes more golden or yellowish after cooking.',
      'They are used in several cuisines around the world.',
    ]
  ),

  'Toor Dal Fine (Yellow)': P(
    'Dhaanya Toor Dal Fine, also known as Arhar Dal, is a staple Indian pulse appreciated for its mild flavour, creamy texture, and compatibility with traditional tempering. It is widely used in everyday Indian cooking.\n\nToor dal provides plant-based protein, fibre, and various micronutrients, making it a regular component of many balanced meals.',
    [
      'A familiar staple for everyday Indian cooking.',
      'Provides protein and dietary fibre.',
      'Works well with spices, vegetables, and tempering.',
      'Develops a smooth consistency when cooked properly.',
      'Common uses: Dal tadka, sambar, rasam accompaniment, khichdi, dal fry, and traditional regional dals.',
    ],
    [
      'Toor dal is one of the most widely used pulses in India.',
      'It is commonly cooked with turmeric and finished with a tempering of spices.',
      'Pressure cooking can help achieve a smoother consistency.',
      'The texture varies according to the variety and degree of processing.',
    ]
  ),

  'Moong Dal': P(
    'Dhaanya Moong Dal is made from split and dehulled green gram. It is known for its mild flavour, soft texture, and relatively quick cooking time.\n\nMoong dal is commonly used in light, everyday meals and is valued for its plant-based protein and dietary fibre content.',
    [
      'Relatively quick and convenient to prepare.',
      'Has a mild flavour suitable for simple meals.',
      'Provides plant-based protein and fibre.',
      'Works well in light and hearty recipes.',
      'Common uses: Moong dal, khichdi, dosa batter, cheela, soups, dal fry, and sweet preparations.',
    ],
    [
      'Moong dal is made from whole green gram after removing the outer skin and splitting it.',
      'It generally cooks faster than whole moong.',
      'It can be used in both sweet and savoury recipes.',
      'It is often combined with rice to prepare khichdi.',
    ]
  ),

  'Putana (Parched Gram)': P(
    'Dhaanya Putana, also called Roasted Gram or Dalia Gram, is made from roasted Bengal gram. It has a naturally nutty flavour, crunchy texture, and convenient shelf-stable form.\n\nIt is commonly used as a snack and as an ingredient in chutneys, powders, and traditional recipes. Roasted gram contributes plant-based protein and fibre.',
    [
      'Ready-to-eat roasted ingredient.',
      'Provides protein and fibre.',
      'Offers a crunchy texture and nutty flavour.',
      'Convenient for snacks and traditional preparations.',
      'Common uses: Chutney powder, roasted gram snacks, sattu-style preparations, dry chutneys, and homemade spice blends.',
    ],
    [
      'Roasting changes the aroma, texture, and flavour of Bengal gram.',
      'Roasted gram is commonly used in South Indian coconut chutney.',
      'It can be ground into a powder for thickening and flavour.',
      'It is different from raw chana because it has already undergone roasting.',
    ]
  ),

  Soybean: P(
    'Dhaanya Soybean is a protein-rich legume with a naturally firm texture and mild, nutty flavour. Soybeans are valued for their high-quality plant protein and their versatility in traditional and modern food preparations.\n\nThey contain protein, fibre, and naturally occurring fats. Proper cooking is important to improve texture and digestibility.',
    [
      'A concentrated source of plant-based protein.',
      'Contains protein, fibre, and naturally occurring fats.',
      'Useful for adding variety to vegetarian diets.',
      'Can be incorporated into flour blends and cooked dishes.',
      'Common uses: Soybean curry, roasted soybeans, soy flour, tofu production, sprouts, and protein-rich flour blends.',
    ],
    [
      'Soybean contains all nine essential amino acids, although the amount and digestibility vary by preparation.',
      'Soybeans require proper cooking before consumption.',
      'They are used to make tofu, soy milk, tempeh, and soy flour.',
      'Soy is a recognised major food allergen and should be clearly declared in products.',
    ]
  ),

  'Black Chana': P(
    'Dhaanya Black Chana, also known as Kala Chana, is a traditional legume with a firm texture, earthy flavour, and naturally dark outer skin. It is widely used in Indian cooking and is valued for its protein and fibre content.\n\nCompared with lighter chickpea varieties, black chana often retains a firmer bite after cooking.',
    [
      'Provides plant-based protein and dietary fibre.',
      'Offers a hearty texture and earthy flavour.',
      'Suitable for filling meals and snacks.',
      'Works well in both dry and gravy-based recipes.',
      'Common uses: Kala chana curry, sundal, chaat, sprouts, salads, and festive preparations.',
    ],
    [
      'Black chana is generally smaller than Kabuli chickpeas.',
      'Its dark skin contributes to its distinctive appearance.',
      'Soaking helps reduce cooking time.',
      'It can be pressure-cooked, sprouted, roasted, or ground into flour.',
    ]
  ),

  'Roasted Chana': P(
    'Dhaanya Roasted Chana is made from chickpeas that have been roasted to develop a crisp texture and nutty flavour. It is a convenient traditional snack that can be enjoyed on its own or combined with other ingredients.\n\nRoasted chana provides plant-based protein, fibre, and carbohydrates, making it a useful snack option.',
    [
      'Convenient, crunchy, and easy to carry.',
      'Provides protein and dietary fibre.',
      'Offers a naturally nutty roasted flavour.',
      'Suitable for snacks and homemade mixes.',
      'Common uses: Direct snacking, roasted chana mixtures, chutney powders, trail mixes, and sattu-style preparations.',
    ],
    [
      'Roasting develops flavour through browning reactions.',
      'Roasted chana can be ground into a fine powder.',
      'It is commonly combined with jaggery, spices, or dry fruits.',
      'The nutritional profile depends on the roasting process and any added ingredients.',
    ]
  ),

  'Kabuli Chana (White Chickpeas)': P(
    'Dhaanya Kabuli Chana, also known as White Chickpeas, is a popular legume recognised for its larger size, mild flavour, and creamy texture when cooked. It is widely used in Indian, Middle Eastern, and Mediterranean cuisines.\n\nKabuli chana provides plant-based protein, dietary fibre, and several essential micronutrients. Its neutral flavour makes it suitable for a wide range of recipes.',
    [
      'A versatile source of plant-based protein and fibre.',
      'Develops a creamy interior when properly cooked.',
      'Absorbs spices and sauces effectively.',
      'Suitable for both traditional and international recipes.',
      'Common uses: Chole, chana masala, hummus, salads, falafel, soups, and roasted chickpea snacks.',
    ],
    [
      'Kabuli chickpeas are generally larger and lighter in colour than desi chickpeas.',
      'Soaking helps soften the beans and reduce cooking time.',
      'Chickpeas can be boiled, roasted, sprouted, or ground into flour.',
      'Hummus is traditionally made using cooked chickpeas, tahini, lemon, and other seasonings.',
    ]
  ),
};

// The live catalogue uses slightly different names for some of these products.
const ALIASES: Record<string, string> = {
  'Red Rajma Kidney Beans': 'Red Rajma (Kidney Beans)',
  'Green Gram': 'Green Gram (Whole Moong)',
  'Corn Maize': 'Corn (Maize)',
  'Putana (Parched Gram) Fine': 'Putana (Parched Gram)',
  'Soya Bean': 'Soybean',
  'Kabuli Chana White': 'Kabuli Chana (White Chickpeas)',
};

export const PULSE_DETAILS: Record<string, ProductDetailExtra> = {
  ...BASE,
  ...Object.fromEntries(Object.entries(ALIASES).map(([alias, name]) => [alias, BASE[name]])),
};
