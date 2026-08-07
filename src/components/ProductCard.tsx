import React, { useState } from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { Star, Heart, ShoppingBag, Eye, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenQuickView }) => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useApp();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const selectedVariant = product.variants[selectedVariantIndex] || product.variants[0];
  const isWishlisted = isInWishlist(product.id);

  const discountPercent = Math.round(
    ((selectedVariant.originalPrice - selectedVariant.price) / selectedVariant.originalPrice) * 100
  );

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
      className="group bg-white border border-soft rounded-2xl overflow-hidden hover:border-olive transition duration-300 shadow-sm hover:shadow-md flex flex-col justify-between cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative h-48 sm:h-52 w-full bg-stone-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80';
          }}
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.isBestSeller && (
            <span className="bg-terracotta text-white text-xs font-bold uppercase px-2 py-0.5 rounded shadow-sm">
              Bestseller
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-olive text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full border flex items-center justify-center transition shadow-sm ${
            isWishlisted
              ? 'bg-rose-50 border-rose-200 text-rose-600'
              : 'bg-white/90 border-soft text-stone-500 hover:text-terracotta'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
        </button>

        {/* Quick View Floating Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (onOpenQuickView) onOpenQuickView(product);
              else setQuickViewProduct(product);
            }}
            className="bg-white/90 text-earth border border-soft hover:bg-olive hover:text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow transition"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between text-xs text-stone-600 mb-1">
            <span className="uppercase tracking-wider font-bold text-olive">
              {product.category}
            </span>
            <div className="flex items-center gap-1 bg-cream px-2 py-0.5 rounded border border-soft">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
              <span className="text-earth font-bold text-xs">{product.rating}</span>
            </div>
          </div>

          <h3 className="text-base font-bold font-serif text-earth group-hover:text-olive transition leading-snug line-clamp-2">
            {product.name}
          </h3>
        </div>

        {/* Variant Selector Chips */}
        {product.variants.length > 1 && (
          <div className="flex flex-wrap gap-1" onClick={(e) => e.stopPropagation()}>
            {product.variants.map((v, idx) => (
              <button
                key={v.weight}
                onClick={() => setSelectedVariantIndex(idx)}
                className={`text-xs font-semibold px-2.5 py-1 rounded-md border transition ${
                  selectedVariantIndex === idx
                    ? 'bg-olive text-white border-olive'
                    : 'bg-cream text-stone-700 border-soft hover:border-stone-400'
                }`}
              >
                {v.weight}
              </button>
            ))}
          </div>
        )}

        {/* Pricing and Add to Cart */}
        <div className="pt-2 border-t border-soft flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-terracotta">₹{selectedVariant.price}</span>
              {selectedVariant.originalPrice > selectedVariant.price && (
                <span className="text-xs sm:text-sm text-stone-400 line-through">
                  ₹{selectedVariant.originalPrice}
                </span>
              )}
            </div>
            <span className="text-xs text-stone-600 block font-medium">
              Net Weight: {selectedVariant.weight}
            </span>
          </div>

          <button
            onClick={handleQuickAdd}
            className="bg-olive hover:bg-[#4a4a34] text-white font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1 shadow-sm transition active:scale-95 shrink-0"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
