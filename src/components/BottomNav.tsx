import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Home,
  Grid,
  Sparkles,
  ShoppingBag,
  User as UserIcon,
} from 'lucide-react';

interface BottomNavProps {
  currentPageView: 'home' | 'category' | 'our-story' | 'fresh-milling' | 'privacy-policy' | 'refund-policy';
  onNavigateHome: () => void;
  onNavigateCategoryPage: () => void;
  onNavigateCustomMasala: () => void;
}

const ACTIVE_COLOR = 'text-[#E8B93E]';
const INACTIVE_COLOR = 'text-[#8FA07E]';

export const BottomNav: React.FC<BottomNavProps> = ({
  currentPageView,
  onNavigateHome,
  onNavigateCategoryPage,
  onNavigateCustomMasala,
}) => {
  const { cart, user, setIsCartOpen, setIsAuthModalOpen, setIsProfileOpen } = useApp();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleProfileClick = () => {
    if (user) {
      setIsProfileOpen(true);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const isHome = currentPageView === 'home';
  const isCategory = currentPageView === 'category';

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#2A2620] border-t border-[#C89211]/30 shadow-2xl backdrop-blur-md bg-opacity-95"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-stretch justify-between max-w-md mx-auto h-16 px-1">
        {/* Home */}
        <button
          onClick={onNavigateHome}
          className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors ${
            isHome ? ACTIVE_COLOR : INACTIVE_COLOR
          }`}
        >
          <Home className="w-6 h-6" />
          <span className={`text-[11px] leading-none tracking-tight ${isHome ? 'font-bold' : 'font-medium'}`}>
            Home
          </span>
        </button>

        {/* Categories / Shop */}
        <button
          onClick={onNavigateCategoryPage}
          className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors ${
            isCategory ? ACTIVE_COLOR : INACTIVE_COLOR
          }`}
        >
          <Grid className="w-6 h-6" />
          <span className={`text-[11px] leading-none tracking-tight ${isCategory ? 'font-bold' : 'font-medium'}`}>
            Categories
          </span>
        </button>

        {/* Custom Masala */}
        <button
          onClick={onNavigateCustomMasala}
          className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors ${ACTIVE_COLOR}`}
        >
          <Sparkles className="w-6 h-6" />
          <span className="text-[11px] font-bold leading-none tracking-tight">Blend</span>
        </button>

        {/* Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors ${INACTIVE_COLOR}`}
        >
          <div className="relative">
            <ShoppingBag className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#C89211] text-[#2A2620] text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border border-[#2A2620]">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[11px] font-medium leading-none tracking-tight">Cart</span>
        </button>

        {/* Profile / Account */}
        <button
          onClick={handleProfileClick}
          className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors ${INACTIVE_COLOR}`}
        >
          {user ? (
            <div className="w-6 h-6 rounded-full bg-[#3E4B32] text-[#F4ECD8] flex items-center justify-center text-[10px] font-bold border border-[#E8B93E]/40">
              {user.name.charAt(0).toUpperCase()}
            </div>
          ) : (
            <UserIcon className="w-6 h-6" />
          )}
          <span className="text-[11px] font-medium leading-none tracking-tight">
            {user ? 'Account' : 'Login'}
          </span>
        </button>
      </div>
    </nav>
  );
};
