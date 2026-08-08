import React, { useRef } from 'react';
import { PRODUCTS } from '../data/initialData';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';

export const BestSellersCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-paper text-earth border-t border-soft">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-terracotta text-xs font-bold uppercase tracking-wider mb-1">
              <Flame className="w-4 h-4 fill-terracotta" />
              <span>POPULAR DEMAND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-earth">
              Our Bestselling Staples
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white hover:bg-cream border border-soft flex items-center justify-center text-earth transition shadow-sm cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white hover:bg-cream border border-soft flex items-center justify-center text-earth transition shadow-sm cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar pb-6 scroll-smooth px-1"
        >
          {bestSellers.map((prod) => (
            <div key={prod.id} className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] max-w-[300px] shrink-0">
              <ProductCard product={prod} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
