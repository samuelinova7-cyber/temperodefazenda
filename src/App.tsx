import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategoryNav } from './components/CategoryNav';
import { TopMarquee } from './components/TopMarquee';
import { GoogleReviewToast } from './components/GoogleReviewToast';
import { FloatingActions } from './components/FloatingActions';
import { DishRow } from './components/DishRow';
import { DishCard } from './components/DishCard';
import { DishModal } from './components/DishModal';
import { CartDrawer } from './components/CartDrawer';
import { RestaurantInfo } from './components/RestaurantInfo';
import { Footer } from './components/Footer';
import { MenuTopBanner } from './components/MenuTopBanner';
import { InstagramReelsSection } from './components/InstagramReelsSection';
import { categories, menuItems } from './data/menuData';
import { MenuItem, CartItem, PortionOption } from './types/menu';
import { formatBRL } from './utils/formatters';
import { sounds } from './utils/soundEffects';
import { ShoppingBag, Search, Sparkles, Flame, Beef, Pizza, LayoutList, LayoutGrid } from 'lucide-react';

const CART_STORAGE_KEY = 'tempero_fazenda_cart_v1';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDishForModal, setSelectedDishForModal] = useState<MenuItem | null>(null);
  const [viewMode, setViewMode] = useState<'rows' | 'grid'>('rows');

  // Cart state with localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Storage unavailable or quota exceeded
    }
  }, [cartItems]);

  const cartItemCount = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );

  const cartTotal = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0),
    [cartItems]
  );

  // Compute category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    categories.forEach((cat) => {
      counts[cat.id] = menuItems.filter((i) => i.categoryId === cat.id).length;
    });
    return counts;
  }, []);

  // Filtered items based on search and activeCategory
  const filteredItems = useMemo(() => {
    let items = menuItems;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          (i.description && i.description.toLowerCase().includes(q)) ||
          (i.badge && i.badge.toLowerCase().includes(q))
      );
    }

    if (activeCategory) {
      items = items.filter((i) => i.categoryId === activeCategory);
    }

    return items;
  }, [searchQuery, activeCategory]);

  // Group filtered items by category for section display
  const itemsByCategory = useMemo(() => {
    const map = new Map<string, MenuItem[]>();
    categories.forEach((cat) => {
      const inCat = filteredItems.filter((i) => i.categoryId === cat.id);
      if (inCat.length > 0) {
        map.set(cat.id, inCat);
      }
    });
    return map;
  }, [filteredItems]);

  const handleAddToCart = (
    item: MenuItem,
    portion: PortionOption | undefined,
    selectedOptions: Record<string, string | string[]>,
    notes: string,
    quantity: number,
    finalUnitPrice: number
  ) => {
    const cartItemId = `${item.id}-${portion?.id || 'standard'}-${JSON.stringify(
      selectedOptions
    )}-${notes}`;

    setCartItems((prev) => {
      const existingIdx = prev.findIndex((ci) => ci.cartItemId === cartItemId);
      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx].quantity += quantity;
        return copy;
      } else {
        return [
          ...prev,
          {
            cartItemId,
            item,
            selectedPortion: portion,
            selectedOptions,
            notes,
            unitPrice: finalUnitPrice,
            quantity,
          },
        ];
      }
    });
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    if (window.confirm('Deseja limpar todos os itens da comanda?')) {
      setCartItems([]);
    }
  };

  const handleSelectCategory = (catId: string | null) => {
    setActiveCategory(catId);
    if (catId) {
      const el = document.getElementById(`categoria-${catId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2c2420] flex flex-col font-sans">
      {/* 1. Faixa informativa no topo absoluto do site (comida mineira na Praia do Francês) */}
      <TopMarquee />

      {/* Top Bar Contract (Constitution Section 2) */}
      <Header
        cartItemCount={cartItemCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Hero & Search */}
      <HeroBanner
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectCategory={handleSelectCategory}
      />

      {/* Category Navigation Bar */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        categoryCounts={categoryCounts}
      />

      {/* Main Content Area */}
      <main id="cardapio" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Faixa informativa correndo e Imagem com brilho no topo do cardápio */}
        <MenuTopBanner onQuickCategoryClick={handleSelectCategory} />

        {/* Seção Seguir no Instagram com os 4 Reels em reprodução automática lado a lado */}
        <InstagramReelsSection />

        {/* Header de controles do cardápio: busca ativa ou seletor de visualização em Linhas */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {searchQuery.trim() ? (
            <div className="flex-1 p-3.5 bg-white rounded-xl border border-[#ded2c3] flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[#5c4a3f]">
                <Search className="w-4 h-4 text-[#8b3a1a]" />
                <span>
                  Resultados para: <strong className="text-[#2d1c14]">"{searchQuery}"</strong>
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums text-xs font-semibold text-[#8b3a1a]">
                  {filteredItems.length} pratos encontrados
                </span>
              </div>
              <button
                onClick={() => {
                  sounds.playClick();
                  setSearchQuery('');
                }}
                className="text-xs text-[#8b3a1a] hover:underline font-bold cursor-pointer"
              >
                Limpar busca
              </button>
            </div>
          ) : (
            <div className="text-xs text-[#7a6456] font-medium flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Cardápio em organização compacta de linhas para leitura rápida</span>
            </div>
          )}

          {/* Seletor de layout: Linhas compactas vs Grade */}
          <div className="flex items-center gap-1 bg-[#ede4d8] p-1 rounded-xl shrink-0 self-end sm:self-auto border border-[#ded2c3]">
            <button
              type="button"
              onClick={() => {
                sounds.playClick();
                setViewMode('rows');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                viewMode === 'rows'
                  ? 'bg-white text-[#8b3a1a] shadow-xs'
                  : 'text-[#6c584c] hover:text-[#2d1c14]'
              }`}
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span>Linhas</span>
            </button>
            <button
              type="button"
              onClick={() => {
                sounds.playClick();
                setViewMode('grid');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-[#8b3a1a] shadow-xs'
                  : 'text-[#6c584c] hover:text-[#2d1c14]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grade</span>
            </button>
          </div>
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-white rounded-2xl border border-[#ded2c3] p-8 max-w-md mx-auto">
            <div className="w-14 h-14 rounded-full bg-[#f5ede3] flex items-center justify-center text-[#8b3a1a] mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg text-[#2d1c14]">
              Nenhum prato encontrado
            </h3>
            <p className="text-xs sm:text-sm text-[#7a6456]">
              Não encontramos resultados para sua busca. Tente buscar por ingredientes como "carne", "queijo", "camarão" ou "mandioca".
            </p>
            <button
              type="button"
              onClick={() => {
                sounds.playClick();
                setSearchQuery('');
                setActiveCategory(null);
              }}
              className="px-4 py-2 bg-gradient-to-r from-amber-600 to-[#8b3a1a] text-white text-xs font-bold rounded-lg hover:from-amber-500 hover:to-[#702d13] transition-colors cursor-pointer"
            >
              Limpar Filtros e Ver Tudo
            </button>
          </div>
        ) : (
          /* Render Categories & Compact Dish Rows */
          <div className="space-y-12">
            {categories.map((cat) => {
              const items = itemsByCategory.get(cat.id);
              if (!items || items.length === 0) return null;

              return (
                <section
                  key={cat.id}
                  id={`categoria-${cat.id}`}
                  className="scroll-mt-36 space-y-4"
                >
                  {/* Category Header */}
                  <div className="border-b border-[#e5dcd1] pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-1.5">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#8b3a1a] mb-0.5">
                        <span>{cat.shortName}</span>
                        <span aria-hidden="true">·</span>
                        <span>{items.length} opções</span>
                      </div>
                      <h2 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-[#2d1c14] tracking-tight">
                        {cat.name}
                      </h2>
                      {cat.description && (
                        <p className="text-xs text-[#6c584c] mt-0.5 max-w-2xl">
                          {cat.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Dishes: Organization in compact rows (default) or cards */}
                  {viewMode === 'rows' ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-3.5">
                      {items.map((item) => (
                        <DishRow
                          key={item.id}
                          item={item}
                          onSelectDish={(selected) => setSelectedDishForModal(selected)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {items.map((item) => (
                        <DishCard
                          key={item.id}
                          item={item}
                          onSelectDish={(selected) => setSelectedDishForModal(selected)}
                        />
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}
      </main>

      {/* Floating Mobile Cart Pill (cap <= 15% viewport height) */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-30 sm:hidden">
          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              setIsCartOpen(true);
            }}
            className="w-full flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-amber-600 via-[#9c421e] to-[#8b3a1a] text-white rounded-xl shadow-lg border border-amber-300/50 hover:scale-102 transition-all cursor-pointer font-bold text-sm"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span>Ver Comanda ({cartItemCount})</span>
            </div>
            <span className="font-mono tabular-nums font-black text-base">
              {formatBRL(cartTotal)}
            </span>
          </button>
        </div>
      )}

      {/* Notificações em Tempo Real do Google Reviews */}
      <GoogleReviewToast />

      {/* Botão de WhatsApp Neon Flutuante + Botão de iFood com Vídeo que acompanha o scroll */}
      <FloatingActions />

      {/* Customization / Add Modal */}
      <DishModal
        item={selectedDishForModal}
        onClose={() => setSelectedDishForModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Restaurant Information, Location, Hours & Amenities */}
      <RestaurantInfo />

      {/* Footer */}
      <Footer />
    </div>
  );
}
