import React, { useState } from 'react';
import { HealthConcern } from '../types';
import { PRODUCTS } from '../data/initialData';
import { ProductCard } from './ProductCard';
import { HeartPulse, Activity, Sparkles, Scale } from 'lucide-react';

export const ShopByConcern: React.FC = () => {
  const [activeConcernTab, setActiveConcernTab] = useState<HealthConcern>('Gut Health');

  const concernsList: { name: HealthConcern; icon: React.ReactNode; desc: string }[] = [
    { name: 'Gut Health', icon: <Activity className="w-4 h-4" />, desc: 'Probiotic raw honeys & digestion-friendly spices' },
    { name: 'Weight Loss', icon: <Scale className="w-4 h-4" />, desc: 'High-fiber chia seeds & ancient low-GI millets' },
    { name: 'Heart Health', icon: <HeartPulse className="w-4 h-4" />, desc: 'Cold pressed mustard oil & omega-rich seeds' },
    { name: 'Skin & Hair', icon: <Sparkles className="w-4 h-4" />, desc: 'Jumbo California almonds & Ayurvedic Kumkumadi' },
  ];

  const filteredProducts = PRODUCTS.filter(
    (p) => p.concern && p.concern.includes(activeConcernTab)
  );

  return (
    <section className="py-12 bg-cream/60 text-earth border-t border-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-olive uppercase tracking-widest">
            TARGETED WELLNESS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-earth mt-1">
            Shop By Health Concern
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            Target your daily nutrition goals with pure, natural, nutrient-dense organic foods.
          </p>
        </div>

        {/* Concern Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar pb-4 mb-8">
          {concernsList.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveConcernTab(item.name)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold text-xs sm:text-sm transition duration-300 border shrink-0 ${
                activeConcernTab === item.name
                  ? 'bg-olive text-white border-olive shadow-sm'
                  : 'bg-white text-stone-700 border-soft hover:bg-cream'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Filtered Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </section>
  );
};
