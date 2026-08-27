import React from 'react';
import { Clock, EyeOff, ZapOff, ArrowRight, Sparkles } from 'lucide-react';

export const WhatWentMissing: React.FC = () => {
  const items = [
    {
      title: 'FLOUR',
      quote: '"Sat on shelves for months before it reached a kitchen."',
      description: 'Mass-produced flours lose their natural wheat germ oils, sweet aroma, and vital bran nutrition long before they are consumed.',
      icon: Clock,
      accent: 'border-[#A9542B]',
    },
    {
      title: 'SPICES',
      quote: '"Arrived pre-ground, their essential oils long gone."',
      description: 'Industrial grinding heats spices to high temperatures, destroying essential volatile oils that hold true flavor and health properties.',
      icon: EyeOff,
      accent: 'border-[#C89211]',
    },
    {
      title: 'OILS',
      quote: '"Chemically refined & deodorized on the way to the bottle."',
      description: 'Refined supermarket oils undergo high-heat chemical extraction, stripping away natural antioxidant goodness and native flavor.',
      icon: ZapOff,
      accent: 'border-[#7C2A1E]',
    },
  ];

  const journeySteps = [
    { num: '01', title: 'Grain', desc: 'Whole heritage grains' },
    { num: '02', title: 'Selection', desc: 'Hand inspected for purity' },
    { num: '03', title: 'Milling', desc: 'Cold ground on order' },
    { num: '04', title: 'Fresh Product', desc: 'Untouched by storage' },
    { num: '05', title: 'Packaging', desc: 'Kraft paper sealed' },
    { num: '06', title: 'Kitchen', desc: 'Witnessed in your home' },
  ];

  return (
    <section className="bg-[#2A2620] text-[#F4ECD8] py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#C89211]/20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#E8B93E]">
            THE MODERN FOOD DILEMMA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4ECD8]">
            What Went Missing
          </h2>
          <p className="text-[#F4ECD8]/80 text-base sm:text-lg leading-relaxed">
            Somewhere between long industrial supply chains and convenience, food lost its freshness, aroma, and honesty. Dhaanya brings the process back to your kitchen.
          </p>
        </div>

        {/* Dilemma Cards */}
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

                  <p className="text-sm text-[#F4ECD8]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F4ECD8]/10 text-xs text-[#E8B93E] font-medium flex items-center gap-2">
                  <span>Dhaanya restores this freshness</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* The Dhaanya Transparent Journey Bar */}
        <div className="bg-[#FAF6ED]/10 p-8 rounded-2xl border border-[#C89211]/30 space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8B93E] flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#E8B93E]" />
              THE DHAANYA TRANSPARENT JOURNEY
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F4ECD8]">
              From Grain to Kitchen — Freshness You Witness
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {journeySteps.map((j, idx) => (
              <div key={idx} className="bg-[#2A2620] p-4 rounded-xl border border-[#C89211]/20 text-center space-y-1">
                <span className="font-serif font-bold text-xs text-[#C89211] block">{j.num}</span>
                <h4 className="font-serif font-bold text-base text-[#F4ECD8]">{j.title}</h4>
                <p className="text-[11px] text-[#F4ECD8]/65">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
