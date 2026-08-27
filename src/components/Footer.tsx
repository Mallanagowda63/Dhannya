import React, { useState } from 'react';
import {
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  Truck,
  Sparkles,
  Send,
  Heart,
  Wheat,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DhaanyaLogo } from './DhaanyaLogo';

export const Footer: React.FC<{
  onNavigateHome?: () => void;
  onNavigateCustomMasala: () => void;
  onNavigateOurStory?: () => void;
  onNavigateFreshMilling?: () => void;
  onOpenBrandSystem?: () => void;
}> = ({ onNavigateHome, onNavigateCustomMasala, onNavigateOurStory, onNavigateFreshMilling, onOpenBrandSystem }) => {
  const { showToast, setActiveCategory, login, setIsAdminMode } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    showToast('🎉 Thank you for subscribing to Dhaanya Pantry updates!', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-[#2A2620] text-[#F4ECD8] border-t border-[#C89211]/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-[#F4ECD8]/10">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F4ECD8]/5 border border-[#F4ECD8]/10">
            <div className="w-12 h-12 rounded-lg bg-[#3E4B32] text-[#E8B93E] flex items-center justify-center shrink-0">
              <Wheat className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#F4ECD8]">Freshly Milled</h4>
              <p className="text-xs text-[#F4ECD8]/70">Ground fresh on order placement</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F4ECD8]/5 border border-[#F4ECD8]/10">
            <div className="w-12 h-12 rounded-lg bg-[#3E4B32] text-[#E8B93E] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#F4ECD8]">Whole Grain Purity</h4>
              <p className="text-xs text-[#F4ECD8]/70">100% unpolished, zero chemicals</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F4ECD8]/5 border border-[#F4ECD8]/10">
            <div className="w-12 h-12 rounded-lg bg-[#3E4B32] text-[#E8B93E] flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#F4ECD8]">Express Delivery</h4>
              <p className="text-xs text-[#F4ECD8]/70">Free shipping on orders above ₹499</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#F4ECD8]/5 border border-[#F4ECD8]/10">
            <div className="w-12 h-12 rounded-lg bg-[#3E4B32] text-[#E8B93E] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#C89211]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base text-[#F4ECD8]">Custom Masala Mill</h4>
              <p className="text-xs text-[#F4ECD8]/70">Blend your exact spice ratios</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-[#F4ECD8]/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <DhaanyaLogo variant="light" size="lg" />
            <p className="font-serif italic text-base text-[#E8B93E] max-w-sm">
              "Rooted in tradition, freshly milled before you and for you."
            </p>
            <p className="text-xs text-[#F4ECD8]/75 leading-relaxed max-w-sm">
              Restoring authentic Indian food wisdom. Unpolished whole grains, freshly ground spices, and cold-pressed oils prepared with complete transparency.
            </p>
          </div>

          {/* Shop Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#E8B93E] uppercase tracking-wider">
              Explore Pantry
            </h4>
            <ul className="space-y-2 text-xs text-[#F4ECD8]/80">
              <li>
                <button
                  onClick={() => setActiveCategory('Flour')}
                  className="hover:text-[#E8B93E] transition-colors"
                >
                  Fresh Flours & Atta
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveCategory('Spices')}
                  className="hover:text-[#E8B93E] transition-colors"
                >
                  Whole Ground Spices
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveCategory('Wood Pressed Oils')}
                  className="hover:text-[#E8B93E] transition-colors"
                >
                  Cold-Pressed Oils
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveCategory('Millets')}
                  className="hover:text-[#E8B93E] transition-colors"
                >
                  Heritage Millets
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateCustomMasala}
                  className="hover:text-[#E8B93E] transition-colors flex items-center gap-1 text-[#C89211] font-semibold"
                >
                  <Sparkles className="w-3 h-3" /> Custom Masala Mill
                </button>
              </li>
            </ul>
          </div>

          {/* Brand & Experience Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#E8B93E] uppercase tracking-wider">
              About Dhaanya
            </h4>
            <ul className="space-y-2 text-xs text-[#F4ECD8]/80">
              <li>
                <button
                  onClick={onNavigateOurStory}
                  className="hover:text-[#E8B93E] transition-colors"
                >
                  Our Story & Belief
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateFreshMilling}
                  className="hover:text-[#E8B93E] transition-colors"
                >
                  Fresh Milling Ritual
                </button>
              </li>
              {onOpenBrandSystem && (
                <li>
                  <button
                    onClick={onOpenBrandSystem}
                    className="text-[#E8B93E] hover:text-[#FAF6ED] font-bold transition-colors flex items-center gap-1"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C89211]" />
                    360° Brand System & Guidelines
                  </button>
                </li>
              )}
              <li>
                <span className="text-[#F4ECD8]/60 cursor-default">Store & Mill Locations</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#E8B93E] uppercase tracking-wider">
              Stay Connected
            </h4>
            <p className="text-xs text-[#F4ECD8]/75">
              Subscribe to receive updates on seasonal grain harvests and custom recipe blends.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-[#F4ECD8]/10 border border-[#F4ECD8]/20 rounded-md px-3 py-2 text-xs text-[#F4ECD8] placeholder-[#F4ECD8]/50 focus:outline-none focus:border-[#C89211]"
              />
              <button
                type="submit"
                className="w-full py-2 bg-[#C89211] hover:bg-[#A9542B] text-[#2A2620] hover:text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-1.5"
              >
                <Send className="w-3 h-3" /> Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4ECD8]/60">
          <p>© {new Date().getFullYear()} Dhaanya (ಧಾನ್ಯ). All Rights Reserved.</p>
          <div className="flex items-center gap-1 font-kannada text-[#E8B93E]">
            <span>ಧಾನ್ಯ — Rooted in tradition, freshly milled for you.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
