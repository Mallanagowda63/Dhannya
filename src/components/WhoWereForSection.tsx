import React from 'react';
import { HeartPulse, Sparkles, ShieldCheck } from 'lucide-react';

export const WhoWereForSection: React.FC = () => {
  const profiles = [
    {
      title: 'HEALTH-CONSCIOUS',
      quote: 'Reads every label, questions every ingredient.',
      description: 'You care about whole grain nutrition, fiber content, unrefined cold-pressed oils, and zero chemical additives in daily family meals.',
      icon: HeartPulse,
      accentColor: 'text-[#A9542B]',
    },
    {
      title: 'QUALITY-DRIVEN',
      quote: 'Wants the right product, not simply the cheapest one.',
      description: 'You appreciate the distinct culinary fragrance of freshly milled atta, whole ground spices, and cold stone pressed mustard and sesame oils.',
      icon: Sparkles,
      accentColor: 'text-[#C89211]',
    },
    {
      title: 'REASSURANCE-SEEKING',
      quote: 'Buys peace of mind as much as groceries.',
      description: 'You want complete transparency — witnessing the whole grain enter the mill so you know exactly what your children and family are eating.',
      icon: ShieldCheck,
      accentColor: 'text-[#3E4B32]',
    },
  ];

  return (
    <section className="bg-[#2A2620] text-[#F4ECD8] py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#C89211]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8B93E]">
            OUR COMMUNITY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-[#F4ECD8]">
            Who We're For
          </h2>
          <p className="text-base sm:text-lg text-[#F4ECD8]/80 mt-4 leading-relaxed font-serif italic">
            "Premium households who read labels, care about what their family eats, and choose genuine quality over mass-market convenience."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#F4ECD8]/5 border border-[#F4ECD8]/10 hover:border-[#C89211]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#F4ECD8]/10 flex items-center justify-center text-[#E8B93E] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className={`text-xs font-bold tracking-widest uppercase ${item.accentColor}`}>
                    {item.title}
                  </span>

                  <h3 className="font-serif text-xl font-semibold italic text-[#F4ECD8] mt-2 mb-4 leading-snug">
                    "{item.quote}"
                  </h3>

                  <p className="text-sm text-[#F4ECD8]/75 leading-relaxed">
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
