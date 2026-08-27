import React, { useState } from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { Heart, ShoppingBag, Eye, Star, QrCode } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenQuickView?: (product: Product) => void;
  onInspectPackage?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenQuickView,
  onInspectPackage,
}) => {
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

  // Category Stripe Color
  const getCategoryStripe = (cat: string) => {
    const c = (cat || '').toLowerCase();
    if (c.includes('flour')) return 'bg-[#A9542B]';
    if (c.includes('spice') || c.includes('masala')) return 'bg-[#7C2A1E]';
    if (c.includes('oil')) return 'bg-[#3E4B32]';
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
      className="product-card group hover:border-[#C89211]/60 hover:shadow-md cursor-pointer"
    >
      {/* Category Accent Stripe */}
      <div className={`h-1.5 w-full shrink-0 ${getCategoryStripe(product.category)}`} />

      {/* Product Image Section (Strict Aspect Ratio 1/1 Square Container) */}
      <div className="product-image-section">
        <img
          src={product.image}
          alt={product.name}
          className="product-image group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80';
          }}
        />

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full border flex items-center justify-center transition shadow-xs ${
            isWishlisted
              ? 'bg-[#7C2A1E] border-[#7C2A1E] text-white'
              : 'bg-[#F4ECD8]/90 border-[#2A2620]/15 text-[#2A2620] hover:text-[#A9542B]'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-[#2A2620]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="bg-[#F4ECD8] text-[#2A2620] hover:bg-[#3E4B32] hover:text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          {onInspectPackage && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onInspectPackage(product);
              }}
              className="bg-[#C89211] text-[#2A2620] hover:bg-[#7C2A1E] hover:text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md transition-all cursor-pointer"
            >
              <QrCode className="w-3 h-3" />
              <span>Inspect Packaging & QR</span>
            </button>
          )}
        </div>
      </div>

      {/* Product Content Details */}
      <div className="product-content">
        <div>
          {/* Category + Rating Row */}
          <div className="product-meta-row">
            <span className="uppercase tracking-widest font-bold text-[#A9542B] text-xs truncate max-w-[70%]">
              {product.category}
            </span>
            {product.rating > 0 ? (
              <div className="flex items-center gap-1 text-[#C89211] font-bold text-xs shrink-0">
                <Star className="w-3.5 h-3.5 fill-[#C89211]" />
                <span>{product.rating.toFixed(1)}</span>
              </div>
            ) : (
              <div className="h-4" />
            )}
          </div>

          {/* Product Title Slot (Fixed 2-Line Height) */}
          <div className="product-title-slot">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#2A2620] group-hover:text-[#A9542B] transition-colors leading-snug line-clamp-2">
              {product.name}
            </h3>
          </div>

          {/* Description Slot (Fixed 2-Line Height) */}
          <div className="product-description-slot">
            <p className="text-xs text-[#2A2620]/70 line-clamp-2 leading-relaxed font-sans">
              {product.description || 'Pure, authentic & traditional organic produce from Dhannya.'}
            </p>
          </div>

          {/* Variant Selector Slot (Fixed Slot Height) */}
          <div className="product-variants-slot no-scrollbar">
            {variants.length > 1 ? (
              variants.map((v, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVariantIndex(idx);
                  }}
                  className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border transition-colors whitespace-nowrap cursor-pointer ${
                    selectedVariantIndex === idx
                      ? 'bg-[#3E4B32] text-[#F4ECD8] border-[#3E4B32]'
                      : 'bg-[#F4ECD8]/60 text-[#2A2620] border-[#2A2620]/15 hover:border-[#2A2620]/40'
                  }`}
                >
                  {v.weight}
                </button>
              ))
            ) : (
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold border bg-[#3E4B32]/10 text-[#3E4B32] border-[#3E4B32]/20">
                {selectedVariant.weight}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Area (Price + Weight + Add Button) */}
        <div className="product-bottom-area">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-[#2A2620] font-serif">
                ₹{selectedVariant.price}
              </span>
              {origPrice > currentPrice && (
                <span className="text-xs text-[#2A2620]/40 line-through">
                  ₹{origPrice}
                </span>
              )}
            </div>
            <span className="text-[11px] text-[#2A2620]/60 block font-medium">
              Weight: {selectedVariant.weight}
            </span>
          </div>

          <button
            onClick={handleQuickAdd}
            className="bg-[#C89211] hover:bg-[#A9542B] text-[#2A2620] hover:text-white font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
