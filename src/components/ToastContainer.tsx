import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp, TOAST_DURATION_MS } from '../context/AppContext';
import { Check, X, Info, Sparkles } from 'lucide-react';

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast, setIsCartOpen } = useApp();

  return (
    <div className="fixed z-50 pointer-events-none top-28 sm:top-32 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm md:left-auto md:right-6 md:translate-x-0 md:w-full flex flex-col items-center md:items-end gap-3">
      <AnimatePresence mode="sync">
        {toasts.map((toast) => {
          const isCelebratory =
            toast.message.includes('discount') ||
            toast.message.includes('Saved') ||
            toast.message.includes('Coupon') ||
            toast.message.includes('🎉') ||
            toast.message.includes('applied');

          const isCartToast = toast.title === 'Added to cart';

          const accent =
            toast.type === 'success' ? '#3E4B32' : toast.type === 'error' ? '#7C2A1E' : '#C89211';

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28, ease: EASE_OUT }}
              className={`pointer-events-auto relative w-full overflow-hidden flex items-center gap-3.5 p-5 sm:p-6 rounded-2xl bg-[#FBF7EC] border shadow-[0_16px_40px_-12px_rgba(42,38,32,0.35)] ${
                isCelebratory ? 'border-[#C89211]/50 ring-2 ring-[#C89211]/15' : 'border-[#2A2620]/10'
              }`}
            >
              {/* Confetti Sparkles for Celebratory Toasts */}
              {isCelebratory && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none flex gap-6">
                  <motion.span
                    initial={{ y: 6, opacity: 0, scale: 0.3 }}
                    animate={{ y: [-14, -26], opacity: [0, 1, 0], scale: [0.3, 1.2, 0.7], rotate: [-10, -30] }}
                    transition={{ duration: 1.3, repeat: Infinity, repeatDelay: 0.9 }}
                    className="text-base"
                  >
                    ✨
                  </motion.span>
                  <motion.span
                    initial={{ y: 6, opacity: 0, scale: 0.3 }}
                    animate={{ y: [-18, -30], opacity: [0, 1, 0], scale: [0.3, 1.3, 0.8] }}
                    transition={{ duration: 1.1, delay: 0.15, repeat: Infinity, repeatDelay: 0.9 }}
                    className="text-base"
                  >
                    🎉
                  </motion.span>
                </div>
              )}

              {/* Thumbnail (product image + success badge) or plain type icon */}
              {toast.image ? (
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white">
                    <img src={toast.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <span
                    className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center border-[3px] border-white shadow-sm"
                    style={{ backgroundColor: accent }}
                  >
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </span>
                </div>
              ) : (
                <div
                  className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.35)]"
                  style={{ backgroundColor: accent }}
                >
                  {toast.type === 'success' && <Check className="w-5 h-5 text-white" strokeWidth={3} />}
                  {toast.type === 'error' && <X className="w-5 h-5 text-white" strokeWidth={3} />}
                  {toast.type === 'info' && <Info className="w-5 h-5 text-white" strokeWidth={2.5} />}
                </div>
              )}

              {/* Text */}
              <div className="flex-1 min-w-0 flex flex-col">
                {isCelebratory && (
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#A9542B] flex items-center gap-1 mb-0.5">
                    <Sparkles className="w-3 h-3 text-[#C89211]" /> Special Offer Unlocked
                  </span>
                )}
                {toast.title && (
                  <span className="text-[11px] font-medium text-[#2A2620]/55 leading-none mb-0.5">
                    {toast.title}
                  </span>
                )}
                <span
                  className={`text-sm leading-snug truncate ${
                    toast.title ? 'font-serif font-bold text-[#2A2620]' : 'font-semibold text-[#2A2620]'
                  }`}
                >
                  {toast.message}
                </span>
              </div>

              {/* View Cart quick action */}
              {isCartToast && (
                <button
                  onClick={() => {
                    setIsCartOpen(true);
                    dismissToast(toast.id);
                  }}
                  className="shrink-0 text-[11px] font-bold uppercase tracking-wide text-[#A9542B] hover:text-[#7C2A1E] transition-colors cursor-pointer"
                >
                  View Cart
                </button>
              )}

              {/* Auto-dismiss progress bar, synced to TOAST_DURATION_MS */}
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: TOAST_DURATION_MS / 1000, ease: 'linear' }}
                className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
                style={{ backgroundColor: accent, opacity: 0.55 }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
