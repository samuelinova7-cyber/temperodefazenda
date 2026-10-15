import React from 'react';
import { MenuItem } from '../types/menu';
import { formatBRL } from '../utils/formatters';
import { Utensils, Plus } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface DishCardProps {
  item: MenuItem;
  onSelectDish: (item: MenuItem) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ item, onSelectDish }) => {
  // Determine displayed price
  const hasMultiplePortions = item.portions && item.portions.length > 0;
  const lowestPrice = hasMultiplePortions
    ? Math.min(...item.portions!.map((p) => p.price))
    : item.price || 0;

  const handleClick = () => {
    sounds.playClick();
    onSelectDish(item);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col justify-between bg-white border border-[#e5dcd1] hover:border-amber-400/80 rounded-xl p-4 sm:p-5 hover:shadow-md transition-all duration-200 cursor-pointer group"
    >
      <div className="space-y-3">
        {/* Optional Image with fallback */}
        {item.image ? (
          <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#f0e7dc] mb-3 border border-[#ded2c3]">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
            />
          </div>
        ) : null}

        {/* Unboxed Metadata (Badge or Serving info without pill boxes) */}
        <div className="flex items-center gap-2 text-xs text-[#8a7260] font-medium">
          {item.badge && (
            <>
              <span className="text-[#8b3a1a] font-bold uppercase tracking-wider">{item.badge}</span>
              <span aria-hidden="true">·</span>
            </>
          )}
          {item.serves ? (
            <span>{item.serves}</span>
          ) : hasMultiplePortions ? (
            <span>{item.portions!.map((p) => p.name).join(' / ')}</span>
          ) : (
            <span>Porção individual</span>
          )}
        </div>

        {/* Dish Title */}
        <h3 className="font-['Outfit'] text-base sm:text-lg font-bold text-[#2d1c14] group-hover:text-[#8b3a1a] transition-colors leading-snug">
          {item.name}
        </h3>

        {/* Dish Description */}
        {item.description && (
          <p className="text-xs sm:text-sm text-[#665447] leading-relaxed line-clamp-3">
            {item.description}
          </p>
        )}
      </div>

      {/* Price & Chamativo Action Button */}
      <div className="pt-4 mt-3 border-t border-[#f0e8de] flex items-center justify-between gap-3">
        <div>
          <span className="text-[11px] block text-[#8a7260] uppercase font-semibold">
            {hasMultiplePortions ? 'A partir de' : 'Valor'}
          </span>
          <span className="text-base sm:text-lg font-black font-mono tabular-nums text-[#8b3a1a]">
            {formatBRL(lowestPrice)}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-600 to-[#8b3a1a] hover:from-amber-500 hover:to-[#722e13] text-white rounded-xl shadow-md border border-amber-300/50 hover:scale-103 active:scale-97 transition-all cursor-pointer whitespace-nowrap shrink-0"
        >
          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>{hasMultiplePortions || item.options ? 'Personalizar' : 'Pedir'}</span>
        </button>
      </div>
    </div>
  );
};
