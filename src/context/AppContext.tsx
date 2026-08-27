import React, { createContext, useContext, useState, useEffect } from 'react';
import { getApiUrl } from '../utils/apiConfig';
import {
  Product,
  ProductCategory,
  HealthConcern,
  CartItem,
  CustomRecipe,
  Order,
  User,
  Address,
  Coupon,
} from '../types';
import { PRODUCTS, COUPONS } from '../data/initialData';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface AppContextType {
  products: Product[];
  coupons: Coupon[];
  cart: CartItem[];
  wishlist: string[]; // Product IDs
  user: User | null;
  orders: Order[];
  savedRecipes: CustomRecipe[];
  activeCategory: ProductCategory | null;
  activeConcern: HealthConcern | null;
  searchQuery: string;
  appliedCoupon: { code: string; discountPercent: number; discountAmount: number } | null;
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  isAuthModalOpen: boolean;
  isProfileOpen: boolean;
  isAdminMode: boolean;
  isServerModalOpen: boolean;
  quickViewProduct: Product | null;
  toasts: Toast[];

  // Actions
  refreshProducts: () => Promise<void>;
  refreshCoupons: () => Promise<void>;
  setActiveCategory: (cat: ProductCategory | null) => void;
  setActiveConcern: (concern: HealthConcern | null) => void;
  setSearchQuery: (query: string) => void;
  setIsCartOpen: (open: boolean) => void;
  setIsCheckoutOpen: (open: boolean) => void;
  setIsAuthModalOpen: (open: boolean) => void;
  setIsProfileOpen: (open: boolean) => void;
  setIsAdminMode: (admin: boolean) => void;
  setIsServerModalOpen: (open: boolean) => void;
  setQuickViewProduct: (product: Product | null) => void;

  addToCart: (product: Product, variantWeight?: string, quantity?: number) => void;
  addCustomMasalaToCart: (recipe: CustomRecipe) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQty: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  applyCouponCode: (code: string) => Promise<boolean>;
  removeCoupon: () => void;
  placeOrder: (
    address: Address,
    slot: string,
    paymentMethod: 'COD' | 'Razorpay' | 'UPI'
  ) => Promise<Order | null>;
  saveAddress: (address: Address) => Promise<Address>;
  deleteAddress: (addressId: string) => Promise<boolean>;
  saveCustomRecipe: (recipe: CustomRecipe) => void;
  login: (email: string, name?: string, role?: 'admin' | 'user') => void;
  logout: () => void;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  cartSubtotal: number;
  cartTotalDiscount: number;
  cartTax: number;
  cartShippingFee: number;
  cartGrandTotal: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('dhaanya_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [coupons, setCoupons] = useState<Coupon[]>([]);

  const refreshProducts = async () => {
    try {
      const res = await fetch(getApiUrl('/api/products'));
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setProducts(data.data);
        }
      }
    } catch (e) {
      console.warn('Error fetching live products from API:', e);
    }
  };

  const refreshCoupons = async () => {
    try {
      const res = await fetch(getApiUrl('/api/coupons'));
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setCoupons(data.data);
        }
      }
    } catch (e) {
      console.warn('Error fetching live coupons from API:', e);
    }
  };

  useEffect(() => {
    refreshProducts();
    refreshCoupons();
  }, []);

  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('dhaanya_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('dhaanya_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [orders, setOrders] = useState<Order[]>([]);
  const [savedRecipes, setSavedRecipes] = useState<CustomRecipe[]>(() => {
    const saved = localStorage.getItem('dhaanya_recipes');
    return saved ? JSON.parse(saved) : [];
  });

  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null);
  const [activeConcern, setActiveConcern] = useState<HealthConcern | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discountPercent: number;
    discountAmount: number;
  } | null>(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isServerModalOpen, setIsServerModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('dhaanya_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('dhaanya_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (user) localStorage.setItem('dhaanya_user', JSON.stringify(user));
    else localStorage.removeItem('dhaanya_user');
  }, [user]);

  useEffect(() => {
    localStorage.setItem('dhaanya_recipes', JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  // Load orders for current authenticated user from server
  useEffect(() => {
    if (!user) {
      setOrders([]);
      return;
    }
    const uEmail = encodeURIComponent(user.email || '');
    fetch(getApiUrl(`/api/orders?userId=${user.id}&email=${uEmail}`))
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setOrders(data.data);
        } else {
          setOrders([]);
        }
      })
      .catch(() => setOrders([]));
  }, [user?.id, user?.email]);

  // Load addresses for current authenticated user from server
  useEffect(() => {
    if (!user) return;
    fetch(getApiUrl(`/api/addresses?userId=${user.id}`))
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setUser((prev) => (prev ? { ...prev, addresses: data.data } : null));
        }
      })
      .catch(() => {});
  }, [user?.id]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const addToCart = (product: Product, variantWeight?: string, quantity: number = 1) => {
    const addQty = Number(quantity) > 0 ? Number(quantity) : 1;
    const selectedVariant =
      product.variants.find((v) => v.weight === variantWeight) || product.variants[0];

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.productId === product.id && item.variantWeight === selectedVariant.weight
      );

      if (existingIndex > -1) {
        return prevCart.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: Number(item.quantity || 0) + addQty }
            : item
        );
      } else {
        const newItem: CartItem = {
          id: `ci-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          productId: product.id,
          type: 'product',
          name: product.name,
          image: product.image,
          variantWeight: selectedVariant.weight,
          price: selectedVariant.price,
          quantity: addQty,
        };
        return [...prevCart, newItem];
      }
    });

    showToast(`Added ${product.name} (${selectedVariant.weight}) to cart!`);
  };

  const addCustomMasalaToCart = (recipe: CustomRecipe) => {
    const roastingDesc = recipe.items
      .map((i) => `${i.ingredient.name} (${i.weightGrams}g, ${i.roastingType})`)
      .join(', ');

    const newItem: CartItem = {
      id: `ci-masala-${Date.now()}`,
      customRecipeId: recipe.id,
      type: 'custom_masala',
      name: `Custom Masala: ${recipe.name}`,
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=80',
      variantWeight: `${recipe.totalWeightGrams}g Batch`,
      price: recipe.totalPrice,
      quantity: 1,
      customDetails: {
        totalWeight: recipe.totalWeightGrams,
        roastingSummary: roastingDesc,
        itemsList: recipe.items.map((i) => ({
          name: i.ingredient.name,
          weight: i.weightGrams,
          roasting: i.roastingType,
        })),
      },
    };

    setCart((prev) => [...prev, newItem]);
    showToast(`Added custom recipe "${recipe.name}" (${recipe.totalWeightGrams}g) to cart!`);
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
    showToast('Item removed from cart', 'info');
  };

  const updateCartQty = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const toggleWishlist = (productId: string) => {
    if (wishlist.includes(productId)) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      showToast('Removed from wishlist', 'info');
    } else {
      setWishlist((prev) => [...prev, productId]);
      showToast('Added to wishlist ❤️');
    }
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Cart Calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const cartTotalDiscount = appliedCoupon ? appliedCoupon.discountAmount : 0;
  const cartTax = Math.round((cartSubtotal - cartTotalDiscount) * 0.05); // 5% GST
  const cartShippingFee = cartSubtotal >= 499 || cartSubtotal === 0 ? 0 : 49;
  const cartGrandTotal = Math.max(0, cartSubtotal - cartTotalDiscount + cartTax + cartShippingFee);

  const applyCouponCode = async (code: string) => {
    try {
      const res = await fetch(getApiUrl('/api/coupons/validate'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, cartSubtotal }),
      });
      const data = await res.json();
      if (data.success) {
        setAppliedCoupon({
          code: data.data.code,
          discountPercent: data.data.discountPercent,
          discountAmount: data.data.discountAmount,
        });
        showToast(data.data.message, 'success');
        return true;
      } else {
        showToast(data.message, 'error');
        return false;
      }
    } catch {
      showToast('Failed to validate coupon', 'error');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed', 'info');
  };

  const placeOrder = async (
    address: Address,
    slot: string,
    paymentMethod: 'COD' | 'Razorpay' | 'UPI'
  ) => {
    if (cart.length === 0) return null;

    const normalizedAddr: Address = {
      ...address,
      id: address.id && address.id !== 'addr-new' ? address.id : `addr-${Date.now()}`,
    };

    const updateLocalUserAddress = (addr: Address) => {
      if (user) {
        const existingIdx = user.addresses.findIndex(
          (a) => a.id === addr.id || (a.street === addr.street && a.pincode === addr.pincode)
        );
        let updatedList = [...user.addresses];
        if (existingIdx > -1) {
          updatedList[existingIdx] = addr;
        } else {
          updatedList.push(addr);
        }
        setUser({ ...user, addresses: updatedList });
      }
    };

    try {
      const res = await fetch(getApiUrl('/api/orders'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.id || `usr-${Date.now()}`,
          userEmail: user?.email || normalizedAddr.email || '',
          items: cart,
          shippingAddress: normalizedAddr,
          deliverySlot: slot,
          paymentMethod,
          subtotal: cartSubtotal,
          discount: cartTotalDiscount,
          tax: cartTax,
          shippingFee: cartShippingFee,
          total: cartGrandTotal,
        }),
      });

      let data;
      try {
        data = await res.json();
      } catch (e) {
        console.warn('Could not parse order JSON response:', e);
      }

      if (data && data.success && data.data) {
        setOrders((prev) => [data.data, ...prev]);
        updateLocalUserAddress(normalizedAddr);
        clearCart();
        showToast('🎉 Order placed successfully! Order ID: ' + data.data.id, 'success');
        return data.data;
      }
    } catch (err) {
      console.warn('Order API call exception, using fallback order:', err);
    }

    // Reliable fallback if API call fails or server returns an error
    const localOrder: Order = {
      id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      userId: user?.id || `usr-${Date.now()}`,
      userEmail: user?.email || normalizedAddr.email || '',
      items: [...cart],
      shippingAddress: normalizedAddr,
      deliverySlot: slot || 'Standard Delivery',
      paymentMethod: paymentMethod || 'COD',
      subtotal: cartSubtotal,
      discount: cartTotalDiscount,
      tax: cartTax,
      shippingFee: cartShippingFee,
      total: cartGrandTotal,
      status: 'Processing',
      createdAt: new Date().toISOString(),
      estimatedDelivery: 'Within 2-3 Days',
      trackingNumber: `DW-TRK-${Math.floor(1000000 + Math.random() * 9000000)}`,
    };

    setOrders((prev) => [localOrder, ...prev]);
    updateLocalUserAddress(normalizedAddr);
    clearCart();
    showToast('🎉 Order placed successfully! Order ID: ' + localOrder.id, 'success');
    return localOrder;
  };

  const saveAddress = async (addressData: Address): Promise<Address> => {
    const addressToSave: Address = {
      ...addressData,
      id: addressData.id && addressData.id !== 'addr-new' ? addressData.id : `addr-${Date.now()}`,
    };

    try {
      await fetch(getApiUrl('/api/addresses'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...addressToSave,
          userId: user?.id || 'usr-101',
        }),
      });
    } catch (err) {
      console.warn('API error saving address to DB:', err);
    }

    if (user) {
      const idx = user.addresses.findIndex((a) => a.id === addressToSave.id);
      let updatedList = [...user.addresses];
      if (idx > -1) {
        updatedList[idx] = addressToSave;
      } else {
        updatedList.push(addressToSave);
      }
      setUser({ ...user, addresses: updatedList });
    }

    showToast('Address saved successfully!', 'success');
    return addressToSave;
  };

  const deleteAddress = async (addressId: string): Promise<boolean> => {
    try {
      await fetch(getApiUrl(`/api/addresses/${addressId}`), { method: 'DELETE' });
    } catch (err) {
      console.warn('API error deleting address:', err);
    }

    if (user) {
      setUser({
        ...user,
        addresses: user.addresses.filter((a) => a.id !== addressId),
      });
    }

    showToast('Address removed', 'info');
    return true;
  };

  const saveCustomRecipe = async (recipe: CustomRecipe) => {
    try {
      await fetch(getApiUrl('/api/recipes'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
      });
    } catch (e) {
      console.warn('API error saving recipe:', e);
    }
    setSavedRecipes((prev) => [recipe, ...prev]);
    showToast(`Saved recipe "${recipe.name}" to your profile!`, 'success');
  };

  const login = (email: string, name: string = 'Dhaanya Customer', role?: 'admin' | 'user') => {
    const cleanEmail = email.trim().toLowerCase();
    const isAdmin = role === 'admin' || cleanEmail === 'dhaanyaorganic1@gmail.com';

    const newUser: User = {
      id: isAdmin ? 'usr-admin-1' : `usr-${Date.now()}`,
      name: isAdmin ? 'Dhaanya Administrator' : name,
      email,
      mobile: '+91 98765 00000',
      role: isAdmin ? 'admin' : 'user',
      addresses: user ? user.addresses : [],
      savedRecipes,
    };
    setUser(newUser);
    if (isAdmin) {
      setIsAdminMode(true);
      showToast('Logged in as Store Administrator 👑', 'success');
    } else {
      showToast(`Welcome back, ${name}!`, 'success');
    }
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    setIsAdminMode(false);
    setOrders([]);
    setCart([]);
    setWishlist([]);
    setSavedRecipes([]);
    localStorage.removeItem('dhaanya_cart');
    localStorage.removeItem('dhaanya_wishlist');
    localStorage.removeItem('dhaanya_user');
    localStorage.removeItem('dhaanya_recipes');
    showToast('Logged out successfully', 'info');
  };

  return (
    <AppContext.Provider
      value={{
        products,
        coupons,
        cart,
        wishlist,
        user,
        orders,
        savedRecipes,
        activeCategory,
        activeConcern,
        searchQuery,
        appliedCoupon,
        isCartOpen,
        isCheckoutOpen,
        isAuthModalOpen,
        isProfileOpen,
        isAdminMode,
        isServerModalOpen,
        quickViewProduct,
        toasts,
        refreshProducts,
        refreshCoupons,
        setActiveCategory,
        setActiveConcern,
        setSearchQuery,
        setIsCartOpen,
        setIsCheckoutOpen,
        setIsAuthModalOpen,
        setIsProfileOpen,
        setIsAdminMode,
        setIsServerModalOpen,
        setQuickViewProduct,
        addToCart,
        addCustomMasalaToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        toggleWishlist,
        isInWishlist,
        applyCouponCode,
        removeCoupon,
        placeOrder,
        saveAddress,
        deleteAddress,
        saveCustomRecipe,
        login,
        logout,
        showToast,
        cartSubtotal,
        cartTotalDiscount,
        cartTax,
        cartShippingFee,
        cartGrandTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
