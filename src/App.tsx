import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSlider } from './components/HeroSlider';
import { CategoryBanner } from './components/CategoryBanner';
import { WhyDhaanyaTrustSection } from './components/WhyDhaanyaTrustSection';
import { BestSellersCarousel } from './components/BestSellersCarousel';
import { RecommendedCarousel } from './components/RecommendedCarousel';
import { CustomMasalaBuilder } from './components/CustomMasalaBuilder';
import { CategoryPageView } from './components/CategoryPageView';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AuthModal } from './components/AuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { ToastContainer } from './components/ToastContainer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ServerConditionModal } from './components/ServerConditionModal';
import { BottomNav } from './components/BottomNav';
import { ProductCategory, Product } from './types';

// Pages and overlays that are not needed for the first paint load as separate chunks.
const OurStoryPage = lazy(() => import('./components/OurStoryPage').then((m) => ({ default: m.OurStoryPage })));
const FreshMillingPage = lazy(() => import('./components/FreshMillingPage').then((m) => ({ default: m.FreshMillingPage })));
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const RefundPolicyPage = lazy(() => import('./components/RefundPolicyPage').then((m) => ({ default: m.RefundPolicyPage })));
const ProductQuickView = lazy(() => import('./components/ProductQuickView').then((m) => ({ default: m.ProductQuickView })));
const AdminPanel = lazy(() => import('./components/AdminPanel').then((m) => ({ default: m.AdminPanel })));
const BrandSystemModal = lazy(() => import('./components/BrandSystemModal').then((m) => ({ default: m.BrandSystemModal })));
const PackagingQRModal = lazy(() => import('./components/PackagingQRModal').then((m) => ({ default: m.PackagingQRModal })));

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

  const [currentPageView, setCurrentPageView] = useState<
    'home' | 'category' | 'our-story' | 'fresh-milling' | 'privacy-policy' | 'refund-policy'
  >('home');
  const [isBrandSystemOpen, setIsBrandSystemOpen] = useState(false);
  const [inspectingProduct, setInspectingProduct] = useState<Product | null>(null);

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
      inspectingProduct
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
  ]);

  // Handle Mobile Hardware / Browser Back Button (popstate event)
  useEffect(() => {
    const handlePopState = () => {
      // 1. Close open modals first
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

  const handleNavigateOurProducts = () => {
    setActiveCategory(null);
    if (currentPageView !== 'home') {
      window.history.pushState({ view: 'home' }, '');
      setCurrentPageView('home');
    }
    setTimeout(() => {
      document.getElementById('our-products')?.scrollIntoView({ behavior: 'smooth' });
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

  const handleNavigatePrivacyPolicy = () => {
    if (currentPageView !== 'privacy-policy') {
      window.history.pushState({ view: 'privacy-policy' }, '');
    }
    setCurrentPageView('privacy-policy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateRefundPolicy = () => {
    if (currentPageView !== 'refund-policy') {
      window.history.pushState({ view: 'refund-policy' }, '');
    }
    setCurrentPageView('refund-policy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isAdminMode && user?.role === 'admin') {
    return (
      <div className="min-h-screen bg-[#2A2620] font-sans antialiased text-[#F4ECD8] selection:bg-[#C89211] selection:text-[#2A2620]">
        <Suspense fallback={null}>
          <AdminPanel />
        </Suspense>
        <ToastContainer />
        <ServerConditionModal
          isOpen={isServerModalOpen}
          onClose={() => setIsServerModalOpen(false)}
        />
        <Suspense fallback={null}>
          <BrandSystemModal
            isOpen={isBrandSystemOpen}
            onClose={() => setIsBrandSystemOpen(false)}
          />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4ECD8] font-sans antialiased text-[#2A2620] selection:bg-[#3E4B32] selection:text-[#F4ECD8] flex flex-col justify-between pb-[calc(4rem+env(safe-area-inset-bottom))] lg:pb-0">
      <div>
        <Header
          onNavigateHome={handleNavigateHome}
          onNavigateCustomMasala={handleNavigateCustomMasala}
          onNavigateCategoryPage={handleNavigateCategoryPage}
          onNavigateOurStory={handleNavigateOurStory}
          onNavigateFreshMilling={handleNavigateFreshMilling}
          onOpenBrandSystem={() => setIsBrandSystemOpen(true)}
        />

        <Suspense fallback={<div className="min-h-[60vh]" />}>
        {currentPageView === 'home' && (
          <main>
            <HeroSlider
              onNavigateCustomMasala={handleNavigateCustomMasala}
              onNavigateCategoryPage={handleNavigateCategoryPage}
              onNavigateFreshMilling={handleNavigateFreshMilling}
            />
            <CategoryBanner onSelectCategory={handleNavigateCategoryPage} />
            <CustomMasalaBuilder />
            <BestSellersCarousel />
            <WhyDhaanyaTrustSection />
            <RecommendedCarousel />
          </main>
        )}

        {currentPageView === 'category' && (
          <main>
            <CategoryPageView
              onNavigateHome={handleNavigateHome}
              onNavigateOurProducts={handleNavigateOurProducts}
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

        {currentPageView === 'privacy-policy' && (
          <main>
            <PrivacyPolicyPage onNavigateHome={handleNavigateHome} />
          </main>
        )}

        {currentPageView === 'refund-policy' && (
          <main>
            <RefundPolicyPage onNavigateHome={handleNavigateHome} />
          </main>
        )}
        </Suspense>
      </div>

      <Footer
        onNavigateHome={handleNavigateHome}
        onNavigateCustomMasala={handleNavigateCustomMasala}
        onNavigateOurStory={handleNavigateOurStory}
        onNavigateFreshMilling={handleNavigateFreshMilling}
        onNavigatePrivacyPolicy={handleNavigatePrivacyPolicy}
        onNavigateRefundPolicy={handleNavigateRefundPolicy}
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
      <CheckoutModal />
      <AuthModal />
      <UserProfileModal />
      <Suspense fallback={null}>
        <ProductQuickView />
      </Suspense>
      <ServerConditionModal
        isOpen={isServerModalOpen}
        onClose={() => setIsServerModalOpen(false)}
      />

      {/* 360 Brand Experience Modals */}
      <Suspense fallback={null}>
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
      </Suspense>
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
