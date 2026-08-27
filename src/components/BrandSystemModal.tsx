import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Palette,
  Type,
  ShieldCheck,
  Package,
  QrCode,
  Share2,
  Mail,
  Store,
  FileText,
  Megaphone,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { DhaanyaLogo } from './DhaanyaLogo';

interface BrandSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandSystemModal: React.FC<BrandSystemModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<
    | 'core'
    | 'colors'
    | 'typography'
    | 'logo'
    | 'graphics'
    | 'packaging'
    | 'qr'
    | 'social'
    | 'communication'
    | 'store'
    | 'print'
    | 'campaigns'
  >('core');

  if (!isOpen) return null;

  const tabs = [
    { id: 'core', label: '01. Core & Story', icon: BookOpen },
    { id: 'colors', label: '02. Color System', icon: Palette },
    { id: 'typography', label: '03. Typography', icon: Type },
    { id: 'logo', label: '04. Logo System', icon: ShieldCheck },
    { id: 'graphics', label: '05. Graphic Language', icon: Sparkles },
    { id: 'packaging', label: '06. Packaging Specs', icon: Package },
    { id: 'qr', label: '07. QR Experience', icon: QrCode },
    { id: 'social', label: '08. Social Media', icon: Share2 },
    { id: 'communication', label: '09. Email & WhatsApp', icon: Mail },
    { id: 'store', label: '10. Physical Store', icon: Store },
    { id: 'print', label: '11. Print Collateral', icon: FileText },
    { id: 'campaigns', label: '12. Campaigns & Ads', icon: Megaphone },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A2620]/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#FAF6ED] rounded-2xl border-2 border-[#C89211]/40 shadow-2xl w-full max-w-6xl h-[92vh] flex flex-col overflow-hidden text-[#2A2620]">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#F4ECD8] border-b border-[#2A2620]/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <DhaanyaLogo variant="compact" size="sm" />
            <span className="text-[#2A2620]/30 font-serif">|</span>
            <div>
              <h2 className="font-serif font-bold text-xl text-[#2A2620]">Dhaanya 360° Brand System & Guidelines</h2>
              <p className="text-xs text-[#3E4B32] font-sans">Official Master Identity & Design Standard • Version 1.0</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#2A2620]/60 hover:text-[#2A2620] hover:bg-[#2A2620]/10 transition-colors"
            title="Close Brand System"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Selector Bar */}
        <div className="flex bg-[#EFE4CC] border-b border-[#2A2620]/10 overflow-x-auto no-scrollbar px-4 shrink-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-3 font-medium text-xs whitespace-nowrap transition-all border-b-2 flex items-center gap-2 ${
                  isActive
                    ? 'border-[#3E4B32] text-[#3E4B32] font-bold bg-[#FAF6ED]'
                    : 'border-transparent text-[#2A2620]/75 hover:text-[#2A2620]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#C89211]' : 'text-[#2A2620]/50'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main Tab Content */}
        <div className="p-8 overflow-y-auto flex-1 space-y-8">
          
          {/* TAB 1: CORE & STORY */}
          {activeTab === 'core' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-[#2A2620]/10 pb-4">
                <h3 className="font-serif font-bold text-2xl text-[#2A2620]">01. Brand Core, Story & Positioning</h3>
                <p className="text-sm text-[#2A2620]/70 mt-1">
                  Dhaanya (ಧಾನ್ಯ) represents grain, nourishment, heritage, purity, and fresh milling.
                </p>
              </div>

              {/* Positioning & Idea */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="kraft-card p-6 rounded-xl border border-[#2A2620]/15 space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#A9542B] font-bold">Core Brand Idea</span>
                  <h4 className="font-serif font-bold text-xl text-[#2A2620] leading-snug">
                    "Freshness should not be a promise you take on faith. It should be something you witness."
                  </h4>
                  <p className="text-xs text-[#2A2620]/80 leading-relaxed">
                    Dhaanya brings the milling process closer to the customer, restoring transparency to everyday food.
                  </p>
                </div>

                <div className="kraft-card p-6 rounded-xl border border-[#2A2620]/15 space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#3E4B32] font-bold">Primary Positioning</span>
                  <h4 className="font-serif font-bold text-xl text-[#2A2620] leading-snug">
                    "Rooted in tradition, freshly milled before you and for you."
                  </h4>
                  <p className="text-xs text-[#2A2620]/80 leading-relaxed">
                    Combines centuries of traditional Indian grain wisdom with modern convenience and zero compromise on purity.
                  </p>
                </div>
              </div>

              {/* What Went Missing 5-Step Journey */}
              <div className="bg-[#FAF8F4] p-6 rounded-xl border border-[#2A2620]/10 space-y-4">
                <h4 className="font-serif font-bold text-lg text-[#2A2620]">What Went Missing — The 5-Step Journey</h4>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
                  {[
                    { step: '01', title: 'Grain', desc: 'Sourced from heritage Indian farms' },
                    { step: '02', title: 'Selection', desc: 'Hand-inspected, whole unadulterated' },
                    { step: '03', title: 'Milling', desc: 'Cold pressed & ground fresh on order' },
                    { step: '04', title: 'Fresh Product', desc: 'Untouched by industrial storage' },
                    { step: '05', title: 'Kitchen', desc: 'Delivered directly to your home' },
                  ].map((s, idx) => (
                    <div key={idx} className="p-4 bg-[#F4ECD8] rounded-lg border border-[#C89211]/30">
                      <span className="font-serif font-bold text-sm text-[#C89211]">{s.step}</span>
                      <h5 className="font-serif font-bold text-base text-[#2A2620] mt-1">{s.title}</h5>
                      <p className="text-[11px] text-[#2A2620]/70 mt-1">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
                {['FRESH', 'HONEST', 'TRADITIONAL', 'PREMIUM', 'TRANSPARENT', 'MODERN'].map((p, i) => (
                  <div key={i} className="p-3 bg-[#3E4B32] text-[#F4ECD8] rounded-lg text-center font-serif font-bold text-xs tracking-wider">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: COLOR PALETTE */}
          {activeTab === 'colors' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-[#2A2620]/10 pb-4">
                <h3 className="font-serif font-bold text-2xl text-[#2A2620]">02. Master Color System</h3>
                <p className="text-sm text-[#2A2620]/70 mt-1">
                  Strict color palette inspired by parchment, milled grain, turmeric, husk charcoal, and deep spices.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Parchment', hex: '#F4ECD8', role: 'Primary Background', text: '#2A2620' },
                  { name: 'Husk Charcoal', hex: '#2A2620', role: 'Primary Dark & Typography', text: '#F4ECD8' },
                  { name: 'Millet Green', hex: '#3E4B32', role: 'Primary Green & Oils Accent', text: '#F4ECD8' },
                  { name: 'Turmeric Gold', hex: '#C89211', role: 'Primary Accent & Seals', text: '#FAF6ED' },
                  { name: 'Burnt Ochre', hex: '#A9542B', role: 'Flours Category Accent', text: '#FAF6ED' },
                  { name: 'Spice Red', hex: '#7C2A1E', role: 'Spices Category Accent', text: '#FAF6ED' },
                  { name: 'Light Gold', hex: '#E8B93E', role: 'Highlights & Badges', text: '#2A2620' },
                  { name: 'Paper White', hex: '#FAF8F4', role: 'Card Surfaces', text: '#2A2620' },
                ].map((color, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-[#2A2620]/15 shadow-sm bg-[#FAF8F4]">
                    <div
                      className="h-28 p-3 flex flex-col justify-between"
                      style={{ backgroundColor: color.hex, color: color.text }}
                    >
                      <span className="text-xs font-mono font-bold uppercase">{color.hex}</span>
                      <span className="font-serif font-bold text-base">{color.name}</span>
                    </div>
                    <div className="p-3 text-xs text-[#2A2620]/80">
                      <strong>Usage:</strong> {color.role}
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Accents Guide */}
              <div className="bg-[#FAF8F4] p-6 rounded-xl border border-[#2A2620]/10 space-y-4">
                <h4 className="font-serif font-bold text-lg text-[#2A2620]">Category Accent Color Coding</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg border-t-4 border-[#A9542B] bg-[#F4ECD8]/40 space-y-1">
                    <span className="text-xs font-bold text-[#A9542B] uppercase">Flours Category</span>
                    <h5 className="font-serif font-bold text-base">Burnt Ochre (#A9542B)</h5>
                    <p className="text-xs text-[#2A2620]/70">Used for whole wheat, ragi, jowar, and millet flours.</p>
                  </div>
                  <div className="p-4 rounded-lg border-t-4 border-[#7C2A1E] bg-[#F4ECD8]/40 space-y-1">
                    <span className="text-xs font-bold text-[#7C2A1E] uppercase">Spices & Masalas</span>
                    <h5 className="font-serif font-bold text-base">Spice Red (#7C2A1E) / Gold</h5>
                    <p className="text-xs text-[#2A2620]/70">Used for whole spices, custom masala blends, and chili.</p>
                  </div>
                  <div className="p-4 rounded-lg border-t-4 border-[#3E4B32] bg-[#F4ECD8]/40 space-y-1">
                    <span className="text-xs font-bold text-[#3E4B32] uppercase">Wood Pressed Oils</span>
                    <h5 className="font-serif font-bold text-base">Millet Green (#3E4B32)</h5>
                    <p className="text-xs text-[#2A2620]/70">Used for groundnut, sesame, and mustard cold-pressed oils.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TYPOGRAPHY */}
          {activeTab === 'typography' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-[#2A2620]/10 pb-4">
                <h3 className="font-serif font-bold text-2xl text-[#2A2620]">03. Typography System</h3>
                <p className="text-sm text-[#2A2620]/70 mt-1">
                  Pairing Spectral (Editorial Elegance), Work Sans (Functional Interface), and Noto Sans Kannada.
                </p>
              </div>

              {/* Font Family Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="kraft-card p-6 rounded-xl border border-[#2A2620]/15 space-y-2">
                  <span className="text-xs font-mono text-[#C89211] font-bold">EDITORIAL FONT</span>
                  <h4 className="font-serif text-3xl font-bold text-[#2A2620]">Spectral</h4>
                  <p className="text-xs text-[#2A2620]/80">Used for major headings, storytelling, product titles, headlines.</p>
                </div>
                <div className="kraft-card p-6 rounded-xl border border-[#2A2620]/15 space-y-2">
                  <span className="text-xs font-mono text-[#3E4B32] font-bold">FUNCTIONAL FONT</span>
                  <h4 className="font-sans text-3xl font-bold text-[#2A2620]">Work Sans</h4>
                  <p className="text-xs text-[#2A2620]/80">Used for navigation, buttons, forms, labels, body copy, pricing.</p>
                </div>
                <div className="kraft-card p-6 rounded-xl border border-[#2A2620]/15 space-y-2">
                  <span className="text-xs font-mono text-[#A9542B] font-bold">KANNADA SCRIPT</span>
                  <h4 className="font-kannada text-3xl font-bold text-[#2A2620]">ಧಾನ್ಯ (Kannada)</h4>
                  <p className="text-xs text-[#2A2620]/80">Used for authentic heritage branding and Kannada terminology.</p>
                </div>
              </div>

              {/* Type Hierarchy Scale */}
              <div className="bg-[#FAF8F4] p-6 rounded-xl border border-[#2A2620]/10 space-y-4">
                <h4 className="font-serif font-bold text-lg text-[#2A2620]">Type Hierarchy Scale</h4>
                <div className="space-y-4 text-[#2A2620]">
                  <div className="border-b border-[#2A2620]/10 pb-3">
                    <span className="text-[10px] font-mono text-[#2A2620]/50 block">Display Title (Spectral 48px)</span>
                    <span className="display-title">Freshness You Can Witness.</span>
                  </div>
                  <div className="border-b border-[#2A2620]/10 pb-3">
                    <span className="text-[10px] font-mono text-[#2A2620]/50 block">Heading 1 (Spectral 36px)</span>
                    <span className="h1-title">Freshly Milled. Made for You.</span>
                  </div>
                  <div className="border-b border-[#2A2620]/10 pb-3">
                    <span className="text-[10px] font-mono text-[#2A2620]/50 block">Heading 2 (Spectral 28px)</span>
                    <span className="h2-title">Your Grain. Your Blend. Ground Fresh.</span>
                  </div>
                  <div className="border-b border-[#2A2620]/10 pb-3">
                    <span className="text-[10px] font-mono text-[#2A2620]/50 block">Body Large (Work Sans 18px)</span>
                    <p className="body-large">Good food starts long before it reaches the kitchen.</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#2A2620]/50 block">Caption & Label (Work Sans 12px UPPERCASE)</span>
                    <span className="caption-text text-[#3E4B32] font-bold">AUTHENTIC MILLING PROCESS</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: LOGO SYSTEM */}
          {activeTab === 'logo' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-[#2A2620]/10 pb-4">
                <h3 className="font-serif font-bold text-2xl text-[#2A2620]">04. Logo System & Usage Rules</h3>
                <p className="text-sm text-[#2A2620]/70 mt-1">
                  The grain seal mark represents whole grains, traditional milling stone, and authentic purity.
                </p>
              </div>

              {/* Logo Variants Display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="kraft-card p-6 rounded-xl text-center space-y-3 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-mono text-[#2A2620]/50 uppercase">Primary Vertical</span>
                  <DhaanyaLogo variant="default" size="lg" />
                </div>
                <div className="kraft-card p-6 rounded-xl text-center space-y-3 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-mono text-[#2A2620]/50 uppercase">Horizontal Compact</span>
                  <DhaanyaLogo variant="compact" size="md" />
                </div>
                <div className="bg-[#2A2620] p-6 rounded-xl text-center space-y-3 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-mono text-[#F4ECD8]/50 uppercase">Light Version</span>
                  <DhaanyaLogo variant="light" size="lg" />
                </div>
                <div className="bg-[#FAF8F4] p-6 rounded-xl text-center space-y-3 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-mono text-[#2A2620]/50 uppercase">Icon Mark Only</span>
                  <DhaanyaLogo variant="icon" size="lg" />
                </div>
              </div>

              {/* Do's and Don'ts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#FAF8F4] p-6 rounded-xl border border-[#3E4B32]/30 space-y-3">
                  <h4 className="font-serif font-bold text-base text-[#3E4B32] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Logo Usage — DO
                  </h4>
                  <ul className="text-xs text-[#2A2620]/80 space-y-2">
                    <li>✓ Maintain clear space around the logo seal equal to at least 50% of the seal width.</li>
                    <li>✓ Always pair English DHAANYA with Kannada (ಧಾನ್ಯ) script for authentic brand identity.</li>
                    <li>✓ Use Light version exclusively on dark charcoal or deep spice backgrounds.</li>
                  </ul>
                </div>

                <div className="bg-[#FAF8F4] p-6 rounded-xl border border-[#7C2A1E]/30 space-y-3">
                  <h4 className="font-serif font-bold text-base text-[#7C2A1E] flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" /> Logo Usage — DON'T
                  </h4>
                  <ul className="text-xs text-[#2A2620]/80 space-y-2">
                    <li>✕ Never stretch, skew, or distort the proportions of the grain seal.</li>
                    <li>✕ Never apply drop shadows, heavy glows, or unapproved gradient fills to the logo.</li>
                    <li>✕ Never change logo colors to unapproved mass-market bright colors.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: GRAPHIC LANGUAGE & PHOTOGRAPHY */}
          {activeTab === 'graphics' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-[#2A2620]/10 pb-4">
                <h3 className="font-serif font-bold text-2xl text-[#2A2620]">05. Graphic Language & Art Direction</h3>
                <p className="text-sm text-[#2A2620]/70 mt-1">
                  Organic paper textures, fine line illustrations, circular seals, and warm natural lighting photography.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="kraft-card p-6 rounded-xl space-y-4 border border-[#2A2620]/15">
                  <h4 className="font-serif font-bold text-lg text-[#2A2620]">Graphic Elements</h4>
                  <ul className="space-y-2 text-xs text-[#2A2620]/80">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#C89211]" />
                      <strong>Circular Dashed Seals:</strong> Symbolizes artisanal small-batch milling certification.
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#3E4B32]" />
                      <strong>Paper Texture:</strong> Micro-textured parchment background (#FAF4E8) evoking kraft bags.
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#A9542B]" />
                      <strong>Fine Botanical Lines:</strong> Minimal hand-drawn wheat and millet grain motifs.
                    </li>
                  </ul>
                </div>

                <div className="kraft-card p-6 rounded-xl space-y-4 border border-[#2A2620]/15">
                  <h4 className="font-serif font-bold text-lg text-[#2A2620]">Photography Rules</h4>
                  <ul className="space-y-2 text-xs text-[#2A2620]/80">
                    <li>• <strong>Lighting:</strong> Warm, natural morning sunlight with soft organic shadows.</li>
                    <li>• <strong>Props:</strong> Wooden bowls, brass spoons, raw grain sacks, millstones.</li>
                    <li>• <strong>Avoid:</strong> Overly polished artificial stock photos, plastic containers, glossy surfaces.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: PACKAGING SPECS */}
          {activeTab === 'packaging' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-[#2A2620]/10 pb-4">
                <h3 className="font-serif font-bold text-2xl text-[#2A2620]">06. Packaging System Architecture</h3>
                <p className="text-sm text-[#2A2620]/70 mt-1">
                  Eco kraft paper pouch & bottle packaging standards for Flours, Spices, and Wood Pressed Oils.
                </p>
              </div>

              <div className="bg-[#FAF8F4] p-6 rounded-xl border border-[#2A2620]/10 space-y-4">
                <h4 className="font-serif font-bold text-lg text-[#2A2620]">Mandatory Packaging Front Hierarchy</h4>
                <ol className="list-decimal list-inside text-xs text-[#2A2620]/80 space-y-2">
                  <li><strong>Brand Logo Seal:</strong> Prominently centered at top.</li>
                  <li><strong>Product Name:</strong> Displayed in Spectral serif font.</li>
                  <li><strong>Category Ribbon:</strong> Burnt Ochre for Flours, Spice Red for Spices, Millet Green for Oils.</li>
                  <li><strong>Weight & Quantity:</strong> Clear net weight specification (e.g., 500g, 1kg).</li>
                  <li><strong>Fresh Milling Seal:</strong> "GROUND FRESH BEFORE YOU AND FOR YOU".</li>
                </ol>
              </div>
            </div>
          )}

          {/* TAB 7: QR EXPERIENCE */}
          {activeTab === 'qr' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-[#2A2620]/10 pb-4">
                <h3 className="font-serif font-bold text-2xl text-[#2A2620]">07. QR Code Digital Experience</h3>
                <p className="text-sm text-[#2A2620]/70 mt-1">
                  Connecting physical products directly to digital milling records, farm origins, and personalized recipes.
                </p>
              </div>

              <div className="kraft-card p-6 rounded-xl border border-[#2A2620]/15 space-y-4">
                <h4 className="font-serif font-bold text-lg text-[#2A2620]">What Customers See Upon Scanning QR</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                  <div className="p-4 bg-[#FAF8F4] rounded-lg border border-[#2A2620]/10">
                    <strong className="text-[#3E4B32] block text-sm font-serif">Milling Timestamp</strong>
                    Exact date & time when the batch was ground.
                  </div>
                  <div className="p-4 bg-[#FAF8F4] rounded-lg border border-[#2A2620]/10">
                    <strong className="text-[#A9542B] block text-sm font-serif">Grain Farm Origin</strong>
                    Specific partner farm location in Karnataka.
                  </div>
                  <div className="p-4 bg-[#FAF8F4] rounded-lg border border-[#2A2620]/10">
                    <strong className="text-[#7C2A1E] block text-sm font-serif">Process Video</strong>
                    15-second clip showing cold pressed/milling process.
                  </div>
                  <div className="p-4 bg-[#FAF8F4] rounded-lg border border-[#2A2620]/10">
                    <strong className="text-[#C89211] block text-sm font-serif">Recipe Ideas</strong>
                    Authentic traditional dishes tailored to the item.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: SOCIAL MEDIA */}
          {activeTab === 'social' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-[#2A2620]/10 pb-4">
                <h3 className="font-serif font-bold text-2xl text-[#2A2620]">08. Social Media Visual System</h3>
                <p className="text-sm text-[#2A2620]/70 mt-1">
                  Instagram, Facebook, YouTube, and WhatsApp content pillars and copywriting guidelines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="kraft-card p-6 rounded-xl border border-[#2A2620]/15 space-y-3">
                  <h4 className="font-serif font-bold text-base text-[#2A2620]">10 Content Pillars</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[#2A2620]/80">
                    <span>1. Fresh Milling</span>
                    <span>2. Pure Ingredients</span>
                    <span>3. Traditional Knowledge</span>
                    <span>4. Heritage Recipes</span>
                    <span>5. Product Education</span>
                    <span>6. Behind the Scenes</span>
                    <span>7. Customer Stories</span>
                    <span>8. Custom Masala</span>
                    <span>9. Dhaanya Story</span>
                    <span>10. Festival Content</span>
                  </div>
                </div>

                <div className="kraft-card p-6 rounded-xl border border-[#2A2620]/15 space-y-3">
                  <h4 className="font-serif font-bold text-base text-[#2A2620]">Brand Social Voice</h4>
                  <p className="text-xs text-[#2A2620]/80 italic">
                    "Good food starts long before it reaches the kitchen. Some things are better when made fresh."
                  </p>
                  <div className="pt-2 text-xs text-[#7C2A1E] font-semibold">
                    Never use aggressive, mass-market discount spam ("BUY NOW", "CHEAPEST SALE").
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: EMAIL & WHATSAPP */}
          {activeTab === 'communication' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-[#2A2620]/10 pb-4">
                <h3 className="font-serif font-bold text-2xl text-[#2A2620]">09. Email & WhatsApp Communications</h3>
                <p className="text-sm text-[#2A2620]/70 mt-1">
                  Warm, concise, and respectful customer updates for every stage of order fulfillment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#FAF8F4] p-5 rounded-xl border border-[#2A2620]/10 space-y-2 text-xs">
                  <h4 className="font-serif font-bold text-base text-[#3E4B32]">WhatsApp Message Template</h4>
                  <p className="font-mono bg-[#EFE4CC] p-3 rounded text-[#2A2620]">
                    "Namaste! Your Dhaanya order #{'{order_id}'} is being prepared with care. Freshly milled before you and for you."
                  </p>
                </div>
                <div className="bg-[#FAF8F4] p-5 rounded-xl border border-[#2A2620]/10 space-y-2 text-xs">
                  <h4 className="font-serif font-bold text-base text-[#7C2A1E]">Email Header & Voice</h4>
                  <p className="font-mono bg-[#EFE4CC] p-3 rounded text-[#2A2620]">
                    "Subject: Your freshly selected Dhaanya products are on their way home."
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 10: PHYSICAL STORE */}
          {activeTab === 'store' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-[#2A2620]/10 pb-4">
                <h3 className="font-serif font-bold text-2xl text-[#2A2620]">10. Physical Store & Milling Station Signage</h3>
                <p className="text-sm text-[#2A2620]/70 mt-1">
                  In-store signage language and experience touchpoints.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                {[
                  'FRESHLY MILLED',
                  'GROUND BEFORE YOU',
                  'YOUR GRAIN. YOUR BLEND.',
                  'FROM GRAIN TO KITCHEN',
                  'PURE INGREDIENTS',
                  'ROOTED IN TRADITION',
                ].map((sign, i) => (
                  <div key={i} className="p-4 bg-[#2A2620] text-[#F4ECD8] rounded-xl font-serif font-bold text-sm tracking-wider">
                    {sign}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 11: PRINT COLLATERAL */}
          {activeTab === 'print' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-[#2A2620]/10 pb-4">
                <h3 className="font-serif font-bold text-2xl text-[#2A2620]">11. Print Collateral & Business Systems</h3>
                <p className="text-sm text-[#2A2620]/70 mt-1">
                  Specifications for business cards, invoices, receipts, letterhead, and product catalogs.
                </p>
              </div>

              <div className="kraft-card p-6 rounded-xl space-y-3 border border-[#2A2620]/15">
                <h4 className="font-serif font-bold text-base text-[#2A2620]">Print Paper & Finish Specification</h4>
                <p className="text-xs text-[#2A2620]/80">
                  Uncoated 350 GSM natural textured kraft cardstock with gold foil stamping for Dhaanya grain seal mark.
                </p>
              </div>
            </div>
          )}

          {/* TAB 12: CAMPAIGNS & ADS */}
          {activeTab === 'campaigns' && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-[#2A2620]/10 pb-4">
                <h3 className="font-serif font-bold text-2xl text-[#2A2620]">12. Campaign Architecture & Festival System</h3>
                <p className="text-sm text-[#2A2620]/70 mt-1">
                  Repeatable campaign frameworks and subtle seasonal branding for Indian festivals (Ugadi, Diwali, Sankranti).
                </p>
              </div>

              <div className="bg-[#FAF8F4] p-6 rounded-xl border border-[#2A2620]/10 space-y-4 text-xs">
                <h4 className="font-serif font-bold text-lg text-[#2A2620]">Festival System Rule</h4>
                <p className="text-[#2A2620]/80">
                  During Ugadi, Diwali, and Sankranti, Dhaanya retains its core Parchment and Husk Charcoal foundation while introducing subtle seasonal motifs (mango leaves, diyas, sugarcane fine lines) in Turmeric Gold.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F4ECD8] border-t border-[#2A2620]/10 flex items-center justify-between text-xs text-[#2A2620]/70 shrink-0">
          <span>Dhaanya (ಧಾನ್ಯ) Official 360° Brand System</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#2A2620] hover:bg-[#3E4B32] text-[#F4ECD8] font-medium rounded-lg transition-colors"
          >
            Close Brand Guidelines
          </button>
        </div>

      </div>
    </div>
  );
};
