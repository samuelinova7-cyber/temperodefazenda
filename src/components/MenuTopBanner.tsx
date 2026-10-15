import React from 'react';
import { Sparkles, Utensils, Star, Flame, MapPin } from 'lucide-react';

interface MenuTopBannerProps {
  onQuickCategoryClick?: (categoryId: string) => void;
}

export const MenuTopBanner: React.FC<MenuTopBannerProps> = ({ onQuickCategoryClick }) => {
  const tickerItems = [
    '🍲 Autêntica Culinária Mineira & Paulista',
    '🥩 Festival da Picanha (2 e 4 Pessoas - 10 Preparos Especiais)',
    '🍕 Fornaria com Pizzas Artesanais e Borda Recheada',
    '⭐ Avaliação 4.4 no Google com mais de 600 avaliações',
    '🧀 Parmegianas Individuais e para 2 com Acompanhamentos',
    '🐶 Ambiente Acolhedor & Pet Friendly',
    '📍 Av. dos Corais, 284 · Praia do Francês, Alagoas',
    '🛵 Entregas disponíveis via WhatsApp e iFood',
    '🍤 Pratos com Frutos do Mar & Moquecas Frescas',
  ];

  return (
    <div className="w-full space-y-4 mb-8">
      {/* 1. Faixa Informativa Correndo (Running Marquee) */}
      <div className="relative overflow-hidden bg-[#241711] text-[#f5ede3] py-2.5 border-y border-amber-900/40 shadow-xs">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-medium tracking-wide">
          {/* Double mapped to ensure seamless continuous looping */}
          {[...tickerItems, ...tickerItems].map((text, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-[#e2c7b2]">{text}</span>
              <span className="text-amber-400 font-bold" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Imagem no Topo do Cardápio com Efeitos de Brilho */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-amber-300/40 group shimmer-container bg-[#1c120c]">
        {/* Golden ambient backlight aura */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-yellow-400/30 to-orange-500/20 blur-xl opacity-75 pointer-events-none" />

        <div className="relative h-48 sm:h-64 lg:h-72 w-full overflow-hidden">
          <img
            src="https://res.cloudinary.com/hd1sahto/image/upload/v1792018648/WhatsApp_Image_2026-10-14_at_7.31.53_PM.jpg"
            alt="Cardápio Completo Tempero de Fazenda"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter contrast-105 brightness-105 transform group-hover:scale-102 transition-transform duration-700 ease-out"
          />

          {/* Golden glow gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />

          {/* Shimmer sweep effect is applied via .shimmer-container */}

          {/* Content overlay */}
          <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-end text-white z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/30 backdrop-blur-md border border-amber-300/60 rounded-full text-xs font-semibold text-amber-200 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Cardápio Atualizado & Completo</span>
              </div>
            </div>

            <h2 className="font-['Outfit'] text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white drop-shadow-md">
              Sabores da Roça, Chapas Nobres & Fornaria
            </h2>

            <p className="text-xs sm:text-sm text-stone-200 mt-1.5 max-w-xl leading-relaxed drop-shadow-sm">
              Ingredientes frescos selecionados, receitas tradicionais mineiras e pizzas preparadas na hora com massa artesanal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
