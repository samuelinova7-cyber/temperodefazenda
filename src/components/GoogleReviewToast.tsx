import React, { useState, useEffect } from 'react';
import { Star, X, CheckCircle2 } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ReviewNotification {
  id: number;
  name: string;
  location: string;
  timeAgo: string;
  rating: number;
  comment: string;
  avatarColor: string;
}

const RECENT_REVIEWS: ReviewNotification[] = [
  {
    id: 1,
    name: 'Mariana Silva',
    location: 'Turista de Belo Horizonte - MG',
    timeAgo: 'há 4 minutos',
    rating: 5,
    comment: 'Melhor comida mineira fora de Minas! O feijão tropeiro e a picanha na chapa estavam impecáveis.',
    avatarColor: 'bg-emerald-600',
  },
  {
    id: 2,
    name: 'Carlos Eduardo',
    location: 'Visitante de São Paulo - SP',
    timeAgo: 'há 12 minutos',
    rating: 5,
    comment: 'A parmegiana é inacreditável de tão crocante e farta! Atendimento 10 e cerveja trincando.',
    avatarColor: 'bg-amber-600',
  },
  {
    id: 3,
    name: 'Fernanda Albuquerque',
    location: 'Maceió - AL',
    timeAgo: 'há 24 minutos',
    rating: 5,
    comment: 'Lugar super acolhedor na Praia do Francês! Nosso cachorrinho foi super bem tratado (Pet friendly de verdade).',
    avatarColor: 'bg-blue-600',
  },
  {
    id: 4,
    name: 'Rodrigo Costa',
    location: 'Praia do Francês - AL',
    timeAgo: 'há 35 minutos',
    rating: 5,
    comment: 'As pizzas da fornaria à noite são espetaculares! A de carne de sol com queijo coalho é nota 1000.',
    avatarColor: 'bg-purple-600',
  },
  {
    id: 5,
    name: 'Juliana Mendes',
    location: 'Turista de Brasília - DF',
    timeAgo: 'há 48 minutos',
    rating: 5,
    comment: 'Feijoada completa perfeita com torresminho sequinho e couve fresquinha. Não deixem de pedir o pudim!',
    avatarColor: 'bg-rose-600',
  },
  {
    id: 6,
    name: 'Lucas Rocha',
    location: 'Recife - PE',
    timeAgo: 'há 1 hora',
    rating: 5,
    comment: 'Festival da Picanha para 4 pessoas superou todas as expectativas. Muito sabor e fartura!',
    avatarColor: 'bg-indigo-600',
  },
];

export const GoogleReviewToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Initial delay before first toast
    const initialTimer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
        sounds.playBell();
      }
    }, 3500);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      // Hide current toast
      setIsVisible(false);

      // Change review after brief fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_REVIEWS.length);
        setIsVisible(true);
        sounds.playBell();
      }, 700);
    }, 9000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const current = RECENT_REVIEWS[currentIndex];

  return (
    <div
      className={`fixed bottom-5 left-4 sm:left-6 z-40 max-w-sm transition-all duration-500 ease-out transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
          : 'translate-y-6 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-amber-300/60 shadow-amber-950/15 relative">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2.5 right-2.5 text-stone-400 hover:text-stone-700 p-1 rounded-full transition-colors cursor-pointer"
          aria-label="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-start gap-3">
          {/* Avatar with initial */}
          <div
            className={`w-9 h-9 rounded-full ${current.avatarColor} text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs`}
          >
            {current.name.charAt(0)}
          </div>

          <div className="flex-1 pr-4 space-y-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-xs text-[#2d1c14]">{current.name}</span>
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span className="text-[10px] text-stone-500 font-mono">
                {current.timeAgo}
              </span>
            </div>

            {/* Stars & Google badge */}
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-500" />
                ))}
              </div>
              <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200">
                Google Review
              </span>
            </div>

            {/* Review comment */}
            <p className="text-xs text-[#524237] leading-snug pt-0.5 line-clamp-2">
              "{current.comment}"
            </p>

            <span className="text-[10px] text-stone-400 block pt-0.5">
              {current.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
