import React from 'react';
import { Search, Star, MapPin, Clock, ExternalLink, Flame } from 'lucide-react';
import { getRestaurantStatus } from '../utils/formatters';

interface HeroBannerProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCategory: (categoryId: string) => void;
  onOpenMinigame: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  searchQuery,
  onSearchChange,
  onSelectCategory,
  onOpenMinigame,
}) => {
  const status = getRestaurantStatus();

  return (
    <div id="topo" className="relative border-b border-[#e7dfd5] bg-[#f5ede3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Restaurant Presentation */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#7a5c48]">
              <span>Culinária Mineira & Paulista</span>
              <span aria-hidden="true">·</span>
              <span>Fornaria Artesanal</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#8b3a1a]" />
                Praia do Francês, AL
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <h1 className="font-['Outfit'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2d1c14] leading-[1.15] text-balance">
                O autêntico sabor da fazenda e fornaria à beira-mar
              </h1>
              <p className="text-base sm:text-lg text-[#5c4a3f] leading-relaxed max-w-2xl">
                Pratos executivos, parmegianas crocantes, chapas fartas, nosso consagrado Festival da Picanha e pizzas artesanais assadas com molho caseiro e muito queijo.
              </p>
            </div>

            {/* Adjacent Proof: Real Google Rating & Live Status */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-[#4a3b32]">
              <div className="flex items-center gap-1.5 font-medium">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? 'fill-amber-500' : 'fill-amber-500/40 text-amber-500'}`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-[#2d1c14]">4.4</span>
                <span className="text-[#7c695c] font-normal">(604 avaliações no Google)</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#5c4a3f]">
                <Clock className="w-4 h-4 text-[#8b3a1a]" />
                <span className="font-medium">{status.statusText}</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="pt-2">
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8a7566]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Buscar no cardápio (ex: picanha, torresmo, parmegiana, camarão, pizza...)"
                  className="w-full pl-12 pr-4 py-3 bg-white text-[#2c2420] placeholder-[#9a897e] border border-[#d8c8b8] rounded-xl shadow-xs focus:outline-none focus:ring-2 focus:ring-[#8b3a1a] focus:border-transparent text-sm sm:text-base transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#7c695c] hover:text-[#2d1c14] px-2 py-1 bg-[#ede4da] rounded"
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>

            {/* Minigame Teaser Banner */}
            <div className="p-3 sm:p-4 bg-gradient-to-r from-[#2c1a12] via-[#3a2217] to-[#2c1a12] rounded-2xl border-2 border-[#e69c24]/70 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#e69c24]/20 border border-[#e69c24]/40 flex items-center justify-center text-2xl shrink-0">
                  🎰
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-black tracking-wider text-[#e69c24] bg-[#e69c24]/20 px-2 py-0.5 rounded">
                      Minigame Interativo
                    </span>
                    <span className="text-xs text-amber-200/80 font-bold hidden sm:inline">Descubra seu prato</span>
                  </div>
                  <h4 className="font-['Outfit'] font-bold text-white text-sm sm:text-base leading-tight mt-0.5">
                    Slot dos Sabores da Roça
                  </h4>
                  <p className="text-[11px] text-[#cfc2b7] leading-tight">
                    Gire a alavanca em 4 etapas e ganhe a recomendação perfeita!
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenMinigame}
                className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-[#e69c24] to-[#b8740e] text-[#1b1310] font-['Outfit'] font-black text-xs uppercase tracking-wider rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap text-center"
              >
                Girar Alavanca 🎰
              </button>
            </div>

            {/* Direct Quick Shortcuts */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm">
              <span className="text-[#8a7566] font-medium">Destaques rápidos:</span>
              <button
                type="button"
                onClick={() => onSelectCategory('festival_picanha')}
                className="text-[#8b3a1a] hover:text-[#6a2910] underline decoration-[#8b3a1a]/40 underline-offset-4 font-medium transition-colors"
              >
                Festival da Picanha
              </button>
              <span className="text-[#c7b9ab]">/</span>
              <button
                type="button"
                onClick={() => onSelectCategory('parmegianas')}
                className="text-[#8b3a1a] hover:text-[#6a2910] underline decoration-[#8b3a1a]/40 underline-offset-4 font-medium transition-colors"
              >
                Parmegianas
              </button>
              <span className="text-[#c7b9ab]">/</span>
              <button
                type="button"
                onClick={() => onSelectCategory('delicias_mineiras')}
                className="text-[#8b3a1a] hover:text-[#6a2910] underline decoration-[#8b3a1a]/40 underline-offset-4 font-medium transition-colors"
              >
                Feijoada & Delícias Mineiras
              </button>
              <span className="text-[#c7b9ab]">/</span>
              <button
                type="button"
                onClick={() => onSelectCategory('pizzas_tradicionais')}
                className="text-[#8b3a1a] hover:text-[#6a2910] underline decoration-[#8b3a1a]/40 underline-offset-4 font-medium transition-colors"
              >
                Pizzas da Fornaria
              </button>
            </div>

          </div>

          {/* Right Column: High-fidelity image showcase with radiant glow effect */}
          <div className="lg:col-span-5 relative">
            {/* Ambient golden glow radiating behind the hero card */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-500/25 via-amber-400/35 to-orange-500/25 blur-xl opacity-80 animate-pulse pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-300/50 group bg-[#2d1c14]">
              <video
                src="https://res.cloudinary.com/hd1sahto/video/upload/v1792022902/Logo_animation_for_restaurant_20261014210746.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              {/* Cinematic warm lighting scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-amber-900/10 pointer-events-none" />
              
              {/* Glowing Corner Badge */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md border border-amber-400/50 rounded-full text-[11px] font-semibold text-amber-300 shadow-md">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Restaurante & Fornaria</span>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
                  <span>Tradição Mineira & Fornaria Artesanal</span>
                </div>
                <p className="text-sm font-medium text-white/95 mt-1">
                  Av. dos Corais, 284 · Marechal Deodoro - AL
                </p>
                <div className="flex items-center gap-3 mt-3 text-xs text-white/80">
                  <a
                    href="https://www.instagram.com/temperodefazenda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white underline decoration-white/50 underline-offset-2"
                  >
                    <span>@temperodefazenda</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>·</span>
                  <span>Pet friendly & Wi-Fi</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
