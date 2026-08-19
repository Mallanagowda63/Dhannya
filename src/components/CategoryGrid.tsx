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

        {/* Spacious Category Cards Grid - Image Card with Title Below */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-8 lg:gap-10">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => onSelectCategory(cat.name)}
              className="group cursor-pointer flex flex-col items-center text-center space-y-3"
            >
              {/* Category Image Card Container */}
              <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-3xl sm:rounded-[32px] overflow-hidden bg-[#fffaf3] border border-stone-200/60 p-3 sm:p-4 shadow-xs group-hover:shadow-lg group-hover:border-olive/40 transition-all duration-300 transform group-hover:-translate-y-1.5 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-2xl sm:rounded-[24px] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/images/Dailywell_Products/Garam%20Masala/01.jpg';
                  }}
                />
              </div>

              {/* Category Title Centered Below Image */}
              <h3 className="text-sm sm:text-base font-bold text-earth group-hover:text-olive transition-colors leading-snug tracking-tight font-serif pt-1">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
