import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSlider } from './components/HeroSlider';
import { CategoryGrid } from './components/CategoryGrid';
import { BestSellersCarousel } from './components/BestSellersCarousel';
import { RecommendedCarousel } from './components/RecommendedCarousel';
import { ShopByConcern } from './components/ShopByConcern';
import { CustomMasalaBuilder } from './components/CustomMasalaBuilder';
import { CategoryPageView } from './components/CategoryPageView';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AuthModal } from './components/AuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { ProductQuickView } from './components/ProductQuickView';
import { ToastContainer } from './components/ToastContainer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AdminPanel } from './components/AdminPanel';
import { ServerConditionModal } from './components/ServerConditionModal';
import { ProductCategory } from './types';

const MainAppContent: React.FC = () => {
  const { isAdminMode, setActiveCategory, isServerModalOpen, setIsServerModalOpen } = useApp();
  const [currentPageView, setCurrentPageView] = useState<'home' | 'category'>('home');

  const handleNavigateHome = () => {
    setActiveCategory(null);
    setCurrentPageView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateCustomMasala = () => {
    setCurrentPageView('home');
    setTimeout(() => {
      const el = document.getElementById('custom-masala-builder');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateCategoryPage = (cat?: ProductCategory) => {
    if (cat) setActiveCategory(cat);
    setCurrentPageView('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isAdminMode) {
    return (
      <div className="min-h-screen bg-stone-900 font-sans antialiased text-stone-100 selection:bg-amber-500 selection:text-stone-950">
        <AdminPanel />
        <ToastContainer />
        <ServerConditionModal
          isOpen={isServerModalOpen}
          onClose={() => setIsServerModalOpen(false)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper font-sans antialiased text-earth selection:bg-olive selection:text-white flex flex-col justify-between">
      <div>
        <Header
          onNavigateHome={handleNavigateHome}
          onNavigateCustomMasala={handleNavigateCustomMasala}
          onNavigateCategoryPage={handleNavigateCategoryPage}
        />

        {currentPageView === 'home' ? (
          <main>
            <HeroSlider
              onNavigateCustomMasala={handleNavigateCustomMasala}
              onNavigateCategoryPage={handleNavigateCategoryPage}
            />
            <CategoryGrid onSelectCategory={handleNavigateCategoryPage} />
            <CustomMasalaBuilder />
            <BestSellersCarousel />
            <ShopByConcern />
            <RecommendedCarousel />
          </main>
        ) : (
          <main>
            <CategoryPageView
              onNavigateHome={handleNavigateHome}
              onSelectCategory={handleNavigateCategoryPage}
            />
          </main>
        )}
      </div>

      <Footer
        onNavigateHome={handleNavigateHome}
        onNavigateCustomMasala={handleNavigateCustomMasala}
      />

      {/* Global Overlays */}
      <CartDrawer />
      <CheckoutModal />
      <AuthModal />
      <UserProfileModal />
      <ProductQuickView />
      <ServerConditionModal
        isOpen={isServerModalOpen}
        onClose={() => setIsServerModalOpen(false)}
      />
      <ToastContainer />
      <WhatsAppButton />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
