import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { getApiUrl } from '../utils/apiConfig';
import { Address, Order } from '../types';
import {
  X,
  MapPin,
  Clock,
  CheckCircle2,
  Truck,
  ShieldCheck,
  ChevronRight,
  PackageCheck,
  ShoppingBag,
  CreditCard,
} from 'lucide-react';
import { DhaanyaLogo } from './DhaanyaLogo';
import { deliveryQuote } from '../data/delivery';

// Leaflet is only needed at checkout, so keep it out of the main bundle.
const DeliveryLocationPicker = React.lazy(() =>
  import('./DeliveryLocationPicker').then((m) => ({ default: m.DeliveryLocationPicker }))
);

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    user,
    cart,
    cartSubtotal,
    cartTotalDiscount,
    cartTax,
    cartHandlingFee,
    cartGrandTotal,
    placeOrder,
    startOnlinePayment,
    reloadOrders,
    showToast,
    clearCart,
  } = useApp();

  const [step, setStep] = useState<'details' | 'payment' | 'verifying' | 'confirmation'>('details');
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
  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'Online'>('COD');
  const [onlinePayment, setOnlinePayment] = useState<{ enabled: boolean; mode: string }>({ enabled: false, mode: 'sandbox' });

  // Online payment is offered only when the server has Cashfree keys configured.
  useEffect(() => {
    fetch(getApiUrl('/api/payment/config'))
      .then((res) => res.json())
      .then((data) => {
        if (data.cashfreeEnabled) {
          setOnlinePayment({ enabled: true, mode: data.mode });
          setPaymentMethod('Online');
        }
      })
      .catch(() => {});
  }, []);

  // Back from Cashfree's payment page: ask the server what actually happened,
  // since the redirect alone doesn't prove the customer paid.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get('payment_order_id');
    if (!orderId) return;
    window.history.replaceState({}, '', window.location.pathname);
    setIsCheckoutOpen(true);
    setStep('verifying');

    let cancelled = false;
    (async () => {
      // The bank's confirmation can lag the redirect by a few seconds.
      for (let attempt = 0; attempt < 6 && !cancelled; attempt++) {
        if (attempt > 0) await new Promise((resolve) => setTimeout(resolve, 2500));
        const data = await fetch(getApiUrl(`/api/payment/cashfree/status/${encodeURIComponent(orderId)}`))
          .then((res) => res.json())
          .catch(() => null);
        if (cancelled) return;
        if (data?.state === 'paid' && data.order) {
          clearCart();
          reloadOrders();
          setCompletedOrder(data.order);
          setStep('confirmation');
          return;
        }
        if (data?.state === 'failed' || data?.state === 'unknown') break;
      }
      if (cancelled) return;
      setStep('details');
      showToast(
        `Payment not completed for ${orderId}. Your cart is saved. If money was deducted, it will be confirmed by email or refunded; contact us with this order ID.`,
        'error'
      );
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!isCheckoutOpen) return null;

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.location) {
      showToast('Please mark your delivery location on the map.', 'error');
      return;
    }
    setStep('payment');
  };

  const handlePlaceOrderSubmit = async () => {
    setLoading(true);
    try {
      if (paymentMethod === 'Online') {
        // On success the browser leaves for Cashfree, so keep showing the spinner.
        await startOnlinePayment(address, deliverySlot);
        return;
      }
      const order = await placeOrder(address, deliverySlot, 'COD');

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
            {step === 'verifying' && 'Confirming Payment'}
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

              <React.Suspense fallback={<div className="h-56 rounded-md bg-[#F8F3E6] animate-pulse" />}>
                <DeliveryLocationPicker
                  value={address.location || null}
                  onChange={(location) => setAddress((prev) => ({ ...prev, location }))}
                />
              </React.Suspense>

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
                  {onlinePayment.enabled && (
                    <label
                      className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        paymentMethod === 'Online' ? 'bg-[#3E4B32] text-[#F4ECD8] border-[#3E4B32]' : 'bg-white/60 border-[#2A2620]/15'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-[#C89211]" />
                        <span className="font-bold text-sm">
                          Pay Online (UPI, Cards, Netbanking)
                          {onlinePayment.mode === 'sandbox' && <span className="ml-2 text-[10px] uppercase tracking-wider">Test mode</span>}
                        </span>
                      </div>
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'Online'}
                        onChange={() => setPaymentMethod('Online')}
                      />
                    </label>
                  )}
                  <label
                    className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      paymentMethod === 'COD' ? 'bg-[#3E4B32] text-[#F4ECD8] border-[#3E4B32]' : 'bg-white/60 border-[#2A2620]/15'
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
                <div className="flex justify-between">
                  <span>Includes handling fee:</span>
                  <span>₹{cartHandlingFee}</span>
                </div>
                {address.location && (
                  <p className="text-[11px] font-semibold text-[#2A2620]/80">
                    {deliveryQuote(address.location).freeDelivery
                      ? `Free delivery (${deliveryQuote(address.location).distanceKm} km from our store).`
                      : `${deliveryQuote(address.location).distanceKm} km from our store: the Porter/Swiggy delivery fee is paid to the rider on delivery.`}
                  </p>
                )}
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
                  {loading
                    ? 'Processing Order...'
                    : paymentMethod === 'Online'
                    ? `PAY NOW (₹${cartGrandTotal})`
                    : `PLACE ORDER NOW (₹${cartGrandTotal})`}
                </button>
              </div>
            </div>
          )}

          {step === 'verifying' && (
            <div className="text-center py-12 space-y-3">
              <ShieldCheck className="w-10 h-10 mx-auto text-[#3E4B32] animate-pulse" />
              <p className="font-serif text-lg font-bold">Confirming your payment…</p>
              <p className="text-xs text-[#2A2620]/70">Please don't close this page.</p>
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
                  <span className="font-bold">{completedOrder.paymentMethod === 'COD' ? 'Pay on Delivery:' : 'Total Paid:'}</span>
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
