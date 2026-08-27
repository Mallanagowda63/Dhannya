import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { HealthConcern } from '../types';
import { ProductCard } from './ProductCard';
import { HeartPulse, Activity, Sparkles, Scale, Flame, ChevronLeft, ChevronRight } from 'lucide-react';

export const ShopByConcern: React.FC = () => {
  const { products } = useApp();
  const [activeConcernTab, setActiveConcernTab] = useState<HealthConcern>('Best Sellers');
  const scrollRef = useRef<HTMLDivElement>(null);

  const concernsList: { name: HealthConcern; icon: React.ReactNode }[] = [
    { name: 'Best Sellers', icon: <Flame className="w-4 h-4 text-amber-500" /> },
    { name: 'Gut Health', icon: <Activity className="w-4 h-4" /> },
    { name: 'Weight Loss', icon: <Scale className="w-4 h-4" /> },
    { name: 'Heart Health', icon: <HeartPulse className="w-4 h-4" /> },
    { name: 'Skin & Hair', icon: <Sparkles className="w-4 h-4" /> },
  ];

  const filteredProducts = (products || []).filter(
    (p) => p && (activeConcernTab === 'Best Sellers' ? p.isBestSeller : (Array.isArray(p.concern) && p.concern.includes(activeConcernTab)))
  );
  const displayList = filteredProducts.length > 0 ? filteredProducts : (products || []).slice(0, 8);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-[#faf8f4] text-earth border-t border-soft">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-olive">
              TARGETED WELLNESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-earth mt-1">
              Shop By Concern
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-md">
              Target your daily nutrition goals with pure, natural, nutrient-dense organic foods.
            </p>
          </div>

          {/* Left / Right Scroll Buttons */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-white hover:bg-cream border border-stone-200 flex items-center justify-center text-earth transition shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-white hover:bg-cream border border-stone-200 flex items-center justify-center text-earth transition shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Concern Tabs - Styled matching Image 2 */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-3 mb-8">
          {concernsList.map((item) => {
            const isActive = activeConcernTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveConcernTab(item.name);
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 shrink-0 border cursor-pointer ${
                  isActive
                    ? 'bg-[#b0534c] text-white border-[#b0534c] shadow-md scale-102'
                    : 'bg-[#e2b292]/50 hover:bg-[#e2b292]/80 text-[#5c3727] border-transparent'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Expanded Full-Width Horizontal Sliding Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-6 scroll-smooth px-1 snap-x snap-mandatory"
        >
          {displayList.map((prod) => (
            <div key={prod.id} className="min-w-[230px] sm:min-w-[280px] md:min-w-[300px] max-w-[300px] shrink-0 snap-start flex flex-col h-full">
              <ProductCard product={prod} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
