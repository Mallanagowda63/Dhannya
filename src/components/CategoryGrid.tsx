import React from 'react';
import { CATEGORIES } from '../data/initialData';
import { ProductCategory } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section className="pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20 bg-[#faf8f4] text-earth border-t border-soft">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="mb-4 sm:mb-6 text-center sm:text-left">
          <span className="text-xs font-extrabold uppercase tracking-widest text-olive">
            OUR PRODUCTS
          </span>
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
                    e.currentTarget.src = '/images/Dailywell_Products/Garam%20Masala/01.jpg';
                  }}
                />
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent" />
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
