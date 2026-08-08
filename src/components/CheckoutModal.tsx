import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
} from 'lucide-react';

export const CheckoutModal: React.FC = () => {
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
  } = useApp();

  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [loading, setLoading] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  // Address State
  const [address, setAddress] = useState<Address>(
    user?.addresses[0] || {
      id: 'addr-new',
      fullName: 'Priya Sharma',
      mobile: '+91 98765 43210',
      street: 'Flat 402, Green View Apts, Bandra West',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400050',
    }
  );

  const [deliverySlot, setDeliverySlot] = useState('Morning (9:00 AM - 1:00 PM)');
  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'Razorpay' | 'UPI'>('UPI');

  if (!isCheckoutOpen) return null;

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePlaceOrderClick = async () => {
    setLoading(true);
    const orderResult = await placeOrder(address, deliverySlot, paymentMethod);
    setLoading(false);
    if (orderResult) {
      setCompletedOrder(orderResult);
      setStep('confirmation');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-white border border-soft w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden text-earth my-8 relative"
      >
        {/* Header */}
        <div className="bg-cream p-5 border-b border-soft flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold font-serif text-earth">Dhaanya Express Checkout</h3>
            <p className="text-xs text-stone-500">
              Step {step === 'details' ? '1 of 2' : step === 'payment' ? '2 of 2' : 'Order Placed'}
            </p>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-1.5 rounded-full text-stone-500 hover:text-earth hover:bg-stone-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: Address & Delivery Slot */}
        {step === 'details' && (
          <form onSubmit={handleDetailsSubmit} className="p-6 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-olive flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> 1. Delivery Address
              </h4>

              {user && user.addresses.length > 0 && (
                <div className="space-y-2 mb-3">
                  <span className="text-[11px] font-bold text-stone-500 block">Select Saved Address:</span>
                  <div className="flex flex-wrap gap-2">
                    {user.addresses.map((savedAddr) => (
                      <button
                        type="button"
                        key={savedAddr.id}
                        onClick={() => setAddress(savedAddr)}
                        className={`text-xs px-3 py-2 rounded-xl border text-left font-medium transition ${
                          address.id === savedAddr.id
                            ? 'bg-cream border-olive text-olive font-bold'
                            : 'bg-white border-soft text-stone-600 hover:border-stone-300'
                        }`}
                      >
                        <div>{savedAddr.fullName}</div>
                        <div className="text-[10px] opacity-75 truncate max-w-[200px]">
                          {savedAddr.street}, {savedAddr.city}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    className="w-full bg-cream border border-stone-200 text-xs text-earth rounded-xl p-2.5 focus:outline-none focus:border-olive"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={address.mobile}
                    onChange={(e) => setAddress({ ...address, mobile: e.target.value })}
                    className="w-full bg-cream border border-stone-200 text-xs text-earth rounded-xl p-2.5 focus:outline-none focus:border-olive"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-stone-600 mb-1">Street Address / House No / Area</label>
                  <input
                    type="text"
                    required
                    value={address.street}
                    onChange={(e) => setAddress({ ...address, street: e.target.value })}
                    className="w-full bg-cream border border-stone-200 text-xs text-earth rounded-xl p-2.5 focus:outline-none focus:border-olive"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full bg-cream border border-stone-200 text-xs text-earth rounded-xl p-2.5 focus:outline-none focus:border-olive"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1">Pincode</label>
                  <input
                    type="text"
                    required
                    value={address.pincode}
                    onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                    className="w-full bg-cream border border-stone-200 text-xs text-earth rounded-xl p-2.5 focus:outline-none focus:border-olive"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Slot */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-olive flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 2. Preferred Delivery Slot
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Morning (9:00 AM - 1:00 PM)',
                  'Afternoon (1:00 PM - 5:00 PM)',
                  'Evening (5:00 PM - 9:00 PM)',
                  'Express 2-Hour Delivery (+₹49)',
                ].map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setDeliverySlot(slot)}
                    className={`text-xs px-3.5 py-3 rounded-xl border font-medium text-left transition ${
                      deliverySlot === slot
                        ? 'bg-cream border-olive text-olive font-bold'
                        : 'bg-white border-soft text-stone-600 hover:border-stone-300'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="bg-olive hover:bg-[#4a4a34] text-white font-bold px-8 py-3.5 rounded-xl text-xs flex items-center gap-2 shadow transition active:scale-95"
              >
                <span>Proceed to Payment</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Payment Selection */}
        {step === 'payment' && (
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-olive flex items-center gap-1.5">
                <CreditCard className="w-4 h-4" /> Select Payment Method
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* UPI */}
                <div
                  onClick={() => setPaymentMethod('UPI')}
                  className={`p-4 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                    paymentMethod === 'UPI'
                      ? 'bg-cream border-olive text-olive font-bold shadow-xs'
                      : 'bg-white border-soft text-stone-600 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-olive" />
                    <span className="font-bold text-xs text-earth">Instant UPI / QR Code</span>
                  </div>
                  <span className="text-[10px] text-stone-500 mt-2 block">GooglePay, PhonePe, Paytm, BHIM</span>
                </div>

                {/* COD Choice */}
                <div
                  onClick={() => setPaymentMethod('COD')}
                  className={`p-4 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                    paymentMethod === 'COD'
                      ? 'bg-cream border-olive text-olive font-bold shadow-xs'
                      : 'bg-white border-soft text-stone-600 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-olive" />
                    <span className="font-bold text-xs text-earth">Cash On Delivery (COD)</span>
                  </div>
                  <span className="text-[10px] text-stone-500 mt-2 block">Pay upon doorstep arrival</span>
                </div>
              </div>
            </div>

            {/* UPI QR Code Preview if UPI selected */}
            {paymentMethod === 'UPI' && (
              <div className="bg-cream p-4 rounded-2xl border border-soft text-center space-y-2">
                <span className="text-xs font-bold text-olive block">Scan to Pay via Any UPI App</span>
                <div className="w-32 h-32 bg-white p-2 rounded-xl mx-auto flex items-center justify-center border border-soft shadow-inner">
                  <div className="w-full h-full bg-cream rounded flex items-center justify-center text-olive font-bold text-xs text-center p-2">
                    DHAANYA-UPI@PAY
                  </div>
                </div>
                <p className="text-[10px] text-stone-500">Total Amount: ₹{cartGrandTotal}</p>
              </div>
            )}

            {/* Order Summary Recap */}
            <div className="bg-cream p-4 rounded-2xl border border-soft space-y-2 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Shipping Address:</span>
                <span className="font-bold text-earth text-right truncate max-w-[200px]">
                  {address.street}, {address.city}
                </span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Delivery Slot:</span>
                <span className="font-bold text-earth">{deliverySlot}</span>
              </div>
              <div className="pt-2 border-t border-stone-200 flex justify-between items-baseline">
                <span className="font-bold text-earth">Final Amount to Pay:</span>
                <span className="text-lg font-bold text-olive">₹{cartGrandTotal}</span>
              </div>
            </div>

            <div className="flex justify-between items-center gap-3">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="text-stone-500 hover:text-earth text-xs font-bold py-3"
              >
                Back to Address
              </button>
              <button
                onClick={handlePlaceOrderClick}
                disabled={loading}
                className="bg-olive hover:bg-[#4a4a34] disabled:opacity-50 text-white font-bold px-8 py-3.5 rounded-xl text-xs flex items-center gap-2 shadow-lg transition active:scale-95"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Order...</span>
                  </div>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Confirm & Place Order (₹{cartGrandTotal})</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Order Confirmation with OK Symbol Animation */}
        {step === 'confirmation' && completedOrder && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="p-8 text-center space-y-6 relative overflow-hidden"
          >
            {/* Celebration Confetti Dust Animation Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 1,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: [1, 1, 0],
                    scale: [0.5, 1, 0.8],
                    x: (Math.random() - 0.5) * 260,
                    y: (Math.random() - 0.5) * 240 - 50,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.1 + i * 0.05,
                    ease: 'easeOut',
                  }}
                  className={`absolute left-1/2 top-1/3 w-3 h-3 rounded-full ${
                    i % 3 === 0
                      ? 'bg-emerald-500'
                      : i % 3 === 1
                      ? 'bg-amber-400'
                      : 'bg-emerald-700'
                  }`}
                />
              ))}
            </div>

            {/* ANIMATED OK SYMBOL */}
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center my-4">
              {/* Outer Pulsing Aura Ring */}
              <motion.div
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: [0.8, 1.4, 1.2], opacity: [0.8, 0.3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full bg-emerald-500/30"
              />

              {/* Secondary Expanding Ripple */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1.25, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full border-2 border-emerald-500"
              />

              {/* Central Green Badge Circle */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 18,
                  delay: 0.1,
                }}
                className="w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-700 via-emerald-600 to-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 relative z-10"
              >
                {/* SVG Animated OK / Checkmark */}
                <svg
                  className="w-14 h-14 text-white drop-shadow-md"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <motion.circle
                    cx="26"
                    cy="26"
                    r="23"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="145"
                    initial={{ strokeDashoffset: 145 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                  <motion.path
                    d="M14 27l7.5 7.5L37 17.5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.45, delay: 0.4, ease: 'easeOut' }}
                  />
                </svg>
              </motion.div>
            </div>

            {/* Title & Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="space-y-2"
            >
              <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>ORDER PLACED SUCCESSFULLY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-earth">
                Thank You For Your Order!
              </h3>
              <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                Your order has been confirmed! Our artisans are preparing your organic goods and grinding your custom spices fresh.
              </p>
            </motion.div>

            {/* Order Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-cream p-5 rounded-2xl border border-soft max-w-md mx-auto text-left text-xs space-y-3 shadow-xs"
            >
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <span className="text-stone-500 font-medium">Order Status:</span>
                <span className="font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md text-[11px] flex items-center gap-1">
                  <PackageCheck className="w-3.5 h-3.5" /> Confirmed & Processing
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Order ID:</span>
                <span className="font-bold text-olive font-mono">{completedOrder.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Tracking Code:</span>
                <span className="font-bold text-earth font-mono">{completedOrder.trackingNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Estimated Delivery:</span>
                <span className="font-bold text-olive">{completedOrder.estimatedDelivery}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-stone-200">
                <span className="text-stone-600 font-bold">Total Paid ({completedOrder.paymentMethod}):</span>
                <span className="font-bold text-earth text-sm">₹{completedOrder.total}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-3 pt-2"
            >
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="bg-olive hover:bg-[#4a4a34] text-white font-bold px-8 py-3.5 rounded-xl text-xs shadow-md transition active:scale-95"
              >
                Done & Return to Store
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
