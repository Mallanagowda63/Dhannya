import React, { useRef } from 'react';
import { PRODUCTS } from '../data/initialData';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const RecommendedCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const recommended = PRODUCTS.filter((p) => p.isRecommended);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-paper text-earth border-t border-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-olive text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-olive" />
              <span>HANDPICKED FOR YOU</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-earth">
              Recommended Organic Essentials
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white hover:bg-cream border border-soft flex items-center justify-center text-earth transition shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white hover:bg-cream border border-soft flex items-center justify-center text-earth transition shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4 scroll-smooth"
        >
          {recommended.map((prod) => (
            <div key={prod.id} className="min-w-[260px] sm:min-w-[280px] max-w-[280px] shrink-0">
              <ProductCard product={prod} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
