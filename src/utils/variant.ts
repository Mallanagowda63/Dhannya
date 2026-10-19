// Single-option products imported from Shopify carry the placeholder weight
// "Default Title"; it isn't a real size, so the UI shouldn't show it.
export const hasWeightLabel = (weight?: string) => !!weight && weight !== 'Default Title';

// Wood-pressed oils and flours are shown with every size and price. Everywhere else
// the shop card lists only the 250g pack, and the product page's size buttons show
// just the weight (the price appears once, for the selected size).
const ALL_SIZES_CATEGORIES = ['Wood Pressed Oils', 'Flour'];
export const showsAllSizes = (category?: string) => ALL_SIZES_CATEGORIES.includes(category || '');

export const isQuarterKg = (weight?: string) => !!weight && /^250\s*g(m|ms)?$/i.test(weight.trim());

export const defaultVariantIndex = (product: { category?: string; variants?: { weight: string }[] }) => {
  if (showsAllSizes(product.category)) return 0;
  const idx = (product.variants || []).findIndex((v) => isQuarterKg(v.weight));
  return idx >= 0 ? idx : 0;
};
