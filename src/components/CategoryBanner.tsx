import React from 'react';
import { CATEGORIES } from '../data/initialData';
import { ProductCategory } from '../types';

interface CategoryBannerProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryBanner: React.FC<CategoryBannerProps> = ({ onSelectCategory }) => {
  // Map category names to banner images
  const getCategoryImage = (categoryName: string, index: number): string => {
    const bannerMap: Record<string, string> = {
      'Coffee & Tea': '/images/banner/COFFEE AND TEA.png',
      'Health Foods': '/images/banner/HEALTH FOODS.png',
      'Flour': '/images/banner/MAIN FLOUR TN.png',
      'Wood Pressed Oils': '/images/banner/MAIN OIL TN.png',
      'Spices': '/images/banner/MAIN SPICES TN.png',
      'Natural Sweeteners': '/images/banner/NATURAL SWEETNERS.png',
      'Nut Butters': '/images/banner/NUT BUTTERS.png',
      'Pasta & Noodles': '/images/banner/PASTA AND NOODLES.png',
      'Poha': '/images/banner/POHA.png',
      'Quick Bites': '/images/banner/QUICK BITES.png',
      'Rava': '/images/banner/RAVA.png',
      'Rice': '/images/banner/RICE.png',
      'Skin & Hair Care': '/images/banner/SKIN AND HAIR CARE.png',
    };

    // If category has a banner image, use it
    if (bannerMap[categoryName]) {
      return bannerMap[categoryName];
    }

    // Otherwise use category's original image
    const cat = CATEGORIES[index];
    if (cat.image) {
      return cat.image;
    }

    // Fallback to previous category's image if current doesn't have one
    if (index > 0 && CATEGORIES[index - 1].image) {
      return CATEGORIES[index - 1].image;
    }

    return '/images/dhannya_Products_final/Garam%20Masala/01.jpg';
  };

  return (
    <section className="pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 bg-[#FAF8F4] text-[#2A2620] border-t border-[#2A2620]/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="mb-6 text-center sm:text-left space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3E4B32] block">
            OUR ESSENTIAL PANTRY
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2620]">
            Freshly Milled Categories
          </h2>
        </div>

        {/* Category Cards Grid with Category Accent Top Borders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {CATEGORIES.map((cat, index) => {
            const isFlour = cat.name === 'Flour';
            const isSpice = cat.name === 'Spices' || cat.name === 'Masalas';
            const isOil = cat.name === 'Wood Pressed Oils';

            let accentBorder = 'border-t-4 border-[#C89211]';
            let badgeColor = 'text-[#C89211]';

            if (isFlour) {
              accentBorder = 'border-t-4 border-[#A9542B]';
              badgeColor = 'text-[#A9542B]';
            } else if (isSpice) {
              accentBorder = 'border-t-4 border-[#7C2A1E]';
              badgeColor = 'text-[#7C2A1E]';
            } else if (isOil) {
              accentBorder = 'border-t-4 border-[#3E4B32]';
              badgeColor = 'text-[#3E4B32]';
            }

            return (
              <div
                key={cat.slug}
                onClick={() => onSelectCategory(cat.name)}
                className="group cursor-pointer flex flex-col items-center text-center space-y-3"
              >
                {/* Category Image Card Container with Banner Image */}
                <div className={`relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden bg-[#FAF6ED] border border-[#2A2620]/15 ${accentBorder} p-3 shadow-xs group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1.5 flex items-center justify-center`}>
                  <img
                    src={getCategoryImage(cat.name, index)}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/images/dhannya_Products_final/Garam%20Masala/01.jpg';
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-[#2A2620]/80 backdrop-blur-xs text-[#F4ECD8] text-[9px] font-sans font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Fresh Mill
                  </div>
                </div>

                {/* Category Title */}
                <div>
                  <h3 className={`text-sm sm:text-base font-bold transition-colors leading-snug tracking-tight font-serif ${badgeColor}`}>
                    {cat.name}
                  </h3>
                  <span className="text-[11px] font-kannada text-[#2A2620]/60 block mt-0.5">
                    {isFlour ? 'ತಾಜಾ ಹಿಟ್ಟು' : isSpice ? 'ಮಸಾಲೆ' : isOil ? 'ಮರದ ಗಾಣದ ಎಣ್ಣೆ' : 'ಶುದ್ಧ ಧಾನ್ಯ'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
