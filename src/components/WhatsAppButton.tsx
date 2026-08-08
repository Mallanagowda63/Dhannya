import React from 'react';
import { PhoneCall } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/919008625716?text=Hi%20Dhaanya%20Organic,%20I%20have%20a%20question%20about%20your%20products!"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-olive hover:bg-[#4a4a34] text-white p-3.5 rounded-full shadow-lg flex items-center gap-2 group transition duration-300 transform hover:scale-105 active:scale-95 border border-soft"
      title="Chat on WhatsApp"
      aria-label="WhatsApp Support"
    >
      <PhoneCall className="w-5 h-5 text-white animate-bounce" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-bold whitespace-nowrap text-white pr-1">
        WhatsApp Us
      </span>
    </a>
  );
};
