import React, { useState } from 'react';
import { ShoppingBag, Volume2, VolumeX } from 'lucide-react';
import { formatBRL } from '../utils/formatters';
import { sounds } from '../utils/soundEffects';

interface HeaderProps {
  cartItemCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenMinigame: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  cartTotal,
  onOpenCart,
  onOpenMinigame,
}) => {
  const [audioMuted, setAudioMuted] = useState(sounds.getIsMuted());
  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e7dfd5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark with golden glowing logo */}
        <a
          href="#topo"
          className="font-['Outfit'] text-lg sm:text-2xl font-bold tracking-tight text-[#3d271d] hover:text-[#c45a2c] transition-colors whitespace-nowrap shrink-0 flex items-center gap-3 group"
        >
          <div className="relative flex items-center justify-center">
            {/* Ambient golden aura behind logo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/40 via-yellow-300/50 to-amber-500/30 blur-md scale-125 animate-pulse" />
            <img
              src="https://res.cloudinary.com/hd1sahto/image/upload/v1792018297/WhatsApp_Image_2026-10-14_at_7.31.56_PM.jpg"
              alt="Logo Tempero de Fazenda"
              referrerPolicy="no-referrer"
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-amber-400/80 shadow-md logo-golden-glow group-hover:scale-105 transition-transform"
            />
          </div>
          <span>Tempero de Fazenda</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#6c584c]">
          <a
            href="#cardapio"
            className="hover:text-[#c45a2c] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Cardápio
          </a>
          <a
            href="#categoria-festival_picanha"
            className="hover:text-[#c45a2c] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Festival da Picanha
          </a>
          <a
            href="#categoria-pizzas_tradicionais"
            className="hover:text-[#c45a2c] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Fornaria & Pizzas
          </a>
          <a
            href="#sobre-localizacao"
            className="hover:text-[#c45a2c] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Sobre & Localização
          </a>
          <a
            href="#horarios"
            className="hover:text-[#c45a2c] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Horários
          </a>
        </nav>

        {/* Zone 3: Sound toggle & Chamativo Comanda action */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Sound Toggle Button */}
          <button
            type="button"
            onClick={() => {
              const muted = sounds.toggleMute();
              setAudioMuted(muted);
              if (!muted) sounds.playClick();
            }}
            title={audioMuted ? 'Ativar sons animados' : 'Silenciar sons'}
            aria-label={audioMuted ? 'Ativar sons animados' : 'Silenciar sons'}
            className="p-2 rounded-xl border border-[#ded2c3] text-[#7a6456] hover:text-[#2d1c14] hover:bg-[#ede4d8] transition-colors cursor-pointer"
          >
            {audioMuted ? (
              <VolumeX className="w-4 h-4 text-stone-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-amber-600 animate-pulse" />
            )}
          </button>

          {/* Minigame Slot dos Sabores button */}
          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              onOpenMinigame();
            }}
            title="Minigame Slot dos Sabores"
            aria-label="Minigame Slot dos Sabores - Ganhe uma recomendação"
            className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 hover:from-amber-500/30 hover:to-amber-500/30 text-[#8b3a1a] hover:text-[#5a230c] border border-amber-400/50 rounded-xl text-xs font-black tracking-tight shadow-xs transition-all hover:scale-103 cursor-pointer"
          >
            <span className="text-sm">🎰</span>
            <span className="hidden md:inline font-['Outfit'] uppercase">Slot dos Sabores</span>
          </button>

          {/* Chamativo Comanda Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenCart();
            }}
            type="button"
            aria-label="Abrir pedido e comanda"
            className="relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-amber-600 via-[#9e431f] to-[#8b3a1a] hover:from-amber-500 hover:to-[#722e13] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-amber-950/20 hover:shadow-lg hover:shadow-amber-950/30 border border-amber-300/50 hover:scale-103 active:scale-97 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
            <span className="hidden sm:inline">Comanda</span>
            {cartItemCount > 0 ? (
              <span className="font-mono tabular-nums text-xs font-black bg-white text-[#8b3a1a] px-2 py-0.5 rounded-full shadow-xs">
                {cartItemCount} · {formatBRL(cartTotal)}
              </span>
            ) : (
              <span className="text-[11px] text-amber-200 font-medium">Vazia</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
