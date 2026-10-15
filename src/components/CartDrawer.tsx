import React, { useState } from 'react';
import { CartItem, OrderType } from '../types/menu';
import { formatBRL } from '../utils/formatters';
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  Copy,
  Check,
  UtensilsCrossed,
  Bike,
  CreditCard,
  QrCode,
  Banknote,
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<OrderType>('mesa');
  const [tableNumber, setTableNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao' | 'dinheiro'>('pix');
  const [cashChange, setCashChange] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (acc, curr) => acc + curr.unitPrice * curr.quantity,
    0
  );

  // Generate WhatsApp formatted text
  const generateOrderMessage = () => {
    let msg = `*PEDIDO — TEMPERO DE FAZENDA*\n`;
    msg += `--------------------------------\n`;
    msg += `*Tipo:* ${orderType === 'mesa' ? `Mesa no Restaurante (${tableNumber || 'Não informada'})` : orderType === 'delivery' ? 'Entrega / Delivery' : 'Retirada no Balcão'}\n`;
    if (customerName) msg += `*Cliente:* ${customerName}\n`;
    if (customerPhone) msg += `*Contato:* ${customerPhone}\n`;
    if (orderType === 'delivery' && deliveryAddress) {
      msg += `*Endereço:* ${deliveryAddress}\n`;
    }
    msg += `--------------------------------\n\n`;
    msg += `*ITENS DO PEDIDO:*\n`;

    cartItems.forEach((cItem, i) => {
      msg += `${i + 1}. *${cItem.item.name}* (x${cItem.quantity})\n`;
      if (cItem.selectedPortion) {
        msg += `   • Porção: ${cItem.selectedPortion.name}\n`;
      }
      if (cItem.selectedOptions) {
        Object.entries(cItem.selectedOptions).forEach(([title, val]) => {
          if (Array.isArray(val)) {
            if (val.length > 0) msg += `   • ${title}: ${val.join(', ')}\n`;
          } else if (val) {
            msg += `   • ${title}: ${val}\n`;
          }
        });
      }
      if (cItem.notes) {
        msg += `   • Obs: ${cItem.notes}\n`;
      }
      msg += `   • Valor: ${formatBRL(cItem.unitPrice * cItem.quantity)}\n\n`;
    });

    msg += `--------------------------------\n`;
    msg += `*TOTAL DO PEDIDO:* ${formatBRL(subtotal)}\n`;
    msg += `*Forma de Pagamento:* ${paymentMethod.toUpperCase()}${paymentMethod === 'dinheiro' && cashChange ? ` (Troco para R$ ${cashChange})` : ''}\n`;
    msg += `--------------------------------\n`;
    msg += `Enviado através do cardápio digital Tempero de Fazenda.`;

    return msg;
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(generateOrderMessage());
    // Using default international Brazilian format for restaurant
    const url = `https://wa.me/5582999999999?text=${text}`;
    window.open(url, '_blank');
  };

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(generateOrderMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md h-full bg-white shadow-2xl flex flex-col border-l border-[#ded2c3] text-[#2d1c14]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#ece2d6] flex items-center justify-between bg-[#faf7f3]">
          <div className="flex items-center gap-2">
            <h2 className="font-['Outfit'] text-lg sm:text-xl font-bold text-[#2d1c14]">
              Sua Comanda & Pedido
            </h2>
            <span className="text-xs font-mono tabular-nums px-2 py-0.5 rounded-full bg-[#ede4d8] text-[#702d13] font-semibold">
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)} itens
            </span>
          </div>

          <div className="flex items-center gap-2">
            {cartItems.length > 0 && (
              <button
                type="button"
                onClick={onClearCart}
                title="Limpar comanda"
                className="p-2 text-xs text-stone-500 hover:text-red-700 transition-colors"
              >
                Limpar
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#7c695c] hover:text-[#2d1c14] hover:bg-[#ede3d8] transition-colors"
              aria-label="Fechar comanda"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer Content */}
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#f5ede3] flex items-center justify-center text-[#8b3a1a]">
              <UtensilsCrossed className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-['Outfit'] font-bold text-lg text-[#2d1c14]">
                Sua comanda está vazia
              </h3>
              <p className="text-xs sm:text-sm text-[#7a6456] max-w-xs">
                Explore as delícias mineiras, o festival da picanha e nossas pizzas da fornaria para adicionar ao pedido.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
            {/* Order Mode Segmented Control */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#7a6456]">
                Onde você vai saborear?
              </label>
              <div className="grid grid-cols-2 p-1 bg-[#f0e7dc] rounded-xl text-xs font-medium gap-1">
                <button
                  type="button"
                  onClick={() => setOrderType('mesa')}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-lg transition-all ${
                    orderType === 'mesa'
                      ? 'bg-white text-[#2d1c14] shadow-xs font-semibold'
                      : 'text-[#6c584c] hover:text-[#2d1c14]'
                  }`}
                >
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  <span>Mesa no Salão</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-lg transition-all ${
                    orderType === 'delivery'
                      ? 'bg-white text-[#2d1c14] shadow-xs font-semibold'
                      : 'text-[#6c584c] hover:text-[#2d1c14]'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>Delivery / Viagem</span>
                </button>
              </div>
            </div>

            {/* Form Fields based on Mode */}
            <div className="space-y-3 bg-[#faf7f3] p-3.5 rounded-xl border border-[#ece2d6] text-xs">
              {orderType === 'mesa' ? (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-[#7a6456] mb-1">
                      Número da Mesa:
                    </label>
                    <input
                      type="text"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      placeholder="Ex: Mesa 04"
                      className="w-full p-2 bg-white border border-[#d8c8b8] rounded-lg text-xs focus:ring-1 focus:ring-[#8b3a1a]"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-[#7a6456] mb-1">
                      Seu Nome:
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full p-2 bg-white border border-[#d8c8b8] rounded-lg text-xs focus:ring-1 focus:ring-[#8b3a1a]"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-2.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-medium text-[#7a6456] mb-1">
                        Seu Nome:
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Nome completo"
                        className="w-full p-2 bg-white border border-[#d8c8b8] rounded-lg text-xs focus:ring-1 focus:ring-[#8b3a1a]"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-[#7a6456] mb-1">
                        WhatsApp / Celular:
                      </label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="(82) 9..."
                        className="w-full p-2 bg-white border border-[#d8c8b8] rounded-lg text-xs focus:ring-1 focus:ring-[#8b3a1a]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-medium text-[#7a6456] mb-1">
                      Endereço ou pousada na Praia do Francês:
                    </label>
                    <input
                      type="text"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      placeholder="Rua, número, complemento ou nome da Pousada"
                      className="w-full p-2 bg-white border border-[#d8c8b8] rounded-lg text-xs focus:ring-1 focus:ring-[#8b3a1a]"
                    />
                  </div>
                </div>
              )}

              {/* Payment selector */}
              <div className="pt-2 border-t border-[#f0e8de]">
                <label className="block font-medium text-[#7a6456] mb-1.5">
                  Forma de Pagamento:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg border text-[11px] font-medium transition-all ${
                      paymentMethod === 'pix'
                        ? 'border-[#8b3a1a] bg-[#faf3ed] text-[#8b3a1a] font-semibold'
                        : 'border-[#ded2c3] bg-white text-[#5c4a3f]'
                    }`}
                  >
                    <QrCode className="w-3 h-3" />
                    <span>Pix</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cartao')}
                    className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg border text-[11px] font-medium transition-all ${
                      paymentMethod === 'cartao'
                        ? 'border-[#8b3a1a] bg-[#faf3ed] text-[#8b3a1a] font-semibold'
                        : 'border-[#ded2c3] bg-white text-[#5c4a3f]'
                    }`}
                  >
                    <CreditCard className="w-3 h-3" />
                    <span>Cartão</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('dinheiro')}
                    className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg border text-[11px] font-medium transition-all ${
                      paymentMethod === 'dinheiro'
                        ? 'border-[#8b3a1a] bg-[#faf3ed] text-[#8b3a1a] font-semibold'
                        : 'border-[#ded2c3] bg-white text-[#5c4a3f]'
                    }`}
                  >
                    <Banknote className="w-3 h-3" />
                    <span>Dinheiro</span>
                  </button>
                </div>
                {paymentMethod === 'dinheiro' && (
                  <div className="mt-2">
                    <input
                      type="text"
                      value={cashChange}
                      onChange={(e) => setCashChange(e.target.value)}
                      placeholder="Precisa de troco para quanto? (ex: R$ 100)"
                      className="w-full p-2 bg-white border border-[#d8c8b8] rounded-lg text-xs"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Itemized Order List */}
            <div className="space-y-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#7a6456]">
                Itens selecionados:
              </label>

              <div className="divide-y divide-[#f0e8de]">
                {cartItems.map((cartItem) => (
                  <div key={cartItem.cartItemId} className="py-3.5 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-['Outfit'] font-bold text-sm text-[#2d1c14]">
                          {cartItem.item.name}
                        </h4>
                        {cartItem.selectedPortion && (
                          <p className="text-xs text-[#702d13] font-medium">
                            Porção: {cartItem.selectedPortion.name}
                          </p>
                        )}
                      </div>
                      <span className="font-mono tabular-nums font-semibold text-sm text-[#2d1c14]">
                        {formatBRL(cartItem.unitPrice * cartItem.quantity)}
                      </span>
                    </div>

                    {/* Options summary */}
                    {cartItem.selectedOptions &&
                      Object.keys(cartItem.selectedOptions).length > 0 && (
                        <div className="text-[11px] text-[#6c584c] space-y-0.5 bg-[#faf7f3] p-2 rounded-lg">
                          {Object.entries(cartItem.selectedOptions).map(([key, val]) => (
                            <div key={key}>
                              <span className="font-medium text-[#7a6456]">{key}: </span>
                              <span>{Array.isArray(val) ? val.join(', ') : val}</span>
                            </div>
                          ))}
                        </div>
                      )}

                    {/* Notes */}
                    {cartItem.notes && (
                      <p className="text-[11px] italic text-[#8a7260]">
                        Obs: "{cartItem.notes}"
                      </p>
                    )}

                    {/* Quantity controls & Remove */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center border border-[#d8c8b8] rounded-lg bg-white overflow-hidden shadow-2xs">
                        <button
                          type="button"
                          onClick={() => {
                            sounds.playTick();
                            onUpdateQuantity(
                              cartItem.cartItemId,
                              Math.max(1, cartItem.quantity - 1)
                            );
                          }}
                          className="p-1.5 text-[#5c4a3f] hover:bg-[#ede4d8] transition-colors cursor-pointer"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3.5 font-mono tabular-nums font-bold text-xs text-[#2d1c14]">
                          {cartItem.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            sounds.playTick();
                            onUpdateQuantity(cartItem.cartItemId, cartItem.quantity + 1);
                          }}
                          className="p-1.5 text-[#5c4a3f] hover:bg-[#ede4d8] transition-colors cursor-pointer"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          sounds.playClick();
                          onRemoveItem(cartItem.cartItemId);
                        }}
                        className="text-xs text-[#8a7260] hover:text-red-700 flex items-center gap-1 transition-colors cursor-pointer font-medium"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remover</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Drawer Footer with Totals & CTAs */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#ece2d6] bg-[#faf7f3] space-y-4">
            <div className="flex items-center justify-between text-base sm:text-lg font-bold text-[#2d1c14]">
              <span>Subtotal do Pedido:</span>
              <span className="font-mono tabular-nums text-xl text-[#8b3a1a]">
                {formatBRL(subtotal)}
              </span>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  sounds.playClick();
                  handleSendWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-4 bg-gradient-to-r from-emerald-500 via-[#25D366] to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-950/20 border border-emerald-300/60 hover:scale-102 active:scale-98 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Enviar Pedido pelo WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sounds.playClick();
                  handleCopyOrder();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-[#ded2c3] text-[#5c4a3f] hover:text-[#2d1c14] hover:bg-[#f5ede3] text-xs font-semibold rounded-xl transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Pedido Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Detalhes da Comanda</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
