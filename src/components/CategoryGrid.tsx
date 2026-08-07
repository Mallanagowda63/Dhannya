import React from 'react';
import { CATEGORIES } from '../data/initialData';
import { ProductCategory } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-12 bg-cream/60 text-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-olive">
              OUR ORGANIC RANGE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-earth mt-1">
              Explore 22 Artisanal Categories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md">
            Handcrafted, slow-milled, and unadulterated organic staples delivered directly from certified Indian farms.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => onSelectCategory(cat.name)}
              className="group cursor-pointer relative bg-white border border-soft rounded-2xl overflow-hidden hover:border-olive transition duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              {/* Category Image */}
              <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-stone-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute top-2 right-2 bg-white/90 backdrop-blur text-xs text-olive font-extrabold px-2 py-0.5 rounded-full border border-soft shadow-2xs">
                  {cat.productCount} Items
                </span>
              </div>

              {/* Category Content */}
              <div className="p-3 flex items-center justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-earth group-hover:text-olive transition leading-tight line-clamp-1 font-serif">
                    {cat.name}
                  </h3>
                </div>
                <div className="w-6 h-6 rounded-full bg-cream group-hover:bg-olive group-hover:text-white text-stone-600 flex items-center justify-center transition shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
