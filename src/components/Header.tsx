import React, { useState } from 'react';
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
    cart,
    wishlist,
    user,
    setIsCartOpen,
    setIsAuthModalOpen,
    setIsProfileOpen,
    isAdminMode,
    setIsAdminMode,
    searchQuery,
    setSearchQuery,
    setActiveCategory,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleCategorySelect = (category: ProductCategory) => {
    setActiveCategory(category);
    onNavigateCategoryPage(category);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-soft text-earth shadow-sm">
      {/* Top Banner Ticker */}
      <div className="bg-olive text-white text-xs sm:text-sm font-medium py-2 px-4 text-center overflow-hidden border-b border-black/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-2 text-white/90">
            <Leaf className="w-4 h-4 text-white" />
            <span>100% Traditional Wooden Ghani & Fresh Ground Spices</span>
          </div>
          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <span className="bg-terracotta text-white px-2.5 py-0.5 rounded text-xs uppercase tracking-wider font-extrabold shadow-xs">
              LIMITED FESTIVE OFFER
            </span>
            <span>Use Coupon <strong className="bg-white/20 px-1.5 py-0.5 rounded font-mono text-amber-200">FESTIVE25</strong> for 25% OFF | Free Shipping above ₹499!</span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-white/90 text-xs sm:text-sm">
            <a
              href="https://wa.me/919008625716?text=Hi%20Dhaanya,%20I%20have%20a%20query"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-200 flex items-center gap-1.5 transition font-semibold"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white" /> WhatsApp Support
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

        {/* Center: Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
          <div className="relative w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value.trim().length > 0) {
                  onNavigateCategoryPage();
                }
              }}
              placeholder="Search wood pressed oils, dry fruits, spices, seeds..."
              className="w-full bg-cream border border-stone-200 text-earth text-xs sm:text-sm rounded-full pl-9 pr-4 py-2.5 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition placeholder:text-stone-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>
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

          {/* User Profile / Auth */}
          <button
            onClick={() => (user ? setIsProfileOpen(true) : setIsAuthModalOpen(true))}
            className="flex items-center gap-2 text-stone-700 hover:text-olive p-2 rounded-full hover:bg-cream transition"
            title={user ? `Profile: ${user.name}` : 'Login / Signup'}
          >
            <div className="w-7 h-7 rounded-full bg-cream border border-stone-200 flex items-center justify-center text-olive text-xs font-bold">
              {user ? user.name.charAt(0).toUpperCase() : <UserIcon className="w-4 h-4" />}
            </div>
            {user && <span className="hidden lg:inline text-xs font-medium max-w-[100px] truncate">{user.name}</span>}
          </button>

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
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                onNavigateCategoryPage();
              }}
              placeholder="Search products & spices..."
              className="w-full bg-cream border border-stone-200 text-earth text-xs rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:border-olive"
            />
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
