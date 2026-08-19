export type ProductCategory =
  | 'Wood Pressed Oils'
  | 'Flour'
  | 'Dry Fruits'
  | 'Seeds'
  | 'Millets'
  | 'Spices'
  | 'Masalas'
  | 'Health Foods'
  | 'Coffee'
  | 'Tea'
  | 'Pickles'
  | 'Natural Sweeteners'
  | 'Pulses'
  | 'Nut Butters'
  | 'Rice'
  | 'Rava'
  | 'Poha'
  | 'Pasta'
  | 'Noodles'
  | 'Eco Friendly'
  | 'Quick Bites'
  | 'Skin Care'
  | 'Hair Care';

export type HealthConcern = 'Weight Loss' | 'Gut Health' | 'Heart Health' | 'Skin & Hair' | 'Best Sellers';


export interface ProductVariant {
  weight: string; // e.g. '250g', '500g', '1kg'
  price: number;
  originalPrice: number;
  inStock: boolean;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number; // 1-5
  date: string;
  comment: string;
  verifiedPurchase: boolean;
  images?: string[];
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  concern?: HealthConcern[];
  description: string;
  ingredients?: string[];
  nutritionInfo?: Record<string, string>; // e.g. { Energy: '380 kcal', Protein: '12g' }
  benefits?: string[];
  image: string;
  gallery: string[];
  variants: ProductVariant[];
  rating: number;
  reviewCount: number;
  isBestSeller?: boolean;
  isRecommended?: boolean;
  stock: number;
  tags?: string[];
}

export interface MasalaIngredient {
  id: string;
  name: string;
  hindiName?: string;
  category: 'Whole Spices' | 'Aromatics' | 'Herbs & Seeds' | 'Pungent & Heat' | 'Color & Texture';
  pricePer100g: number;
  roastingPricePer100g: number;
  image: string;
  healthBenefits: string;
  flavorProfile: string;
  defaultRoast: 'Roasted' | 'Non Roasted';
}

export interface SelectedMasalaIngredient {
  ingredient: MasalaIngredient;
  weightGrams: number;
  roastingType: 'Roasted' | 'Non Roasted';
}

export interface CustomRecipe {
  id: string;
  name: string;
  items: SelectedMasalaIngredient[];
  totalWeightGrams: number;
  ingredientCost: number;
  roastingCharge: number;
  subtotal: number;
  discount: number;
  totalPrice: number;
  createdAt: string;
}

export interface CartItem {
  id: string; // unique ID in cart
  productId?: string;
  customRecipeId?: string;
  type: 'product' | 'custom_masala';
  name: string;
  image: string;
  variantWeight: string;
  price: number;
  quantity: number;
  customDetails?: {
    totalWeight: number;
    roastingSummary: string;
    itemsList: { name: string; weight: number; roasting: string }[];
  };
}

export interface Address {
  id: string;
  fullName: string;
  mobile: string;
  email?: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  isDefault?: boolean;
}

export interface Order {
  id: string;
  userId?: string;
  userEmail?: string;
  items: CartItem[];
  shippingAddress: Address;
  deliverySlot: string;
  paymentMethod: 'COD' | 'Razorpay' | 'UPI';
  paymentStatus?: 'Paid' | 'Pending' | 'Refunded';
  subtotal: number;
  discount: number;
  tax: number;
  shippingFee: number;
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  createdAt: string;
  estimatedDelivery: string;
  trackingNumber: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: 'user' | 'admin';
  addresses: Address[];
  savedRecipes: CustomRecipe[];
}

export interface Coupon {
  code: string;
  discountPercent: number;
  maxDiscount?: number;
  minOrderValue?: number;
  minOrderAmount?: number;
  description: string;
  expiryDate?: string;
  isActive?: boolean;
  isFeatured?: boolean;
}

export type SortOption = 'featured' | 'newest' | 'popularity' | 'price-low-high' | 'price-high-low' | 'rating';
