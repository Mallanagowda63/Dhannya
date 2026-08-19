import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Product } from '../types';
import {
  X,
  Star,
  ShoppingBag,
  Heart,
  Share2,
  CheckCircle2,
  ShieldCheck,
  Plus,
  Minus,
  MessageSquare,
} from 'lucide-react';

export const ProductQuickView: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist,
    showToast,
    setIsCartOpen,
    setIsCheckoutOpen,
  } = useApp();

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'nutrition' | 'benefits' | 'reviews'>('description');

  if (!quickViewProduct) return null;

  const selectedVariant = quickViewProduct.variants[selectedVariantIndex] || quickViewProduct.variants[0];
  const images = quickViewProduct.gallery && quickViewProduct.gallery.length > 0
    ? quickViewProduct.gallery
    : [quickViewProduct.image];
  const currentImage = images[selectedImageIndex] || quickViewProduct.image;
  const isWishlisted = isInWishlist(quickViewProduct.id);

  const discountPercent = Math.round(
    ((selectedVariant.originalPrice - selectedVariant.price) / selectedVariant.originalPrice) * 100
  );

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedVariant.weight, quantity);
  };

  const handleBuyNow = () => {
    addToCart(quickViewProduct, selectedVariant.weight, quantity);
    setQuickViewProduct(null);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const fullImageAddress = currentImage.startsWith('http')
    ? currentImage
    : `${window.location.origin}${currentImage}`;

  const whatsappText = `🌿 *Dhannya Organic & Custom Spices Order Request* 🌿\n\n` +
    `📦 *Product:* ${quickViewProduct.name}\n` +
    `🏷️ *Category:* ${quickViewProduct.category}\n` +
    `⚖️ *Variant Weight:* ${selectedVariant.weight}\n` +
    `🔢 *Quantity:* ${quantity} unit(s)\n` +
    `💰 *Total Price:* ₹${selectedVariant.price * quantity}\n` +
    `📝 *Description:* ${quickViewProduct.description ? quickViewProduct.description.slice(0, 100) + '...' : '100% Pure & Organic Quality'}\n\n` +
    `🖼️ *Product Image:* ${fullImageAddress}\n\n` +
    `🚚 *Delivery:* Free Shipping above ₹499 | COD & Instant UPI Available\n` +
    `Please confirm my order and payment details!`;

  const whatsappMessage = encodeURIComponent(whatsappText);

  const handleWhatsAppOrderWithImage = async () => {
    try {
      const response = await fetch(currentImage);
      const blob = await response.blob();
      const filename = `${quickViewProduct.name.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`;
      const imageFile = new File([blob], filename, { type: blob.type || 'image/jpeg' });

      if (navigator.canShare && navigator.canShare({ files: [imageFile] })) {
        await navigator.share({
          title: `Dhannya Organic - ${quickViewProduct.name}`,
          text: whatsappText,
          files: [imageFile],
        });
        showToast('Image and order details shared directly to WhatsApp!', 'success');
        return;
      }
    } catch {
      // Fallback if fetch or share fails
    }

    window.open(`https://wa.me/919008625716?text=${whatsappMessage}`, '_blank');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Product link copied to clipboard!', 'info');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white border border-soft w-full max-w-4xl rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden text-earth my-auto relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-cream text-stone-600 hover:text-earth border border-soft transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT: Image Gallery & Zoom */}
          <div className="p-6 bg-cream flex flex-col justify-between border-b md:border-b-0 md:border-r border-soft">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white border border-soft group">
              <img
                src={currentImage}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover group-hover:scale-125 transition duration-500 cursor-zoom-in"
              />
              <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-[10px] text-stone-600 font-bold px-2 py-1 rounded-lg border border-soft">
                Hover to Zoom
              </span>
            </div>

            {/* Thumbnail Row */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition shrink-0 ${
                      selectedImageIndex === idx ? 'border-olive' : 'border-soft opacity-60'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Product Info & Buy Controls */}
          <div className="p-6 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-olive">
                  {quickViewProduct.category}
                </span>
                <div className="flex items-center gap-2">
                  <button onClick={handleShare} className="text-stone-500 hover:text-earth transition p-1">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => toggleWishlist(quickViewProduct.id)}
                    className={`p-1 transition ${isWishlisted ? 'text-rose-500' : 'text-stone-500 hover:text-rose-500'}`}
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                  </button>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-serif text-earth">
                {quickViewProduct.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 text-xs">
                <div className="flex items-center gap-1 bg-cream border border-soft text-olive px-2 py-0.5 rounded-lg font-bold">
                  <Star className="w-3.5 h-3.5 fill-olive" />
                  <span>{quickViewProduct.rating}</span>
                </div>
                <span className="text-stone-500">({quickViewProduct.reviewCount} customer reviews)</span>
                <span className="text-olive font-bold flex items-center gap-1 ml-auto text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> In Stock ({quickViewProduct.stock} left)
                </span>
              </div>

              {/* Price Display */}
              <div className="bg-cream p-3.5 rounded-2xl border border-soft flex items-baseline gap-2">
                <span className="text-2xl font-bold text-olive">₹{selectedVariant.price}</span>
                {selectedVariant.originalPrice > selectedVariant.price && (
                  <span className="text-sm text-stone-400 line-through">
                    ₹{selectedVariant.originalPrice}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="bg-olive text-white text-[10px] font-bold px-2 py-0.5 rounded ml-auto">
                    Save {discountPercent}%
                  </span>
                )}
              </div>

              {/* Weight Variant Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-stone-600">Select Pack Weight:</label>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.variants.map((v, idx) => (
                    <button
                      key={v.weight}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`text-xs font-bold px-3.5 py-1.5 rounded-xl border transition ${
                        selectedVariantIndex === idx
                          ? 'bg-olive text-white border-olive'
                          : 'bg-cream text-earth border-soft hover:border-stone-300'
                      }`}
                    >
                      {v.weight} - ₹{v.price}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 pt-1">
                <span className="text-xs font-bold text-stone-600">Quantity:</span>
                <div className="flex items-center bg-cream border border-soft rounded-xl p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-stone-100 text-earth flex items-center justify-center transition border border-soft"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-bold text-xs text-earth">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 rounded-lg bg-white hover:bg-stone-100 text-earth flex items-center justify-center transition border border-soft"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Action CTA Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="bg-cream hover:bg-stone-100 border border-soft text-earth font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4 text-olive" /> Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="bg-olive hover:bg-[#4a4a34] text-white font-bold py-3 rounded-xl text-xs transition active:scale-95"
                >
                  Buy Now
                </button>
              </div>


            </div>
          </div>
        </div>

        {/* Tabbed Info Section (Description, Ingredients, Nutrition, Benefits, Reviews) */}
        <div className="border-t border-soft p-6 bg-cream space-y-4">
          <div className="flex items-center gap-4 border-b border-soft text-xs font-bold overflow-x-auto no-scrollbar">
            {(['description', 'ingredients', 'nutrition', 'benefits', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2.5 capitalize border-b-2 transition ${
                  activeTab === tab
                    ? 'border-olive text-olive'
                    : 'border-transparent text-stone-500 hover:text-earth'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="text-xs text-stone-600 leading-relaxed max-h-40 overflow-y-auto">
            {activeTab === 'description' && <p>{quickViewProduct.description}</p>}

            {activeTab === 'ingredients' && (
              <div className="flex flex-wrap gap-2">
                {quickViewProduct.ingredients?.map((ing) => (
                  <span key={ing} className="bg-white border border-soft px-2.5 py-1 rounded-lg text-olive font-medium">
                    🌿 {ing}
                  </span>
                )) || <p>100% Pure Organic Product</p>}
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {quickViewProduct.nutritionInfo ? (
                  Object.entries(quickViewProduct.nutritionInfo).map(([k, v]) => (
                    <div key={k} className="bg-white p-2 rounded-xl border border-soft">
                      <span className="text-stone-500 block text-[10px]">{k}</span>
                      <strong className="text-olive font-bold">{v}</strong>
                    </div>
                  ))
                ) : (
                  <p>Nutritional values per 100g standard serving.</p>
                )}
              </div>
            )}

            {activeTab === 'benefits' && (
              <ul className="space-y-1 list-disc list-inside">
                {quickViewProduct.benefits?.map((b) => (
                  <li key={b}>{b}</li>
                )) || <li>Promotes overall health and holistic immunity.</li>}
              </ul>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-earth">Customer Reviews ({quickViewProduct.reviewCount})</span>
                  <span className="text-olive font-bold">★ {quickViewProduct.rating} / 5.0</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-soft">
                  <div className="flex justify-between items-center text-[10px] text-stone-500 mb-1">
                    <strong className="text-earth">Meera S. (Verified Buyer)</strong>
                    <span>5 Stars</span>
                  </div>
                  <p className="text-stone-600 italic">"Extremely happy with the authentic aroma and quality. Pure organic goodness!"</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
