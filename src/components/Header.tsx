import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShoppingBag,
  User as UserIcon,
  Search,
  Sparkles,
  Menu,
  X,
  ShieldAlert,
  Flame,
  ChevronRight,
  Sparkle,
} from 'lucide-react';
import { DhaanyaLogo } from './DhaanyaLogo';
import { SearchOverlay } from './SearchOverlay';
import { ProductCategory } from '../types';

interface HeaderProps {
  onNavigateHome: () => void;
  onNavigateCustomMasala: () => void;
  onNavigateCategoryPage: (category?: ProductCategory) => void;
  onNavigateOurStory?: () => void;
  onNavigateFreshMilling?: () => void;
  onOpenBrandSystem?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateHome,
  onNavigateCustomMasala,
  onNavigateCategoryPage,
  onNavigateOurStory,
  onNavigateFreshMilling,
  onOpenBrandSystem,
}) => {
  const {
    coupons,
    cart,
    user,
    setIsCartOpen,
    setIsAuthModalOpen,
    setIsProfileOpen,
    isAdminMode,
    setIsAdminMode,
    setIsServerModalOpen,
    showToast,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const cartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const activeTopCoupon = useMemo(() => {
    return (
      (coupons || []).find((c) => c.isActive !== false && c.isFeatured) ||
      (coupons || []).find((c) => c.isActive !== false) ||
      null
    );
  }, [coupons]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    showToast(`Coupon code ${code} copied to clipboard!`, 'success');
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Announcement Ticker Bar */}
        <div className="bg-[#2A2620] text-[#F4ECD8] py-2 px-4 text-xs font-medium border-b border-[#C89211]/30">
          <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-4 text-[#F4ECD8]/90">
              <span className="flex items-center gap-1.5 text-[#E8B93E]">
                <Sparkle className="w-3.5 h-3.5 fill-[#E8B93E]" />
                Freshly milled before you and for you
              </span>
              <span className="text-[#F4ECD8]/40">•</span>
              <span>100% Pure Whole Grains & Cold-Pressed Oils</span>
            </div>

            <div className="w-full md:w-auto text-center md:text-right flex items-center justify-between md:justify-end gap-3">
              {activeTopCoupon && (
                <button
                  onClick={() => handleCopyCoupon(activeTopCoupon.code)}
                  className="inline-flex items-center gap-1.5 bg-[#C89211]/20 hover:bg-[#C89211]/30 text-[#E8B93E] px-2.5 py-0.5 rounded border border-[#C89211]/40 transition-colors cursor-pointer"
                >
                  <Flame className="w-3 h-3 text-[#E8B93E] animate-pulse" />
                  <span>Use <strong>{activeTopCoupon.code}</strong> for {activeTopCoupon.discountPercent}% OFF</span>
                </button>
              )}

              <button
                onClick={() => setIsServerModalOpen(true)}
                className="hidden lg:flex items-center gap-1 text-[11px] text-[#F4ECD8]/70 hover:text-[#E8B93E] transition-colors ml-2 cursor-pointer"
              >
                <ShieldAlert className="w-3 h-3 text-[#E8B93E]" />
                <span>System Status</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#F4ECD8]/95 backdrop-blur-md shadow-sm border-b border-[#2A2620]/10'
              : 'bg-[#F4ECD8] border-b border-[#2A2620]/10'
          }`}
        >
          <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 overflow-x-hidden">
            {/* LEFT: Logo & Mobile Hamburger Trigger */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#2A2620] hover:text-[#3E4B32] transition-colors xl:hidden cursor-pointer"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <DhaanyaLogo
                variant="compact"
                size="md"
                onClick={() => {
                  onNavigateHome();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>

            {/* CENTER: Main Navigation Links (Visible on XL Desktop screens 1280px+) */}
            <div className="hidden xl:flex items-center justify-center gap-3.5 2xl:gap-6 whitespace-nowrap flex-1 px-2 min-w-0">
              <button
                onClick={onNavigateHome}
                className="font-sans text-xs 2xl:text-sm font-semibold text-[#2A2620] hover:text-[#A9542B] transition-colors uppercase tracking-wider whitespace-nowrap cursor-pointer"
              >
                Home
              </button>

              <button
                onClick={() => onNavigateCategoryPage()}
                className="font-sans text-xs 2xl:text-sm font-semibold text-[#2A2620] hover:text-[#A9542B] transition-colors uppercase tracking-wider whitespace-nowrap cursor-pointer"
              >
                Shop All
              </button>

              <button
                onClick={() => onNavigateCategoryPage('Flour')}
                className="font-sans text-xs 2xl:text-sm font-semibold text-[#2A2620] hover:text-[#A9542B] transition-colors uppercase tracking-wider whitespace-nowrap cursor-pointer"
              >
                Flours
              </button>

              <button
                onClick={() => onNavigateCategoryPage('Spices')}
                className="font-sans text-xs 2xl:text-sm font-semibold text-[#2A2620] hover:text-[#A9542B] transition-colors uppercase tracking-wider whitespace-nowrap cursor-pointer"
              >
                Spices
              </button>

              <button
                onClick={() => onNavigateCategoryPage('Wood Pressed Oils')}
                className="font-sans text-xs 2xl:text-sm font-semibold text-[#2A2620] hover:text-[#A9542B] transition-colors uppercase tracking-wider whitespace-nowrap cursor-pointer"
              >
                Oils
              </button>

              {/* Custom Masala (Featured Highlight Pill) */}
              <button
                onClick={onNavigateCustomMasala}
                className="font-sans text-xs font-semibold text-[#3E4B32] hover:text-[#C89211] transition-all uppercase tracking-wider flex items-center gap-1.5 bg-[#3E4B32]/10 hover:bg-[#3E4B32]/18 h-9 px-3.5 rounded-full border border-[#3E4B32]/25 shadow-2xs whitespace-nowrap cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C89211]" />
                <span>✦ Custom Masala</span>
              </button>

              {/* Fresh Milling (Accent Color Destination) */}
              <button
                onClick={onNavigateFreshMilling}
                className="font-sans text-xs 2xl:text-sm font-bold text-[#A9542B] hover:text-[#C89211] transition-colors uppercase tracking-wider whitespace-nowrap cursor-pointer"
              >
                Fresh Milling
              </button>

              <button
                onClick={onNavigateOurStory}
                className="font-sans text-xs 2xl:text-sm font-semibold text-[#2A2620] hover:text-[#A9542B] transition-colors uppercase tracking-wider whitespace-nowrap cursor-pointer"
              >
                Our Story
              </button>
            </div>

            {/* RIGHT: Utility Action Group */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 ml-auto">
              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full text-[#2A2620] hover:text-[#3E4B32] hover:bg-[#2A2620]/8 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                title="Search Dhaanya Pantry"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* 360° Brand System Compact Utility Button (Visible on sm 640px and up) */}
              {onOpenBrandSystem && (
                <button
                  onClick={onOpenBrandSystem}
                  className="hidden sm:flex h-8.5 sm:h-9 px-2.5 sm:px-3 rounded-lg bg-[#C89211]/12 hover:bg-[#C89211]/22 text-[#C89211] font-semibold text-[11px] sm:text-xs border border-[#C89211]/35 items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0"
                  title="360° Brand System Guidelines"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C89211]" />
                  <span className="hidden 2xl:inline">360° BRAND SYSTEM</span>
                  <span className="inline 2xl:hidden">360° BRAND</span>
                </button>
              )}

              {/* Admin Toggle Button (Visible on md 768px and up) */}
              {user?.role === 'admin' && (
                <button
                  onClick={() => setIsAdminMode(!isAdminMode)}
                  className={`hidden md:flex h-8.5 sm:h-9 px-3 sm:px-3.5 text-xs font-semibold rounded-full border transition-all whitespace-nowrap items-center justify-center cursor-pointer shrink-0 ${
                    isAdminMode
                      ? 'bg-[#A9542B] text-white border-[#A9542B] shadow-2xs'
                      : 'bg-[#2A2620] text-[#E8B93E] border-[#C89211]/50 hover:bg-black'
                  }`}
                >
                  {isAdminMode ? 'Exit Admin' : 'Admin Panel'}
                </button>
              )}

              {/* Account / User Button */}
              {user ? (
                <button
                  onClick={() => setIsProfileOpen(true)}
                  className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full bg-[#3E4B32] text-[#F4ECD8] flex items-center justify-center font-bold text-xs uppercase shadow-2xs hover:scale-105 transition-transform cursor-pointer shrink-0"
                  title={user.name}
                >
                  {user.name.charAt(0)}
                </button>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full bg-[#2A2620]/5 hover:bg-[#2A2620]/10 text-[#2A2620] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  title="Sign In / Register"
                >
                  <UserIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative w-8.5 h-8.5 sm:w-10 sm:h-10 bg-[#3E4B32] hover:bg-[#2A2620] text-[#F4ECD8] rounded-full flex items-center justify-center transition-all shadow-2xs cursor-pointer shrink-0"
                aria-label="View Cart"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C89211] text-[#2A2620] text-[10px] font-extrabold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border-2 border-[#F4ECD8] shadow-2xs">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Dynamic Search Modal */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCategory={onNavigateCategoryPage}
      />

      {/* Mobile & Tablet Side Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative w-4/5 max-w-sm bg-[#F4ECD8] h-full shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#2A2620]/10">
                <DhaanyaLogo
                  variant="compact"
                  size="md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateHome();
                  }}
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#2A2620] hover:text-[#A9542B] cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateHome();
                  }}
                  className="text-left font-serif text-lg font-medium text-[#2A2620] hover:text-[#A9542B] py-2 border-b border-[#2A2620]/5 flex items-center justify-between cursor-pointer"
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-[#A9542B]" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateCategoryPage();
                  }}
                  className="text-left font-serif text-lg font-medium text-[#2A2620] hover:text-[#A9542B] py-2 border-b border-[#2A2620]/5 flex items-center justify-between cursor-pointer"
                >
                  <span>Shop All Products</span>
                  <ChevronRight className="w-4 h-4 text-[#A9542B]" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateCategoryPage('Flour');
                  }}
                  className="text-left font-serif text-lg font-medium text-[#2A2620] hover:text-[#A9542B] py-2 border-b border-[#2A2620]/5 flex items-center justify-between cursor-pointer"
                >
                  <span>Fresh Flours</span>
                  <ChevronRight className="w-4 h-4 text-[#A9542B]" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateCategoryPage('Spices');
                  }}
                  className="text-left font-serif text-lg font-medium text-[#2A2620] hover:text-[#A9542B] py-2 border-b border-[#2A2620]/5 flex items-center justify-between cursor-pointer"
                >
                  <span>Ground Spices</span>
                  <ChevronRight className="w-4 h-4 text-[#A9542B]" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateCategoryPage('Wood Pressed Oils');
                  }}
                  className="text-left font-serif text-lg font-medium text-[#2A2620] hover:text-[#A9542B] py-2 border-b border-[#2A2620]/5 flex items-center justify-between cursor-pointer"
                >
                  <span>Cold Pressed Oils</span>
                  <ChevronRight className="w-4 h-4 text-[#A9542B]" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateCustomMasala();
                  }}
                  className="text-left font-serif text-lg font-medium text-[#3E4B32] py-2 border-b border-[#2A2620]/5 flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C89211]" />
                    Custom Masala Blend
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#C89211]" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onNavigateFreshMilling) onNavigateFreshMilling();
                  }}
                  className="text-left font-serif text-lg font-medium text-[#A9542B] py-2 border-b border-[#2A2620]/5 flex items-center justify-between cursor-pointer"
                >
                  <span>Fresh Milling Ritual</span>
                  <ChevronRight className="w-4 h-4 text-[#A9542B]" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onNavigateOurStory) onNavigateOurStory();
                  }}
                  className="text-left font-serif text-lg font-medium text-[#2A2620] hover:text-[#A9542B] py-2 border-b border-[#2A2620]/5 flex items-center justify-between cursor-pointer"
                >
                  <span>Our Story</span>
                  <ChevronRight className="w-4 h-4 text-[#A9542B]" />
                </button>

                {onOpenBrandSystem && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBrandSystem();
                    }}
                    className="text-left font-serif text-lg font-medium text-[#C89211] py-2 flex items-center justify-between cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#C89211]" />
                      360° Brand System
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#C89211]" />
                  </button>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-[#2A2620]/10 text-center">
              <p className="font-kannada text-[#A9542B] text-sm font-semibold">
                ಧಾನ್ಯ — Rooted in tradition
              </p>
              <p className="text-xs text-[#2A2620]/60 mt-1">
                Freshly milled before you and for you
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

