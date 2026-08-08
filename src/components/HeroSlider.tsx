import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCategory } from '../types';

interface HeroSliderProps {
  onNavigateCustomMasala: () => void;
  onNavigateCategoryPage: (cat?: ProductCategory) => void;
}

export const MAIN_BANNERS = [
  {
    id: 'banner-1',
    image: '/images/banners/banner1.png',
    alt: 'DailyWell - For your Dailywellness (Spice, Flour & Oil Mill)',
    action: 'category',
  },
  {
    id: 'banner-2',
    image: '/images/banners/banner2.png',
    alt: 'DailyWell - Scoop your favorites (Smart Scoop. Waste Less.)',
    action: 'category',
  },
  {
    id: 'banner-3',
    image: '/images/banners/banner3.png',
    alt: 'DailyWell - Make your own masala (Your Spice. Your Recipe. Your Masala.)',
    action: 'custom_masala',
  },
  {
    id: 'banner-4',
    image: '/images/banners/banner4.png',
    alt: 'DailyWell - Freshly milled your way (Spice, Flour & Oil Mill)',
    action: 'category',
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onNavigateCustomMasala,
  onNavigateCategoryPage,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MAIN_BANNERS.length);
    }, 5000); // 5 Seconds Autoplay Interval
    return () => clearInterval(timer);
  }, []);

  const currentBanner = MAIN_BANNERS[currentIndex];

  const handleBannerClick = () => {
    if (currentBanner.action === 'custom_masala') {
      onNavigateCustomMasala();
    } else {
      onNavigateCategoryPage();
    }
  };

  return (
    <div className="relative w-full bg-[#faf8f4] border-b border-soft overflow-hidden select-none py-4 sm:py-6 lg:py-10">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner.id}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={handleBannerClick}
            className="cursor-pointer w-full flex items-center justify-center min-h-[260px] sm:min-h-[360px] md:min-h-[460px] lg:min-h-[540px] p-2 sm:p-4 bg-white border border-stone-200/80 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={currentBanner.image}
              alt={currentBanner.alt}
              className="w-full h-auto max-h-[580px] lg:max-h-[620px] object-contain mx-auto rounded-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
