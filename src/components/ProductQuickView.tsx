import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { Product } from '../types';
import {
  X,
  ShoppingBag,
  Heart,
  CheckCircle2,
  ShieldCheck,
  Plus,
  Minus,
  Sparkles,
  ArrowRight,
  Leaf,
  Mountain,
  MessageCircle,
} from 'lucide-react';

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

  if (!quickViewProduct) return null;

  const selectedVariant = quickViewProduct.variants[selectedVariantIndex] || quickViewProduct.variants[0];
  const images = quickViewProduct.gallery && quickViewProduct.gallery.length > 0
    ? quickViewProduct.gallery
    : [quickViewProduct.image];
  const currentImage = images[selectedImageIndex] || quickViewProduct.image;
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
    addToCart(quickViewProduct, selectedVariant.weight, quantity);
  };

  const handleBuyNow = () => {
    addToCart(quickViewProduct, selectedVariant.weight, quantity);
    setQuickViewProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleSwitchProduct = (product: Product) => {
    setQuickViewProduct(product);
    setSelectedVariantIndex(0);
    setSelectedImageIndex(0);
    setQuantity(1);
    setActiveTab('description');
  };

  const trustBadges = [
    { icon: Sparkles, label: 'Freshly Milled' },
    { icon: Leaf, label: 'Whole Ingredients' },
    { icon: Mountain, label: 'Traditional Process' },
    { icon: Heart, label: 'Made with Care' },
  ];

  const TrustBadgeBar = () => (
    <div className="flex items-stretch rounded-2xl border border-[#2A2620]/12 bg-white/60 divide-x divide-[#2A2620]/10 overflow-hidden">
      {trustBadges.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex-1 min-w-0 flex flex-col items-center justify-center gap-1.5 px-1.5 py-3 text-center"
        >
          <Icon className="w-4 h-4 text-[#2A2620]/70 shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#2A2620]/80 leading-tight">
            {label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A2620]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div
        className="relative bg-[#F4ECD8] text-[#2A2620] w-full max-w-4xl rounded-2xl shadow-2xl border border-[#2A2620]/15 overflow-hidden animate-fade-in my-4 sm:my-8 max-h-[92vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#F4ECD8]/90 border border-[#2A2620]/10 text-[#2A2620] hover:bg-[#2A2620] hover:text-[#F4ECD8] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Product Gallery */}
        <div
          className="md:w-1/2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#2A2620]/10 flex flex-col"
          style={{
            backgroundColor: '#F8F3E6',
            backgroundImage: 'radial-gradient(rgba(42,38,32,0.05) 1px, transparent 0)',
            backgroundSize: '18px 18px',
          }}
        >
          {/* Main Image - large, full-bleed within frame */}
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white/60 border border-[#2A2620]/10 mb-6 flex items-center justify-center shadow-sm">
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
              onClick={() => toggleWishlist(quickViewProduct.id)}
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
              <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-[#3E4B32]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3E4B32] inline-block" />
                In Stock · {selectedVariant.weight} pack
              </div>
            </div>

            <div className="mt-4">
              <TrustBadgeBar />
            </div>

            <div className="mt-4">
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
                      <span>{v.weight} — ₹{v.price}</span>
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

            <div className="flex flex-col gap-3 mt-5">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#2A2620] hover:bg-[#3E4B32] text-[#F4ECD8] font-bold py-3.5 px-5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Basket</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 bg-transparent hover:bg-[#7C2A1E] text-[#7C2A1E] hover:text-[#F4ECD8] font-bold py-3.5 px-5 rounded-xl text-xs uppercase tracking-wider border-2 border-[#7C2A1E] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Thumbnail Strip - enlarged, primary navigation for the main preview */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto no-scrollbar mb-8">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-[72px] h-[72px] rounded-xl overflow-hidden border-2 shrink-0 transition cursor-pointer ${
                    selectedImageIndex === idx ? 'border-[#C89211] shadow-sm' : 'border-[#2A2620]/10 opacity-70 hover:opacity-100'
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

          {/* Secondary CTA - gives the left column real content instead of dead space */}
          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent(
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
        </div>

        {/* Right Column: Details & Actions */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto no-scrollbar">
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
              <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-[#3E4B32]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3E4B32] inline-block" />
                In Stock · {selectedVariant.weight} pack
              </div>
            </div>

            {/* Trust Badges - sit right under the price, everywhere */}
            <div className="hidden md:block">
              <TrustBadgeBar />
            </div>

            {/* Weight Selection */}
            <div className="hidden md:block">
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
                      <span>{v.weight} — ₹{v.price}</span>
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

            {/* Tabs: Description / Ingredients / Nutrition */}
            <div className="pt-1 border-t border-[#2A2620]/10">
              <div className="relative flex gap-6 overflow-x-auto no-scrollbar border-b border-[#2A2620]/10 pt-3">
                {([
                  { key: 'description' as const, label: 'Description', show: true },
                  { key: 'ingredients' as const, label: 'Ingredients', show: !!quickViewProduct.ingredients },
                  { key: 'nutrition' as const, label: 'Nutrition', show: !!quickViewProduct.nutritionInfo },
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
                      <p className="text-sm text-[#2A2620]/80 leading-relaxed whitespace-pre-line">
                        {quickViewProduct.description}
                      </p>
                      {quickViewProduct.benefits && quickViewProduct.benefits.length > 0 && (
                        <ul className="space-y-1.5">
                          {quickViewProduct.benefits.map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-[#2A2620]/85">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#3E4B32] shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
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
                        <div className="w-[100px] h-[100px] rounded-xl overflow-hidden bg-white/60 border border-[#2A2620]/10 group-hover:border-[#C89211] transition-colors">
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
                className="flex-1 bg-[#2A2620] hover:bg-[#3E4B32] text-[#F4ECD8] font-bold py-3.5 px-5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Basket</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 bg-transparent hover:bg-[#7C2A1E] text-[#7C2A1E] hover:text-[#F4ECD8] font-bold py-3.5 px-5 rounded-xl text-xs uppercase tracking-wider border-2 border-[#7C2A1E] flex items-center justify-center gap-2 transition-all cursor-pointer"
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
