import React from 'react';
import { CATEGORIES } from '../data/initialData';
import { ProductCategory } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#faf8f4] text-earth border-t border-soft">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header with generous whitespace */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 pb-4 border-b border-stone-200/60">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-olive">
              OUR ORGANIC RANGE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-earth mt-2 tracking-tight">
              Explore 22 Artisanal Categories
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-lg leading-relaxed font-normal">
            Handcrafted, slow-milled, and unadulterated organic staples delivered directly from certified Indian farms.
          </p>
        </div>

        {/* Spacious Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => onSelectCategory(cat.name)}
              className="group cursor-pointer relative bg-white border border-stone-200/80 rounded-3xl overflow-hidden hover:border-olive transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between transform hover:-translate-y-1"
            >
              {/* Category Image - Larger & Crisp */}
              <div className="relative h-40 sm:h-48 md:h-52 w-full overflow-hidden bg-stone-100 p-2">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-xs text-olive font-extrabold px-3 py-1 rounded-full border border-soft shadow-xs">
                  {cat.productCount} Items
                </span>
              </div>

              {/* Category Content */}
              <div className="p-4 sm:p-5 flex items-center justify-between bg-white">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-earth group-hover:text-olive transition-colors leading-snug font-serif">
                    {cat.name}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-cream group-hover:bg-olive group-hover:text-white text-stone-700 flex items-center justify-center transition-all duration-300 shrink-0 shadow-2xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
