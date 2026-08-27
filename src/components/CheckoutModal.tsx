import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Address, Order } from '../types';
import {
  X,
  MapPin,
  Clock,
  CreditCard,
  CheckCircle2,
  Truck,
  ShieldCheck,
  ChevronRight,
  QrCode,
  Sparkles,
  PackageCheck,
  ShoppingBag,
} from 'lucide-react';
import { DhaanyaLogo } from './DhaanyaLogo';

interface CheckoutModalProps {
  onShowUnboxing?: (order: Order) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ onShowUnboxing }) => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    user,
    cart,
    cartSubtotal,
    cartTotalDiscount,
    cartTax,
    cartShippingFee,
    cartGrandTotal,
    placeOrder,
    clearCart,
  } = useApp();

  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [loading, setLoading] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  // Address State
  const [address, setAddress] = useState<Address>(
    user?.addresses?.[0] || {
      id: 'addr-new',
      fullName: user?.name || '',
      mobile: user?.mobile || '',
      email: user?.email || '',
      street: '',
      city: '',
      state: 'Karnataka',
      pincode: '',
    }
  );

  const [deliverySlot, setDeliverySlot] = useState('Morning (9:00 AM - 1:00 PM)');
  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'Razorpay' | 'UPI'>('UPI');

  if (!isCheckoutOpen) return null;

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePlaceOrderSubmit = async () => {
    setLoading(true);
    try {
      const order = await placeOrder(address, deliverySlot, paymentMethod);

      if (order) {
        setCompletedOrder(order);
        setStep('confirmation');
      }
    } catch (err) {
      console.error('Order placement error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsCheckoutOpen(false);
    setStep('details');
    setCompletedOrder(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A2620]/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-[#F4ECD8] text-[#2A2620] w-full max-w-3xl rounded-2xl shadow-2xl border border-[#2A2620]/15 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#2A2620] text-[#F4ECD8] p-5 flex items-center justify-between border-b border-[#C89211]/30">
          <DhaanyaLogo variant="light" size="sm" />
          <span className="font-serif text-lg font-bold text-[#E8B93E]">
            {step === 'details' && '1. Delivery Address'}
            {step === 'payment' && '2. Payment Method'}
            {step === 'confirmation' && 'Order Confirmed'}
          </span>
          <button
            onClick={handleCloseModal}
            className="p-1 rounded-full hover:bg-white/10 text-[#F4ECD8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          {step === 'details' && (
            <form onSubmit={handleDetailsSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    className="w-full bg-[#F8F3E6] border border-[#2A2620]/20 rounded-md p-2.5 text-xs text-[#2A2620] focus:outline-none focus:border-[#C89211]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70 block mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={address.mobile}
                    onChange={(e) => setAddress({ ...address, mobile: e.target.value })}
                    className="w-full bg-[#F8F3E6] border border-[#2A2620]/20 rounded-md p-2.5 text-xs text-[#2A2620] focus:outline-none focus:border-[#C89211]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70 block mb-1">
                  Street Address & Apartment *
                </label>
                <input
                  type="text"
                  required
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                  className="w-full bg-[#F8F3E6] border border-[#2A2620]/20 rounded-md p-2.5 text-xs text-[#2A2620] focus:outline-none focus:border-[#C89211]"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70 block mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full bg-[#F8F3E6] border border-[#2A2620]/20 rounded-md p-2.5 text-xs text-[#2A2620] focus:outline-none focus:border-[#C89211]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70 block mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                    className="w-full bg-[#F8F3E6] border border-[#2A2620]/20 rounded-md p-2.5 text-xs text-[#2A2620] focus:outline-none focus:border-[#C89211]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70 block mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    value={address.pincode}
                    onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                    className="w-full bg-[#F8F3E6] border border-[#2A2620]/20 rounded-md p-2.5 text-xs text-[#2A2620] focus:outline-none focus:border-[#C89211]"
                  />
                </div>
              </div>

              {/* Delivery Slot */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70 block mb-2">
                  Preferred Fresh Delivery Slot
                </label>
                <select
                  value={deliverySlot}
                  onChange={(e) => setDeliverySlot(e.target.value)}
                  className="w-full bg-[#F8F3E6] border border-[#2A2620]/20 rounded-md p-2.5 text-xs text-[#2A2620] focus:outline-none focus:border-[#C89211]"
                >
                  <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                  <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#3E4B32] hover:bg-[#2A2620] text-[#F4ECD8] font-bold text-xs uppercase tracking-wider rounded-md transition-colors shadow"
              >
                PROCEED TO PAYMENT (₹{cartGrandTotal})
              </button>
            </form>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg font-bold mb-3 text-[#2A2620]">
                  Select Payment Option
                </h3>
                <div className="space-y-3">
                  <label
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      paymentMethod === 'UPI'
                        ? 'bg-[#3E4B32] text-[#F4ECD8] border-[#3E4B32]'
                        : 'bg-[#F8F3E6] text-[#2A2620] border-[#2A2620]/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <QrCode className="w-5 h-5 text-[#C89211]" />
                      <span className="font-bold text-sm">UPI Instant Pay / GPay / PhonePe</span>
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'UPI'}
                      onChange={() => setPaymentMethod('UPI')}
                    />
                  </label>

                  <label
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      paymentMethod === 'Razorpay'
                        ? 'bg-[#3E4B32] text-[#F4ECD8] border-[#3E4B32]'
                        : 'bg-[#F8F3E6] text-[#2A2620] border-[#2A2620]/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-[#C89211]" />
                      <div>
                        <span className="font-bold text-sm block">Online Payment (Cards / NetBanking / Razorpay)</span>
                        <span className="text-[11px] opacity-75">Server-side Razorpay Payment Gateway Test Mode</span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'Razorpay'}
                      onChange={() => setPaymentMethod('Razorpay')}
                    />
                  </label>

                  <label
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      paymentMethod === 'COD'
                        ? 'bg-[#3E4B32] text-[#F4ECD8] border-[#3E4B32]'
                        : 'bg-[#F8F3E6] text-[#2A2620] border-[#2A2620]/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-[#C89211]" />
                      <span className="font-bold text-sm">Cash on Delivery (COD)</span>
                    </div>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'COD'}
                      onChange={() => setPaymentMethod('COD')}
                    />
                  </label>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-[#F8F3E6] p-4 rounded-xl space-y-2 text-xs text-[#2A2620]/80">
                <div className="flex justify-between font-serif text-sm font-bold text-[#2A2620]">
                  <span>Grand Total:</span>
                  <span className="text-[#C89211]">₹{cartGrandTotal}</span>
                </div>
                <p className="text-[11px] text-[#2A2620]/60">
                  Delivering to: {address.street}, {address.city} ({address.pincode})
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="px-6 py-3 rounded-md border border-[#2A2620]/30 font-bold text-xs uppercase"
                >
                  Back
                </button>
                <button
                  type="button"
                  disabled={loading}
                  onClick={handlePlaceOrderSubmit}
                  className="flex-1 py-3.5 bg-[#C89211] hover:bg-[#A9542B] text-[#2A2620] hover:text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors shadow disabled:opacity-50"
                >
                  {loading ? 'Processing Order...' : `PLACE ORDER NOW (₹${cartGrandTotal})`}
                </button>
              </div>
            </div>
          )}

          {step === 'confirmation' && completedOrder && (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#3E4B32] text-[#E8B93E] flex items-center justify-center mx-auto">
                <PackageCheck className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#3E4B32]">
                  ORDER CONFIRMED
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#2A2620] mt-1">
                  Your Dhaanya order is being prepared with care.
                </h2>
                <p className="text-sm text-[#2A2620]/75 mt-2">
                  Order ID: <strong className="text-[#2A2620]">{completedOrder.id}</strong>
                </p>
              </div>

              <div className="kraft-card p-4 rounded-xl text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#2A2620]/10 pb-2">
                  <span className="font-bold">Items Count:</span>
                  <span>{completedOrder.items.length} item(s)</span>
                </div>
                <div className="flex justify-between border-b border-[#2A2620]/10 pb-2">
                  <span className="font-bold">Total Paid:</span>
                  <span className="text-[#C89211] font-bold">₹{completedOrder.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Delivery Slot:</span>
                  <span>{completedOrder.deliverySlot}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleCloseModal}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#3E4B32] text-[#F4ECD8] font-bold text-xs uppercase tracking-wider rounded-md hover:bg-[#2A2620] transition-colors"
                >
                  CONTINUE SHOPPING
                </button>

                {onShowUnboxing && (
                  <button
                    onClick={() => {
                      const currentOrder = completedOrder;
                      handleCloseModal();
                      if (currentOrder) onShowUnboxing(currentOrder);
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#C89211] text-[#2A2620] font-bold text-xs uppercase tracking-wider rounded-md hover:bg-[#A9542B] hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>View Unboxing Experience</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
