import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Product, ProductCategory } from '../types';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (cat?: ProductCategory) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
}) => {
  const { products, setQuickViewProduct } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSearchTerm('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const popularSearches = [
    'Fresh Atta',
    'Wood Pressed Oil',
    'Sambar Masala',
    'Ragi Flour',
    'Millet',
    'Turmeric',
    'Cold Pressed',
  ];

  const popularCategories: ProductCategory[] = [
    'Flour',
    'Spices',
    'Wood Pressed Oils',
    'Millets',
    'Natural Sweeteners',
  ];

  const filteredProducts = searchTerm.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (p.tags && p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())))
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#2A2620]/95 backdrop-blur-md text-[#F4ECD8] animate-fade-in transition-all">
      {/* Header Bar */}
      <div className="flex items-center justify-between p-6 border-b border-[#C89211]/20 max-w-6xl mx-auto w-full">
        <span className="font-serif text-xl text-[#C89211] tracking-wider uppercase">
          Search Dhaanya Pantry
        </span>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-[#F4ECD8]/10 text-[#F4ECD8] transition-colors"
          aria-label="Close search"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Search Input Area */}
      <div className="max-w-4xl mx-auto w-full px-6 pt-8 pb-4">
        <div className="relative flex items-center border-b-2 border-[#C89211] pb-2">
          <Search className="w-7 h-7 text-[#C89211] mr-4 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for freshly milled flours, whole spices, cold-pressed oils..."
            className="w-full bg-transparent text-xl md:text-2xl font-serif text-[#F4ECD8] placeholder-[#F4ECD8]/50 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-[#F4ECD8]/60 hover:text-[#F4ECD8] text-sm"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto w-full px-6 py-6 overflow-y-auto flex-1 no-scrollbar">
        {!searchTerm.trim() ? (
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-sm uppercase tracking-widest text-[#E8B93E] mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4" /> Popular Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setSearchTerm(term)}
                    className="px-4 py-2 rounded-full bg-[#F4ECD8]/10 hover:bg-[#C89211] text-sm text-[#F4ECD8] hover:text-[#2A2620] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-sm uppercase tracking-widest text-[#E8B93E] mb-3">
                Explore Categories
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {popularCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      onClose();
                      onSelectCategory(cat);
                    }}
                    className="p-4 rounded-lg bg-[#3E4B32]/40 hover:bg-[#3E4B32] border border-[#C89211]/20 text-left transition-all group flex items-center justify-between"
                  >
                    <span className="font-serif text-lg">{cat}</span>
                    <ArrowRight className="w-4 h-4 text-[#C89211] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-[#F4ECD8]/70">
                Found {filteredProducts.length} results for "{searchTerm}"
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="font-serif text-xl text-[#E8B93E] mb-2">
                  No freshly milled items found
                </p>
                <p className="text-[#F4ECD8]/70 text-sm">
                  Try searching with terms like "Flour", "Oil", "Masala", or "Spices".
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onClose();
                      setQuickViewProduct(product);
                    }}
                    className="flex gap-4 p-3 rounded-lg bg-[#F4ECD8]/5 hover:bg-[#F4ECD8]/15 border border-[#F4ECD8]/10 cursor-pointer transition-colors"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded bg-white/10 shrink-0"
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-xs text-[#E8B93E] uppercase tracking-wider">
                        {product.category}
                      </span>
                      <h4 className="font-serif text-lg text-[#F4ECD8] line-clamp-1">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#F4ECD8]/70 line-clamp-1 mt-0.5">
                        {product.description}
                      </p>
                      <span className="font-semibold text-[#E8B93E] mt-1">
                        ₹{product.variants[0]?.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
