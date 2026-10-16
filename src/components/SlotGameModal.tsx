import React, { useState, useEffect, useRef } from 'react';
import { MenuItem } from '../types/menu';
import { menuItems } from '../data/menuData';
import { formatBRL } from '../utils/formatters';
import { sounds } from '../utils/soundEffects';
import { X, Sparkles, RefreshCw, ShoppingBag, Utensils, ExternalLink, Flame, Star } from 'lucide-react';

interface SlotGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
  onSelectDish: (item: MenuItem) => void;
}

interface StepConfig {
  title: string;
  categoryHint: string;
  video: string;
  symbols: string[];
}

const STEPS: StepConfig[] = [
  {
    title: 'Etapa 1 de 4: Escolhendo o Prato Principal',
    categoryHint: 'Proteína & Estilo',
    video: 'https://res.cloudinary.com/hd1sahto/video/upload/v1792022902/Logo_animation_for_restaurant_20261014210746.mp4',
    symbols: ['🥩', '🍗', '🐟', '🍕'],
  },
  {
    title: 'Etapa 2 de 4: Acompanhamento Caipira',
    categoryHint: 'Tradição Mineira',
    video: 'https://res.cloudinary.com/hd1sahto/video/upload/v1792023882/SnapInsta.to_AQNgfDP0MPYk4o2r05oNYDike4Vok1ne8gT2xJrPM3AjwFiGjA8bJN0iz0F8g7N3_RaJZ6rDSY2D2Sle1vnpbWq4KehTPXLZJ6Z8QpQ.mp4',
    symbols: ['🫘', '🥬', '🥔', '🍚'],
  },
  {
    title: 'Etapa 3 de 4: Toque Especial do Chef',
    categoryHint: 'Sabor da Roça',
    video: 'https://res.cloudinary.com/hd1sahto/video/upload/v1792023892/SnapInsta.to_AQNLaMQxwl_rGKBaN9_AD-9mmQJOsvR7gN2-s39x_E5OPvL0rt2lPEjbDP325QYpUtmi1qbNDakU3N3MrekzzBTycbecPvdqloeZrfY.mp4',
    symbols: ['🧀', '🥓', '🌶️', '🧈'],
  },
  {
    title: 'Etapa 4 de 4: Finalizando a Recomendação',
    categoryHint: 'Harmonização Perfeita',
    video: 'https://res.cloudinary.com/hd1sahto/video/upload/v1792023908/SnapInsta.to_AQPRRypt1WqUY1QuB-mTAJF8FaS8frZ5owNVvrmYzJ7BsZeHqT6ZXPmUSWVnnVwN6flD0LfFak5TashVXAjk_VIQV2gPeuLym9_V2so.mp4',
    symbols: ['🍺', '🍹', '🥤', '☕'],
  },
];

export const SlotGameModal: React.FC<SlotGameModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  onSelectDish,
}) => {
  const [screen, setScreen] = useState<'start' | 'loading' | 'slot' | 'result'>('start');
  const [currentStep, setCurrentStep] = useState(0);
  const [reelSymbols, setReelSymbols] = useState<[string, string, string]>(['❓', '❓', '❓']);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winningDish, setWinningDish] = useState<MenuItem | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Pool of featured dishes for the minigame results
  const featuredDishes = useRef<MenuItem[]>([]);

  useEffect(() => {
    // Select standout dishes from menuData
    const pool = menuItems.filter(
      (m) =>
        m.popular ||
        m.categoryId === 'chapas' ||
        m.categoryId === 'delicias-mineiras' ||
        m.categoryId === 'parmegianas' ||
        m.categoryId === 'executivos' ||
        m.categoryId === 'pizzas-especiais'
    );
    featuredDishes.current = pool.length > 0 ? pool : menuItems.slice(0, 10);
  }, []);

  // Reset when opening
  useEffect(() => {
    if (isOpen) {
      setScreen('start');
      setCurrentStep(0);
      setReelSymbols(['❓', '❓', '❓']);
      setIsSpinning(false);
      setWinningDish(null);
    }
  }, [isOpen]);

  // Video switch helper
  useEffect(() => {
    if (screen === 'slot' && videoRef.current) {
      videoRef.current.src = STEPS[currentStep].video;
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [screen, currentStep]);

  if (!isOpen) return null;

  const handleStartGame = () => {
    sounds.playClick();
    setScreen('loading');
    setTimeout(() => {
      setCurrentStep(0);
      setReelSymbols(['❓', '❓', '❓']);
      setScreen('slot');
    }, 1100);
  };

  const handleSpinSlot = () => {
    if (isSpinning) return;
    sounds.playClick();
    setIsSpinning(true);

    const step = STEPS[currentStep];

    // Rapid spinning sound ticks
    const spinAudioInterval = setInterval(() => {
      sounds.playSpin();
    }, 120);

    // Stop reels progressively
    setTimeout(() => {
      clearInterval(spinAudioInterval);

      // Reel 1 stop
      const s1 = step.symbols[Math.floor(Math.random() * step.symbols.length)];
      setReelSymbols((prev) => [s1, prev[1], prev[2]]);
      sounds.playReelStop();

      // Reel 2 stop
      setTimeout(() => {
        const s2 = step.symbols[Math.floor(Math.random() * step.symbols.length)];
        setReelSymbols((prev) => [prev[0], s2, prev[2]]);
        sounds.playReelStop();

        // Reel 3 stop
        setTimeout(() => {
          const s3 = step.symbols[Math.floor(Math.random() * step.symbols.length)];
          setReelSymbols([s1, s2, s3]);
          sounds.playReelStop();
          setIsSpinning(false);

          // Advance to next step or show result
          setTimeout(() => {
            if (currentStep < STEPS.length - 1) {
              setCurrentStep((c) => c + 1);
              setReelSymbols(['❓', '❓', '❓']);
            } else {
              // Final step reached: pick winning dish!
              const candidates = featuredDishes.current;
              const chosen =
                candidates[Math.floor(Math.random() * candidates.length)] || menuItems[0];
              setWinningDish(chosen);
              setScreen('result');
              sounds.playJackpot();
            }
          }, 850);
        }, 320);
      }, 300);
    }, 750);
  };

  const getDishPrice = (dish: MenuItem): string => {
    if (dish.price) return formatBRL(dish.price);
    if (dish.portions && dish.portions.length > 0) {
      return `A partir de ${formatBRL(dish.portions[0].price)}`;
    }
    return '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-[480px] min-h-[580px] max-h-[92vh] overflow-y-auto bg-gradient-to-b from-[#342017] via-[#24150f] to-[#170e0a] border-2 sm:border-4 border-[#e69c24] rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 text-center text-[#f5ebd9] flex flex-col justify-between">
        
        {/* Top bar with close button */}
        <div className="flex items-center justify-between pb-3 border-b border-[#543628] mb-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#e69c24] font-bold font-['Outfit']">
            <Sparkles className="w-4 h-4 text-[#e69c24] animate-pulse" />
            Minigame da Fazenda
          </div>
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-[#1b100b] hover:bg-[#a31111] text-[#e69c24] hover:text-white border border-[#543628] flex items-center justify-center transition-colors"
            title="Fechar minigame"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ========================================================
            SCREEN 1: START
           ======================================================== */}
        {screen === 'start' && (
          <div className="flex-1 flex flex-col items-center justify-center py-4 animate-fadeIn">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4">
              <div className="absolute -inset-2 rounded-full bg-[#e69c24]/30 blur-md animate-pulse" />
              <img
                src="https://res.cloudinary.com/hd1sahto/image/upload/v1792018297/WhatsApp_Image_2026-10-14_at_7.31.56_PM.jpg"
                alt="Tempero de Fazenda"
                className="relative w-full h-full object-cover rounded-full border-2 border-[#e69c24] shadow-xl"
              />
            </div>
            <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-[#e69c24] uppercase tracking-wide drop-shadow-md mb-2">
              Slot dos Sabores
            </h2>
            <p className="text-sm sm:text-base text-[#d1be9d] max-w-xs mb-6 leading-relaxed">
              Não sabe o que pedir hoje? Gire a alavanca da nossa máquina caça-níquel e deixe a roça escolher seu prato ideal!
            </p>
            <button
              onClick={handleStartGame}
              className="bg-gradient-to-b from-[#e69c24] to-[#b8740e] text-[#1b1310] font-['Outfit'] font-black text-lg sm:text-xl py-3.5 px-10 rounded-full shadow-[0_5px_0_#7a4a06,0_10px_20px_rgba(230,156,36,0.4)] active:translate-y-1 active:shadow-[0_2px_0_#7a4a06] transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <span>🎰</span> START
            </button>
          </div>
        )}

        {/* ========================================================
            SCREEN 2: LOADING
           ======================================================== */}
        {screen === 'loading' && (
          <div className="flex-1 flex flex-col items-center justify-center py-10 animate-fadeIn">
            <div className="w-14 h-14 border-4 border-[#e69c24]/20 border-t-[#e69c24] rounded-full animate-spin mb-4" />
            <p className="text-[#e69c24] font-bold text-base sm:text-lg tracking-wide animate-pulse">
              Preparando os temperos de Minas...
            </p>
            <p className="text-xs text-[#d1be9d] mt-2">Aquecendo o fogão a lenha</p>
          </div>
        )}

        {/* ========================================================
            SCREEN 3: SLOT MACHINE
           ======================================================== */}
        {screen === 'slot' && (
          <div className="flex-1 flex flex-col items-center justify-center py-2 animate-fadeIn">
            <div className="text-xs sm:text-sm font-bold text-[#e69c24] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>{STEPS[currentStep].title}</span>
            </div>

            {/* Video animation for the current step */}
            <div className="w-full h-36 sm:h-44 bg-black rounded-xl border-2 border-[#e69c24] overflow-hidden mb-3 shadow-lg relative">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src={STEPS[currentStep].video}
              />
              <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] font-bold text-[#e69c24] uppercase">
                {STEPS[currentStep].categoryHint}
              </div>
            </div>

            {/* Slot Reels */}
            <div className="w-full bg-[#1b100b] border-2 border-[#e69c24] rounded-xl p-3 flex justify-between gap-2 shadow-inner mb-4">
              {reelSymbols.map((symbol, idx) => (
                <div
                  key={idx}
                  className={`flex-1 h-20 sm:h-24 bg-gradient-to-b from-[#130c09] via-[#20130e] to-[#130c09] border border-[#543628] rounded-lg flex items-center justify-center text-3xl sm:text-4xl shadow-inner select-none transition-all ${
                    isSpinning ? 'animate-bounce opacity-80' : ''
                  }`}
                >
                  <span className={isSpinning ? 'blur-[1px]' : ''}>{symbol}</span>
                </div>
              ))}
            </div>

            {/* Lever Button */}
            <button
              onClick={handleSpinSlot}
              disabled={isSpinning}
              className={`w-full max-w-xs bg-gradient-to-b from-[#a31111] to-[#680505] text-[#f5ebd9] border-2 border-[#e69c24] font-['Outfit'] font-black text-base sm:text-lg py-3 px-6 rounded-full shadow-[0_4px_0_#3a0000,0_8px_16px_rgba(0,0,0,0.6)] uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                isSpinning
                  ? 'opacity-60 cursor-not-allowed'
                  : 'hover:brightness-110 active:translate-y-1 active:shadow-[0_1px_0_#3a0000] cursor-pointer'
              }`}
            >
              <span>PUXAR ALAVANCA 🎰</span>
            </button>
          </div>
        )}

        {/* ========================================================
            SCREEN 4: FINAL RESULT & CONVERSIONS
           ======================================================== */}
        {screen === 'result' && winningDish && (
          <div className="flex-1 flex flex-col items-center justify-center py-2 animate-fadeIn text-left">
            <div className="w-full text-center mb-2">
              <span className="text-xs uppercase tracking-widest text-[#e69c24] font-bold flex items-center justify-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#e69c24] text-[#e69c24]" /> Combinação Perfeita da Roça!
              </span>
              <h3 className="font-['Outfit'] text-xl sm:text-2xl font-black text-[#e69c24]">
                O Seu Prato Escolhido
              </h3>
            </div>

            {/* Dish Card */}
            <div className="w-full bg-[#1b100b]/90 border-2 border-[#e69c24] rounded-xl p-3 sm:p-4 mb-3 shadow-xl relative overflow-hidden">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded bg-[#e69c24]/20 text-[#e69c24] text-[10px] font-extrabold uppercase tracking-wider">
                  Recomendação do Chef
                </span>
                <span className="font-black text-sm sm:text-base text-[#f7d488] font-['Outfit']">
                  {getDishPrice(winningDish)}
                </span>
              </div>
              <h4 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#f5ebd9] mb-1">
                {winningDish.name}
              </h4>
              {winningDish.description && (
                <p className="text-xs sm:text-sm text-[#cfc2b7] line-clamp-3 leading-relaxed mb-3">
                  {winningDish.description}
                </p>
              )}

              {/* Action: Add to Order / View Details */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#3d271d]">
                <button
                  onClick={() => {
                    sounds.playAdd();
                    onAddToCart(winningDish);
                    onClose();
                  }}
                  className="bg-[#c45a2c] hover:bg-[#a8451b] text-white text-xs sm:text-sm font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Adicionar ao Pedido
                </button>
                <button
                  onClick={() => {
                    sounds.playClick();
                    onSelectDish(winningDish);
                    onClose();
                  }}
                  className="bg-[#2c1d16] hover:bg-[#3d271d] text-[#e69c24] border border-[#e69c24]/40 text-xs sm:text-sm font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Utensils className="w-3.5 h-3.5" /> Ver no Cardápio
                </button>
              </div>
            </div>

            {/* Conversion action buttons (Instagram, Google, iFood, Retry) */}
            <div className="w-full flex flex-col gap-1.5">
              <a
                href="https://www.ifood.com.br/delivery/marechal-deodoro-al/tempero-de-fazenda-restaurante-e-fornaria-praia-do-frances"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#EA1D2C] hover:bg-[#d01523] text-white text-xs sm:text-sm font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 shadow transition-all"
              >
                🛵 Pedir pelo iFood
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.instagram.com/temperodefazenda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white text-xs font-bold py-2 px-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow"
                >
                  📸 Seguir Instagram
                </a>
                <a
                  href="https://maps.app.goo.gl/9uE4D2B6aP6Zg8b69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4285F4] hover:bg-[#3367d6] text-white text-xs font-bold py-2 px-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow"
                >
                  ⭐ Avaliar Google
                </a>
              </div>
              <button
                onClick={handleStartGame}
                className="w-full bg-transparent hover:bg-[#342017] text-[#d1be9d] hover:text-[#e69c24] border border-[#543628] text-xs font-medium py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer mt-1"
              >
                <RefreshCw className="w-3 h-3" /> Girar a Alavanca Novamente
              </button>
            </div>
          </div>
        )}

        {/* Footer note */}
        <div className="pt-2 text-[11px] text-[#a69385] flex items-center justify-center gap-1">
          <Flame className="w-3 h-3 text-[#c45a2c]" /> Tempero de Fazenda · Praia do Francês, Alagoas
        </div>
      </div>
    </div>
  );
};
