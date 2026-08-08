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
    "bgImage": "/images/Dailywell_Products/Garam%20Masala/01.jpg",
    "primaryCta": "Build Custom Masala",
    "secondaryCta": "Explore Whole Spices",
    "customMasalaTarget": true
  },
  {
    "id": "slide-2",
    "badge": "100% Cold-Pressed Oils",
    "title": "Pure Traditional Wooden Ghani Oils",
    "subtitle": "Retaining natural omega fatty acids, pungency, and vital nutrient profile with zero chemicals or additives.",
    "bgImage": "/images/Dailywell_Products/Coconut%20Oil/01.jpg",
    "primaryCta": "Shop Pressed Oils",
    "secondaryCta": "View Health Benefits",
    "categoryTarget": "Wood Pressed Oils"
  },
  {
    "id": "slide-3",
    "badge": "Farm Fresh Superfoods",
    "title": "Handpicked Organic Dry Fruits & Seeds",
    "subtitle": "Directly sourced premium dates, almonds, walnuts, and nutrient-rich seeds for daily energy & immunity.",
    "bgImage": "/images/Dailywell_Products/Ajwa%20Dates/01.jpg",
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
    "image": "/images/Dailywell_Products/Coconut%20Oil/01.jpg",
    "productCount": 9
  },
  {
    "name": "Flour",
    "slug": "flour",
    "iconName": "Wheat",
    "description": "Stone-ground, unbleached organic flours & ancient grain blends.",
    "image": "/images/Dailywell_Products/Appam%20Idiyappam%20Podi/01.jpg",
    "productCount": 16
  },
  {
    "name": "Dry Fruits",
    "slug": "dry-fruits",
    "iconName": "Nut",
    "description": "Premium handpicked almonds, walnuts, cashews, raisins, and dates.",
    "image": "/images/Dailywell_Products/Ajwa%20Dates/01.jpg",
    "productCount": 45
  },
  {
    "name": "Seeds",
    "slug": "seeds",
    "iconName": "Sprout",
    "description": "Nutrient-dense raw and roasted chia, flax, pumpkin, and sunflower seeds.",
    "image": "/images/Dailywell_Products/Alovi%20Seeds%20(Halim%20Seeds)/01.jpg",
    "productCount": 14
  },
  {
    "name": "Millets",
    "slug": "millets",
    "iconName": "Grain",
    "description": "Gluten-free super grains including Ragi, Foxtail, Bajra, and Jowar.",
    "image": "/images/Dailywell_Products/Amaranth%20(Rajgira)/01.jpg",
    "productCount": 15
  },
  {
    "name": "Spices",
    "slug": "spices",
    "iconName": "Flame",
    "description": "Aromatic unadulterated whole & ground spices sourced straight from farms.",
    "image": "/images/Dailywell_Products/Ajwain%20(Ayamodakam)/01.jpg",
    "productCount": 49
  },
  {
    "name": "Masalas",
    "slug": "masalas",
    "iconName": "CookingPot",
    "description": "Authentic handcrafted curry blends, Garam Masala, and regional spice mixes.",
    "image": "/images/Dailywell_Products/Avalose%20Podi/01.jpg",
    "productCount": 11
  },
  {
    "name": "Health Foods",
    "slug": "health-foods",
    "iconName": "HeartPulse",
    "description": "Superfood powders, immunity boosters, chyawanprash & protein mixes.",
    "image": "/images/Dailywell_Products/Amla%20Powder/01.jpg",
    "productCount": 21
  },
  {
    "name": "Coffee",
    "slug": "coffee",
    "iconName": "Coffee",
    "description": "Single-origin estate filter coffee powders and dark roast beans.",
    "image": "/images/Dailywell_Products/Arabica%20Coffee%20Bean/01.jpg",
    "productCount": 7
  },
  {
    "name": "Tea",
    "slug": "tea",
    "iconName": "CupSoda",
    "description": "Organic Darjeeling tea leaves, herbal infusions, and Kadha blends.",
    "image": "/images/Dailywell_Products/Assam%20Tea/01.png",
    "productCount": 8
  },
  {
    "name": "Pickles",
    "slug": "pickles",
    "iconName": "Jar",
    "description": "Sun-dried traditional homemade pickles made with cold-pressed mustard oil.",
    "image": "/images/Dailywell_Products/Garlic%20pickle/01.png",
    "productCount": 3
  },
  {
    "name": "Natural Sweeteners",
    "slug": "natural-sweeteners",
    "iconName": "Candy",
    "description": "Pure raw forest honey, organic jaggery powder, dates syrup, and stevia.",
    "image": "/images/Dailywell_Products/Brahmi%20Honey/01.jpg",
    "productCount": 14
  },
  {
    "name": "Pulses",
    "slug": "pulses",
    "iconName": "Bean",
    "description": "Unpolished protein-rich lentils, chickpeas, and native dals.",
    "image": "/images/Dailywell_Products/Barnyard%20Millet%20(Oodalu)/01.jpg",
    "productCount": 20
  },
  {
    "name": "Nut Butters",
    "slug": "nut-butters",
    "iconName": "Utensils",
    "description": "100% pure unsweetened peanut butter, almond butter, and cashew butter.",
    "image": "/images/Dailywell_Products/Almond%20Nut%20Butter/01.jpg",
    "productCount": 5
  },
  {
    "name": "Rice",
    "slug": "rice",
    "iconName": "Bowl",
    "description": "Aged Basmati, Brown Rice, Black Rice, and heirloom traditional varieties.",
    "image": "/images/Dailywell_Products/Idly%20Rice%20SR%20Orange/01.jpg",
    "productCount": 5
  },
  {
    "name": "Rava",
    "slug": "rava",
    "iconName": "Sparkles",
    "description": "Bansi rava, wheat semolina, and millet rava for healthy breakfasts.",
    "image": "/images/Dailywell_Products/Barnyard%20Millet%20(Oodalu)%20Rava/01.jpg",
    "productCount": 7
  },
  {
    "name": "Poha",
    "slug": "poha",
    "iconName": "Leaf",
    "description": "Thick & thin red rice poha, brown poha, and traditional flattened rice.",
    "image": "/images/Dailywell_Products/Jowar%20Flakes/01.png",
    "productCount": 5
  },
  {
    "name": "Pasta",
    "slug": "pasta",
    "iconName": "UtensilsCrossed",
    "description": "Durum wheat pasta and 100% millet semolina gluten-free pasta.",
    "image": "/images/Dailywell_Products/Jackfruit%20Pasta/01.png",
    "productCount": 3
  },
  {
    "name": "Noodles",
    "slug": "noodles",
    "iconName": "Soup",
    "description": "Non-fried millet noodles, whole wheat hakka noodles without maida.",
    "image": "/images/Dailywell_Products/Amaranth%20Noodles/01.png",
    "productCount": 5
  },
  {
    "name": "Eco Friendly",
    "slug": "eco-friendly",
    "iconName": "ShieldCheck",
    "description": "Clay cooking pots, copper water bottles, neem wood cutlery.",
    "image": "/images/Dailywell_Products/Baby%20Fork/01.jpg",
    "productCount": 15
  },
  {
    "name": "Quick Bites",
    "slug": "quick-bites",
    "iconName": "Cookie",
    "description": "Roasted makhana, millet cookies, seed crackers, and healthier snacks.",
    "image": "/images/Dailywell_Products/Amla%20Dry%20Candy/01.jpg",
    "productCount": 16
  },
  {
    "name": "Skin Care",
    "slug": "skin-care",
    "iconName": "Smile",
    "description": "Cold-pressed coconut skin oil, organic ubtan body scrub, rose water.",
    "image": "/images/Dailywell_Products/Henna%20Powder/01.jpg",
    "productCount": 5
  },
  {
    "name": "Hair Care",
    "slug": "hair-care",
    "iconName": "Sparkle",
    "description": "Traditional Ayurvedic herbal hair oil with Bhringraj, Amla & Hibiscus.",
    "image": "/images/Dailywell_Products/Bhringraj%20Powder/01.jpg",
    "productCount": 4
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": "prod-1",
    "name": "Ajwa Dates",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Ajwa Dates sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Ajwa Dates"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Ajwa%20Dates/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Ajwa%20Dates/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 20,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 35,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-2",
    "name": "Ajwain (Ayamodakam)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Ajwain (Ayamodakam) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Ajwain (Ayamodakam)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Ajwain%20(Ayamodakam)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Ajwain%20(Ayamodakam)/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 27,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 38,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-3",
    "name": "Almond Nut Butter",
    "category": "Nut Butters",
    "concern": [
      "Heart Health",
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Almond Nut Butter sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Almond Nut Butter"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Almond%20Nut%20Butter/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Almond%20Nut%20Butter/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 34,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 41,
    "tags": [
      "Nut Butters",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-4",
    "name": "Almonds Jumbo",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Almonds Jumbo sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Almonds Jumbo"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Almonds%20Jumbo/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Almonds%20Jumbo/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 41,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 44,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-5",
    "name": "Almonds USA",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Almonds USA sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Almonds USA"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Almonds%20USA/01.png",
    "gallery": [
      "/images/Dailywell_Products/Almonds%20USA/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 48,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 47,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-6",
    "name": "Alovi Seeds (Halim Seeds)",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Alovi Seeds (Halim Seeds) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Alovi Seeds (Halim Seeds)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Alovi%20Seeds%20(Halim%20Seeds)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Alovi%20Seeds%20(Halim%20Seeds)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 55,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 50,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-7",
    "name": "Amaranth (Rajgira)",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Amaranth (Rajgira) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Amaranth (Rajgira)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Amaranth%20(Rajgira)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Amaranth%20(Rajgira)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 62,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 53,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-8",
    "name": "Amaranth Noodles",
    "category": "Noodles",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Amaranth Noodles sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Amaranth Noodles"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Amaranth%20Noodles/01.png",
    "gallery": [
      "/images/Dailywell_Products/Amaranth%20Noodles/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 69,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 56,
    "tags": [
      "Noodles",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-9",
    "name": "Amla Dry Candy",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss",
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Amla Dry Candy sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Amla Dry Candy"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Amla%20Dry%20Candy/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Amla%20Dry%20Candy/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 76,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 59,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-10",
    "name": "Amla Powder",
    "category": "Health Foods",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Amla Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Amla Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Amla%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Amla%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 83,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 62,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-11",
    "name": "Appam Idiyappam Podi",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Appam Idiyappam Podi sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Appam Idiyappam Podi"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Appam%20Idiyappam%20Podi/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Appam%20Idiyappam%20Podi/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 90,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 65,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-12",
    "name": "Apricot Dried",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Apricot Dried sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Apricot Dried"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Apricot%20Dried/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Apricot%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 97,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 68,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-13",
    "name": "Apricot Soft",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Apricot Soft sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Apricot Soft"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Apricot%20Soft/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Apricot%20Soft/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 104,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 71,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-14",
    "name": "Arabica Coffee Bean",
    "category": "Coffee",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Arabica Coffee Bean sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Arabica Coffee Bean"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Arabica%20Coffee%20Bean/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Arabica%20Coffee%20Bean/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 111,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 74,
    "tags": [
      "Coffee",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-15",
    "name": "Arabica Coffee Beans (organic)",
    "category": "Coffee",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Arabica Coffee Beans (organic) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Arabica Coffee Beans (organic)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Arabica%20Coffee%20Beans%20(organic)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Arabica%20Coffee%20Beans%20(organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 118,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 37,
    "tags": [
      "Coffee",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-16",
    "name": "Arabica Coffee Powder",
    "category": "Coffee",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Arabica Coffee Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Arabica Coffee Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Arabica%20Coffee%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Arabica%20Coffee%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 125,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 40,
    "tags": [
      "Coffee",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-17",
    "name": "Ashwagandha",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Ashwagandha sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Ashwagandha"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Ashwagandha/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Ashwagandha/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 132,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 43,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-18",
    "name": "Assam Tea",
    "category": "Tea",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Assam Tea sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Assam Tea"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Assam%20Tea/01.png",
    "gallery": [
      "/images/Dailywell_Products/Assam%20Tea/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 139,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 46,
    "tags": [
      "Tea",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-19",
    "name": "Avalose Podi",
    "category": "Masalas",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Avalose Podi sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Avalose Podi"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Avalose%20Podi/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Avalose%20Podi/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 146,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 49,
    "tags": [
      "Masalas",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-20",
    "name": "Baby Fork",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Baby Fork sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Baby Fork"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Baby%20Fork/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Baby%20Fork/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 153,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 52,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-21",
    "name": "Baby Spoon",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Baby Spoon sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Baby Spoon"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Baby%20Spoon/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Baby%20Spoon/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 160,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 55,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-22",
    "name": "Bamboo Toothbrush",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Bamboo Toothbrush sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Bamboo Toothbrush"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Bamboo%20Toothbrush/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Bamboo%20Toothbrush/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 167,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 58,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-23",
    "name": "Banana Dried (Kannan Kaya)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Banana Dried (Kannan Kaya) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Banana Dried (Kannan Kaya)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Banana%20Dried%20(Kannan%20Kaya)/01.png",
    "gallery": [
      "/images/Dailywell_Products/Banana%20Dried%20(Kannan%20Kaya)/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 174,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 61,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-24",
    "name": "Barley",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Barley sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Barley"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Barley/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Barley/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 181,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 64,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-25",
    "name": "Barnyard Millet (Oodalu)",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Barnyard Millet (Oodalu) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Barnyard Millet (Oodalu)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Barnyard%20Millet%20(Oodalu)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Barnyard%20Millet%20(Oodalu)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 188,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 67,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-26",
    "name": "Barnyard Millet (Oodalu) Rava",
    "category": "Rava",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Barnyard Millet (Oodalu) Rava sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Barnyard Millet (Oodalu) Rava"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Barnyard%20Millet%20(Oodalu)%20Rava/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Barnyard%20Millet%20(Oodalu)%20Rava/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 195,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 70,
    "tags": [
      "Rava",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-27",
    "name": "Barnyard Millet Cookies",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Barnyard Millet Cookies sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Barnyard Millet Cookies"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Barnyard%20Millet%20Cookies/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Barnyard%20Millet%20Cookies/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 22,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 73,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-28",
    "name": "Basil Seeds (Sabja)",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Basil Seeds (Sabja) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Basil Seeds (Sabja)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Basil%20Seeds%20(Sabja)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Basil%20Seeds%20(Sabja)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 29,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 36,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-29",
    "name": "Bay Leaves Tej Patta",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Bay Leaves Tej Patta sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Bay Leaves Tej Patta"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Bay%20Leaves%20_%20Tej%20Patta/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Bay%20Leaves%20_%20Tej%20Patta/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 36,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 39,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-30",
    "name": "Beetroot Powder",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Beetroot Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Beetroot Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Beetroot%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Beetroot%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 43,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 42,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-31",
    "name": "Bengal Gram Dal (Besan)",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Bengal Gram Dal (Besan) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Bengal Gram Dal (Besan)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Bengal%20Gram%20Dal%20(Besan)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Bengal%20Gram%20Dal%20(Besan)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 50,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 45,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-32",
    "name": "Bhringraj Powder",
    "category": "Hair Care",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Bhringraj Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Bhringraj Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Bhringraj%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Bhringraj%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 57,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 48,
    "tags": [
      "Hair Care",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-33",
    "name": "Black Cardamom (Black Elaichi)",
    "category": "Spices",
    "concern": [
      "Heart Health",
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Black Cardamom (Black Elaichi) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Black Cardamom (Black Elaichi)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Black%20Cardamom%20(Black%20Elaichi)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Black%20Cardamom%20(Black%20Elaichi)/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 64,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 51,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-34",
    "name": "Black Chana",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Black Chana sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Black Chana"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Black%20Chana/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Black%20Chana/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 71,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 54,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-35",
    "name": "Black Chickpea Powder (Kadala Podi)",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Black Chickpea Powder (Kadala Podi) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Black Chickpea Powder (Kadala Podi)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Black%20Chickpea%20Powder%20(Kadala%20Podi)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Black%20Chickpea%20Powder%20(Kadala%20Podi)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 78,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 57,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-36",
    "name": "Black Salt",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Black Salt sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Black Salt"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Black%20Salt/01.png",
    "gallery": [
      "/images/Dailywell_Products/Black%20Salt/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 85,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 60,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-37",
    "name": "Black Seedless Raisins",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Black Seedless Raisins sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Black Seedless Raisins"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Black%20Seedless%20Raisins/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Black%20Seedless%20Raisins/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 92,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 63,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-38",
    "name": "Black Sesame Chikki",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Black Sesame Chikki sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Black Sesame Chikki"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Black%20Sesame%20Chikki/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Black%20Sesame%20Chikki/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 99,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 66,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-39",
    "name": "Brahmi Honey",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Brahmi Honey sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Brahmi Honey"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Brahmi%20Honey/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Brahmi%20Honey/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 106,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 69,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-40",
    "name": "Brazil Nuts",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Brazil Nuts sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Brazil Nuts"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Brazil%20Nuts/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Brazil%20Nuts/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 113,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 72,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-41",
    "name": "Browntop Millet (Korale)",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Browntop Millet (Korale) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Browntop Millet (Korale)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Browntop%20Millet%20(Korale)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Browntop%20Millet%20(Korale)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 120,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 35,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-42",
    "name": "Cardamom Bold",
    "category": "Spices",
    "concern": [
      "Heart Health",
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Cardamom Bold sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cardamom Bold"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cardamom%20Bold/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Cardamom%20Bold/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 127,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 38,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-43",
    "name": "Cardamom Bulk",
    "category": "Spices",
    "concern": [
      "Heart Health",
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Cardamom Bulk sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cardamom Bulk"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cardamom%20Bulk/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Cardamom%20Bulk/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 134,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 41,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-44",
    "name": "Cashew 180",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Cashew 180 sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cashew 180"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cashew%20180/01.png",
    "gallery": [
      "/images/Dailywell_Products/Cashew%20180/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 141,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 44,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-45",
    "name": "Cashew 240",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Cashew 240 sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cashew 240"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cashew%20240/01.png",
    "gallery": [
      "/images/Dailywell_Products/Cashew%20240/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 148,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 47,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-46",
    "name": "Cashew Nut Butter",
    "category": "Nut Butters",
    "concern": [
      "Heart Health",
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Cashew Nut Butter sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cashew Nut Butter"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cashew%20Nut%20Butter/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Cashew%20Nut%20Butter/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 155,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 50,
    "tags": [
      "Nut Butters",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-47",
    "name": "Cashew Peanut Chikki",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Cashew Peanut Chikki sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cashew Peanut Chikki"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cashew%20Peanut%20Chikki/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Cashew%20Peanut%20Chikki/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 162,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 53,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-48",
    "name": "Cashew Roasted And Salted",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Cashew Roasted And Salted sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cashew Roasted And Salted"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cashew%20Roasted%20And%20Salted/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Cashew%20Roasted%20And%20Salted/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 169,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 56,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-49",
    "name": "Cashew Split",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Cashew Split sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cashew Split"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cashew%20Split/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Cashew%20Split/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 176,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 59,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-50",
    "name": "Cashew- Broken PS",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Cashew- Broken PS sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cashew- Broken PS"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cashew-%20Broken%20PS/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Cashew-%20Broken%20PS/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 183,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 62,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-51",
    "name": "Cashew- Chilli Garlic 240",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Cashew- Chilli Garlic 240 sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cashew- Chilli Garlic 240"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cashew-%20Chilli%20Garlic%20240/01.png",
    "gallery": [
      "/images/Dailywell_Products/Cashew-%20Chilli%20Garlic%20240/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 190,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 65,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-52",
    "name": "Cashew- Pepper Garlic 240",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Cashew- Pepper Garlic 240 sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cashew- Pepper Garlic 240"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cashew-%20Pepper%20Garlic%20240/01.png",
    "gallery": [
      "/images/Dailywell_Products/Cashew-%20Pepper%20Garlic%20240/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 197,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 68,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-53",
    "name": "Cassia Cinnamon",
    "category": "Spices",
    "concern": [
      "Heart Health",
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Cassia Cinnamon sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cassia Cinnamon"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cassia%20Cinnamon/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Cassia%20Cinnamon/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 24,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 71,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-54",
    "name": "Chammanthi Podi",
    "category": "Masalas",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Chammanthi Podi sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Chammanthi Podi"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Chammanthi%20Podi/01.png",
    "gallery": [
      "/images/Dailywell_Products/Chammanthi%20Podi/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 31,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 74,
    "tags": [
      "Masalas",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-55",
    "name": "Chia Seeds",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Chia Seeds sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Chia Seeds"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Chia%20Seeds/01.png",
    "gallery": [
      "/images/Dailywell_Products/Chia%20Seeds/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 38,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 37,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-56",
    "name": "Chicken Masala",
    "category": "Masalas",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Chicken Masala sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Chicken Masala"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Chicken%20Masala/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Chicken%20Masala/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 45,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 40,
    "tags": [
      "Masalas",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-57",
    "name": "Chilli Chocolate",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Chilli Chocolate sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Chilli Chocolate"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Chilli%20Chocolate/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Chilli%20Chocolate/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 52,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 43,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-58",
    "name": "Chocolate Muesli",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Chocolate Muesli sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Chocolate Muesli"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Chocolate%20Muesli/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Chocolate%20Muesli/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 59,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 46,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-59",
    "name": "Cinnamon Roll (Churul Patta, Indonesia)",
    "category": "Flour",
    "concern": [
      "Heart Health",
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Cinnamon Roll (Churul Patta, Indonesia) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cinnamon Roll (Churul Patta, Indonesia)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cinnamon%20Roll%20(Churul%20Patta%2C%20Indonesia)/01.png",
    "gallery": [
      "/images/Dailywell_Products/Cinnamon%20Roll%20(Churul%20Patta%2C%20Indonesia)/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 66,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 49,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-60",
    "name": "Cloth Loofah",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Cloth Loofah sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cloth Loofah"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cloth%20Loofah/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Cloth%20Loofah/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 73,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 52,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-61",
    "name": "Cloves",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Cloves sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cloves"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cloves/01.png",
    "gallery": [
      "/images/Dailywell_Products/Cloves/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 80,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 55,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-62",
    "name": "Cocoa Powder",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Cocoa Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cocoa Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cocoa%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Cocoa%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 87,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 58,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-63",
    "name": "Cocoa Tea",
    "category": "Tea",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Cocoa Tea sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cocoa Tea"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cocoa%20Tea/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Cocoa%20Tea/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 94,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 61,
    "tags": [
      "Tea",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-64",
    "name": "Coconut Oil",
    "category": "Wood Pressed Oils",
    "concern": [
      "Heart Health",
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Coconut Oil sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Coconut Oil"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Coconut%20Oil/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Coconut%20Oil/01.jpg",
      "/images/Dailywell_Products/Coconut%20Oil/02.jpg",
      "/images/Dailywell_Products/Coconut%20Oil/03.jpg",
      "/images/Dailywell_Products/Coconut%20Oil/04.jpg"
    ],
    "variants": [
      {
        "weight": "500ml",
        "price": 240,
        "originalPrice": 280,
        "inStock": true
      },
      {
        "weight": "1 Litre",
        "price": 450,
        "originalPrice": 520,
        "inStock": true
      },
      {
        "weight": "5 Litres",
        "price": 2100,
        "originalPrice": 2450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 101,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 64,
    "tags": [
      "Wood Pressed Oils",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-65",
    "name": "Coconut Sugar",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health",
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Coconut Sugar sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Coconut Sugar"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Coconut%20Sugar/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Coconut%20Sugar/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 108,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 67,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-66",
    "name": "Coffee Chocolate",
    "category": "Coffee",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Coffee Chocolate sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Coffee Chocolate"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Coffee%20Chocolate/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Coffee%20Chocolate/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 115,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 70,
    "tags": [
      "Coffee",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-67",
    "name": "Copper Tongue Cleaner",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Copper Tongue Cleaner sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Copper Tongue Cleaner"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Copper%20Tongue%20Cleaner/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Copper%20Tongue%20Cleaner/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 122,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 73,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-68",
    "name": "Coriander",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Coriander sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Coriander"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Coriander/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Coriander/01.jpg",
      "/images/Dailywell_Products/Coriander/02.jpg",
      "/images/Dailywell_Products/Coriander/03.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 129,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 36,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-69",
    "name": "Corn Maize",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Corn Maize sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Corn Maize"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Corn_%20Maize/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Corn_%20Maize/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 136,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 39,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-70",
    "name": "Cow Ghee",
    "category": "Wood Pressed Oils",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Cow Ghee sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cow Ghee"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cow%20Ghee/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Cow%20Ghee/01.jpg",
      "/images/Dailywell_Products/Cow%20Ghee/02.jpg",
      "/images/Dailywell_Products/Cow%20Ghee/03.jpg",
      "/images/Dailywell_Products/Cow%20Ghee/04.png"
    ],
    "variants": [
      {
        "weight": "500ml",
        "price": 240,
        "originalPrice": 280,
        "inStock": true
      },
      {
        "weight": "1 Litre",
        "price": 450,
        "originalPrice": 520,
        "inStock": true
      },
      {
        "weight": "5 Litres",
        "price": 2100,
        "originalPrice": 2450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 143,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 42,
    "tags": [
      "Wood Pressed Oils",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-71",
    "name": "Cucumber Seeds",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Cucumber Seeds sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cucumber Seeds"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cucumber%20Seeds/01.png",
    "gallery": [
      "/images/Dailywell_Products/Cucumber%20Seeds/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 150,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 45,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-72",
    "name": "Cumin (Jeerakam)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Cumin (Jeerakam) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Cumin (Jeerakam)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Cumin%20(Jeerakam)/01.png",
    "gallery": [
      "/images/Dailywell_Products/Cumin%20(Jeerakam)/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 157,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 48,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-73",
    "name": "Custom Masala Blend",
    "category": "Masalas",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Custom Masala Blend sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Custom Masala Blend"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Custom%20Masala%20Blend/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Custom%20Masala%20Blend/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 164,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 51,
    "tags": [
      "Masalas",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-74",
    "name": "Dailywell Fibre Atta",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Dailywell Fibre Atta sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dailywell Fibre Atta"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dailywell%20Fibre%20Atta/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dailywell%20Fibre%20Atta/01.jpg",
      "/images/Dailywell_Products/Dailywell%20Fibre%20Atta/02.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 171,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 54,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-75",
    "name": "Dailywell Gluten Free Atta",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Dailywell Gluten Free Atta sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dailywell Gluten Free Atta"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dailywell%20Gluten%20Free%20Atta/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dailywell%20Gluten%20Free%20Atta/01.jpg",
      "/images/Dailywell_Products/Dailywell%20Gluten%20Free%20Atta/02.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 178,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 57,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-76",
    "name": "Dailywell Multi Millet Atta",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Dailywell Multi Millet Atta sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dailywell Multi Millet Atta"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dailywell%20Multi%20Millet%20Atta/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dailywell%20Multi%20Millet%20Atta/01.jpg",
      "/images/Dailywell_Products/Dailywell%20Multi%20Millet%20Atta/02.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 185,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 60,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-77",
    "name": "Dailywell Nuts & Seeds Atta",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Dailywell Nuts & Seeds Atta sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dailywell Nuts & Seeds Atta"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dailywell%20Nuts%20%26%20Seeds%20Atta/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dailywell%20Nuts%20%26%20Seeds%20Atta/01.jpg",
      "/images/Dailywell_Products/Dailywell%20Nuts%20%26%20Seeds%20Atta/02.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 192,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 63,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-78",
    "name": "Dailywell Protein Atta",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Dailywell Protein Atta sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dailywell Protein Atta"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dailywell%20Protein%20Atta/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dailywell%20Protein%20Atta/01.jpg",
      "/images/Dailywell_Products/Dailywell%20Protein%20Atta/02.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 199,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 66,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-79",
    "name": "Dark Chocolate 55%",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Dark Chocolate 55% sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dark Chocolate 55%"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dark%20Chocolate%2055%25/01.png",
    "gallery": [
      "/images/Dailywell_Products/Dark%20Chocolate%2055%25/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 26,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 69,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-80",
    "name": "Dark Chocolate 80%",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Dark Chocolate 80% sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dark Chocolate 80%"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dark%20Chocolate%2080%25/01.png",
    "gallery": [
      "/images/Dailywell_Products/Dark%20Chocolate%2080%25/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 33,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 72,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-81",
    "name": "Dark Milk Chocolate",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Dark Milk Chocolate sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dark Milk Chocolate"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dark%20Milk%20Chocolate/01.png",
    "gallery": [
      "/images/Dailywell_Products/Dark%20Milk%20Chocolate/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 40,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 35,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-82",
    "name": "Dates- Dry Black Fine (Oman Kaarakka)",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Dates- Dry Black Fine (Oman Kaarakka) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dates- Dry Black Fine (Oman Kaarakka)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dates-%20Dry%20Black%20Fine%20(Oman%20Kaarakka)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dates-%20Dry%20Black%20Fine%20(Oman%20Kaarakka)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 47,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 38,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-83",
    "name": "Dried Blueberries",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Dried Blueberries sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dried Blueberries"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dried%20Blueberries/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dried%20Blueberries/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 54,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 41,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-84",
    "name": "Dried Cherry",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Dried Cherry sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dried Cherry"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dried%20Cherry/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dried%20Cherry/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 61,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 44,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-85",
    "name": "Dried Cranberries",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Dried Cranberries sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dried Cranberries"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dried%20Cranberries/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dried%20Cranberries/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 68,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 47,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-86",
    "name": "Dried Curry Leaves",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Dried Curry Leaves sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dried Curry Leaves"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dried%20Curry%20Leaves/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dried%20Curry%20Leaves/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 75,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 50,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-87",
    "name": "Dried Ginger",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Dried Ginger sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dried Ginger"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dried%20Ginger/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dried%20Ginger/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 82,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 53,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-88",
    "name": "Dried Ginger Powder",
    "category": "Health Foods",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Dried Ginger Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dried Ginger Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dried%20Ginger%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dried%20Ginger%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 89,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 56,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-89",
    "name": "Dried Jackfruit",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Dried Jackfruit sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dried Jackfruit"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dried%20Jackfruit/01.png",
    "gallery": [
      "/images/Dailywell_Products/Dried%20Jackfruit/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 96,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 59,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-90",
    "name": "Dried Lemon",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Dried Lemon sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dried Lemon"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dried%20Lemon/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dried%20Lemon/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 103,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 62,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-91",
    "name": "Dried Strawberry",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Dried Strawberry sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Dried Strawberry"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Dried%20Strawberry/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Dried%20Strawberry/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 110,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 65,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-92",
    "name": "Ekanayakam",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Ekanayakam sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Ekanayakam"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Ekanayakam/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Ekanayakam/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 117,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 68,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-93",
    "name": "Emmer Khapli Wheat",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Emmer Khapli Wheat sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Emmer Khapli Wheat"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Emmer%20Khapli%20Wheat/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Emmer%20Khapli%20Wheat/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 124,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 71,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-94",
    "name": "Fennel (Perumjeerakam)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Fennel (Perumjeerakam) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Fennel (Perumjeerakam)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Fennel%20(Perumjeerakam)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Fennel%20(Perumjeerakam)/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 131,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 74,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-95",
    "name": "Fenugreek (Uluva)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Fenugreek (Uluva) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Fenugreek (Uluva)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Fenugreek%20(Uluva)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Fenugreek%20(Uluva)/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 138,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 37,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-96",
    "name": "Fig (Big)",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Fig (Big) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Fig (Big)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Fig%20(Big)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Fig%20(Big)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 145,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 40,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-97",
    "name": "Fig (Small)",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Fig (Small) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Fig (Small)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Fig%20(Small)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Fig%20(Small)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 152,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 43,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-98",
    "name": "Fish Curry Masala",
    "category": "Masalas",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Fish Curry Masala sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Fish Curry Masala"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Fish%20Curry%20Masala/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Fish%20Curry%20Masala/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 159,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 46,
    "tags": [
      "Masalas",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-99",
    "name": "Flax Seeds",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Flax Seeds sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Flax Seeds"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Flax%20Seeds/01.png",
    "gallery": [
      "/images/Dailywell_Products/Flax%20Seeds/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 166,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 49,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-100",
    "name": "Forest Honey (Kattuthen)",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Forest Honey (Kattuthen) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Forest Honey (Kattuthen)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Forest%20Honey%20(Kattuthen)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Forest%20Honey%20(Kattuthen)/01.jpg",
      "/images/Dailywell_Products/Forest%20Honey%20(Kattuthen)/02.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 173,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 52,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-101",
    "name": "Fork",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Fork sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Fork"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Fork/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Fork/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 180,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 55,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-102",
    "name": "Foxtail Millet (Navane)",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Foxtail Millet (Navane) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Foxtail Millet (Navane)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Foxtail%20Millet%20(Navane)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Foxtail%20Millet%20(Navane)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 187,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 58,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-103",
    "name": "Foxtail Millet (Navane) Rava",
    "category": "Rava",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Foxtail Millet (Navane) Rava sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Foxtail Millet (Navane) Rava"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Foxtail%20Millet%20(Navane)%20Rava/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Foxtail%20Millet%20(Navane)%20Rava/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 194,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 61,
    "tags": [
      "Rava",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-104",
    "name": "Fruit & Nut Chocolate",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Fruit & Nut Chocolate sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Fruit & Nut Chocolate"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Fruit%20%26%20Nut%20Chocolate/01.png",
    "gallery": [
      "/images/Dailywell_Products/Fruit%20%26%20Nut%20Chocolate/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 21,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 64,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-105",
    "name": "Fruits & Nuts Muesli",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Fruits & Nuts Muesli sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Fruits & Nuts Muesli"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Fruits%20%26%20Nuts%20Muesli/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Fruits%20%26%20Nuts%20Muesli/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 28,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 67,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-106",
    "name": "Fruits Granola",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Fruits Granola sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Fruits Granola"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Fruits%20Granola/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Fruits%20Granola/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 35,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 70,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-107",
    "name": "Garam Masala",
    "category": "Masalas",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Garam Masala sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Garam Masala"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Garam%20Masala/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Garam%20Masala/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 42,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 73,
    "tags": [
      "Masalas",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-108",
    "name": "Garlic pickle",
    "category": "Pickles",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Garlic pickle sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Garlic pickle"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Garlic%20pickle/01.png",
    "gallery": [
      "/images/Dailywell_Products/Garlic%20pickle/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 49,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 36,
    "tags": [
      "Pickles",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-109",
    "name": "Ginger Cube",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Ginger Cube sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Ginger Cube"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Ginger%20Cube/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Ginger%20Cube/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 56,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 39,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-110",
    "name": "Ginger Honey",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Ginger Honey sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Ginger Honey"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Ginger%20Honey/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Ginger%20Honey/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 63,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 42,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-111",
    "name": "Gooseberry Pickle",
    "category": "Pickles",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Gooseberry Pickle sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Gooseberry Pickle"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Gooseberry%20Pickle/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Gooseberry%20Pickle/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 70,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 45,
    "tags": [
      "Pickles",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-112",
    "name": "Green Gram",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Green Gram sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Green Gram"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Green%20Gram/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Green%20Gram/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 77,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 48,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-113",
    "name": "Green Gram Powder (Cherupayar Podi)",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Green Gram Powder (Cherupayar Podi) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Green Gram Powder (Cherupayar Podi)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Green%20Gram%20Powder%20(Cherupayar%20Podi)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Green%20Gram%20Powder%20(Cherupayar%20Podi)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 84,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 51,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-114",
    "name": "Green Peas",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Green Peas sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Green Peas"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Green%20Peas/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Green%20Peas/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 91,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 54,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-115",
    "name": "Groundnut Oil",
    "category": "Wood Pressed Oils",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Groundnut Oil sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Groundnut Oil"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Groundnut%20Oil/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Groundnut%20Oil/01.jpg",
      "/images/Dailywell_Products/Groundnut%20Oil/02.jpg"
    ],
    "variants": [
      {
        "weight": "500ml",
        "price": 240,
        "originalPrice": 280,
        "inStock": true
      },
      {
        "weight": "1 Litre",
        "price": 450,
        "originalPrice": 520,
        "inStock": true
      },
      {
        "weight": "5 Litres",
        "price": 2100,
        "originalPrice": 2450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 98,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 57,
    "tags": [
      "Wood Pressed Oils",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-116",
    "name": "Hazel Nuts",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Hazel Nuts sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Hazel Nuts"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Hazel%20Nuts/01.png",
    "gallery": [
      "/images/Dailywell_Products/Hazel%20Nuts/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 105,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 60,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-117",
    "name": "Hazelnut Nut Butter",
    "category": "Nut Butters",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Hazelnut Nut Butter sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Hazelnut Nut Butter"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Hazelnut%20Nut%20Butter/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Hazelnut%20Nut%20Butter/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 112,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 63,
    "tags": [
      "Nut Butters",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-118",
    "name": "Henna Powder",
    "category": "Skin Care",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Henna Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Henna Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Henna%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Henna%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 119,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 66,
    "tags": [
      "Skin Care",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-119",
    "name": "Hibiscus Powder",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Hibiscus Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Hibiscus Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Hibiscus%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Hibiscus%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 126,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 69,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-120",
    "name": "Hing (Asafoetida)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Hing (Asafoetida) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Hing (Asafoetida)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Hing%20(Asafoetida)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Hing%20(Asafoetida)/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 133,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 72,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-122",
    "name": "Honey Dipper",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Honey Dipper sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Honey Dipper"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Honey%20Dipper/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Honey%20Dipper/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 147,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 38,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-123",
    "name": "Horse Gram (Muthira)",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Horse Gram (Muthira) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Horse Gram (Muthira)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Horse%20Gram%20(Muthira)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Horse%20Gram%20(Muthira)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 154,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 41,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-124",
    "name": "Idli Powder",
    "category": "Masalas",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Idli Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Idli Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Idli%20Powder/01.png",
    "gallery": [
      "/images/Dailywell_Products/Idli%20Powder/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 161,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 44,
    "tags": [
      "Masalas",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-125",
    "name": "Idly Rice SR Orange",
    "category": "Rice",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Idly Rice SR Orange sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Idly Rice SR Orange"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Idly%20Rice%20SR%20Orange/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Idly%20Rice%20SR%20Orange/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 168,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 47,
    "tags": [
      "Rice",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-126",
    "name": "Incha Acacia Wild",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Incha Acacia Wild sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Incha Acacia Wild"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Incha_%20Acacia%20Wild/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Incha_%20Acacia%20Wild/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 175,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 50,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-127",
    "name": "Indigo Powder",
    "category": "Hair Care",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Indigo Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Indigo Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Indigo%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Indigo%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 182,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 53,
    "tags": [
      "Hair Care",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-128",
    "name": "Iratti Madhuram",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Iratti Madhuram sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Iratti Madhuram"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Iratti%20Madhuram/01.png",
    "gallery": [
      "/images/Dailywell_Products/Iratti%20Madhuram/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 189,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 56,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-129",
    "name": "Jackfruit Pasta",
    "category": "Pasta",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Jackfruit Pasta sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Jackfruit Pasta"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Jackfruit%20Pasta/01.png",
    "gallery": [
      "/images/Dailywell_Products/Jackfruit%20Pasta/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 196,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 59,
    "tags": [
      "Pasta",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-131",
    "name": "Jaggery Mix Dry Fruit",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Jaggery Mix Dry Fruit sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Jaggery Mix Dry Fruit"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Jaggery%20Mix%20Dry%20Fruit/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Jaggery%20Mix%20Dry%20Fruit/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 30,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 65,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-132",
    "name": "Jowar (Sorghum Millet)",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Jowar (Sorghum Millet) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Jowar (Sorghum Millet)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Jowar%20(Sorghum%20Millet)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Jowar%20(Sorghum%20Millet)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 37,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 68,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-133",
    "name": "Jowar (Sorghum Millet) Rava",
    "category": "Rava",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Jowar (Sorghum Millet) Rava sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Jowar (Sorghum Millet) Rava"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Jowar%20(Sorghum%20Millet)%20Rava/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Jowar%20(Sorghum%20Millet)%20Rava/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 44,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 71,
    "tags": [
      "Rava",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-134",
    "name": "Jowar Flakes",
    "category": "Poha",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Jowar Flakes sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Jowar Flakes"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Jowar%20Flakes/01.png",
    "gallery": [
      "/images/Dailywell_Products/Jowar%20Flakes/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 51,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 74,
    "tags": [
      "Poha",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-135",
    "name": "Jowar Millet Pasta",
    "category": "Pasta",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Jowar Millet Pasta sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Jowar Millet Pasta"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Jowar%20Millet%20Pasta/01.png",
    "gallery": [
      "/images/Dailywell_Products/Jowar%20Millet%20Pasta/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 58,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 37,
    "tags": [
      "Pasta",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-136",
    "name": "Kabuli Chana White",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Kabuli Chana White sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Kabuli Chana White"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Kabuli%20Chana%20White/01.png",
    "gallery": [
      "/images/Dailywell_Products/Kabuli%20Chana%20White/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 65,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 40,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-137",
    "name": "Kadukka (Haritaki)",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Kadukka (Haritaki) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Kadukka (Haritaki)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Kadukka%20(Haritaki)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Kadukka%20(Haritaki)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 72,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 43,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-138",
    "name": "Karingali (Black Cutch)",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Karingali (Black Cutch) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Karingali (Black Cutch)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Karingali%20(Black%20Cutch)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Karingali%20(Black%20Cutch)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 79,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 46,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-139",
    "name": "Kasthuri Haldi Powder",
    "category": "Skin Care",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Kasthuri Haldi Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Kasthuri Haldi Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Kasthuri%20Haldi%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Kasthuri%20Haldi%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 86,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 49,
    "tags": [
      "Skin Care",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-140",
    "name": "Kiwi Green Dried",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Kiwi Green Dried sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Kiwi Green Dried"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Kiwi%20Green%20Dried/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Kiwi%20Green%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 93,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 52,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-141",
    "name": "Kodo Millet (Arka)",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Kodo Millet (Arka) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Kodo Millet (Arka)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Kodo%20Millet%20(Arka)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Kodo%20Millet%20(Arka)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 100,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 55,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-142",
    "name": "Kodo Millet (Arka) Rava",
    "category": "Rava",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Kodo Millet (Arka) Rava sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Kodo Millet (Arka) Rava"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Kodo%20Millet%20(Arka)%20Rava/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Kodo%20Millet%20(Arka)%20Rava/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 107,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 58,
    "tags": [
      "Rava",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-143",
    "name": "Kodo Millet Cookies",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Kodo Millet Cookies sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Kodo Millet Cookies"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Kodo%20Millet%20Cookies/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Kodo%20Millet%20Cookies/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 114,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 61,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-144",
    "name": "Lapsi Daliya (Broken Wheat)",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Lapsi Daliya (Broken Wheat) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Lapsi Daliya (Broken Wheat)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Lapsi%20Daliya%20(Broken%20Wheat)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Lapsi%20Daliya%20(Broken%20Wheat)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 121,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 64,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-145",
    "name": "Lemon pickle",
    "category": "Pickles",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Lemon pickle sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Lemon pickle"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Lemon%20pickle/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Lemon%20pickle/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 128,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 67,
    "tags": [
      "Pickles",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-146",
    "name": "Little Millet (Samai)",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Little Millet (Samai) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Little Millet (Samai)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Little%20Millet%20(Samai)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Little%20Millet%20(Samai)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 135,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 70,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-147",
    "name": "Little Millet (Samai) Rava",
    "category": "Rava",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Little Millet (Samai) Rava sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Little Millet (Samai) Rava"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Little%20Millet%20(Samai)%20Rava/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Little%20Millet%20(Samai)%20Rava/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 142,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 73,
    "tags": [
      "Rava",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-148",
    "name": "Little Millet Cookies",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Little Millet Cookies sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Little Millet Cookies"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Little%20Millet%20Cookies/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Little%20Millet%20Cookies/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 149,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 36,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-149",
    "name": "Lobia (Red Cowpeas)",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Lobia (Red Cowpeas) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Lobia (Red Cowpeas)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Lobia%20(Red%20Cowpeas)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Lobia%20(Red%20Cowpeas)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 156,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 39,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-150",
    "name": "Lokwan Gund Wheat",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Lokwan Gund Wheat sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Lokwan Gund Wheat"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Lokwan%20Gund%20Wheat/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Lokwan%20Gund%20Wheat/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 163,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 42,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-151",
    "name": "Macadamia Nuts",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Macadamia Nuts sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Macadamia Nuts"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Macadamia%20Nuts/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Macadamia%20Nuts/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 170,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 45,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-152",
    "name": "Makhana (Lotus Seeds)",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Makhana (Lotus Seeds) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Makhana (Lotus Seeds)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Makhana%20(Lotus%20Seeds)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Makhana%20(Lotus%20Seeds)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 177,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 48,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-153",
    "name": "Mango Dried",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Mango Dried sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Mango Dried"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Mango%20Dried/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Mango%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 184,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 51,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-154",
    "name": "Manjishta Root Powder",
    "category": "Skin Care",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Manjishta Root Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Manjishta Root Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Manjishta%20Root%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Manjishta%20Root%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 191,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 54,
    "tags": [
      "Skin Care",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-155",
    "name": "Marathi Moggu",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Marathi Moggu sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Marathi Moggu"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Marathi%20Moggu/01.png",
    "gallery": [
      "/images/Dailywell_Products/Marathi%20Moggu/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 198,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 57,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-156",
    "name": "Marathi Moggu Long (Kapok Buds)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Marathi Moggu Long (Kapok Buds) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Marathi Moggu Long (Kapok Buds)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Marathi%20Moggu%20Long%20(Kapok%20Buds)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Marathi%20Moggu%20Long%20(Kapok%20Buds)/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 25,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 60,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-157",
    "name": "Marayoor Jaggery Powder",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Marayoor Jaggery Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Marayoor Jaggery Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Marayoor%20Jaggery%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Marayoor%20Jaggery%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 32,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 63,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-158",
    "name": "Marayoor Jaggery Whole",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Marayoor Jaggery Whole sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Marayoor Jaggery Whole"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Marayoor%20Jaggery%20Whole/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Marayoor%20Jaggery%20Whole/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 39,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 66,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-159",
    "name": "Masala Grinding Charge",
    "category": "Masalas",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Masala Grinding Charge sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Masala Grinding Charge"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Masala%20Grinding%20Charge/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Masala%20Grinding%20Charge/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 46,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 69,
    "tags": [
      "Masalas",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-160",
    "name": "Masala Roasting Charge",
    "category": "Masalas",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Masala Roasting Charge sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Masala Roasting Charge"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Masala%20Roasting%20Charge/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Masala%20Roasting%20Charge/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 53,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 72,
    "tags": [
      "Masalas",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-161",
    "name": "Masoor Dal (Split)",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Masoor Dal (Split) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Masoor Dal (Split)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Masoor%20Dal%20(Split)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Masoor%20Dal%20(Split)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 60,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 35,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-162",
    "name": "Meat Masala",
    "category": "Masalas",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Meat Masala sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Meat Masala"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Meat%20Masala/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Meat%20Masala/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 67,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 38,
    "tags": [
      "Masalas",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-163",
    "name": "Medjool Jumbo Dates",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Medjool Jumbo Dates sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Medjool Jumbo Dates"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Medjool%20Jumbo%20Dates/01.png",
    "gallery": [
      "/images/Dailywell_Products/Medjool%20Jumbo%20Dates/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 74,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 41,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-164",
    "name": "Methi Leaves Dried",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Methi Leaves Dried sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Methi Leaves Dried"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Methi%20Leaves%20Dried/01.png",
    "gallery": [
      "/images/Dailywell_Products/Methi%20Leaves%20Dried/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 81,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 44,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-165",
    "name": "Mexican Bites",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Mexican Bites sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Mexican Bites"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Mexican%20Bites/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Mexican%20Bites/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 88,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 47,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-166",
    "name": "Milky Bar",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Milky Bar sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Milky Bar"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Milky%20Bar/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Milky%20Bar/01.jpg",
      "/images/Dailywell_Products/Milky%20Bar/02.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 95,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 50,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-167",
    "name": "Mixed DryFruit & Seeds Roasted",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Mixed DryFruit & Seeds Roasted sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Mixed DryFruit & Seeds Roasted"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Mixed%20DryFruit%20%26%20Seeds%20Roasted/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Mixed%20DryFruit%20%26%20Seeds%20Roasted/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 102,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 53,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-168",
    "name": "Mixed Vegetables (Air Fried)",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Mixed Vegetables (Air Fried) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Mixed Vegetables (Air Fried)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Mixed%20Vegetables%20(Air%20Fried)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Mixed%20Vegetables%20(Air%20Fried)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 109,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 56,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-169",
    "name": "Moong Dal",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Moong Dal sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Moong Dal"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Moong%20Dal/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Moong%20Dal/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 116,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 59,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-170",
    "name": "Moringa Noodles",
    "category": "Noodles",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Moringa Noodles sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Moringa Noodles"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Moringa%20Noodles/01.png",
    "gallery": [
      "/images/Dailywell_Products/Moringa%20Noodles/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 123,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 62,
    "tags": [
      "Noodles",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-171",
    "name": "Moringa Pasta",
    "category": "Pasta",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Moringa Pasta sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Moringa Pasta"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Moringa%20Pasta/01.png",
    "gallery": [
      "/images/Dailywell_Products/Moringa%20Pasta/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 130,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 65,
    "tags": [
      "Pasta",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-172",
    "name": "Moringa Powder",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Moringa Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Moringa Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Moringa%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Moringa%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 137,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 68,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-173",
    "name": "Mulethi Root Powder Irattimadhuram",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Mulethi Root Powder Irattimadhuram sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Mulethi Root Powder Irattimadhuram"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Mulethi%20Root%20Powder_%20Irattimadhuram/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Mulethi%20Root%20Powder_%20Irattimadhuram/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 144,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 71,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-174",
    "name": "Multani Mitti",
    "category": "Skin Care",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Multani Mitti sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Multani Mitti"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Multani%20Mitti/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Multani%20Mitti/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 151,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 74,
    "tags": [
      "Skin Care",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-175",
    "name": "Multi Millet Cookies",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Multi Millet Cookies sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Multi Millet Cookies"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Multi%20Millet%20Cookies/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Multi%20Millet%20Cookies/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 158,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 37,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-176",
    "name": "Multi Millet Vermiceli",
    "category": "Noodles",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Multi Millet Vermiceli sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Multi Millet Vermiceli"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Multi%20Millet%20Vermiceli/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Multi%20Millet%20Vermiceli/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 165,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 40,
    "tags": [
      "Noodles",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-177",
    "name": "Multigrain Chikki",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Multigrain Chikki sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Multigrain Chikki"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Multigrain%20Chikki/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Multigrain%20Chikki/01.jpg",
      "/images/Dailywell_Products/Multigrain%20Chikki/02.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 172,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 43,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-178",
    "name": "Munakka Raisins",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Munakka Raisins sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Munakka Raisins"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Munakka%20Raisins/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Munakka%20Raisins/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 179,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 46,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-179",
    "name": "Mustard Oil (Black Seed)",
    "category": "Wood Pressed Oils",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Mustard Oil (Black Seed) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Mustard Oil (Black Seed)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Mustard%20Oil%20(Black%20Seed)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Mustard%20Oil%20(Black%20Seed)/01.jpg",
      "/images/Dailywell_Products/Mustard%20Oil%20(Black%20Seed)/02.jpg",
      "/images/Dailywell_Products/Mustard%20Oil%20(Black%20Seed)/03.jpg",
      "/images/Dailywell_Products/Mustard%20Oil%20(Black%20Seed)/04.jpg"
    ],
    "variants": [
      {
        "weight": "500ml",
        "price": 240,
        "originalPrice": 280,
        "inStock": true
      },
      {
        "weight": "1 Litre",
        "price": 450,
        "originalPrice": 520,
        "inStock": true
      },
      {
        "weight": "5 Litres",
        "price": 2100,
        "originalPrice": 2450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 186,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 49,
    "tags": [
      "Wood Pressed Oils",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-180",
    "name": "Mustard Seeds Black",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Mustard Seeds Black sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Mustard Seeds Black"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Mustard%20Seeds%20Black/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Mustard%20Seeds%20Black/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 193,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 52,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-181",
    "name": "Nannari Root",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Nannari Root sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Nannari Root"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Nannari%20Root/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Nannari%20Root/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 20,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 55,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-182",
    "name": "Navara Rice",
    "category": "Rice",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Navara Rice sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Navara Rice"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Navara%20Rice/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Navara%20Rice/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 27,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 58,
    "tags": [
      "Rice",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-183",
    "name": "Neem Comb",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Neem Comb sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Neem Comb"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Neem%20Comb/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Neem%20Comb/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 34,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 61,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-184",
    "name": "Neem Ladle",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Neem Ladle sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Neem Ladle"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Neem%20Ladle/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Neem%20Ladle/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 41,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 64,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-185",
    "name": "Neem Leaf Powder",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Neem Leaf Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Neem Leaf Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Neem%20Leaf%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Neem%20Leaf%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 48,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 67,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-186",
    "name": "Neem Massage Comb",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Neem Massage Comb sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Neem Massage Comb"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Neem%20Massage%20Comb/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Neem%20Massage%20Comb/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 55,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 70,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-187",
    "name": "Neem Spatula",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Neem Spatula sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Neem Spatula"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Neem%20Spatula/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Neem%20Spatula/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 62,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 73,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-188",
    "name": "Neem Tongue Cleaner",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Neem Tongue Cleaner sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Neem Tongue Cleaner"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Neem%20Tongue%20Cleaner/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Neem%20Tongue%20Cleaner/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 69,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 36,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-189",
    "name": "Nutmeg",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Nutmeg sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Nutmeg"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Nutmeg/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Nutmeg/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 76,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 39,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-190",
    "name": "Nutmeg Mace (Red Flower)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Nutmeg Mace (Red Flower) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Nutmeg Mace (Red Flower)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Nutmeg%20Mace%20(Red%20Flower)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Nutmeg%20Mace%20(Red%20Flower)/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 83,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 42,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-191",
    "name": "Nutmeg Mace (Yellow Flower)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Nutmeg Mace (Yellow Flower) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Nutmeg Mace (Yellow Flower)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Nutmeg%20Mace%20(Yellow%20Flower)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Nutmeg%20Mace%20(Yellow%20Flower)/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 90,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 45,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-192",
    "name": "Orange Peel Powder",
    "category": "Skin Care",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Orange Peel Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Orange Peel Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Orange%20Peel%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Orange%20Peel%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 97,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 48,
    "tags": [
      "Skin Care",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-193",
    "name": "Oregano",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Oregano sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Oregano"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Oregano/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Oregano/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 104,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 51,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-194",
    "name": "Palm Candy Crystal (Panam Kalkandam)",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Palm Candy Crystal (Panam Kalkandam) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Palm Candy Crystal (Panam Kalkandam)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Palm%20Candy%20Crystal%20(Panam%20Kalkandam)/01.png",
    "gallery": [
      "/images/Dailywell_Products/Palm%20Candy%20Crystal%20(Panam%20Kalkandam)/01.png",
      "/images/Dailywell_Products/Palm%20Candy%20Crystal%20(Panam%20Kalkandam)/02.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 111,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 54,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-195",
    "name": "Palm Jaggery (Karupatti)",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Palm Jaggery (Karupatti) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Palm Jaggery (Karupatti)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Palm%20Jaggery%20(Karupatti)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Palm%20Jaggery%20(Karupatti)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 118,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 57,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-196",
    "name": "Papaya Dried",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Papaya Dried sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Papaya Dried"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Papaya%20Dried/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Papaya%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 125,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 60,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-197",
    "name": "Pathimukham",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Pathimukham sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Pathimukham"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Pathimukham/01.png",
    "gallery": [
      "/images/Dailywell_Products/Pathimukham/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 132,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 63,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-198",
    "name": "Peanut Chikki",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Peanut Chikki sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Peanut Chikki"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Peanut%20Chikki/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Peanut%20Chikki/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 139,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 66,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-199",
    "name": "Peanut Plain Roasted",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Peanut Plain Roasted sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Peanut Plain Roasted"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Peanut%20Plain%20Roasted/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Peanut%20Plain%20Roasted/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 146,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 69,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-200",
    "name": "Peanut Plain Roasted Nut Butter",
    "category": "Nut Butters",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Peanut Plain Roasted Nut Butter sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Peanut Plain Roasted Nut Butter"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Peanut%20Plain%20Roasted%20Nut%20Butter/01.png",
    "gallery": [
      "/images/Dailywell_Products/Peanut%20Plain%20Roasted%20Nut%20Butter/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 153,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 72,
    "tags": [
      "Nut Butters",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-201",
    "name": "Peanut Salted",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Peanut Salted sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Peanut Salted"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Peanut%20Salted/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Peanut%20Salted/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 160,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 35,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-202",
    "name": "Pearl Millet (Bajra)",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Pearl Millet (Bajra) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Pearl Millet (Bajra)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Pearl%20Millet%20(Bajra)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Pearl%20Millet%20(Bajra)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 167,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 38,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-203",
    "name": "Pecan Nuts",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Pecan Nuts sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Pecan Nuts"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Pecan%20Nuts/01.png",
    "gallery": [
      "/images/Dailywell_Products/Pecan%20Nuts/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 174,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 41,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-204",
    "name": "Pepper",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Pepper sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Pepper"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Pepper/01.png",
    "gallery": [
      "/images/Dailywell_Products/Pepper/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 181,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 44,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-205",
    "name": "Pineapple Coin (Dried)",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Pineapple Coin (Dried) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Pineapple Coin (Dried)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Pineapple%20Coin%20(Dried)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Pineapple%20Coin%20(Dried)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 188,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 47,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-206",
    "name": "Pineapple Ring Dried",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Pineapple Ring Dried sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Pineapple Ring Dried"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Pineapple%20Ring%20Dried/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Pineapple%20Ring%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 195,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 50,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-207",
    "name": "Pink Salt Powder",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Pink Salt Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Pink Salt Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Pink%20Salt%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Pink%20Salt%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 22,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 53,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-208",
    "name": "Pista California (AM)",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Pista California (AM) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Pista California (AM)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Pista%20California%20(AM)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Pista%20California%20(AM)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 29,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 56,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-209",
    "name": "Pista Plain w o Shell",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Pista Plain w o Shell sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Pista Plain w o Shell"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Pista%20Plain%20w_o%20Shell/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Pista%20Plain%20w_o%20Shell/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 36,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 59,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-210",
    "name": "Pista Salted & Roasted",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Pista Salted & Roasted sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Pista Salted & Roasted"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Pista%20Salted%20%26%20Roasted/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Pista%20Salted%20%26%20Roasted/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 43,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 62,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-211",
    "name": "Plum Black Dried",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Plum Black Dried sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Plum Black Dried"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Plum%20Black%20Dried/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Plum%20Black%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 50,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 65,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-212",
    "name": "Plum Red Dried",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Plum Red Dried sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Plum Red Dried"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Plum%20Red%20Dried/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Plum%20Red%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 57,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 68,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-213",
    "name": "Pomegranate Honey",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Pomegranate Honey sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Pomegranate Honey"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Pomegranate%20Honey/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Pomegranate%20Honey/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 64,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 71,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-214",
    "name": "Poppy (KhusKhus) White",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Poppy (KhusKhus) White sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Poppy (KhusKhus) White"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Poppy%20(KhusKhus)%20White/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Poppy%20(KhusKhus)%20White/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 71,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 74,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-215",
    "name": "Pot Tamarind (Kudampuli)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Pot Tamarind (Kudampuli) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Pot Tamarind (Kudampuli)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Pot%20Tamarind%20(Kudampuli)/01.png",
    "gallery": [
      "/images/Dailywell_Products/Pot%20Tamarind%20(Kudampuli)/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 78,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 37,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-216",
    "name": "Protein Beans",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Protein Beans sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Protein Beans"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Protein%20Beans/01.png",
    "gallery": [
      "/images/Dailywell_Products/Protein%20Beans/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 85,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 40,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-217",
    "name": "Prunes Dried",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Prunes Dried sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Prunes Dried"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Prunes%20Dried/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Prunes%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 92,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 43,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-218",
    "name": "Psyllium Husk (Isabgol Busi)",
    "category": "Health Foods",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Psyllium Husk (Isabgol Busi) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Psyllium Husk (Isabgol Busi)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Psyllium%20Husk%20(Isabgol%20Busi)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Psyllium%20Husk%20(Isabgol%20Busi)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 99,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 46,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-219",
    "name": "Pumpkin Seeds",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Pumpkin Seeds sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Pumpkin Seeds"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Pumpkin%20Seeds/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Pumpkin%20Seeds/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 106,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 49,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-220",
    "name": "Putana (Parched Gram) Fine",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Putana (Parched Gram) Fine sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Putana (Parched Gram) Fine"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Putana%20(Parched%20Gram)%20Fine/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Putana%20(Parched%20Gram)%20Fine/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 113,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 52,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-221",
    "name": "Puttu Powder Roasted (Red)",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Puttu Powder Roasted (Red) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Puttu Powder Roasted (Red)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Puttu%20Powder%20Roasted%20(Red)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Puttu%20Powder%20Roasted%20(Red)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 120,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 55,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-222",
    "name": "Puttu Powder Roasted (White)",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Puttu Powder Roasted (White) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Puttu Powder Roasted (White)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Puttu%20Powder%20Roasted%20(White)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Puttu%20Powder%20Roasted%20(White)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 127,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 58,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-223",
    "name": "Quinoa",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Quinoa sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Quinoa"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Quinoa/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Quinoa/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 134,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 61,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-224",
    "name": "Quinoa Vermicelli",
    "category": "Noodles",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Quinoa Vermicelli sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Quinoa Vermicelli"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Quinoa%20Vermicelli/01.png",
    "gallery": [
      "/images/Dailywell_Products/Quinoa%20Vermicelli/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 141,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 64,
    "tags": [
      "Noodles",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-225",
    "name": "Raamacham",
    "category": "Health Foods",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Raamacham sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Raamacham"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Raamacham/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Raamacham/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 148,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 67,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-226",
    "name": "Ragi (Finger Millet)",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Ragi (Finger Millet) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Ragi (Finger Millet)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Ragi%20(Finger%20Millet)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Ragi%20(Finger%20Millet)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 155,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 70,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-227",
    "name": "Ragi (Finger Millet) Rava",
    "category": "Rava",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Ragi (Finger Millet) Rava sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Ragi (Finger Millet) Rava"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Ragi%20(Finger%20Millet)%20Rava/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Ragi%20(Finger%20Millet)%20Rava/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 162,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 73,
    "tags": [
      "Rava",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-228",
    "name": "Ragi Flakes",
    "category": "Poha",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Ragi Flakes sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Ragi Flakes"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Ragi%20Flakes/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Ragi%20Flakes/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 169,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 36,
    "tags": [
      "Poha",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-229",
    "name": "Ragi Noodles",
    "category": "Noodles",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Ragi Noodles sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Ragi Noodles"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Ragi%20Noodles/01.png",
    "gallery": [
      "/images/Dailywell_Products/Ragi%20Noodles/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 176,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 39,
    "tags": [
      "Noodles",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-230",
    "name": "Raisin- Afghan Long",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Raisin- Afghan Long sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Raisin- Afghan Long"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Raisin-%20Afghan%20Long/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Raisin-%20Afghan%20Long/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 183,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 42,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-231",
    "name": "Raisins Long Yellow",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Raisins Long Yellow sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Raisins Long Yellow"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Raisins%20Long%20Yellow/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Raisins%20Long%20Yellow/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 190,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 45,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-232",
    "name": "Raisins Seed Black",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Raisins Seed Black sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Raisins Seed Black"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Raisins%20Seed%20Black/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Raisins%20Seed%20Black/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 197,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 48,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-233",
    "name": "Rajapuri Turmeric",
    "category": "Spices",
    "concern": [
      "Gut Health",
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Rajapuri Turmeric sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Rajapuri Turmeric"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Rajapuri%20Turmeric/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Rajapuri%20Turmeric/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 24,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 51,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-234",
    "name": "Rajwadi Wheat",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Rajwadi Wheat sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Rajwadi Wheat"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Rajwadi%20Wheat/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Rajwadi%20Wheat/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 31,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 54,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-235",
    "name": "Rakthachandana",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Rakthachandana sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Rakthachandana"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Rakthachandana/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Rakthachandana/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 38,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 57,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-236",
    "name": "Raw Honey",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Raw Honey sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Raw Honey"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Raw%20Honey/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Raw%20Honey/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 45,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 60,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-237",
    "name": "Rectangle Loofah",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Rectangle Loofah sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Rectangle Loofah"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Rectangle%20Loofah/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Rectangle%20Loofah/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 52,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 63,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-238",
    "name": "Red Chilli- Byadagi Kaddi",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Red Chilli- Byadagi Kaddi sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Red Chilli- Byadagi Kaddi"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Red%20Chilli-%20Byadagi%20Kaddi/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Red%20Chilli-%20Byadagi%20Kaddi/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 59,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 66,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-239",
    "name": "Red Chilli- Dabbi",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Red Chilli- Dabbi sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Red Chilli- Dabbi"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Red%20Chilli-%20Dabbi/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Red%20Chilli-%20Dabbi/01.jpg",
      "/images/Dailywell_Products/Red%20Chilli-%20Dabbi/02.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 66,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 69,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-240",
    "name": "Red Chilli- Guntur Long",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Red Chilli- Guntur Long sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Red Chilli- Guntur Long"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Red%20Chilli-%20Guntur%20Long/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Red%20Chilli-%20Guntur%20Long/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 73,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 72,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-241",
    "name": "Red Chilli- Guntur Small",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Red Chilli- Guntur Small sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Red Chilli- Guntur Small"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Red%20Chilli-%20Guntur%20Small/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Red%20Chilli-%20Guntur%20Small/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 80,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 35,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-242",
    "name": "Red Chilli- Salem Ball",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Red Chilli- Salem Ball sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Red Chilli- Salem Ball"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Red%20Chilli-%20Salem%20Ball/01.png",
    "gallery": [
      "/images/Dailywell_Products/Red%20Chilli-%20Salem%20Ball/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 87,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 38,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-243",
    "name": "Red Matta Rice (Parboiled & Semi-Polished)",
    "category": "Wood Pressed Oils",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Red Matta Rice (Parboiled & Semi-Polished) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Red Matta Rice (Parboiled & Semi-Polished)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Red%20Matta%20Rice%20(Parboiled%20%26%20Semi-Polished)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Red%20Matta%20Rice%20(Parboiled%20%26%20Semi-Polished)/01.jpg"
    ],
    "variants": [
      {
        "weight": "500ml",
        "price": 240,
        "originalPrice": 280,
        "inStock": true
      },
      {
        "weight": "1 Litre",
        "price": 450,
        "originalPrice": 520,
        "inStock": true
      },
      {
        "weight": "5 Litres",
        "price": 2100,
        "originalPrice": 2450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 94,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 41,
    "tags": [
      "Wood Pressed Oils",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-244",
    "name": "Red Rajma Kidney Beans",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Red Rajma Kidney Beans sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Red Rajma Kidney Beans"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Red%20Rajma_%20Kidney%20Beans/01.png",
    "gallery": [
      "/images/Dailywell_Products/Red%20Rajma_%20Kidney%20Beans/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 101,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 44,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-245",
    "name": "Red Rice Flakes (Avalakki)",
    "category": "Poha",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Red Rice Flakes (Avalakki) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Red Rice Flakes (Avalakki)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Red%20Rice%20Flakes%20(Avalakki)/01.png",
    "gallery": [
      "/images/Dailywell_Products/Red%20Rice%20Flakes%20(Avalakki)/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 108,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 47,
    "tags": [
      "Poha",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-246",
    "name": "Reetha Powder",
    "category": "Hair Care",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Reetha Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Reetha Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Reetha%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Reetha%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 115,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 50,
    "tags": [
      "Hair Care",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-247",
    "name": "Roasted Chana",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Roasted Chana sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Roasted Chana"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Roasted%20Chana/01.png",
    "gallery": [
      "/images/Dailywell_Products/Roasted%20Chana/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 122,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 53,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-248",
    "name": "Robusta Coffee Beans",
    "category": "Coffee",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Robusta Coffee Beans sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Robusta Coffee Beans"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Robusta%20Coffee%20Beans/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Robusta%20Coffee%20Beans/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 129,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 56,
    "tags": [
      "Coffee",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-249",
    "name": "Robusta Coffee Beans (organic)",
    "category": "Coffee",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Robusta Coffee Beans (organic) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Robusta Coffee Beans (organic)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Robusta%20Coffee%20Beans%20(organic)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Robusta%20Coffee%20Beans%20(organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 136,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 59,
    "tags": [
      "Coffee",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-250",
    "name": "Robusta Coffee Powder (Idukki)",
    "category": "Coffee",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Robusta Coffee Powder (Idukki) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Robusta Coffee Powder (Idukki)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Robusta%20Coffee%20Powder%20(Idukki)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Robusta%20Coffee%20Powder%20(Idukki)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 143,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 62,
    "tags": [
      "Coffee",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-251",
    "name": "Rose Mary Dried",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Rose Mary Dried sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Rose Mary Dried"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Rose%20Mary%20Dried/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Rose%20Mary%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 150,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 65,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-252",
    "name": "Rose Petals",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Rose Petals sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Rose Petals"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Rose%20Petals/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Rose%20Petals/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 157,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 68,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-253",
    "name": "Royal Prime Kimia Dates",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Royal Prime Kimia Dates sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Royal Prime Kimia Dates"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Royal%20Prime%20Kimia%20Dates/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Royal%20Prime%20Kimia%20Dates/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 164,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 71,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-254",
    "name": "Royal Rajamudi Rice Premium",
    "category": "Rice",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Royal Rajamudi Rice Premium sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Royal Rajamudi Rice Premium"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Royal%20Rajamudi%20Rice%20Premium/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Royal%20Rajamudi%20Rice%20Premium/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 171,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 74,
    "tags": [
      "Rice",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-255",
    "name": "Safawi Dates",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Safawi Dates sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Safawi Dates"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Safawi%20Dates/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Safawi%20Dates/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 178,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 37,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-256",
    "name": "Sago (Tapioca Pearls)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Sago (Tapioca Pearls) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sago (Tapioca Pearls)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sago%20(Tapioca%20Pearls)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Sago%20(Tapioca%20Pearls)/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 185,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 40,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-257",
    "name": "Sambar Masala",
    "category": "Masalas",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Sambar Masala sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sambar Masala"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sambar%20Masala/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Sambar%20Masala/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 192,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 43,
    "tags": [
      "Masalas",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-258",
    "name": "Sandalwood Powder",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Sandalwood Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sandalwood Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sandalwood%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Sandalwood%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 199,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 46,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-259",
    "name": "Sesame Oil (Brown Gingelly Seed)",
    "category": "Wood Pressed Oils",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Sesame Oil (Brown Gingelly Seed) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sesame Oil (Brown Gingelly Seed)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sesame%20Oil%20(Brown%20Gingelly%20Seed)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Sesame%20Oil%20(Brown%20Gingelly%20Seed)/01.jpg",
      "/images/Dailywell_Products/Sesame%20Oil%20(Brown%20Gingelly%20Seed)/02.jpg",
      "/images/Dailywell_Products/Sesame%20Oil%20(Brown%20Gingelly%20Seed)/03.jpg",
      "/images/Dailywell_Products/Sesame%20Oil%20(Brown%20Gingelly%20Seed)/04.jpg"
    ],
    "variants": [
      {
        "weight": "500ml",
        "price": 240,
        "originalPrice": 280,
        "inStock": true
      },
      {
        "weight": "1 Litre",
        "price": 450,
        "originalPrice": 520,
        "inStock": true
      },
      {
        "weight": "5 Litres",
        "price": 2100,
        "originalPrice": 2450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 26,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 49,
    "tags": [
      "Wood Pressed Oils",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-260",
    "name": "Sesame Oil (White Gingelly Seed)",
    "category": "Wood Pressed Oils",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Sesame Oil (White Gingelly Seed) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sesame Oil (White Gingelly Seed)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sesame%20Oil%20(White%20Gingelly%20Seed)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Sesame%20Oil%20(White%20Gingelly%20Seed)/01.jpg",
      "/images/Dailywell_Products/Sesame%20Oil%20(White%20Gingelly%20Seed)/02.jpg",
      "/images/Dailywell_Products/Sesame%20Oil%20(White%20Gingelly%20Seed)/03.jpg",
      "/images/Dailywell_Products/Sesame%20Oil%20(White%20Gingelly%20Seed)/04.jpg"
    ],
    "variants": [
      {
        "weight": "500ml",
        "price": 240,
        "originalPrice": 280,
        "inStock": true
      },
      {
        "weight": "1 Litre",
        "price": 450,
        "originalPrice": 520,
        "inStock": true
      },
      {
        "weight": "5 Litres",
        "price": 2100,
        "originalPrice": 2450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 33,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 52,
    "tags": [
      "Wood Pressed Oils",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-261",
    "name": "Sesame Seeds (Til) Black",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Sesame Seeds (Til) Black sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sesame Seeds (Til) Black"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sesame%20Seeds%20(Til)%20Black/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Sesame%20Seeds%20(Til)%20Black/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 40,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 55,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-262",
    "name": "Sesame Seeds (Til) White",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Sesame Seeds (Til) White sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sesame Seeds (Til) White"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sesame%20Seeds%20(Til)%20White/01.png",
    "gallery": [
      "/images/Dailywell_Products/Sesame%20Seeds%20(Til)%20White/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 47,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 58,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-263",
    "name": "Shah Jeera (Caraway)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Shah Jeera (Caraway) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Shah Jeera (Caraway)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Shah%20Jeera%20(Caraway)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Shah%20Jeera%20(Caraway)/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 54,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 61,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-264",
    "name": "Sharbati Wheat (Rajnigandha)",
    "category": "Flour",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Sharbati Wheat (Rajnigandha) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sharbati Wheat (Rajnigandha)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sharbati%20Wheat%20(Rajnigandha)/01.png",
    "gallery": [
      "/images/Dailywell_Products/Sharbati%20Wheat%20(Rajnigandha)/01.png",
      "/images/Dailywell_Products/Sharbati%20Wheat%20(Rajnigandha)/02.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 61,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 64,
    "tags": [
      "Flour",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-265",
    "name": "Shikha Kai Powder",
    "category": "Hair Care",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Shikha Kai Powder sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Shikha Kai Powder"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Shikha%20Kai%20Powder/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Shikha%20Kai%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 68,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 67,
    "tags": [
      "Hair Care",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-266",
    "name": "Sona Masoori Rice",
    "category": "Rice",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Sona Masoori Rice sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sona Masoori Rice"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sona%20Masoori%20Rice/01.png",
    "gallery": [
      "/images/Dailywell_Products/Sona%20Masoori%20Rice/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 75,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 70,
    "tags": [
      "Rice",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-267",
    "name": "Soup Spoon",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Soup Spoon sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Soup Spoon"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Soup%20Spoon/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Soup%20Spoon/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 82,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 73,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-268",
    "name": "Soya Bean",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Soya Bean sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Soya Bean"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Soya%20Bean/01.png",
    "gallery": [
      "/images/Dailywell_Products/Soya%20Bean/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 89,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 36,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-269",
    "name": "Spoon",
    "category": "Eco Friendly",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Spoon sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Spoon"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Spoon/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Spoon/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 Unit",
        "price": 120,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "Pack of 2",
        "price": 220,
        "originalPrice": 300,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 96,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 39,
    "tags": [
      "Eco Friendly",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-270",
    "name": "Sprouted Ragi",
    "category": "Millets",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Sprouted Ragi sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sprouted Ragi"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sprouted%20Ragi/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Sprouted%20Ragi/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 103,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 42,
    "tags": [
      "Millets",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-271",
    "name": "Star Anise",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Star Anise sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Star Anise"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Star%20Anise/01.png",
    "gallery": [
      "/images/Dailywell_Products/Star%20Anise/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 110,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 45,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-272",
    "name": "Stingless Bee Honey (Cheruthen)",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Stingless Bee Honey (Cheruthen) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Stingless Bee Honey (Cheruthen)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Stingless%20Bee%20Honey%20(Cheruthen)/01.png",
    "gallery": [
      "/images/Dailywell_Products/Stingless%20Bee%20Honey%20(Cheruthen)/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 117,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 48,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-273",
    "name": "Stone Flower",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Stone Flower sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Stone Flower"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Stone%20Flower/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Stone%20Flower/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 124,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 51,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-274",
    "name": "Sugar Free Muesli",
    "category": "Natural Sweeteners",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Sugar Free Muesli sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sugar Free Muesli"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sugar%20Free%20Muesli/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Sugar%20Free%20Muesli/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 131,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 54,
    "tags": [
      "Natural Sweeteners",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-275",
    "name": "Sukkari Wet Dates",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Sukkari Wet Dates sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sukkari Wet Dates"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sukkari%20Wet%20Dates/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Sukkari%20Wet%20Dates/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 138,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 57,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-276",
    "name": "Sunflower Oil",
    "category": "Wood Pressed Oils",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Sunflower Oil sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sunflower Oil"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sunflower%20Oil/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Sunflower%20Oil/01.jpg",
      "/images/Dailywell_Products/Sunflower%20Oil/02.jpg",
      "/images/Dailywell_Products/Sunflower%20Oil/03.jpg",
      "/images/Dailywell_Products/Sunflower%20Oil/04.jpg"
    ],
    "variants": [
      {
        "weight": "500ml",
        "price": 240,
        "originalPrice": 280,
        "inStock": true
      },
      {
        "weight": "1 Litre",
        "price": 450,
        "originalPrice": 520,
        "inStock": true
      },
      {
        "weight": "5 Litres",
        "price": 2100,
        "originalPrice": 2450,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 145,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 60,
    "tags": [
      "Wood Pressed Oils",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-277",
    "name": "Sunflower Seeds",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Sunflower Seeds sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Sunflower Seeds"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Sunflower%20Seeds/01.png",
    "gallery": [
      "/images/Dailywell_Products/Sunflower%20Seeds/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 152,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 63,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-278",
    "name": "Tarbuj Seeds",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Tarbuj Seeds sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Tarbuj Seeds"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Tarbuj%20Seeds/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Tarbuj%20Seeds/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 159,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 66,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-279",
    "name": "Tea - Cardamom Idukki (Organic)",
    "category": "Tea",
    "concern": [
      "Heart Health",
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Tea - Cardamom Idukki (Organic) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Tea - Cardamom Idukki (Organic)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Tea%20-%20Cardamom%20Idukki%20(Organic)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Tea%20-%20Cardamom%20Idukki%20(Organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 166,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 69,
    "tags": [
      "Tea",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-280",
    "name": "Tea - Ginger Idukki (Organic)",
    "category": "Tea",
    "concern": [
      "Gut Health",
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Tea - Ginger Idukki (Organic) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Tea - Ginger Idukki (Organic)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Tea%20-%20Ginger%20Idukki%20(Organic)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Tea%20-%20Ginger%20Idukki%20(Organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 173,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 72,
    "tags": [
      "Tea",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-281",
    "name": "Tea - Green Leaf Idukki",
    "category": "Tea",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Tea - Green Leaf Idukki sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Tea - Green Leaf Idukki"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Tea%20-%20Green%20Leaf%20Idukki/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Tea%20-%20Green%20Leaf%20Idukki/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 180,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 35,
    "tags": [
      "Tea",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-282",
    "name": "Tea - Masala Idukki (Organic)",
    "category": "Tea",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Tea - Masala Idukki (Organic) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Tea - Masala Idukki (Organic)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Tea%20-%20Masala%20Idukki%20(Organic)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Tea%20-%20Masala%20Idukki%20(Organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 187,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 38,
    "tags": [
      "Tea",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-283",
    "name": "Tea - Orthodox Black Idukki (Organic)",
    "category": "Tea",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Tea - Orthodox Black Idukki (Organic) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Tea - Orthodox Black Idukki (Organic)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Tea%20-%20Orthodox%20Black%20Idukki%20(Organic)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Tea%20-%20Orthodox%20Black%20Idukki%20(Organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 194,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 41,
    "tags": [
      "Tea",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-284",
    "name": "Tea - Orthodox Black Leaf Idukki (Organic)",
    "category": "Tea",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Tea - Orthodox Black Leaf Idukki (Organic) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Tea - Orthodox Black Leaf Idukki (Organic)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Tea%20-%20Orthodox%20Black%20Leaf%20Idukki%20(Organic)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Tea%20-%20Orthodox%20Black%20Leaf%20Idukki%20(Organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 21,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 44,
    "tags": [
      "Tea",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-285",
    "name": "Tenseed Chikki",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Tenseed Chikki sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Tenseed Chikki"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Tenseed%20Chikki/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Tenseed%20Chikki/01.jpg",
      "/images/Dailywell_Products/Tenseed%20Chikki/02.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 28,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 47,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-286",
    "name": "Thippili (Long Pepper)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Thippili (Long Pepper) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Thippili (Long Pepper)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Thippili%20(Long%20Pepper)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Thippili%20(Long%20Pepper)/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 35,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 50,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-287",
    "name": "Thooyamalli Rice",
    "category": "Rice",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Thooyamalli Rice sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Thooyamalli Rice"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Thooyamalli%20Rice/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Thooyamalli%20Rice/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 42,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 53,
    "tags": [
      "Rice",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-288",
    "name": "Toor Dal Fine (Yellow)",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Toor Dal Fine (Yellow) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Toor Dal Fine (Yellow)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Toor%20Dal%20Fine%20(Yellow)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Toor%20Dal%20Fine%20(Yellow)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 49,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 56,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-289",
    "name": "Travancore Tamarind Vaalan Puli",
    "category": "Rava",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Travancore Tamarind Vaalan Puli sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Travancore Tamarind Vaalan Puli"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Travancore%20Tamarind_%20Vaalan%20Puli/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Travancore%20Tamarind_%20Vaalan%20Puli/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 56,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 59,
    "tags": [
      "Rava",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-290",
    "name": "Triphala",
    "category": "Health Foods",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Triphala sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Triphala"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Triphala/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Triphala/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 63,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 62,
    "tags": [
      "Health Foods",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-291",
    "name": "Urad Dal Black Split",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Urad Dal Black Split sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Urad Dal Black Split"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Urad%20Dal%20Black%20Split/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Urad%20Dal%20Black%20Split/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 70,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 65,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-292",
    "name": "Urad Gola Fine-Ball",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Urad Gola Fine-Ball sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Urad Gola Fine-Ball"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Urad%20Gola%20Fine-Ball/01.png",
    "gallery": [
      "/images/Dailywell_Products/Urad%20Gola%20Fine-Ball/01.png"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 77,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 68,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-293",
    "name": "Urad White Chilka (Split)",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Urad White Chilka (Split) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Urad White Chilka (Split)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Urad%20White%20Chilka%20(Split)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Urad%20White%20Chilka%20(Split)/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 84,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 71,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-294",
    "name": "Venga Dried",
    "category": "Spices",
    "concern": [
      "Gut Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Venga Dried sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Venga Dried"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Venga%20Dried/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Venga%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 95,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 220,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 500,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 91,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 74,
    "tags": [
      "Spices",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-295",
    "name": "Virgin coconut Oil",
    "category": "Wood Pressed Oils",
    "concern": [
      "Heart Health",
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Virgin coconut Oil sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Virgin coconut Oil"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Virgin%20coconut%20Oil/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Virgin%20coconut%20Oil/01.jpg",
      "/images/Dailywell_Products/Virgin%20coconut%20Oil/02.jpg",
      "/images/Dailywell_Products/Virgin%20coconut%20Oil/03.jpg",
      "/images/Dailywell_Products/Virgin%20coconut%20Oil/04.jpg",
      "/images/Dailywell_Products/Virgin%20coconut%20Oil/05.jpg"
    ],
    "variants": [
      {
        "weight": "500ml",
        "price": 240,
        "originalPrice": 280,
        "inStock": true
      },
      {
        "weight": "1 Litre",
        "price": 450,
        "originalPrice": 520,
        "inStock": true
      },
      {
        "weight": "5 Litres",
        "price": 2100,
        "originalPrice": 2450,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 98,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 37,
    "tags": [
      "Wood Pressed Oils",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-296",
    "name": "Walnut Chile",
    "category": "Dry Fruits",
    "concern": [
      "Heart Health",
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Walnut Chile sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Walnut Chile"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Walnut%20Chile/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Walnut%20Chile/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 105,
    "isBestSeller": true,
    "isRecommended": false,
    "stock": 40,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-297",
    "name": "Walnut Nut Butter",
    "category": "Nut Butters",
    "concern": [
      "Heart Health"
    ],
    "description": "100% Pure, authentic, and naturally processed Walnut Nut Butter sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Walnut Nut Butter"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Walnut%20Nut%20Butter/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Walnut%20Nut%20Butter/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 112,
    "isBestSeller": false,
    "isRecommended": true,
    "stock": 43,
    "tags": [
      "Nut Butters",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-298",
    "name": "Walnut Super White (Kashmiri)",
    "category": "Dry Fruits",
    "concern": [
      "Heart Health",
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Walnut Super White (Kashmiri) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Walnut Super White (Kashmiri)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Walnut%20Super%20White%20(Kashmiri)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Walnut%20Super%20White%20(Kashmiri)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 119,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 46,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-299",
    "name": "Watermelon Seeds",
    "category": "Seeds",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Watermelon Seeds sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Watermelon Seeds"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Watermelon%20Seeds/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Watermelon%20Seeds/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 126,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 49,
    "tags": [
      "Seeds",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-300",
    "name": "Wheat Flakes",
    "category": "Poha",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed Wheat Flakes sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Wheat Flakes"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Wheat%20Flakes/01.png",
    "gallery": [
      "/images/Dailywell_Products/Wheat%20Flakes/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.9,
    "reviewCount": 133,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 52,
    "tags": [
      "Poha",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-301",
    "name": "White Rajma (Pinto Beans)",
    "category": "Pulses",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed White Rajma (Pinto Beans) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural White Rajma (Pinto Beans)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/White%20Rajma%20(Pinto%20Beans)/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/White%20Rajma%20(Pinto%20Beans)/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.6,
    "reviewCount": 140,
    "isBestSeller": true,
    "isRecommended": true,
    "stock": 55,
    "tags": [
      "Pulses",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-302",
    "name": "White Rice Flakes (Avalakki)",
    "category": "Poha",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed White Rice Flakes (Avalakki) sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural White Rice Flakes (Avalakki)"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/White%20Rice%20Flakes%20(Avalakki)/01.png",
    "gallery": [
      "/images/Dailywell_Products/White%20Rice%20Flakes%20(Avalakki)/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.7,
    "reviewCount": 147,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 58,
    "tags": [
      "Poha",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-303",
    "name": "White Sesame Chikki",
    "category": "Quick Bites",
    "concern": [
      "Weight Loss"
    ],
    "description": "100% Pure, authentic, and naturally processed White Sesame Chikki sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural White Sesame Chikki"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/White%20Sesame%20Chikki/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/White%20Sesame%20Chikki/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 110,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 200,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 380,
        "originalPrice": 460,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 154,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 61,
    "tags": [
      "Quick Bites",
      "Organic",
      "Natural",
      "DailyWell"
    ]
  },
  {
    "id": "prod-304",
    "name": "Yellow Ball Raisins",
    "category": "Dry Fruits",
    "concern": [
      "Skin & Hair"
    ],
    "description": "100% Pure, authentic, and naturally processed Yellow Ball Raisins sourced carefully for daily health, wellness, and rich taste.",
    "ingredients": [
      "100% Pure Natural Yellow Ball Raisins"
    ],
    "nutritionInfo": {
      "Energy (per 100g)": "360 kcal",
      "Proteins": "10g",
      "Carbohydrates": "55g",
      "Dietary Fiber": "8g"
    },
    "benefits": [
      "Rich in vital micronutrients and antioxidants",
      "Unadulterated natural quality with zero preservatives",
      "Supports everyday immunity, digestion, and overall vitality"
    ],
    "image": "/images/Dailywell_Products/Yellow%20Ball%20Raisins/01.jpg",
    "gallery": [
      "/images/Dailywell_Products/Yellow%20Ball%20Raisins/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 340,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1450,
        "inStock": true
      }
    ],
    "rating": 4.8,
    "reviewCount": 161,
    "isBestSeller": false,
    "isRecommended": false,
    "stock": 64,
    "tags": [
      "Dry Fruits",
      "Organic",
      "Natural",
      "DailyWell"
    ]
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
    "image": "/images/Dailywell_Products/Pepper/01.png",
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
    "image": "/images/Dailywell_Products/Cumin%20(Jeerakam)/01.png",
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
    "image": "/images/Dailywell_Products/Coriander/01.jpg",
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
    "image": "/images/Dailywell_Products/Cardamom%20Bold/01.jpg",
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
    "image": "/images/Dailywell_Products/Cassia%20Cinnamon/01.jpg",
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
    "image": "/images/Dailywell_Products/Red%20Chilli-%20Guntur%20Long/01.jpg",
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
    "image": "/images/Dailywell_Products/Cloves/01.png",
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
    "image": "/images/Dailywell_Products/Star%20Anise/01.png",
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
    "image": "/images/Dailywell_Products/Fennel%20(Perumjeerakam)/01.jpg",
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
    "image": "/images/Dailywell_Products/Fenugreek%20(Uluva)/01.jpg",
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
    "image": "/images/Dailywell_Products/Mustard%20Seeds%20Black/01.jpg",
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
    "image": "/images/Dailywell_Products/Black%20Cardamom%20(Black%20Elaichi)/01.jpg",
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
    "image": "/images/Dailywell_Products/Nutmeg/01.jpg",
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
    "image": "/images/Dailywell_Products/Dried%20Curry%20Leaves/01.jpg",
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
    "image": "/images/Dailywell_Products/Stone%20Flower/01.jpg",
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
    "image": "/images/Dailywell_Products/Ajwain%20(Ayamodakam)/01.jpg",
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
    "image": "/images/Dailywell_Products/Dried%20Ginger/01.jpg",
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
    "image": "/images/Dailywell_Products/Bay%20Leaves%20_%20Tej%20Patta/01.jpg",
    "healthBenefits": "Helps regulate blood sugar and lowers bad cholesterol.",
    "flavorProfile": "Herbal, pine-clove subtle aroma",
    "defaultRoast": "Roasted"
  }
];

export const COUPONS: Coupon[] = [
  {
    "code": "ORGANIC10",
    "discountPercent": 10,
    "minOrderAmount": 499,
    "description": "Get 10% OFF on all organic orders above ₹499"
  },
  {
    "code": "WELLNESS20",
    "discountPercent": 20,
    "minOrderAmount": 999,
    "description": "Get 20% OFF on health foods & dry fruits orders above ₹999"
  },
  {
    "code": "CUSTOMMASALA",
    "discountPercent": 15,
    "minOrderAmount": 299,
    "description": "Get 15% OFF on your custom created masala blend"
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
