import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border backdrop-blur-md transition-all duration-300 animate-slide-up ${
            toast.type === 'success'
              ? 'bg-white border-soft text-earth'
              : toast.type === 'error'
              ? 'bg-white border-rose-300 text-earth'
              : 'bg-white border-soft text-earth'
          }`}
        >
          {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-olive shrink-0" />}
          {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-olive shrink-0" />}
          <span className="text-sm font-medium leading-snug flex-1">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
