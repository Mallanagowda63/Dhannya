import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Trash2, Plus, Minus, ShoppingBag, Tag, ArrowRight, Sparkles, Check, PhoneCall } from 'lucide-react';
import { DhaanyaLogo } from './DhaanyaLogo';

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
    let text = `🌱 *Dhaanya (ಧಾನ್ಯ) - Fresh Milling Order Request* 🌱\n\n`;
    (cart || []).forEach((item, idx) => {
      const itemImg = item.image || '/images/Dailywell_Products/Garam%20Masala/01.jpg';
      const imgUrl = itemImg.startsWith('http') ? itemImg : `${origin}${itemImg}`;
      text += `${idx + 1}. *${item.name || 'Dhaanya Item'}* (${item.variantWeight || 'Standard'})\n`;
      text += `   - Qty: ${item.quantity} | Price: ₹${(item.price || 0) * item.quantity}\n`;
      text += `   - Image: ${imgUrl}\n\n`;
    });
    text += `💰 *Subtotal:* ₹${cartSubtotal}\n`;
    text += `🚚 *Delivery:* ₹${cartShippingFee === 0 ? 'FREE' : cartShippingFee}\n`;
    text += `✨ *Grand Total:* ₹${cartGrandTotal}\n\n`;
    text += `Please confirm my fresh milling order!`;
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
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#2A2620]/70 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#F4ECD8] text-[#2A2620] border-l border-[#2A2620]/15 h-full flex flex-col justify-between shadow-2xl animate-slide-left">
        {/* Header */}
        <div className="p-5 border-b border-[#2A2620]/10 flex items-center justify-between bg-[#F8F3E6]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#3E4B32]" />
            <h2 className="font-serif font-bold text-xl text-[#2A2620]">
              Your Fresh Basket
            </h2>
            <span className="text-xs bg-[#3E4B32] text-[#F4ECD8] px-2 py-0.5 rounded-full font-bold">
              {cart.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full hover:bg-[#2A2620]/10 text-[#2A2620] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List / Empty State */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <DhaanyaLogo variant="default" size="md" className="mx-auto opacity-70" />
              <h3 className="font-serif text-2xl font-bold text-[#2A2620]">
                Your basket is waiting.
              </h3>
              <p className="text-xs text-[#2A2620]/70 max-w-xs mx-auto">
                Explore our freshly milled whole flours, stone-ground spices, and cold-pressed oils.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-3 rounded-md bg-[#3E4B32] text-[#F4ECD8] font-semibold text-xs uppercase tracking-wider shadow-sm hover:bg-[#2A2620] transition-colors"
              >
                Browse Fresh Pantry
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="kraft-card p-3 rounded-xl flex gap-3 items-center justify-between shadow-xs"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg bg-white/50 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-sm text-[#2A2620] truncate">
                    {item.name}
                  </h4>
                  <span className="text-[11px] text-[#2A2620]/60 block">
                    Weight: {item.variantWeight}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-serif font-bold text-sm text-[#2A2620]">
                      ₹{item.price * item.quantity}
                    </span>
                    <span className="text-[10px] text-[#2A2620]/50">
                      (₹{item.price} each)
                    </span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[#7C2A1E] hover:text-[#2A2620] p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center border border-[#2A2620]/20 rounded bg-[#F4ECD8]">
                    <button
                      onClick={() => updateCartQty(item.id, -1)}
                      className="p-1 hover:bg-[#2A2620]/10 text-[#2A2620] cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 font-bold text-xs text-[#2A2620]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateCartQty(item.id, 1)}
                      className="p-1 hover:bg-[#2A2620]/10 text-[#2A2620] cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#2A2620]/10 bg-[#F8F3E6] space-y-4">
            {/* Coupon Code Input */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-[#3E4B32]/10 border border-[#3E4B32]/30 p-2.5 rounded-lg text-xs">
                  <span className="flex items-center gap-1.5 font-semibold text-[#3E4B32]">
                    <Tag className="w-3.5 h-3.5 text-[#C89211]" /> Coupon applied ({appliedCoupon.code})
                  </span>
                  <button
                    onClick={removeCoupon}
                    className="text-[#7C2A1E] hover:underline font-bold"
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
                    placeholder="Enter Coupon Code"
                    className="flex-1 bg-[#F4ECD8] border border-[#2A2620]/20 rounded-md px-3 py-1.5 text-xs text-[#2A2620] focus:outline-none focus:border-[#C89211] uppercase"
                  />
                  <button
                    type="submit"
                    disabled={couponLoading || !couponCodeInput.trim()}
                    className="px-3 py-1.5 bg-[#2A2620] text-[#F4ECD8] font-bold text-xs rounded-md uppercase tracking-wider hover:bg-[#3E4B32] disabled:opacity-50"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Subtotal Calculations */}
            <div className="space-y-1.5 text-xs text-[#2A2620]/80 pt-2 border-t border-[#2A2620]/10">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold">₹{cartSubtotal}</span>
              </div>
              {cartTotalDiscount > 0 && (
                <div className="flex justify-between text-[#3E4B32]">
                  <span>Discount:</span>
                  <span className="font-semibold">-₹{cartTotalDiscount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span className="font-semibold">
                  {cartShippingFee === 0 ? 'FREE' : `₹${cartShippingFee}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-serif font-bold text-[#2A2620] pt-2 border-t border-[#2A2620]/10">
                <span>Total Amount:</span>
                <span className="text-[#C89211]">₹{cartGrandTotal}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-3.5 bg-[#C89211] hover:bg-[#A9542B] text-[#2A2620] hover:text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/919876543210?text=${generateCartWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#3E4B32]/10 hover:bg-[#3E4B32]/20 text-[#3E4B32] font-semibold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 border border-[#3E4B32]/30"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
