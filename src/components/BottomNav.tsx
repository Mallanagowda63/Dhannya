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
  currentPageView: 'home' | 'category' | 'our-story' | 'fresh-milling';
  onNavigateHome: () => void;
  onNavigateCategoryPage: () => void;
  onNavigateCustomMasala: () => void;
}

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

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#2A2620] text-[#F4ECD8] border-t border-[#C89211]/30 shadow-2xl px-2 py-1.5 backdrop-blur-md bg-opacity-95">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <button
          onClick={onNavigateHome}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors ${
            currentPageView === 'home'
              ? 'text-[#E8B93E] font-bold'
              : 'text-[#F4ECD8]/70 hover:text-[#F4ECD8]'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Home</span>
        </button>

        {/* Categories / Shop */}
        <button
          onClick={onNavigateCategoryPage}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors ${
            currentPageView === 'category'
              ? 'text-[#E8B93E] font-bold'
              : 'text-[#F4ECD8]/70 hover:text-[#F4ECD8]'
          }`}
        >
          <Grid className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-medium tracking-tight">Categories</span>
        </button>

        {/* Custom Masala */}
        <button
          onClick={onNavigateCustomMasala}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors text-[#E8B93E] hover:text-[#F4ECD8] relative"
        >
          <div className="w-6 h-6 rounded-full bg-[#C89211]/20 border border-[#C89211]/50 flex items-center justify-center mb-0.5 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-[#E8B93E]" />
          </div>
          <span className="text-[10px] font-bold tracking-tight text-[#E8B93E]">Blend</span>
        </button>

        {/* Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors text-[#F4ECD8]/70 hover:text-[#F4ECD8] relative"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 mb-0.5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#C89211] text-[#2A2620] text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border border-[#2A2620]">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium tracking-tight">Cart</span>
        </button>

        {/* Profile / Account */}
        <button
          onClick={handleProfileClick}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-colors text-[#F4ECD8]/70 hover:text-[#F4ECD8]"
        >
          {user ? (
            <div className="w-5 h-5 rounded-full bg-[#3E4B32] text-[#F4ECD8] flex items-center justify-center text-[10px] font-bold mb-0.5 border border-[#E8B93E]/40">
              {user.name.charAt(0).toUpperCase()}
            </div>
          ) : (
            <UserIcon className="w-5 h-5 mb-0.5" />
          )}
          <span className="text-[10px] font-medium tracking-tight">
            {user ? 'Account' : 'Login'}
          </span>
        </button>
      </div>
    </div>
  );
};
