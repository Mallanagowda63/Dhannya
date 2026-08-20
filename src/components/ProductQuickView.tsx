import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Product } from '../types';
import {
  X,
  Star,
  ShoppingBag,
  Heart,
  CheckCircle2,
  ShieldCheck,
  Plus,
  Minus,
  Sparkles,
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
  } = useApp();

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'nutrition' | 'benefits'>('description');

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

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedVariant.weight, quantity);
  };

  const handleBuyNow = () => {
    addToCart(quickViewProduct, selectedVariant.weight, quantity);
    setQuickViewProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A2620]/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative bg-[#F4ECD8] text-[#2A2620] w-full max-w-4xl rounded-2xl shadow-2xl border border-[#2A2620]/15 overflow-hidden animate-fade-in my-8 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#2A2620]/10 hover:bg-[#2A2620] hover:text-[#F4ECD8] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Product Gallery */}
        <div className="md:w-1/2 p-6 bg-[#F8F3E6] border-b md:border-b-0 md:border-r border-[#2A2620]/10 flex flex-col justify-between">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white/50 border border-[#2A2620]/10 mb-4 flex items-center justify-center">
            <img
              src={currentImage}
              alt={quickViewProduct.name}
              className="w-full h-full object-contain p-4"
            />

          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition ${
                    selectedImageIndex === idx ? 'border-[#C89211]' : 'border-[#2A2620]/10 opacity-70'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Why Dhaanya Promise Block */}
          <div className="mt-6 pt-4 border-t border-[#2A2620]/10 space-y-2 text-xs text-[#2A2620]/80">
            <span className="font-serif font-bold text-[#A9542B] uppercase tracking-wider block">
              Why Dhaanya?
            </span>
            <div className="grid grid-cols-2 gap-2">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#3E4B32]" /> Freshly Milled</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#3E4B32]" /> Whole Ingredients</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#3E4B32]" /> Traditional Process</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#3E4B32]" /> Made with Care</span>
            </div>
          </div>
        </div>

        {/* Right Column: Details & Actions */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto no-scrollbar">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#A9542B]">
                {quickViewProduct.category}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2A2620] mt-1 leading-tight">
                {quickViewProduct.name}
              </h2>
              {quickViewProduct.rating > 0 && (
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-[#C89211]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(quickViewProduct.rating) ? 'fill-[#C89211]' : 'opacity-30'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#2A2620]/70 font-semibold">
                    {quickViewProduct.rating.toFixed(1)} ({quickViewProduct.reviewCount || 12} verified reviews)
                  </span>
                </div>
              )}
            </div>

            {/* Price Display */}
            <div className="flex items-baseline gap-3 py-2 border-y border-[#2A2620]/10">
              <span className="font-serif text-3xl font-bold text-[#2A2620]">
                ₹{selectedVariant.price}
              </span>
              {selectedVariant.originalPrice > selectedVariant.price && (
                <span className="text-sm text-[#2A2620]/40 line-through font-serif">
                  ₹{selectedVariant.originalPrice}
                </span>
              )}
              <span className="text-xs text-[#3E4B32] font-semibold bg-[#3E4B32]/10 px-2 py-0.5 rounded ml-auto">
                In Stock ({selectedVariant.weight})
              </span>
            </div>

            {/* Weight Selection Pills */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70 block mb-2">
                Select Weight / Portion
              </label>
              <div className="flex flex-wrap gap-2">
                {quickViewProduct.variants.map((v, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVariantIndex(idx)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-all ${
                      selectedVariantIndex === idx
                        ? 'bg-[#3E4B32] text-[#F4ECD8] border-[#3E4B32] shadow-xs'
                        : 'bg-[#F8F3E6] text-[#2A2620] border-[#2A2620]/20 hover:border-[#C89211]'
                    }`}
                  >
                    {v.weight} — ₹{v.price}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70">
                Quantity:
              </label>
              <div className="flex items-center border border-[#2A2620]/20 rounded-md bg-[#F8F3E6]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-[#2A2620] hover:text-[#A9542B]"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 font-bold text-sm text-[#2A2620]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-[#2A2620] hover:text-[#A9542B]"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Tabs: Description / Ingredients / Nutrition */}
            <div className="pt-4 border-t border-[#2A2620]/10">
              <div className="flex border-b border-[#2A2620]/10 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`pb-2 pr-4 transition-colors ${
                    activeTab === 'description'
                      ? 'border-b-2 border-[#C89211] text-[#C89211]'
                      : 'text-[#2A2620]/60'
                  }`}
                >
                  Description
                </button>
                {quickViewProduct.ingredients && (
                  <button
                    onClick={() => setActiveTab('ingredients')}
                    className={`pb-2 px-4 transition-colors ${
                      activeTab === 'ingredients'
                        ? 'border-b-2 border-[#C89211] text-[#C89211]'
                        : 'text-[#2A2620]/60'
                    }`}
                  >
                    Ingredients
                  </button>
                )}
                {quickViewProduct.nutritionInfo && (
                  <button
                    onClick={() => setActiveTab('nutrition')}
                    className={`pb-2 px-4 transition-colors ${
                      activeTab === 'nutrition'
                        ? 'border-b-2 border-[#C89211] text-[#C89211]'
                        : 'text-[#2A2620]/60'
                    }`}
                  >
                    Nutrition
                  </button>
                )}
              </div>

              <div className="py-3 text-xs text-[#2A2620]/80 leading-relaxed">
                {activeTab === 'description' && <p>{quickViewProduct.description}</p>}
                {activeTab === 'ingredients' && (
                  <p>{quickViewProduct.ingredients?.join(', ')}</p>
                )}
                {activeTab === 'nutrition' && quickViewProduct.nutritionInfo && (
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(quickViewProduct.nutritionInfo).map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-[#2A2620]/5 py-1">
                        <span className="font-semibold text-[#2A2620]">{k}:</span>
                        <span>{v}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 space-y-2 border-t border-[#2A2620]/10 mt-6">
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#3E4B32] hover:bg-[#2A2620] text-[#F4ECD8] font-bold py-3.5 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO BASKET</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 bg-[#C89211] hover:bg-[#A9542B] text-[#2A2620] hover:text-white font-bold py-3.5 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow cursor-pointer"
              >
                <span>BUY NOW</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
