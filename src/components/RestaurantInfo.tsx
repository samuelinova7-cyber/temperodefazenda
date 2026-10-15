import React from 'react';
import { restaurantDetails } from '../data/menuData';
import {
  MapPin,
  Clock,
  Star,
  ExternalLink,
  Instagram,
  Dog,
  Baby,
  Wifi,
  Pizza,
  ShoppingBag,
} from 'lucide-react';

export const RestaurantInfo: React.FC = () => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Tempero de Fazenda Av. dos Corais, 284 Praia do Frances Marechal Deodoro AL'
  )}`;

  return (
    <section id="sobre-localizacao" className="py-14 sm:py-18 bg-[#f5ede3] border-t border-[#e7dfd5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8b3a1a]">
            <span>Praia do Francês · Alagoas</span>
          </div>
          <h2 className="font-['Outfit'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2d1c14]">
            Conheça o Tempero de Fazenda
          </h2>
          <p className="text-sm sm:text-base text-[#6c584c]">
            O ponto de encontro entre o tempero caseiro mineiro e a brisa tropical da Praia do Francês. Pratos fartos, aconchego e fornaria artesanal.
          </p>
        </div>

        {/* 3 Information Bento Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Google Reviews & Experience with Smartphone Video */}
          <div className="bg-white rounded-2xl border border-[#ded2c3] shadow-2xs overflow-hidden flex flex-col justify-between">
            {/* Embedded Smartphone Video on Wooden Table */}
            <div className="relative aspect-[16/9] w-full bg-stone-900 overflow-hidden">
              <video
                src="https://res.cloudinary.com/hd1sahto/video/upload/v1792019391/Smartphone_on_wooden_table_20261014200440.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-[11px] font-semibold text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Google Reviews</span>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8a7260]">
                    Avaliação Verificada
                  </span>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span className="font-bold text-base text-[#2d1c14]">4.4 / 5.0</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-['Outfit'] text-2xl font-bold text-[#2d1c14]">
                    604 avaliações reais
                  </div>
                  <p className="text-xs text-[#7c695c]">
                    Faixa de preço média: <strong className="text-[#2d1c14]">{restaurantDetails.priceRange}</strong>
                  </p>
                </div>

                <p className="text-xs text-[#665447] leading-relaxed pt-2.5 mt-2 border-t border-[#f0e8de]">
                  "Comida mineira farta e deliciosa, atendimento atencioso e ambiente ventilado muito agradável na Praia do Francês!"
                </p>
              </div>

              {/* Botão de Avaliar o Restaurante no Google */}
              <div className="pt-3 border-t border-[#f0e8de] space-y-2">
                <a
                  href={`https://search.google.com/local/writereview?placeid=ChIJ8_TemperoDeFazendaPraiaDoFrances`}
                  onClick={(e) => {
                    // Fallback to Google Search Review if direct place ID opens
                    window.open(
                      `https://www.google.com/search?q=${encodeURIComponent(
                        'Tempero de Fazenda Praia do Frances Marechal Deodoro AL avaliacoes'
                      )}`,
                      '_blank'
                    );
                    e.preventDefault();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Star className="w-3.5 h-3.5 fill-white" />
                  <span>Avaliar Restaurante no Google</span>
                </a>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1 text-xs text-[#7c695c] hover:text-[#2d1c14] transition-colors"
                >
                  <span>Ver todas as 604 avaliações</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Location & Address with Map Diorama Video */}
          <div className="bg-white rounded-2xl border border-[#ded2c3] shadow-2xs overflow-hidden flex flex-col justify-between">
            {/* Embedded Map Diorama Video */}
            <div className="relative aspect-[16/9] w-full bg-stone-900 overflow-hidden">
              <video
                src="https://res.cloudinary.com/hd1sahto/video/upload/v1792019396/Raposa_examinando_mapa_no_diorama_20261014200216.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-[11px] font-semibold text-amber-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Mapa & Localização</span>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8a7260]">
                    Endereço & Acesso
                  </span>
                  <MapPin className="w-4 h-4 text-[#8b3a1a]" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-['Outfit'] text-lg font-bold text-[#2d1c14]">
                    {restaurantDetails.address}
                  </h3>
                  <p className="text-xs text-[#6c584c]">
                    {restaurantDetails.city} - {restaurantDetails.state}, CEP {restaurantDetails.cep}
                  </p>
                </div>

                <div className="pt-2.5 mt-2 border-t border-[#f0e8de] space-y-2 text-xs text-[#665447]">
                  <div className="flex items-center gap-2">
                    <Dog className="w-4 h-4 text-[#8b3a1a]" />
                    <span>Permite a entrada de cães (Pet Friendly)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Baby className="w-4 h-4 text-[#8b3a1a]" />
                    <span>Cardápio infantil com opções leves</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-[#8b3a1a]" />
                    <span>Wi-Fi gratuito para clientes</span>
                  </div>
                </div>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#8b3a1a] hover:bg-[#722e13] text-white text-xs font-medium rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Traçar Rota no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Card 3: Horários & Delivery with iFood Animation Video */}
          <div id="horarios" className="bg-white rounded-2xl border border-[#ded2c3] shadow-2xs overflow-hidden flex flex-col justify-between">
            {/* Embedded iFood Delivery Box Animation Video */}
            <div className="relative aspect-[16/9] w-full bg-stone-900 overflow-hidden">
              <video
                src="https://res.cloudinary.com/hd1sahto/video/upload/v1792021178/iFood_delivery_box_animation_20261014203859.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-[#EA1D2C]/90 backdrop-blur-md rounded-full text-[11px] font-bold text-white shadow-sm">
                <ShoppingBag className="w-3.5 h-3.5 text-white" />
                <span>Horários & iFood</span>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8a7260]">
                    Horário de Atendimento
                  </span>
                  <Clock className="w-4 h-4 text-[#8b3a1a]" />
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-[#faf7f3] rounded-xl border border-[#f0e8de]">
                    <span className="font-bold block text-[#2d1c14] text-xs">Segunda a Terça:</span>
                    <span className="text-[#6c584c] font-medium">Das 11h00 às 18h00</span>
                  </div>
                  <div className="p-3 bg-[#faf7f3] rounded-xl border border-[#f0e8de]">
                    <span className="font-bold block text-[#2d1c14] text-xs">Quarta a Domingo & Feriados:</span>
                    <span className="text-[#8b3a1a] font-bold">Das 11h00 às 23h00</span>
                  </div>
                </div>
              </div>

              {/* Social & Delivery Channels */}
              <div className="pt-2 border-t border-[#f0e8de] flex flex-col gap-2.5">
                <a
                  href="https://www.ifood.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-red-600 to-[#EA1D2C] hover:from-red-500 hover:to-red-700 text-white rounded-xl text-xs font-bold shadow-md shadow-red-950/20 hover:scale-102 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Pedir Entrega pelo iFood</span>
                </a>

                <a
                  href="https://www.instagram.com/temperodefazenda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl border border-[#ded2c3] hover:bg-[#faf7f3] text-xs transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-[#c45a2c]" />
                    <span className="font-medium text-[#2d1c14]">@temperodefazenda</span>
                  </div>
                  <span className="text-[11px] text-[#7c695c]">2.492 seguidores</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
