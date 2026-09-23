import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Product } from '../types';
import { IngredientCompositionCard } from './IngredientCompositionCard';

interface CompositionHoverCardProps {
  product: Product;
  children: React.ReactNode;
  className?: string;
}

const CARD_WIDTH = 340;
const VIEWPORT_MARGIN = 12;

// Wraps a trigger element (product card image, detail-page image, etc.) with the
// ingredient composition popover. The popover is portaled to <body> and
// position-calculated on demand, since product cards clip overflow (needed for
// their own hover-zoom image effect) and would otherwise cut the popover off.
// Visibility is driven by a single local boolean per card -- cheap even across
// a large grid, since only the hovered/tapped card's own state changes.
export const CompositionHoverCard: React.FC<CompositionHoverCardProps> = ({
  product,
  children,
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number; placeAbove: boolean } | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const composition = product.compositionBreakdown;
  const hasComposition = !!composition && composition.length > 0;

  const computePosition = () => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const placeAbove = rect.top > 320;
    let left = rect.left + rect.width / 2 - CARD_WIDTH / 2;
    left = Math.max(VIEWPORT_MARGIN, Math.min(left, window.innerWidth - CARD_WIDTH - VIEWPORT_MARGIN));
    const top = placeAbove ? rect.top - 8 : rect.bottom + 8;
    setCoords({ top, left, placeAbove });
  };

  const isTouchDevice = () =>
    typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

  const handleMouseEnter = () => {
    if (!hasComposition || isTouchDevice()) return;
    computePosition();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (!hasComposition || isTouchDevice()) return;
    setOpen(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!hasComposition || !isTouchDevice()) return;
    e.stopPropagation();
    e.preventDefault();
    if (open) {
      setOpen(false);
    } else {
      computePosition();
      setOpen(true);
    }
  };

  return (
    <div
      ref={triggerRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}

      {hasComposition && open && coords &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-[90]"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            />
            <div
              className="fixed z-[100] transition-opacity duration-150"
              style={{
                top: coords.top,
                left: coords.left,
                transform: coords.placeAbove ? 'translateY(-100%)' : 'none',
              }}
              onMouseEnter={() => !isTouchDevice() && setOpen(true)}
              onMouseLeave={() => !isTouchDevice() && setOpen(false)}
            >
              <IngredientCompositionCard
                productName={product.name}
                composition={composition}
                variants={product.variants}
              />
            </div>
          </>,
          document.body
        )}
    </div>
  );
};
