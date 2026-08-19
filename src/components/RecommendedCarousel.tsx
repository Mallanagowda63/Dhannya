import React, { useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const RecommendedCarousel: React.FC = () => {
  const { products } = useApp();
  const scrollRef = useRef<HTMLDivElement>(null);
  const recList = (products || []).filter((p) => p.isRecommended);
  const displayList = recList.length > 0 ? recList : (products || []).slice(4, 12);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-[#faf8f4] text-earth border-t border-soft">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-olive text-xs font-extrabold uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4 text-olive" />
              <span>HANDPICKED FOR YOU</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-earth">
              Recommended Organic Essentials
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white hover:bg-cream border border-stone-200 flex items-center justify-center text-earth transition shadow-sm cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white hover:bg-cream border border-stone-200 flex items-center justify-center text-earth transition shadow-sm cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container - Expanded 1440px Full Width */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-6 scroll-smooth px-1 snap-x snap-mandatory"
        >
          {displayList.map((prod) => (
            <div key={prod.id} className="min-w-[230px] sm:min-w-[280px] md:min-w-[300px] max-w-[300px] shrink-0 snap-start">
              <ProductCard product={prod} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
