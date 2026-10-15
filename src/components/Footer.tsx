import React from 'react';
import { Instagram, MapPin, Phone, Star, ShieldCheck, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c120c] text-[#cfc2b7] pt-14 pb-12 border-t border-[#3b271d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Medalha Redonda Centralizada de Qualidade e Credibilidade */}
        <div className="flex flex-col items-center justify-center text-center space-y-5">
          <div className="relative group flex items-center justify-center">
            {/* Ambient golden aura radiance */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-500/35 via-yellow-400/45 to-orange-500/30 blur-2xl opacity-90 animate-pulse pointer-events-none" />
            
            {/* Medalha redonda centralizada */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-amber-400/90 shadow-[0_0_35px_rgba(245,158,11,0.55)] bg-black">
              <video
                src="https://res.cloudinary.com/hd1sahto/video/upload/v1792019396/Logo_transforming_into_golden_medal_20261014200819.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 rounded-full border border-yellow-200/40 pointer-events-none" />
            </div>
          </div>

          <div className="max-w-lg space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/15 border border-amber-400/40 rounded-full text-xs font-semibold text-amber-300">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Selo de Qualidade & Excelência Gastronômica</span>
            </div>

            <h3 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white tracking-tight">
              Credibilidade Reconhecida na Praia do Francês
            </h3>

            <p className="text-xs sm:text-sm text-[#b8a79b] leading-relaxed">
              Consagrado por moradores e visitantes com nota máxima em sabor caseiro, porções fartas e atendimento acolhedor.
            </p>

            {/* Destaque das avaliações e métricas de confiança */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[#e2d5cb]">
              <div className="flex items-center gap-1.5 bg-[#291b14] px-3.5 py-1.5 rounded-lg border border-[#4a3427]">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < 4 ? 'fill-amber-400' : 'fill-amber-400/40'}`}
                    />
                  ))}
                </div>
                <span className="font-bold text-white">4.4</span>
                <span className="text-stone-400">no Google</span>
              </div>

              <div className="flex items-center gap-1.5 bg-[#291b14] px-3.5 py-1.5 rounded-lg border border-[#4a3427]">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-white">604+</span>
                <span className="text-stone-400">avaliações reais</span>
              </div>
            </div>
          </div>
        </div>

        {/* Informações Principais & Redes */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 pb-8 border-t border-[#342319]">
          <div>
            <h4 className="font-['Outfit'] text-xl font-bold text-white tracking-tight">
              Tempero de Fazenda
            </h4>
            <p className="text-xs sm:text-sm text-[#a69284] mt-1">
              Restaurante e Fornaria · Culinária Mineira, Sabores Nobres & Pizzas Artesanais
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a
              href="https://www.instagram.com/temperodefazenda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#2e1c14] hover:bg-[#3f271c] text-white border border-[#4a3225] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#e07a4a]" />
              <span>@temperodefazenda</span>
            </a>
            <a
              href="https://wa.me/5582999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#2e1c14] hover:bg-[#3f271c] text-white border border-[#4a3225] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Oficial</span>
            </a>
          </div>
        </div>

        {/* Rodapé inferior com endereço e direitos */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c786a] border-t border-[#2d1e16] pt-6">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#e07a4a]" />
            <span>Av. dos Corais, 284 · Praia do Francês, Mal. Deodoro - AL, 57160-000</span>
          </div>

          <p>© {new Date().getFullYear()} Tempero de Fazenda Restaurante e Fornaria. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
};
