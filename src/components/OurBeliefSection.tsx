import React from 'react';
import { DhaanyaLogo } from './DhaanyaLogo';

export const OurBeliefSection: React.FC = () => {
  return (
    <section className="bg-[#3E4B32] text-[#F4ECD8] py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bold Editorial Typography */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F4ECD8]/10 text-[#E8B93E] text-xs font-semibold uppercase tracking-widest border border-[#E8B93E]/30">
            OUR CORE BELIEF
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#F4ECD8]">
            "Freshness should not be a promise you take on faith.{' '}
            <span className="italic text-[#E8B93E] font-normal block mt-2">
              It should be something you witness."
            </span>
          </h2>

          <div className="pt-4 border-t border-[#F4ECD8]/20">
            <span className="font-serif text-sm font-bold uppercase tracking-[0.25em] text-[#E8B93E]">
              PURITY YOU CAN SEE HAPPEN
            </span>
            <p className="text-base sm:text-lg text-[#F4ECD8]/85 mt-3 leading-relaxed max-w-2xl">
              We believe in honest food prepared in the open. When whole grains enter our stone mills and golden seeds enter our cold press, nothing is hidden, stripped, or preserved.
            </p>
          </div>
        </div>

        {/* Right Column: Visual Imagery Grid */}
        <div className="lg:col-span-5 relative">
          <div className="kraft-card p-4 rounded-2xl bg-[#F4ECD8] text-[#2A2620] shadow-2xl relative">
            <div className="relative rounded-xl overflow-hidden aspect-4/3">
              <img
                src="/images/banners/banner4.png"
                alt="Traditional milling process at Dhaanya"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2620]/90 via-transparent to-transparent flex flex-col justify-end p-6">
                <DhaanyaLogo variant="light" size="sm" className="mb-2" />
                <p className="font-serif text-lg font-bold text-[#F4ECD8]">
                  Traditional Cold Stone Milling
                </p>
                <p className="text-xs text-[#E8B93E]">
                  Preserving natural wheat oils, vitamins & original flavor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
