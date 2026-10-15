import React from 'react';
import { MessageCircle, ShoppingBag, ExternalLink } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export const FloatingActions: React.FC = () => {
  const handleWhatsAppClick = () => {
    sounds.playClick();
    const url = `https://wa.me/5582999999999?text=${encodeURIComponent(
      'Olá! Gostaria de fazer um pedido ou tirar uma dúvida no Tempero de Fazenda.'
    )}`;
    window.open(url, '_blank');
  };

  const handleIfoodClick = () => {
    sounds.playClick();
    window.open('https://www.ifood.com.br', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* 1. Botão iFood Flutuante com Animação em Vídeo */}
      <button
        type="button"
        onClick={handleIfoodClick}
        aria-label="Fazer pedido pelo iFood"
        className="group relative flex items-center gap-2.5 p-1.5 pr-4 bg-[#EA1D2C] hover:bg-[#d61422] text-white rounded-full shadow-xl shadow-red-950/25 border-2 border-red-300/40 hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        {/* Animated iFood Delivery Box Video */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white/80 shrink-0 bg-black">
          <video
            src="https://res.cloudinary.com/hd1sahto/video/upload/v1792021178/iFood_delivery_box_animation_20261014203859.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-110"
          />
        </div>

        <div className="text-left hidden sm:block">
          <span className="block text-[10px] uppercase font-bold tracking-wider text-red-100">
            Delivery Online
          </span>
          <span className="block text-xs font-extrabold leading-tight tracking-tight text-white flex items-center gap-1">
            iFood Entrega
            <ExternalLink className="w-3 h-3 opacity-80" />
          </span>
        </div>
      </button>

      {/* 2. Botão de WhatsApp Verde Flutuante com Neon */}
      <button
        type="button"
        onClick={handleWhatsAppClick}
        aria-label="Fazer pedido pelo WhatsApp com neon"
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full transition-all duration-300 hover:scale-108 cursor-pointer shadow-[0_0_20px_#25D366,0_0_40px_rgba(37,211,102,0.45)] border-2 border-white/90"
      >
        {/* Pulsing Neon Halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-60 blur-md animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />

        <div className="relative z-10 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          <div className="text-left hidden sm:block">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-emerald-100">
              Atendimento Direto
            </span>
            <span className="block text-xs font-black tracking-tight text-white">
              WhatsApp Pedidos
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};
