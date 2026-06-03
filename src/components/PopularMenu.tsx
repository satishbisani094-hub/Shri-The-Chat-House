import React, { useState } from 'react';
import { Flame, PhoneCall, Sparkles, TrendingUp, ShoppingBag, Plus, Minus } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem, CartItem } from '../types';

interface PopularMenuProps {
  cartItems: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onUpdateQuantity: (itemId: string, newQty: number) => void;
}

export default function PopularMenu({ cartItems, onAddToCart, onUpdateQuantity }: PopularMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Chaat Specials', 'Snacks', 'Fast Food', 'Beverages'];

  const filteredItems = selectedCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  const getSpicySparks = (level?: number) => {
    if (!level || level === 0) return null;
    return (
      <div className="flex items-center space-x-0.5" title={`${level} Spice Level`}>
        {Array.from({ length: level }).map((_, i) => (
          <Flame key={i} className="h-3.5 w-3.5 text-red-600 fill-red-500 animate-pulse" />
        ))}
        <span className="text-[10px] text-red-700 font-bold uppercase ml-1">Spicy</span>
      </div>
    );
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-stone-50 select-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-1.5 bg-red-100 text-red-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="h-4 w-4" />
            <span>EXQUISITE MENU REVELATION</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Our Popular <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Street Delicacies</span>
          </h2>
          <p className="text-stone-500 font-medium text-sm sm:text-md max-w-xl mx-auto">
            Explore Hyderabad’s iconic street snacks and fast-food favorites. Every dish is fully vegetarian, hygienic, and burst-prepared for delicious cravings.
          </p>
        </div>

        {/* Filter Navigation Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              id={`menu-filter-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold tracking-wide transition-all duration-300 transform border ${selectedCategory === cat
                  ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-xl shadow-orange-500/10 border-red-600 -translate-y-0.5'
                  : 'bg-white text-stone-700 hover:text-red-600 hover:bg-orange-50/30 hover:-translate-y-0.5 border-stone-100'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const cartItem = cartItems.find((i) => i.menuItem.id === item.id);
            return (
              <div
                id={`menu-item-card-${item.id}`}
                key={item.id}
                className="bg-white rounded-3xl border border-orange-100/40 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col overflow-hidden max-w-sm mx-auto w-full group"
              >
                {/* Card Image and Absolute Badges */}
                <div className="relative h-56 w-full overflow-hidden shrink-0">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Visual Overlay gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent" />

                  {/* Popular / Best Seller ribbon */}
                  {item.isPopular && (
                    <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-md border-b-2 border-red-800 flex items-center space-x-1">
                      <Sparkles className="h-3 w-3 fill-white" />
                      <span>BEST SELLER</span>
                    </span>
                  )}

                  {/* Dynamic Price Badge */}
                  <span className="absolute bottom-4 right-4 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white text-xl font-extrabold px-3.5 py-1.5 rounded-xl shadow-lg ring-2 ring-yellow-400">
                    ₹{item.price}
                  </span>

                  {/* Veg Indicator Logo */}
                  <span className="absolute top-4 right-4 bg-white/95 p-1.5 rounded-lg shadow-md border border-stone-200">
                    <span className="block border-2 border-green-600 h-3 w-3 p-[1px] flex justify-center items-center">
                      <span className="block h-1.5 w-1.5 rounded-full bg-green-600" />
                    </span>
                  </span>
                </div>

                {/* Card Body Details */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-lg text-stone-900 group-hover:text-red-500 transition-colors">
                        {item.name}
                      </h3>
                      {item.spicyLevel !== undefined && getSpicySparks(item.spicyLevel)}
                    </div>

                    <p className="text-xs text-stone-500 font-semibold leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Order / Add to Cart Actions */}
                  <div className="pt-2 border-t border-stone-100 flex items-center gap-2">
                    {cartItem ? (
                      <div className="flex-grow flex items-center justify-between bg-orange-50/70 border border-orange-200 rounded-xl px-2 py-1">
                        <button
                          onClick={() => onUpdateQuantity(item.id, cartItem.quantity - 1)}
                          className="p-1.5 rounded-lg text-orange-650 hover:bg-orange-100 transition-colors font-black"
                          title="Decrease Quantity"
                        >
                          <Minus className="h-3.5 w-3.5 stroke-[3]" />
                        </button>
                        <span className="text-xs font-black text-orange-950">
                          {cartItem.quantity} in Cart
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, cartItem.quantity + 1)}
                          className="p-1.5 rounded-lg text-orange-650 hover:bg-orange-100 transition-colors font-black"
                          title="Increase Quantity"
                        >
                          <Plus className="h-3.5 w-3.5 stroke-[3]" />
                        </button>
                      </div>
                    ) : (
                      <button
                        id={`menu-add-to-cart-btn-${item.id}`}
                        onClick={() => onAddToCart(item)}
                        className="flex-grow flex items-center justify-center space-x-1.5 bg-gradient-to-r from-red-650 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white py-2.5 rounded-xl text-xs font-black shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    )}
                    <a
                      id={`menu-call-now-btn-${item.id}`}
                      href="tel:+919963233899"
                      className="px-3.5 bg-stone-100 hover:bg-stone-200 text-stone-700 py-2.5 rounded-xl text-xs font-bold shadow-sm flex items-center justify-center transition-colors border border-stone-200 shrink-0"
                      title="Call Now to Order"
                    >
                      <PhoneCall className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
