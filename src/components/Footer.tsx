import React, { useState } from 'react';
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Send,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getApiUrl } from '../utils/apiConfig';

export const Footer: React.FC<{
  onNavigateHome?: () => void;
  onNavigateCustomMasala: () => void;
  onNavigateOurStory?: () => void;
  onNavigateFreshMilling?: () => void;
  onNavigatePrivacyPolicy?: () => void;
  onNavigateRefundPolicy?: () => void;
  onOpenBrandSystem?: () => void;
}> = ({
  onNavigateHome,
  onNavigateCustomMasala,
  onNavigateOurStory,
  onNavigateFreshMilling,
  onNavigatePrivacyPolicy,
  onNavigateRefundPolicy,
}) => {
  const { setActiveCategory, user, showToast } = useApp();

  const [contactName, setContactName] = useState(user?.name || '');
  const [contactEmail, setContactEmail] = useState(user?.email || '');
  const [contactMessage, setContactMessage] = useState('');
  const [isSendingContact, setIsSendingContact] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail.trim() || !contactMessage.trim()) return;
    setIsSendingContact(true);
    try {
      const res = await fetch(getApiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: contactName, email: contactEmail, message: contactMessage }),
      });
      const data = await res.json();
      if (data.success) {
        showToast('Message sent! We will get back to you soon.', 'success');
        setContactMessage('');
      } else {
        showToast(data.message || 'Failed to send message. Please try again.', 'error');
      }
    } catch {
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSendingContact(false);
    }
  };

  return (
    <footer className="w-full relative bg-[#0D5B3A] text-white font-sans overflow-hidden border-t border-[#C89211]/40">
      {/* Background Organic Farm Banner Illustration */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <img
          src="/images/dhaanya_farm_footer_banner.jpg"
          alt="Dhaanya Organic Farm"
          className="w-full h-full object-cover object-bottom"
        />
        {/* Top gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D5B3A]/90 via-[#0D5B3A]/60 to-transparent h-48" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-20 sm:pb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8">
          {/* Left Info: Dhaanya Store Details */}
          <div className="space-y-2 max-w-md drop-shadow-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif tracking-tight text-white flex items-center gap-2">
              <span>Dhaanya</span>
              <span className="text-xs bg-white/20 text-[#E8B93E] font-kannada font-normal px-2 py-0.5 rounded border border-white/20">
                ಧಾನ್ಯ
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-stone-100 font-medium">
              Doddakallasandra, Bengaluru - 560062
            </p>

            <p className="text-xs sm:text-sm text-stone-100">
              Feedbacks:{' '}
              <a
                href="mailto:sales@dhaanyafoods.com"
                className="hover:underline text-white font-medium"
              >
                sales@dhaanyafoods.com
              </a>
            </p>

            <p className="text-xs sm:text-sm text-stone-100">
              WhatsApp Orders :{' '}
              <a
                href="https://wa.me/919008625716"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#86EFAC] font-bold"
              >
                +91 9008625716
              </a>
            </p>

            {/* Quick Contact Form */}
            <form onSubmit={handleContactSubmit} className="pt-3 space-y-2 max-w-xs">
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-xs text-white placeholder-stone-300 focus:outline-none focus:border-[#E8B93E]"
              />
              <input
                type="email"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-xs text-white placeholder-stone-300 focus:outline-none focus:border-[#E8B93E]"
              />
              <textarea
                required
                rows={2}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="Send us a message..."
                className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-xs text-white placeholder-stone-300 focus:outline-none focus:border-[#E8B93E] resize-none"
              />
              <button
                type="submit"
                disabled={isSendingContact}
                className="flex items-center gap-1.5 bg-[#E8B93E] hover:bg-[#C89211] text-[#0D5B3A] font-bold text-xs px-4 py-2 rounded-md transition disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-3 h-3" />
                {isSendingContact ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 text-white">
              <a
                href="#"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition shadow-xs"
              >
                <Facebook className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition shadow-xs"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition shadow-xs"
              >
                <Youtube className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition shadow-xs"
              >
                <Linkedin className="w-3.5 h-3.5 fill-current" />
              </a>
            </div>
          </div>

          {/* Right Navigation Links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-white drop-shadow-md">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#E8B93E] transition cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => setActiveCategory(null)}
              className="hover:text-[#E8B93E] transition cursor-pointer"
            >
              Store
            </button>
            <button
              onClick={onNavigateOurStory}
              className="hover:text-[#E8B93E] transition cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={onNavigatePrivacyPolicy}
              className="hover:text-[#E8B93E] transition cursor-pointer"
            >
              Privacy policy
            </button>
            <button
              onClick={onNavigateRefundPolicy}
              className="hover:text-[#E8B93E] transition cursor-pointer"
            >
              Refund Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
