import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Trash2, Plus, Minus, ShoppingBag, Tag, ArrowRight, Sparkles, Check, PhoneCall } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQty,
    appliedCoupon,
    applyCouponCode,
    removeCoupon,
    cartSubtotal,
    cartTotalDiscount,
    cartTax,
    cartShippingFee,
    cartGrandTotal,
    setIsCheckoutOpen,
  } = useApp();

  const [couponCodeInput, setCouponCodeInput] = useState('');
  const [couponLoading, setCouponLoading] = useState(false);

  const generateCartWhatsAppMessage = () => {
    const origin = window.location.origin;
    let text = `🌿 *Dhannya Organic Store - Cart Order Request* 🌿\n\n`;
    (cart || []).forEach((item, idx) => {
      const itemImg = item.image || '/images/Dailywell_Products/Garam%20Masala/01.jpg';
      const imgUrl = itemImg.startsWith('http')
        ? itemImg
        : `${origin}${itemImg}`;
      text += `${idx + 1}. *${item.name || 'Organic Product'}* (${item.variantWeight || 'Standard'})\n`;
      text += `   - Qty: ${item.quantity} | Price: ₹${(item.price || 0) * item.quantity}\n`;
      text += `   - Image: ${imgUrl}\n\n`;
    });
    text += `💰 *Grand Total:* ₹${cartGrandTotal}\n`;
    text += `🚚 *Delivery:* Free Shipping above ₹499 | COD & UPI Available\n\n`;
    text += `Please confirm my order and send payment instructions!`;
    return encodeURIComponent(text);
  };

  if (!isCartOpen) return null;

  const handleApplyCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCodeInput.trim()) return;
    setCouponLoading(true);
    await applyCouponCode(couponCodeInput.trim());
    setCouponLoading(false);
    setCouponCodeInput('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-white border-l border-soft h-full flex flex-col justify-between shadow-xl animate-slide-left text-earth">
        {/* Header */}
        <div className="p-4 border-b border-soft flex items-center justify-between bg-cream">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-olive" />
            <h3 className="text-base font-bold font-serif text-earth">Your Shopping Cart ({cart.length})</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full text-stone-500 hover:text-earth hover:bg-stone-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-cream/80 px-4 py-2 border-b border-soft text-xs">
          {cartSubtotal >= 499 ? (
            <div className="text-olive font-bold flex items-center gap-1.5">
              <Check className="w-4 h-4 text-olive" />
              <span>🎉 Congratulations! You unlocked FREE Delivery!</span>
            </div>
          ) : (
            <div className="text-stone-700">
              Add <strong className="text-terracotta">₹{499 - cartSubtotal}</strong> more to get{' '}
              <strong className="text-olive">FREE Shipping</strong>!
            </div>
          )}
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-paper">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto text-stone-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-sm font-medium text-stone-600">Your cart is currently empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-olive hover:bg-[#4a4a34] text-white text-xs font-bold px-4 py-2 rounded-xl transition"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-soft p-3 rounded-2xl flex gap-3 relative group shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-soft"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-1">
                    <h4 className="text-xs font-bold font-serif text-earth leading-tight line-clamp-1">
                      {item.name}
                    </h4>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-400 hover:text-rose-600 transition"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="text-[10px] bg-cream text-olive px-2 py-0.5 rounded border border-soft inline-block my-1 font-semibold">
                    {item.variantWeight}
                  </span>

                  {item.customDetails && (
                    <p className="text-[10px] text-stone-500 line-clamp-2 italic mb-1">
                      {item.customDetails.roastingSummary}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs font-bold text-earth">
                      ₹{item.price * item.quantity}
                    </span>

                    {/* Qty Controls */}
                    <div className="flex items-center bg-cream border border-stone-200 rounded-lg p-0.5">
                      <button
                        onClick={() => updateCartQty(item.id, -1)}
                        className="w-5 h-5 rounded text-stone-600 hover:bg-stone-200 flex items-center justify-center"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold px-2 text-earth">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQty(item.id, 1)}
                        className="w-5 h-5 rounded text-stone-600 hover:bg-stone-200 flex items-center justify-center"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Calculations */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-soft bg-cream space-y-3">
            {/* Coupon Code Section */}
            <div>
              {appliedCoupon ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-2.5 rounded-xl text-xs flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-emerald-600" />
                    <span>
                      Coupon <strong>{appliedCoupon.code}</strong> applied (-₹{appliedCoupon.discountAmount})
                    </span>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-stone-500 hover:text-rose-600 font-bold underline text-[11px]"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponCodeInput}
                    onChange={(e) => setCouponCodeInput(e.target.value)}
                    placeholder="Enter Coupon Code (e.g. DHAANYA10)"
                    className="bg-white border border-stone-200 text-xs text-earth rounded-xl px-3 py-2 flex-1 focus:outline-none focus:border-olive uppercase font-semibold"
                  />
                  <button
                    type="submit"
                    disabled={couponLoading}
                    className="bg-white hover:bg-stone-100 text-earth border border-stone-200 text-xs font-bold px-3 py-2 rounded-xl transition"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-earth">₹{cartSubtotal}</span>
              </div>
              {cartTotalDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Coupon Discount:</span>
                  <span>-₹{cartTotalDiscount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>GST Tax (5%):</span>
                <span className="font-bold text-earth">₹{cartTax}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee:</span>
                <span className="font-bold text-earth">
                  {cartShippingFee === 0 ? <strong className="text-olive">FREE</strong> : `₹${cartShippingFee}`}
                </span>
              </div>
              <div className="pt-2 border-t border-stone-200 flex justify-between items-baseline text-sm">
                <span className="font-bold text-earth">Grand Total:</span>
                <span className="text-xl font-bold text-olive">₹{cartGrandTotal}</span>
              </div>
            </div>

            {/* Proceed to Checkout CTA & WhatsApp Order */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full bg-olive hover:bg-[#4a4a34] text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow transition active:scale-95"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/919008625716?text=${generateCartWhatsAppMessage()}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-cream text-olive border border-soft font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-stone-100 transition active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-olive" />
                <span>Order Entire Cart via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
