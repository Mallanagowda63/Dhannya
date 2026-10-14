import { Product, ProductCategory, MasalaIngredient, Coupon, Review } from '../types';

export interface CategoryInfo {
  name: ProductCategory;
  slug: string;
  iconName: string;
  image: string;
  description: string;
  productCount: number;
}

export interface HeroSlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  bgImage: string;
  primaryCta: string;
  secondaryCta: string;
  categoryTarget?: ProductCategory;
  customMasalaTarget?: boolean;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    "id": "slide-1",
    "badge": "Crafted Fresh For You",
    "title": "Custom Masala Blends Ground To Perfection",
    "subtitle": "Select raw organic spices, choose your custom roast level, and let our master spice artisans grind your custom blend fresh!",
    "bgImage": "/images/dhannya_Products_final/Garam%20Masala/01.jpg",
    "primaryCta": "Build Custom Masala",
    "secondaryCta": "Explore Whole Spices",
    "customMasalaTarget": true
  },
  {
    "id": "slide-2",
    "badge": "100% Cold-Pressed Oils",
    "title": "Pure Traditional Wooden Ghani Oils",
    "subtitle": "Retaining natural omega fatty acids, pungency, and vital nutrient profile with zero chemicals or additives.",
    "bgImage": "/images/dhannya_Products_final/Coconut%20Oil/01.jpg",
    "primaryCta": "Shop Pressed Oils",
    "secondaryCta": "View Health Benefits",
    "categoryTarget": "Wood Pressed Oils"
  },
  {
    "id": "slide-3",
    "badge": "Farm Fresh Superfoods",
    "title": "Handpicked Organic Dry Fruits & Seeds",
    "subtitle": "Directly sourced premium dates, almonds, walnuts, and nutrient-rich seeds for daily energy & immunity.",
    "bgImage": "/images/dhannya_Products_final/Ajwa%20Dates/01.jpg",
    "primaryCta": "Explore Dry Fruits",
    "secondaryCta": "Browse Seeds",
    "categoryTarget": "Dry Fruits"
  }
];

export const CATEGORIES: CategoryInfo[] = [
  {
    "name": "Wood Pressed Oils",
    "slug": "wood-pressed-oils",
    "iconName": "Droplet",
    "description": "100% Cold-pressed traditional wooden ghani oils rich in natural nutrients.",
    "image": "/images/dhannya_Products_final/Coconut Oil/Dhaanya 01.png",
    "productCount": 9
  },
  {
    "name": "Flour",
    "slug": "flour",
    "iconName": "Wheat",
    "description": "Stone-ground, unbleached organic flours & ancient grain blends.",
    "image": "/images/dhannya_Products_final/Dhaanya Multi Millet Atta/01.png",
    "productCount": 16
  },
  {
    "name": "Dry Fruits",
    "slug": "dry-fruits",
    "iconName": "Nut",
    "description": "Premium handpicked almonds, walnuts, cashews, raisins, and dates.",
    "image": "/images/dhannya_Products_final/Almonds Jumbo/01.jpg",
    "productCount": 45
  },
  {
    "name": "Seeds",
    "slug": "seeds",
    "iconName": "Sprout",
    "description": "Nutrient-dense raw and roasted chia, flax, pumpkin, and sunflower seeds.",
    "image": "/images/dhannya_Products_final/Chia Seeds/01.png",
    "productCount": 14
  },
  {
    "name": "Millets",
    "slug": "millets",
    "iconName": "Grain",
    "description": "Gluten-free super grains including Ragi, Foxtail, Bajra, and Jowar.",
    "image": "/images/dhannya_Products_final/Foxtail Millet (Navane)/01.jpg",
    "productCount": 15
  },
  {
    "name": "Spices",
    "slug": "spices",
    "iconName": "Flame",
    "description": "Aromatic unadulterated whole & ground spices sourced straight from farms.",
    "image": "/images/dhannya_Products_final/Cardamom%20Bold/01.jpg",
    "productCount": 98
  },
  {
    "name": "Masalas",
    "slug": "masalas",
    "iconName": "CookingPot",
    "description": "Authentic handcrafted curry blends, Garam Masala, and regional spice mixes.",
    "image": "/images/dhannya_Products_final/Garam%20Masala/dhaanya%2001.png",
    "productCount": 11
  },
  {
    "name": "Health Foods",
    "slug": "health-foods",
    "iconName": "HeartPulse",
    "description": "Superfood powders, immunity boosters, chyawanprash & protein mixes.",
    "image": "/images/dhannya_Products_final/Ashwagandha/01.jpg",
    "productCount": 21
  },
  {
    "name": "Coffee",
    "slug": "coffee",
    "iconName": "Coffee",
    "description": "Single-origin estate filter coffee powders and dark roast beans.",
    "image": "/images/dhannya_Products_final/Arabica%20Coffee%20Powder/01.jpg",
    "productCount": 7
  },
  {
    "name": "Tea",
    "slug": "tea",
    "iconName": "CupSoda",
    "description": "Organic Darjeeling tea leaves, herbal infusions, and Kadha blends.",
    "image": "/images/dhannya_Products_final/Assam%20Tea/01.png",
    "productCount": 8
  },
  {
    "name": "Pickles",
    "slug": "pickles",
    "iconName": "Jar",
    "description": "Sun-dried traditional homemade pickles made with cold-pressed mustard oil.",
    "image": "/images/dhannya_Products_final/Garlic%20pickle/dhaanya%2001.png",
    "productCount": 3
  },
  {
    "name": "Natural Sweeteners",
    "slug": "natural-sweeteners",
    "iconName": "Candy",
    "description": "Pure raw forest honey, organic jaggery powder, dates syrup, and stevia.",
    "image": "/images/dhannya_Products_final/Forest%20Honey%20(Kattuthen)/Dhaanya%2001.png",
    "productCount": 14
  },
  {
    "name": "Pulses",
    "slug": "pulses",
    "iconName": "Bean",
    "description": "Unpolished protein-rich lentils, chickpeas, and native dals.",
    "image": "/images/dhannya_Products_final/Toor%20Dal%20Fine%20(Yellow)/01.jpg",
    "productCount": 41
  },
  {
    "name": "Nut Butters",
    "slug": "nut-butters",
    "iconName": "Utensils",
    "description": "100% pure unsweetened peanut butter, almond butter, and cashew butter.",
    "image": "/images/dhannya_Products_final/Almond%20Nut%20Butter/01.jpg",
    "productCount": 5
  },
  {
    "name": "Rice",
    "slug": "rice",
    "iconName": "Bowl",
    "description": "Aged Basmati, Brown Rice, Black Rice, and heirloom traditional varieties.",
    "image": "/images/dhannya_Products_final/Red%20Matta%20Rice%20(Parboiled%20%26%20Semi-Polished)/01.jpg",
    "productCount": 5
  },
  {
    "name": "Rava",
    "slug": "rava",
    "iconName": "Sparkles",
    "description": "Bansi rava, wheat semolina, and millet rava for healthy breakfasts.",
    "image": "/images/dhannya_Products_final/Barnyard%20Millet%20(Oodalu)%20Rava/01.jpg",
    "productCount": 7
  },
  {
    "name": "Poha",
    "slug": "poha",
    "iconName": "Leaf",
    "description": "Thick & thin red rice poha, brown poha, and traditional flattened rice.",
    "image": "/images/dhannya_Products_final/Red%20Rice%20Flakes%20(Avalakki)/01.png",
    "productCount": 5
  },
  {
    "name": "Pasta",
    "slug": "pasta",
    "iconName": "UtensilsCrossed",
    "description": "Durum wheat pasta and 100% millet semolina gluten-free pasta.",
    "image": "/images/dhannya_Products_final/Jackfruit%20Pasta/01.png",
    "productCount": 3
  },
  {
    "name": "Noodles",
    "slug": "noodles",
    "iconName": "Soup",
    "description": "Non-fried millet noodles, whole wheat hakka noodles without maida.",
    "image": "/images/dhannya_Products_final/Amaranth%20Noodles/01.png",
    "productCount": 5
  },
  {
    "name": "Eco Friendly",
    "slug": "eco-friendly",
    "iconName": "ShieldCheck",
    "description": "Clay cooking pots, copper water bottles, neem wood cutlery.",
    "image": "/images/dhannya_Products_final/Neem%20Comb/01.jpg",
    "productCount": 15
  },
  {
    "name": "Quick Bites",
    "slug": "quick-bites",
    "iconName": "Cookie",
    "description": "Roasted makhana, millet cookies, seed crackers, and healthier snacks.",
    "image": "/images/dhannya_Products_final/Makhana%20(Lotus%20Seeds)/01.jpg",
    "productCount": 16
  },
  {
    "name": "Skin Care",
    "slug": "skin-care",
    "iconName": "Smile",
    "description": "Cold-pressed coconut skin oil, organic ubtan body scrub, rose water.",
    "image": "/images/dhannya_Products_final/Multani%20Mitti/01.jpg",
    "productCount": 18
  },
  {
    "name": "Hair Care",
    "slug": "hair-care",
    "iconName": "Sparkle",
    "description": "Traditional Ayurvedic herbal hair oil with Bhringraj, Amla & Hibiscus.",
    "image": "/images/dhannya_Products_final/Bhringraj%20Powder/01.jpg",
    "productCount": 10
  }
];

export const MASALA_INGREDIENTS: MasalaIngredient[] = [
  {
    "id": "ing-1",
    "name": "Black Pepper",
    "hindiName": "Kali Mirch",
    "category": "Pungent & Heat",
    "pricePer100g": 95,
    "roastingPricePer100g": 8,
    "image": "/images/dhannya_Products_final/Pepper/01.png",
    "healthBenefits": "Rich in piperine, enhances nutrient absorption by up to 2000%.",
    "flavorProfile": "Sharp, pungent, woody heat",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-2",
    "name": "Cumin Seeds",
    "hindiName": "Jeera",
    "category": "Aromatics",
    "pricePer100g": 52,
    "roastingPricePer100g": 5,
    "image": "/images/dhannya_Products_final/Cumin%20(Jeerakam)/01.png",
    "healthBenefits": "Stimulates digestive enzymes, aids bile secretion and fat digestion.",
    "flavorProfile": "Earthy, warm, slightly nutty",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-3",
    "name": "Coriander Seeds",
    "hindiName": "Dhania",
    "category": "Aromatics",
    "pricePer100g": 38,
    "roastingPricePer100g": 5,
    "image": "/images/dhannya_Products_final/Coriander/01.jpg",
    "healthBenefits": "Cooling property, reduces internal heat and regulates blood sugar.",
    "flavorProfile": "Citrusy, floral, sweet woody",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-4",
    "name": "Green Cardamom",
    "hindiName": "Chhoti Elaichi",
    "category": "Whole Spices",
    "pricePer100g": 340,
    "roastingPricePer100g": 15,
    "image": "/images/dhannya_Products_final/Cardamom%20Bold/01.jpg",
    "healthBenefits": "Natural breath freshener, reduces acidity and calms stomach cramps.",
    "flavorProfile": "Sweet floral, menthol, eucalyptus",
    "defaultRoast": "Non Roasted"
  },
  {
    "id": "ing-5",
    "name": "Cinnamon Sticks",
    "hindiName": "Dalchini",
    "category": "Whole Spices",
    "pricePer100g": 110,
    "roastingPricePer100g": 10,
    "image": "/images/dhannya_Products_final/Cassia%20Cinnamon/01.jpg",
    "healthBenefits": "Powerful antioxidant, improves insulin sensitivity and heart health.",
    "flavorProfile": "Sweet warming, spicy woody",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-6",
    "name": "Kashmiri Red Chilli",
    "hindiName": "Kashmiri Mirch",
    "category": "Color & Texture",
    "pricePer100g": 78,
    "roastingPricePer100g": 6,
    "image": "/images/dhannya_Products_final/Red%20Chilli-%20Guntur%20Long/01.jpg",
    "healthBenefits": "High in Vitamin C & A, provides vibrant color without excessive heat.",
    "flavorProfile": "Mildly pungent, smoky sweet",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-7",
    "name": "Cloves",
    "hindiName": "Laung",
    "category": "Pungent & Heat",
    "pricePer100g": 190,
    "roastingPricePer100g": 12,
    "image": "/images/dhannya_Products_final/Cloves/01.png",
    "healthBenefits": "Rich in eugenol, an antimicrobial compound that supports dental health.",
    "flavorProfile": "Strong, astringent, spicy-sweet",
    "defaultRoast": "Non Roasted"
  },
  {
    "id": "ing-8",
    "name": "Star Anise",
    "hindiName": "Chakra Phool",
    "category": "Whole Spices",
    "pricePer100g": 160,
    "roastingPricePer100g": 10,
    "image": "/images/dhannya_Products_final/Star%20Anise/01.png",
    "healthBenefits": "Contains shikimic acid, strong anti-viral and anti-gas properties.",
    "flavorProfile": "Licorice-like, aromatic, sweet floral",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-9",
    "name": "Fennel Seeds",
    "hindiName": "Saunf",
    "category": "Herbs & Seeds",
    "pricePer100g": 42,
    "roastingPricePer100g": 5,
    "image": "/images/dhannya_Products_final/Fennel%20(Perumjeerakam)/01.jpg",
    "healthBenefits": "Relieves bloating, reduces water retention and cools body heat.",
    "flavorProfile": "Anise-sweet, refreshing, soothing",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-10",
    "name": "Fenugreek Seeds",
    "hindiName": "Methi Dana",
    "category": "Herbs & Seeds",
    "pricePer100g": 30,
    "roastingPricePer100g": 5,
    "image": "/images/dhannya_Products_final/Fenugreek%20(Uluva)/01.jpg",
    "healthBenefits": "Helps control blood sugar and improves hair volume & lipid profiles.",
    "flavorProfile": "Pleasantly bitter, maple-like when roasted",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-11",
    "name": "Mustard Seeds (Black)",
    "hindiName": "Rai",
    "category": "Whole Spices",
    "pricePer100g": 26,
    "roastingPricePer100g": 4,
    "image": "/images/dhannya_Products_final/Mustard%20Seeds%20Black/01.jpg",
    "healthBenefits": "Contains selenium and omega 3 fatty acids for joint mobility.",
    "flavorProfile": "Pungent, nutty tadka pops",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-12",
    "name": "Black Cardamom",
    "hindiName": "Badi Elaichi",
    "category": "Whole Spices",
    "pricePer100g": 210,
    "roastingPricePer100g": 12,
    "image": "/images/dhannya_Products_final/Black%20Cardamom%20(Black%20Elaichi)/01.jpg",
    "healthBenefits": "Removes toxins and supports respiratory health.",
    "flavorProfile": "Smoky, camphor-like deep spice",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-13",
    "name": "Nutmeg & Mace",
    "hindiName": "Jaiphal & Javitri",
    "category": "Whole Spices",
    "pricePer100g": 380,
    "roastingPricePer100g": 15,
    "image": "/images/dhannya_Products_final/Nutmeg/01.jpg",
    "healthBenefits": "Promotes deep restful sleep and relieves joint discomfort.",
    "flavorProfile": "Warm, intense, sweet woody fragrance",
    "defaultRoast": "Non Roasted"
  },
  {
    "id": "ing-14",
    "name": "Dried Curry Leaves",
    "hindiName": "Kadi Patta",
    "category": "Herbs & Seeds",
    "pricePer100g": 55,
    "roastingPricePer100g": 6,
    "image": "/images/dhannya_Products_final/Dried%20Curry%20Leaves/01.jpg",
    "healthBenefits": "Rich in iron, folic acid, and antioxidant alkaloids.",
    "flavorProfile": "Herbal, citrusy, savory depth",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-15",
    "name": "Wild Stone Flower",
    "hindiName": "Dagad Phool / Kalpasi",
    "category": "Whole Spices",
    "pricePer100g": 290,
    "roastingPricePer100g": 14,
    "image": "/images/dhannya_Products_final/Stone%20Flower/01.jpg",
    "healthBenefits": "Ayurvedic renal tonic and potent anti-inflammatory spice.",
    "flavorProfile": "Earth mossy, umami, unique earthy aroma",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-16",
    "name": "Ajwain Seeds",
    "hindiName": "Carom / Bishop Weed",
    "category": "Herbs & Seeds",
    "pricePer100g": 48,
    "roastingPricePer100g": 5,
    "image": "/images/dhannya_Products_final/Ajwain%20(Ayamodakam)/01.jpg",
    "healthBenefits": "Rich in thymol, instant relief from gas and indigestion.",
    "flavorProfile": "Thyme-like, hot, sharp herbal",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-17",
    "name": "Dry Ginger",
    "hindiName": "Saunth / Chukku",
    "category": "Pungent & Heat",
    "pricePer100g": 88,
    "roastingPricePer100g": 7,
    "image": "/images/dhannya_Products_final/Dried%20Ginger/01.jpg",
    "healthBenefits": "Natural anti-emetic, reduces motion sickness and joint pain.",
    "flavorProfile": "Zesty, sharp warming bite",
    "defaultRoast": "Roasted"
  },
  {
    "id": "ing-18",
    "name": "Bay Leaves",
    "hindiName": "Tej Patta",
    "category": "Aromatics",
    "pricePer100g": 65,
    "roastingPricePer100g": 6,
    "image": "/images/dhannya_Products_final/Bay%20Leaves%20_%20Tej%20Patta/01.jpg",
    "healthBenefits": "Helps regulate blood sugar and lowers bad cholesterol.",
    "flavorProfile": "Herbal, pine-clove subtle aroma",
    "defaultRoast": "Roasted"
  }
];

export const COUPONS: Coupon[] = [
  {
    "code": "DHAANYA10",
    "discountPercent": 10,
    "minOrderAmount": 299,
    "description": "Get 10% OFF on all organic orders above ₹299",
    "isActive": true,
    "isFeatured": true
  },
  {
    "code": "FESTIVE25",
    "discountPercent": 25,
    "minOrderAmount": 499,
    "description": "Get 25% OFF on all organic products & spices orders above ₹499",
    "isActive": true
  },
  {
    "code": "ORGANIC10",
    "discountPercent": 10,
    "minOrderAmount": 499,
    "description": "Get 10% OFF on all organic orders above ₹499",
    "isActive": true
  },
  {
    "code": "WELLNESS20",
    "discountPercent": 20,
    "minOrderAmount": 999,
    "description": "Get 20% OFF on health foods & dry fruits orders above ₹999",
    "isActive": true
  },
  {
    "code": "CUSTOMMASALA",
    "discountPercent": 15,
    "minOrderAmount": 299,
    "description": "Get 15% OFF on your custom created masala blend",
    "isActive": true
  }
];

export const REVIEWS: Review[] = [
  {
    "id": "rev-1",
    "userName": "Rajesh Kumar",
    "rating": 5,
    "date": "2026-08-01",
    "comment": "Extremely fresh quality spices and cold pressed oil. Authentic aroma!",
    "verifiedPurchase": true
  },
  {
    "id": "rev-2",
    "userName": "Sneha Patel",
    "rating": 5,
    "date": "2026-08-03",
    "comment": "The custom masala maker is incredible! Fast shipping and top packaging.",
    "verifiedPurchase": true
  }
];
