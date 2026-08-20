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

export const CategoryPageView: React.FC<{
  onNavigateHome?: () => void;
  onSelectCategory: (cat?: ProductCategory) => void;
  onNavigateCustomMasala?: () => void;
}> = ({ onNavigateHome, onSelectCategory, onNavigateCustomMasala }) => {
  const { products, activeCategory, setActiveCategory, searchQuery, setSearchQuery } = useApp();

  const [sortOption, setSortOption] = useState<SortOption>('featured');
  const [selectedConcern, setSelectedConcern] = useState<HealthConcern | 'All'>('All');
  const [priceRange, setPriceRange] = useState<number>(2000);
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

    // Price filter
    const minPrice = p.variants?.length
      ? Math.min(...p.variants.map((v) => v.price))
      : 0;
    if (minPrice > priceRange) return false;

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
        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-6 border-b border-[#2A2620]/10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors ${
              activeCategory === null
                ? 'bg-[#3E4B32] text-[#F4ECD8]'
                : 'kraft-card text-[#2A2620] hover:border-[#3E4B32]'
            }`}
          >
            All Products
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name as ProductCategory)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors ${
                activeCategory === cat.name
                  ? 'bg-[#3E4B32] text-[#F4ECD8]'
                  : 'kraft-card text-[#2A2620] hover:border-[#3E4B32]'
              }`}
            >
              {cat.name}
            </button>
          ))}
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

          <div className="flex items-center gap-3">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2 rounded-md bg-[#3E4B32] text-[#F4ECD8] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>

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

        {/* Layout Grid: Desktop Sidebar Filters + Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="kraft-card p-6 rounded-xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#2A2620]/10 pb-3">
                <span className="font-serif font-bold text-lg text-[#2A2620]">Refine Selection</span>
                <button
                  onClick={() => {
                    setActiveCategory(null);
                    setSearchQuery('');
                    setSelectedConcern('All');
                    setPriceRange(2000);
                    setOnlyInStock(false);
                  }}
                  className="text-xs text-[#A9542B] hover:underline"
                >
                  Reset
                </button>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70 block mb-2">
                  Max Price: ₹{priceRange}
                </label>
                <input
                  type="range"
                  min="50"
                  max="2500"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#3E4B32]"
                />
              </div>

              {/* In Stock Toggle */}
              <div className="flex items-center gap-2 pt-2 border-t border-[#2A2620]/10">
                <input
                  type="checkbox"
                  id="desktopInStock"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="w-4 h-4 accent-[#3E4B32]"
                />
                <label htmlFor="desktopInStock" className="text-xs font-medium text-[#2A2620] cursor-pointer">
                  In Stock Only
                </label>
              </div>
            </div>
          </aside>

          {/* Product Cards Grid */}
          <main className="lg:col-span-9">
            {filteredList.length === 0 ? (
              <div className="kraft-card p-12 text-center rounded-xl my-8 space-y-4">
                <Sparkles className="w-10 h-10 text-[#C89211] mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-[#2A2620]">
                  Nothing here yet. Try another selection.
                </h3>
                <p className="text-sm text-[#2A2620]/70 max-w-md mx-auto">
                  We couldn't find any products matching your current filter choices. Try clearing filters or searching for another grain or spice.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory(null);
                    setSearchQuery('');
                    setSelectedConcern('All');
                    setPriceRange(2000);
                  }}
                  className="px-6 py-2.5 rounded-md bg-[#3E4B32] text-[#F4ECD8] text-xs font-bold uppercase tracking-wider"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredList.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Bottom-Sheet Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/60 backdrop-blur-sm lg:hidden">
          <div className="w-full bg-[#F4ECD8] text-[#2A2620] rounded-t-2xl p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#2A2620]/10 pb-3">
              <h3 className="font-serif font-bold text-xl">Filter Pantry</h3>
              <button onClick={() => setIsMobileFilterOpen(false)} className="p-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#2A2620]/70 block mb-2">
                Max Price: ₹{priceRange}
              </label>
              <input
                type="range"
                min="50"
                max="2500"
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#3E4B32]"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="mobileInStock"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                className="w-4 h-4 accent-[#3E4B32]"
              />
              <label htmlFor="mobileInStock" className="text-sm font-medium">
                In Stock Only
              </label>
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full py-3.5 bg-[#3E4B32] text-[#F4ECD8] font-bold text-xs uppercase tracking-wider rounded-md"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
