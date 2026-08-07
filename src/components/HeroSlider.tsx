import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/initialData';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCategory } from '../types';

interface HeroSliderProps {
  onNavigateCustomMasala: () => void;
  onNavigateCategoryPage: (cat?: ProductCategory) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onNavigateCustomMasala,
  onNavigateCategoryPage,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <div className="relative w-full overflow-hidden bg-stone-950 min-h-[480px] sm:min-h-[540px] md:min-h-[600px] flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentSlide.bgImage})` }}
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-10 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            key={`badge-${currentIndex}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-olive/90 border border-white/20 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md backdrop-blur mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>{currentSlide.badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif tracking-tight leading-[1.15] mb-6 drop-shadow"
          >
            {currentSlide.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`sub-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-stone-200 mb-8 leading-relaxed font-normal max-w-xl"
          >
            {currentSlide.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            key={`cta-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => {
                if (currentSlide.customMasalaTarget) {
                  onNavigateCustomMasala();
                } else if (currentSlide.categoryTarget) {
                  onNavigateCategoryPage(currentSlide.categoryTarget as ProductCategory);
                } else {
                  onNavigateCategoryPage();
                }
              }}
              className="bg-olive hover:bg-[#4a4a34] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5 transition duration-200"
            >
              <span>{currentSlide.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateCustomMasala()}
              className="bg-white/90 hover:bg-white text-earth border border-soft text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full backdrop-blur transition flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-terracotta" />
              <span>{currentSlide.secondaryButtonText}</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-stone-900/70 hover:bg-stone-800 border border-stone-700 text-stone-200 flex items-center justify-center backdrop-blur transition hover:scale-110"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-stone-900/70 hover:bg-stone-800 border border-stone-700 text-stone-200 flex items-center justify-center backdrop-blur transition hover:scale-110"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-amber-400 shadow-md shadow-amber-500/50' : 'w-2.5 bg-stone-700 hover:bg-stone-500'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
