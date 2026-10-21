import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { Product } from '../types';
import { PRODUCT_DETAILS } from '../data/productDetails';
import {
  ShoppingBag,
  Heart,
  CheckCircle2,
  ShieldCheck,
  Plus,
  Minus,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Leaf,
  Mountain,
  MessageCircle,
  Sprout,
  Factory,
  ScanEye,
  HeartHandshake,
  Utensils,
} from 'lucide-react';
import { defaultVariantIndex, hasWeightLabel, showsAllSizes } from '../utils/variant';

export const ProductQuickView: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setIsCartOpen,
    setIsCheckoutOpen,
    products,
  } = useApp();

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'nutrition' | 'preparation' | 'benefits'>('description');

  // Keep the view pinned exactly under the site header, and stop the page behind from
  // scrolling / rubber-banding (touchpad overscroll) while the product is open.
  const [headerBottom, setHeaderBottom] = useState<number | null>(null);
  // Open each product on its default size (250g except for oils and flours).
  useEffect(() => {
    if (quickViewProduct) setSelectedVariantIndex(defaultVariantIndex(quickViewProduct));
  }, [quickViewProduct?.id]);

  useEffect(() => {
    if (!quickViewProduct) return;
    const html = document.documentElement;
    const prevOverscroll = html.style.overscrollBehavior;
    html.style.overscrollBehavior = 'none';
    const measure = () => {
      const hdr = document.querySelector('header');
      setHeaderBottom(hdr ? Math.max(0, Math.round(hdr.getBoundingClientRect().bottom)) : null);
    };
    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      html.style.overscrollBehavior = prevOverscroll;
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const selectedVariant = quickViewProduct.variants[selectedVariantIndex] || quickViewProduct.variants[0];
  const images = quickViewProduct.gallery && quickViewProduct.gallery.length > 0
    ? quickViewProduct.gallery
    : [quickViewProduct.image];
  const currentImage = images[selectedImageIndex] || quickViewProduct.image;
  const isOutOfStock = !selectedVariant.inStock || quickViewProduct.stock === 0;
  const showWeightPicker = quickViewProduct.variants.some((v) => hasWeightLabel(v.weight));
  const isWishlisted = isInWishlist(quickViewProduct.id);

  const discountPercent = selectedVariant.originalPrice > selectedVariant.price
    ? Math.round(((selectedVariant.originalPrice - selectedVariant.price) / selectedVariant.originalPrice) * 100)
    : 0;

  const sameCategory = (products || []).filter(
    (p) => p.id !== quickViewProduct.id && p.category === quickViewProduct.category
  );
  const fallback = (products || []).filter((p) => p.id !== quickViewProduct.id);
  const recommendedProducts = (sameCategory.length > 0 ? sameCategory : fallback).slice(0, 6);

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    addToCart(quickViewProduct, selectedVariant.weight, quantity);
  };

  const handleBuyNow = () => {
    if (isOutOfStock) return;
    addToCart(quickViewProduct, selectedVariant.weight, quantity);
    setQuickViewProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleSwitchProduct = (product: Product) => {
    setQuickViewProduct(product);
    setSelectedVariantIndex(defaultVariantIndex(product));
    setSelectedImageIndex(0);
    setQuantity(1);
    setActiveTab('description');
  };

  const detail = PRODUCT_DETAILS[quickViewProduct.name];
  const facts = quickViewProduct.interestingFacts ?? detail?.facts ?? [];
  // Text edited in the admin panel takes priority over the write-up built into the site.
  const edited = !!quickViewProduct.contentEdited;
  const aboutText = (edited && quickViewProduct.description) || detail?.about || quickViewProduct.description;
  const whyList = (edited && quickViewProduct.benefits?.length ? quickViewProduct.benefits : detail?.why) || quickViewProduct.benefits;
  const whyTitle = edited ? undefined : detail?.whyTitle;

  // "Label: text" -> bold label followed by the text
  const renderLabelled = (text: string, sep: string, suffix = ':') => {
    const k = text.indexOf(sep);
    if (k <= 0 || k > 60) return text;
    return (
      <>
        <strong className="font-bold text-[#2A2620]">{text.slice(0, k)}{suffix}</strong> {text.slice(k + sep.length)}
      </>
    );
  };

  const trustBadges = [
    { icon: Sprout, label: 'Traditional Roots' },
    { icon: Factory, label: 'Freshness First' },
    { icon: ScanEye, label: 'Honest Food' },
    { icon: HeartHandshake, label: 'Local Roots' },
    { icon: Utensils, label: 'Everyday Nourishment' },
  ];

  const TrustBadgeBar = () => (
    <div className="flex sm:grid sm:grid-cols-5 overflow-x-auto no-scrollbar snap-x rounded-2xl bg-white/70 shadow-sm px-1 py-3.5">
      {trustBadges.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="shrink-0 w-[76px] sm:w-auto sm:min-w-0 snap-start flex flex-col items-center justify-start gap-1.5 px-1 text-center"
        >
          <Icon className="w-5 h-5 text-[#2A2620]/75 shrink-0" strokeWidth={1.75} />
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#2A2620] leading-tight">
            {label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[45] overflow-y-auto md:overflow-hidden overscroll-contain bg-[#F4ECD8] animate-fade-in"
      style={{ top: headerBottom !== null ? `${headerBottom}px` : 'var(--site-header-height, 0px)' }}
    >
      {/* Black back button, pinned top-left while the view scrolls */}
      <div className="sticky top-0 z-30 h-0 max-w-[1440px] mx-auto">
        <button
          onClick={() => setQuickViewProduct(null)}
          className="group absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 pl-3 pr-4 py-2 rounded-full bg-[#2A2620] text-[#F4ECD8] text-sm font-bold shadow-lg hover:bg-black transition-colors cursor-pointer"
          aria-label="Back"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back</span>
        </button>
      </div>
      <div
        className="relative text-[#2A2620] w-full max-w-[1440px] mx-auto flex flex-col md:flex-row md:h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Column: Product Gallery */}
        <div
          className="md:w-1/2 p-4 pt-16 sm:p-6 sm:pt-[4.5rem] md:p-8 md:pt-[4.5rem] flex flex-col md:overflow-y-auto no-scrollbar"
          style={{
            backgroundColor: '#F8F3E6',
            backgroundImage: 'radial-gradient(rgba(42,38,32,0.05) 1px, transparent 0)',
            backgroundSize: '18px 18px',
          }}
        >
          {/* Gallery: main image; thumbnail row below it on mobile only (desktop shows sub-images stacked further down) */}
          <div className="flex flex-col-reverse gap-3 mb-6">
          {images.length > 1 && (
            <div className="flex md:hidden gap-3 overflow-x-auto no-scrollbar shrink-0">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-[72px] h-[72px] rounded-xl overflow-hidden border-2 shrink-0 transition cursor-pointer ${
                    selectedImageIndex === idx ? 'border-[#C89211] shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80';
                    }}
                  />
                </button>
              ))}
            </div>
          )}
          {/* Main Image - large, full-bleed within frame */}
          <div className="relative aspect-square w-full md:max-h-[min(70vh,640px)] rounded-2xl overflow-hidden bg-white/60 flex items-center justify-center shadow-sm">
            <img
              src={currentImage}
              alt={quickViewProduct.name}
              className="w-full h-full object-contain p-5"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80';
              }}
            />
            {discountPercent > 0 && (
              <span className="absolute top-3 left-3 bg-[#7C2A1E] text-[#F4ECD8] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                {discountPercent}% Off
              </span>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(quickViewProduct.id);
              }}
              className={`absolute top-3 right-3 w-9 h-9 rounded-full border flex items-center justify-center transition shadow-sm cursor-pointer ${
                isWishlisted
                  ? 'bg-[#7C2A1E] border-[#7C2A1E] text-white'
                  : 'bg-[#F4ECD8]/90 border-[#2A2620]/15 text-[#2A2620] hover:text-[#A9542B]'
              }`}
              aria-label="Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
            </button>
          </div>
          </div>

          {/* Mobile Buy Block - name/price/weight/qty/CTA right after the image so
              they aren't buried below the chat CTA and trust badges on small screens */}
          <div className="md:hidden mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A9542B]">
              {quickViewProduct.category}
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#2A2620] mt-1 leading-tight">
              {quickViewProduct.name}
            </h2>

            <div className="py-3 border-y border-[#2A2620]/10 mt-3">
              <div className="flex items-end flex-wrap gap-x-3 gap-y-1">
                <span className="font-sans text-4xl font-bold text-[#2A2620] leading-none tracking-tight">
                  ₹{selectedVariant.price}
                </span>
                {selectedVariant.originalPrice > selectedVariant.price && (
                  <span className="text-sm text-[#2A2620]/40 line-through font-sans mb-1">
                    ₹{selectedVariant.originalPrice}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="text-xs font-bold text-[#7C2A1E] mb-1">
                    Save {discountPercent}%
                  </span>
                )}
              </div>
              <div className={`flex items-center gap-1.5 mt-2 text-xs font-semibold ${isOutOfStock ? 'text-[#7C2A1E]' : 'text-[#3E4B32]'}`}>
                <span className={`w-1.5 h-1.5 rounded-full inline-block ${isOutOfStock ? 'bg-[#7C2A1E]' : 'bg-[#3E4B32]'}`} />
                {isOutOfStock ? 'Out of Stock' : 'In Stock'}{hasWeightLabel(selectedVariant.weight) && ` · ${selectedVariant.weight} pack`}
              </div>
            </div>

            {/* Primary Action Buttons - visible immediately on mobile */}
            <div className="flex flex-col gap-2.5 mt-4">
              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className="flex-1 bg-[#2A2620] hover:bg-[#3E4B32] text-[#F4ECD8] font-bold py-3 px-5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{isOutOfStock ? 'Out of Stock' : 'Add to Basket'}</span>
              </button>

              <button
                onClick={handleBuyNow}
                disabled={isOutOfStock}
                className="flex-1 bg-transparent hover:bg-[#7C2A1E] text-[#7C2A1E] hover:text-[#F4ECD8] font-bold py-3 px-5 rounded-xl text-xs uppercase tracking-wider border-2 border-[#7C2A1E] flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4">
              <TrustBadgeBar />
            </div>

            <div className={showWeightPicker ? 'mt-4' : 'hidden'}>
              <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70 block mb-2.5">
                Select Weight / Portion
              </label>
              <div className="flex flex-wrap gap-2.5">
                {quickViewProduct.variants.map((v, idx) => {
                  const selected = selectedVariantIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold border-2 transition-all cursor-pointer ${
                        selected
                          ? 'bg-[#2A2620] text-[#F4ECD8] border-[#2A2620] shadow-sm'
                          : 'bg-white/60 text-[#2A2620] border-[#2A2620]/15 hover:border-[#C89211]'
                      }`}
                    >
                      {selected && <CheckCircle2 className="w-3.5 h-3.5 text-[#C89211]" />}
                      <span>{showsAllSizes(quickViewProduct.category) ? `${v.weight} — ₹${v.price}` : v.weight}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70">
                Quantity
              </label>
              <div className="flex items-center rounded-xl border-2 border-[#2A2620]/15 bg-white/60 overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="w-9 h-9 flex items-center justify-center text-[#2A2620] hover:bg-[#2A2620] hover:text-[#F4ECD8] transition-colors cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-bold text-sm text-[#2A2620]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center text-[#2A2620] hover:bg-[#2A2620] hover:text-[#F4ECD8] transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Secondary CTA - gives the left column real content instead of dead space */}
          <a
            href={`https://wa.me/919008625716?text=${encodeURIComponent(
              `Hi! I have a question about ${quickViewProduct.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 rounded-xl border border-[#3E4B32]/20 bg-[#3E4B32]/5 hover:bg-[#3E4B32]/10 px-4 py-3.5 transition-colors"
          >
            <span className="flex items-center gap-2.5 text-sm font-semibold text-[#2A2620]">
              <MessageCircle className="w-4 h-4 text-[#3E4B32] shrink-0" />
              Have a question? Chat with us
            </span>
            <ArrowRight className="w-4 h-4 text-[#3E4B32] shrink-0 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Desktop: sub-images shown full size, one below another */}
          {images.length > 1 && (
            <div className="hidden md:flex flex-col gap-6 mt-6">
              {images.slice(1).map((img, idx) => (
                <div
                  key={idx}
                  className="w-full aspect-square rounded-2xl overflow-hidden bg-white/60 shadow-sm flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt={`${quickViewProduct.name} image ${idx + 2}`}
                    className="w-full h-full object-contain p-5"
                    onError={(e) => {
                      e.currentTarget.parentElement!.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Details & Actions */}
        <div className="md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-between md:overflow-y-auto no-scrollbar">
          <div className="space-y-6">
            <div className="hidden md:block">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A9542B]">
                {quickViewProduct.category}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2A2620] mt-1 leading-tight">
                {quickViewProduct.name}
              </h2>
            </div>

            {/* Price Display - clear hierarchy: dominant price, muted strike-through, subtle stock tag */}
            <div className="hidden md:block py-3 border-y border-[#2A2620]/10">
              <div className="flex items-end flex-wrap gap-x-3 gap-y-1">
                <span className="font-sans text-4xl md:text-[2.75rem] font-bold text-[#2A2620] leading-none tracking-tight">
                  ₹{selectedVariant.price}
                </span>
                {selectedVariant.originalPrice > selectedVariant.price && (
                  <span className="text-sm text-[#2A2620]/40 line-through font-sans mb-1">
                    ₹{selectedVariant.originalPrice}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="text-xs font-bold text-[#7C2A1E] mb-1">
                    Save {discountPercent}%
                  </span>
                )}
              </div>
              <div className={`flex items-center gap-1.5 mt-2 text-xs font-semibold ${isOutOfStock ? 'text-[#7C2A1E]' : 'text-[#3E4B32]'}`}>
                <span className={`w-1.5 h-1.5 rounded-full inline-block ${isOutOfStock ? 'bg-[#7C2A1E]' : 'bg-[#3E4B32]'}`} />
                {isOutOfStock ? 'Out of Stock' : 'In Stock'}{hasWeightLabel(selectedVariant.weight) && ` · ${selectedVariant.weight} pack`}
              </div>
            </div>

            {/* Trust Badges - sit right under the price, everywhere */}
            <div className="hidden md:block">
              <TrustBadgeBar />
            </div>

            {/* Weight Selection */}
            <div className={showWeightPicker ? 'hidden md:block' : 'hidden'}>
              <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70 block mb-2.5">
                Select Weight / Portion
              </label>
              <div className="flex flex-wrap gap-2.5">
                {quickViewProduct.variants.map((v, idx) => {
                  const selected = selectedVariantIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold border-2 transition-all cursor-pointer ${
                        selected
                          ? 'bg-[#2A2620] text-[#F4ECD8] border-[#2A2620] shadow-sm'
                          : 'bg-white/60 text-[#2A2620] border-[#2A2620]/15 hover:border-[#C89211]'
                      }`}
                    >
                      {selected && <CheckCircle2 className="w-3.5 h-3.5 text-[#C89211]" />}
                      <span>{showsAllSizes(quickViewProduct.category) ? `${v.weight} — ₹${v.price}` : v.weight}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="hidden md:flex items-center gap-4">
              <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70">
                Quantity
              </label>
              <div className="flex items-center rounded-xl border-2 border-[#2A2620]/15 bg-white/60 overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="w-9 h-9 flex items-center justify-center text-[#2A2620] hover:bg-[#2A2620] hover:text-[#F4ECD8] transition-colors cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-bold text-sm text-[#2A2620]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center text-[#2A2620] hover:bg-[#2A2620] hover:text-[#F4ECD8] transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Tabs: Description / Preparation */}
            <div className="pt-1 border-t border-[#2A2620]/10">
              <div className="relative flex gap-6 overflow-x-auto no-scrollbar border-b border-[#2A2620]/10 pt-3">
                {([
                  { key: 'description' as const, label: 'Description', show: true },
                  { key: 'preparation' as const, label: 'Preparation', show: !!quickViewProduct.preparationGuide },
                ]).filter((t) => t.show).map((t) => (
                  <button
                    key={t.key}
                    onClick={(e) => {
                      setActiveTab(t.key);
                      e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
                    }}
                    className={`relative shrink-0 whitespace-nowrap pb-2.5 px-1 text-xs font-bold uppercase tracking-wide transition-colors cursor-pointer rounded-t-md ${
                      activeTab === t.key
                        ? 'text-[#A9542B]'
                        : 'text-[#2A2620]/45 hover:text-[#2A2620]/80 hover:bg-[#2A2620]/[0.04]'
                    }`}
                  >
                    {t.label}
                    {activeTab === t.key && (
                      <motion.span
                        layoutId="qv-tab-underline"
                        className="absolute left-0 right-0 -bottom-px h-[3px] rounded-full bg-gradient-to-r from-[#A9542B] to-[#C89211]"
                        transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="py-6 sm:py-7"
                >
                  {activeTab === 'description' && (
                    <div className="space-y-4">
                      {detail?.tagline && (
                        <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-[#7C2A1E] bg-[#7C2A1E]/8 px-3 py-1.5 rounded-full">
                          {detail.tagline}
                        </span>
                      )}
                      {detail?.steps && (
                        <span className="text-xs font-bold uppercase tracking-wide text-[#2A2620]/70 block">About This Blend</span>
                      )}
                      <p className="text-sm text-[#2A2620]/80 leading-relaxed whitespace-pre-line">
                        {aboutText}
                      </p>
                      {detail?.notes?.map((n, idx) => (
                        <p key={idx} className="flex items-start gap-2 text-xs text-[#3E4B32] font-medium">
                          <Leaf className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span>{renderLabelled(n, ': ')}</span>
                        </p>
                      ))}
                      {whyList && whyList.length > 0 && (
                        <>
                          <span className="text-xs font-bold uppercase tracking-wide text-[#2A2620]/70 block mt-4">
                            {whyTitle || (detail?.steps ? `Why Choose ${quickViewProduct.name}?` : 'Why Choose This Product?')}
                          </span>
                          <ul className="space-y-1.5">
                            {whyList.map((b, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-[#2A2620]/85">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#3E4B32] shrink-0 mt-0.5" />
                                <span>{whyTitle ? renderLabelled(b, ": ") : b}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {detail?.usage && (
                        <>
                          <span className="text-xs font-bold uppercase tracking-wide text-[#2A2620]/70 block mt-4">How to Use</span>
                          <p className="text-sm text-[#2A2620]/85 leading-relaxed">{detail.usage}</p>
                        </>
                      )}
                      {detail?.uses && detail.uses.length > 0 && (
                        <>
                          <span className="text-xs font-bold uppercase tracking-wide text-[#2A2620]/70 block mt-4">
                            {detail.usesTitle || 'Where Is It Used?'}
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                            {detail.uses.map((u, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-[#2A2620]/85">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#A9542B] shrink-0 mt-2" />
                                <span>{u}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {detail?.steps && detail.steps.length > 0 && (
                        <>
                          <span className="text-xs font-bold uppercase tracking-wide text-[#2A2620]/70 block mt-4">How to Prepare Your Roti</span>
                          <ol className="space-y-2">
                            {detail.steps.map((st, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#2A2620]/85">
                                <span className="w-5 h-5 rounded-full bg-[#3E4B32] text-[#F4ECD8] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                  {idx + 1}
                                </span>
                                <span>{renderLabelled(st, ': ')}</span>
                              </li>
                            ))}
                          </ol>
                        </>
                      )}
                      {detail?.hydration && (
                        <div className="bg-[#C89211]/10 rounded-xl px-3.5 py-3">
                          <span className="text-xs font-bold uppercase tracking-wide text-[#8A6410] block mb-1">Starting Hydration Guide</span>
                          <p className="text-sm text-[#2A2620]/85">{detail.hydration}</p>
                        </div>
                      )}
                      {(detail?.expect || detail?.expectGroups) && (
                        <>
                          <span className="text-xs font-bold uppercase tracking-wide text-[#2A2620]/70 block mt-4">The Roti You Can Expect</span>
                          {detail.expect && (
                            <ul className="space-y-1.5">
                              {detail.expect.map((e, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-[#2A2620]/85">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#A9542B] shrink-0 mt-2" />
                                  <span>{renderLabelled(e, ': ')}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {detail.expectGroups && (
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                              {detail.expectGroups.map((g) => (
                                <div key={g.title} className="bg-white/60 rounded-xl p-3 shadow-sm">
                                  <span className="text-xs font-bold text-[#3E4B32] block mb-1.5">{g.title}</span>
                                  <ul className="space-y-1">
                                    {g.points.map((pt, idx) => (
                                      <li key={idx} className="text-xs text-[#2A2620]/80 leading-snug">{pt}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                          {detail.expectNote && (
                            <p className="text-xs italic text-[#2A2620]/60">{detail.expectNote}</p>
                          )}
                        </>
                      )}
                      {facts.length > 0 && (
                        <>
                          <span className="text-xs font-bold uppercase tracking-wide text-[#2A2620]/70 block mt-4">
                            {detail?.steps ? 'Little Facts' : 'Interesting Facts'}
                          </span>
                          <ul className="space-y-1.5">
                            {facts.map((f, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-[#2A2620]/85">
                                <Sparkles className="w-3.5 h-3.5 text-[#C89211] shrink-0 mt-0.5" />
                                <span>{renderLabelled(f, '? ', '?')}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {detail?.allergen && (
                        <div className="flex items-start gap-2.5 bg-[#A9542B]/8 rounded-xl px-3.5 py-3">
                          <ShieldCheck className="w-4 h-4 text-[#A9542B] shrink-0 mt-0.5" />
                          <p className="text-sm text-[#2A2620]/85">
                            <strong className="text-[#A9542B]">Allergen note: </strong>
                            {detail.allergen}
                          </p>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {[
                          { icon: Leaf, label: '100% Natural' },
                          { icon: ShieldCheck, label: 'No Additives' },
                          { icon: Mountain, label: 'Stone Ground' },
                        ].map(({ icon: Icon, label }) => (
                          <span
                            key={label}
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#3E4B32] bg-[#3E4B32]/8 border border-[#3E4B32]/15 px-3 py-1.5 rounded-full"
                          >
                            <Icon className="w-3.5 h-3.5" />
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'ingredients' && quickViewProduct.ingredients && (
                    <div className="space-y-4">
                      {quickViewProduct.ingredientComposition && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C2A1E] bg-[#7C2A1E]/8 border border-[#7C2A1E]/20 px-3.5 py-2 rounded-full">
                          {quickViewProduct.ingredientComposition}
                        </span>
                      )}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {quickViewProduct.ingredients.map((ing, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-[#2A2620]/85 bg-white/50 border border-[#2A2620]/8 rounded-lg px-3 py-2"
                          >
                            <Leaf className="w-3.5 h-3.5 text-[#3E4B32] shrink-0" />
                            <span>{ing}</span>
                          </li>
                        ))}
                      </ul>
                      {quickViewProduct.allergens && quickViewProduct.allergens.length > 0 && (
                        <div className="flex items-start gap-2.5 bg-[#A9542B]/8 border border-[#A9542B]/25 rounded-xl px-3.5 py-3">
                          <ShieldCheck className="w-4 h-4 text-[#A9542B] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wide text-[#A9542B] block mb-1">
                              Allergen Notice
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {quickViewProduct.allergens.map((a) => (
                                <span
                                  key={a}
                                  className="text-[11px] font-semibold text-[#7C2A1E] bg-white/70 border border-[#7C2A1E]/20 px-2 py-0.5 rounded-full"
                                >
                                  {a}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'nutrition' && quickViewProduct.nutritionInfo && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {Object.entries(quickViewProduct.nutritionInfo).map(([k, v], idx) => {
                        const bgColors = ['bg-[#3E4B32]/8', 'bg-[#A9542B]/8', 'bg-[#C89211]/10', 'bg-[#7C2A1E]/8'];
                        return (
                          <div
                            key={k}
                            className={`rounded-xl px-3 py-3 text-center ${bgColors[idx % bgColors.length]}`}
                          >
                            <div className="text-sm font-bold text-[#2A2620]">{v}</div>
                            <div className="text-[10px] uppercase tracking-wide font-semibold text-[#2A2620]/60 mt-0.5">
                              {k}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {activeTab === 'preparation' && quickViewProduct.preparationGuide && (
                    <div className="space-y-7">
                      {quickViewProduct.preparationGuide.liveMillingNote && (
                        <p className="text-xs font-semibold text-[#3E4B32] bg-[#3E4B32]/8 border border-[#3E4B32]/15 rounded-xl px-3.5 py-2.5">
                          {quickViewProduct.preparationGuide.liveMillingNote}
                        </p>
                      )}

                      {quickViewProduct.preparationGuide.steps.length > 0 && (
                        <div>
                          <span className="font-serif font-bold text-[#A9542B] uppercase tracking-wider text-xs block mb-3">
                            How to Prepare Your Roti
                          </span>
                          <ol className="space-y-2.5">
                            {quickViewProduct.preparationGuide.steps.map((step, idx) => (
                              <li key={idx} className="flex gap-3 text-sm text-[#2A2620]/85 leading-relaxed">
                                <span className="shrink-0 w-5 h-5 rounded-full bg-[#3E4B32]/10 text-[#3E4B32] text-[11px] font-bold flex items-center justify-center mt-0.5">
                                  {idx + 1}
                                </span>
                                <span>
                                  <strong className="text-[#2A2620]">{step.title}:</strong> {step.text}
                                </span>
                              </li>
                            ))}
                          </ol>
                          {quickViewProduct.preparationGuide.hydrationGuide && (
                            <div className="mt-3.5 flex items-start gap-2.5 bg-[#C89211]/10 border border-[#C89211]/25 rounded-xl px-3.5 py-3">
                              <span className="text-xs font-bold uppercase tracking-wide text-[#A9542B] shrink-0">
                                Hydration Guide
                              </span>
                              <span className="text-xs text-[#2A2620]/80 leading-relaxed">
                                {quickViewProduct.preparationGuide.hydrationGuide}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {quickViewProduct.preparationGuide.rotiExpectationGroups.length > 0 && (
                        <div>
                          <span className="font-serif font-bold text-[#A9542B] uppercase tracking-wider text-xs block mb-3">
                            The Roti You Can Expect
                          </span>
                          <div className="space-y-4">
                            {quickViewProduct.preparationGuide.rotiExpectationGroups.map((group, gIdx) => (
                              <div key={gIdx}>
                                {group.heading && (
                                  <span className="text-xs font-bold text-[#2A2620] block mb-2">
                                    {group.heading}
                                  </span>
                                )}
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {group.points.map((point, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm text-[#2A2620]/85 bg-white/50 border border-[#2A2620]/8 rounded-lg px-3 py-2 leading-relaxed"
                                    >
                                      {point.title ? (
                                        <><strong className="text-[#2A2620]">{point.title}:</strong> {point.text}</>
                                      ) : (
                                        point.text
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          {quickViewProduct.preparationGuide.rotiExpectationNote && (
                            <p className="text-xs text-[#2A2620]/60 italic mt-3">
                              {quickViewProduct.preparationGuide.rotiExpectationNote}
                            </p>
                          )}
                        </div>
                      )}

                      {quickViewProduct.preparationGuide.littleFacts.length > 0 && (
                        <div>
                          <span className="font-serif font-bold text-[#A9542B] uppercase tracking-wider text-xs block mb-3">
                            Little Facts
                          </span>
                          <div className="space-y-3">
                            {quickViewProduct.preparationGuide.littleFacts.map((fact, idx) => (
                              <div key={idx} className="text-sm leading-relaxed">
                                <p className="font-bold text-[#2A2620]">{fact.question}</p>
                                <p className="text-[#2A2620]/75 mt-0.5">{fact.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {quickViewProduct.preparationGuide.allergenNote && (
                        <p className="text-xs font-semibold text-[#7C2A1E] bg-[#7C2A1E]/8 border border-[#7C2A1E]/20 rounded-xl px-3.5 py-2.5">
                          {quickViewProduct.preparationGuide.allergenNote}
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* You May Also Like */}
            {recommendedProducts.length > 0 && (
              <div className="pt-6 border-t border-[#2A2620]/10">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A9542B] mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  You May Also Like
                </span>
                <div className="relative -mx-1">
                  <div className="pointer-events-none absolute left-0 top-0 bottom-1 w-6 bg-gradient-to-r from-[#F4ECD8] to-transparent z-10" />
                  <div className="pointer-events-none absolute right-0 top-0 bottom-1 w-6 bg-gradient-to-l from-[#F4ECD8] to-transparent z-10" />
                  <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1 px-1 snap-x snap-proximity">
                    {recommendedProducts.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleSwitchProduct(p)}
                        className="w-[100px] shrink-0 snap-start text-left group cursor-pointer"
                      >
                        <div className="w-[100px] h-[100px] rounded-xl overflow-hidden bg-white/60 shadow-sm group-hover:shadow-md transition-shadow">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-contain p-2.5"
                            onError={(e) => {
                              e.currentTarget.src =
                                'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80';
                            }}
                          />
                        </div>
                        <p className="mt-1.5 text-[11px] font-semibold text-[#2A2620] leading-snug line-clamp-2 h-[2.2em] group-hover:text-[#A9542B] transition-colors">
                          {p.name}
                        </p>
                        <p className="text-[11px] font-bold text-[#3E4B32]">
                          ₹{(p.variants && p.variants[0]?.price) ?? ''}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs - distinct primary/secondary purpose (mobile has its own copy right after the image) */}
          <div className="hidden md:block pt-6 border-t border-[#2A2620]/10 mt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className="flex-1 bg-[#2A2620] hover:bg-[#3E4B32] text-[#F4ECD8] font-bold py-3.5 px-5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{isOutOfStock ? 'Out of Stock' : 'Add to Basket'}</span>
              </button>

              <button
                onClick={handleBuyNow}
                disabled={isOutOfStock}
                className="flex-1 bg-transparent hover:bg-[#7C2A1E] text-[#7C2A1E] hover:text-[#F4ECD8] font-bold py-3.5 px-5 rounded-xl text-xs uppercase tracking-wider border-2 border-[#7C2A1E] flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
