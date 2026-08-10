import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCategory } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSliderProps {
  onNavigateCustomMasala: () => void;
  onNavigateCategoryPage: (cat?: ProductCategory) => void;
}

export const MAIN_BANNERS = [
  {
    id: 'banner-1',
    image: '/images/banners/banner1.png',
    alt: 'Dhaanya - For your Organic Wellness (Spice, Flour & Oil Mill)',
    action: 'category',
  },
  {
    id: 'banner-2',
    image: '/images/banners/banner2.png',
    alt: 'Dhaanya - Scoop your favorites (Smart Scoop. Waste Less.)',
    action: 'category',
  },
  {
    id: 'banner-3',
    image: '/images/banners/banner3.png',
    alt: 'Dhaanya - Make your own masala (Your Spice. Your Recipe. Your Masala.)',
    action: 'custom_masala',
  },
  {
    id: 'banner-4',
    image: '/images/banners/banner4.png',
    alt: 'Dhaanya - Freshly milled your way (Spice, Flour & Oil Mill)',
    action: 'category',
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onNavigateCustomMasala,
  onNavigateCategoryPage,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % MAIN_BANNERS.length);
    }, 5000); // 5 Seconds Smooth Autoplay Interval
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

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full bg-[#faf8f4] border-b border-soft overflow-hidden select-none py-0 group"
    >
      <div className="w-full relative">
        <div className="relative overflow-hidden w-full min-h-[220px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[460px] bg-[#f8f5ef]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentBanner.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'tween', duration: 0.75, ease: [0.25, 1, 0.5, 1] },
                opacity: { duration: 0.45, ease: 'easeInOut' },
              }}
              onClick={handleBannerClick}
              className="cursor-pointer w-full h-full flex items-center justify-center p-0"
            >
              <img
                src={currentBanner.image}
                alt={currentBanner.alt}
                className="w-full h-auto max-h-[500px] object-contain mx-auto"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/80 text-earth hover:bg-olive hover:text-white flex items-center justify-center transition-all duration-200 shadow-md opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/80 text-earth hover:bg-olive hover:text-white flex items-center justify-center transition-all duration-200 shadow-md opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200/60 shadow-xs">
            {MAIN_BANNERS.map((banner, idx) => (
              <button
                key={banner.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-olive' : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

