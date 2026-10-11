import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/initialData';
import { ProductCategory, HealthConcern, SortOption } from '../types';
import { ProductCard } from './ProductCard';
import {
  Search,
  ChevronRight,
  Filter,
  X,
  SlidersHorizontal,
  Home as HomeIcon,
  Sparkles,
  ArrowUpDown,
} from 'lucide-react';

// Four category photos tiled together for the "All Products" tile.
const ALL_PRODUCTS_COLLAGE = ['Wood Pressed Oils', 'Spices', 'Dry Fruits', 'Millets']
  .map((name) => CATEGORIES.find((c) => c.name === name)?.image)
  .filter((img): img is string => !!img);

export const CategoryPageView: React.FC<{
  onNavigateHome?: () => void;
  onNavigateOurProducts?: () => void;
  onSelectCategory: (cat?: ProductCategory) => void;
  onNavigateCustomMasala?: () => void;
}> = ({ onNavigateHome, onNavigateOurProducts, onSelectCategory, onNavigateCustomMasala }) => {
  const { products, activeCategory, setActiveCategory, searchQuery, setSearchQuery } = useApp();

  const [sortOption, setSortOption] = useState<SortOption>('featured');
  const [selectedConcern, setSelectedConcern] = useState<HealthConcern | 'All'>('All');
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  const handleHomeClick = () => {
    setActiveCategory(null);
    setSearchQuery('');
    setSelectedConcern('All');
    if (onNavigateHome) onNavigateHome();
    else onSelectCategory(undefined);
  };

  const categoryInfo = CATEGORIES.find((c) => c.name === activeCategory);

  // Filtering Logic
  let filteredList = (products || []).filter((p) => {
    if (!p) return false;

    // Category match
    if (activeCategory && p.category !== activeCategory) {
      return false;
    }

    // Concern match
    if (selectedConcern !== 'All') {
      if (!p.concern || !p.concern.includes(selectedConcern as HealthConcern)) {
        return false;
      }
    }

    // In Stock filter
    if (onlyInStock) {
      const hasStock = p.variants?.some((v) => v.inStock && (p.stock === undefined || p.stock > 0));
      if (!hasStock) return false;
    }

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.description?.toLowerCase().includes(q);
      const matchCat = p.category?.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchCat) return false;
    }

    return true;
  });

  // Sorting Logic
  filteredList.sort((a, b) => {
    const priceA = a.variants?.[0]?.price || 0;
    const priceB = b.variants?.[0]?.price || 0;

    if (sortOption === 'price-low-high') return priceA - priceB;
    if (sortOption === 'price-high-low') return priceB - priceA;
    if (sortOption === 'rating') return (b.rating || 0) - (a.rating || 0);
    if (sortOption === 'newest') return b.id.localeCompare(a.id);
    if (sortOption === 'popularity') return (b.reviewCount || 0) - (a.reviewCount || 0);
    return 0; // default featured
  });

  return (
    <div className="bg-[#F4ECD8] text-[#2A2620] min-h-screen pb-20">
      {/* Category Header Banner — Hidden on Mobile (<=768px), Visible on Desktop (>=769px) */}
      <div className="hidden md:block category-page-header bg-[#2A2620] text-[#F4ECD8] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#C89211]/30">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#E8B93E] uppercase tracking-widest mb-4">
            <button
              onClick={handleHomeClick}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <HomeIcon className="w-3.5 h-3.5" /> Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#F4ECD8]/40" />
            <span className="text-[#F4ECD8]">
              {activeCategory ? activeCategory : 'All Dhaanya Pantry Products'}
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F4ECD8]">
                {activeCategory ? activeCategory : 'Dhaanya Pantry & Grains'}
              </h1>
              <p className="text-sm sm:text-base text-[#F4ECD8]/80 mt-2 max-w-2xl font-sans">
                {categoryInfo?.description ||
                  'Authentic, unpolished grains, freshly milled flours, whole ground spices, and cold-pressed oils.'}
              </p>
            </div>

            <div className="text-xs font-medium text-[#E8B93E] bg-[#F4ECD8]/10 px-3 py-1.5 rounded-md border border-[#C89211]/20 self-start md:self-auto">
              Showing {filteredList.length} items
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Category Tiles Bar -- image tile with name below; sticks just below the site header on scroll */}
        <div
          className="sticky z-30 -mx-4 sm:mx-0 flex items-start gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar snap-x snap-proximity px-4 sm:px-0 pt-3 pb-2 mb-6 border-b border-[#2A2620]/10 bg-[#F4ECD8]"
          style={{ top: 'var(--site-header-height, 0px)' }}
        >
          {[{ name: null as ProductCategory | null, label: 'All Products', image: '' }, ...CATEGORIES.map((c) => ({ name: c.name as ProductCategory, label: c.name, image: c.image }))].map((tile) => {
            const selected = activeCategory === tile.name;
            return (
              <button
                key={tile.label}
                onClick={() => {
                  if (tile.name === null) {
                    // "All Products" goes to the "Our Products" section on the home page
                    setSearchQuery('');
                    setSelectedConcern('All');
                    if (onNavigateOurProducts) onNavigateOurProducts();
                    else setActiveCategory(null);
                  } else {
                    setActiveCategory(tile.name);
                  }
                }}
                className="group shrink-0 w-[68px] sm:w-[80px] snap-start flex flex-col items-center gap-1.5 cursor-pointer"
                aria-pressed={selected}
              >
                <div
                  className={`w-full aspect-[4/3] rounded-[12px] overflow-hidden transition-all ${
                    selected
                      ? 'ring-2 ring-[#3E4B32] ring-offset-1 ring-offset-[#F4ECD8] shadow-md'
                      : 'shadow-sm group-hover:shadow-md opacity-90 group-hover:opacity-100'
                  }`}
                >
                  {tile.image ? (
                    <img
                      src={tile.image}
                      alt={tile.label}
                      loading="lazy"
                      className="w-full h-full object-cover bg-white/60"
                      onError={(e) => {
                        e.currentTarget.style.visibility = 'hidden';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-px bg-[#E8DFC8]">
                      {ALL_PRODUCTS_COLLAGE.map((src) => (
                        <img key={src} src={src} alt="" loading="lazy" className="w-full h-full object-cover bg-white/60" />
                      ))}
                    </div>
                  )}
                </div>
                <span
                  className={`text-[10px] sm:text-[11px] font-bold text-center leading-tight transition-colors ${
                    selected
                      ? 'text-[#3E4B32] underline underline-offset-4 decoration-2'
                      : 'text-[#2A2620]/80 group-hover:text-[#2A2620]'
                  }`}
                >
                  {tile.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Toolbar: Filters & Sort */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-[#F8F3E6] p-4 rounded-xl border border-[#2A2620]/10">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#2A2620]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in this category..."
              className="w-full bg-[#F4ECD8] border border-[#2A2620]/20 rounded-md pl-9 pr-4 py-2 text-xs text-[#2A2620] focus:outline-none focus:border-[#C89211]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#2A2620]/50 hover:text-[#2A2620]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 ml-auto">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-[#A9542B]" />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="bg-[#F4ECD8] border border-[#2A2620]/20 rounded-md px-3 py-2 text-xs font-semibold text-[#2A2620] focus:outline-none focus:border-[#C89211]"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="newest">New Arrivals</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid — Full Width Layout */}
        <main className="w-full">
          {filteredList.length === 0 ? (
            <div className="kraft-card p-12 text-center rounded-xl my-8 space-y-4">
              <Sparkles className="w-10 h-10 text-[#C89211] mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-[#2A2620]">
                Nothing here yet. Try another selection.
              </h3>
              <p className="text-sm text-[#2A2620]/70 max-w-md mx-auto">
                We couldn't find any products matching your current choices. Try selecting another category or clear your search query.
              </p>
              <button
                onClick={() => {
                  setActiveCategory(null);
                  setSearchQuery('');
                  setSelectedConcern('All');
                }}
                className="px-6 py-2.5 rounded-md bg-[#3E4B32] text-[#F4ECD8] text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                View All Pantry Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
