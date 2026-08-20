import React from 'react';
import { Wheat, RefreshCw, Eye, BookOpen, CheckCircle, Flame } from 'lucide-react';

export const WhyDhaanyaTrustSection: React.FC = () => {
  const pillars = [
    {
      title: 'Freshly Milled',
      description: 'Ground only after order placement or live in store, preserving aromatic volatile oils.',
      icon: Wheat,
    },
    {
      title: 'Whole Ingredients',
      description: '100% unpolished grains, spices, and seeds with natural bran and germ intact.',
      icon: CheckCircle,
    },
    {
      title: 'Transparent Process',
      description: 'Zero hidden additives, zero artificial colors, zero chemical refining or extraction.',
      icon: Eye,
    },
    {
      title: 'Traditional Knowledge',
      description: 'Cold stone milling and slow cold pressing guided by traditional Indian food wisdom.',
      icon: BookOpen,
    },
    {
      title: 'Carefully Selected Grains',
      description: 'Directly sourced from trusted regional farmers who prioritize soil and crop purity.',
      icon: RefreshCw,
    },
    {
      title: 'Made Fresh',
      description: 'Small batch production ensuring every package reaching your kitchen is fragrant & warm.',
      icon: Flame,
    },
  ];

  return (
    <section className="bg-[#F4ECD8] text-[#2A2620] py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#2A2620]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3E4B32]">
            OUR GUARANTEE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Why Dhaanya?
          </h2>
          <p className="text-[#2A2620]/75 mt-3 text-base sm:text-lg">
            Honest food made simply, rooted in tradition and verified by your own eyes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="kraft-card p-6 rounded-xl flex items-start gap-4 hover:border-[#3E4B32]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#3E4B32] text-[#F4ECD8] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2A2620]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2A2620]/75 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
