// Single-option products imported from Shopify carry the placeholder weight
// "Default Title"; it isn't a real size, so the UI shouldn't show it.
export const hasWeightLabel = (weight?: string) => !!weight && weight !== 'Default Title';
