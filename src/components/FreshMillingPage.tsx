import React from 'react';
import { ArrowLeft, Sparkles, CheckCircle2, Play, MapPin, HelpCircle } from 'lucide-react';
import { DhaanyaLogo } from './DhaanyaLogo';

interface FreshMillingPageProps {
  onNavigateHome: () => void;
  onNavigateCustomMasala: () => void;
  onNavigateCategoryPage: () => void;
}

export const FreshMillingPage: React.FC<FreshMillingPageProps> = ({
  onNavigateHome,
  onNavigateCustomMasala,
  onNavigateCategoryPage,
}) => {
  const steps = [
    {
      num: '01',
      title: 'Select Your Grain',
      desc: 'Choose from whole unpolished wheat varieties (Khapli, Sharbati), millets (Ragi, Jowar, Bajra), whole spices, or oil seeds.',
    },
    {
      num: '02',
      title: 'Select Your Blend & Coarseness',
      desc: 'Pick your preferred grinding texture — fine rotis, coarse parathas, or custom masala roasting & spice ratios.',
    },
    {
      num: '03',
      title: 'Select Your Quantity',
      desc: 'Get exact portions milled from 500g up to 10kg so nothing sits unused on your kitchen shelves.',
    },
    {
      num: '04',
      title: 'Watch Live Milling',
      desc: 'Experience slow stone grinding or cold press oil extraction where full aroma and nutrients remain intact.',
    },
    {
      num: '05',
      title: 'Freshly Pack On Spot',
      desc: 'Sealed directly into eco-friendly kraft paper pouches warm off the mill spout.',
    },
    {
      num: '06',
      title: 'Take Freshness Home',
      desc: 'Enjoy authentic aroma, soft rotis, and pure cooking oil in your home kitchen.',
    },
  ];

  const faqs = [
    {
      q: 'Why is freshly milled flour healthier than store-bought packaged flour?',
      a: 'Packaged commercial flour removes the grain germ and wheat bran to prevent spoilage over months of storage. Freshly milled whole wheat retains the germ, vitamin E, B-vitamins, and essential fiber intact.',
    },
    {
      q: 'How long does freshly milled flour stay fresh?',
      a: 'Because our flour retains natural grain oils without chemical preservatives, we recommend consuming it within 30-45 days for optimal aroma and flavor.',
    },
    {
      q: 'Can I create custom masala recipes with my own ingredient proportions?',
      a: 'Yes! Our Live Custom Masala Builder lets you select exact grams of whole spices (cumin, coriander, cardamom, etc.), choose roasting levels, and get it ground live.',
    },
  ];

  return (
    <div className="bg-[#F4ECD8] text-[#2A2620] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Navigation back */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#2A2620] hover:text-[#A9542B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Hero Section */}
        <div className="text-center space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#3E4B32] bg-[#3E4B32]/10 px-4 py-1.5 rounded-full border border-[#3E4B32]/20">
            THE DHAANYA MILLING EXPERIENCE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#2A2620]">
            Fresh Milling Ritual
          </h1>
          <p className="font-serif text-xl italic text-[#A9542B] max-w-2xl mx-auto">
            "Witness whole grains transform into warm, fragrant flour before your eyes."
          </p>
        </div>

        {/* 6 Step Timeline Process */}
        <div className="kraft-card p-8 md:p-12 rounded-2xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2A2620] mb-8 text-center">
            How Fresh Milling Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#F4ECD8] border border-[#2A2620]/10 flex flex-col justify-between hover:border-[#C89211] transition-all"
              >
                <div>
                  <span className="font-serif text-3xl font-bold text-[#C89211] block mb-2">
                    {s.num}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#2A2620] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2A2620]/75 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center flex flex-wrap justify-center gap-4">
            <button
              onClick={onNavigateCustomMasala}
              className="px-8 py-4 rounded-md bg-[#3E4B32] hover:bg-[#2A2620] text-[#F4ECD8] font-semibold text-sm uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#E8B93E]" />
              <span>BUILD CUSTOM MASALA BLEND</span>
            </button>

            <button
              onClick={onNavigateCategoryPage}
              className="px-8 py-4 rounded-md bg-[#C89211] hover:bg-[#A9542B] text-[#2A2620] hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors shadow-md"
            >
              BROWSE MILL PRODUCTS
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3E4B32]">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#2A2620] mt-1">
              Fresh Milling FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="kraft-card p-6 rounded-xl space-y-2">
                <h3 className="font-serif text-lg font-bold text-[#2A2620] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#A9542B] shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-sm text-[#2A2620]/80 pl-7 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
