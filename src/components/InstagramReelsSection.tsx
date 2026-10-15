import React from 'react';
import { Instagram, Play, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ReelItem {
  id: number;
  videoUrl: string;
  title: string;
  likes: string;
}

const REELS_DATA: ReelItem[] = [
  {
    id: 1,
    videoUrl:
      'https://res.cloudinary.com/hd1sahto/video/upload/v1792023882/SnapInsta.to_AQNgfDP0MPYk4o2r05oNYDike4Vok1ne8gT2xJrPM3AjwFiGjA8bJN0iz0F8g7N3_RaJZ6rDSY2D2Sle1vnpbWq4KehTPXLZJ6Z8QpQ.mp4',
    title: 'Sabor da Roça na Brisa do Francês',
    likes: '1.4k',
  },
  {
    id: 2,
    videoUrl:
      'https://res.cloudinary.com/hd1sahto/video/upload/v1792023892/SnapInsta.to_AQNLaMQxwl_rGKBaN9_AD-9mmQJOsvR7gN2-s39x_E5OPvL0rt2lPEjbDP325QYpUtmi1qbNDakU3N3MrekzzBTycbecPvdqloeZrfY.mp4',
    title: 'Festival da Picanha na Chapa',
    likes: '2.1k',
  },
  {
    id: 3,
    videoUrl:
      'https://res.cloudinary.com/hd1sahto/video/upload/v1792023908/SnapInsta.to_AQPRRypt1WqUY1QuB-mTAJF8FaS8frZ5owNVvrmYzJ7BsZeHqT6ZXPmUSWVnnVwN6flD0LfFak5TashVXAjk_VIQV2gPeuLym9_V2so.mp4',
    title: 'Fornaria Artesanal & Pizzas',
    likes: '980',
  },
  {
    id: 4,
    videoUrl:
      'https://res.cloudinary.com/hd1sahto/video/upload/v1792023916/SnapInsta.to_AQPBQeB9MBTYMNIBYVS7TKipCqK9ut00jmIW7927-FtEsQUC-rgAyT-uKjBCdqeVUwHwnz7H46JNae19P2IvwYrcrT8q923de0t9rrI.mp4',
    title: 'Feijoada Completa & Caipirinha',
    likes: '1.8k',
  },
];

export const InstagramReelsSection: React.FC = () => {
  const handleInstagramClick = () => {
    sounds.playClick();
    window.open('https://www.instagram.com/temperodefazenda', '_blank');
  };

  return (
    <section className="w-full my-8 bg-gradient-to-b from-[#241711] via-[#1a0f0b] to-[#241711] p-5 sm:p-7 rounded-3xl border-2 border-amber-500/30 shadow-2xl overflow-hidden relative">
      {/* Background ambient glow aura */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 blur-3xl rounded-full pointer-events-none" />

      {/* Header bar of the Instagram Section */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#3d271c]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white shadow-sm">
              <Instagram className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Instagram Oficial · @temperodefazenda
            </span>
          </div>
          <h2 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white tracking-tight">
            Acompanhe Nossos Reels & Bastidores
          </h2>
          <p className="text-xs sm:text-sm text-[#b8a69a]">
            Pratos suculentos saindo na chapa, massas artesanais assando na fornaria e a energia da Praia do Francês.
          </p>
        </div>

        {/* Chamativo Follow Button */}
        <button
          type="button"
          onClick={handleInstagramClick}
          className="self-start sm:self-auto flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-pink-950/30 hover:scale-104 active:scale-98 transition-all cursor-pointer border border-white/20 whitespace-nowrap shrink-0"
        >
          <Instagram className="w-4 h-4" />
          <span>Seguir no Instagram</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </button>
      </div>

      {/* 4 Reels Videos playing automatically side-by-side (um ao lado do outro) */}
      <div className="relative z-10 grid grid-cols-4 gap-2 sm:gap-4 pt-6">
        {REELS_DATA.map((reel) => (
          <div
            key={reel.id}
            onClick={handleInstagramClick}
            className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[9/16] bg-black border-2 border-amber-400/40 hover:border-amber-300 shadow-xl shadow-black/50 hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            {/* Auto-playing video in loop */}
            <video
              src={reel.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-102 group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Scrims for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />

            {/* Top Reel Badge */}
            <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-white text-[9px] sm:text-[11px] font-semibold z-10">
              <div className="flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="hidden xs:inline sm:inline">Reel</span>
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/90">
                <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-pink-400" />
              </div>
            </div>

            {/* Bottom Info & Stats Overlay */}
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-white z-10 space-y-1">
              <div className="flex items-center gap-1 text-[9px] sm:text-[11px] font-bold text-amber-300 truncate">
                <span>@temperodefazenda</span>
              </div>

              <p className="text-[10px] sm:text-xs font-semibold text-white/95 leading-tight line-clamp-2 drop-shadow-sm">
                {reel.title}
              </p>

              {/* Likes counter & View on Instagram indicator */}
              <div className="flex items-center justify-between pt-1 border-t border-white/15 text-[9px] sm:text-[11px] text-white/80">
                <span className="flex items-center gap-1 font-mono">
                  <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-400 fill-red-400" />
                  <span>{reel.likes}</span>
                </span>

                <span className="group-hover:text-amber-300 text-[9px] sm:text-[10px] font-bold hidden sm:flex items-center gap-0.5 transition-colors">
                  Assistir
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer hint */}
      <div className="relative z-10 pt-5 text-center">
        <a
          href="https://www.instagram.com/temperodefazenda"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#f5ede3] hover:text-amber-300 transition-colors"
        >
          <span>2.492 seguidores · 332 publicações · Clique para ver mais vídeos no perfil @temperodefazenda</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
};
