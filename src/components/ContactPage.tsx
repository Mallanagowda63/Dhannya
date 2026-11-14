import React from 'react';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { DhaanyaLogo } from './DhaanyaLogo';

export const ContactPage: React.FC<{ onNavigateHome: () => void }> = ({ onNavigateHome }) => {
  return (
    <div className="bg-[#F4ECD8] text-[#2A2620] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#2A2620] hover:text-[#A9542B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="text-center space-y-3">
          <DhaanyaLogo variant="default" size="lg" className="mx-auto" />
          <h1 className="h1-title text-[#2A2620]">Contact Us</h1>
          <p className="body-normal max-w-2xl mx-auto text-[#3E2F22]">
            Questions about an order, a product or a payment? We're happy to help. Please keep your Order ID handy.
          </p>
        </div>

        <div className="kraft-card p-6 sm:p-8 rounded-2xl space-y-5 body-normal text-[#3E2F22]">
          <a href="tel:+919008625716" className="flex items-center gap-3 hover:text-[#A9542B]">
            <Phone className="w-5 h-5 text-[#A9542B] shrink-0" />
            <span>+91 9008625716 (call or WhatsApp)</span>
          </a>
          <a href="mailto:sales@dhaanyafoods.com" className="flex items-center gap-3 hover:text-[#A9542B]">
            <Mail className="w-5 h-5 text-[#A9542B] shrink-0" />
            <span>sales@dhaanyafoods.com</span>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=730%2C%2018th%20Main%20Rd%2C%20Padmanabhanagar%2C%20Bengaluru%2C%20Karnataka%20560070"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 hover:text-[#A9542B]"
          >
            <MapPin className="w-5 h-5 text-[#A9542B] shrink-0 mt-0.5" />
            <span>730, 18th Main Rd, Padmanabhanagar, Bengaluru, Karnataka 560070</span>
          </a>
        </div>
      </div>
    </div>
  );
};
