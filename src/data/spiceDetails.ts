// Rich website copy for Dhaanya spices, herbs & traditional ingredients. Merged into PRODUCT_DETAILS (initialData.ts).
import type { ProductDetailExtra } from './attaDetails';

const S = (about: string, whyTitle: string, why: string[], usage: string, facts: string[]): ProductDetailExtra => ({
  about,
  whyTitle,
  why,
  usage,
  facts,
});

const BASE: Record<string, ProductDetailExtra> = {
  'Red Chilli- Dabbi': S(
    'Dabbi chilli is a traditional dried Indian chilli variety recognised for its deep red colour, wrinkled appearance, and characteristic chilli aroma. It is used in Indian kitchens where both colour and flavour are important. The exact heat level can vary depending on the variety, growing region, and batch.\n\nDried chillies have been an important part of Indian cooking for generations, adding warmth, colour, and depth to spice preparations.',
    'Why Choose Dhaanya Dabbi Chilli?',
    [
      'Adds rich red colour to curries and masalas.',
      'Offers a balanced combination of flavour and heat.',
      'Suitable for homemade chilli powder and traditional recipes.',
      'Useful for South Indian cooking, pickles, and chutneys.',
    ],
    'Use in curries, sambar, rasam, chutneys, pickles, and spice powders. Remove the seeds for a milder preparation. Store in an airtight container away from moisture.',
    [
      'Chilli peppers originated in the Americas and reached India through historical trade routes.',
      'Their red colour comes mainly from natural pigments called carotenoids.',
    ]
  ),

  'Red Chilli- Byadagi Kaddi': S(
    "Byadagi Kaddi chilli is associated with the Byadagi region of Karnataka and is known for its elongated, wrinkled appearance and strong red colour. It is traditionally used in Karnataka's spice preparations, especially where colour is desired without relying entirely on intense heat.\n\nThis chilli contributes a distinctive aroma and is a familiar ingredient in regional masala blends.",
    'Why Choose Dhaanya Byadagi Kaddi?',
    [
      'Known for its rich red colour.',
      'Suitable for masala powders and gravies.',
      'Provides a traditional chilli aroma.',
      'Useful for South Indian cooking.',
    ],
    'Use in sambar powder, bisibele bath masala, chutneys, curries, and chilli pastes. Lightly roast before grinding if desired, taking care not to burn it. Store dry and airtight.',
    [
      "Byadagi chilli is strongly associated with Karnataka's chilli-growing heritage.",
      'Colour and heat are separate characteristics; a highly coloured chilli does not necessarily have very high heat.',
    ]
  ),

  'Red Chilli- Guntur Long': S(
    "Guntur Long chilli is a dried chilli variety associated with the Guntur region of Andhra Pradesh, a major chilli-growing area. It is valued for its noticeable heat, traditional chilli flavour, and suitability for bold spice preparations.\n\nIt is commonly used in regional cooking where chilli heat forms an important part of the dish's character.",
    'Why Choose Dhaanya Guntur Long?',
    [
      'Adds noticeable heat to recipes.',
      'Suitable for Andhra-style and South Indian cooking.',
      'Useful in pickles, chutneys, and spice blends.',
      'Can be used whole or ground.',
    ],
    "Add to curries, rasam, chutneys, podis, and pickles. Begin with a small quantity and adjust according to the chilli's heat. Store away from humidity and direct sunlight.",
    [
      "Guntur is one of India's best-known chilli production and trading regions.",
      'The heat of dried chillies is primarily associated with capsaicinoid compounds.',
    ]
  ),

  'Red Chilli- Guntur Small': S(
    'Guntur Small chilli is a compact dried chilli variety associated with the Guntur region. Its smaller size and concentrated flavour make it useful in traditional preparations where a stronger chilli character is desired.\n\nThe actual heat can differ between varieties and harvests, so the chilli should be tasted and used carefully.',
    'Why Choose Dhaanya Guntur Small?',
    [
      'Suitable for recipes requiring stronger chilli flavour.',
      'Useful for chutneys, pickles, and podis.',
      'Adds traditional dried chilli aroma.',
      'Convenient for grinding into spice powders.',
    ],
    'Use in chutneys, curries, spice pastes, and homemade masalas. Roast lightly if required and avoid overheating. Store in an airtight container.',
    [
      'Chilli size alone cannot accurately predict its heat level.',
      'Capsaicin is responsible for the characteristic burning sensation of hot chillies.',
    ]
  ),

  'Red Chilli- Salem Ball': S(
    'Salem Ball chilli is a rounded dried chilli variety associated with the Salem region of Tamil Nadu. It is used in traditional cooking for its chilli flavour, colour, and varying levels of heat.\n\nDifferent regional chilli varieties are selected based on whether a recipe needs colour, aroma, heat, or a combination of all three.',
    'Why Choose Dhaanya Salem Ball?',
    [
      'Suitable for traditional South Indian recipes.',
      'Adds flavour and colour to masalas.',
      'Useful in pickles, chutneys, and gravies.',
      'Can be used whole or powdered.',
    ],
    "Use in curry bases, chilli pastes, podis, and homemade spice blends. Adjust the quantity according to the batch's heat. Store in a cool, dry place.",
    [
      'Chilli varieties differ in shape, colour, aroma, and pungency.',
      'Properly dried chillies should be protected from moisture to prevent spoilage.',
    ]
  ),

  Coriander: S(
    'Coriander seeds are the dried fruits of the coriander plant, an aromatic herb belonging to the parsley family. The plant is believed to have originated in the Mediterranean region and has been cultivated and used in Indian cuisine for centuries.\n\nCoriander seeds have a warm, mildly citrusy, and earthy aroma. They form the foundation of many curry powders, masalas, and traditional spice mixtures.',
    'Why Choose Dhaanya Coriander?',
    [
      'Adds depth and a gentle citrus-like aroma.',
      'Essential ingredient in many Indian masalas.',
      'Suitable for whole-spice cooking or grinding.',
      'Versatile in both vegetarian and non-vegetarian dishes.',
    ],
    'Use in sambar powder, rasam, curries, pickles, and spice blends. Dry roast gently before grinding to enhance the aroma. Store in an airtight container away from sunlight.',
    [
      'Coriander seeds and fresh coriander leaves come from the same plant but have different flavour profiles.',
      "India is one of the world's major coriander-producing countries.",
    ]
  ),

  'Rajapuri Turmeric': S(
    'Rajapuri turmeric is a traditional turmeric type associated with the Rajapur region of Maharashtra. Turmeric is the underground rhizome of a plant belonging to the ginger family and has a long history in South Asian food traditions.\n\nIt is valued for its earthy flavour, golden colour, and role in everyday cooking, cultural practices, and traditional preparations.',
    'Why Choose Dhaanya Rajapuri Turmeric?',
    [
      'Provides natural yellow-orange colour.',
      'Adds earthy flavour to dishes.',
      'Suitable for curries, dals, pickles, and spice blends.',
      'Useful for preparing homemade turmeric powder.',
    ],
    'Add to dals, curries, rice dishes, marinades, and pickles. Use moderate quantities because turmeric has a strong colour. Store in an airtight, dry container.',
    [
      "Curcumin is one of turmeric's characteristic yellow pigments.",
      'Turmeric has been used in South Asian culinary and cultural traditions for thousands of years.',
    ]
  ),

  Cloves: S(
    'Cloves are the dried, unopened flower buds of the clove tree, which is native to the Maluku Islands of Indonesia. Historically, cloves were traded across Asia and became an important ingredient in Indian and other international cuisines.\n\nThey have a powerful warm, sweet-spicy aroma and are generally used in small quantities.',
    'Why Choose Dhaanya Cloves?',
    [
      'Adds fragrance and depth to recipes.',
      'Suitable for biryani, pulao, tea, and masala blends.',
      'Works in both sweet and savoury preparations.',
      'A small quantity can provide a strong aroma.',
    ],
    'Add whole cloves to rice dishes, curries, tea, and spice blends. Remove before serving if preferred. Store away from heat and moisture.',
    ['Cloves are flower buds rather than seeds.', 'Eugenol is one of their major aromatic compounds.']
  ),

  Pepper: S(
    "Black pepper is the dried fruit of the pepper plant, Piper nigrum. It is native to the tropical regions of South India's Western Ghats, particularly Kerala, and has been traded internationally for centuries.\n\nKnown as the “King of Spices,” black pepper provides a sharp, warm, and aromatic flavour to everyday food.",
    'Why Choose Dhaanya Black Pepper?',
    [
      'Offers warm and pungent flavour.',
      'Suitable for everyday Indian cooking.',
      'Useful in rasam, soups, marinades, and spice blends.',
      'Freshly ground pepper provides a stronger aroma.',
    ],
    'Use whole or freshly ground in rasam, curries, soups, salads, and beverages. Grind as needed for better flavour. Store in an airtight container.',
    [
      'Peppercorns are berries obtained from a climbing vine.',
      "Piperine is the major compound responsible for black pepper's pungency.",
    ]
  ),

  'Star Anise': S(
    'Star anise is the star-shaped dried fruit of Illicium verum, a tree native to parts of southern China and Vietnam. Its distinctive shape and sweet, licorice-like aroma have made it popular in Asian cuisines and spice blends.\n\nIt is commonly used to add fragrance rather than dominant heat.',
    'Why Choose Dhaanya Star Anise?',
    [
      'Provides a sweet, aromatic flavour.',
      'Useful in biryani, pulao, curries, and masala tea.',
      'Adds complexity to spice blends.',
      'Suitable for slow-cooked dishes.',
    ],
    'Add one or two pieces while cooking rice, curries, broths, or tea. Remove before serving if preferred. Store in a dry, airtight container.',
    [
      'Each point of the star-shaped fruit generally contains a seed.',
      'Star anise and anise seed have similar aromatic notes but come from different plants.',
    ]
  ),

  'Cinnamon Roll (Churul Patta, Indonesia)': S(
    'Cinnamon is the dried inner bark of trees belonging to the Cinnamomum genus. Indonesian cinnamon, often associated with cassia-type cinnamon, is widely used for its warm, woody, and sweet-spicy aroma.\n\nCinnamon bark has been used in cooking and traditional trade for centuries across Asia and other regions.',
    'Why Choose Dhaanya Indonesian Cinnamon?',
    [
      'Offers a warm and aromatic flavour.',
      'Suitable for tea, desserts, rice dishes, and curries.',
      'Useful for infusing flavour into beverages.',
      'Adds depth to homemade masala blends.',
    ],
    'Add the bark to tea, pulao, biryani, curries, and desserts. Remove after cooking when the flavour has infused. Store away from moisture.',
    [
      'Cinnamon is bark, not a seed or fruit.',
      'Different cinnamon species vary in flavour, thickness, and naturally occurring coumarin content.',
    ]
  ),

  'Cassia Cinnamon': S(
    'Cassia cinnamon is obtained from the bark of several Cinnamomum species and is commonly used in Indian cooking. Compared with some true cinnamon varieties, cassia often has a stronger, bolder, and more pungent woody flavour.\n\nIt is a familiar ingredient in traditional spice mixes and slow-cooked dishes.',
    'Why Choose Dhaanya Cassia Cinnamon?',
    [
      'Provides a bold, warm aroma.',
      'Suitable for biryani, pulao, curries, and masalas.',
      'Useful in tea and dessert preparations.',
      'Adds depth to spice blends.',
    ],
    'Use small pieces in rice dishes, curries, tea, and masala preparations. Remove the bark before serving. Store in a cool, dry place.',
    [
      'Cassia and Ceylon cinnamon are related but different types.',
      'Cassia generally contains more naturally occurring coumarin than Ceylon cinnamon.',
    ]
  ),

  'Cardamom Bold': S(
    'Green cardamom is the dried fruit pod of Elettaria cardamomum, a plant native to the Western Ghats of South India. It is valued for its sweet, floral, citrus-like fragrance and has been used in Indian cooking for generations.\n\nThe seeds inside the pod contain much of its characteristic aroma.',
    'Why Choose Dhaanya Bold Cardamom?',
    [
      'Offers a sweet and fragrant flavour.',
      'Suitable for tea, desserts, biryani, and sweets.',
      'Adds aroma without excessive heat.',
      'Useful in traditional masala blends.',
    ],
    'Crush the pods lightly or use the seeds in tea, rice dishes, desserts, and curries. Store airtight to preserve fragrance.',
    ['Cardamom belongs to the ginger family.', 'Its aroma comes from naturally occurring essential oils.']
  ),

  'Cardamom Bulk': S(
    'Green cardamom is an aromatic spice grown in tropical regions, particularly South India. It consists of small green pods containing fragrant seeds with sweet, floral, and slightly citrusy notes.\n\nCardamom is used in both savoury and sweet dishes and is especially important in traditional beverages and festive foods.',
    'Why Choose Dhaanya Cardamom?',
    [
      'Adds natural fragrance to food and beverages.',
      'Suitable for tea, desserts, pulao, and biryani.',
      'Useful in homemade spice powders.',
      'A small quantity can provide noticeable aroma.',
    ],
    'Crush lightly before adding to tea, desserts, and rice dishes. Keep the pods sealed in an airtight container to retain flavour.',
    [
      'Green cardamom is sometimes called the “Queen of Spices.”',
      'Whole pods generally retain aroma better than exposed ground seeds.',
    ]
  ),

  'Black Cardamom (Black Elaichi)': S(
    'Black cardamom is a large aromatic spice pod traditionally associated with the Himalayan region. It is dried using methods that give it a smoky, earthy, and slightly camphor-like aroma, making it different from green cardamom.\n\nIt is commonly used in hearty savoury dishes and robust spice blends.',
    'Why Choose Dhaanya Black Cardamom?',
    [
      'Adds smoky and earthy depth.',
      'Suitable for biryani, rich gravies, and pulao.',
      'Useful in garam masala and slow-cooked dishes.',
      'Works well with other whole spices.',
    ],
    'Add whole pods while cooking and remove before serving if preferred. Use moderately because its aroma is strong. Store airtight.',
    [
      'Black cardamom and green cardamom belong to the same broader family but differ in species and processing.',
      'Its smoky character comes partly from the drying method.',
    ]
  ),

  Nutmeg: S(
    'Nutmeg is the dried seed of the fruit of the nutmeg tree, Myristica fragrans, which is native to the Banda Islands of Indonesia. The same fruit also produces mace, the reddish covering surrounding the seed.\n\nNutmeg has a warm, sweet, woody aroma and is used in small quantities.',
    'Why Choose Dhaanya Nutmeg?',
    [
      'Adds warmth and depth to recipes.',
      'Suitable for sweets, beverages, curries, and spice blends.',
      'Useful in traditional masala preparations.',
      'Strong aroma means only a small amount is needed.',
    ],
    'Grate a small quantity into desserts, milk-based beverages, curries, and masala blends. Store whole nutmeg in an airtight container.',
    [
      'Nutmeg is a seed, while mace is the covering around that seed.',
      'Excessive consumption of nutmeg is not recommended because it contains concentrated aromatic compounds.',
    ]
  ),

  'Nutmeg Mace (Red Flower)': S(
    'Mace is the dried, lacy covering surrounding the seed of the nutmeg fruit. Red mace is commonly associated with the fresh reddish colour of this covering before drying. It has a warm, sweet, slightly peppery aroma.\n\nMace is traditionally used in Indian, Middle Eastern, and Southeast Asian cooking.',
    'Why Choose Dhaanya Red Mace?',
    [
      'Adds a delicate warm fragrance.',
      'Suitable for biryani, pulao, gravies, and spice blends.',
      'Useful in festive and rich preparations.',
      'Offers a different aroma from nutmeg.',
    ],
    'Use a small piece in rice dishes, curries, and masala blends. Remove after cooking if preferred. Store in an airtight container away from sunlight.',
    [
      'Mace and nutmeg come from the same fruit.',
      'Mace is botanically known as an aril, a covering surrounding the seed.',
    ]
  ),

  'Nutmeg Mace (Yellow Flower)': S(
    'Yellow mace is the dried outer covering of the nutmeg seed. Its colour may change during drying and processing, while its flavour remains warm, aromatic, and mildly sweet-spicy.\n\nIt is used as a supporting spice in traditional masalas rather than as the main ingredient.',
    'Why Choose Dhaanya Yellow Mace?',
    [
      'Provides warm and complex aroma.',
      'Suitable for biryani, pulao, and rich gravies.',
      'Useful in homemade garam masala.',
      'Adds depth when combined with other whole spices.',
    ],
    'Add a small piece while preparing rice, curries, or masalas. Store in a cool, dry, airtight container.',
    [
      'Mace is the outer covering of the nutmeg seed.',
      'Its flavour is generally more delicate than nutmeg when used in small quantities.',
    ]
  ),

  'Hing (Asafoetida)': S(
    'Asafoetida, commonly known as hing, is an aromatic resin obtained from the underground parts of certain Ferula plants. These plants are native mainly to regions of Central Asia, including Afghanistan and Iran.\n\nThe raw resin has a powerful sulphur-like aroma, which becomes more savoury and onion-garlic-like when heated. In India, hing is traditionally used in lentil-based dishes and tempering.',
    'Why Choose Dhaanya Hing?',
    [
      'Adds savoury depth to recipes.',
      'Useful in dals, sambar, rasam, and curries.',
      'A small quantity can significantly influence flavour.',
      'Suitable for traditional tempering.',
    ],
    'Add a small pinch to hot oil or ghee during tempering. Check the ingredient label if you require gluten-free hing, as some compounded products contain wheat flour or starch. Store airtight.',
    [
      'Asafoetida is a resin rather than a seed or leaf.',
      'Its strong aroma is associated with sulphur-containing compounds.',
    ]
  ),

  'Dried Curry Leaves': S(
    'Curry leaves are the aromatic leaves of the curry tree, Murraya koenigii, which is native to the Indian subcontinent. They are an important part of South Indian cooking and are commonly used in tempering, chutneys, and spice powders.\n\nDrying changes their texture and reduces some fresh-leaf aroma, but they remain useful for adding a characteristic curry-leaf flavour.',
    'Why Choose Dhaanya Dried Curry Leaves?',
    [
      'Convenient to use and store.',
      'Suitable for tempering and spice powders.',
      'Adds a familiar South Indian aroma.',
      'Useful in chutneys, podis, and curries.',
    ],
    'Add to hot oil during tempering or crush into chutney and spice powders. Store in an airtight container away from moisture and sunlight.',
    [
      'Curry leaves are not related to curry powder.',
      'Fresh leaves generally have a more pronounced aroma than dried leaves.',
    ]
  ),

  'Travancore Tamarind Vaalan Puli': S(
    'Tamarind is the pod of the tamarind tree, Tamarindus indica, which is widely grown in tropical regions, including India. Travancore-style tamarind is associated with the traditional culinary practices of Kerala and surrounding regions.\n\nIts naturally sour, fruity flavour is an important part of South Indian cooking.',
    'Why Choose Dhaanya Travancore Tamarind?',
    [
      'Adds natural sourness to recipes.',
      'Suitable for rasam, sambar, curries, and chutneys.',
      'Useful in traditional Kerala and South Indian cooking.',
      'Provides depth alongside spices and jaggery.',
    ],
    'Soak a small portion in warm water, squeeze out the pulp, and strain before adding to recipes. Store in an airtight container in a cool, dry place.',
    [
      'Tamarind flavour comes from naturally occurring organic acids.',
      'The fruit is used in cuisines across Asia, Africa, and Latin America.',
    ]
  ),

  'Pot Tamarind (Kudampuli)': S(
    'Kudampuli, also known as Malabar tamarind or fish tamarind, is the dried fruit of Garcinia species traditionally used in Kerala cuisine. It has a distinctive sour and smoky flavour that differs from conventional tamarind.\n\nIt is especially associated with fish curries and regional coastal cooking.',
    'Why Choose Dhaanya Kudampuli?',
    [
      'Provides a distinctive regional sourness.',
      'Commonly used in Kerala-style fish curries.',
      'Suitable for traditional coastal recipes.',
      'Adds depth without requiring conventional tamarind.',
    ],
    "Rinse if necessary and soak briefly before adding to curries. Use according to the recipe's sourness requirement. Store airtight in a dry place.",
    [
      'Kudampuli and conventional tamarind come from different plant groups.',
      "Its flavour is particularly associated with Kerala's traditional fish curry preparations.",
    ]
  ),

  'Fenugreek (Uluva)': S(
    'Fenugreek is an aromatic seed spice obtained from Trigonella foenum-graecum. It has been cultivated and used in South Asian, Middle Eastern, and Mediterranean food traditions for centuries.\n\nThe seeds have a slightly bitter, earthy, and maple-like aroma that becomes more pronounced when roasted.',
    'Why Choose Dhaanya Fenugreek?',
    [
      'Adds depth to spice preparations.',
      'Useful in pickles, sambar powder, and curry blends.',
      'Suitable for sprouting and selected traditional recipes.',
      'Offers a distinctive bitter-sweet aroma.',
    ],
    'Use small quantities in pickles, spice powders, and tempering. Light roasting can improve the aroma, but excessive roasting may increase bitterness. Store airtight.',
    [
      'Fenugreek leaves and seeds come from the same plant but have different flavours.',
      'The seeds contain soluble fibre and naturally occurring aromatic compounds.',
    ]
  ),

  'Cumin (Jeerakam)': S(
    'Cumin is the dried seed of Cuminum cyminum, an aromatic plant historically associated with the Mediterranean and West Asian regions. It has become an essential ingredient in Indian cuisine.\n\nCumin provides a warm, earthy, slightly nutty aroma and is used in both whole and ground form.',
    'Why Choose Dhaanya Cumin?',
    [
      'Adds earthy depth to dishes.',
      'Suitable for tempering, spice powders, and beverages.',
      'Useful in curries, rice dishes, and buttermilk preparations.',
      'Can be used whole or freshly ground.',
    ],
    'Add to hot oil for tempering or dry roast before grinding. Use in jeera rice, curries, rasam, and spice blends. Store in an airtight container.',
    [
      "Cumin's aroma comes from naturally occurring volatile oils.",
      'Roasting changes its aroma and can bring out nuttier notes.',
    ]
  ),

  'Fennel (Perumjeerakam)': S(
    'Fennel is the dried fruit of Foeniculum vulgare, an aromatic plant belonging to the carrot family. It has a sweet, mildly licorice-like flavour and is used in Indian, Mediterranean, and Middle Eastern cuisines.\n\nFennel is commonly used in spice blends, cooking, and as a traditional after-meal mouth freshener.',
    'Why Choose Dhaanya Fennel?',
    [
      'Provides a sweet and refreshing aroma.',
      'Suitable for spice blends, curries, and tea.',
      'Useful in pickles and selected desserts.',
      'Can be lightly roasted for enhanced flavour.',
    ],
    'Use whole in curries, spice blends, and teas. Lightly roast and consume as a mouth freshener if desired. Store away from moisture.',
    [
      'Fennel belongs to the same botanical family as cumin and coriander.',
      'Its characteristic aroma is largely associated with anethole.',
    ]
  ),

  'Shah Jeera (Caraway)': S(
    'Shah jeera is a small aromatic seed spice commonly used in Indian cooking, particularly in rich rice dishes and spice blends. It is often associated with caraway or related aromatic seed varieties, although market naming can vary.\n\nIt has a warm, earthy, slightly sweet flavour that differs from ordinary cumin.',
    'Why Choose Dhaanya Shah Jeera?',
    [
      'Adds a distinctive aroma to rice dishes.',
      'Suitable for biryani, pulao, and masala blends.',
      'Useful in traditional bakery and savoury recipes.',
      'Provides a more delicate flavour than regular cumin in some preparations.',
    ],
    'Add whole seeds to hot oil or ghee before preparing rice or curries. Store airtight in a cool, dry place.',
    [
      'The name “shah jeera” can refer to different closely related seed spices in the market.',
      'Confirm the botanical identity and source when precise product labelling is required.',
    ]
  ),

  'Rose Mary Dried': S(
    'Rosemary is an aromatic herb native to the Mediterranean region. It is recognised for its needle-like leaves and strong woody, pine-like fragrance.\n\nDried rosemary is used in international cooking, especially with roasted vegetables, potatoes, breads, soups, and selected meat preparations.',
    'Why Choose Dhaanya Rosemary?',
    [
      'Adds a woody and herbal aroma.',
      'Suitable for roasted and baked dishes.',
      'Useful in seasoning blends and marinades.',
      'Convenient for storage and regular use.',
    ],
    'Crush lightly and add to roasted vegetables, soups, breads, marinades, or infused oils. Store in an airtight container away from sunlight.',
    [
      'Rosemary belongs to the mint family.',
      'Drying concentrates its flavour, so it is generally used in smaller quantities than fresh rosemary.',
    ]
  ),

  'Marathi Moggu Long (Kapok Buds)': S(
    'Marathi moggu is a dried flower bud traditionally used in certain South Indian spice blends, especially regional biryani and masala preparations. It is often associated with the kapok tree and has a warm, aromatic, slightly clove-like character.\n\nThe spice is valued more for its fragrance and complexity than for heat.',
    'Why Choose Dhaanya Marathi Moggu?',
    [
      'Adds distinctive regional aroma.',
      'Suitable for biryani and masala powders.',
      'Useful in traditional Karnataka-style preparations.',
      'Works well with other whole spices.',
    ],
    'Use a small quantity in biryani, pulao, and spice blends. Lightly roast if required. Store airtight away from moisture.',
    [
      'Marathi moggu is a dried flower bud rather than a conventional seed spice.',
      'It is particularly recognised in some South Indian regional cuisines.',
    ]
  ),

  'Marathi Moggu': S(
    'Marathi moggu is a traditional dried aromatic flower bud used in Indian spice preparations. Its flavour is warm, woody, and slightly pungent, and it is commonly included in regional masalas.\n\nIt contributes a distinctive background aroma when combined with cinnamon, cloves, cardamom, and other whole spices.',
    'Why Choose Dhaanya Marathi Moggu?',
    [
      'Adds complexity to spice blends.',
      'Suitable for biryani, pulao, and curries.',
      'Useful in traditional masala preparations.',
      'Strong aroma means it can be used in small quantities.',
    ],
    'Add a small quantity to whole-spice tempering or grind into masala powder. Store in a dry, airtight container.',
    [
      'Marathi moggu is valued for its aroma rather than its pungency.',
      'The exact flavour profile may vary depending on drying and storage conditions.',
    ]
  ),

  'Stone Flower': S(
    'Stone flower, commonly known as kalpasi or dagad phool, is a dried lichen traditionally used as an aromatic ingredient in Indian cooking. It is especially associated with certain Chettinad, Maharashtrian, and South Indian spice preparations.\n\nIt has a subtle earthy, smoky, and woody aroma that develops during cooking.',
    'Why Choose Dhaanya Stone Flower?',
    [
      'Adds distinctive fragrance to masalas.',
      'Suitable for biryani, gravies, and regional spice blends.',
      'Useful in Chettinad-style cooking.',
      'Enhances the complexity of whole-spice preparations.',
    ],
    'Use a small quantity in masala preparations or tempering. Avoid excessive use because its aroma can become overpowering. Store airtight.',
    ['Stone flower is a lichen, not a flower.', 'Its aroma is often released more effectively during cooking.']
  ),

  Oregano: S(
    'Oregano is an aromatic herb native to the Mediterranean and parts of western Eurasia. It is widely used in Mediterranean, European, and modern international cuisines.\n\nDried oregano has a stronger and more concentrated flavour than fresh leaves, with herbal, earthy, and slightly peppery notes.',
    'Why Choose Dhaanya Oregano?',
    [
      'Adds a distinctive herbal flavour.',
      'Suitable for pizza, pasta, soups, and salads.',
      'Useful in seasoning blends and marinades.',
      'Convenient for everyday international cooking.',
    ],
    'Sprinkle over pizza, pasta, roasted vegetables, and salads. Crush gently before use to release aroma. Store airtight and away from sunlight.',
    [
      'Oregano belongs to the mint family.',
      'Different oregano species can vary considerably in aroma and intensity.',
    ]
  ),

  'Methi Leaves Dried': S(
    'Dried methi leaves, commonly called kasuri methi, are the dried leaves of the fenugreek plant. Fenugreek has a long history in Indian agriculture and cooking, and its leaves provide a distinctive earthy, slightly bitter, and aromatic flavour.\n\nKasuri methi is commonly used as a finishing ingredient in North Indian and Punjabi-style dishes.',
    'Why Choose Dhaanya Dried Methi?',
    [
      'Adds a distinctive traditional aroma.',
      'Suitable for curries, gravies, and paneer dishes.',
      'Useful as a finishing ingredient.',
      'A small quantity can enhance the flavour of a dish.',
    ],
    'Crush the dried leaves between your palms and add toward the end of cooking. Store in an airtight container in a dry place.',
    [
      'Methi leaves and fenugreek seeds come from the same plant.',
      'The leaves and seeds have different flavour profiles and culinary applications.',
    ]
  ),

  'Bay Leaves Tej Patta': S(
    'Indian bay leaf, commonly called tej patta, is an aromatic leaf used in traditional Indian cooking. It is different from the Mediterranean bay leaf commonly used in Western cuisine and generally has a warmer, cinnamon-like aroma.\n\nTej patta is widely used in rice dishes, curries, and whole-spice preparations.',
    'Why Choose Dhaanya Bay Leaves?',
    [
      'Adds fragrance to rice and gravies.',
      'Suitable for biryani, pulao, curries, and masalas.',
      'Useful in slow-cooked preparations.',
      'Works well with cinnamon, cloves, and cardamom.',
    ],
    'Add whole leaves during cooking and remove before serving if preferred. Store in a dry, airtight container.',
    [
      'Indian bay leaf and Mediterranean bay leaf come from different plants.',
      'Whole leaves release flavour gradually during cooking.',
    ]
  ),

  'Dried Ginger': S(
    'Dried ginger is prepared from the rhizome of the ginger plant, Zingiber officinale. Ginger has been used in Indian, Chinese, and other Asian culinary traditions for centuries.\n\nDrying produces a warmer, more concentrated flavour with a spicy, earthy, and slightly sweet aroma compared with fresh ginger.',
    'Why Choose Dhaanya Dried Ginger?',
    [
      'Convenient alternative to fresh ginger.',
      'Suitable for spice powders, teas, and traditional preparations.',
      'Adds warmth and depth to recipes.',
      'Useful for longer-term kitchen storage.',
    ],
    'Use in masalas, herbal beverages, curries, and spice blends. Grind if required. Store airtight and away from moisture.',
    [
      'Ginger is a rhizome, not a root in the strict botanical sense.',
      "Drying changes the balance of ginger's naturally occurring flavour compounds.",
    ]
  ),

  'Dried Ginger Powder': S(
    'Ginger powder is made by drying ginger rhizomes and grinding them into a fine powder. It has a warm, pungent, and slightly sweet flavour and is used in both Indian and international cooking.\n\nPowdered ginger is convenient when even distribution and quick incorporation into recipes are required.',
    'Why Choose Dhaanya Ginger Powder?',
    [
      'Easy to measure and mix.',
      'Suitable for masalas, tea, baking, and curries.',
      'Provides concentrated ginger flavour.',
      'Convenient for regular kitchen use.',
    ],
    'Add to tea, spice blends, marinades, curries, and baked recipes. Begin with a small quantity because the flavour is concentrated. Store in an airtight container.',
    [
      'Ginger powder and fresh ginger do not taste exactly the same.',
      'Ground spices generally lose aroma faster than whole spices because more surface area is exposed to air.',
    ]
  ),

  'Dried Lemon': S(
    'Dried lemon is prepared by drying lemon fruit, traditionally to preserve its sour flavour and extend its usability. Dried citrus ingredients are used in several culinary traditions to add tanginess, mild bitterness, and a distinctive aroma.\n\nThe flavour depends on the lemon variety and drying method.',
    'Why Choose Dhaanya Dried Lemon?',
    [
      'Adds a unique sour and citrus-like note.',
      'Suitable for spice blends, teas, and selected curries.',
      'Convenient for storage.',
      'Useful when fresh lemon is unavailable.',
    ],
    'Use in spice blends, teas, broths, and suitable regional recipes. Check for seeds or excess bitterness before use. Store airtight in a dry place.',
    [
      'Drying reduces moisture and concentrates some flavour components.',
      'Dried citrus is used in several culinary traditions across Asia and the Middle East.',
    ]
  ),

  'Ajwain (Ayamodakam)': S(
    'Ajwain, also known as carom seed, is the dried fruit of Trachyspermum ammi. It is an aromatic seed spice widely used in Indian cooking and traditional food preparations.\n\nAjwain has a strong thyme-like aroma, a sharp flavour, and a slightly bitter finish.',
    'Why Choose Dhaanya Ajwain?',
    [
      'Adds distinctive flavour to doughs and savoury foods.',
      'Suitable for parathas, pakoras, snacks, and spice blends.',
      'Commonly used in traditional Indian recipes.',
      'A small quantity provides strong aroma.',
    ],
    'Add to dough, savoury snacks, tempering, and selected curries. Lightly roast if desired. Store in an airtight container away from moisture.',
    [
      'Ajwain belongs to the same botanical family as cumin and coriander.',
      'Thymol is one of its important aromatic compounds.',
    ]
  ),

  'Black Salt': S(
    'Black salt, commonly called kala namak, is a mineral salt traditionally used in South Asian cooking. It is known for its distinctive sulphurous aroma and savoury flavour, which can resemble cooked egg in certain preparations.\n\nIt is commonly used in chaats, chutneys, fruit seasonings, and spice blends.',
    'Why Choose Dhaanya Black Salt?',
    [
      'Provides a distinctive savoury flavour.',
      'Suitable for chaats, chutneys, and seasoning blends.',
      'Useful in plant-based recipes that benefit from an egg-like aroma.',
      'Can be used in small quantities for finishing dishes.',
    ],
    'Add to salads, fruit, chutneys, chaats, and spice blends. Use moderately because it is still a source of sodium. Store airtight to prevent moisture absorption.',
    [
      'The characteristic aroma is associated with sulphur-containing compounds.',
      'Black salt should not be assumed to be sodium-free or automatically healthier than ordinary salt.',
    ]
  ),

  'Pink Salt Powder': S(
    'Pink salt, commonly marketed as Himalayan pink salt, is a naturally coloured rock salt traditionally mined from salt deposits in the Salt Range of Punjab, Pakistan. Its characteristic colour comes from trace minerals present in the salt.\n\nIt is used in traditional cooking and modern kitchens as a seasoning ingredient and can be ground into a fine powder for convenient use.',
    'Why Choose Dhaanya Pink Salt?',
    [
      'Suitable for everyday seasoning.',
      'Offers a distinctive natural colour.',
      'Convenient fine powder for cooking and finishing.',
      'Useful in spice blends and salads.',
    ],
    'Use in curries, soups, salads, marinades, and finishing dishes. Store in an airtight container in a cool, dry place.',
    [
      'Pink salt is still primarily sodium chloride.',
      'It is not proven to provide major health advantages over regular salt.',
    ]
  ),

  'Rose Petals': S(
    'Dried rose petals are prepared from rose flowers and have been used in South Asian, Middle Eastern, and Persian culinary traditions for their floral fragrance. They are commonly incorporated into sweets, beverages, spice blends, and decorative food preparations.\n\nThe flavour and aroma depend on the rose variety and drying process.',
    'Why Choose Dhaanya Rose Petals?',
    [
      'Adds a delicate floral aroma.',
      'Suitable for teas, desserts, and spice blends.',
      'Useful in traditional sweets and garnishing.',
      'Provides natural visual appeal.',
    ],
    'Use in teas, desserts, rose-infused sugar, spice blends, and garnishing. Ensure the petals are food-grade. Store in an airtight container away from sunlight.',
    [
      'Not every ornamental rose is suitable for culinary use.',
      'Rose petals and rose water provide related but different flavour experiences.',
    ]
  ),

  'Kadukka (Haritaki)': S(
    'Kadukka, also known as haritaki, is the dried fruit of Terminalia chebula, a tree traditionally used in South Asian herbal practices. The fruit has a firm, wrinkled appearance and astringent, bitter, and sour flavour characteristics.\n\nIt is used in selected traditional preparations and is not generally consumed like a regular cooking spice.',
    'Why Choose Dhaanya Kadukka?',
    [
      'Traditional ingredient with cultural importance.',
      'Used in selected herbal and regional preparations.',
      'Suitable for those familiar with its traditional applications.',
      'Provides a distinctive naturally astringent flavour.',
    ],
    'Use only according to a suitable traditional recipe or qualified professional guidance. Store in an airtight container in a cool, dry place.',
    [
      'Haritaki is one of the ingredients traditionally associated with Triphala.',
      'Traditional uses should not be treated as proven medical treatments.',
    ]
  ),

  'Poppy (KhusKhus) White': S(
    'White poppy seeds are small, pale seeds obtained from the poppy plant. They have been used in Indian, Middle Eastern, and European cooking as a thickening, textural, and flavouring ingredient.\n\nThey offer a mild, nutty flavour and are often incorporated into gravies, desserts, and baked foods.',
    'Why Choose Dhaanya White Poppy Seeds?',
    [
      'Adds mild nuttiness and texture.',
      'Suitable for gravies and traditional sweets.',
      'Useful as a thickening ingredient in selected recipes.',
      'Can be ground into pastes.',
    ],
    'Soak and grind into gravies, or use in sweets and baking. Follow applicable local food regulations and source only food-grade seeds. Store airtight.',
    [
      'Poppy seeds are culinary seeds and are different from concentrated poppy-derived products.',
      'Their flavour becomes more noticeable when lightly roasted or ground.',
    ]
  ),

  'Thippili (Long Pepper)': S(
    'Thippili, or Indian long pepper, is the dried fruit of Piper longum. It is related to black pepper and has been used in Indian culinary and traditional systems for centuries.\n\nIt has a warm, pungent, slightly sweet, and earthy flavour that is different from ordinary black pepper.',
    'Why Choose Dhaanya Thippili?',
    [
      'Adds distinctive traditional spice flavour.',
      'Suitable for selected rasam and spice preparations.',
      'Useful in regional masala blends.',
      'Offers a different character from black pepper.',
    ],
    'Use in small quantities in spice powders, traditional preparations, and selected beverages. Store airtight in a cool, dry place.',
    [
      'Long pepper and black pepper belong to the same genus, Piper.',
      'Long pepper is traditionally used in several South Asian spice and herbal preparations.',
    ]
  ),

  Pathimukham: S(
    'Pathimukham is a traditional colouring ingredient obtained from the heartwood of Biancaea sappan, commonly known as sappanwood. It has been used in parts of Kerala and South India to impart a reddish-pink colour to water and selected traditional preparations.\n\nIt is more closely associated with beverage and cultural use than everyday seasoning.',
    'Why Choose Dhaanya Pathimukham?',
    [
      'Traditionally used for natural colouring.',
      "Associated with Kerala's regional food culture.",
      'Suitable for selected traditional preparations.',
      'Offers a distinctive culinary heritage connection.',
    ],
    'Use only in food-grade preparations and according to an established recipe. Store dry and away from moisture.',
    [
      'The colour comes from naturally occurring compounds in the wood.',
      'Food-grade identification is important because not all colouring woods are suitable for consumption.',
    ]
  ),

  Karinjali: S(
    'Karinjali is a traditional plant-derived ingredient used in certain South Indian and Ayurvedic preparations. Market names can refer to different botanical materials depending on the region and supplier, so accurate botanical identification is important for product labelling.\n\nIt should be presented according to its verified source and intended culinary or traditional use.',
    'Why Choose Dhaanya Karinjali?',
    [
      'Represents regional traditional ingredient knowledge.',
      'Suitable for specific traditional preparations when correctly identified.',
      'Offers a connection to heritage ingredients.',
      'Requires clear sourcing and food-grade verification.',
    ],
    'Use only according to a verified recipe and supplier guidance. Store in a dry, airtight container.',
    [
      'Regional names can refer to different plants.',
      'Dhaanya should confirm the botanical name before making specific health or usage claims.',
    ]
  ),

  'Iratti Madhuram': S(
    'Iratti madhuram, commonly known as licorice, is the dried root of Glycyrrhiza glabra. It is native to parts of Europe and Asia and has been used in traditional food and herbal preparations for generations.\n\nThe root has a naturally sweet flavour and is used in selected beverages and traditional preparations.',
    'Why Choose Dhaanya Iratti Madhuram?',
    [
      'Offers natural sweetness and a distinctive flavour.',
      'Suitable for selected traditional beverages.',
      'Used in certain herbal preparations.',
      'Provides a connection to traditional ingredient knowledge.',
    ],
    'Use only in suitable food or traditional preparations and in moderate quantities. Store airtight in a cool, dry place.',
    [
      "Glycyrrhizin is responsible for much of licorice's sweetness.",
      'Excessive licorice consumption may cause adverse effects, including effects on blood pressure and potassium levels.',
    ]
  ),

  'Nannari Root': S(
    'Nannari is a traditional aromatic root commonly associated with Indian summer beverages. It is generally obtained from Hemidesmus indicus, a plant native to the Indian subcontinent.\n\nThe root is valued for its earthy, sweet, and fragrant character and is traditionally used in syrups and refreshing drinks.',
    'Why Choose Dhaanya Nannari?',
    [
      'Suitable for traditional beverage preparation.',
      'Offers a distinctive earthy aroma.',
      'Associated with South Indian summer drink culture.',
      'Useful for homemade syrups and infusions.',
    ],
    'Clean and prepare according to a suitable syrup or beverage recipe. Store the dried root in an airtight container away from moisture.',
    [
      'Nannari is traditionally used in beverages such as nannari sarbath.',
      'The botanical identity should be confirmed because regional names may vary.',
    ]
  ),

  'Vanga Dried': S(
    '“Vanga” is a regional name that may refer to different plant-derived ingredients depending on the local market and supplier. Its precise botanical identity and culinary use should be confirmed before finalising the product description.\n\nFor Dhaanya, the product should be labelled with its verified common name, botanical name where appropriate, and intended food application.',
    'Why Choose Dhaanya Vanga?',
    [
      'Represents traditional regional ingredient diversity.',
      'Can be used according to its verified culinary application.',
      'Supports the preservation of traditional food knowledge.',
      'Requires clear identification and responsible labelling.',
    ],
    "Use only after confirming the ingredient's identity and appropriate food use. Store in an airtight container in a cool, dry place.",
    [
      'Regional names can have different meanings across Indian languages and markets.',
      'Botanical verification helps prevent incorrect usage and misleading claims.',
    ]
  ),

  Kapayavakam: S(
    'Kapayavakam is a regional traditional ingredient name whose exact botanical identity can vary depending on the locality and supplier. Before publishing detailed culinary information, its source, local name, and intended use should be confirmed.\n\nThis helps ensure that customers receive clear and reliable information rather than an assumed description based only on the market name.',
    'Why Choose Dhaanya Kapayavakam?',
    [
      'Represents traditional ingredient diversity.',
      'Can be presented with accurate regional and botanical information.',
      'Supports customer awareness of heritage ingredients.',
      'Requires verified food-grade sourcing.',
    ],
    'Use only according to the verified product identity and an established recipe. Store in a clean, dry, airtight container.',
    [
      'Many traditional Indian ingredient names vary by language and region.',
      'Confirming botanical identity is especially important for ingredients used in traditional herbal preparations.',
    ]
  ),
};

// The live catalogue uses a different name for some of these products.
const ALIASES: Record<string, string> = {
  'Karingali (Black Cutch)': 'Karinjali',
};

export const SPICE_DETAILS: Record<string, ProductDetailExtra> = {
  ...BASE,
  ...Object.fromEntries(Object.entries(ALIASES).map(([alias, name]) => [alias, BASE[name]])),
};
