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
    "image": "/images/dhannya_Products_final/Coconut%20Oil/Dhaanya%2001.png",
    "productCount": 9
  },
  {
    "name": "Flour",
    "slug": "flour",
    "iconName": "Wheat",
    "description": "Stone-ground, unbleached organic flours & ancient grain blends.",
    "image": "/images/dhannya_Products_final/Dailywell%20Multi%20Millet%20Atta/01.jpg",
    "productCount": 16
  },
  {
    "name": "Dry Fruits",
    "slug": "dry-fruits",
    "iconName": "Nut",
    "description": "Premium handpicked almonds, walnuts, cashews, raisins, and dates.",
    "image": "/images/dhannya_Products_final/Almonds%20Jumbo/01.jpg",
    "productCount": 45
  },
  {
    "name": "Seeds",
    "slug": "seeds",
    "iconName": "Sprout",
    "description": "Nutrient-dense raw and roasted chia, flax, pumpkin, and sunflower seeds.",
    "image": "/images/dhannya_Products_final/Chia%20Seeds/01.png",
    "productCount": 14
  },
  {
    "name": "Millets",
    "slug": "millets",
    "iconName": "Grain",
    "description": "Gluten-free super grains including Ragi, Foxtail, Bajra, and Jowar.",
    "image": "/images/dhannya_Products_final/Foxtail%20Millet%20(Navane)/01.jpg",
    "productCount": 15
  },
  {
    "name": "Spices",
    "slug": "spices",
    "iconName": "Flame",
    "description": "Aromatic unadulterated whole & ground spices sourced straight from farms.",
    "image": "/images/dhannya_Products_final/Cardamom%20Bold/01.jpg",
    "productCount": 49
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
    "productCount": 20
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
    "productCount": 5
  },
  {
    "name": "Hair Care",
    "slug": "hair-care",
    "iconName": "Sparkle",
    "description": "Traditional Ayurvedic herbal hair oil with Bhringraj, Amla & Hibiscus.",
    "image": "/images/dhannya_Products_final/Bhringraj%20Powder/01.jpg",
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
    "image": "/images/dhannya_Products_final/Ajwa%20Dates/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Ajwa%20Dates/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1780,
        "originalPrice": 1780,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 445,
        "originalPrice": 445,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 890,
        "originalPrice": 890,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Ajwain%20(Ayamodakam)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Ajwain%20(Ayamodakam)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 560,
        "originalPrice": 560,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 140,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 280,
        "originalPrice": 280,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Almond%20Nut%20Butter/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Almond%20Nut%20Butter/01.jpg"
    ],
    "variants": [
      {
        "weight": "250g / Honey",
        "price": 517,
        "originalPrice": 517,
        "inStock": true
      },
      {
        "weight": "250g / Jaggery",
        "price": 507,
        "originalPrice": 507,
        "inStock": true
      },
      {
        "weight": "250g / Unsweetened",
        "price": 487,
        "originalPrice": 487,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Almonds%20Jumbo/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Almonds%20Jumbo/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1790,
        "originalPrice": 1790,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 447.5,
        "originalPrice": 447.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 895,
        "originalPrice": 895,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Almonds%20USA/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Almonds%20USA/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1650,
        "originalPrice": 1650,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 412.5,
        "originalPrice": 412.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 825,
        "originalPrice": 825,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Alovi%20Seeds%20(Halim%20Seeds)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Alovi%20Seeds%20(Halim%20Seeds)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 550,
        "originalPrice": 550,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 137.5,
        "originalPrice": 137.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 275,
        "originalPrice": 275,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Amaranth%20(Rajgira)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Amaranth%20(Rajgira)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 350,
        "originalPrice": 350,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 87.5,
        "originalPrice": 87.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 175,
        "originalPrice": 175,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Amaranth%20Noodles/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Amaranth%20Noodles/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 650,
        "originalPrice": 650,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 162.5,
        "originalPrice": 162.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 325,
        "originalPrice": 325,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Amla%20Dry%20Candy/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Amla%20Dry%20Candy/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 410,
        "originalPrice": 410,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 102.5,
        "originalPrice": 102.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 205,
        "originalPrice": 205,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Amla%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Amla%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 201,
        "originalPrice": 201,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 2010,
        "originalPrice": 2010,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 502.5,
        "originalPrice": 502.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1005,
        "originalPrice": 1005,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Appam%20Idiyappam%20Podi/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Appam%20Idiyappam%20Podi/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 140,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 35,
        "originalPrice": 35,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 70,
        "originalPrice": 70,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Apricot%20Dried/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Apricot%20Dried/01.jpg"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Apricot%20Soft/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Apricot%20Soft/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1988,
        "originalPrice": 1988,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 497,
        "originalPrice": 497,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 994,
        "originalPrice": 994,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Arabica%20Coffee%20Bean/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Arabica%20Coffee%20Bean/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1800,
        "originalPrice": 1800,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 450,
        "originalPrice": 450,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 900,
        "originalPrice": 900,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Arabica%20Coffee%20Beans%20(organic)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Arabica%20Coffee%20Beans%20(organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 2100,
        "originalPrice": 2100,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 525,
        "originalPrice": 525,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1050,
        "originalPrice": 1050,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Arabica%20Coffee%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Arabica%20Coffee%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1800,
        "originalPrice": 1800,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 450,
        "originalPrice": 450,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 900,
        "originalPrice": 900,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Ashwagandha/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Ashwagandha/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 225,
        "originalPrice": 225,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 2250,
        "originalPrice": 2250,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 562.5,
        "originalPrice": 562.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1125,
        "originalPrice": 1125,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Assam%20Tea/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Assam%20Tea/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 720,
        "originalPrice": 720,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 180,
        "originalPrice": 180,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 360,
        "originalPrice": 360,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Avalose%20Podi/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Avalose%20Podi/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 480,
        "originalPrice": 480,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 120,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 240,
        "originalPrice": 240,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Baby%20Fork/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Baby%20Fork/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 90,
        "originalPrice": 90,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Baby%20Spoon/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Baby%20Spoon/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 90,
        "originalPrice": 90,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Bamboo%20Toothbrush/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Bamboo%20Toothbrush/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 55,
        "originalPrice": 55,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Banana%20Dried%20(Kannan%20Kaya)/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Banana%20Dried%20(Kannan%20Kaya)/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1000,
        "originalPrice": 1000,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 250,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 500,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Barley/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Barley/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 160,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 40,
        "originalPrice": 40,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 80,
        "originalPrice": 80,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Barnyard%20Millet%20(Oodalu)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Barnyard%20Millet%20(Oodalu)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 240,
        "originalPrice": 240,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 60,
        "originalPrice": 60,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 120,
        "originalPrice": 120,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Barnyard%20Millet%20(Oodalu)%20Rava/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Barnyard%20Millet%20(Oodalu)%20Rava/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 350,
        "originalPrice": 350,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 87.5,
        "originalPrice": 87.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 175,
        "originalPrice": 175,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Barnyard%20Millet%20Cookies/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Barnyard%20Millet%20Cookies/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 520,
        "originalPrice": 520,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 130,
        "originalPrice": 130,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 260,
        "originalPrice": 260,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Basil%20Seeds%20(Sabja)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Basil%20Seeds%20(Sabja)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 650,
        "originalPrice": 650,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 162.5,
        "originalPrice": 162.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 325,
        "originalPrice": 325,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Bay%20Leaves%20_%20Tej%20Patta/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Bay%20Leaves%20_%20Tej%20Patta/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 700,
        "originalPrice": 700,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 175,
        "originalPrice": 175,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 350,
        "originalPrice": 350,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Beetroot%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Beetroot%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 145,
        "originalPrice": 145,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1450,
        "originalPrice": 1450,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 362.5,
        "originalPrice": 362.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 725,
        "originalPrice": 725,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Bengal%20Gram%20Dal%20(Besan)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Bengal%20Gram%20Dal%20(Besan)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 160,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 40,
        "originalPrice": 40,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 80,
        "originalPrice": 80,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Bhringraj%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Bhringraj%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100G",
        "price": 99,
        "originalPrice": 99,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 990,
        "originalPrice": 990,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 247.5,
        "originalPrice": 247.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 495,
        "originalPrice": 495,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Black%20Cardamom%20(Black%20Elaichi)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Black%20Cardamom%20(Black%20Elaichi)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 3380,
        "originalPrice": 3380,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 845,
        "originalPrice": 845,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1690,
        "originalPrice": 1690,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Black%20Chana/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Black%20Chana/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 160,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 40,
        "originalPrice": 40,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 80,
        "originalPrice": 80,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Black%20Chickpea%20Powder%20(Kadala%20Podi)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Black%20Chickpea%20Powder%20(Kadala%20Podi)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 360,
        "originalPrice": 360,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 90,
        "originalPrice": 90,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 180,
        "originalPrice": 180,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Black%20Salt/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Black%20Salt/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 100,
        "originalPrice": 100,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 25,
        "originalPrice": 25,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 50,
        "originalPrice": 50,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Black%20Seedless%20Raisins/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Black%20Seedless%20Raisins/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 890,
        "originalPrice": 890,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 222.5,
        "originalPrice": 222.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 445,
        "originalPrice": 445,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Black%20Sesame%20Chikki/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Black%20Sesame%20Chikki/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 680,
        "originalPrice": 680,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 170,
        "originalPrice": 170,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 340,
        "originalPrice": 340,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Brahmi%20Honey/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Brahmi%20Honey/dhaanya%2001.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 435,
        "originalPrice": 435,
        "inStock": true
      },
      {
        "weight": "400g",
        "price": 670,
        "originalPrice": 670,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Brazil%20Nuts/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Brazil%20Nuts/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 4550,
        "originalPrice": 4550,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 1137.5,
        "originalPrice": 1137.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 2275,
        "originalPrice": 2275,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Browntop%20Millet%20(Korale)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Browntop%20Millet%20(Korale)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 300,
        "originalPrice": 300,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 75,
        "originalPrice": 75,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 150,
        "originalPrice": 150,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cardamom%20Bold/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Cardamom%20Bold/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g - Masala",
        "price": 495,
        "originalPrice": 495,
        "inStock": true
      },
      {
        "weight": "150g - Masala",
        "price": 742.5,
        "originalPrice": 742.5,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 4950,
        "originalPrice": 4950,
        "inStock": true
      },
      {
        "weight": "200g - Masala",
        "price": 990,
        "originalPrice": 990,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 1237.5,
        "originalPrice": 1237.5,
        "inStock": true
      },
      {
        "weight": "250g - Masala",
        "price": 1237.5,
        "originalPrice": 1237.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 2475,
        "originalPrice": 2475,
        "inStock": true
      },
      {
        "weight": "50g - Masala",
        "price": 247.5,
        "originalPrice": 247.5,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cardamom%20Bulk/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Cardamom%20Bulk/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 2900,
        "originalPrice": 2900,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 725,
        "originalPrice": 725,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1450,
        "originalPrice": 1450,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cashew%20180/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Cashew%20180/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1750,
        "originalPrice": 1750,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 437.5,
        "originalPrice": 437.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 875,
        "originalPrice": 875,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cashew%20240/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Cashew%20240/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1590,
        "originalPrice": 1590,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 397.5,
        "originalPrice": 397.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 795,
        "originalPrice": 795,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cashew%20Nut%20Butter/Dhaanya.png",
    "gallery": [
      "/images/dhannya_Products_final/Cashew%20Nut%20Butter/Dhaanya.png"
    ],
    "variants": [
      {
        "weight": "250g / Honey",
        "price": 470,
        "originalPrice": 470,
        "inStock": true
      },
      {
        "weight": "250g / Jaggery",
        "price": 460,
        "originalPrice": 460,
        "inStock": true
      },
      {
        "weight": "250g / Unsweetened",
        "price": 440,
        "originalPrice": 440,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cashew%20Peanut%20Chikki/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Cashew%20Peanut%20Chikki/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 720,
        "originalPrice": 720,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 180,
        "originalPrice": 180,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 360,
        "originalPrice": 360,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cashew%20Roasted%20And%20Salted/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Cashew%20Roasted%20And%20Salted/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1690,
        "originalPrice": 1690,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 422.5,
        "originalPrice": 422.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 845,
        "originalPrice": 845,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cashew%20Split/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Cashew%20Split/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1460,
        "originalPrice": 1460,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 365,
        "originalPrice": 365,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 730,
        "originalPrice": 730,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cashew-%20Broken%20PS/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Cashew-%20Broken%20PS/01.jpg"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cashew-%20Chilli%20Garlic%20240/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Cashew-%20Chilli%20Garlic%20240/01.png"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cashew-%20Pepper%20Garlic%20240/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Cashew-%20Pepper%20Garlic%20240/01.png"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cassia%20Cinnamon/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Cassia%20Cinnamon/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 580,
        "originalPrice": 580,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 145,
        "originalPrice": 145,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 290,
        "originalPrice": 290,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Chammanthi%20Podi/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Chammanthi%20Podi/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1200,
        "originalPrice": 1200,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 300,
        "originalPrice": 300,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 600,
        "originalPrice": 600,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Chia%20Seeds/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Chia%20Seeds/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 750,
        "originalPrice": 750,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 187.5,
        "originalPrice": 187.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 375,
        "originalPrice": 375,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Chicken%20Masala/Dhaanya.png",
    "gallery": [
      "/images/dhannya_Products_final/Chicken%20Masala/Dhaanya.png"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Chilli%20Chocolate/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Chilli%20Chocolate/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 230,
        "originalPrice": 230,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Chocolate%20Muesli/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Chocolate%20Muesli/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 750,
        "originalPrice": 750,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 187.5,
        "originalPrice": 187.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 375,
        "originalPrice": 375,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cinnamon%20Roll%20(Churul%20Patta%2C%20Indonesia)/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Cinnamon%20Roll%20(Churul%20Patta%2C%20Indonesia)/01.png"
    ],
    "variants": [
      {
        "weight": "100g - Masala",
        "price": 120,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "150g - Masala",
        "price": 180,
        "originalPrice": 180,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1265,
        "originalPrice": 1265,
        "inStock": true
      },
      {
        "weight": "200g - Masala",
        "price": 240,
        "originalPrice": 240,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 316.25,
        "originalPrice": 316.25,
        "inStock": true
      },
      {
        "weight": "250g - Masala",
        "price": 300,
        "originalPrice": 300,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 632.5,
        "originalPrice": 632.5,
        "inStock": true
      },
      {
        "weight": "50g - Masala",
        "price": 60,
        "originalPrice": 60,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cloth%20Loofah/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Cloth%20Loofah/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 35,
        "originalPrice": 35,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cloves/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Cloves/01.png"
    ],
    "variants": [
      {
        "weight": "100g - Masala",
        "price": 170,
        "originalPrice": 170,
        "inStock": true
      },
      {
        "weight": "150g - Masala",
        "price": 255,
        "originalPrice": 255,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1800,
        "originalPrice": 1800,
        "inStock": true
      },
      {
        "weight": "200g - Masala",
        "price": 340,
        "originalPrice": 340,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 450,
        "originalPrice": 450,
        "inStock": true
      },
      {
        "weight": "250g - Masala",
        "price": 425,
        "originalPrice": 425,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 900,
        "originalPrice": 900,
        "inStock": true
      },
      {
        "weight": "50g - Masala",
        "price": 85,
        "originalPrice": 85,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cocoa%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Cocoa%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 2400,
        "originalPrice": 2400,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 600,
        "originalPrice": 600,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1200,
        "originalPrice": 1200,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cocoa%20Tea/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Cocoa%20Tea/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1350,
        "originalPrice": 1350,
        "inStock": false
      },
      {
        "weight": "250g",
        "price": 337.5,
        "originalPrice": 337.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 675,
        "originalPrice": 675,
        "inStock": false
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Coconut%20Oil/Dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Coconut%20Oil/Dhaanya%2001.png",
      "/images/dhannya_Products_final/Coconut%20Oil/Dhaanya%2002.png",
      "/images/dhannya_Products_final/Coconut%20Oil/Dhaanya%2003.png",
      "/images/dhannya_Products_final/Coconut%20Oil/04.jpg"
    ],
    "variants": [
      {
        "weight": "460g",
        "price": 380,
        "originalPrice": 380,
        "inStock": true
      },
      {
        "weight": "910g",
        "price": 720,
        "originalPrice": 720,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Coconut%20Sugar/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Coconut%20Sugar/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 650,
        "originalPrice": 650,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 162.5,
        "originalPrice": 162.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 325,
        "originalPrice": 325,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Coffee%20Chocolate/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Coffee%20Chocolate/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 235,
        "originalPrice": 235,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Copper%20Tongue%20Cleaner/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Copper%20Tongue%20Cleaner/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 150,
        "originalPrice": 150,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Coriander/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Coriander/01.jpg",
      "/images/dhannya_Products_final/Coriander/02.jpg",
      "/images/dhannya_Products_final/Coriander/03.jpg"
    ],
    "variants": [
      {
        "weight": "100g - Masala",
        "price": 45,
        "originalPrice": 45,
        "inStock": true
      },
      {
        "weight": "150g - Masala",
        "price": 67.5,
        "originalPrice": 67.5,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 450,
        "originalPrice": 450,
        "inStock": true
      },
      {
        "weight": "200g - Masala",
        "price": 90,
        "originalPrice": 90,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 112.5,
        "originalPrice": 112.5,
        "inStock": true
      },
      {
        "weight": "250g - Masala",
        "price": 112.5,
        "originalPrice": 112.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 225,
        "originalPrice": 225,
        "inStock": true
      },
      {
        "weight": "50g - Masala",
        "price": 22.5,
        "originalPrice": 22.5,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Corn_%20Maize/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Corn_%20Maize/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 110,
        "originalPrice": 110,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 27.5,
        "originalPrice": 27.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 55,
        "originalPrice": 55,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cow%20Ghee/Dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Cow%20Ghee/Dhaanya%2001.png",
      "/images/dhannya_Products_final/Cow%20Ghee/Dhaanya%2002.png",
      "/images/dhannya_Products_final/Cow%20Ghee/dhaanya%2003.png",
      "/images/dhannya_Products_final/Cow%20Ghee/dhaanya%2004.png"
    ],
    "variants": [
      {
        "weight": "280g",
        "price": 410,
        "originalPrice": 410,
        "inStock": true
      },
      {
        "weight": "600g",
        "price": 795,
        "originalPrice": 795,
        "inStock": true
      },
      {
        "weight": "900g",
        "price": 1170,
        "originalPrice": 1170,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cucumber%20Seeds/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Cucumber%20Seeds/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1650,
        "originalPrice": 1650,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 412.5,
        "originalPrice": 412.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 825,
        "originalPrice": 825,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Cumin%20(Jeerakam)/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Cumin%20(Jeerakam)/01.png"
    ],
    "variants": [
      {
        "weight": "100g - Masala",
        "price": 69,
        "originalPrice": 69,
        "inStock": true
      },
      {
        "weight": "125g - Masala",
        "price": 86.25,
        "originalPrice": 86.25,
        "inStock": true
      },
      {
        "weight": "150g - Masala",
        "price": 103.5,
        "originalPrice": 103.5,
        "inStock": true
      },
      {
        "weight": "175g - Masala",
        "price": 120.75,
        "originalPrice": 120.75,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 770,
        "originalPrice": 770,
        "inStock": true
      },
      {
        "weight": "200g - Masala",
        "price": 138,
        "originalPrice": 138,
        "inStock": true
      },
      {
        "weight": "225g - Masala",
        "price": 155.25,
        "originalPrice": 155.25,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 192.5,
        "originalPrice": 192.5,
        "inStock": true
      },
      {
        "weight": "250g - Masala",
        "price": 172.5,
        "originalPrice": 172.5,
        "inStock": true
      },
      {
        "weight": "25g - Masala",
        "price": 19.25,
        "originalPrice": 19.25,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 385,
        "originalPrice": 385,
        "inStock": true
      },
      {
        "weight": "50g - Masala",
        "price": 38.5,
        "originalPrice": 38.5,
        "inStock": true
      },
      {
        "weight": "75g - Masala",
        "price": 57.75,
        "originalPrice": 57.75,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Custom%20Masala%20Blend/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Custom%20Masala%20Blend/01.jpg"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dailywell%20Fibre%20Atta/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dailywell%20Fibre%20Atta/01.jpg",
      "/images/dhannya_Products_final/Dailywell%20Fibre%20Atta/02.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 102,
        "originalPrice": 102,
        "inStock": true
      },
      {
        "weight": "3kg",
        "price": 306,
        "originalPrice": 306,
        "inStock": true
      },
      {
        "weight": "5kg",
        "price": 510,
        "originalPrice": 510,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dailywell%20Gluten%20Free%20Atta/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dailywell%20Gluten%20Free%20Atta/01.jpg",
      "/images/dhannya_Products_final/Dailywell%20Gluten%20Free%20Atta/02.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 222,
        "originalPrice": 222,
        "inStock": true
      },
      {
        "weight": "3kg",
        "price": 666,
        "originalPrice": 666,
        "inStock": true
      },
      {
        "weight": "5kg",
        "price": 1110,
        "originalPrice": 1110,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dailywell%20Multi%20Millet%20Atta/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dailywell%20Multi%20Millet%20Atta/01.jpg",
      "/images/dhannya_Products_final/Dailywell%20Multi%20Millet%20Atta/02.jpg"
    ],
    "variants": [
      {
        "weight": "1 kg",
        "price": 109,
        "originalPrice": 109,
        "inStock": true
      },
      {
        "weight": "3 kg",
        "price": 327,
        "originalPrice": 327,
        "inStock": true
      },
      {
        "weight": "5 kg",
        "price": 545,
        "originalPrice": 545,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dailywell%20Nuts%20%26%20Seeds%20Atta/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dailywell%20Nuts%20%26%20Seeds%20Atta/01.jpg",
      "/images/dhannya_Products_final/Dailywell%20Nuts%20%26%20Seeds%20Atta/02.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 283,
        "originalPrice": 283,
        "inStock": true
      },
      {
        "weight": "3kg",
        "price": 849,
        "originalPrice": 849,
        "inStock": true
      },
      {
        "weight": "5kg",
        "price": 1415,
        "originalPrice": 1415,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dailywell%20Protein%20Atta/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dailywell%20Protein%20Atta/01.jpg",
      "/images/dhannya_Products_final/Dailywell%20Protein%20Atta/02.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 127,
        "originalPrice": 127,
        "inStock": true
      },
      {
        "weight": "3kg",
        "price": 381,
        "originalPrice": 381,
        "inStock": true
      },
      {
        "weight": "5kg",
        "price": 635,
        "originalPrice": 635,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dark%20Chocolate%2055%25/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Dark%20Chocolate%2055%25/01.png"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 300,
        "originalPrice": 300,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dark%20Chocolate%2080%25/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Dark%20Chocolate%2080%25/01.png"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 370,
        "originalPrice": 370,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dark%20Milk%20Chocolate/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Dark%20Milk%20Chocolate/01.png"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 250,
        "originalPrice": 250,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dates-%20Dry%20Black%20Fine%20(Oman%20Kaarakka)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dates-%20Dry%20Black%20Fine%20(Oman%20Kaarakka)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 560,
        "originalPrice": 560,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 140,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 280,
        "originalPrice": 280,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dried%20Blueberries/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dried%20Blueberries/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 2400,
        "originalPrice": 2400,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 600,
        "originalPrice": 600,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1200,
        "originalPrice": 1200,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dried%20Cherry/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dried%20Cherry/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1250,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 312.5,
        "originalPrice": 312.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 625,
        "originalPrice": 625,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dried%20Cranberries/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dried%20Cranberries/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1050,
        "originalPrice": 1050,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 262.5,
        "originalPrice": 262.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 525,
        "originalPrice": 525,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dried%20Curry%20Leaves/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dried%20Curry%20Leaves/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 85,
        "originalPrice": 85,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 850,
        "originalPrice": 850,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 212.5,
        "originalPrice": 212.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 425,
        "originalPrice": 425,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dried%20Ginger/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dried%20Ginger/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 820,
        "originalPrice": 820,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 205,
        "originalPrice": 205,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 410,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dried%20Ginger%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dried%20Ginger%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 850,
        "originalPrice": 850,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 212.5,
        "originalPrice": 212.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 425,
        "originalPrice": 425,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dried%20Jackfruit/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Dried%20Jackfruit/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1250,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 312.5,
        "originalPrice": 312.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 625,
        "originalPrice": 625,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dried%20Lemon/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dried%20Lemon/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 500,
        "originalPrice": 500,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 125,
        "originalPrice": 125,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 250,
        "originalPrice": 250,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Dried%20Strawberry/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Dried%20Strawberry/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1340,
        "originalPrice": 1340,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 335,
        "originalPrice": 335,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 670,
        "originalPrice": 670,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Ekanayakam/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Ekanayakam/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1200,
        "originalPrice": 1200,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 300,
        "originalPrice": 300,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 600,
        "originalPrice": 600,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Emmer%20Khapli%20Wheat/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Emmer%20Khapli%20Wheat/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg / Powder",
        "price": 195,
        "originalPrice": 195,
        "inStock": true
      },
      {
        "weight": "1kg / Raw",
        "price": 195,
        "originalPrice": 195,
        "inStock": true
      },
      {
        "weight": "3kg / Powder",
        "price": 585,
        "originalPrice": 585,
        "inStock": true
      },
      {
        "weight": "3kg / Raw",
        "price": 585,
        "originalPrice": 585,
        "inStock": true
      },
      {
        "weight": "5kg / Powder",
        "price": 975,
        "originalPrice": 975,
        "inStock": true
      },
      {
        "weight": "5kg / Raw",
        "price": 975,
        "originalPrice": 975,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Fennel%20(Perumjeerakam)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Fennel%20(Perumjeerakam)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1KG",
        "price": 600,
        "originalPrice": 600,
        "inStock": true
      },
      {
        "weight": "250G",
        "price": 150,
        "originalPrice": 150,
        "inStock": true
      },
      {
        "weight": "500G",
        "price": 300,
        "originalPrice": 300,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Fenugreek%20(Uluva)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Fenugreek%20(Uluva)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 230,
        "originalPrice": 230,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 57.5,
        "originalPrice": 57.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 115,
        "originalPrice": 115,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Fig%20(Big)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Fig%20(Big)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 2800,
        "originalPrice": 2800,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 700,
        "originalPrice": 700,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1400,
        "originalPrice": 1400,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Fig%20(Small)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Fig%20(Small)/01.jpg"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Fish%20Curry%20Masala/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Fish%20Curry%20Masala/dhaanya%2001.png"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Flax%20Seeds/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Flax%20Seeds/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 350,
        "originalPrice": 350,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 87.5,
        "originalPrice": 87.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 175,
        "originalPrice": 175,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Forest%20Honey%20(Kattuthen)/Dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Forest%20Honey%20(Kattuthen)/Dhaanya%2001.png",
      "/images/dhannya_Products_final/Forest%20Honey%20(Kattuthen)/dhaanya%2002.png"
    ],
    "variants": [
      {
        "weight": "1350g",
        "price": 1325,
        "originalPrice": 1325,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 360,
        "originalPrice": 360,
        "inStock": true
      },
      {
        "weight": "400g",
        "price": 560,
        "originalPrice": 560,
        "inStock": true
      },
      {
        "weight": "950g",
        "price": 1240,
        "originalPrice": 1240,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Fork/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Fork/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 190,
        "originalPrice": 190,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Foxtail%20Millet%20(Navane)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Foxtail%20Millet%20(Navane)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 170,
        "originalPrice": 170,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 42.5,
        "originalPrice": 42.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 85,
        "originalPrice": 85,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Foxtail%20Millet%20(Navane)%20Rava/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Foxtail%20Millet%20(Navane)%20Rava/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 250,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 62.5,
        "originalPrice": 62.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 125,
        "originalPrice": 125,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Fruit%20%26%20Nut%20Chocolate/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Fruit%20%26%20Nut%20Chocolate/01.png"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 250,
        "originalPrice": 250,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Fruits%20%26%20Nuts%20Muesli/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Fruits%20%26%20Nuts%20Muesli/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 720,
        "originalPrice": 720,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 180,
        "originalPrice": 180,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 360,
        "originalPrice": 360,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Fruits%20Granola/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Fruits%20Granola/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 750,
        "originalPrice": 750,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 187.5,
        "originalPrice": 187.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 375,
        "originalPrice": 375,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Garam%20Masala/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Garam%20Masala/dhaanya%2001.png"
    ],
    "variants": [
      {
        "weight": "150gm",
        "price": 210,
        "originalPrice": 210,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Garlic%20pickle/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Garlic%20pickle/dhaanya%2001.png"
    ],
    "variants": [
      {
        "weight": "280g",
        "price": 295,
        "originalPrice": 295,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Ginger%20Cube/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Ginger%20Cube/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1040,
        "originalPrice": 1040,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 260,
        "originalPrice": 260,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 520,
        "originalPrice": 520,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Ginger%20Honey/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Ginger%20Honey/dhaanya%2001.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 435,
        "originalPrice": 435,
        "inStock": true
      },
      {
        "weight": "400g",
        "price": 670,
        "originalPrice": 670,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Gooseberry%20Pickle/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Gooseberry%20Pickle/dhaanya%2001.png"
    ],
    "variants": [
      {
        "weight": "280g",
        "price": 260,
        "originalPrice": 260,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Green%20Gram/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Green%20Gram/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 240,
        "originalPrice": 240,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 60,
        "originalPrice": 60,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 120,
        "originalPrice": 120,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Green%20Gram%20Powder%20(Cherupayar%20Podi)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Green%20Gram%20Powder%20(Cherupayar%20Podi)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 460,
        "originalPrice": 460,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 115,
        "originalPrice": 115,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 230,
        "originalPrice": 230,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Green%20Peas/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Green%20Peas/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 160,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 40,
        "originalPrice": 40,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 80,
        "originalPrice": 80,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Groundnut%20Oil/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Groundnut%20Oil/dhaanya%2001.png",
      "/images/dhannya_Products_final/Groundnut%20Oil/dhaanya%2002.png"
    ],
    "variants": [
      {
        "weight": "460gm",
        "price": 255,
        "originalPrice": 255,
        "inStock": true
      },
      {
        "weight": "910 gm",
        "price": 470,
        "originalPrice": 470,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Hazel%20Nuts/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Hazel%20Nuts/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 3700,
        "originalPrice": 3700,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 925,
        "originalPrice": 925,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1850,
        "originalPrice": 1850,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Hazelnut%20Nut%20Butter/dhaanya.png",
    "gallery": [
      "/images/dhannya_Products_final/Hazelnut%20Nut%20Butter/dhaanya.png"
    ],
    "variants": [
      {
        "weight": "250g / Honey",
        "price": 1030,
        "originalPrice": 1030,
        "inStock": true
      },
      {
        "weight": "250g / Jaggery",
        "price": 1020,
        "originalPrice": 1020,
        "inStock": true
      },
      {
        "weight": "250g / Unsweetened",
        "price": 1000,
        "originalPrice": 1000,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Henna%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Henna%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100G",
        "price": 205,
        "originalPrice": 205,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 2050,
        "originalPrice": 2050,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 512.5,
        "originalPrice": 512.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1025,
        "originalPrice": 1025,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Hibiscus%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Hibiscus%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 210,
        "originalPrice": 210,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 2100,
        "originalPrice": 2100,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 525,
        "originalPrice": 525,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1050,
        "originalPrice": 1050,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Hing%20(Asafoetida)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Hing%20(Asafoetida)/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 350,
        "originalPrice": 350,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 3500,
        "originalPrice": 3500,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 875,
        "originalPrice": 875,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1750,
        "originalPrice": 1750,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Honey%20Dipper/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Honey%20Dipper/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 100,
        "originalPrice": 100,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Horse%20Gram%20(Muthira)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Horse%20Gram%20(Muthira)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 180,
        "originalPrice": 180,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 45,
        "originalPrice": 45,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 90,
        "originalPrice": 90,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Idli%20Powder/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Idli%20Powder/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 840,
        "originalPrice": 840,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 210,
        "originalPrice": 210,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 420,
        "originalPrice": 420,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Idly%20Rice%20SR%20Orange/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Idly%20Rice%20SR%20Orange/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 85,
        "originalPrice": 85,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 21.25,
        "originalPrice": 21.25,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 42.5,
        "originalPrice": 42.5,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Incha_%20Acacia%20Wild/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Incha_%20Acacia%20Wild/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 250,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 2500,
        "originalPrice": 2500,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 625,
        "originalPrice": 625,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1250,
        "originalPrice": 1250,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Indigo%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Indigo%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 210,
        "originalPrice": 210,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 2100,
        "originalPrice": 2100,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 525,
        "originalPrice": 525,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1050,
        "originalPrice": 1050,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Iratti%20Madhuram/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Iratti%20Madhuram/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 900,
        "originalPrice": 900,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 225,
        "originalPrice": 225,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 450,
        "originalPrice": 450,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Jackfruit%20Pasta/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Jackfruit%20Pasta/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 520,
        "originalPrice": 520,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 130,
        "originalPrice": 130,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 260,
        "originalPrice": 260,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Jaggery%20Mix%20Dry%20Fruit/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Jaggery%20Mix%20Dry%20Fruit/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1600,
        "originalPrice": 1600,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 400,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 800,
        "originalPrice": 800,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Jowar%20(Sorghum%20Millet)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Jowar%20(Sorghum%20Millet)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 115,
        "originalPrice": 115,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 28.75,
        "originalPrice": 28.75,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 57.5,
        "originalPrice": 57.5,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Jowar%20(Sorghum%20Millet)%20Rava/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Jowar%20(Sorghum%20Millet)%20Rava/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 210,
        "originalPrice": 210,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 52.5,
        "originalPrice": 52.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 105,
        "originalPrice": 105,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Jowar%20Flakes/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Jowar%20Flakes/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 220,
        "originalPrice": 220,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 55,
        "originalPrice": 55,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 110,
        "originalPrice": 110,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Jowar%20Millet%20Pasta/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Jowar%20Millet%20Pasta/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 560,
        "originalPrice": 560,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 140,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 280,
        "originalPrice": 280,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Kabuli%20Chana%20White/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Kabuli%20Chana%20White/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 250,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 62.5,
        "originalPrice": 62.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 125,
        "originalPrice": 125,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Kadukka%20(Haritaki)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Kadukka%20(Haritaki)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 300,
        "originalPrice": 300,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 75,
        "originalPrice": 75,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 150,
        "originalPrice": 150,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Karingali%20(Black%20Cutch)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Karingali%20(Black%20Cutch)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 630,
        "originalPrice": 630,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 157.5,
        "originalPrice": 157.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 315,
        "originalPrice": 315,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Kasthuri%20Haldi%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Kasthuri%20Haldi%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 150,
        "originalPrice": 150,
        "inStock": true
      },
      {
        "weight": "1KG",
        "price": 1500,
        "originalPrice": 1500,
        "inStock": true
      },
      {
        "weight": "250G",
        "price": 375,
        "originalPrice": 375,
        "inStock": true
      },
      {
        "weight": "500G",
        "price": 750,
        "originalPrice": 750,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Kiwi%20Green%20Dried/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Kiwi%20Green%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 890,
        "originalPrice": 890,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 222.5,
        "originalPrice": 222.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 445,
        "originalPrice": 445,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Kodo%20Millet%20(Arka)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Kodo%20Millet%20(Arka)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1 kg",
        "price": 170,
        "originalPrice": 170,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 42.5,
        "originalPrice": 42.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 85,
        "originalPrice": 85,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Kodo%20Millet%20(Arka)%20Rava/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Kodo%20Millet%20(Arka)%20Rava/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 270,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 67.5,
        "originalPrice": 67.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 135,
        "originalPrice": 135,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Kodo%20Millet%20Cookies/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Kodo%20Millet%20Cookies/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 560,
        "originalPrice": 560,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 140,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 280,
        "originalPrice": 280,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Lapsi%20Daliya%20(Broken%20Wheat)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Lapsi%20Daliya%20(Broken%20Wheat)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 120,
        "originalPrice": 120,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 30,
        "originalPrice": 30,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 60,
        "originalPrice": 60,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Lemon%20pickle/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Lemon%20pickle/dhaanya%2001.png"
    ],
    "variants": [
      {
        "weight": "280g",
        "price": 280,
        "originalPrice": 280,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Little%20Millet%20(Samai)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Little%20Millet%20(Samai)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 210,
        "originalPrice": 210,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 52.5,
        "originalPrice": 52.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 105,
        "originalPrice": 105,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Little%20Millet%20(Samai)%20Rava/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Little%20Millet%20(Samai)%20Rava/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 300,
        "originalPrice": 300,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 75,
        "originalPrice": 75,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 150,
        "originalPrice": 150,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Little%20Millet%20Cookies/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Little%20Millet%20Cookies/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 560,
        "originalPrice": 560,
        "inStock": true
      },
      {
        "weight": "250gm",
        "price": 140,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "500gm",
        "price": 325,
        "originalPrice": 325,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Lobia%20(Red%20Cowpeas)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Lobia%20(Red%20Cowpeas)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 190,
        "originalPrice": 190,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 47.5,
        "originalPrice": 47.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 95,
        "originalPrice": 95,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Lokwan%20Gund%20Wheat/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Lokwan%20Gund%20Wheat/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg / Powder",
        "price": 75,
        "originalPrice": 75,
        "inStock": true
      },
      {
        "weight": "1kg / Raw",
        "price": 75,
        "originalPrice": 75,
        "inStock": true
      },
      {
        "weight": "3kg / Powder",
        "price": 225,
        "originalPrice": 225,
        "inStock": true
      },
      {
        "weight": "3kg / Raw",
        "price": 225,
        "originalPrice": 225,
        "inStock": true
      },
      {
        "weight": "5kg / Powder",
        "price": 375,
        "originalPrice": 375,
        "inStock": true
      },
      {
        "weight": "5kg / Raw",
        "price": 375,
        "originalPrice": 375,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Macadamia%20Nuts/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Macadamia%20Nuts/01.jpg"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Makhana%20(Lotus%20Seeds)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Makhana%20(Lotus%20Seeds)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1980,
        "originalPrice": 1980,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 495,
        "originalPrice": 495,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 990,
        "originalPrice": 990,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Mango%20Dried/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Mango%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1200,
        "originalPrice": 1200,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 300,
        "originalPrice": 300,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 600,
        "originalPrice": 600,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Manjishta%20Root%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Manjishta%20Root%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 195,
        "originalPrice": 195,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1950,
        "originalPrice": 1950,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 487.5,
        "originalPrice": 487.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 975,
        "originalPrice": 975,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Marathi%20Moggu/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Marathi%20Moggu/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1200,
        "originalPrice": 1200,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 300,
        "originalPrice": 300,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 600,
        "originalPrice": 600,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Marathi%20Moggu%20Long%20(Kapok%20Buds)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Marathi%20Moggu%20Long%20(Kapok%20Buds)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1200,
        "originalPrice": 1200,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 300,
        "originalPrice": 300,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 600,
        "originalPrice": 600,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Marayoor%20Jaggery%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Marayoor%20Jaggery%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 280,
        "originalPrice": 280,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 70,
        "originalPrice": 70,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 140,
        "originalPrice": 140,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Marayoor%20Jaggery%20Whole/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Marayoor%20Jaggery%20Whole/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 200,
        "originalPrice": 200,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 50,
        "originalPrice": 50,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 100,
        "originalPrice": 100,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Masala%20Grinding%20Charge/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Masala%20Grinding%20Charge/01.jpg"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Masala%20Roasting%20Charge/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Masala%20Roasting%20Charge/01.jpg"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Masoor%20Dal%20(Split)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Masoor%20Dal%20(Split)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 150,
        "originalPrice": 150,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 37.5,
        "originalPrice": 37.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 75,
        "originalPrice": 75,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Meat%20Masala/dhaanya.png",
    "gallery": [
      "/images/dhannya_Products_final/Meat%20Masala/dhaanya.png"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Medjool%20Jumbo%20Dates/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Medjool%20Jumbo%20Dates/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 2200,
        "originalPrice": 2200,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 550,
        "originalPrice": 550,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1100,
        "originalPrice": 1100,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Methi%20Leaves%20Dried/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Methi%20Leaves%20Dried/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 490,
        "originalPrice": 490,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 122.5,
        "originalPrice": 122.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 245,
        "originalPrice": 245,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Mexican%20Bites/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Mexican%20Bites/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1100,
        "originalPrice": 1100,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 275,
        "originalPrice": 275,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 550,
        "originalPrice": 550,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Milky%20Bar/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Milky%20Bar/01.jpg",
      "/images/dhannya_Products_final/Milky%20Bar/02.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 250,
        "originalPrice": 250,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Mixed%20DryFruit%20%26%20Seeds%20Roasted/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Mixed%20DryFruit%20%26%20Seeds%20Roasted/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1840,
        "originalPrice": 1840,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 460,
        "originalPrice": 460,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 920,
        "originalPrice": 920,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Mixed%20Vegetables%20(Air%20Fried)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Mixed%20Vegetables%20(Air%20Fried)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1960,
        "originalPrice": 1960,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 490,
        "originalPrice": 490,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 980,
        "originalPrice": 980,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Moong%20Dal/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Moong%20Dal/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 210,
        "originalPrice": 210,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 52.5,
        "originalPrice": 52.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 105,
        "originalPrice": 105,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Moringa%20Noodles/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Moringa%20Noodles/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 580,
        "originalPrice": 580,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 145,
        "originalPrice": 145,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 290,
        "originalPrice": 290,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Moringa%20Pasta/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Moringa%20Pasta/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 540,
        "originalPrice": 540,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 135,
        "originalPrice": 135,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 270,
        "originalPrice": 270,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Moringa%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Moringa%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 205,
        "originalPrice": 205,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 2050,
        "originalPrice": 2050,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 512.5,
        "originalPrice": 512.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1025,
        "originalPrice": 1025,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Mulethi%20Root%20Powder_%20Irattimadhuram/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Mulethi%20Root%20Powder_%20Irattimadhuram/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 224,
        "originalPrice": 224,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 2240,
        "originalPrice": 2240,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 560,
        "originalPrice": 560,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1120,
        "originalPrice": 1120,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Multani%20Mitti/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Multani%20Mitti/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 101,
        "originalPrice": 101,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1010,
        "originalPrice": 1010,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 252.5,
        "originalPrice": 252.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 505,
        "originalPrice": 505,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Multi%20Millet%20Cookies/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Multi%20Millet%20Cookies/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 580,
        "originalPrice": 580,
        "inStock": true
      },
      {
        "weight": "250gm",
        "price": 145,
        "originalPrice": 145,
        "inStock": true
      },
      {
        "weight": "500gm",
        "price": 290,
        "originalPrice": 290,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Multi%20Millet%20Vermiceli/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Multi%20Millet%20Vermiceli/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 410,
        "originalPrice": 410,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 102.5,
        "originalPrice": 102.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 205,
        "originalPrice": 205,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Multigrain%20Chikki/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Multigrain%20Chikki/01.jpg",
      "/images/dhannya_Products_final/Multigrain%20Chikki/02.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 750,
        "originalPrice": 750,
        "inStock": true
      },
      {
        "weight": "250gm",
        "price": 187.5,
        "originalPrice": 187.5,
        "inStock": true
      },
      {
        "weight": "500gm",
        "price": 375,
        "originalPrice": 375,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Munakka%20Raisins/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Munakka%20Raisins/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 870,
        "originalPrice": 870,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 217.5,
        "originalPrice": 217.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 435,
        "originalPrice": 435,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Mustard%20Oil%20(Black%20Seed)/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Mustard%20Oil%20(Black%20Seed)/dhaanya%2001.png",
      "/images/dhannya_Products_final/Mustard%20Oil%20(Black%20Seed)/dhaanya%2002.png",
      "/images/dhannya_Products_final/Mustard%20Oil%20(Black%20Seed)/dhaanya%2003.png",
      "/images/dhannya_Products_final/Mustard%20Oil%20(Black%20Seed)/04.jpg"
    ],
    "variants": [
      {
        "weight": "460 g",
        "price": 335,
        "originalPrice": 335,
        "inStock": true
      },
      {
        "weight": "910 g",
        "price": 630,
        "originalPrice": 630,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Mustard%20Seeds%20Black/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Mustard%20Seeds%20Black/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 220,
        "originalPrice": 220,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 55,
        "originalPrice": 55,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 110,
        "originalPrice": 110,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Nannari%20Root/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Nannari%20Root/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 700,
        "originalPrice": 700,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 175,
        "originalPrice": 175,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 350,
        "originalPrice": 350,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Navara%20Rice/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Navara%20Rice/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 146,
        "originalPrice": 146,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 36.5,
        "originalPrice": 36.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 73,
        "originalPrice": 73,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Neem%20Comb/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Neem%20Comb/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 110,
        "originalPrice": 110,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Neem%20Ladle/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Neem%20Ladle/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 125,
        "originalPrice": 125,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Neem%20Leaf%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Neem%20Leaf%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 145,
        "originalPrice": 145,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1450,
        "originalPrice": 1450,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 362.5,
        "originalPrice": 362.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 725,
        "originalPrice": 725,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Neem%20Massage%20Comb/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Neem%20Massage%20Comb/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 350,
        "originalPrice": 350,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Neem%20Spatula/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Neem%20Spatula/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 90,
        "originalPrice": 90,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Neem%20Tongue%20Cleaner/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Neem%20Tongue%20Cleaner/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 90,
        "originalPrice": 90,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Nutmeg/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Nutmeg/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1300,
        "originalPrice": 1300,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 325,
        "originalPrice": 325,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 650,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Nutmeg%20Mace%20(Red%20Flower)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Nutmeg%20Mace%20(Red%20Flower)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 4000,
        "originalPrice": 4000,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 1000,
        "originalPrice": 1000,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 2000,
        "originalPrice": 2000,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Nutmeg%20Mace%20(Yellow%20Flower)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Nutmeg%20Mace%20(Yellow%20Flower)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 3700,
        "originalPrice": 3700,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 925,
        "originalPrice": 925,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1850,
        "originalPrice": 1850,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Orange%20Peel%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Orange%20Peel%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 199,
        "originalPrice": 199,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1990,
        "originalPrice": 1990,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 497.5,
        "originalPrice": 497.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 995,
        "originalPrice": 995,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Oregano/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Oregano/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 700,
        "originalPrice": 700,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 175,
        "originalPrice": 175,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 350,
        "originalPrice": 350,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Palm%20Candy%20Crystal%20(Panam%20Kalkandam)/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Palm%20Candy%20Crystal%20(Panam%20Kalkandam)/01.png",
      "/images/dhannya_Products_final/Palm%20Candy%20Crystal%20(Panam%20Kalkandam)/02.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1050,
        "originalPrice": 1050,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 262.5,
        "originalPrice": 262.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 525,
        "originalPrice": 525,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Palm%20Jaggery%20(Karupatti)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Palm%20Jaggery%20(Karupatti)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 330,
        "originalPrice": 330,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 107.5,
        "originalPrice": 107.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 165,
        "originalPrice": 165,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Papaya%20Dried/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Papaya%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 890,
        "originalPrice": 890,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 222.5,
        "originalPrice": 222.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 445,
        "originalPrice": 445,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Pathimukham/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Pathimukham/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 810,
        "originalPrice": 810,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 202.5,
        "originalPrice": 202.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 405,
        "originalPrice": 405,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Peanut%20Chikki/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Peanut%20Chikki/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 590,
        "originalPrice": 590,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 147.5,
        "originalPrice": 147.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 295,
        "originalPrice": 295,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Peanut%20Plain%20Roasted/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Peanut%20Plain%20Roasted/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 460,
        "originalPrice": 460,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 115,
        "originalPrice": 115,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 230,
        "originalPrice": 230,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Peanut%20Plain%20Roasted%20Nut%20Butter/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Peanut%20Plain%20Roasted%20Nut%20Butter/01.png"
    ],
    "variants": [
      {
        "weight": "250g / Honey",
        "price": 220,
        "originalPrice": 220,
        "inStock": true
      },
      {
        "weight": "250g / Jaggery",
        "price": 210,
        "originalPrice": 210,
        "inStock": true
      },
      {
        "weight": "250g / Unsweetened",
        "price": 190,
        "originalPrice": 190,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Peanut%20Salted/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Peanut%20Salted/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 520,
        "originalPrice": 520,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 130,
        "originalPrice": 130,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 260,
        "originalPrice": 260,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Pearl%20Millet%20(Bajra)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Pearl%20Millet%20(Bajra)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 95,
        "originalPrice": 95,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 23.75,
        "originalPrice": 23.75,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 47.5,
        "originalPrice": 47.5,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Pecan%20Nuts/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Pecan%20Nuts/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 2700,
        "originalPrice": 2700,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 675,
        "originalPrice": 675,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1350,
        "originalPrice": 1350,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Pepper/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Pepper/01.png"
    ],
    "variants": [
      {
        "weight": "100g - Masala",
        "price": 140,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "125g - Masala",
        "price": 175,
        "originalPrice": 175,
        "inStock": true
      },
      {
        "weight": "150g - Masala",
        "price": 210,
        "originalPrice": 210,
        "inStock": true
      },
      {
        "weight": "175g - Masala",
        "price": 245,
        "originalPrice": 245,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1570,
        "originalPrice": 1570,
        "inStock": true
      },
      {
        "weight": "200g - Masala",
        "price": 280,
        "originalPrice": 280,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 392.5,
        "originalPrice": 392.5,
        "inStock": true
      },
      {
        "weight": "25g - Masala",
        "price": 35,
        "originalPrice": 35,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 785,
        "originalPrice": 785,
        "inStock": true
      },
      {
        "weight": "50g - Masala",
        "price": 70,
        "originalPrice": 70,
        "inStock": true
      },
      {
        "weight": "75g - Masala",
        "price": 105,
        "originalPrice": 105,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Pineapple%20Coin%20(Dried)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Pineapple%20Coin%20(Dried)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1150,
        "originalPrice": 1150,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 287.5,
        "originalPrice": 287.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 575,
        "originalPrice": 575,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Pineapple%20Ring%20Dried/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Pineapple%20Ring%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1250,
        "originalPrice": 1250,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 312.5,
        "originalPrice": 312.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 625,
        "originalPrice": 625,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Pink%20Salt%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Pink%20Salt%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 150,
        "originalPrice": 150,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 37.5,
        "originalPrice": 37.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 75,
        "originalPrice": 75,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Pista%20California%20(AM)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Pista%20California%20(AM)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 2300,
        "originalPrice": 2300,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 575,
        "originalPrice": 575,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1150,
        "originalPrice": 1150,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Pista%20Plain%20w_o%20Shell/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Pista%20Plain%20w_o%20Shell/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 3980,
        "originalPrice": 3980,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 995,
        "originalPrice": 995,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1990,
        "originalPrice": 1990,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Pista%20Salted%20%26%20Roasted/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Pista%20Salted%20%26%20Roasted/01.jpg"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Plum%20Black%20Dried/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Plum%20Black%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 900,
        "originalPrice": 900,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 225,
        "originalPrice": 225,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 450,
        "originalPrice": 450,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Plum%20Red%20Dried/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Plum%20Red%20Dried/01.jpg"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Pomegranate%20Honey/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Pomegranate%20Honey/01.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 435,
        "originalPrice": 435,
        "inStock": true
      },
      {
        "weight": "400g",
        "price": 670,
        "originalPrice": 670,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Poppy%20(KhusKhus)%20White/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Poppy%20(KhusKhus)%20White/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 3350,
        "originalPrice": 3350,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 837.5,
        "originalPrice": 837.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1675,
        "originalPrice": 1675,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Pot%20Tamarind%20(Kudampuli)/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Pot%20Tamarind%20(Kudampuli)/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 530,
        "originalPrice": 530,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 132.5,
        "originalPrice": 132.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 265,
        "originalPrice": 265,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Protein%20Beans/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Protein%20Beans/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1300,
        "originalPrice": 1300,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 325,
        "originalPrice": 325,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 650,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Prunes%20Dried/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Prunes%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1290,
        "originalPrice": 1290,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 322.5,
        "originalPrice": 322.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 645,
        "originalPrice": 645,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Psyllium%20Husk%20(Isabgol%20Busi)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Psyllium%20Husk%20(Isabgol%20Busi)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 2000,
        "originalPrice": 2000,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 500,
        "originalPrice": 500,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1000,
        "originalPrice": 1000,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Pumpkin%20Seeds/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Pumpkin%20Seeds/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 980,
        "originalPrice": 980,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 245,
        "originalPrice": 245,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 490,
        "originalPrice": 490,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Putana%20(Parched%20Gram)%20Fine/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Putana%20(Parched%20Gram)%20Fine/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 180,
        "originalPrice": 180,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 45,
        "originalPrice": 45,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 90,
        "originalPrice": 90,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Puttu%20Powder%20Roasted%20(Red)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Puttu%20Powder%20Roasted%20(Red)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 130,
        "originalPrice": 130,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 32.5,
        "originalPrice": 32.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 65,
        "originalPrice": 65,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Puttu%20Powder%20Roasted%20(White)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Puttu%20Powder%20Roasted%20(White)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 130,
        "originalPrice": 130,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 32.5,
        "originalPrice": 32.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 65,
        "originalPrice": 65,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Quinoa/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Quinoa/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 190,
        "originalPrice": 190,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 47.5,
        "originalPrice": 47.5,
        "inStock": false
      },
      {
        "weight": "500g",
        "price": 95,
        "originalPrice": 95,
        "inStock": false
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Quinoa%20Vermicelli/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Quinoa%20Vermicelli/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 410,
        "originalPrice": 410,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 102.5,
        "originalPrice": 102.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 205,
        "originalPrice": 205,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Raamacham/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Raamacham/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 180,
        "originalPrice": 180,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1800,
        "originalPrice": 1800,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 450,
        "originalPrice": 450,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 900,
        "originalPrice": 900,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Ragi%20(Finger%20Millet)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Ragi%20(Finger%20Millet)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 95,
        "originalPrice": 95,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 23.75,
        "originalPrice": 23.75,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 47.5,
        "originalPrice": 47.5,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Ragi%20(Finger%20Millet)%20Rava/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Ragi%20(Finger%20Millet)%20Rava/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 200,
        "originalPrice": 200,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 50,
        "originalPrice": 50,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 100,
        "originalPrice": 100,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Ragi%20Flakes/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Ragi%20Flakes/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 230,
        "originalPrice": 230,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 57.5,
        "originalPrice": 57.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 115,
        "originalPrice": 115,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Ragi%20Noodles/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Ragi%20Noodles/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 620,
        "originalPrice": 620,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 155,
        "originalPrice": 155,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 310,
        "originalPrice": 310,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Raisin-%20Afghan%20Long/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Raisin-%20Afghan%20Long/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1280,
        "originalPrice": 1280,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 320,
        "originalPrice": 320,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 640,
        "originalPrice": 640,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Raisins%20Long%20Yellow/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Raisins%20Long%20Yellow/01.jpg"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Raisins%20Seed%20Black/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Raisins%20Seed%20Black/01.jpg"
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Rajapuri%20Turmeric/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Rajapuri%20Turmeric/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g - Masala",
        "price": 59,
        "originalPrice": 59,
        "inStock": true
      },
      {
        "weight": "150g - Masala",
        "price": 88.5,
        "originalPrice": 88.5,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 590,
        "originalPrice": 590,
        "inStock": true
      },
      {
        "weight": "200g - Masala",
        "price": 118,
        "originalPrice": 118,
        "inStock": true
      },
      {
        "weight": "20g - Masala",
        "price": 11.8,
        "originalPrice": 11.8,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 147.5,
        "originalPrice": 147.5,
        "inStock": true
      },
      {
        "weight": "40g - Masala",
        "price": 23.6,
        "originalPrice": 23.6,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 295,
        "originalPrice": 295,
        "inStock": true
      },
      {
        "weight": "60g - Masala",
        "price": 35.4,
        "originalPrice": 35.4,
        "inStock": true
      },
      {
        "weight": "80g - Masala",
        "price": 47.2,
        "originalPrice": 47.2,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Rajwadi%20Wheat/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Rajwadi%20Wheat/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg / Powder",
        "price": 90,
        "originalPrice": 90,
        "inStock": true
      },
      {
        "weight": "1kg / Raw",
        "price": 90,
        "originalPrice": 90,
        "inStock": true
      },
      {
        "weight": "3kg / Powder",
        "price": 270,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "3kg / Raw",
        "price": 270,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "5kg / Powder",
        "price": 450,
        "originalPrice": 450,
        "inStock": true
      },
      {
        "weight": "5kg / Raw",
        "price": 450,
        "originalPrice": 450,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Rakthachandana/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Rakthachandana/01.jpg"
    ],
    "variants": [
      {
        "weight": "100G",
        "price": 400,
        "originalPrice": 400,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 4000,
        "originalPrice": 4000,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 1000,
        "originalPrice": 1000,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 2000,
        "originalPrice": 2000,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Raw%20Honey/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Raw%20Honey/01.png"
    ],
    "variants": [
      {
        "weight": "1350g",
        "price": 930,
        "originalPrice": 930,
        "inStock": true
      },
      {
        "weight": "400g",
        "price": 310,
        "originalPrice": 310,
        "inStock": true
      },
      {
        "weight": "950g",
        "price": 680,
        "originalPrice": 680,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Rectangle%20Loofah/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Rectangle%20Loofah/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 45,
        "originalPrice": 45,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Red%20Chilli-%20Byadagi%20Kaddi/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Red%20Chilli-%20Byadagi%20Kaddi/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1050,
        "originalPrice": 1050,
        "inStock": true
      },
      {
        "weight": "25og",
        "price": 262.5,
        "originalPrice": 262.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 525,
        "originalPrice": 525,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Red%20Chilli-%20Dabbi/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Red%20Chilli-%20Dabbi/01.jpg",
      "/images/dhannya_Products_final/Red%20Chilli-%20Dabbi/02.jpg"
    ],
    "variants": [
      {
        "weight": "100g - Masala",
        "price": 148,
        "originalPrice": 148,
        "inStock": true
      },
      {
        "weight": "150g - Masala",
        "price": 222,
        "originalPrice": 222,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1480,
        "originalPrice": 1480,
        "inStock": true
      },
      {
        "weight": "200g - Masala",
        "price": 296,
        "originalPrice": 296,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 370,
        "originalPrice": 370,
        "inStock": true
      },
      {
        "weight": "250g - Masala",
        "price": 370,
        "originalPrice": 370,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 740,
        "originalPrice": 740,
        "inStock": true
      },
      {
        "weight": "50g - Masala",
        "price": 74,
        "originalPrice": 74,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Red%20Chilli-%20Guntur%20Long/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Red%20Chilli-%20Guntur%20Long/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g - Masala",
        "price": 53,
        "originalPrice": 53,
        "inStock": true
      },
      {
        "weight": "150g - Masala",
        "price": 79.5,
        "originalPrice": 79.5,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 530,
        "originalPrice": 530,
        "inStock": true
      },
      {
        "weight": "200g - Masala",
        "price": 106,
        "originalPrice": 106,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 132.5,
        "originalPrice": 132.5,
        "inStock": true
      },
      {
        "weight": "250g - Masala",
        "price": 132.5,
        "originalPrice": 132.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 265,
        "originalPrice": 265,
        "inStock": true
      },
      {
        "weight": "50g - Masala",
        "price": 26.5,
        "originalPrice": 26.5,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Red%20Chilli-%20Guntur%20Small/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Red%20Chilli-%20Guntur%20Small/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 650,
        "originalPrice": 650,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 162.5,
        "originalPrice": 162.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 325,
        "originalPrice": 325,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Red%20Chilli-%20Salem%20Ball/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Red%20Chilli-%20Salem%20Ball/01.png"
    ],
    "variants": [
      {
        "weight": "100g - Masala",
        "price": 82,
        "originalPrice": 82,
        "inStock": true
      },
      {
        "weight": "150g - Masala",
        "price": 123,
        "originalPrice": 123,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 820,
        "originalPrice": 820,
        "inStock": true
      },
      {
        "weight": "200g - Masala",
        "price": 164,
        "originalPrice": 164,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 205,
        "originalPrice": 205,
        "inStock": true
      },
      {
        "weight": "250g - Masala",
        "price": 205,
        "originalPrice": 205,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 410,
        "originalPrice": 410,
        "inStock": true
      },
      {
        "weight": "50g - Masala",
        "price": 41,
        "originalPrice": 41,
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
      "Dhaanya"
    ]
  },
  {
    "id": "prod-243",
    "name": "Red Matta Rice (Parboiled & Semi-Polished)",
    "category": "Rice",
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
    "image": "/images/dhannya_Products_final/Red%20Matta%20Rice%20(Parboiled%20%26%20Semi-Polished)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Red%20Matta%20Rice%20(Parboiled%20%26%20Semi-Polished)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 99,
        "originalPrice": 99,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 24.75,
        "originalPrice": 24.75,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 49.5,
        "originalPrice": 49.5,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Red%20Rajma_%20Kidney%20Beans/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Red%20Rajma_%20Kidney%20Beans/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 260,
        "originalPrice": 260,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 65,
        "originalPrice": 65,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 130,
        "originalPrice": 130,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Red%20Rice%20Flakes%20(Avalakki)/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Red%20Rice%20Flakes%20(Avalakki)/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 190,
        "originalPrice": 190,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 47.5,
        "originalPrice": 47.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 95,
        "originalPrice": 95,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Reetha%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Reetha%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 205,
        "originalPrice": 205,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 2050,
        "originalPrice": 2050,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 512.5,
        "originalPrice": 512.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1025,
        "originalPrice": 1025,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Roasted%20Chana/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Roasted%20Chana/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 350,
        "originalPrice": 350,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 87.5,
        "originalPrice": 87.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 175,
        "originalPrice": 175,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Robusta%20Coffee%20Beans/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Robusta%20Coffee%20Beans/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1500,
        "originalPrice": 1500,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 375,
        "originalPrice": 375,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 750,
        "originalPrice": 750,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Robusta%20Coffee%20Beans%20(organic)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Robusta%20Coffee%20Beans%20(organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1900,
        "originalPrice": 1900,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 475,
        "originalPrice": 475,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 950,
        "originalPrice": 950,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Robusta%20Coffee%20Powder%20(Idukki)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Robusta%20Coffee%20Powder%20(Idukki)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1350,
        "originalPrice": 1350,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 337.5,
        "originalPrice": 337.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 675,
        "originalPrice": 675,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Rose%20Mary%20Dried/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Rose%20Mary%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 850,
        "originalPrice": 850,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 212.5,
        "originalPrice": 212.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 425,
        "originalPrice": 425,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Rose%20Petals/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Rose%20Petals/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1180,
        "originalPrice": 1180,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 295,
        "originalPrice": 295,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 590,
        "originalPrice": 590,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Royal%20Prime%20Kimia%20Dates/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Royal%20Prime%20Kimia%20Dates/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 600,
        "originalPrice": 600,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 150,
        "originalPrice": 150,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 300,
        "originalPrice": 300,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Royal%20Rajamudi%20Rice%20Premium/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Royal%20Rajamudi%20Rice%20Premium/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 139,
        "originalPrice": 139,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 34.75,
        "originalPrice": 34.75,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 69.5,
        "originalPrice": 69.5,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Safawi%20Dates/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Safawi%20Dates/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1180,
        "originalPrice": 1180,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 295,
        "originalPrice": 295,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 590,
        "originalPrice": 590,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sago%20(Tapioca%20Pearls)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Sago%20(Tapioca%20Pearls)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 130,
        "originalPrice": 130,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 32.5,
        "originalPrice": 32.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 65,
        "originalPrice": 65,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sambar%20Masala/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Sambar%20Masala/01.jpg"
    ],
    "variants": [
      {
        "weight": "150gm",
        "price": 165,
        "originalPrice": 165,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sandalwood%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Sandalwood%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100G",
        "price": 260,
        "originalPrice": 260,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 2600,
        "originalPrice": 2600,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 650,
        "originalPrice": 650,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1300,
        "originalPrice": 1300,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sesame%20Oil%20(Brown%20Gingelly%20Seed)/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Sesame%20Oil%20(Brown%20Gingelly%20Seed)/dhaanya%2001.png",
      "/images/dhannya_Products_final/Sesame%20Oil%20(Brown%20Gingelly%20Seed)/dhaanya%2002.png",
      "/images/dhannya_Products_final/Sesame%20Oil%20(Brown%20Gingelly%20Seed)/dhaanya%2003.png",
      "/images/dhannya_Products_final/Sesame%20Oil%20(Brown%20Gingelly%20Seed)/04.jpg"
    ],
    "variants": [
      {
        "weight": "460g",
        "price": 360,
        "originalPrice": 360,
        "inStock": true
      },
      {
        "weight": "910g",
        "price": 680,
        "originalPrice": 680,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sesame%20Oil%20(White%20Gingelly%20Seed)/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Sesame%20Oil%20(White%20Gingelly%20Seed)/dhaanya%2001.png",
      "/images/dhannya_Products_final/Sesame%20Oil%20(White%20Gingelly%20Seed)/dhaanya%2002.png",
      "/images/dhannya_Products_final/Sesame%20Oil%20(White%20Gingelly%20Seed)/dhaanya%2003.png",
      "/images/dhannya_Products_final/Sesame%20Oil%20(White%20Gingelly%20Seed)/04.jpg"
    ],
    "variants": [
      {
        "weight": "460g",
        "price": 370,
        "originalPrice": 370,
        "inStock": true
      },
      {
        "weight": "910g",
        "price": 700,
        "originalPrice": 700,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sesame%20Seeds%20(Til)%20Black/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Sesame%20Seeds%20(Til)%20Black/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 552,
        "originalPrice": 552,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 138,
        "originalPrice": 138,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 276,
        "originalPrice": 276,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sesame%20Seeds%20(Til)%20White/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Sesame%20Seeds%20(Til)%20White/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 420,
        "originalPrice": 420,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 105,
        "originalPrice": 105,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 210,
        "originalPrice": 210,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Shah%20Jeera%20(Caraway)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Shah%20Jeera%20(Caraway)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 750,
        "originalPrice": 750,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 187.5,
        "originalPrice": 187.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 375,
        "originalPrice": 375,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sharbati%20Wheat%20(Rajnigandha)/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Sharbati%20Wheat%20(Rajnigandha)/01.png",
      "/images/dhannya_Products_final/Sharbati%20Wheat%20(Rajnigandha)/02.jpg"
    ],
    "variants": [
      {
        "weight": "1kg / Powder",
        "price": 95,
        "originalPrice": 95,
        "inStock": true
      },
      {
        "weight": "1kg / Raw",
        "price": 95,
        "originalPrice": 95,
        "inStock": true
      },
      {
        "weight": "3kg / Powder",
        "price": 285,
        "originalPrice": 285,
        "inStock": true
      },
      {
        "weight": "3kg / Raw",
        "price": 285,
        "originalPrice": 285,
        "inStock": true
      },
      {
        "weight": "5kg / Powder",
        "price": 475,
        "originalPrice": 475,
        "inStock": true
      },
      {
        "weight": "5kg / Raw",
        "price": 475,
        "originalPrice": 475,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Shikha%20Kai%20Powder/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Shikha%20Kai%20Powder/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 150,
        "originalPrice": 150,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1500,
        "originalPrice": 1500,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 375,
        "originalPrice": 375,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 750,
        "originalPrice": 750,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sona%20Masoori%20Rice/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Sona%20Masoori%20Rice/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 86,
        "originalPrice": 86,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 21.5,
        "originalPrice": 21.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 43,
        "originalPrice": 43,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Soup%20Spoon/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Soup%20Spoon/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 190,
        "originalPrice": 190,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Soya%20Bean/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Soya%20Bean/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 200,
        "originalPrice": 200,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 50,
        "originalPrice": 50,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 100,
        "originalPrice": 100,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Spoon/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Spoon/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 165,
        "originalPrice": 165,
        "inStock": true
      },
      {
        "weight": "Default Title",
        "price": 110,
        "originalPrice": 110,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sprouted%20Ragi/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Sprouted%20Ragi/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 250,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 62.5,
        "originalPrice": 62.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 125,
        "originalPrice": 125,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Star%20Anise/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Star%20Anise/01.png"
    ],
    "variants": [
      {
        "weight": "100g - Masala",
        "price": 135,
        "originalPrice": 135,
        "inStock": true
      },
      {
        "weight": "150g - Masala",
        "price": 202.5,
        "originalPrice": 202.5,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1450,
        "originalPrice": 1450,
        "inStock": true
      },
      {
        "weight": "200g - Masala",
        "price": 270,
        "originalPrice": 270,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 362.5,
        "originalPrice": 362.5,
        "inStock": true
      },
      {
        "weight": "250g - Masala",
        "price": 337.5,
        "originalPrice": 337.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 725,
        "originalPrice": 725,
        "inStock": true
      },
      {
        "weight": "50g - Masala",
        "price": 67.5,
        "originalPrice": 67.5,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Stingless%20Bee%20Honey%20(Cheruthen)/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Stingless%20Bee%20Honey%20(Cheruthen)/dhaanya%2001.png"
    ],
    "variants": [
      {
        "weight": "250g",
        "price": 890,
        "originalPrice": 890,
        "inStock": true
      },
      {
        "weight": "400g",
        "price": 1410,
        "originalPrice": 1410,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Stone%20Flower/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Stone%20Flower/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1300,
        "originalPrice": 1300,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 325,
        "originalPrice": 325,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 650,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sugar%20Free%20Muesli/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Sugar%20Free%20Muesli/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 640,
        "originalPrice": 640,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 160,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 320,
        "originalPrice": 320,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sukkari%20Wet%20Dates/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Sukkari%20Wet%20Dates/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 760,
        "originalPrice": 760,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 190,
        "originalPrice": 190,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 380,
        "originalPrice": 380,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sunflower%20Oil/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Sunflower%20Oil/dhaanya%2001.png",
      "/images/dhannya_Products_final/Sunflower%20Oil/dhaanya%2002.png",
      "/images/dhannya_Products_final/Sunflower%20Oil/dhaanya%2003.png",
      "/images/dhannya_Products_final/Sunflower%20Oil/04.jpg"
    ],
    "variants": [
      {
        "weight": "460g",
        "price": 305,
        "originalPrice": 305,
        "inStock": true
      },
      {
        "weight": "910 g",
        "price": 570,
        "originalPrice": 570,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Sunflower%20Seeds/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Sunflower%20Seeds/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 600,
        "originalPrice": 600,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 150,
        "originalPrice": 150,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 300,
        "originalPrice": 300,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Tarbuj%20Seeds/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Tarbuj%20Seeds/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1350,
        "originalPrice": 1350,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 337.5,
        "originalPrice": 337.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 675,
        "originalPrice": 675,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Tea%20-%20Cardamom%20Idukki%20(Organic)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Tea%20-%20Cardamom%20Idukki%20(Organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1900,
        "originalPrice": 1900,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 475,
        "originalPrice": 475,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 950,
        "originalPrice": 950,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Tea%20-%20Ginger%20Idukki%20(Organic)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Tea%20-%20Ginger%20Idukki%20(Organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1900,
        "originalPrice": 1900,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 475,
        "originalPrice": 475,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 950,
        "originalPrice": 950,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Tea%20-%20Green%20Leaf%20Idukki/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Tea%20-%20Green%20Leaf%20Idukki/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 4000,
        "originalPrice": 4000,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 1000,
        "originalPrice": 1000,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 2000,
        "originalPrice": 2000,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Tea%20-%20Masala%20Idukki%20(Organic)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Tea%20-%20Masala%20Idukki%20(Organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 2200,
        "originalPrice": 2200,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 550,
        "originalPrice": 550,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1100,
        "originalPrice": 1100,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Tea%20-%20Orthodox%20Black%20Idukki%20(Organic)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Tea%20-%20Orthodox%20Black%20Idukki%20(Organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1300,
        "originalPrice": 1300,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 325,
        "originalPrice": 325,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 650,
        "originalPrice": 650,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Tea%20-%20Orthodox%20Black%20Leaf%20Idukki%20(Organic)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Tea%20-%20Orthodox%20Black%20Leaf%20Idukki%20(Organic)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 2800,
        "originalPrice": 2800,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 700,
        "originalPrice": 700,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1400,
        "originalPrice": 1400,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Tenseed%20Chikki/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Tenseed%20Chikki/01.jpg",
      "/images/dhannya_Products_final/Tenseed%20Chikki/02.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 740,
        "originalPrice": 740,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 185,
        "originalPrice": 185,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 370,
        "originalPrice": 370,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Thippili%20(Long%20Pepper)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Thippili%20(Long%20Pepper)/01.jpg"
    ],
    "variants": [
      {
        "weight": "Default Title",
        "price": 0,
        "originalPrice": 0,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Thooyamalli%20Rice/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Thooyamalli%20Rice/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 190,
        "originalPrice": 190,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 47.5,
        "originalPrice": 47.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 95,
        "originalPrice": 95,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Toor%20Dal%20Fine%20(Yellow)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Toor%20Dal%20Fine%20(Yellow)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 240,
        "originalPrice": 240,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 60,
        "originalPrice": 60,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 120,
        "originalPrice": 120,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Travancore%20Tamarind_%20Vaalan%20Puli/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Travancore%20Tamarind_%20Vaalan%20Puli/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 550,
        "originalPrice": 550,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 137.5,
        "originalPrice": 137.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 275,
        "originalPrice": 275,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Triphala/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Triphala/01.jpg"
    ],
    "variants": [
      {
        "weight": "100g",
        "price": 149,
        "originalPrice": 149,
        "inStock": true
      },
      {
        "weight": "1kg",
        "price": 1490,
        "originalPrice": 1490,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 372.5,
        "originalPrice": 372.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 745,
        "originalPrice": 745,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Urad%20Dal%20Black%20Split/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Urad%20Dal%20Black%20Split/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 200,
        "originalPrice": 200,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 50,
        "originalPrice": 50,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 100,
        "originalPrice": 100,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Urad%20Gola%20Fine-Ball/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Urad%20Gola%20Fine-Ball/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 250,
        "originalPrice": 250,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 62.5,
        "originalPrice": 62.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 125,
        "originalPrice": 125,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Urad%20White%20Chilka%20(Split)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Urad%20White%20Chilka%20(Split)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 240,
        "originalPrice": 240,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 60,
        "originalPrice": 60,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 120,
        "originalPrice": 120,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Venga%20Dried/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Venga%20Dried/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 450,
        "originalPrice": 450,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 112.5,
        "originalPrice": 112.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 225,
        "originalPrice": 225,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Virgin%20coconut%20Oil/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Virgin%20coconut%20Oil/dhaanya%2001.png",
      "/images/dhannya_Products_final/Virgin%20coconut%20Oil/dhaanya%2002.png",
      "/images/dhannya_Products_final/Virgin%20coconut%20Oil/dhaanya%2003.png",
      "/images/dhannya_Products_final/Virgin%20coconut%20Oil/dhaanya%2004.png",
      "/images/dhannya_Products_final/Virgin%20coconut%20Oil/05.jpg"
    ],
    "variants": [
      {
        "weight": "160g",
        "price": 340,
        "originalPrice": 340,
        "inStock": true
      },
      {
        "weight": "280g",
        "price": 595,
        "originalPrice": 595,
        "inStock": true
      },
      {
        "weight": "600g",
        "price": 1275,
        "originalPrice": 1275,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Walnut%20Chile/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Walnut%20Chile/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 2580,
        "originalPrice": 2580,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 645,
        "originalPrice": 645,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 1290,
        "originalPrice": 1290,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Walnut%20Nut%20Butter/dhaanya%2001.png",
    "gallery": [
      "/images/dhannya_Products_final/Walnut%20Nut%20Butter/dhaanya%2001.png"
    ],
    "variants": [
      {
        "weight": "250g / Honey",
        "price": 597,
        "originalPrice": 597,
        "inStock": true
      },
      {
        "weight": "250g / Jaggery",
        "price": 587,
        "originalPrice": 587,
        "inStock": true
      },
      {
        "weight": "250g / Unsweetened",
        "price": 567,
        "originalPrice": 567,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Walnut%20Super%20White%20(Kashmiri)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Walnut%20Super%20White%20(Kashmiri)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1970,
        "originalPrice": 1970,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 492.5,
        "originalPrice": 492.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 985,
        "originalPrice": 985,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Watermelon%20Seeds/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Watermelon%20Seeds/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 1150,
        "originalPrice": 1150,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 287.5,
        "originalPrice": 287.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 575,
        "originalPrice": 575,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Wheat%20Flakes/01.png",
    "gallery": [
      "/images/dhannya_Products_final/Wheat%20Flakes/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 300,
        "originalPrice": 300,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 52.5,
        "originalPrice": 52.5,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 150,
        "originalPrice": 150,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/White%20Rajma%20(Pinto%20Beans)/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/White%20Rajma%20(Pinto%20Beans)/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 240,
        "originalPrice": 240,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 60,
        "originalPrice": 60,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 120,
        "originalPrice": 120,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/White%20Rice%20Flakes%20(Avalakki)/01.png",
    "gallery": [
      "/images/dhannya_Products_final/White%20Rice%20Flakes%20(Avalakki)/01.png"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 140,
        "originalPrice": 140,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 35,
        "originalPrice": 35,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 70,
        "originalPrice": 70,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/White%20Sesame%20Chikki/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/White%20Sesame%20Chikki/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 640,
        "originalPrice": 640,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 160,
        "originalPrice": 160,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 320,
        "originalPrice": 320,
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
      "Dhaanya"
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
    "image": "/images/dhannya_Products_final/Yellow%20Ball%20Raisins/01.jpg",
    "gallery": [
      "/images/dhannya_Products_final/Yellow%20Ball%20Raisins/01.jpg"
    ],
    "variants": [
      {
        "weight": "1kg",
        "price": 840,
        "originalPrice": 840,
        "inStock": true
      },
      {
        "weight": "250g",
        "price": 210,
        "originalPrice": 210,
        "inStock": true
      },
      {
        "weight": "500g",
        "price": 420,
        "originalPrice": 420,
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
      "Dhaanya"
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
