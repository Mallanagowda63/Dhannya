import React, { useState } from 'react';
import {
  Leaf,
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Send,
  Heart,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC<{
  onNavigateHome?: () => void;
  onNavigateCustomMasala: () => void;
}> = ({ onNavigateHome, onNavigateCustomMasala }) => {
  const { showToast } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    showToast('🎉 Thank you for subscribing! Check your inbox for ₹100 discount coupon.', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-cream text-earth border-t border-soft pt-12 pb-8">
      {/* Trust Badges Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 border-b border-soft pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-soft shadow-xs hover:border-olive transition">
            <div className="w-12 h-12 rounded-xl bg-cream border border-soft flex items-center justify-center shrink-0">
              <Leaf className="w-6 h-6 text-olive" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-earth">100% Organic & Pure</h4>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-xs sm:text-sm text-stone-600">Zero additives, artificial colors or preservatives</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-soft shadow-xs hover:border-olive transition">
            <div className="w-12 h-12 rounded-xl bg-cream border border-soft flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-olive" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-earth">Express Shipping</h4>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-xs sm:text-sm text-stone-600">Free doorstep delivery on orders &gt; ₹499</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-soft shadow-xs hover:border-olive transition">
            <div className="w-12 h-12 rounded-xl bg-cream border border-soft flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-olive" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-earth">100% Freshly Ground</h4>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-xs sm:text-sm text-stone-600">Custom roasted & milled on demand</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-soft shadow-xs hover:border-olive transition">
            <div className="w-12 h-12 rounded-xl bg-cream border border-soft flex items-center justify-center shrink-0">
              <RotateCcw className="w-6 h-6 text-olive" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-bold text-earth">Guaranteed Quality</h4>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-xs sm:text-sm text-stone-600">7-Day easy replacement or 100% refund support</p>
            </div>
          </div>
        </div>

        {/* Verified Organic Certifications & Seals Banner */}
        <div className="bg-white border border-soft rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-xs sm:text-sm font-bold text-earth flex items-center gap-2">
                <span>Government Certified Organic Standards</span>
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-0.5 rounded-full font-extrabold uppercase">
                  Verified
                </span>
              </h5>
              <p className="text-xs text-stone-600">
                FSSAI License No. <strong className="text-earth">11522001000482</strong> • USDA Organic • India Organic (NPOP) • NABL Lab Tested
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap text-stone-700 font-bold text-xs sm:text-sm">
            <span className="bg-cream border border-soft px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              🌿 100% Pure & Unadulterated
            </span>
            <span className="bg-cream border border-soft px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              🔒 256-Bit SSL Encrypted
            </span>
            <span className="bg-cream border border-soft px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              ⭐ 50,000+ Happy Customers
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* Brand Bio */}
        <div className="lg:col-span-2 space-y-4">
          <div
            onClick={onNavigateHome}
            className="flex items-center gap-2 cursor-pointer group"
            title="Go to Home"
          >
            <div className="w-9 h-9 rounded-xl bg-olive p-0.5 flex items-center justify-center group-hover:scale-105 transition">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold font-serif text-earth tracking-tight">Dhaanya</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm">
            Dhaanya is India’s premier artisanal organic wellness store. We bring you 100% cold-pressed oils from traditional wooden Ghani, handpicked superfoods, and our industry-first <strong>Make Your Own Masala</strong> custom spice milling studio.
          </p>

          {/* Newsletter */}
          <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
            <label className="block text-xs font-bold text-earth">
              Subscribe for organic health tips & ₹100 voucher:
            </label>
            <div className="flex items-center gap-2 max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-white border border-stone-200 text-xs text-earth rounded-lg px-3 py-2.5 flex-1 focus:outline-none focus:border-olive"
              />
              <button
                type="submit"
                className="bg-olive hover:bg-[#4a4a34] text-white font-bold px-4 py-2.5 rounded-lg text-xs flex items-center gap-1 transition"
              >
                <span>Join</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-earth uppercase tracking-wider mb-4 border-b border-soft pb-1">
            Shop Categories
          </h4>
          <ul className="space-y-2 text-xs text-stone-600">
            <li>
              <a href="#category" className="hover:text-olive transition">
                Wood Pressed Oils
              </a>
            </li>
            <li>
              <a href="#category" className="hover:text-olive transition">
                Dry Fruits & Nuts
              </a>
            </li>
            <li>
              <a href="#category" className="hover:text-olive transition">
                Organic Millets & Flours
              </a>
            </li>
            <li>
              <a href="#category" className="hover:text-olive transition">
                Pure Natural Honey
              </a>
            </li>
            <li>
              <button
                onClick={onNavigateCustomMasala}
                className="text-olive hover:underline font-bold flex items-center gap-1 transition"
              >
                <Sparkles className="w-3.5 h-3.5" /> Custom Masala Studio
              </button>
            </li>
          </ul>
        </div>

        {/* Support & Policies */}
        <div>
          <h4 className="text-sm font-bold text-earth uppercase tracking-wider mb-4 border-b border-soft pb-1">
            Customer Care
          </h4>
          <ul className="space-y-2 text-xs text-stone-600">
            <li>
              <a href="#orders" className="hover:text-olive transition">
                Track Your Order
              </a>
            </li>
            <li>
              <a href="#shipping" className="hover:text-olive transition">
                Shipping & Delivery Policy
              </a>
            </li>
            <li>
              <a href="#returns" className="hover:text-olive transition">
                Returns & Replacement
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-olive transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-olive transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-bold text-earth uppercase tracking-wider mb-4 border-b border-soft pb-1">
            Contact Us
          </h4>
          <div className="space-y-3 text-xs text-stone-600">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-olive shrink-0 mt-0.5" />
              <span>Dhaanya Organic Mills, Plot 42, Organic Hub, Bandra West, Mumbai 400050</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-olive shrink-0" />
              <span>+91 98765 43210 / 022-26401122</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-olive shrink-0" />
              <span>support@dhaanyaorganic.com</span>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-olive border border-soft px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-bold hover:bg-stone-50 transition"
              >
                <PhoneCall className="w-3.5 h-3.5 text-olive" /> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Payment Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-soft pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
        <div>
          © {new Date().getFullYear()} Dhaanya Organic Foods Pvt. Ltd. All Rights Reserved.
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase font-bold text-stone-500">Accepted Payments:</span>
          <span className="bg-white px-2 py-1 rounded text-stone-700 font-bold border border-soft">
            UPI / GPay
          </span>
          <span className="bg-white px-2 py-1 rounded text-stone-700 font-bold border border-soft">
            Razorpay
          </span>
          <span className="bg-white px-2 py-1 rounded text-stone-700 font-bold border border-soft">
            Visa / MC
          </span>
          <span className="bg-white px-2 py-1 rounded text-stone-700 font-bold border border-soft">
            Cash On Delivery
          </span>
        </div>
      </div>
    </footer>
  );
};
