import React, { useState } from 'react';
import { X, QrCode, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, RotateCw, ExternalLink } from 'lucide-react';
import { Product } from '../types';
import { DhaanyaLogo } from './DhaanyaLogo';

interface PackagingQRModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigateCustomMasala?: () => void;
}

export const PackagingQRModal: React.FC<PackagingQRModalProps> = ({
  product,
  isOpen,
  onClose,
  onNavigateCustomMasala,
}) => {
  const [activeTab, setActiveTab] = useState<'packaging' | 'qr-scanner'>('packaging');
  const [isScanned, setIsScanned] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  if (!isOpen || !product) return null;

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setIsScanned(true);
    }, 1200);
  };

  // Accent color based on category
  const categoryAccent = 
    product.category === 'Flour' ? '#A9542B' :
    product.category === 'Spices' || product.category === 'Masalas' ? '#7C2A1E' :
    product.category === 'Wood Pressed Oils' ? '#3E4B32' : '#C89211';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A2620]/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FAF6ED] rounded-2xl border-2 border-[#C89211]/30 shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden text-[#2A2620]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#F4ECD8] border-b border-[#2A2620]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <DhaanyaLogo variant="compact" size="sm" />
            <span className="text-[#2A2620]/30 font-serif">|</span>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-lg text-[#2A2620]">360° Packaging & QR Experience</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: `${categoryAccent}20`, color: categoryAccent }}>
                {product.category}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#2A2620]/60 hover:text-[#2A2620] hover:bg-[#2A2620]/10 transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#2A2620]/10 bg-[#EFE4CC] px-6">
          <button
            onClick={() => setActiveTab('packaging')}
            className={`px-4 py-3 font-medium text-sm transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'packaging'
                ? 'border-[#3E4B32] text-[#3E4B32] font-semibold bg-[#FAF6ED]'
                : 'border-transparent text-[#2A2620]/70 hover:text-[#2A2620]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C89211]" />
            Kraft Packaging Architecture
          </button>
          <button
            onClick={() => setActiveTab('qr-scanner')}
            className={`px-4 py-3 font-medium text-sm transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'qr-scanner'
                ? 'border-[#3E4B32] text-[#3E4B32] font-semibold bg-[#FAF6ED]'
                : 'border-transparent text-[#2A2620]/70 hover:text-[#2A2620]'
            }`}
          >
            <QrCode className="w-4 h-4 text-[#7C2A1E]" />
            Simulated Batch QR Scanner
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {activeTab === 'packaging' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Packaging FRONT Specs */}
              <div className="kraft-card p-6 rounded-xl border border-[#2A2620]/15 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 px-3 py-1 bg-[#3E4B32] text-[#F4ECD8] text-[10px] font-sans tracking-widest uppercase rounded-bl-lg">
                  Packaging Front Spec
                </div>

                <div className="space-y-4">
                  <div className="text-center pt-2">
                    <DhaanyaLogo variant="default" size="md" />
                  </div>

                  <div className="text-center border-y border-[#2A2620]/10 py-3">
                    <h3 className="font-serif text-2xl font-bold text-[#2A2620]">{product.name}</h3>
                    <p className="text-xs text-[#A9542B] font-medium tracking-wide mt-0.5">{product.category}</p>
                    <p className="text-xs font-sans text-[#2A2620]/70 mt-1 font-semibold">Net Wt. {product.variants[0]?.weight || '500g'}</p>
                  </div>

                  {/* Visual Ingredient Cue */}
                  <div className="flex items-center justify-center gap-2 py-2 bg-[#F4ECD8]/60 rounded-lg">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-contain" />
                    <div className="text-left">
                      <p className="text-xs font-serif font-bold text-[#3E4B32]">100% Pure & Authentic</p>
                      <p className="text-[11px] text-[#2A2620]/70 italic">Milled fresh on order</p>
                    </div>
                  </div>

                  {/* Fresh Milling Seal */}
                  <div className="seal-border p-2 text-center rounded-lg bg-[#FAF8F4]">
                    <span className="text-[10px] font-bold tracking-widest text-[#C89211] uppercase block">
                      ✦ FRESHNESS YOU CAN WITNESS ✦
                    </span>
                    <span className="text-xs font-serif text-[#2A2620] block font-semibold mt-0.5">
                      Ground Fresh Before You & For You
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#2A2620]/10 flex items-center justify-between text-[11px] text-[#2A2620]/60">
                  <span>Dhaanya Organic Store</span>
                  <span>www.dhaanya.in</span>
                </div>
              </div>

              {/* Packaging BACK Specs */}
              <div className="kraft-card p-6 rounded-xl border border-[#2A2620]/15 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 px-3 py-1 bg-[#7C2A1E] text-[#F4ECD8] text-[10px] font-sans tracking-widest uppercase rounded-bl-lg">
                  Packaging Back Spec
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#2A2620]">About {product.name}</h4>
                    <p className="text-xs text-[#2A2620]/80 mt-1 leading-relaxed">{product.description}</p>
                  </div>

                  <div className="bg-[#FAF8F4] p-3 rounded-lg border border-[#2A2620]/10 space-y-1 text-xs">
                    <p><strong className="text-[#3E4B32]">Ingredients:</strong> {product.ingredients?.join(', ') || '100% Natural Grains & Spices'}</p>
                    <p><strong className="text-[#3E4B32]">Storage:</strong> Store in a cool, dry place in an airtight container.</p>
                    <p><strong className="text-[#3E4B32]">Batch No:</strong> DH-{Math.floor(100000 + Math.random() * 900000)}</p>
                    <p><strong className="text-[#3E4B32]">Milling Date:</strong> Fresh on Order Date</p>
                  </div>

                  {/* QR Code Spec Area */}
                  <div className="p-3 bg-[#F4ECD8] rounded-lg border border-[#C89211]/30 flex items-center gap-3">
                    <div className="bg-white p-1.5 rounded border border-[#2A2620]/20 shrink-0">
                      <QrCode className="w-12 h-12 text-[#2A2620]" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-serif font-bold text-[#2A2620]">Scan to Witness Freshness</p>
                      <p className="text-[11px] text-[#2A2620]/70">Track farm origin, milling video, and customized recipe ideas.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#2A2620]/10 flex items-center justify-between text-[11px] text-[#2A2620]/60">
                  <span>Customer Support: +91 98765 43210</span>
                  <span>fssai Lic. 12423000000000</span>
                </div>
              </div>

            </div>
          )}

          {activeTab === 'qr-scanner' && (
            <div className="space-y-6">
              
              {!isScanned ? (
                <div className="kraft-card p-8 rounded-xl text-center space-y-4 border border-[#C89211]/30 max-w-md mx-auto">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 bg-white p-3 rounded-2xl shadow-inner border-2 border-[#C89211] flex items-center justify-center mx-auto">
                      <QrCode className="w-16 h-16 text-[#2A2620]" />
                    </div>
                    {isScanning && (
                      <div className="absolute inset-0 bg-[#3E4B32]/30 rounded-2xl flex items-center justify-center animate-pulse">
                        <RotateCw className="w-8 h-8 text-[#FAF6ED] animate-spin" />
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2A2620]">Product Batch QR Code</h3>
                    <p className="text-xs text-[#2A2620]/70 mt-1">
                      Every Dhaanya package carries a unique QR code connecting the physical product to its digital freshness record.
                    </p>
                  </div>

                  <button
                    onClick={handleSimulateScan}
                    disabled={isScanning}
                    className="w-full py-3 bg-[#3E4B32] hover:bg-[#2A2620] text-[#F4ECD8] font-medium rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <QrCode className="w-4 h-4 text-[#E8B93E]" />
                    {isScanning ? 'Scanning Batch Record...' : 'Simulate Scanning QR Code'}
                  </button>
                </div>
              ) : (
                <div className="space-y-6 animate-fade-in">
                  
                  {/* Verified Header */}
                  <div className="bg-[#3E4B32] text-[#F4ECD8] p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-7 h-7 text-[#E8B93E]" />
                      <div>
                        <h4 className="font-serif font-bold text-lg">Verified Dhaanya Fresh Batch</h4>
                        <p className="text-xs text-[#F4ECD8]/80">Batch ID: DH-{product.id.toUpperCase()}-2026</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsScanned(false)}
                      className="text-xs text-[#E8B93E] underline hover:text-[#FAF6ED]"
                    >
                      Scan Again
                    </button>
                  </div>

                  {/* Batch Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#FAF8F4] p-4 rounded-xl border border-[#2A2620]/10">
                      <p className="text-xs text-[#2A2620]/60 uppercase font-sans">Product</p>
                      <p className="font-serif font-bold text-[#2A2620] mt-0.5">{product.name}</p>
                      <p className="text-xs text-[#A9542B] mt-1">{product.category}</p>
                    </div>

                    <div className="bg-[#FAF8F4] p-4 rounded-xl border border-[#2A2620]/10">
                      <p className="text-xs text-[#2A2620]/60 uppercase font-sans">Milling Timestamp</p>
                      <p className="font-serif font-bold text-[#3E4B32] mt-0.5">Today at 08:30 AM</p>
                      <p className="text-xs text-[#2A2620]/70 mt-1">Ground on Order</p>
                    </div>

                    <div className="bg-[#FAF8F4] p-4 rounded-xl border border-[#2A2620]/10">
                      <p className="text-xs text-[#2A2620]/60 uppercase font-sans">Grain Origin</p>
                      <p className="font-serif font-bold text-[#7C2A1E] mt-0.5">Karnataka Heritage Farm</p>
                      <p className="text-xs text-[#2A2620]/70 mt-1">100% Unadulterated</p>
                    </div>
                  </div>

                  {/* Interactive Milling & Recipe Story */}
                  <div className="kraft-card p-5 rounded-xl space-y-3">
                    <h5 className="font-serif font-bold text-base text-[#2A2620] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#C89211]" />
                      Authentic Recipe Suggestions for {product.name}
                    </h5>
                    <ul className="space-y-2 text-xs text-[#2A2620]/80">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#3E4B32] shrink-0 mt-0.5" />
                        <span><strong>Traditional Method:</strong> Mix with warm water and a pinch of rock salt for optimal nutrient absorption.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#3E4B32] shrink-0 mt-0.5" />
                        <span><strong>Custom Masala Pairing:</strong> Blend with Dhaanya's freshly ground Sambar or Rasam spice mix.</span>
                      </li>
                    </ul>

                    {onNavigateCustomMasala && (
                      <div className="pt-3 border-t border-[#2A2620]/10 flex justify-end">
                        <button
                          onClick={() => {
                            onClose();
                            onNavigateCustomMasala();
                          }}
                          className="px-4 py-2 bg-[#C89211] hover:bg-[#A9542B] text-[#FAF6ED] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                        >
                          Create Custom Blend with this Product
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              )}

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#F4ECD8] border-t border-[#2A2620]/10 flex items-center justify-between text-xs text-[#2A2620]/70">
          <span>Dhaanya 360° Brand System • Packaging & Transparency Standard</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#2A2620] text-[#F4ECD8] rounded-md font-medium hover:bg-[#3E4B32] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
