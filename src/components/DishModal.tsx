import React, { useState, useEffect } from 'react';
import { MenuItem, PortionOption } from '../types/menu';
import { formatBRL } from '../utils/formatters';
import { X, Minus, Plus, Check } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface DishModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (
    item: MenuItem,
    portion: PortionOption | undefined,
    selectedOptions: Record<string, string | string[]>,
    notes: string,
    quantity: number,
    finalUnitPrice: number
  ) => void;
}

export const DishModal: React.FC<DishModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  // Selected portion
  const [selectedPortion, setSelectedPortion] = useState<PortionOption | undefined>(
    item.portions && item.portions.length > 0 ? item.portions[0] : undefined
  );

  // Selected options map: { [optionTitle]: optionValue }
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string | string[]>>({});

  // Notes/Observations
  const [notes, setNotes] = useState('');

  // Quantity
  const [quantity, setQuantity] = useState(1);

  // Initialize default options
  useEffect(() => {
    if (item.portions && item.portions.length > 0) {
      setSelectedPortion(item.portions[0]);
    } else {
      setSelectedPortion(undefined);
    }

    const defaultOpts: Record<string, string | string[]> = {};
    if (item.options) {
      item.options.forEach((opt) => {
        if (opt.type === 'single' && opt.choices.length > 0) {
          defaultOpts[opt.title] = opt.choices[0].name;
        } else if (opt.type === 'multiple') {
          defaultOpts[opt.title] = [];
        }
      });
    }
    setSelectedOptions(defaultOpts);
    setNotes('');
    setQuantity(1);
  }, [item]);

  // Compute unit price
  const basePrice = selectedPortion ? selectedPortion.price : (item.price || 0);

  // Calculate extra prices from selected options
  let extraCharges = 0;
  if (item.options) {
    item.options.forEach((opt) => {
      const selected = selectedOptions[opt.title];
      if (typeof selected === 'string') {
        const choice = opt.choices.find((c) => c.name === selected);
        if (choice && choice.extraPrice) {
          extraCharges += choice.extraPrice;
        }
      }
    });
  }

  const finalUnitPrice = basePrice + extraCharges;
  const totalPrice = finalUnitPrice * quantity;

  const handleOptionChange = (optionTitle: string, choiceName: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionTitle]: choiceName,
    }));
  };

  const handleAdd = () => {
    onAddToCart(
      item,
      selectedPortion,
      selectedOptions,
      notes.trim(),
      quantity,
      finalUnitPrice
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg max-h-[90vh] bg-white rounded-2xl shadow-xl border border-[#ded2c3] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#f0e8de] flex items-start justify-between gap-4 bg-[#faf7f3]">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#8a7260] font-medium mb-1">
              <span>{item.badge || 'Tempero de Fazenda'}</span>
              {item.serves && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{item.serves}</span>
                </>
              )}
            </div>
            <h2 className="font-['Outfit'] text-xl font-bold text-[#2d1c14]">
              {item.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#7c695c] hover:text-[#2d1c14] hover:bg-[#ede3d8] transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1 text-sm text-[#4a3b32]">
          {/* Dish Description */}
          {item.description && (
            <p className="text-sm text-[#665447] leading-relaxed">
              {item.description}
            </p>
          )}

          {/* Portion Selector */}
          {item.portions && item.portions.length > 0 && (
            <div className="space-y-2.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#7a6456]">
                Escolha o tamanho / porção:
              </label>
              <div className="space-y-2">
                {item.portions.map((portion) => {
                  const isSelected = selectedPortion?.id === portion.id;
                  return (
                    <button
                      key={portion.id}
                      type="button"
                      onClick={() => setSelectedPortion(portion)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#8b3a1a] bg-[#faf3ed] ring-1 ring-[#8b3a1a]'
                          : 'border-[#e5dcd1] hover:border-[#c5b4a2] bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? 'border-[#8b3a1a] bg-[#8b3a1a]'
                              : 'border-[#c5b4a2]'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span className="font-medium text-[#2d1c14]">{portion.name}</span>
                      </div>
                      <span className="font-mono tabular-nums font-semibold text-[#2d1c14]">
                        {formatBRL(portion.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Options / Customizations */}
          {item.options &&
            item.options.map((optGroup, idx) => (
              <div key={idx} className="space-y-2.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#7a6456]">
                  {optGroup.title}:
                </label>
                <div className="space-y-2">
                  {optGroup.choices.map((choice, cIdx) => {
                    const isChecked = selectedOptions[optGroup.title] === choice.name;
                    return (
                      <button
                        key={cIdx}
                        type="button"
                        onClick={() => handleOptionChange(optGroup.title, choice.name)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isChecked
                            ? 'border-[#8b3a1a] bg-[#faf3ed] text-[#2d1c14]'
                            : 'border-[#e5dcd1] hover:border-[#c5b4a2] bg-white text-[#5c4a3f]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isChecked
                                ? 'border-[#8b3a1a] bg-[#8b3a1a]'
                                : 'border-[#c5b4a2]'
                            }`}
                          >
                            {isChecked && <Check className="w-2.5 h-2.5 text-white" />}
                          </div>
                          <span className="text-xs sm:text-sm font-medium">{choice.name}</span>
                        </div>
                        {choice.extraPrice ? (
                          <span className="text-xs font-mono tabular-nums text-[#8b3a1a] font-semibold">
                            +{formatBRL(choice.extraPrice)}
                          </span>
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

          {/* Special Instructions / Notes */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#7a6456]">
              Observações do prato (opcional):
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: carne ao ponto, sem cebola, limão extra à parte..."
              rows={2}
              className="w-full p-3 bg-[#faf7f3] border border-[#d8c8b8] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#8b3a1a] focus:bg-white text-[#2d1c14]"
            />
          </div>
        </div>

        {/* Footer with Quantity & Add Button */}
        <div className="p-5 border-t border-[#f0e8de] bg-[#faf7f3] flex flex-wrap items-center justify-between gap-4">
          {/* Quantity Stepper */}
          <div className="flex items-center border border-[#d8c8b8] rounded-xl bg-white overflow-hidden shadow-xs">
            <button
              type="button"
              onClick={() => {
                sounds.playTick();
                setQuantity((q) => Math.max(1, q - 1));
              }}
              disabled={quantity <= 1}
              aria-label="Diminuir quantidade"
              className="p-3 text-[#5c4a3f] hover:bg-[#ede4d8] disabled:opacity-40 transition-colors cursor-pointer"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 font-mono tabular-nums font-bold text-sm text-[#2d1c14]">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => {
                sounds.playTick();
                setQuantity((q) => q + 1);
              }}
              aria-label="Aumentar quantidade"
              className="p-3 text-[#5c4a3f] hover:bg-[#ede4d8] transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Chamativo Add Button */}
          <button
            type="button"
            onClick={() => {
              sounds.playAdd();
              handleAdd();
            }}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-amber-600 via-[#9c421e] to-[#8b3a1a] hover:from-amber-500 hover:to-[#722e13] text-white font-bold text-sm rounded-xl shadow-lg shadow-amber-950/25 border border-amber-300/60 hover:scale-102 active:scale-98 transition-all cursor-pointer"
          >
            <span>Adicionar ao Pedido</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums font-black text-base">
              {formatBRL(totalPrice)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
