import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSlider } from './components/HeroSlider';
import { CategoryGrid } from './components/CategoryGrid';
import { WhatWentMissing } from './components/WhatWentMissing';
import { OurBeliefSection } from './components/OurBeliefSection';
import { DhaanyaRitualSection } from './components/DhaanyaRitualSection';
import { WhoWereForSection } from './components/WhoWereForSection';
import { WhyDhaanyaTrustSection } from './components/WhyDhaanyaTrustSection';
import { BestSellersCarousel } from './components/BestSellersCarousel';
import { RecommendedCarousel } from './components/RecommendedCarousel';
import { CustomMasalaBuilder } from './components/CustomMasalaBuilder';
import { CategoryPageView } from './components/CategoryPageView';
import { OurStoryPage } from './components/OurStoryPage';
import { FreshMillingPage } from './components/FreshMillingPage';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AuthModal } from './components/AuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { ProductQuickView } from './components/ProductQuickView';
import { ToastContainer } from './components/ToastContainer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AdminPanel } from './components/AdminPanel';
import { ServerConditionModal } from './components/ServerConditionModal';
import { BottomNav } from './components/BottomNav';
import { BrandSystemModal } from './components/BrandSystemModal';
import { PackagingQRModal } from './components/PackagingQRModal';
import { UnboxingExperienceModal } from './components/UnboxingExperienceModal';
import { ProductCategory, Product, Order } from './types';

const MainAppContent: React.FC = () => {
  const {
    user,
    isAdminMode,
    setIsAdminMode,
    isCartOpen,
    setIsCartOpen,
    isCheckoutOpen,
    setIsCheckoutOpen,
    isAuthModalOpen,
    setIsAuthModalOpen,
    isProfileOpen,
    setIsProfileOpen,
    quickViewProduct,
    setQuickViewProduct,
    isServerModalOpen,
    setIsServerModalOpen,
    setActiveCategory,
  } = useApp();

  const [currentPageView, setCurrentPageView] = useState<'home' | 'category' | 'our-story' | 'fresh-milling'>('home');
  const [isBrandSystemOpen, setIsBrandSystemOpen] = useState(false);
  const [inspectingProduct, setInspectingProduct] = useState<Product | null>(null);
  const [unboxingOrder, setUnboxingOrder] = useState<Order | null>(null);

  // Push history state entry whenever any modal overlay opens
  useEffect(() => {
    if (
      isCartOpen ||
      isCheckoutOpen ||
      isAuthModalOpen ||
      isProfileOpen ||
      quickViewProduct ||
      isAdminMode ||
      isServerModalOpen ||
      isBrandSystemOpen ||
      inspectingProduct ||
      unboxingOrder
    ) {
      window.history.pushState({ modal: true }, '');
    }
  }, [
    isCartOpen,
    isCheckoutOpen,
    isAuthModalOpen,
    isProfileOpen,
    quickViewProduct,
    isAdminMode,
    isServerModalOpen,
    isBrandSystemOpen,
    inspectingProduct,
    unboxingOrder,
  ]);

  // Handle Mobile Hardware / Browser Back Button (popstate event)
  useEffect(() => {
    const handlePopState = () => {
      // 1. Close open modals first
      if (unboxingOrder) {
        setUnboxingOrder(null);
        return;
      }
      if (inspectingProduct) {
        setInspectingProduct(null);
        return;
      }
      if (isBrandSystemOpen) {
        setIsBrandSystemOpen(false);
        return;
      }
      if (isCheckoutOpen) {
        setIsCheckoutOpen(false);
        return;
      }
      if (isCartOpen) {
        setIsCartOpen(false);
        return;
      }
      if (quickViewProduct) {
        setQuickViewProduct(null);
        return;
      }
      if (isAuthModalOpen) {
        setIsAuthModalOpen(false);
        return;
      }
      if (isProfileOpen) {
        setIsProfileOpen(false);
        return;
      }
      if (isServerModalOpen) {
        setIsServerModalOpen(false);
        return;
      }
      if (isAdminMode) {
        setIsAdminMode(false);
        return;
      }

      // 2. Handle page view navigation
      if (currentPageView !== 'home') {
        setActiveCategory(null);
        setCurrentPageView('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [
    isCartOpen,
    isCheckoutOpen,
    isAuthModalOpen,
    isProfileOpen,
    quickViewProduct,
    isAdminMode,
    isServerModalOpen,
    isBrandSystemOpen,
    inspectingProduct,
    unboxingOrder,
    currentPageView,
    setIsCartOpen,
    setIsCheckoutOpen,
    setIsAuthModalOpen,
    setIsProfileOpen,
    setQuickViewProduct,
    setIsServerModalOpen,
    setIsAdminMode,
    setActiveCategory,
  ]);

  const handleNavigateHome = () => {
    if (currentPageView !== 'home') {
      window.history.pushState({ view: 'home' }, '');
    }
    setActiveCategory(null);
    setCurrentPageView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateCustomMasala = () => {
    if (currentPageView !== 'home') {
      window.history.pushState({ view: 'home' }, '');
      setCurrentPageView('home');
    }
    setTimeout(() => {
      const el = document.getElementById('custom-masala-builder');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateCategoryPage = (cat?: ProductCategory) => {
    if (cat) setActiveCategory(cat);
    if (currentPageView !== 'category') {
      window.history.pushState({ view: 'category', cat }, '');
    }
    setCurrentPageView('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateOurStory = () => {
    if (currentPageView !== 'our-story') {
      window.history.pushState({ view: 'our-story' }, '');
    }
    setCurrentPageView('our-story');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateFreshMilling = () => {
    if (currentPageView !== 'fresh-milling') {
      window.history.pushState({ view: 'fresh-milling' }, '');
    }
    setCurrentPageView('fresh-milling');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isAdminMode && user?.role === 'admin') {
    return (
      <div className="min-h-screen bg-[#2A2620] font-sans antialiased text-[#F4ECD8] selection:bg-[#C89211] selection:text-[#2A2620]">
        <AdminPanel />
        <ToastContainer />
        <ServerConditionModal
          isOpen={isServerModalOpen}
          onClose={() => setIsServerModalOpen(false)}
        />
        <BrandSystemModal
          isOpen={isBrandSystemOpen}
          onClose={() => setIsBrandSystemOpen(false)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4ECD8] font-sans antialiased text-[#2A2620] selection:bg-[#3E4B32] selection:text-[#F4ECD8] flex flex-col justify-between pb-16 lg:pb-0">
      <div>
        <Header
          onNavigateHome={handleNavigateHome}
          onNavigateCustomMasala={handleNavigateCustomMasala}
          onNavigateCategoryPage={handleNavigateCategoryPage}
          onNavigateOurStory={handleNavigateOurStory}
          onNavigateFreshMilling={handleNavigateFreshMilling}
          onOpenBrandSystem={() => setIsBrandSystemOpen(true)}
        />

        {currentPageView === 'home' && (
          <main>
            <HeroSlider
              onNavigateCustomMasala={handleNavigateCustomMasala}
              onNavigateCategoryPage={handleNavigateCategoryPage}
              onNavigateFreshMilling={handleNavigateFreshMilling}
            />
            <CategoryGrid onSelectCategory={handleNavigateCategoryPage} />
            <WhatWentMissing />
            <OurBeliefSection />
            <DhaanyaRitualSection onNavigateCustomMasala={handleNavigateCustomMasala} />
            <CustomMasalaBuilder />
            <BestSellersCarousel />
            <WhoWereForSection />
            <WhyDhaanyaTrustSection />
            <RecommendedCarousel />
          </main>
        )}

        {currentPageView === 'category' && (
          <main>
            <CategoryPageView
              onNavigateHome={handleNavigateHome}
              onSelectCategory={handleNavigateCategoryPage}
              onNavigateCustomMasala={handleNavigateCustomMasala}
            />
          </main>
        )}

        {currentPageView === 'our-story' && (
          <main>
            <OurStoryPage
              onNavigateHome={handleNavigateHome}
              onNavigateCategoryPage={handleNavigateCategoryPage}
            />
          </main>
        )}

        {currentPageView === 'fresh-milling' && (
          <main>
            <FreshMillingPage
              onNavigateHome={handleNavigateHome}
              onNavigateCustomMasala={handleNavigateCustomMasala}
              onNavigateCategoryPage={handleNavigateCategoryPage}
            />
          </main>
        )}
      </div>

      <Footer
        onNavigateHome={handleNavigateHome}
        onNavigateCustomMasala={handleNavigateCustomMasala}
        onNavigateOurStory={handleNavigateOurStory}
        onNavigateFreshMilling={handleNavigateFreshMilling}
        onOpenBrandSystem={() => setIsBrandSystemOpen(true)}
      />

      {/* Mobile Fixed Bottom Navigation */}
      <BottomNav
        currentPageView={currentPageView}
        onNavigateHome={handleNavigateHome}
        onNavigateCategoryPage={handleNavigateCategoryPage}
        onNavigateCustomMasala={handleNavigateCustomMasala}
      />

      {/* Global Overlays */}
      <CartDrawer />
      <CheckoutModal onShowUnboxing={(order) => setUnboxingOrder(order)} />
      <AuthModal />
      <UserProfileModal />
      <ProductQuickView />
      <ServerConditionModal
        isOpen={isServerModalOpen}
        onClose={() => setIsServerModalOpen(false)}
      />

      {/* 360 Brand Experience Modals */}
      <BrandSystemModal
        isOpen={isBrandSystemOpen}
        onClose={() => setIsBrandSystemOpen(false)}
      />
      <PackagingQRModal
        product={inspectingProduct}
        isOpen={!!inspectingProduct}
        onClose={() => setInspectingProduct(null)}
        onNavigateCustomMasala={handleNavigateCustomMasala}
      />
      <UnboxingExperienceModal
        order={unboxingOrder}
        isOpen={!!unboxingOrder}
        onClose={() => setUnboxingOrder(null)}
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
