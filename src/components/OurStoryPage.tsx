import React from 'react';
import { ArrowLeft, Sparkles, Heart, RefreshCw, Award } from 'lucide-react';
import { DhaanyaLogo } from './DhaanyaLogo';

interface OurStoryPageProps {
  onNavigateHome: () => void;
  onNavigateCategoryPage: () => void;
}

export const OurStoryPage: React.FC<OurStoryPageProps> = ({
  onNavigateHome,
  onNavigateCategoryPage,
}) => {
  return (
    <div className="bg-[#F4ECD8] text-[#2A2620] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Navigation back */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#2A2620] hover:text-[#A9542B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Hero Banner Header */}
        <div className="text-center space-y-4">
          <DhaanyaLogo variant="default" size="lg" className="mx-auto" />
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#A9542B] pt-2">
            OUR HERITAGE & JOURNEY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#2A2620]">
            The Dhaanya Story
          </h1>
          <p className="font-serif text-xl italic text-[#3E4B32] max-w-2xl mx-auto">
            "Rooted in tradition, freshly milled before you and for you."
          </p>
        </div>

        {/* Story Section 1: Why Dhaanya Exists */}
        <div className="kraft-card p-8 md:p-12 rounded-2xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C89211]">
            01 / ORIGINS
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2A2620]">
            Why Dhaanya Exists
          </h2>
          <p className="text-base sm:text-lg text-[#2A2620]/80 leading-relaxed">
            In traditional Indian households, grain was never just a commodity. It was life, energy, and care. Flours were ground weekly at local flour mills (chakki), spices were crushed fresh in stone mortars, and oils were cold-pressed right from regional harvests.
          </p>
          <p className="text-base sm:text-lg text-[#2A2620]/80 leading-relaxed">
            As cities expanded, mass industrial processing replaced local mills with plastic bags filled with flour that had sat on warehouse shelves for months. Dhaanya was born to bring back that lost connection to real, honest food.
          </p>
        </div>

        {/* Story Section 2: What Went Missing */}
        <div className="bg-[#2A2620] text-[#F4ECD8] p-8 md:p-12 rounded-2xl space-y-6 border border-[#C89211]/20 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8B93E]">
            02 / THE CONTEXT
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#F4ECD8]">
            What Went Missing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-sm">
            <div className="p-4 rounded-lg bg-[#F4ECD8]/5 border border-[#F4ECD8]/10">
              <h3 className="font-serif text-lg font-bold text-[#E8B93E] mb-2">Shelf-Life Over Quality</h3>
              <p className="text-[#F4ECD8]/75">Industrial flours remove germ and bran to extend shelf life for 6+ months, discarding essential fiber and vitamins.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#F4ECD8]/5 border border-[#F4ECD8]/10">
              <h3 className="font-serif text-lg font-bold text-[#E8B93E] mb-2">Heat & Volatile Loss</h3>
              <p className="text-[#F4ECD8]/75">High-speed machinery burns off delicate essential oils that give cumin, coriander, and turmeric their true aroma.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#F4ECD8]/5 border border-[#F4ECD8]/10">
              <h3 className="font-serif text-lg font-bold text-[#E8B93E] mb-2">Chemical Solvent Refining</h3>
              <p className="text-[#F4ECD8]/75">Supermarket cooking oils undergo chemical solvent extraction and bleaching, stripping natural antioxidants.</p>
            </div>
          </div>
        </div>

        {/* Story Section 3: Our Belief */}
        <div className="bg-[#3E4B32] text-[#F4ECD8] p-8 md:p-12 rounded-2xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E8B93E]">
            03 / PHILOSOPHY
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#F4ECD8]">
            Our Core Belief
          </h2>
          <p className="font-serif text-2xl italic text-[#E8B93E] leading-snug">
            "Freshness should not be a promise you take on faith. It should be something you witness."
          </p>
          <p className="text-base sm:text-lg text-[#F4ECD8]/85 leading-relaxed">
            We believe that true wellness begins when you can see your food being prepared. Nothing hidden, nothing added, zero compromise on grain integrity.
          </p>
        </div>

        {/* Story Section 4: Our Promise */}
        <div className="kraft-card p-8 md:p-12 rounded-2xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A9542B]">
            04 / COMMITMENT
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#2A2620]">
            Our Promise to Your Kitchen
          </h2>
          <ul className="space-y-4 text-base text-[#2A2620]/80">
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#C89211] shrink-0 mt-0.5" />
              <span><strong>Milled Fresh on Order:</strong> Your flour and spices are ground only after your order is received or in front of your eyes.</span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#C89211] shrink-0 mt-0.5" />
              <span><strong>100% Whole Grain:</strong> We never separate bran or germ. You get full natural grain nutrition.</span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#C89211] shrink-0 mt-0.5" />
              <span><strong>Cold Pressed & Unrefined:</strong> Our oils are extracted using traditional wooden chakkis without heat or chemical solvents.</span>
            </li>
          </ul>

          <div className="pt-6">
            <button
              onClick={onNavigateCategoryPage}
              className="px-8 py-4 rounded-md bg-[#C89211] hover:bg-[#A9542B] text-[#2A2620] hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors shadow-md"
            >
              Explore Fresh Dhaanya Pantry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
