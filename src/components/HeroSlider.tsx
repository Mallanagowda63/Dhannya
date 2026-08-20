import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCategory } from '../types';
import { ChevronLeft, ChevronRight, ArrowRight, Play, Sparkles, ShieldCheck, Wheat } from 'lucide-react';

interface HeroSliderProps {
  onNavigateCustomMasala: () => void;
  onNavigateCategoryPage: (cat?: ProductCategory) => void;
  onNavigateFreshMilling?: () => void;
}

export const MAIN_BANNERS = [
  {
    id: 'banner-3',
    image: '/images/banners/banner3.png',
    alt: 'Dhaanya - Custom Masala Mill',
    tag: 'CUSTOM MASALA MILL',
    title: 'Your Grain. Your Blend. Ground Fresh.',
    subtitle: 'Witness the grinding of pure whole spices and custom masala blends.',
    cta: 'MAKE YOUR OWN MASALA',
    action: 'custom_masala',
  },
  {
    id: 'banner-1',
    image: '/images/banners/banner1.png',
    alt: 'Dhaanya - Freshly Milled Flours & Spices',
    tag: 'FRESH MILLING RITUAL',
    title: 'Freshly Milled Whole Wheat & Flours',
    subtitle: 'Ground fresh on order spout without stripping natural grain bran.',
    cta: 'EXPLORE FRESH FLOURS',
    action: 'category',
  },
  {
    id: 'banner-2',
    image: '/images/banners/banner2.png',
    alt: 'Dhaanya - Cold-Pressed Oils & Heritage Millets',
    tag: 'COLD PRESSED & UNREFINED',
    title: 'Purity You Can See Happen',
    subtitle: 'From golden seeds to pure cold-pressed oils, direct to your kitchen.',
    cta: 'SHOP COLD-PRESSED OILS',
    action: 'category',
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onNavigateCustomMasala,
  onNavigateCategoryPage,
  onNavigateFreshMilling,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % MAIN_BANNERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const currentBanner = MAIN_BANNERS[currentIndex];

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % MAIN_BANNERS.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + MAIN_BANNERS.length) % MAIN_BANNERS.length);
  };

  const handleBannerClick = () => {
    if (currentBanner.action === 'custom_masala') {
      onNavigateCustomMasala();
    } else {
      onNavigateCategoryPage();
    }
  };

  return (
    <section className="relative w-full bg-[#F4ECD8] text-[#2A2620] overflow-hidden">
      <div className="max-w-[1450px] w-[calc(100%-32px)] sm:w-[calc(100%-48px)] mx-auto pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 space-y-6 sm:space-y-8">
        
        {/* 1. MAIN HERO (2-Column Desktop Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column (42-45% width on desktop) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Hero Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F3E6] border border-[#2A2620]/20 text-[#2A2620] text-[11px] font-semibold uppercase tracking-[0.2em]">
              <Wheat className="w-3.5 h-3.5 text-[#C89211]" />
              <span>TRADITIONAL INDIAN MILLING</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#2A2620] leading-[1.08]">
              Freshly Milled. <br />
              <span className="italic text-[#A9542B] font-normal">Made for You.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-[17px] text-[#2A2620] font-sans max-w-[550px] leading-[1.55]">
              Rooted in tradition, freshly milled before you and for you. Witness honest food, whole grains, and pure cold-pressed oils.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onNavigateCategoryPage()}
                className="h-[48px] sm:h-[52px] px-6 rounded-md bg-[#C89211] hover:bg-[#b07e0e] text-[#2A2620] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2 group cursor-pointer shrink-0"
              >
                <span>SHOP FRESH PRODUCTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  if (onNavigateFreshMilling) onNavigateFreshMilling();
                  else onNavigateCustomMasala();
                }}
                className="h-[48px] sm:h-[52px] px-5 rounded-md bg-transparent hover:bg-[#2A2620] text-[#2A2620] hover:text-[#F4ECD8] border border-[#2A2620] font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>SEE HOW IT'S MILLED</span>
              </button>
            </div>

            {/* Trust Indicators Compact Row */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] sm:text-xs font-semibold text-[#3E4B32] border-t border-[#2A2620]/15">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3E4B32] shrink-0" />
                <span>100% Whole Grain</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3E4B32] shrink-0" />
                <span>Ground on Order</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3E4B32] shrink-0" />
                <span>Wood Pressed Oils</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3E4B32] shrink-0" />
                <span>Zero Preservatives</span>
              </div>
            </div>
          </div>

          {/* Right Column: ONE Large Premium Food/Grain Visual (55-58% width on desktop) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden">
              <img
                src="/images/hero-grain-visual.jpg"
                alt="Traditional Indian Milling — Grains, Fresh Flour & Whole Spices"
                className="w-full h-full object-cover object-center rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* 2. CUSTOM MASALA BANNER (Wide Horizontal Carousel Immediately Below Main Hero) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full pt-2"
        >
          <div className="relative w-full h-[140px] sm:h-[160px] lg:h-[175px] rounded-[12px] overflow-hidden border border-[#2A2620]/20 bg-[#2A2620] text-[#F4ECD8] flex items-center shadow-xs">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentBanner.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={handleBannerClick}
                className="cursor-pointer w-full h-full relative flex items-center justify-between px-6 sm:px-10 lg:px-12 z-10"
              >
                {/* Background Image with Natural Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={currentBanner.image}
                    alt={currentBanner.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2A2620]/90 via-[#2A2620]/75 to-transparent" />
                </div>

                {/* Left Side: Banner Content */}
                <div className="z-10 max-w-xl space-y-1">
                  <span className="text-[10px] sm:text-xs font-bold text-[#E8B93E] uppercase tracking-widest block">
                    {currentBanner.tag}
                  </span>
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#F4ECD8] leading-tight">
                    {currentBanner.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F4ECD8]/85 font-sans line-clamp-1">
                    "{currentBanner.subtitle}"
                  </p>
                </div>

                {/* Right Side: Banner CTA Button */}
                <div className="z-10 hidden sm:block">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBannerClick();
                    }}
                    className="px-5 py-2.5 rounded-md bg-[#C89211] hover:bg-[#A9542B] text-[#2A2620] hover:text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <span>{currentBanner.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Left / Right Circular Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F4ECD8] text-[#2A2620] hover:bg-[#C89211] flex items-center justify-center transition-colors shadow cursor-pointer z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F4ECD8] text-[#2A2620] hover:bg-[#C89211] flex items-center justify-center transition-colors shadow cursor-pointer z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots Indicator Below Banner */}
          <div className="flex items-center justify-center gap-1.5 pt-2.5">
            {MAIN_BANNERS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-5 bg-[#A9542B]' : 'w-1.5 bg-[#2A2620]/30 hover:bg-[#2A2620]/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
