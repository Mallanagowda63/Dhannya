import React from 'react';
import { ProductCategory } from '../types';
import { ArrowRight, Play, ShieldCheck, Wheat } from 'lucide-react';

interface HeroSliderProps {
  onNavigateCustomMasala: () => void;
  onNavigateCategoryPage: (cat?: ProductCategory) => void;
  onNavigateFreshMilling?: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onNavigateCustomMasala,
  onNavigateCategoryPage,
  onNavigateFreshMilling,
}) => {
  return (
    <section className="relative w-full bg-[#F4ECD8] text-[#2A2620] overflow-hidden">
      <div className="max-w-[1450px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 space-y-6 sm:space-y-8">
        
        {/* 1. MAIN HERO (2-Column Desktop Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column (42-45% width on desktop) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Hero Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F3E6] border border-[#2A2620]/20 text-[#2A2620] text-[11px] font-semibold uppercase tracking-[0.2em]">
              <Wheat className="w-3.5 h-3.5 text-[#C89211]" />
              <span>TRADITIONAL INDIAN MILLING</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#2A2620] leading-[1.08]">
              Freshly Milled. <br />
              <span className="italic text-[#A9542B] font-normal">Made for You.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-[17px] text-[#2A2620] font-sans max-w-[550px] leading-[1.55]">
              Rooted in tradition, freshly milled before you and for you. Witness honest food, whole grains, and pure cold-pressed oils.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onNavigateCategoryPage()}
                className="h-[48px] sm:h-[52px] px-6 rounded-md bg-[#C89211] hover:bg-[#b07e0e] text-[#2A2620] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2 group cursor-pointer shrink-0"
              >
                <span>SHOP FRESH PRODUCTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  if (onNavigateFreshMilling) onNavigateFreshMilling();
                  else onNavigateCustomMasala();
                }}
                className="h-[48px] sm:h-[52px] px-5 rounded-md bg-transparent hover:bg-[#2A2620] text-[#2A2620] hover:text-[#F4ECD8] border border-[#2A2620] font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>SEE HOW IT'S MILLED</span>
              </button>
            </div>

            {/* Trust Indicators Compact Row */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] sm:text-xs font-semibold text-[#3E4B32] border-t border-[#2A2620]/15">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3E4B32] shrink-0" />
                <span>100% Whole Grain</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3E4B32] shrink-0" />
                <span>Ground on Order</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3E4B32] shrink-0" />
                <span>Wood Pressed Oils</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3E4B32] shrink-0" />
                <span>Zero Preservatives</span>
              </div>
            </div>
          </div>

          {/* Right Column: ONE Large Premium Food/Grain Visual (55-58% width on desktop) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden">
              <img
                src="/images/hero-grain-visual.jpg"
                alt="Traditional Indian Milling — Grains, Fresh Flour & Whole Spices"
                className="w-full h-full object-cover object-center rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
