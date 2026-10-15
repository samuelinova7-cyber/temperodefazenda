import React from 'react';
import { Waves, Sparkles, MapPin, Sun } from 'lucide-react';

export const TopMarquee: React.FC = () => {
  const highlights = [
    '🌊 O Autêntico Sabor de Minas Gerais na Praia do Francês · AL',
    '🧀 Feijão Tropeiro com Torresmo Pururuca & Mandioca na Manteiga de Garrafa',
    '☀️ Clima Acolhedor da Roça com a Brisa Tropical de Marechal Deodoro',
    '🥩 Festival da Picanha na Chapa com 10 Opções Especiais de Preparo',
    '🍹 Caipirinhas de Limão, Doses de Cachaça Mineira & Drink Mineirito',
    '📍 Localização Privilegiada: Av. dos Corais, 284 (Pertinho da Praia)',
    '🐶 Traga seu Amigo de 4 Patas: Restaurante 100% Pet Friendly',
    '🍕 Fornaria à Noite: Pizzas Artesanais com Massa Fina e Borda de Catupiry',
  ];

  return (
    <div className="bg-gradient-to-r from-[#5a2410] via-[#8b3a1a] to-[#5a2410] text-[#fbeee6] py-2 border-b border-amber-900/60 overflow-hidden relative shadow-xs z-50">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-semibold tracking-wide">
        {[...highlights, ...highlights].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-[#ffe0cf]">{item}</span>
            <span className="text-amber-300 font-bold" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
