import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/initialData';
import { ProductCategory, HealthConcern, SortOption } from '../types';
import { ProductCard } from './ProductCard';
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Store,
  Home as HomeIcon,
} from 'lucide-react';

export const CategoryPageView: React.FC<{
  onNavigateHome?: () => void;
  onSelectCategory: (cat?: ProductCategory) => void;
  onNavigateCustomMasala?: () => void;
}> = ({ onNavigateHome, onSelectCategory, onNavigateCustomMasala }) => {
  const { products, activeCategory, setActiveCategory, searchQuery, setSearchQuery } = useApp();

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState<SortOption>('featured');
  const [selectedConcern, setSelectedConcern] = useState<HealthConcern | 'All'>('All');
  const [priceRange, setPriceRange] = useState<number>(2000);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoryScrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      categoryScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    setActiveCategory(null);
    setSearchQuery('');
    setSelectedConcern('All');
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      onSelectCategory(undefined);
    }
  };

  const handleStorefrontClick = () => {
    setActiveCategory(null);
    setSearchQuery('');
    setSelectedConcern('All');
  };

  const categoryInfo = CATEGORIES.find((c) => c.name === activeCategory);

  // Filtering Logic
  let filteredList = (products || []).filter((p) => {
    if (!p) return false;

    // Category match
    if (activeCategory && p.category !== activeCategory) return false;

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = (p.name || '').toLowerCase().includes(q);
      const matchCat = (p.category || '').toLowerCase().includes(q);
      const matchDesc = (p.description || '').toLowerCase().includes(q);
      const matchConcern = Array.isArray(p.concern) && p.concern.some((c) => (c || '').toLowerCase().includes(q));
      const matchTags = Array.isArray(p.tags) && p.tags.some((t) => (t || '').toLowerCase().includes(q));
      if (!matchName && !matchCat && !matchDesc && !matchConcern && !matchTags) return false;
    }

    // Health Concern match
    if (selectedConcern === 'Best Sellers') {
      if (!p.isBestSeller) return false;
    } else if (selectedConcern !== 'All') {
      if (!Array.isArray(p.concern) || !p.concern.includes(selectedConcern as HealthConcern)) return false;
    }

    // Price range match
    const vars = Array.isArray(p.variants) && p.variants.length > 0 ? p.variants : [{ price: 199 }];
    const lowestPrice = Math.min(...vars.map((v) => v.price || 0));
    if (lowestPrice > priceRange) return false;

    // In Stock
    if (onlyInStock && (p.stock || 0) <= 0) return false;

    return true;
  });

  // Sorting Logic
  if (sortOption === 'price-low-high') {
    filteredList.sort((a, b) => {
      const priceA = a.variants?.[0]?.price || 0;
      const priceB = b.variants?.[0]?.price || 0;
      return priceA - priceB;
    });
  } else if (sortOption === 'price-high-low') {
    filteredList.sort((a, b) => {
      const priceA = a.variants?.[0]?.price || 0;
      const priceB = b.variants?.[0]?.price || 0;
      return priceB - priceA;
    });
  } else if (sortOption === 'rating') {
    filteredList.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (sortOption === 'popularity') {
    filteredList.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
  }

  // Pagination (8 items per page)
  const pageSize = 8;
  const totalPages = Math.ceil(filteredList.length / pageSize) || 1;
  const paginatedList = filteredList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="bg-paper text-earth min-h-screen py-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
        {/* Combined Breadcrumb & Fast Category Filter Bar */}
        <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700 bg-white border border-soft px-4 py-2.5 rounded-2xl shadow-2xs overflow-x-auto no-scrollbar">
          {/* Left: Home > Storefront Base */}
          <div className="flex items-center gap-2 shrink-0 font-semibold">
            <button
              onClick={handleHomeClick}
              className="hover:text-olive flex items-center gap-1.5 transition font-bold text-stone-800"
            >
              <HomeIcon className="w-4 h-4 text-olive" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <button
              onClick={handleStorefrontClick}
              className="hover:text-olive flex items-center gap-1.5 transition font-bold text-stone-700"
            >
              <Store className="w-3.5 h-3.5 text-stone-500" />
              <span>Storefront</span>
            </button>
          </div>
        </div>

        {/* Category Header Banner */}
        <div className="bg-cream border border-soft rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xs">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-olive">
              {activeCategory ? 'SELECTED CATEGORY' : 'ORGANIC CATALOG'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-earth mt-1">
              {activeCategory || 'All Products & Organic Staples'}
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              {categoryInfo
                ? categoryInfo.description
                : 'Browse our complete collection of 100% cold pressed oils, stone ground flours, raw honeys, dry fruits, and unadulterated spices.'}
            </p>
          </div>
        </div>

        {/* Story-Style Circular Categories Carousel (Matching Reference Screenshot) */}
        <div className="relative py-4 px-2">
          {/* Scroll Left Arrow */}
          <button
            onClick={() => scrollCategories('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-stone-200 shadow-md hover:bg-olive hover:text-white flex items-center justify-center transition text-stone-700 active:scale-95"
            title="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scroll Right Arrow */}
          <button
            onClick={() => scrollCategories('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-stone-200 shadow-md hover:bg-olive hover:text-white flex items-center justify-center transition text-stone-700 active:scale-95"
            title="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={categoryScrollRef}
            className="flex items-start gap-4 sm:gap-6 overflow-x-auto no-scrollbar px-10 py-2 scroll-smooth"
          >
            {/* All Categories Circle */}
            <button
              onClick={() => setActiveCategory(null)}
              className="flex flex-col items-center gap-2 group shrink-0 w-20 sm:w-24 cursor-pointer"
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 transition-all duration-300 flex items-center justify-center ${
                  !activeCategory
                    ? 'border-2 border-emerald-600 bg-emerald-50/50 shadow-md ring-2 ring-emerald-600/30'
                    : 'border border-stone-200 bg-[#FAF7F2] group-hover:border-olive group-hover:scale-105'
                }`}
              >
                <div className="w-full h-full rounded-full bg-emerald-100 flex items-center justify-center text-xl font-serif font-bold text-emerald-800">
                  🌿
                </div>
              </div>
              <span
                className={`text-xs sm:text-sm text-center leading-tight tracking-tight font-serif transition-colors ${
                  !activeCategory ? 'text-emerald-700 font-extrabold' : 'text-stone-700 font-semibold group-hover:text-olive'
                }`}
              >
                All Categories
              </span>
            </button>

            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.name;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.name)}
                  className="flex flex-col items-center gap-2 group shrink-0 w-20 sm:w-24 cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 transition-all duration-300 ${
                      isSelected
                        ? 'border-2 border-emerald-600 bg-emerald-50/50 shadow-md ring-2 ring-emerald-600/30 scale-105'
                        : 'border border-stone-200 bg-[#FAF7F2] group-hover:border-olive group-hover:scale-105'
                    }`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full rounded-full object-cover shadow-2xs"
                      onError={(e) => {
                        e.currentTarget.src =
                          '/images/Dailywell_Products/Garam%20Masala/01.jpg';
                      }}
                    />
                  </div>
                  <span
                    className={`text-xs sm:text-sm text-center leading-tight tracking-tight font-serif transition-colors max-w-[90px] line-clamp-2 ${
                      isSelected ? 'text-emerald-700 font-extrabold' : 'text-stone-700 font-semibold group-hover:text-olive'
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>



        {/* Product Cards Grid */}
        {paginatedList.length === 0 ? (
          <div className="bg-white border border-dashed border-soft rounded-3xl p-16 text-center space-y-3">
            <Search className="w-10 h-10 text-stone-400 mx-auto" />
            <h3 className="text-lg font-bold font-serif text-earth">No products match your active filters</h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Try relaxing your price slider or resetting category filters to see more results.
            </p>
            <button
              onClick={() => {
                setActiveCategory(null);
                setSearchQuery('');
                setSelectedConcern('All');
                setPriceRange(2000);
              }}
              className="bg-olive text-white font-bold px-4 py-2 rounded-xl text-xs transition"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
                : 'space-y-4'
            }
          >
            {paginatedList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="bg-white border border-soft text-stone-600 disabled:opacity-40 px-3.5 py-1.5 rounded-xl text-xs font-bold transition"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-8 h-8 rounded-xl text-xs font-bold transition ${
                  currentPage === idx + 1
                    ? 'bg-olive text-white'
                    : 'bg-white border border-soft text-stone-600 hover:text-earth'
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="bg-white border border-soft text-stone-600 disabled:opacity-40 px-3.5 py-1.5 rounded-xl text-xs font-bold transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
