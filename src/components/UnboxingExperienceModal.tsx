import React, { useState } from 'react';
import { X, Package, MessageSquare, Mail, Sparkles, CheckCircle2, QrCode, ArrowRight } from 'lucide-react';
import { Order } from '../types';
import { DhaanyaLogo } from './DhaanyaLogo';

interface UnboxingExperienceModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UnboxingExperienceModal: React.FC<UnboxingExperienceModalProps> = ({
  order,
  isOpen,
  onClose,
}) => {
  const [activeStep, setActiveStep] = useState<'box' | 'card' | 'whatsapp'>('box');

  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A2620]/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FAF6ED] rounded-2xl border-2 border-[#C89211]/30 shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden text-[#2A2620]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#F4ECD8] border-b border-[#2A2620]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <DhaanyaLogo variant="compact" size="sm" />
            <span className="text-[#2A2620]/30 font-serif">|</span>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#2A2620]">360° Delivery & Unboxing Experience</h3>
              <p className="text-xs text-[#3E4B32] font-sans">Order ID: #{order.id}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#2A2620]/60 hover:text-[#2A2620] hover:bg-[#2A2620]/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Experience Step Buttons */}
        <div className="flex border-b border-[#2A2620]/10 bg-[#EFE4CC] px-6">
          <button
            onClick={() => setActiveStep('box')}
            className={`px-4 py-3 font-medium text-sm transition-all border-b-2 flex items-center gap-2 ${
              activeStep === 'box'
                ? 'border-[#3E4B32] text-[#3E4B32] font-semibold bg-[#FAF6ED]'
                : 'border-transparent text-[#2A2620]/70 hover:text-[#2A2620]'
            }`}
          >
            <Package className="w-4 h-4 text-[#A9542B]" />
            1. Eco Kraft Delivery Box
          </button>
          <button
            onClick={() => setActiveStep('card')}
            className={`px-4 py-3 font-medium text-sm transition-all border-b-2 flex items-center gap-2 ${
              activeStep === 'card'
                ? 'border-[#3E4B32] text-[#3E4B32] font-semibold bg-[#FAF6ED]'
                : 'border-transparent text-[#2A2620]/70 hover:text-[#2A2620]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C89211]" />
            2. Printed Thank-You Card
          </button>
          <button
            onClick={() => setActiveStep('whatsapp')}
            className={`px-4 py-3 font-medium text-sm transition-all border-b-2 flex items-center gap-2 ${
              activeStep === 'whatsapp'
                ? 'border-[#3E4B32] text-[#3E4B32] font-semibold bg-[#FAF6ED]'
                : 'border-transparent text-[#2A2620]/70 hover:text-[#2A2620]'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            3. WhatsApp & Email Notification
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {activeStep === 'box' && (
            <div className="space-y-6 animate-fade-in">
              <div className="kraft-card p-6 rounded-xl border border-[#2A2620]/20 space-y-4">
                <div className="flex items-center justify-between border-b border-[#2A2620]/10 pb-3">
                  <span className="text-xs uppercase font-sans tracking-widest text-[#3E4B32] font-bold">
                    Outer Delivery Packaging Architecture
                  </span>
                  <span className="text-xs bg-[#3E4B32] text-[#F4ECD8] px-2.5 py-0.5 rounded-full">
                    100% Recyclable Kraft Box
                  </span>
                </div>

                {/* Simulated Kraft Box Layout */}
                <div className="bg-[#EFE4CC] border-2 border-dashed border-[#C89211] p-6 rounded-lg text-center space-y-4">
                  <div className="inline-block p-2 bg-[#2A2620] text-[#F4ECD8] text-xs font-sans tracking-widest uppercase rounded">
                    DHAANYA • FRESHLY MILLED BEFORE YOU & FOR YOU
                  </div>

                  <div className="py-4">
                    <DhaanyaLogo variant="default" size="lg" />
                  </div>

                  <div className="bg-[#FAF6ED] p-3 rounded border border-[#2A2620]/10 text-xs text-[#2A2620]/80 font-mono inline-block">
                    [ DHAANYA BRANDED SEAL TAPE • TAMPER PROOF ]
                  </div>
                </div>

                {/* Key Unboxing Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 bg-[#FAF8F4] rounded-lg border border-[#2A2620]/10">
                    <strong className="text-[#3E4B32] block">Aroma Protection:</strong>
                    Multi-layer parchment sealing ensures no loss of essential oils or fresh aroma.
                  </div>
                  <div className="p-3 bg-[#FAF8F4] rounded-lg border border-[#2A2620]/10">
                    <strong className="text-[#7C2A1E] block">Milling Stamp:</strong>
                    Hand-stamped with exact date and mill operator verification.
                  </div>
                  <div className="p-3 bg-[#FAF8F4] rounded-lg border border-[#2A2620]/10">
                    <strong className="text-[#A9542B] block">Zero Plastic:</strong>
                    Sourced using sustainable jute string and biodegradable kraft paper.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 'card' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-[#FAF8F4] p-8 rounded-xl border-2 border-[#C89211] shadow-md space-y-6 max-w-2xl mx-auto text-center relative overflow-hidden">
                
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#C89211]/10 rounded-full blur-xl"></div>

                <div className="pt-2">
                  <DhaanyaLogo variant="default" size="md" />
                </div>

                <div className="space-y-3 border-y border-[#2A2620]/10 py-6">
                  <h3 className="font-serif text-2xl font-bold text-[#2A2620]">
                    Thank you for bringing Dhaanya into your kitchen.
                  </h3>
                  <p className="font-serif italic text-base text-[#3E4B32]">
                    "Freshness should not be a promise you take on faith. It should be something you witness."
                  </p>
                </div>

                <div className="text-xs text-[#2A2620]/80 leading-relaxed max-w-lg mx-auto">
                  Your order (ID: #{order.id}) was milled specifically for your home. We carefully selected whole grains, cleaned them using traditional methods, and milled them to perfection right before dispatching.
                </div>

                <div className="pt-4 border-t border-[#2A2620]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-8 h-8 text-[#2A2620]" />
                    <span className="text-left text-[11px] text-[#2A2620]/70">
                      Scan the QR code on your product package to trace origin and access recipes.
                    </span>
                  </div>
                  <span className="font-serif font-bold text-[#A9542B]">Rooted in Tradition. Made for You.</span>
                </div>

              </div>
            </div>
          )}

          {activeStep === 'whatsapp' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              
              {/* WhatsApp Notification Card */}
              <div className="bg-[#E5DDD5] p-5 rounded-xl border border-[#2A2620]/15 space-y-3 font-sans text-xs">
                <div className="flex items-center gap-2 pb-2 border-b border-[#2A2620]/10">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold">
                    D
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2A2620]">Dhaanya WhatsApp Official</h4>
                    <p className="text-[10px] text-gray-600">Verified Business Account</p>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-lg shadow-sm space-y-2 text-[#2A2620]">
                  <p className="font-semibold text-[#3E4B32]">Namaste! Your Dhaanya order is being prepared with care. 🌾</p>
                  <p>Order ID: <strong>#{order.id}</strong></p>
                  <p>Status: Freshly Milling & Packing</p>
                  <p className="text-[11px] text-gray-500 italic">"Freshness you can witness. Ground fresh for your kitchen."</p>
                  <div className="pt-2 border-t border-gray-100 flex justify-between text-[11px] text-[#25D366] font-semibold">
                    <span>Track Order Progress</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Email Notification Card */}
              <div className="bg-white p-5 rounded-xl border border-[#2A2620]/15 space-y-3 font-sans text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#2A2620]/10">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#7C2A1E]" />
                    <span className="font-bold text-[#2A2620]">Dhaanya Order Confirmation</span>
                  </div>
                  <span className="text-[10px] text-gray-400">Just Now</span>
                </div>

                <div className="space-y-2 text-[#2A2620]">
                  <p>Dear Customer,</p>
                  <p>Thank you for choosing Dhaanya. Your order of freshly milled products is confirmed and moving to the milling station.</p>
                  <div className="bg-[#FAF6ED] p-2.5 rounded border border-[#C89211]/30">
                    <p className="font-semibold text-[#7C2A1E]">Total Amount: ₹{order.total}</p>
                    <p className="text-[11px] text-[#2A2620]/70">Delivery Address: {order.shippingAddress?.street}, {order.shippingAddress?.city}</p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#F4ECD8] border-t border-[#2A2620]/10 flex items-center justify-between text-xs text-[#2A2620]/70">
          <span>Dhaanya 360° Order Experience • From Grain to Kitchen</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#2A2620] text-[#F4ECD8] rounded-md font-medium hover:bg-[#3E4B32] transition-colors"
          >
            Close Experience Preview
          </button>
        </div>

      </div>
    </div>
  );
};
