import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShoppingBag,
  Heart,
  User as UserIcon,
  Search,
  Sparkles,
  Menu,
  X,
  Leaf,
  ShieldAlert,
  PhoneCall,
  Activity,
  LogIn,
  Flame,
  ArrowRight,
  ChevronRight,
  Tag,
} from 'lucide-react';
import { CATEGORIES } from '../data/initialData';
import { ProductCategory } from '../types';

interface HeaderProps {
  onNavigateHome: () => void;
  onNavigateCustomMasala: () => void;
  onNavigateCategoryPage: (category?: ProductCategory) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onNavigateCustomMasala,
  onNavigateCategoryPage,
}) => {
  const {
    products,
    coupons,
    cart,
    wishlist,
    user,
    setIsCartOpen,
    setIsAuthModalOpen,
    setIsProfileOpen,
    isAdminMode,
    setIsAdminMode,
    setIsServerModalOpen,
    setQuickViewProduct,
    searchQuery,
    setSearchQuery,
    setActiveCategory,
    showToast,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);

  const activeTopCoupon = useMemo(() => {
    return (
      (coupons || []).find((c) => c.isActive !== false && c.isFeatured) ||
      (coupons || []).find((c) => c.isActive !== false) ||
      null
    );
  }, [coupons]);

  // Auto-rotate announcement banner ticker for compact screens
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % 3);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  // Close search autocomplete popover on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Computed Live Search Product Matches
  const matchingProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return (products || [])
      .filter((p) => {
        if (!p) return false;
        const matchName = (p.name || '').toLowerCase().includes(q);
        const matchCat = (p.category || '').toLowerCase().includes(q);
        const matchDesc = (p.description || '').toLowerCase().includes(q);
        const matchConcern = Array.isArray(p.concern) && p.concern.some((c) => (c || '').toLowerCase().includes(q));
        const matchTags = Array.isArray(p.tags) && p.tags.some((t) => (t || '').toLowerCase().includes(q));
        return matchName || matchCat || matchDesc || matchConcern || matchTags;
      })
      .slice(0, 6);
  }, [products, searchQuery]);

  // Computed Live Search Category Matches
  const matchingCategories = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return CATEGORIES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleCategorySelect = (category: ProductCategory) => {
    setActiveCategory(category);
    onNavigateCategoryPage(category);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Banner Announcement Bar (Static at top of page, scrolls away) */}
      <div className="bg-[#243323] text-stone-200 py-1.5 px-4 text-xs font-serif border-b border-stone-800 shadow-inner relative z-30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* Left Feature Pill */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-amber-300 font-semibold tracking-tight">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>100% Traditional Wooden Ghani & Pure Spices</span>
          </div>

          {/* Center: Main Dynamic Active Coupon Offer Banner (Desktop & Tablet) */}
          <div className="hidden md:flex items-center justify-center gap-2 mx-auto text-xs font-medium">
            {activeTopCoupon ? (
              <>
                <span className="bg-amber-400 text-stone-950 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-2xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-stone-950" />
                  SPECIAL OFFER
                </span>
                <span className="text-stone-100 font-semibold">
                  Use Coupon{' '}
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(activeTopCoupon.code);
                      showToast(`Coupon ${activeTopCoupon.code} copied to clipboard!`, 'info');
                    }}
                    title="Click to copy coupon code"
                    className="inline-flex items-center gap-1 bg-amber-300 hover:bg-amber-400 text-stone-950 font-black font-mono px-2 py-0.5 rounded-md shadow-2xs transition active:scale-95 cursor-pointer mx-1"
                  >
                    {activeTopCoupon.code}
                  </button>{' '}
                  for <strong>{activeTopCoupon.discountPercent}% OFF</strong> <span className="text-white/40 mx-1">|</span> Free Shipping &gt; ₹499
                </span>
              </>
            ) : (
              <span className="text-stone-100 font-semibold flex items-center gap-2">
                <Leaf className="w-3.5 h-3.5 text-amber-300" />
                100% Pure Traditional Wood Pressed Oils & Spices | Free Shipping &gt; ₹499
              </span>
            )}
          </div>

          {/* Mobile Auto-Rotating Ticker (visible on small screens) */}
          <div className="md:hidden w-full flex items-center justify-center text-center text-xs font-semibold py-0.5">
            {tickerIndex === 0 && (
              <span className="animate-in fade-in duration-300 flex items-center gap-1.5 text-amber-200">
                <Leaf className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                100% Traditional Wooden Ghani & Pure Spices
              </span>
            )}
            {tickerIndex === 1 && (
              activeTopCoupon ? (
                <span className="animate-in fade-in duration-300 flex items-center gap-1.5">
                  <span className="bg-amber-400 text-stone-950 px-1.5 py-0.2 rounded text-[10px] font-black uppercase">{activeTopCoupon.code}</span>
                  Use code <strong className="text-amber-200 font-mono">{activeTopCoupon.code}</strong> for {activeTopCoupon.discountPercent}% OFF!
                </span>
              ) : (
                <span className="animate-in fade-in duration-300 flex items-center gap-1.5 text-amber-200">
                  Free Delivery on Orders Above ₹499
                </span>
              )
            )}
            {tickerIndex === 2 && (
              <span className="animate-in fade-in duration-300 flex items-center gap-1.5 text-stone-200">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Need Help? WhatsApp Support (+91 90086 25716)
              </span>
            )}
          </div>

          {/* Right: WhatsApp Support Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919008625716?text=Hi%20Dhaanya,%20I%20have%20a%20query"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-700/90 hover:bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full transition shadow-2xs border border-emerald-500/40 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-200" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Main Nav Bar (Solid Opaque Header) */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7] shadow-sm border-b border-stone-200/80 transition-all duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Left: Mobile menu toggle + Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-stone-600 hover:text-olive p-1 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div
            onClick={onNavigateHome}
            className="cursor-pointer flex items-center gap-2.5 group"
            title="Go to Home"
          >
            <div className="w-10 h-10 rounded-full bg-olive text-white flex items-center justify-center font-bold text-xl shadow-sm group-hover:scale-105 transition">
              D
            </div>
            <div>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-olive font-serif">
                Dhaanya
              </span>
              <span className="hidden sm:block text-[10px] sm:text-xs tracking-widest text-stone-500 uppercase font-sans font-bold">
                Organic & Custom Spices
              </span>
            </div>
          </div>
        </div>

        {/* Right Action Icons (Aligned to Right Edge with Search Icon Next to Cart Icon) */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 ml-auto">
          {/* Admin Toggle Button */}
          <button
            onClick={() => setIsAdminMode(!isAdminMode)}
            className={`p-2 rounded-full border text-xs transition flex items-center gap-1 ${
              isAdminMode
                ? 'bg-olive text-white border-olive font-bold shadow'
                : 'border-stone-200 text-stone-600 hover:text-olive hover:border-olive'
            }`}
            title={isAdminMode ? 'Switch to Storefront' : 'Admin Management Portal'}
          >
            <ShieldAlert className="w-4 h-4" />
            <span className="hidden xl:inline">{isAdminMode ? 'Admin Portal' : 'Admin Mode'}</span>
          </button>

          {/* Login / Sign Up CTA (If logged out) */}
          {!user ? (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center gap-1.5 bg-cream hover:bg-stone-200 text-earth font-bold text-xs px-2.5 sm:px-3.5 py-2 rounded-full border border-stone-200 shadow-2xs transition active:scale-95 cursor-pointer"
              title="Sign in with OTP"
            >
              <LogIn className="w-4 h-4 text-olive" />
              <span className="hidden sm:inline">Login / Sign Up</span>
            </button>
          ) : (
            /* User Profile (If logged in) */
            <button
              onClick={() => setIsProfileOpen(true)}
              className="flex items-center gap-2 text-stone-700 hover:text-olive p-2 rounded-full hover:bg-cream transition cursor-pointer"
              title={`Profile: ${user.name}`}
            >
              <div className="w-7 h-7 rounded-full bg-olive text-white flex items-center justify-center text-xs font-bold shadow-2xs">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="hidden lg:inline text-xs font-medium max-w-[100px] truncate">{user.name}</span>
            </button>
          )}

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-stone-700 hover:text-olive hover:bg-cream rounded-full transition"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-olive text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                {totalCartItems}
              </span>
            )}
          </button>

          {/* Search Icon (Placed beyond/next to Cart Icon) */}
          <div ref={searchRef} className="relative">
            <button
              onClick={() => setIsSearchFocused(!isSearchFocused)}
              className={`p-2 rounded-full transition flex items-center justify-center cursor-pointer ${
                isSearchFocused || searchQuery
                  ? 'bg-olive text-white shadow'
                  : 'text-stone-700 hover:text-olive hover:bg-cream'
              }`}
              aria-label="Search Spices & Oils"
              title="Search Spices & Oils"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Interactive Search Popover Dropdown when Search Icon is Clicked */}
            {isSearchFocused && (
              <div className="absolute top-full right-0 mt-3 w-[calc(100vw-2rem)] max-w-xs sm:w-96 bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden z-50 p-4 text-earth space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    autoFocus
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (e.target.value.trim().length > 0) {
                        onNavigateCategoryPage();
                      }
                    }}
                    placeholder="Search oils, spices, dry fruits..."
                    className="w-full bg-cream border border-stone-200 text-earth text-xs sm:text-sm rounded-full pl-9 pr-8 py-2 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition placeholder:text-stone-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-bold p-1 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Popular / Live Search Matches */}
                {searchQuery.trim().length === 0 ? (
                  <div className="space-y-2">
                    <span className="block text-[10px] font-extrabold text-stone-400 uppercase tracking-wider">
                      Popular Searches
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Mustard Oil', 'Garam Masala', 'Turmeric', 'Dry Fruits', 'Millets'].map((term) => (
                        <button
                          key={term}
                          onClick={() => {
                            setSearchQuery(term);
                            onNavigateCategoryPage();
                          }}
                          className="bg-stone-100 hover:bg-cream text-earth text-xs font-bold px-2.5 py-1 rounded-full border border-stone-200"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {matchingProducts.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          setQuickViewProduct(prod);
                          setIsSearchFocused(false);
                        }}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-cream transition cursor-pointer"
                      >
                        <img src={prod.image} alt={prod.name} className="w-10 h-10 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-xs truncate">{prod.name}</h5>
                          <span className="text-[10px] text-stone-500">₹{prod.variants?.[0]?.price || 299}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-soft p-4 space-y-4">
          {/* Mobile Search */}
          <div className="relative space-y-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  onNavigateCategoryPage();
                }}
                placeholder="Search wood pressed oils, dry fruits, spices..."
                className="w-full bg-cream border border-stone-200 text-earth text-xs rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:border-olive"
              />
            </div>
            {/* Quick Popular Search Pills for Mobile */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Mustard Oil', 'Garam Masala', 'Turmeric', 'Gut Health'].map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setSearchQuery(term);
                    onNavigateCategoryPage();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-cream hover:bg-stone-200 text-earth text-[10px] font-bold px-2.5 py-1 rounded-full border border-stone-200/80 cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              onNavigateCustomMasala();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 bg-olive text-white text-xs font-bold py-2.5 rounded-xl shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Make Your Own Custom Masala</span>
          </button>

          <div className="space-y-1 text-xs">
            <div className="text-stone-500 font-bold uppercase text-[10px] tracking-wider py-1 border-b border-stone-200">
              Categories
            </div>
            <div className="max-h-60 overflow-y-auto space-y-1 pt-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleCategorySelect(cat.name)}
                  className="w-full text-left px-2 py-1.5 rounded text-earth hover:bg-cream hover:text-olive"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  </>
);
};
