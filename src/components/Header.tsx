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
        const matchName = p.name.toLowerCase().includes(q);
        const matchCat = p.category.toLowerCase().includes(q);
        const matchDesc = (p.description || '').toLowerCase().includes(q);
        const matchConcern = p.concern && p.concern.some((c) => c.toLowerCase().includes(q));
        const matchTags = p.tags && p.tags.some((t) => t.toLowerCase().includes(q));
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
    <header className="sticky top-0 z-40 bg-white border-b border-soft text-earth shadow-sm">
      {/* Top Announcement Bar - Re-arranged for Pristine Alignment & Visual Appeal */}
      <div className="bg-[#2d3a29] text-white text-xs font-medium py-2 px-4 border-b border-black/15 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Quality Promise Badge */}
          <div className="hidden lg:flex items-center gap-2 text-stone-200 text-xs font-medium">
            <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
              <Leaf className="w-3.5 h-3.5 text-amber-300" />
              <span>100% Traditional Wooden Ghani & Pure Spices</span>
            </span>
          </div>

          {/* Center: Main Festive Offer Banner (Desktop & Tablet) */}
          <div className="hidden md:flex items-center justify-center gap-2 mx-auto text-xs font-medium">
            <span className="bg-amber-400 text-stone-950 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-2xs flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-stone-950" />
              FESTIVE OFFER
            </span>
            <span className="text-stone-100 font-semibold">
              Use Coupon{' '}
              <button
                onClick={() => {
                  navigator.clipboard?.writeText('FESTIVE25');
                  showToast('Coupon FESTIVE25 copied to clipboard!', 'info');
                }}
                title="Click to copy coupon code"
                className="inline-flex items-center gap-1 bg-amber-300 hover:bg-amber-400 text-stone-950 font-black font-mono px-2 py-0.5 rounded-md shadow-2xs transition active:scale-95 cursor-pointer mx-1"
              >
                FESTIVE25
              </button>{' '}
              for <strong>25% OFF</strong> <span className="text-white/40 mx-1">|</span> Free Shipping &gt; ₹499
            </span>
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
              <span className="animate-in fade-in duration-300 flex items-center gap-1.5">
                <span className="bg-amber-400 text-stone-950 px-1.5 py-0.2 rounded text-[10px] font-black uppercase">FESTIVE25</span>
                Use code <strong className="text-amber-200 font-mono">FESTIVE25</strong> for 25% OFF!
              </span>
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

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Left: Mobile menu toggle + Logo */}
        <div className="flex items-center gap-3">
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
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-olive font-serif">
                Dhaanya
              </span>
              <span className="block text-xs tracking-widest text-stone-500 uppercase font-sans font-bold">
                Organic & Custom Spices
              </span>
            </div>
          </div>
        </div>

        {/* Center: Interactive Search Bar with Live Suggestions */}
        <div ref={searchRef} className="hidden md:flex flex-1 max-w-md mx-4 relative">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onFocus={() => setIsSearchFocused(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchFocused(true);
                if (e.target.value.trim().length > 0) {
                  onNavigateCategoryPage();
                }
              }}
              placeholder="Search wood pressed oils, dry fruits, spices, seeds..."
              className="w-full bg-cream border border-stone-200 text-earth text-xs sm:text-sm rounded-full pl-9 pr-8 py-2.5 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition placeholder:text-stone-400 shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setIsSearchFocused(false);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-bold p-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Live Autocomplete Search Dropdown */}
          {isSearchFocused && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden z-50 p-4 text-earth space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
              {searchQuery.trim().length === 0 ? (
                /* Popular Searches & Fast Categories when search input is empty */
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 text-terracotta">
                      <Flame className="w-3.5 h-3.5 fill-terracotta" />
                      Trending & Popular Searches
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Mustard Oil',
                      'Garam Masala',
                      'Turmeric Powder',
                      'Groundnut Oil',
                      'Dry Fruits',
                      'Gut Health',
                      'Millets',
                    ].map((term) => (
                      <button
                        key={term}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          setSearchQuery(term);
                          onNavigateCategoryPage();
                          setIsSearchFocused(false);
                        }}
                        className="bg-[#faf8f4] hover:bg-cream text-earth hover:text-olive border border-stone-200 rounded-full px-3 py-1 text-xs font-bold transition active:scale-95 cursor-pointer flex items-center gap-1"
                      >
                        <Search className="w-3 h-3 text-stone-400" />
                        <span>{term}</span>
                      </button>
                    ))}
                  </div>

                  <div className="border-t border-stone-100 pt-3">
                    <span className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2">
                      Explore Categories
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {CATEGORIES.slice(0, 6).map((cat) => (
                        <button
                          key={cat.slug}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => {
                            handleCategorySelect(cat.name as ProductCategory);
                            setIsSearchFocused(false);
                          }}
                          className="flex items-center gap-2 p-2 rounded-xl bg-stone-50 hover:bg-cream text-xs font-bold text-earth hover:text-olive transition cursor-pointer text-left"
                        >
                          <span className="w-6 h-6 rounded-lg bg-olive/10 text-olive flex items-center justify-center font-serif text-xs font-extrabold">
                            {cat.name.charAt(0)}
                          </span>
                          <span className="truncate">{cat.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Live Search Suggestions when typing */
                <div className="space-y-3">
                  {/* Matching Categories */}
                  {matchingCategories.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold text-stone-400 uppercase tracking-wider">
                        Categories
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {matchingCategories.map((cat) => (
                          <button
                            key={cat.slug}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                              handleCategorySelect(cat.name as ProductCategory);
                              setIsSearchFocused(false);
                            }}
                            className="bg-olive/10 hover:bg-olive text-olive hover:text-white px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer flex items-center gap-1"
                          >
                            <span>{cat.name}</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Matching Products */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-extrabold text-stone-500 uppercase tracking-wider mb-2">
                      <span>Product Matches ({matchingProducts.length})</span>
                      {matchingProducts.length > 0 && (
                        <button
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => {
                            onNavigateCategoryPage();
                            setIsSearchFocused(false);
                          }}
                          className="text-olive hover:underline font-bold text-xs capitalize flex items-center gap-1 cursor-pointer"
                        >
                          View all results <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    {matchingProducts.length > 0 ? (
                      <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                        {matchingProducts.map((prod) => (
                          <div
                            key={prod.id}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => {
                              setQuickViewProduct(prod);
                              setIsSearchFocused(false);
                            }}
                            className="flex items-center gap-3 p-2 rounded-2xl hover:bg-cream transition cursor-pointer group border border-transparent hover:border-stone-200/80"
                          >
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="w-12 h-12 rounded-xl object-cover border border-stone-200 shrink-0 group-hover:scale-105 transition"
                              onError={(e) => {
                                e.currentTarget.src = '/images/Dailywell_Products/Garam%20Masala/01.jpg';
                              }}
                            />
                            <div className="flex-1 min-w-0">
                              <h5 className="font-bold text-earth text-xs font-serif truncate group-hover:text-olive">
                                {prod.name}
                              </h5>
                              <div className="flex items-center gap-2 text-[11px] text-stone-500 font-medium">
                                <span className="bg-stone-100 text-stone-700 px-1.5 py-0.5 rounded text-[10px] font-semibold">
                                  {prod.category}
                                </span>
                                <span>
                                  {prod.variants && prod.variants[0]
                                    ? `${prod.variants[0].weight}`
                                    : '500g'}
                                </span>
                              </div>
                            </div>
                            <div className="text-right shrink-0">
                              <span className="font-extrabold text-olive text-xs">
                                ₹{prod.variants && prod.variants[0] ? prod.variants[0].price : 299}
                              </span>
                              <span className="block text-[10px] text-amber-600 font-bold">
                                ★ {prod.rating || 4.8}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-6 text-center text-stone-500 space-y-1">
                        <p className="text-xs font-medium">
                          No exact product match found for "<strong>{searchQuery}</strong>"
                        </p>
                        <button
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => {
                            onNavigateCategoryPage();
                            setIsSearchFocused(false);
                          }}
                          className="text-xs text-olive font-bold underline cursor-pointer"
                        >
                          Browse all products in catalog →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Custom Masala CTA Button */}
          <button
            onClick={onNavigateCustomMasala}
            className="relative hidden sm:flex items-center gap-2 bg-olive hover:bg-[#4a4a34] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-xs hover:shadow transition duration-200 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Make Custom Masala</span>
            <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded font-extrabold uppercase">
              BUILD
            </span>
          </button>

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
              className="flex items-center gap-1.5 bg-cream hover:bg-stone-200 text-earth font-bold text-xs px-3.5 py-2 rounded-full border border-stone-200 shadow-2xs transition active:scale-95 cursor-pointer"
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
        </div>
      </div>

      {/* Category Bar / Navigation Links & Trust Badges */}
      <div className="border-t border-soft bg-cream/60 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          {/* Fast Category Links */}
          <div className="flex items-center gap-5 sm:gap-7 shrink-0 font-sans font-semibold tracking-wide text-stone-700 text-xs sm:text-sm">
            <button
              onClick={() => {
                setActiveCategory(null);
                onNavigateCategoryPage();
              }}
              className="hover:text-olive hover:scale-105 transition-all text-earth font-bold"
            >
              All Products
            </button>
            <button
              onClick={() => handleCategorySelect('Wood Pressed Oils')}
              className="hover:text-olive hover:scale-105 transition-all"
            >
              Wood Pressed Oils
            </button>
            <button
              onClick={() => handleCategorySelect('Spices')}
              className="hover:text-olive hover:scale-105 transition-all"
            >
              Spices
            </button>
            <button
              onClick={() => handleCategorySelect('Dry Fruits')}
              className="hover:text-olive hover:scale-105 transition-all"
            >
              Dry Fruits
            </button>
            <button
              onClick={() => handleCategorySelect('Health Foods')}
              className="hover:text-olive hover:scale-105 transition-all"
            >
              Health Foods
            </button>
            <button
              onClick={onNavigateCustomMasala}
              className="text-terracotta hover:text-amber-700 font-extrabold flex items-center gap-1.5 hover:scale-105 transition-all"
            >
              <Sparkles className="w-4 h-4" /> Custom Masala
            </button>
          </div>

          {/* Right Side Trust Badges / Promo Highlights */}
          <div className="hidden lg:flex items-center gap-5 text-xs font-bold text-olive border-l border-stone-200 pl-6 shrink-0">
            <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-full border border-stone-200/80 shadow-2xs">
              <span className="text-sm">🚚</span>
              <span>Free Delivery &gt; ₹499</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-full border border-stone-200/80 shadow-2xs">
              <span className="text-sm">⚡</span>
              <span>24h Dispatch</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-full border border-stone-200/80 shadow-2xs">
              <span className="text-sm">🌿</span>
              <span>100% Pure Organic</span>
            </div>
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
  );
};
