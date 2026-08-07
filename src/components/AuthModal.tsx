import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Lock, Mail, User, ShieldCheck, Key } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, login, showToast } = useApp();

  const [mode, setMode] = useState<'login' | 'signup' | 'otp'>('login');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login' || mode === 'signup') {
      setMode('otp');
      showToast('OTP sent to your registered email & phone number: 1234', 'info');
    } else if (mode === 'otp') {
      login(email || 'customer@dhaanya.com', name || 'Dhaanya Customer');
      setIsAuthModalOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-soft w-full max-w-md rounded-3xl shadow-xl overflow-hidden text-earth p-6 space-y-6 relative">
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 p-1.5 rounded-full text-stone-500 hover:text-earth hover:bg-stone-200 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-cream text-olive border border-soft flex items-center justify-center mx-auto mb-2">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold font-serif text-earth">
            {mode === 'login'
              ? 'Welcome Back to Dhaanya'
              : mode === 'signup'
              ? 'Create Your Dhaanya Account'
              : 'Enter Verification OTP'}
          </h3>
          <p className="text-xs text-stone-600">
            {mode === 'otp'
              ? 'Verification code sent to email (Demo OTP: 1234)'
              : 'Access saved masala recipes, track orders & exclusive discounts'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-[11px] font-bold text-stone-600 mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Priya Sharma"
                  className="w-full bg-cream border border-stone-200 text-xs text-earth rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:border-olive"
                />
              </div>
            </div>
          )}

          {mode !== 'otp' ? (
            <div>
              <label className="block text-[11px] font-bold text-stone-600 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com (or admin@dhaanya.com for admin)"
                  className="w-full bg-cream border border-stone-200 text-xs text-earth rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:border-olive"
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-[11px] font-bold text-stone-600 mb-1">Enter 4-Digit OTP</label>
              <div className="relative">
                <Key className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  required
                  maxLength={4}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="1234"
                  className="w-full bg-cream border border-stone-200 text-xs font-bold text-olive tracking-widest text-center rounded-xl py-2.5 focus:outline-none focus:border-olive"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-olive hover:bg-[#4a4a34] text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow transition active:scale-95"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{mode === 'otp' ? 'Verify & Sign In' : 'Get Verification OTP'}</span>
          </button>
        </form>

        <div className="text-center text-xs text-stone-500 pt-2 border-t border-soft">
          {mode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button onClick={() => setMode('signup')} className="text-olive font-bold underline">
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button onClick={() => setMode('login')} className="text-olive font-bold underline">
                Log In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
