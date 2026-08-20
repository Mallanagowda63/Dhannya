import React from 'react';
import { Clock, EyeOff, ZapOff } from 'lucide-react';

export const WhatWentMissing: React.FC = () => {
  const items = [
    {
      title: 'FLOUR',
      quote: '"Sat on shelves for months before it reached a kitchen."',
      description: 'Mass-produced flours lose their natural oils, aromatic sweetness, and vital bran nutrition long before they are consumed.',
      icon: Clock,
      accent: 'border-[#A9542B]',
    },
    {
      title: 'SPICES',
      quote: '"Arrived pre-ground, their aroma long gone."',
      description: 'Industrial grinding heats spices to high temperatures, destroying essential volatile oils that hold true flavor and aroma.',
      icon: EyeOff,
      accent: 'border-[#C89211]',
    },
    {
      title: 'OILS',
      quote: '"Stripped and chemically treated on the way to the bottle."',
      description: 'Refined supermarket oils undergo chemical extraction, deodorizing, and bleaching, stripping away natural antioxidant goodness.',
      icon: ZapOff,
      accent: 'border-[#7C2A1E]',
    },
  ];

  return (
    <section className="bg-[#2A2620] text-[#F4ECD8] py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#C89211]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8B93E]">
            THE MODERN FOOD DILEMMA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-[#F4ECD8]">
            What Went Missing
          </h2>
          <p className="text-[#F4ECD8]/70 mt-4 text-base sm:text-lg">
            Somewhere between industrial food processing and convenience, we lost the aroma of honest, freshly prepared food.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-8 rounded-xl bg-[#F4ECD8]/5 border-t-4 ${item.accent} border-x border-b border-[#F4ECD8]/10 flex flex-col justify-between hover:bg-[#F4ECD8]/10 transition-all duration-300 group`}
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#F4ECD8]/10 flex items-center justify-center text-[#E8B93E] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold tracking-widest text-[#E8B93E] uppercase">
                    {item.title}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold italic text-[#F4ECD8] mt-2 mb-4 leading-snug">
                    {item.quote}
                  </h3>

                  <p className="text-sm text-[#F4ECD8]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F4ECD8]/10 text-xs text-[#E8B93E] font-medium flex items-center gap-2">
                  <span>Dhaanya restores this freshness</span>
                  <span className="text-base">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
