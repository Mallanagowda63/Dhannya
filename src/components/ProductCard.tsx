import React, { useState } from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { Heart, ShoppingBag, Eye, Star, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenQuickView }) => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useApp();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  if (!product) return null;

  const variants =
    product.variants && product.variants.length > 0
      ? product.variants
      : [{ weight: '250g', price: 199, originalPrice: 249, inStock: true }];

  const selectedVariant = variants[selectedVariantIndex] || variants[0];
  const isWishlisted = product.id ? isInWishlist(product.id) : false;

  const origPrice = selectedVariant.originalPrice || selectedVariant.price || 0;
  const currentPrice = selectedVariant.price || 0;
  const discountPercent =
    origPrice > currentPrice && origPrice > 0
      ? Math.round(((origPrice - currentPrice) / origPrice) * 100)
      : 0;

  // Category Stripe Color
  const getCategoryStripe = (cat: string) => {
    if (cat.toLowerCase().includes('flour')) return 'bg-[#A9542B]';
    if (cat.toLowerCase().includes('spice') || cat.toLowerCase().includes('masala')) return 'bg-[#7C2A1E]';
    if (cat.toLowerCase().includes('oil')) return 'bg-[#3E4B32]';
    return 'bg-[#C89211]';
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedVariant.weight, 1);
  };

  const handleCardClick = () => {
    if (onOpenQuickView) onOpenQuickView(product);
    else setQuickViewProduct(product);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group kraft-card rounded-xl overflow-hidden hover:border-[#C89211]/60 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between cursor-pointer relative"
    >
      {/* Category Accent Stripe */}
      <div className={`h-1.5 w-full ${getCategoryStripe(product.category)}`} />

      {/* Product Image Box */}
      <div className="relative h-48 sm:h-56 w-full bg-[#F4ECD8]/40 overflow-hidden flex items-center justify-center p-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80';
          }}
        />



        {/* Wishlist Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full border flex items-center justify-center transition shadow-xs ${
            isWishlisted
              ? 'bg-[#7C2A1E] border-[#7C2A1E] text-white'
              : 'bg-[#F4ECD8]/90 border-[#2A2620]/15 text-[#2A2620] hover:text-[#A9542B]'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Quick View Floating Hover Overlay */}
        <div className="absolute inset-0 bg-[#2A2620]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="bg-[#F4ECD8] text-[#2A2620] hover:bg-[#3E4B32] hover:text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-all"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Details & Variant Pills */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-[#2A2620]/60 mb-1">
            <span className="uppercase tracking-widest font-semibold text-[#A9542B]">
              {product.category}
            </span>
            {product.rating > 0 && (
              <div className="flex items-center gap-1 text-[#C89211] font-bold text-xs">
                <Star className="w-3 h-3 fill-[#C89211]" />
                <span>{product.rating.toFixed(1)}</span>
              </div>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-serif font-bold text-[#2A2620] group-hover:text-[#A9542B] transition-colors leading-snug line-clamp-2">
            {product.name}
          </h3>

          {product.description && (
            <p className="text-xs text-[#2A2620]/70 line-clamp-1 mt-1 font-sans">
              {product.description}
            </p>
          )}
        </div>

        {/* Weight Variant Selection */}
        {variants.length > 1 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {variants.map((v, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVariantIndex(idx);
                }}
                className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors ${
                  selectedVariantIndex === idx
                    ? 'bg-[#3E4B32] text-[#F4ECD8] border-[#3E4B32]'
                    : 'bg-[#F4ECD8]/60 text-[#2A2620] border-[#2A2620]/15 hover:border-[#2A2620]/40'
                }`}
              >
                {v.weight}
              </button>
            ))}
          </div>
        )}

        {/* Pricing and Add to Cart */}
        <div className="pt-3 border-t border-[#2A2620]/10 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-[#2A2620] font-serif">
                ₹{selectedVariant.price}
              </span>
              {selectedVariant.originalPrice > selectedVariant.price && (
                <span className="text-xs text-[#2A2620]/40 line-through">
                  ₹{selectedVariant.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[11px] text-[#2A2620]/60 block font-medium">
              Weight: {selectedVariant.weight}
            </span>
          </div>

          <button
            onClick={handleQuickAdd}
            className="bg-[#C89211] hover:bg-[#A9542B] text-[#2A2620] hover:text-white font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
