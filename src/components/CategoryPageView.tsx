import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, CATEGORIES } from '../data/initialData';
import { ProductCategory, HealthConcern, SortOption } from '../types';
import { ProductCard } from './ProductCard';
import {
  SlidersHorizontal,
  Grid,
  List,
  Search,
  ChevronRight,
  ChevronLeft,
  X,
  Filter,
  Check,
  Store,
  Home as HomeIcon,
} from 'lucide-react';

export const CategoryPageView: React.FC<{
  onNavigateHome?: () => void;
  onSelectCategory: (cat?: ProductCategory) => void;
}> = ({ onNavigateHome, onSelectCategory }) => {
  const { activeCategory, setActiveCategory, searchQuery, setSearchQuery } = useApp();

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
  let filteredList = PRODUCTS.filter((p) => {
    // Category match
    if (activeCategory && p.category !== activeCategory) return false;

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      if (!matchName && !matchCat && !matchDesc) return false;
    }

    // Health Concern match
    if (selectedConcern === 'Best Sellers') {
      if (!p.isBestSeller) return false;
    } else if (selectedConcern !== 'All') {
      if (!p.concern || !p.concern.includes(selectedConcern as HealthConcern)) return false;
    }


    // Price range match
    const lowestPrice = Math.min(...p.variants.map((v) => v.price));
    if (lowestPrice > priceRange) return false;

    // In Stock
    if (onlyInStock && p.stock <= 0) return false;

    return true;
  });

  // Sorting Logic
  if (sortOption === 'price-low-high') {
    filteredList.sort((a, b) => a.variants[0].price - b.variants[0].price);
  } else if (sortOption === 'price-high-low') {
    filteredList.sort((a, b) => b.variants[0].price - a.variants[0].price);
  } else if (sortOption === 'rating') {
    filteredList.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === 'popularity') {
    filteredList.sort((a, b) => b.reviewCount - a.reviewCount);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 bg-white border border-soft px-4 py-3 rounded-xl shadow-2xs font-semibold">
          <button
            onClick={handleHomeClick}
            className="hover:text-olive flex items-center gap-1.5 transition font-bold text-stone-800"
          >
            <HomeIcon className="w-4 h-4 text-olive" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-4 h-4 text-stone-400" />
          <button
            onClick={handleStorefrontClick}
            className="hover:text-olive flex items-center gap-1.5 transition font-bold text-stone-700"
          >
            <Store className="w-4 h-4 text-stone-500" />
            <span>Storefront</span>
          </button>
          {activeCategory && (
            <>
              <ChevronRight className="w-4 h-4 text-stone-400" />
              <span className="text-olive font-extrabold bg-cream px-2.5 py-0.5 rounded-lg border border-soft shadow-2xs">
                {activeCategory}
              </span>
            </>
          )}
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

        {/* Category Icons Pills Slider */}
        <div className="relative bg-white border border-soft p-3 rounded-2xl shadow-xs">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Categories ({CATEGORIES.length})
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => scrollCategories('left')}
                className="w-7 h-7 rounded-lg bg-cream border border-soft hover:bg-olive hover:text-white flex items-center justify-center transition text-stone-600"
                title="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollCategories('right')}
                className="w-7 h-7 rounded-lg bg-cream border border-soft hover:bg-olive hover:text-white flex items-center justify-center transition text-stone-600"
                title="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={categoryScrollRef}
            className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1 scroll-smooth"
          >
            <button
              onClick={() => setActiveCategory(null)}
              className={`text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shrink-0 transition flex items-center gap-2 ${
                !activeCategory
                  ? 'bg-olive text-white shadow-xs'
                  : 'bg-cream border border-soft text-stone-700 hover:border-olive'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-stone-200/60 flex items-center justify-center text-[10px]">
                🌿
              </span>
              <span>All Categories</span>
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.name)}
                className={`text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl shrink-0 transition flex items-center gap-2 border ${
                  activeCategory === cat.name
                    ? 'bg-olive text-white border-olive font-bold shadow-xs'
                    : 'bg-white border-soft text-stone-700 hover:border-olive hover:text-earth'
                }`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-6 h-6 rounded-lg object-cover shrink-0 border border-black/10"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=100&auto=format&fit=crop&q=80';
                  }}
                />
                <span className="whitespace-nowrap">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filters + Sort Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-soft shadow-sm">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            {/* Filter Pill: Health Concern */}
            <div className="flex items-center gap-1.5 bg-cream border border-stone-200 px-3 py-1.5 rounded-xl">
              <span className="text-stone-600 font-bold">Concern:</span>
              <select
                value={selectedConcern}
                onChange={(e) => setSelectedConcern(e.target.value as any)}
                className="bg-transparent font-bold text-olive focus:outline-none cursor-pointer"
              >
                <option value="All">All Concerns</option>
                <option value="Best Sellers">🔥 Best Sellers</option>
                <option value="Gut Health">Gut Health</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Heart Health">Heart Health</option>
                <option value="Skin & Hair">Skin & Hair</option>
              </select>
            </div>


            {/* Filter Pill: Max Price */}
            <div className="flex items-center gap-1.5 bg-cream border border-stone-200 px-3 py-1.5 rounded-xl">
              <span className="text-stone-600 font-bold">Max Price: ₹{priceRange}</span>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-20 accent-olive"
              />
            </div>

            {/* Filter Pill: In Stock Only */}
            <button
              onClick={() => setOnlyInStock(!onlyInStock)}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1 transition ${
                onlyInStock
                  ? 'bg-olive text-white border border-olive'
                  : 'bg-cream text-stone-600 border border-stone-200 hover:text-earth'
              }`}
            >
              <Check className={`w-3.5 h-3.5 ${onlyInStock ? 'text-white' : 'opacity-0'}`} />
              <span>In Stock Only</span>
            </button>
          </div>

          {/* Sort & Grid Toggle */}
          <div className="flex items-center gap-3 text-xs justify-between md:justify-end">
            <div className="flex items-center gap-2">
              <span className="text-stone-500">Sort by:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="bg-cream border border-stone-200 text-earth rounded-xl px-3 py-1.5 font-bold focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="popularity">Popularity</option>
              </select>
            </div>

            <div className="flex items-center bg-cream border border-stone-200 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition ${
                  viewMode === 'grid' ? 'bg-olive text-white' : 'text-stone-500 hover:text-earth'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition ${
                  viewMode === 'list' ? 'bg-olive text-white' : 'text-stone-500 hover:text-earth'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Badges */}
        {(activeCategory || searchQuery || selectedConcern !== 'All' || priceRange < 2000) && (
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-stone-500 font-bold">Active Filters:</span>
            {activeCategory && (
              <span className="bg-cream text-olive border border-soft px-2.5 py-1 rounded-lg flex items-center gap-1 font-bold">
                {activeCategory}
                <button onClick={() => setActiveCategory(null)}>
                  <X className="w-3 h-3 hover:text-earth" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="bg-cream text-earth border border-soft px-2.5 py-1 rounded-lg flex items-center gap-1 font-bold">
                Search: "{searchQuery}"
                <button onClick={() => setSearchQuery('')}>
                  <X className="w-3 h-3 hover:text-earth" />
                </button>
              </span>
            )}
            {selectedConcern !== 'All' && (
              <span className="bg-cream text-earth border border-soft px-2.5 py-1 rounded-lg flex items-center gap-1 font-bold">
                Concern: {selectedConcern}
                <button onClick={() => setSelectedConcern('All')}>
                  <X className="w-3 h-3 hover:text-earth" />
                </button>
              </span>
            )}
          </div>
        )}

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
