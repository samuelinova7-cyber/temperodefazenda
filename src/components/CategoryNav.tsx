import React, { useRef } from 'react';
import { Category } from '../types/menu';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string | null;
  onSelectCategory: (id: string | null) => void;
  categoryCounts: Record<string, number>;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-18 z-30 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e5dcd1] shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="relative flex items-center">
          {/* Scroll Left Button */}
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Rolar categorias para esquerda"
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-[#ded2c3] text-[#5a483e] hover:text-[#2d1c14] hover:bg-[#f0e7dd] transition-colors shadow-2xs mr-2 shrink-0 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1"
          >
            {/* "Ver Todos" Tab */}
            <button
              type="button"
              onClick={() => {
                sounds.playClick();
                onSelectCategory(null);
              }}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                activeCategory === null
                  ? 'bg-gradient-to-r from-amber-600 to-[#8b3a1a] text-white shadow-xs border border-amber-400/50'
                  : 'bg-white text-[#5a483e] hover:bg-[#ede3d8] hover:text-[#2d1c14] border border-[#ded2c3]'
              }`}
            >
              Todos os Pratos
            </button>

            {categories.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    onSelectCategory(cat.id);
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-600 to-[#8b3a1a] text-white shadow-xs border border-amber-400/50'
                      : 'bg-white text-[#5a483e] hover:bg-[#ede3d8] hover:text-[#2d1c14] border border-[#ded2c3]'
                  }`}
                >
                  <span>{cat.shortName}</span>
                  <span
                    className={`text-[11px] font-mono tabular-nums px-1.5 py-0.2 rounded ${
                      isActive ? 'bg-white/20 text-white font-bold' : 'bg-[#ede4d8] text-[#7a6456]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Rolar categorias para direita"
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-[#ded2c3] text-[#5a483e] hover:text-[#2d1c14] hover:bg-[#f0e7dd] transition-colors shadow-2xs ml-2 shrink-0 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
