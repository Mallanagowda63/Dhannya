import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts } = useApp();

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 max-w-lg w-full pointer-events-none px-4">
      <AnimatePresence mode="sync">
        {toasts.map((toast) => {
          const isCelebratory =
            toast.message.includes('discount') ||
            toast.message.includes('Saved') ||
            toast.message.includes('Coupon') ||
            toast.message.includes('🎉') ||
            toast.message.includes('applied') ||
            toast.message.includes('added');

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -45, scale: 0.7, rotateX: -25, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -25, scale: 0.8, filter: 'blur(4px)' }}
              transition={{ type: 'spring', stiffness: 480, damping: 24, mass: 0.8 }}
              className={`pointer-events-auto relative overflow-hidden flex items-center justify-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl transition-all ${
                toast.type === 'success'
                  ? isCelebratory
                    ? 'bg-stone-900/95 text-white border-2 border-amber-400/90 shadow-amber-500/20 ring-4 ring-amber-400/20'
                    : 'bg-stone-900/95 text-white border border-stone-700 shadow-xl'
                  : toast.type === 'error'
                  ? 'bg-stone-900/95 text-white border-2 border-rose-500/90 shadow-rose-500/20'
                  : 'bg-stone-900/95 text-white border border-stone-700 shadow-xl'
              }`}
            >
              {/* Confetti & Sparkles Pop Burst for Celebratory Center Toasts */}
              {isCelebratory && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none flex gap-6">
                  <motion.span
                    initial={{ y: 10, opacity: 0, scale: 0.3 }}
                    animate={{ y: [-20, -35], x: [-15, -30], opacity: [0, 1, 0], scale: [0.3, 1.4, 0.8], rotate: [-10, -40] }}
                    transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.8 }}
                    className="text-lg"
                  >
                    🎉
                  </motion.span>
                  <motion.span
                    initial={{ y: 10, opacity: 0, scale: 0.3 }}
                    animate={{ y: [-25, -42], opacity: [0, 1, 0], scale: [0.3, 1.6, 0.9] }}
                    transition={{ duration: 1.2, delay: 0.1, repeat: Infinity, repeatDelay: 0.8 }}
                    className="text-lg"
                  >
                    ✨
                  </motion.span>
                  <motion.span
                    initial={{ y: 10, opacity: 0, scale: 0.3 }}
                    animate={{ y: [-20, -35], x: [15, 30], opacity: [0, 1, 0], scale: [0.3, 1.4, 0.8], rotate: [10, 40] }}
                    transition={{ duration: 1.4, delay: 0.2, repeat: Infinity, repeatDelay: 0.8 }}
                    className="text-lg"
                  >
                    🥳
                  </motion.span>
                </div>
              )}

              {/* Icon with Dynamic 3D Spring Pop */}
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 550, damping: 18 }}
                className="shrink-0 flex items-center justify-center"
              >
                {toast.type === 'success' && (
                  <div className="relative flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-400/50">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 z-10" />
                    </div>
                    {isCelebratory && (
                      <span className="absolute w-10 h-10 rounded-full bg-emerald-400/40 animate-ping" />
                    )}
                  </div>
                )}
                {toast.type === 'error' && (
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center border border-rose-400/50">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  </div>
                )}
                {toast.type === 'info' && (
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-400/50">
                    <Info className="w-5 h-5 text-amber-300 shrink-0" />
                  </div>
                )}
              </motion.div>

              {/* Toast Message Text */}
              <div className="flex flex-col">
                {isCelebratory && (
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300 animate-spin" /> Special Offer Unlocked
                  </span>
                )}
                <span className="text-xs sm:text-sm font-bold leading-snug text-white tracking-wide">
                  {toast.message}
                </span>
              </div>

              {/* Animated Progress Line at Bottom */}
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 3.2, ease: 'linear' }}
                className={`absolute bottom-0 left-0 right-0 h-1 origin-left ${
                  toast.type === 'success' ? 'bg-amber-400' : toast.type === 'error' ? 'bg-rose-500' : 'bg-amber-300'
                }`}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
