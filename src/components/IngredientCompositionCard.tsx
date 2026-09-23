import React, { useMemo } from 'react';
import { CompositionIngredient, ProductVariant } from '../types';
import { DhaanyaLogo } from './DhaanyaLogo';

interface IngredientCompositionCardProps {
  productName: string;
  composition: CompositionIngredient[];
  variants: ProductVariant[];
}

function parseWeightToGrams(weight: string): number {
  const match = weight.match(/([\d.]+)\s*(kg|g)\b/i);
  if (!match) return 0;
  const value = parseFloat(match[1]);
  return match[2].toLowerCase() === 'kg' ? value * 1000 : value;
}

function formatGrams(grams: number): string {
  if (grams >= 1000) {
    const kg = grams / 1000;
    return `${Number.isInteger(kg) ? kg : kg.toFixed(2)}kg`;
  }
  return `${Math.round(grams)}g`;
}

export const IngredientCompositionCard: React.FC<IngredientCompositionCardProps> = ({
  productName,
  composition,
  variants,
}) => {
  const packSizes = useMemo(() => {
    const seen = new Set<number>();
    const sizes: { label: string; grams: number }[] = [];
    for (const v of variants) {
      const grams = parseWeightToGrams(v.weight);
      if (grams > 0 && !seen.has(grams)) {
        seen.add(grams);
        sizes.push({ label: formatGrams(grams), grams });
      }
    }
    return sizes.sort((a, b) => a.grams - b.grams);
  }, [variants]);

  const totalPercent = composition.reduce((sum, i) => sum + i.percent, 0);

  return (
    <div className="w-[300px] sm:w-[340px] bg-[#FAF6ED] border border-[#2A2620]/12 rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="pt-5 px-5 pb-4 text-center">
        <div className="flex justify-center mb-2">
          <DhaanyaLogo variant="icon" size="sm" />
        </div>
        <h4 className="font-serif font-bold text-[#3E4B32] text-base leading-tight">{productName}</h4>
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#A9542B]">
          Ingredients &amp; Composition
        </span>
      </div>

      {/* Table */}
      <div className="px-3">
        <table className="w-full border-collapse text-left overflow-hidden rounded-lg">
          <thead>
            <tr className="bg-[#3E4B32] text-[#F4ECD8]">
              <th className="py-2 px-2.5 text-[11px] font-bold uppercase tracking-wide">Ingredient</th>
              <th className="py-2 px-2 text-[11px] font-bold uppercase tracking-wide text-center">%</th>
              {packSizes.map((p) => (
                <th key={p.label} className="py-2 px-2 text-[11px] font-bold uppercase tracking-wide text-center">
                  {p.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {composition.map((ing, idx) => (
              <tr key={ing.name} className={idx % 2 === 1 ? 'bg-[#2A2620]/[0.03]' : ''}>
                <td className="py-1.5 px-2.5 text-xs text-[#2A2620]">{ing.name}</td>
                <td className="py-1.5 px-2 text-xs text-[#2A2620]/80 text-center font-mono">{ing.percent}%</td>
                {packSizes.map((p) => (
                  <td key={p.label} className="py-1.5 px-2 text-xs text-[#2A2620]/80 text-center font-mono">
                    {formatGrams((ing.percent / 100) * p.grams)}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="bg-[#A9542B]/10 border-t border-[#A9542B]/30">
              <td className="py-1.5 px-2.5 text-xs font-bold text-[#7C2A1E]">Total</td>
              <td className="py-1.5 px-2 text-xs font-bold text-[#7C2A1E] text-center font-mono">
                {totalPercent}%
              </td>
              {packSizes.map((p) => (
                <td key={p.label} className="py-1.5 px-2 text-xs font-bold text-[#7C2A1E] text-center font-mono">
                  {formatGrams(p.grams)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-5 pt-3 pb-4 text-center">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C89211]/50 to-transparent mb-3" />
        <p className="text-[11px] italic text-[#2A2620]/70 leading-snug">
          <span aria-hidden="true" className="text-[#3E4B32]/50 mr-1">&#127807;</span>
          Pure Ingredients. Freshly Milled for a Healthier You.
          <span aria-hidden="true" className="text-[#3E4B32]/50 ml-1">&#127807;</span>
        </p>
      </div>
    </div>
  );
};
