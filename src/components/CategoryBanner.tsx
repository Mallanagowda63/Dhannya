import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data/initialData';
import { ProductCategory } from '../types';

interface CategoryBannerProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryBanner: React.FC<CategoryBannerProps> = ({ onSelectCategory }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  // Map category names to banner images
  const getCategoryBannerImage = (categoryName: string): string => {
    const bannerMap: Record<string, string> = {
      'Wood Pressed Oils': '/images/banner/MAIN OIL TN.png',
      'Flour': '/images/banner/MAIN FLOUR TN.png',
      'Dry Fruits': '/images/banner/MAIN SPICES TN.png',
      'Seeds': '/images/banner/MAIN SPICES TN.png',
      'Millets': '/images/banner/RAVA.png',
      'Spices': '/images/banner/MAIN SPICES TN.png',
      'Masalas': '/images/banner/MAIN SPICES TN.png',
      'Health Foods': '/images/banner/HEALTH FOODS.png',
      'Natural Sweeteners': '/images/banner/NATURAL SWEETNERS.png',
      'Nut Butters': '/images/banner/NUT BUTTERS.png',
      'Coffee & Tea': '/images/banner/COFFEE AND TEA.png',
      'Quick Bites': '/images/banner/QUICK BITES.png',
      'Pasta & Noodles': '/images/banner/PASTA AND NOODLES.png',
      'Rice': '/images/banner/RICE.png',
      'Poha': '/images/banner/POHA.png',
      'Skin & Hair Care': '/images/banner/SKIN AND HAIR CARE.png',
    };
    return bannerMap[categoryName] || '/images/dhannya_Products_final/Garam%20Masala/01.jpg';
  };

  return (
    <section className="pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 bg-[#FAF8F4] text-[#2A2620] border-t border-[#2A2620]/10">
      <div className="max-w-full px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-8 text-center sm:text-left space-y-1 max-w-[1440px] mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3E4B32] block">
            OUR ESSENTIAL PANTRY
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2620]">
            Freshly Milled Categories
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#2A2620] hover:bg-[#2A2620]/90 text-[#F4ECD8] p-2 rounded-full shadow-lg transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#2A2620] hover:bg-[#2A2620]/90 text-[#F4ECD8] p-2 rounded-full shadow-lg transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Scrollable Categories Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="overflow-x-auto scrollbar-hide flex gap-6 lg:gap-8 pb-4"
            style={{
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {CATEGORIES.map((cat) => (
              <div
                key={cat.slug}
                onClick={() => onSelectCategory(cat.name)}
                className="group cursor-pointer flex-shrink-0 w-80 sm:w-96 text-center space-y-3"
              >
                {/* Category Banner Card */}
                <div className="relative aspect-[2/1] rounded-2xl overflow-hidden bg-[#FAF6ED] border-4 border-[#2A2620]/10 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center">
                  <img
                    src={getCategoryBannerImage(cat.name)}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/images/dhannya_Products_final/Garam%20Masala/01.jpg';
                    }}
                  />

                  {/* Overlay with Category Name */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2620]/80 via-[#2A2620]/40 to-transparent flex flex-col items-center justify-end p-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4ECD8]">
                      {cat.name}
                    </h3>
                    <span className="text-[13px] font-kannada text-[#F4ECD8]/90 block mt-1">
                      {cat.name === 'Flour' ? 'ತಾಜಾ ಹಿಟ್ಟು' : cat.name === 'Spices' || cat.name === 'Masalas' ? 'ಮಸಾಲೆ' : cat.name === 'Wood Pressed Oils' ? 'ಮರದ ಗಾಣದ ಎಣ್ಣೆ' : 'ಶುದ್ಧ ಧಾನ್ಯ'}
                    </span>
                  </div>

                  {/* Fresh Mill Badge */}
                  <div className="absolute top-3 right-3 bg-[#2A2620]/90 backdrop-blur-sm text-[#F4ECD8] text-[11px] font-sans font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Fresh Mill
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
