// Rich website copy for Dhaanya dates, dried fruits, nuts & seeds. Keys are the live catalogue names.
// Merged into PRODUCT_DETAILS (initialData.ts).
import type { ProductDetailExtra } from './attaDetails';

const F = (about: string, whyTitle: string, why: string[], facts: string[]): ProductDetailExtra => ({
  about,
  whyTitle,
  why,
  facts,
});

export const DRY_FRUIT_DETAILS: Record<string, ProductDetailExtra> = {
  // ---------- Dates ----------
  'Medjool Jumbo Dates': F(
    'Medjool dates are large, naturally sweet dates traditionally associated with the Middle East and North Africa. They are known for their impressive size, soft flesh, caramel-like sweetness and naturally wrinkled skin. Medjool Jumbo Dates are a premium variety enjoyed as a snack and used in desserts, energy bars and traditional sweet preparations.\n\nThe fruit contains a naturally occurring combination of carbohydrates, dietary fibre and minerals. Its rich sweetness makes it a popular alternative to refined-sugar-based snacks.',
    'Why Choose Dhaanya Medjool Jumbo Dates?',
    [
      'Large-sized dates with a soft, chewy texture.',
      'Naturally sweet with a caramel-like flavour.',
      'Convenient energy-rich snack for busy days.',
      'Suitable for smoothies, desserts and energy balls.',
      'Can be stuffed with nuts or nut butter for a satisfying snack.',
    ],
    [
      'Medjool dates are often called the “king of dates” because of their size.',
      'They are botanically a fruit called a drupe.',
      'Their sweetness increases as they mature and soften.',
      'Store in an airtight container in a cool, dry place or refrigerate for longer freshness.',
    ]
  ),

  'Ajwa Dates': F(
    'Ajwa dates are a well-known variety traditionally associated with Al-Madinah in Saudi Arabia. They are generally small to medium-sized, dark in colour and recognised for their soft-to-chewy texture and distinctive fruity, mildly caramel-like flavour.\n\nAjwa dates have cultural and historical importance in the Arabian region and are commonly enjoyed as a traditional food. They can be eaten directly or incorporated into everyday snacks and desserts.',
    'Why Choose Dhaanya Ajwa Dates?',
    [
      'Distinctive dark colour and traditional flavour.',
      'Convenient, naturally sweet snack.',
      'Suitable for direct consumption and gifting.',
      'Can be added to milkshakes, smoothies and desserts.',
      'Provides dietary fibre and naturally occurring minerals.',
    ],
    [
      'Ajwa is particularly associated with the Madinah region of Saudi Arabia.',
      'Date texture varies depending on ripeness and storage conditions.',
      'Dates contain natural sugars, so portion size matters for people monitoring sugar intake.',
      'Store away from moisture, heat and direct sunlight.',
    ]
  ),

  'Safawi Dates': F(
    'Safawi dates are a dark-coloured date variety commonly associated with Saudi Arabia. They are known for their soft-to-chewy texture, deep brown to almost black appearance and balanced sweetness with mild caramel-like notes.\n\nSafawi dates are often enjoyed as an everyday snack because of their pleasant texture and rich flavour. They can also be used in traditional sweets, smoothies and homemade energy bites.',
    'Why Choose Dhaanya Safawi Dates?',
    [
      'Dark-coloured variety with a rich, fruity taste.',
      'Soft and chewy texture when properly matured.',
      'Suitable for everyday snacking.',
      'Useful in homemade energy balls and desserts.',
      'Contains naturally occurring fibre and minerals.',
    ],
    [
      'Safawi dates are commonly grown in the Al-Madinah region.',
      'Their colour can range from dark brown to nearly black.',
      'They can be paired with almonds, walnuts or peanut butter.',
      'Keep in an airtight container and refrigerate if you prefer a firmer texture.',
    ]
  ),

  'Royal Prime Kimia Dates': F(
    'Kimia dates, also known as Bam dates, are traditionally associated with the Bam region of Iran. They are known for their dark appearance, soft texture and rich, syrupy sweetness. The variety is widely consumed in Iran and other parts of the Middle East.\n\nRoyal Prime Kimia Dates are suitable for those who prefer a soft date with a deep, naturally sweet flavour. They can be enjoyed directly or used in desserts and beverages.',
    'Why Choose Dhaanya Kimia Dates?',
    [
      'Soft texture with rich sweetness.',
      'Suitable for everyday snacking and traditional recipes.',
      'Can be blended into smoothies and date pastes.',
      'Useful for homemade desserts without requiring refined sugar.',
      'Naturally provides carbohydrates and dietary fibre.',
    ],
    [
      'Kimia dates are closely associated with Iran.',
      'They are often sold in soft, moist forms.',
      'Their texture can become firmer when refrigerated.',
      'Store sealed and away from excess moisture to maintain quality.',
    ]
  ),

  'Sukkari Wet Dates': F(
    'Sukkari dates are a popular Saudi Arabian variety, especially associated with the Qassim region. The name Sukkari is derived from the Arabic word related to sweetness. These dates are known for their golden-brown colour, delicate skin and sweet, soft-to-tender texture.\n\nWet or fresh-style Sukkari dates generally contain more moisture than dried dates, giving them a softer and sometimes slightly crunchy texture depending on their stage of ripeness.',
    'Why Choose Dhaanya Sukkari Dates?',
    [
      'Naturally sweet with a delicate flavour.',
      'Softer and moister than many fully dried varieties.',
      'Suitable for direct snacking and traditional serving.',
      'Can be paired with coffee, nuts and milk.',
      'A convenient alternative to processed sweet snacks.',
    ],
    [
      'Sukkari dates are strongly associated with Saudi Arabia.',
      'Their texture changes as they mature and lose moisture.',
      'Wet dates generally require more careful storage than dry dates.',
      'Refrigeration is recommended, particularly after opening.',
    ]
  ),

  'Dates- Dry Black Fine (Oman Kaarakka)': F(
    'Dry black dates, commonly known in parts of South India as Kaarakka, are a traditionally consumed dried fruit. This variety is commonly associated with regions of the Middle East and is used in Indian households for snacking and traditional preparations.\n\nCompared with soft dates, dry black dates generally have a firmer, chewier texture and a more concentrated sweetness. They can be eaten directly or soaked to soften them before use.',
    'Why Choose Dhaanya Dry Black Dates?',
    [
      'Traditional dried fruit with concentrated sweetness.',
      'Suitable for direct snacking or soaking.',
      'Can be used in milk-based drinks and desserts.',
      'Convenient to store when kept dry.',
      'Provides naturally occurring carbohydrates and fibre.',
    ],
    [
      "Drying reduces moisture and concentrates the fruit's natural sugars.",
      'Soaking can help soften firmer dates.',
      'Texture differs depending on the drying process and variety.',
      'Store in an airtight container away from humidity.',
    ]
  ),

  // ---------- Raisins ----------
  'Black Seedless Raisins': F(
    'Black seedless raisins are dried grapes that are usually dark brown to black in colour. They are produced by drying suitable grape varieties and are commonly associated with grape-growing regions such as India, Afghanistan and other parts of Asia.\n\nTheir flavour is generally sweet and fruity, with a soft or chewy texture depending on the drying process. They are used in Indian cooking, baking, desserts and everyday snacking.',
    'Why Choose Dhaanya Black Seedless Raisins?',
    [
      'Convenient dried fruit with a naturally sweet taste.',
      'Seedless and easy to use in recipes.',
      'Suitable for baking, desserts and breakfast bowls.',
      'Can be soaked and added to traditional preparations.',
      'Provides dietary fibre and naturally occurring plant compounds.',
    ],
    [
      'Raisins are made by removing moisture from grapes.',
      'Drying increases the concentration of natural sugars.',
      'Raisins can be soaked to improve softness and texture.',
      'Store in a cool, dry place and protect from moisture.',
    ]
  ),

  'Munakka Raisins': F(
    'Munakka is a large dried grape variety traditionally used in Indian households and Ayurvedic food practices. Unlike many seedless raisins, Munakka commonly contains seeds and has a larger, fuller shape with a naturally sweet, fruity flavour.\n\nIt is often soaked overnight and consumed directly or used in milk-based drinks, desserts and traditional preparations.',
    'Why Choose Dhaanya Munakka?',
    [
      'Larger dried grapes with a rich, fruity sweetness.',
      'Suitable for soaking and traditional recipes.',
      'Can be added to milk, porridge and desserts.',
      'Useful as a naturally sweet ingredient in homemade snacks.',
      'Provides carbohydrates, fibre and naturally occurring minerals.',
    ],
    [
      'Munakka commonly contains seeds, unlike seedless raisins.',
      'Soaking softens the skin and makes it easier to consume.',
      'It is traditionally used in several Indian household preparations.',
      'Store in an airtight container away from heat and humidity.',
    ]
  ),

  'Yellow Ball Raisins': F(
    'Yellow ball raisins are dried grapes with a golden-yellow colour and a sweet, fruity taste. Their lighter colour is influenced by the grape variety and drying or processing method. They are commonly used in South Asian cooking, baking and festive food preparations.\n\nThese raisins offer a softer visual appearance and can add sweetness, colour and texture to both sweet and savoury dishes.',
    'Why Choose Dhaanya Yellow Ball Raisins?',
    [
      'Naturally sweet with a fruity flavour.',
      'Adds colour and texture to dishes.',
      'Suitable for pulao, desserts and baking.',
      'Convenient for snacking and breakfast bowls.',
      'Easy to combine with nuts and seeds.',
    ],
    [
      'Raisin colour depends on grape variety and processing.',
      'Yellow raisins may have a different flavour profile from dark raisins.',
      'Their natural sugar content becomes concentrated during drying.',
      'Store sealed in a cool, dry location.',
    ]
  ),

  'Raisin- Afghan Long': F(
    'Afghan long raisins are elongated dried grapes traditionally associated with Afghanistan, a region known for its grape cultivation and dried-fruit trade. They are recognised for their long shape, sweet fruity flavour and chewy texture.\n\nThey are commonly used in rice dishes, desserts, baking and snack mixes. Their distinctive appearance also makes them suitable for premium dry-fruit presentations.',
    'Why Choose Dhaanya Afghan Long Raisins?',
    [
      'Distinctive long shape and fruity flavour.',
      'Suitable for traditional rice dishes and desserts.',
      'Adds sweetness and visual appeal to recipes.',
      'Can be used in trail mixes and breakfast bowls.',
      'Convenient for everyday snacking.',
    ],
    [
      'Afghanistan has a long history of grape cultivation and raisin production.',
      'Long raisins are valued for their shape and appearance.',
      'Texture depends on moisture content and drying conditions.',
      'Store away from direct sunlight and humidity.',
    ]
  ),

  // ---------- Figs & dried fruits ----------
  'Fig (Big)': F(
    'Figs are fruits of the fig tree, traditionally cultivated in the Mediterranean region, West Asia and parts of South Asia. Dried figs are made by removing moisture from ripe fruit, resulting in a naturally sweet flavour and chewy texture with small edible seeds.\n\nBig dried figs are commonly used as a snack and in desserts, breakfast bowls and traditional dry-fruit preparations.',
    'Why Choose Dhaanya Big Figs?',
    [
      'Larger size suitable for direct snacking.',
      'Naturally sweet with a distinctive seed-filled texture.',
      'Provides dietary fibre and naturally occurring minerals.',
      'Can be soaked and added to milk or breakfast bowls.',
      'Useful in homemade energy snacks and desserts.',
    ],
    [
      'The small seeds inside figs are edible.',
      'Figs contain both soluble and insoluble dietary fibre.',
      'Soaking can soften dried figs and improve their texture.',
      'Store in a sealed container; refrigerate if they are moist or soft.',
    ]
  ),

  'Fig (Small)': F(
    'Dried figs are prepared from ripe figs by reducing their moisture content. They have a naturally sweet, mildly honey-like flavour and a chewy texture with numerous tiny edible seeds.\n\nNormal-sized dried figs are versatile and can be eaten directly, soaked overnight or used in desserts, breakfast dishes and homemade snack preparations.',
    'Why Choose Dhaanya Figs?',
    [
      'Naturally sweet and fibre-containing dried fruit.',
      'Suitable for everyday snacking.',
      'Can be soaked for softer texture.',
      'Useful in smoothies, porridge and desserts.',
      'Pairs well with almonds, walnuts and other dry fruits.',
    ],
    [
      'Figs are one of the oldest cultivated fruit crops.',
      'Their seeds contribute to their characteristic texture.',
      'Dried figs contain concentrated natural sugars.',
      'Keep dry and sealed to prevent moisture absorption.',
    ]
  ),

  'Apricot Soft': F(
    'Apricots are stone fruits traditionally cultivated in Central Asia, China, the Mediterranean and other temperate regions. Dried apricots are produced by removing moisture from ripe fruit, concentrating their sweet-tart flavour.\n\nSoft dried apricots have a tender, chewy texture and are commonly used in snacks, desserts, baking and breakfast preparations.',
    'Why Choose Dhaanya Soft Apricots?',
    [
      'Sweet-tart flavour with a tender texture.',
      'Convenient snack and recipe ingredient.',
      'Suitable for baking, desserts and breakfast bowls.',
      'Can be chopped into trail mixes and energy bites.',
      'Contains dietary fibre and naturally occurring carotenoids.',
    ],
    [
      'Apricots belong to the same broad fruit family as peaches and plums.',
      'Their orange colour comes partly from carotenoid pigments.',
      'Some dried apricots are treated with sulphur dioxide to preserve colour; check the product label.',
      'Store in an airtight container in a cool place.',
    ]
  ),

  'Kiwi Green Dried': F(
    "Green kiwi is a fruit originally associated with China and later widely cultivated in New Zealand and other countries. Dried green kiwi is made by reducing the fruit's moisture content, creating a chewy texture with a sweet and mildly tangy flavour.\n\nIt can be enjoyed as a snack or added to breakfast bowls, trail mixes and desserts.",
    'Why Choose Dhaanya Dried Green Kiwi?',
    [
      'Distinctive sweet-tart flavour.',
      'Adds colour and variety to snack mixes.',
      'Suitable for breakfast bowls and desserts.',
      'Convenient alternative to fresh fruit when stored properly.',
      'Provides naturally occurring fibre and fruit compounds.',
    ],
    [
      'Kiwi fruit originated in China and was commercially developed in New Zealand.',
      'Green kiwi contains naturally occurring vitamin C, though levels vary after processing.',
      'Some commercial dried kiwi products contain added sugar.',
      'Check the ingredient label and store in a cool, dry place.',
    ]
  ),

  // Not yet in the live catalogue -- shows once a product with this name is added.
  'Kiwi Yellow Dried': F(
    'Yellow kiwi is a variety of kiwifruit known for its golden-yellow flesh and generally sweeter, less acidic flavour than green kiwi. It is cultivated in several countries, including New Zealand and other suitable growing regions.\n\nDried yellow kiwi has a chewy texture and concentrated fruity flavour, making it suitable for snacking and adding to desserts or trail mixes.',
    'Why Choose Dhaanya Dried Yellow Kiwi?',
    [
      'Naturally fruity flavour with a mild tang.',
      'Adds variety and colour to snack mixes.',
      'Suitable for desserts, cereals and breakfast bowls.',
      'Convenient for travel and everyday snacking.',
      'Offers naturally occurring fruit nutrients, depending on processing.',
    ],
    [
      'Yellow kiwi is a different cultivar group from green kiwi.',
      'Its golden colour comes from natural plant pigments.',
      "Drying concentrates the fruit's sugar content.",
      'Check whether the product contains added sugar before purchasing.',
    ]
  ),

  'Pineapple Ring Dried': F(
    'Pineapple is a tropical fruit believed to have originated in South America and is now cultivated in many tropical regions. Dried pineapple rings are prepared by removing moisture from pineapple slices, producing a chewy texture and concentrated sweet-tart flavour.\n\nThe ring shape makes them suitable for snacking, baking, dessert decoration and trail mixes.',
    'Why Choose Dhaanya Dried Pineapple Rings?',
    [
      'Tropical fruity flavour with a pleasant tang.',
      'Attractive ring shape for serving and gifting.',
      'Suitable for baking and dessert decoration.',
      'Convenient snack when fresh fruit is not available.',
      'Can be chopped into trail mixes and breakfast bowls.',
    ],
    [
      'Pineapple contains bromelain, a group of enzymes naturally found in the fruit.',
      'Drying reduces moisture and concentrates natural sugars.',
      'Some dried pineapple contains added sugar or preservatives.',
      'Store sealed in a cool, dry place.',
    ]
  ),

  'Dried Blueberries': F(
    'Blueberries are small berries native to North America and now cultivated in several regions around the world. Dried blueberries have a concentrated sweet-tart flavour and a chewy texture.\n\nThey are commonly used in cereals, granola, baking, trail mixes and desserts. Depending on the preparation, commercial dried blueberries may contain added sugar.',
    'Why Choose Dhaanya Dried Blueberries?',
    [
      'Sweet-tart berry flavour.',
      'Suitable for breakfast bowls and baking.',
      'Adds colour and variety to trail mixes.',
      'Convenient to use in homemade snack preparations.',
      'Contains naturally occurring plant compounds found in blueberries.',
    ],
    [
      'Blueberries contain anthocyanins, the pigments responsible for their blue colour.',
      "Drying changes the fruit's texture and concentrates its sugars.",
      'Many dried blueberry products are sweetened; check the ingredients.',
      'Store in an airtight container away from moisture.',
    ]
  ),

  'Dried Cranberries': F(
    'Cranberries are tart berries native to North America and are commonly cultivated in the United States and Canada. Because fresh cranberries are naturally quite acidic, many dried cranberry products are sweetened to improve their taste.\n\nDried cranberries have a chewy texture and are commonly used in baking, salads, cereals, trail mixes and desserts.',
    'Why Choose Dhaanya Dried Cranberries?',
    [
      'Pleasant sweet-tart flavour.',
      'Suitable for baking and breakfast preparations.',
      'Adds colour and texture to salads and snack mixes.',
      'Convenient for travel and everyday use.',
      'Works well with nuts, seeds and oats.',
    ],
    [
      'Cranberries are naturally more tart than many other berries.',
      'Most commercial dried cranberries contain added sugar.',
      'Their red colour comes from naturally occurring pigments.',
      'Check the label for added sugar, oil or preservatives.',
    ]
  ),

  'Dried Strawberry': F(
    'Strawberries are widely cultivated fruits belonging to the rose family. Dried strawberries are prepared by removing moisture from fresh fruit, resulting in a concentrated fruity flavour and chewy or crisp texture depending on the drying method.\n\nThey are used in desserts, cereals, baking, snack mixes and decorative food preparations.',
    'Why Choose Dhaanya Dried Strawberries?',
    [
      'Distinctive sweet and fruity flavour.',
      'Adds colour to desserts and breakfast bowls.',
      'Suitable for baking and homemade trail mixes.',
      'Convenient to use throughout the year.',
      'Can be paired with chocolate, oats and nuts.',
    ],
    [
      'The small seed-like structures on the outside are technically individual fruits.',
      "Drying concentrates the fruit's natural sweetness.",
      'Some products contain added sugar or flavouring.',
      'Store in a cool, dry place in an airtight container.',
    ]
  ),

  'Dried Cherry': F(
    'Cherries are stone fruits cultivated in temperate regions, including parts of Europe, North America and Asia. Dried cherries are made by reducing the moisture content of ripe cherries, creating a chewy texture and concentrated sweet-tart flavour.\n\nThey are commonly used in baking, desserts, breakfast bowls and premium trail mixes.',
    'Why Choose Dhaanya Dried Cherries?',
    [
      'Rich fruity flavour with a sweet-tart balance.',
      'Suitable for baking and dessert recipes.',
      'Adds colour and texture to trail mixes.',
      'Can be chopped into cereals and energy bites.',
      'Convenient for snacking and gifting.',
    ],
    [
      'Cherries contain naturally occurring anthocyanin pigments.',
      'Dried cherries may be sweetened depending on the product.',
      'Their flavour works well with dark chocolate and nuts.',
      'Store sealed and protect from moisture.',
    ]
  ),

  'Mango Dried': F(
    'Mango is a tropical fruit believed to have originated in South Asia, particularly the Indian subcontinent. Dried mango is made by reducing the moisture content of ripe mango slices, resulting in a chewy texture and concentrated sweet, fruity flavour.\n\nIt is widely enjoyed as a snack and used in trail mixes, desserts and travel-friendly food preparations.',
    'Why Choose Dhaanya Dried Mango?',
    [
      'Familiar tropical flavour in a convenient form.',
      'Suitable for snacking and travel.',
      'Can be added to trail mixes and desserts.',
      'Offers a chewy texture and concentrated fruit taste.',
      'A practical way to enjoy mango outside its fresh season.',
    ],
    [
      'Mango has been cultivated in South Asia for thousands of years.',
      'Dried mango may contain added sugar, depending on processing.',
      'Some products may include preservatives to maintain colour.',
      'Store away from heat and humidity.',
    ]
  ),

  'Papaya Dried': F(
    "Papaya is a tropical fruit native to the Americas and now grown in many warm regions. Dried papaya is prepared by reducing the fruit's moisture content. It generally has a chewy texture and mild, sweet tropical flavour.\n\nMany commercial dried papaya products are sweetened, as the fruit is sometimes processed with sugar syrup before drying.",
    'Why Choose Dhaanya Dried Papaya?',
    [
      'Mild tropical flavour and chewy texture.',
      'Suitable for baking and dessert preparations.',
      'Adds colour and sweetness to trail mixes.',
      'Convenient for travel and snacking.',
      'Can be combined with nuts, seeds and other dried fruits.',
    ],
    [
      'Papaya contains the enzyme papain, which is naturally present in the fruit.',
      'Dried papaya products may contain significant added sugar.',
      'Colour can vary depending on the variety and processing method.',
      'Always check the ingredient label for sweeteners and additives.',
    ]
  ),

  'Prunes Dried': F(
    'Prunes are dried plums, traditionally produced from plum varieties suitable for drying. They are known for their dark colour, soft-to-chewy texture and rich sweet flavour with mild tartness.\n\nPrunes are widely used in baking, breakfast bowls, desserts and traditional food preparations. They are also recognised for their dietary fibre content.',
    'Why Choose Dhaanya Prunes?',
    [
      'Soft, naturally sweet dried fruit.',
      'A useful source of dietary fibre.',
      'Suitable for direct snacking and breakfast bowls.',
      'Can be chopped into baked goods and desserts.',
      'Pairs well with oats, nuts and yoghurt.',
    ],
    [
      'Prunes are simply dried plums.',
      'They contain sorbitol and dietary fibre, which may support bowel regularity in some people.',
      'Excessive consumption may cause digestive discomfort.',
      'Store sealed in a cool place and refrigerate if the product is very moist.',
    ]
  ),

  'Plum Black Dried': F(
    'Black plum, also known as Jamun, is a fruit native to the Indian subcontinent and other parts of South and Southeast Asia. Dried black plum products are prepared by reducing moisture from the fruit and may have a concentrated tart, fruity flavour.\n\nDepending on the preparation, dried black plum may be consumed as a snack or used in traditional food and beverage preparations.',
    'Why Choose Dhaanya Dried Black Plum?',
    [
      'Distinctive tangy and fruity flavour.',
      'Suitable for traditional snack preparations.',
      'Can be used in selected beverage and dessert recipes.',
      'Adds variety to a dried-fruit collection.',
      'Convenient to store compared with fresh fruit.',
    ],
    [
      'Jamun is botanically related to several tropical fruit species in the myrtle family.',
      'The fruit contains naturally occurring dark pigments.',
      'Drying changes its texture and concentrates its flavour.',
      'Store in an airtight container away from moisture.',
    ]
  ),

  'Pineapple Coin (Dried)': F(
    'Dried pineapple coins are made from pineapple pieces cut into a smaller, rounded shape before drying. Pineapple is a tropical fruit with origins in South America and is now grown in several tropical regions.\n\nThe coin shape provides convenient portioning and makes the product suitable for snacking, baking, dessert decoration and trail mixes.',
    'Why Choose Dhaanya Dried Pineapple Coins?',
    [
      'Convenient bite-sized format.',
      'Sweet-tart tropical flavour.',
      'Suitable for snacks, baking and desserts.',
      'Easy to combine with nuts and other dried fruits.',
      'Attractive option for gifting and serving.',
    ],
    [
      'Pineapple is made up of many fused fruit sections.',
      'Drying concentrates its natural sugars and flavour.',
      'Some products contain added sugar or preservatives.',
      'Keep sealed and away from moisture for better quality.',
    ]
  ),

  'Amla Dry Candy': F(
    "Amla, also known as Indian gooseberry, is a traditional fruit native to the Indian subcontinent. It is valued in Indian food culture for its naturally sour, astringent flavour. Amla dry candy is prepared by processing amla pieces with sweeteners and drying them to create a chewy or firm snack.\n\nThe final taste depends on the amount of sugar, spices and other ingredients used during preparation.",
    'Why Choose Dhaanya Amla Dry Candy?',
    [
      'Traditional Indian fruit preparation.',
      'Offers a combination of sweet, sour and mildly tangy flavours.',
      'Convenient way to enjoy amla in snack form.',
      'Suitable for travel and small snack portions.',
      'Can be enjoyed after meals or as a traditional treat.',
    ],
    [
      'Amla is naturally rich in vitamin C, although processing and drying may reduce its content.',
      'Many amla candies contain added sugar.',
      'The fruit is widely used in Indian culinary and traditional wellness practices.',
      'Store in a dry, airtight container to prevent stickiness and moisture absorption.',
    ]
  ),

  'Ginger Cube': F(
    'Ginger is an aromatic rhizome that originated in Southeast Asia and has been used in Asian cooking and traditional food practices for centuries. Dried ginger cubes are prepared by cutting ginger into small pieces and processing them through drying, sometimes with sugar.\n\nThey have a warm, spicy flavour with a sweet finish when prepared as candied ginger. They are commonly used in baking, desserts, beverages and snack preparations.',
    'Why Choose Dhaanya Ginger Cubes?',
    [
      'Distinctive warm and spicy ginger flavour.',
      'Suitable for baking and dessert recipes.',
      'Can be added to tea, herbal drinks and homemade snacks.',
      'Convenient alternative to fresh ginger for selected preparations.',
      'Adds flavour and texture to trail mixes.',
    ],
    [
      'Ginger is a rhizome, not a root in the strict botanical sense.',
      'Ginger contains naturally occurring compounds such as gingerols.',
      'Candied ginger generally contains added sugar.',
      'Store in an airtight container in a cool, dry place.',
    ]
  ),

  // ---------- Cashews ----------
  'Cashew 180': F(
    'Cashew 180 is a premium large-kernel cashew grade, known for its plump appearance, creamy texture and naturally mild sweetness. The number refers to the approximate number of kernels per pound, making 180 a relatively large cashew grade.\n\nIdeal for snacking, sweets, desserts, gravies, baking and festive preparations.',
    'Why Choose Dhaanya Cashew 180?',
    [
      'Large, premium-grade cashew kernels.',
      'Naturally creamy and mildly sweet.',
      'Excellent for snacking and cooking.',
      'Great for sweets, desserts and rich gravies.',
      'Naturally provides protein, unsaturated fats, copper and magnesium.',
    ],
    [
      'Cashews are seeds found inside the fruit of the cashew tree.',
      'In cashew grading, a lower count generally means larger kernels.',
      'Cashews naturally contain unsaturated fats and plant protein.',
      'Store airtight in a cool, dry place.',
    ]
  ),

  'Cashew 240': F(
    'Cashew 240 is a popular whole-cashew grade offering a good balance between kernel size, texture and everyday versatility. Its creamy bite and naturally sweet flavour make it suitable for both snacking and cooking.',
    'Why Choose Dhaanya Cashew 240?',
    [
      'Good-sized whole cashew kernels.',
      'Naturally creamy and mildly sweet.',
      'Suitable for everyday snacking.',
      'Excellent for Indian sweets and desserts.',
      'Versatile enough for both cooking and baking.',
    ],
    [
      'The “240” indicates an approximate kernel count per pound.',
      'Cashews provide protein, copper, magnesium and unsaturated fats.',
      'Roasting develops a deeper nutty aroma.',
      'Keep protected from moisture for best freshness.',
    ]
  ),

  // Not yet in the live catalogue -- shows once a product with this name is added.
  'Cashew Burma (Premium)': F(
    'Premium Burma cashews are selected for their distinctive kernel quality, creamy texture and rich nutty flavour. They are well suited for premium snacking as well as traditional Indian cooking.',
    'Why Choose Dhaanya Cashew Burma?',
    [
      'Selected premium cashew kernels.',
      'Rich, creamy mouthfeel.',
      'Naturally mild and buttery flavour.',
      'Excellent for sweets and festive preparations.',
      'Enjoyable both as a snack and cooking ingredient.',
    ],
    [
      'Cashew quality can vary naturally with origin, harvest and grading.',
      'Cashews are commonly used in Indian sweets, gravies and desserts.',
      'Their creamy texture makes them useful for thickening and enriching recipes.',
    ]
  ),

  'Cashew Roasted And Salted': F(
    'Whole cashews roasted to develop their natural nutty aroma and satisfying crunch, finished with a savoury touch of salt.',
    'Why Choose Dhaanya Roasted & Salted Cashews?',
    [
      'Ready-to-eat snack.',
      'Naturally crunchy and aromatic.',
      'Balanced savoury flavour.',
      'Convenient for work, travel and entertaining.',
      'Can also be chopped into salads and savoury dishes.',
    ],
    [
      'Roasting intensifies the natural aroma of nuts.',
      'Cashews naturally contain protein, unsaturated fats and minerals.',
      'Keep sealed after opening to maintain crunch.',
    ]
  ),

  'Cashew- Pepper Garlic 240': F(
    'Roasted cashews seasoned with the warm bite of black pepper. A simple savoury combination that complements the natural richness of cashews.',
    'Why Choose Dhaanya Pepper Cashews?',
    [
      'Nutty roasted flavour.',
      'Distinctive pepper seasoning.',
      'Ready-to-eat snack.',
      'Great with tea or coffee.',
      'Suitable for snack mixes and entertaining.',
    ],
    [
      'Black pepper provides piperine, its characteristic pungent compound.',
      'Keep away from moisture to retain the roasted crunch.',
    ]
  ),

  'Cashew Split': F(
    'Split cashews are cashew kernels naturally divided into two or more pieces during processing. They retain the familiar creamy cashew flavour while being especially convenient for cooking and baking.',
    'Why Choose Dhaanya Cashew Split?',
    [
      'Great value for everyday cooking.',
      'Creamy cashew flavour.',
      'Excellent for sweets and desserts.',
      'Convenient for gravies and curries.',
      'Easy to roast, chop or blend.',
    ],
    [
      'Splits are created during processing rather than being a different variety of cashew.',
      'They are especially useful when appearance of whole kernels is not important.',
      'Ideal for grinding into cashew paste.',
    ]
  ),

  'Cashew- Broken PS': F(
    'Broken cashew pieces offer the same naturally rich cashew flavour in smaller pieces, making them particularly useful for cooking, baking and garnishing.',
    'Why Choose Dhaanya Cashew Broken Pieces?',
    [
      'Excellent for everyday cooking.',
      'Great for sweets and desserts.',
      'Easy to add to baked goods.',
      'Convenient for garnishing rice dishes and halwa.',
      "A practical choice when whole kernels aren't necessary.",
    ],
    [
      'Broken cashews are commonly used by confectioners and bakeries.',
      'Smaller pieces are easy to distribute through batters and mixtures.',
      'Store airtight in a cool, dry place.',
    ]
  ),

  // ---------- Almonds, pistachios & other nuts ----------
  'Almonds Jumbo': F(
    'Jumbo almonds are selected for their larger kernel size and satisfying crunch. They have a naturally mild sweetness and are suitable for both everyday snacking and cooking.',
    'Why Choose Dhaanya Jumbo Almonds?',
    [
      'Large, attractive kernels.',
      'Naturally crunchy texture.',
      'Convenient everyday snack.',
      'Great for desserts and traditional recipes.',
      'Naturally provides protein, fibre, vitamin E and magnesium.',
    ],
    [
      'Almonds are technically seeds rather than true botanical nuts.',
      'Their skin contains naturally occurring plant compounds.',
      'Soaking softens the skin and changes their texture, but is not required for enjoying almonds.',
    ]
  ),

  'Almonds USA': F(
    'Selected almonds with a naturally crisp texture and mildly sweet, nutty flavour. A versatile everyday ingredient for snacking, baking and Indian preparations.',
    'Why Choose Dhaanya Almonds USA?',
    [
      'Naturally crunchy.',
      'Mild, pleasant flavour.',
      'Great for everyday snacking.',
      'Excellent for baking and desserts.',
      'A useful source of vitamin E, fibre, protein and unsaturated fats.',
    ],
    [
      'Almonds naturally contain vitamin E.',
      'Their combination of fat, fibre and protein can make them a satisfying snack.',
      'Store airtight and away from heat.',
    ]
  ),

  'Pista California (AM)': F(
    'California pistachios are known for their characteristic green kernel, pleasant crunch and mildly sweet, nutty flavour. They are equally enjoyable as a snack or culinary ingredient.',
    'Why Choose Dhaanya California Pistachios?',
    [
      'Naturally crunchy.',
      'Distinctive sweet-nutty flavour.',
      'Excellent for snacking.',
      'Ideal for sweets, desserts and garnishing.',
      'Naturally provides protein, fibre and unsaturated fats.',
    ],
    [
      'Pistachios are botanically seeds of the pistachio fruit.',
      'Their green colour comes partly from naturally occurring pigments.',
      'Pistachios are commonly used in Indian mithai and desserts.',
    ]
  ),

  'Pista Salted & Roasted': F(
    'Premium California pistachios roasted for a deeper nutty aroma and finished with a savoury touch of salt.',
    'Why Choose Dhaanya Premium Pista?',
    [
      'Premium pistachio kernels.',
      'Roasted for enhanced flavour and crunch.',
      'Balanced salty finish.',
      'Ready-to-eat snack.',
      'Great for entertaining and festive occasions.',
    ],
    [
      'Roasting changes the aroma and texture of pistachios.',
      'Pistachios naturally provide protein, fibre and unsaturated fats.',
      'Store sealed to maintain crunch.',
    ]
  ),

  'Pista Plain w o Shell': F(
    'Shelled pistachio kernels with their natural green colour, delicate crunch and mildly sweet flavour. With the shell removed, they are ready to use in cooking, baking and desserts.',
    'Why Choose Dhaanya Shelled Pistachios?',
    [
      'No shelling required.',
      'Convenient for recipes.',
      'Excellent for desserts and garnishing.',
      'Easy to chop or grind.',
      'Naturally rich in protein, fibre and unsaturated fats.',
    ],
    [
      'Shelled pistachios save preparation time.',
      'They are widely used in ice creams, sweets, cakes and desserts.',
      'Keep airtight because shelled nuts are more exposed to air.',
    ]
  ),

  'Walnut Super White (Kashmiri)': F(
    'Premium light-coloured walnut kernels with a delicate texture and characteristic earthy, slightly bitter walnut flavour.',
    'Why Choose Dhaanya Super White Walnuts?',
    [
      'Premium light-coloured kernels.',
      'Distinctive walnut flavour.',
      'Excellent for snacking.',
      'Great for baking and desserts.',
      'Naturally provides omega-3 ALA, fibre and unsaturated fats.',
    ],
    [
      'Walnuts are particularly notable among nuts for their plant-based omega-3 ALA.',
      'The darker skin of walnuts contains naturally occurring polyphenols.',
      'Store in a cool place; refrigeration can help extend freshness.',
    ]
  ),

  'Walnut Chile': F(
    'Chilean walnuts are appreciated for their rich flavour, pleasant crunch and versatile culinary use. They work equally well as a snack or ingredient.',
    'Why Choose Dhaanya Chile Walnuts?',
    [
      'Rich, earthy walnut flavour.',
      'Naturally crunchy.',
      'Great for snacking.',
      'Excellent in baking and desserts.',
      'Provides plant-based omega-3 ALA and unsaturated fats.',
    ],
    [
      'Walnuts naturally contain ALA, a plant-based omega-3 fatty acid.',
      'They can be used in both sweet and savoury recipes.',
      'Store airtight and preferably cool to protect their natural oils.',
    ]
  ),

  'Hazel Nuts': F(
    'Hazelnuts have a naturally rich, buttery flavour and satisfying crunch. They are especially popular in baking, confectionery and chocolate-based preparations.',
    'Why Choose Dhaanya Hazelnuts?',
    [
      'Rich, naturally nutty flavour.',
      'Excellent roasted.',
      'Great for baking and desserts.',
      'Ideal for homemade nut spreads.',
      'Naturally provides vitamin E, fibre and unsaturated fats.',
    ],
    [
      'Hazelnuts are widely used in confectionery and chocolate products.',
      'Roasting brings out their characteristic aroma.',
      'They can be chopped, ground or eaten whole.',
    ]
  ),

  'Brazil Nuts': F(
    'Brazil nuts are large, rich-tasting nuts with a naturally creamy texture. They are especially known for their exceptionally high selenium content.',
    'Why Choose Dhaanya Brazil Nuts?',
    [
      'Rich, creamy texture.',
      'Distinctive nutty flavour.',
      'Convenient nutrient-dense snack.',
      'Great in trail mixes.',
      'Naturally an excellent source of selenium.',
    ],
    [
      'Brazil nuts can contain very high amounts of selenium, and levels vary considerably.',
      'Because of this, they are generally best enjoyed in modest quantities rather than by the handful.',
      'Store airtight in a cool place.',
    ]
  ),

  'Macadamia Nuts': F(
    'Macadamia nuts are prized for their rich, buttery flavour and exceptionally creamy texture. Their hard shell protects the delicate kernel inside.',
    'Why Choose Dhaanya Macadamia Nuts?',
    [
      'Rich buttery flavour.',
      'Premium nut texture.',
      'Naturally satisfying.',
      'Great for roasting and special-occasion snacking.',
      'Excellent for baking and desserts.',
    ],
    [
      'Macadamia shells are exceptionally hard.',
      'Macadamias are naturally rich in monounsaturated fats.',
      'Their delicate oils benefit from cool, dry storage.',
    ]
  ),

  'Pecan Nuts': F(
    'Pecans have a naturally buttery texture and rich, slightly sweet flavour. They are particularly popular in baking, desserts and premium snack mixes.',
    'Why Choose Dhaanya Pecans?',
    [
      'Naturally rich and buttery.',
      'Pleasant sweet-nutty flavour.',
      'Excellent for baking.',
      'Great in granola and trail mixes.',
      'Naturally provides fibre and unsaturated fats.',
    ],
    [
      'Pecans are closely related to walnuts.',
      'Roasting intensifies their naturally sweet aroma.',
      'They work beautifully in both sweet and savoury dishes.',
    ]
  ),

  'Peanut Plain Roasted': F(
    'Whole peanuts roasted to develop their natural aroma and crunchy texture, without the need for elaborate seasoning.',
    'Why Choose Dhaanya Plain Roasted Peanuts?',
    [
      'Simple roasted flavour.',
      'Crunchy and satisfying.',
      'Convenient everyday snack.',
      'Great for homemade snack mixes.',
      'Naturally provides plant protein, fibre and unsaturated fats.',
    ],
    [
      'Peanuts are legumes rather than botanical nuts.',
      'Roasting develops their characteristic nutty aroma.',
      'They are widely used in Indian snacks and chutneys.',
    ]
  ),

  'Peanut Salted': F(
    'Roasted peanuts with a simple salty finish. A familiar, crunchy snack that works equally well on its own or as part of homemade snack mixes.',
    'Why Choose Dhaanya Salted Peanuts?',
    [
      'Crunchy roasted texture.',
      'Simple savoury flavour.',
      'Ready-to-eat.',
      'Great for snack mixes.',
      'Naturally provides plant protein and unsaturated fats.',
    ],
    [
      'Peanuts belong to the legume family.',
      'They contain protein, fibre and several minerals.',
      'Store airtight to preserve their crunch.',
    ]
  ),

  // ---------- Seeds ----------
  'Pumpkin Seeds': F(
    'Pumpkin seeds are flat, mildly nutty seeds with a satisfying crunch. They are easy to add to breakfast bowls, salads, baked foods and homemade snack mixes.',
    'Why Choose Dhaanya Pumpkin Seeds?',
    [
      'Naturally crunchy and nutty.',
      'Easy to incorporate into everyday foods.',
      'Good source of plant protein.',
      'Provides magnesium, zinc and unsaturated fats.',
      'Excellent for roasting or snacking.',
    ],
    [
      'Pumpkin seeds are also commonly called pepitas when sold without their hard outer hull.',
      'They contain minerals including magnesium and zinc.',
      'They can be eaten raw, roasted or incorporated into recipes.',
    ]
  ),

  'Watermelon Seeds': F(
    'Watermelon seeds are small, mild-flavoured seeds traditionally used in Indian cooking and snack preparations. They have a delicate nutty flavour when roasted.',
    'Why Choose Dhaanya Watermelon Seeds?',
    [
      'Mild, pleasant nutty flavour.',
      'Useful in traditional Indian recipes.',
      'Can be roasted and eaten as a snack.',
      'Suitable for desserts and seed mixes.',
      'Provides plant protein, fats and minerals.',
    ],
    [
      'Watermelon seeds are edible and nutritionally useful.',
      'They are commonly incorporated into Indian sweets and spice blends.',
      'Roasting enhances their flavour and crunch.',
    ]
  ),

  'Cucumber Seeds': F(
    'Cucumber seeds have a mild, delicate flavour and are traditionally used in Indian cuisine, particularly in certain sweet preparations and seed mixes.',
    'Why Choose Dhaanya Cucumber Seeds?',
    [
      'Mild flavour.',
      'Useful in traditional recipes.',
      'Can be roasted or added to mixtures.',
      'Suitable for sweets and desserts.',
      'A simple way to diversify everyday seed intake.',
    ],
    [
      'Cucumber seeds are edible and can be consumed as part of the whole fruit.',
      'Dried seeds are used in several traditional culinary preparations.',
      'Store dry and airtight.',
    ]
  ),

  'Sunflower Seeds': F(
    'Sunflower seeds have a mild, nutty flavour and satisfying crunch. They are an easy addition to breakfast bowls, salads, breads and snack mixes.',
    'Why Choose Dhaanya Sunflower Seeds?',
    [
      'Mild, nutty flavour.',
      'Naturally rich in vitamin E.',
      'Provides unsaturated fats and plant protein.',
      'Excellent for salads and breakfast bowls.',
      'Can be eaten raw or roasted.',
    ],
    [
      'Sunflower seeds come from the sunflower head.',
      'They are naturally rich in vitamin E.',
      'Their oils are predominantly unsaturated fats.',
    ]
  ),

  'Flax Seeds': F(
    'Flax seeds are small, earthy-tasting seeds known for their fibre content and plant-based omega-3 fatty acid ALA.',
    'Why Choose Dhaanya Flax Seeds?',
    [
      'Naturally rich in dietary fibre.',
      'Plant-based source of ALA omega-3.',
      'Easy to add to atta, smoothies and breakfast foods.',
      'Can be lightly roasted and ground.',
      'Adds a mild nutty flavour.',
    ],
    [
      'Flax contains both soluble and insoluble fibre.',
      'Ground flax is generally easier to incorporate into foods than whole seeds.',
      'Store ground flax more carefully because grinding exposes its oils to air.',
    ]
  ),

  'Chia Seeds': F(
    'Chia seeds are tiny, mild-flavoured seeds that absorb liquid and develop a gel-like texture. Their versatility makes them easy to include in everyday meals.',
    'Why Choose Dhaanya Chia Seeds?',
    [
      'Naturally high in dietary fibre.',
      'Provides plant-based ALA omega-3.',
      'Easy to add to oats, smoothies and yoghurt.',
      'Useful for puddings and soaked preparations.',
      'Mild flavour blends easily with other foods.',
    ],
    [
      'Chia can absorb several times its weight in liquid.',
      'Its gel-like texture comes from soluble fibre.',
      'It is naturally rich in fibre and ALA.',
    ]
  ),

  'Sesame Seeds (Til) Black': F(
    'Black sesame seeds have a deeper, more pronounced nutty flavour than white sesame and are widely used in Indian and Asian cooking.',
    'Why Choose Dhaanya Black Sesame?',
    [
      'Distinctive roasted, nutty flavour.',
      'Excellent for chutneys and spice mixes.',
      'Works beautifully in sweets.',
      'Can be sprinkled over breads and savoury dishes.',
      'Provides fibre, protein and unsaturated fats.',
    ],
    [
      'Black sesame has naturally dark seed coats containing plant compounds.',
      'Roasting intensifies its aroma.',
      'Sesame is one of the oldest cultivated oilseed crops.',
    ]
  ),

  'Sesame Seeds (Til) White': F(
    'White sesame seeds have a delicate nutty flavour and are widely used across Indian cooking, baking, sweets and traditional preparations.',
    'Why Choose Dhaanya White Sesame?',
    [
      'Mild nutty flavour.',
      'Excellent for sweets and laddoos.',
      'Great for seasoning and garnishing.',
      'Useful in chutneys and spice mixes.',
      'Naturally provides calcium, fibre, protein and unsaturated fats.',
    ],
    [
      'Sesame seeds are an important traditional oilseed.',
      'Roasting creates a stronger nutty aroma.',
      'Sesame is used in cuisines across Asia, Africa and the Middle East.',
    ]
  ),

  'Basil Seeds (Sabja)': F(
    'Basil seeds, commonly known as sabja, are tiny black seeds that swell and develop a gel-like coating when soaked in water. They are traditionally used in Indian beverages and desserts.',
    'Why Choose Dhaanya Sabja?',
    [
      'Easy to incorporate into beverages.',
      'Naturally rich in fibre.',
      'Traditionally used in summer drinks.',
      'Mild flavour.',
      'Can be used in desserts and soaked preparations.',
    ],
    [
      'Sabja seeds swell considerably after soaking.',
      'They are different from chia seeds despite their similar appearance after soaking.',
      'Always soak adequately before consuming.',
    ]
  ),

  'Alovi Seeds (Halim Seeds)': F(
    'Aliv, also known as halim or garden cress seeds, are tiny reddish-brown seeds traditionally used in Indian cooking and traditional food preparations. They have a distinctive peppery, earthy flavour.',
    'Why Choose Dhaanya Aliv Seeds?',
    [
      'Traditional Indian ingredient.',
      'Distinctive earthy and peppery flavour.',
      'Rich in plant-based nutrients.',
      'Used in traditional laddoos and preparations.',
      'Can be incorporated into selected recipes after soaking.',
    ],
    [
      'Garden cress is botanically different from chia and basil seeds.',
      'Aliv has a long history of use in Indian food traditions.',
      'Soaking changes its texture and makes it easier to incorporate into recipes.',
    ]
  ),

  'Tarbuj Seeds': F(
    'Tarbuji seeds, or watermelon seeds, are mild, crunchy seeds commonly used in Indian sweets, gravies and traditional culinary preparations.',
    'Why Choose Dhaanya Tarbuji Seeds?',
    [
      'Mild, nutty flavour.',
      'Useful in traditional Indian recipes.',
      'Suitable for sweets and desserts.',
      'Can be roasted for snacking.',
      'Adds texture to seed mixes.',
    ],
    [
      'Watermelon seeds are edible and can be eaten after appropriate preparation.',
      'They are used in some traditional Indian confectionery and culinary preparations.',
      'Roasting brings out their nutty flavour.',
    ]
  ),

  'Mustard Seeds Black': F(
    'Black mustard seeds are small, intensely aromatic seeds with a sharp, pungent flavour. They are a fundamental ingredient in Indian tempering and spice preparations.',
    'Why Choose Dhaanya Black Mustard Seeds?',
    [
      'Strong, characteristic mustard aroma.',
      'Essential for Indian tadka.',
      'Excellent in pickles and spice blends.',
      'Works beautifully with dals and vegetables.',
      'A little goes a long way.',
    ],
    [
      'Mustard seeds release their characteristic aroma when crushed or heated.',
      'Tempering mustard seeds in hot oil is a classic Indian cooking technique.',
      'Mustard belongs to the same botanical family as cabbage and broccoli.',
    ]
  ),

  'Makhana (Lotus Seeds)': F(
    'Makhana, also called fox nuts or lotus seeds, are the popped seeds of Euryale ferox. They have a light, crisp texture and mild flavour, making them especially popular as a roasted snack.',
    'Why Choose Dhaanya Makhana?',
    [
      'Light and crunchy when roasted.',
      'Mild flavour works with sweet or savoury seasoning.',
      'Convenient snack option.',
      'Great for homemade flavoured makhana.',
      'Traditionally used in Indian cooking.',
    ],
    [
      'Makhana is not a botanical nut.',
      'It comes from an aquatic plant.',
      'Roasting gives it a crisp texture and deeper flavour.',
      'Store airtight to protect its crunch.',
    ]
  ),

  'Protein Beans': F(
    'Protein Beans are a convenient combination of selected beans and legumes designed to bring variety and plant-based protein to everyday meals.\n\nThey can be used in salads, bowls, curries, sprouts or other home-cooked preparations depending on the blend.',
    'Why Choose Dhaanya Protein Beans?',
    [
      'Plant-based source of protein.',
      'Adds variety to everyday meals.',
      'Suitable for multiple cooking styles.',
      'Useful for meal-prep and wholesome bowls.',
      'Naturally provides fibre along with protein.',
    ],
    [
      'Beans and legumes are among the most important plant sources of protein.',
      'Combining different legumes can provide a broader range of textures and flavours.',
      'Soaking and proper cooking can improve their digestibility and texture.',
    ]
  ),
};
