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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-soft w-full max-w-2xl rounded-3xl shadow-xl overflow-hidden text-earth my-8">
        {/* Header */}
        <div className="bg-cream p-5 border-b border-soft flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold font-serif text-earth">Dhaanya Express Checkout</h3>
            <p className="text-xs text-stone-500">Step {step === 'details' ? '1 of 2' : step === 'payment' ? '2 of 2' : 'Completed'}</p>
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
                        <div className="text-[10px] opacity-75 truncate max-w-[200px]">{savedAddr.street}, {savedAddr.city}</div>
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

            {/* Delivery Slot Selection */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-olive flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 2. Preferred Delivery Slot
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {[
                  'Morning (9:00 AM - 1:00 PM)',
                  'Evening (4:00 PM - 8:00 PM)',
                  'Express 2-Hour Slot (+₹20)',
                ].map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setDeliverySlot(slot)}
                    className={`p-3 rounded-xl border text-left font-semibold transition ${
                      deliverySlot === slot
                        ? 'bg-cream text-olive border-olive'
                        : 'bg-white text-stone-600 border-soft hover:border-stone-300'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-soft flex justify-between items-center">
              <div>
                <span className="text-xs text-stone-500 block">Total Payable</span>
                <span className="text-xl font-bold text-olive">₹{cartGrandTotal}</span>
              </div>
              <button
                type="submit"
                className="bg-olive hover:bg-[#4a4a34] text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center gap-2 transition"
              >
                <span>Continue to Payment</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Payment Choice & Summary */}
        {step === 'payment' && (
          <div className="p-6 space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-olive flex items-center gap-1.5">
                <CreditCard className="w-4 h-4" /> Select Payment Method
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* UPI Choice */}
                <div
                  onClick={() => setPaymentMethod('UPI')}
                  className={`p-4 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                    paymentMethod === 'UPI'
                      ? 'bg-cream border-olive text-olive'
                      : 'bg-white border-soft text-stone-600 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-olive" />
                    <span className="font-bold text-xs text-earth">UPI / GooglePay</span>
                  </div>
                  <span className="text-[10px] text-stone-500 mt-2 block">Instant QR Code or UPI ID</span>
                </div>

                {/* Razorpay Choice */}
                <div
                  onClick={() => setPaymentMethod('Razorpay')}
                  className={`p-4 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                    paymentMethod === 'Razorpay'
                      ? 'bg-cream border-olive text-olive'
                      : 'bg-white border-soft text-stone-600 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-olive" />
                    <span className="font-bold text-xs text-earth">Razorpay</span>
                  </div>
                  <span className="text-[10px] text-stone-500 mt-2 block">Cards, Netbanking & Wallets</span>
                </div>

                {/* COD Choice */}
                <div
                  onClick={() => setPaymentMethod('COD')}
                  className={`p-4 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                    paymentMethod === 'COD'
                      ? 'bg-cream border-olive text-olive'
                      : 'bg-white border-soft text-stone-600 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-olive" />
                    <span className="font-bold text-xs text-earth">Cash On Delivery</span>
                  </div>
                  <span className="text-[10px] text-stone-500 mt-2 block">Pay upon doorstep arrival</span>
                </div>
              </div>
            </div>

            {/* UPI QR Code Preview if UPI selected */}
            {paymentMethod === 'UPI' && (
              <div className="bg-cream p-4 rounded-2xl border border-soft text-center space-y-2">
                <span className="text-xs font-bold text-olive block">Scan to Pay via Any UPI App</span>
                <div className="w-32 h-32 bg-white p-2 rounded-xl mx-auto flex items-center justify-center border border-soft">
                  <div className="w-full h-full bg-cream rounded flex items-center justify-center text-olive font-bold text-xs text-center p-2">
                    DHAANYA-UPI@PAY
                  </div>
                </div>
                <p className="text-[10px] text-stone-500">Total: ₹{cartGrandTotal}</p>
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
                className="bg-olive hover:bg-[#4a4a34] disabled:opacity-50 text-white font-bold px-8 py-3.5 rounded-xl text-xs flex items-center gap-2 shadow transition active:scale-95"
              >
                {loading ? (
                  <span>Processing Payment...</span>
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

        {/* STEP 3: Order Confirmation */}
        {step === 'confirmation' && completedOrder && (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-cream border border-olive text-olive flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold font-serif text-earth">
              Order Confirmed!
            </h3>
            <p className="text-xs text-stone-600 max-w-sm mx-auto">
              Thank you for choosing Dhaanya Organic! Your fresh organic goods & custom spices are being prepared.
            </p>

            <div className="bg-cream p-4 rounded-2xl border border-soft max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-600">Order ID:</span>
                <span className="font-bold text-olive">{completedOrder.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Tracking Code:</span>
                <span className="font-bold text-earth">{completedOrder.trackingNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Estimated Delivery:</span>
                <span className="font-bold text-olive">{completedOrder.estimatedDelivery}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Total Paid:</span>
                <span className="font-bold text-earth">₹{completedOrder.total} ({completedOrder.paymentMethod})</span>
              </div>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="bg-olive hover:bg-[#4a4a34] text-white font-bold px-6 py-3 rounded-xl text-xs transition"
            >
              Back to Store
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
