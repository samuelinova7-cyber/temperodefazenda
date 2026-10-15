import React from 'react';
import { MenuItem } from '../types/menu';
import { formatBRL } from '../utils/formatters';
import { Plus, Sparkles, Utensils } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface DishRowProps {
  item: MenuItem;
  onSelectDish: (item: MenuItem) => void;
}

export const DishRow: React.FC<DishRowProps> = ({ item, onSelectDish }) => {
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
      className="group relative bg-white hover:bg-[#fbf7f2] border border-[#e8dfd5] hover:border-amber-400/80 rounded-xl p-3.5 sm:p-4 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3.5"
    >
      {/* Left / Main info area */}
      <div className="flex items-start gap-3.5 flex-1 min-w-0">
        {/* Optional compact thumbnail */}
        {item.image ? (
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-lg overflow-hidden shrink-0 bg-[#f0e7dc] border border-[#ded2c3] shadow-2xs relative">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#f6eee6] border border-[#ded2c3] text-[#8b3a1a] flex items-center justify-center shrink-0">
            <Utensils className="w-4 h-4 sm:w-5 sm:h-5 opacity-70" />
          </div>
        )}

        {/* Text information */}
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-['Outfit'] text-sm sm:text-base font-bold text-[#2d1c14] group-hover:text-[#8b3a1a] transition-colors leading-snug">
              {item.name}
            </h3>

            {item.badge && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                {item.badge}
              </span>
            )}
          </div>

          {/* Description */}
          {item.description && (
            <p className="text-xs text-[#6a5649] leading-relaxed line-clamp-2">
              {item.description}
            </p>
          )}

          {/* Portions or serving hint */}
          <div className="text-[11px] text-[#8a7260] font-medium flex items-center gap-2 pt-0.5">
            {item.serves ? (
              <span>Serve {item.serves}</span>
            ) : hasMultiplePortions ? (
              <span>Opções: {item.portions!.map((p) => p.name).join(' · ')}</span>
            ) : (
              <span>Porção individual</span>
            )}
          </div>
        </div>
      </div>

      {/* Right / Pricing & Chamativo Button */}
      <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#f0e8de]">
        <div className="text-left sm:text-right">
          <span className="text-[10px] block text-[#8a7260] uppercase font-semibold">
            {hasMultiplePortions ? 'A partir de' : 'Valor'}
          </span>
          <span className="font-mono tabular-nums text-base sm:text-lg font-black text-[#8b3a1a]">
            {formatBRL(lowestPrice)}
          </span>
        </div>

        {/* Chamativo Eye-catching Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          className="flex items-center gap-1.5 px-4 py-2 sm:py-2.5 bg-gradient-to-r from-amber-600 via-[#9c421e] to-[#8b3a1a] hover:from-amber-500 hover:to-[#722e13] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-amber-950/20 hover:shadow-lg hover:shadow-amber-950/30 border border-amber-400/50 hover:scale-103 active:scale-97 transition-all cursor-pointer whitespace-nowrap"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>{hasMultiplePortions || item.options ? 'Personalizar' : 'Pedir'}</span>
        </button>
      </div>
    </div>
  );
};
