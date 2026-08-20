import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';

interface DhaanyaRitualSectionProps {
  onNavigateCustomMasala?: () => void;
}

export const DhaanyaRitualSection: React.FC<DhaanyaRitualSectionProps> = ({
  onNavigateCustomMasala,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'YOU CHOOSE',
      summary: 'Your grain, your blend, your portion, your texture.',
      details:
        'Select from unpolished whole wheat, ancient millets, hand-selected spices, or oil seeds. Choose your exact grinding coarseness or custom recipe blend.',
      badge: 'Step 1: Selection',
      image: '/images/banners/banner2.png',
    },
    {
      number: '02',
      title: 'YOU WATCH',
      summary: 'It goes into the mill and is ground fresh before your eyes.',
      details:
        'Witness your chosen whole grains and spices enter our traditional slow mills. Slow grinding maintains cool temperatures, preserving volatile oils and aromas.',
      badge: 'Step 2: Live Milling',
      image: '/images/banners/banner3.png',
    },
    {
      number: '03',
      title: 'YOU TAKE IT HOME',
      summary: 'Packed on the spot, carrying the freshness of the mill.',
      details:
        'Sealed in breathable kraft paper packaging right off the mill spout. Arrives in your kitchen warm, fragrant, and packed with nutrients.',
      badge: 'Step 3: Fresh Packaging',
      image: '/images/banners/banner1.png',
    },
  ];

  return (
    <section className="bg-[#F4ECD8] text-[#2A2620] py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#2A2620]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A9542B]">
            THE EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            The Dhaanya Ritual
          </h2>
          <p className="text-[#2A2620]/75 mt-3 text-base sm:text-lg">
            Experience the traditional Indian milling ritual — restored for modern households.
          </p>
        </div>

        {/* Step Selector Tab Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-xl text-left transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#3E4B32] text-[#F4ECD8] border-[#3E4B32] shadow-lg scale-102'
                    : 'kraft-card text-[#2A2620] hover:border-[#C89211]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-serif text-3xl font-bold ${
                      isActive ? 'text-[#E8B93E]' : 'text-[#A9542B]'
                    }`}
                  >
                    {step.number}
                  </span>
                  {isActive && <CheckCircle2 className="w-5 h-5 text-[#E8B93E]" />}
                </div>
                <h3 className="font-serif text-xl font-bold uppercase tracking-wider mb-2">
                  {step.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm ${
                    isActive ? 'text-[#F4ECD8]/85' : 'text-[#2A2620]/70'
                  }`}
                >
                  {step.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Display Card */}
        <div className="kraft-card p-6 md:p-10 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C89211] bg-[#C89211]/10 px-3 py-1 rounded-full">
              {steps[activeStep].badge}
            </span>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2620]">
              {steps[activeStep].number}. {steps[activeStep].title}
            </h3>

            <p className="font-serif text-xl italic text-[#A9542B]">
              "{steps[activeStep].summary}"
            </p>

            <p className="text-base text-[#2A2620]/80 leading-relaxed pt-2">
              {steps[activeStep].details}
            </p>

            {onNavigateCustomMasala && (
              <div className="pt-4">
                <button
                  onClick={onNavigateCustomMasala}
                  className="px-6 py-3 rounded-md bg-[#3E4B32] hover:bg-[#2A2620] text-[#F4ECD8] font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <span>Experience Custom Blend</span>
                  <ArrowRight className="w-4 h-4 text-[#E8B93E]" />
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden aspect-16/10 shadow-lg border border-[#2A2620]/10">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2620]/60 via-transparent to-transparent flex items-end p-6">
                <span className="font-serif text-sm font-semibold text-[#F4ECD8] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E8B93E]" />
                  Dhaanya Fresh Milling Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
