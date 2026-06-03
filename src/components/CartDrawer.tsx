import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, ShoppingBag, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState<'Takeaway' | 'Dine-in' | 'Delivery'>('Takeaway');
  const [tableNumber, setTableNumber] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    let orderDetails = `*😋 Shri The Chat House - New Order*\n`;
    orderDetails += `-------------------------------------\n`;
    if (customerName.trim()) {
      orderDetails += `*Name:* ${customerName.trim()}\n`;
    }
    orderDetails += `*Type:* ${orderType}\n`;

    if (orderType === 'Dine-in' && tableNumber.trim()) {
      orderDetails += `*Table No:* ${tableNumber.trim()}\n`;
    } else if (orderType === 'Delivery' && address.trim()) {
      orderDetails += `*Delivery Address:* ${address.trim()}\n`;
    }

    if (notes.trim()) {
      orderDetails += `*Instructions:* ${notes.trim()}\n`;
    }
    orderDetails += `-------------------------------------\n`;
    orderDetails += `*Items Ordered:*\n`;

    cartItems.forEach((item, index) => {
      orderDetails += `${index + 1}. *${item.menuItem.name}* x ${item.quantity} = ₹${item.menuItem.price * item.quantity}\n`;
    });

    orderDetails += `-------------------------------------\n`;
    orderDetails += `*Total Amount:* ₹${subtotal}\n`;
    orderDetails += `-------------------------------------\n`;
    orderDetails += `_Order sent via Shri The Chat House Web Menu_`;

    const encodedText = encodeURIComponent(orderDetails);
    const whatsappLink = `https://wa.me/919963233899?text=${encodedText}`;
    
    // Open in a new tab
    window.open(whatsappLink, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark overlay backdrop */}
        <div 
          className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" 
          onClick={onClose}
        ></div>

        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          {/* Drawer container panel */}
          <div className="pointer-events-auto w-screen max-w-md transform transition-transform duration-300 ease-in-out">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-2xl border-l border-orange-100">
              
              {/* Header */}
              <div className="px-6 py-5 bg-gradient-to-r from-red-50 to-orange-50/50 border-b border-orange-150 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="bg-gradient-to-tr from-red-650 to-orange-500 text-white p-2 rounded-xl shadow-md">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-stone-900">Your Cart</h2>
                    <p className="text-[10px] text-stone-500 font-extrabold uppercase tracking-wide">
                      {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-xl p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
                  onClick={onClose}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 py-6 overflow-y-auto px-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-72 text-center space-y-4">
                    <div className="bg-stone-50 p-6 rounded-full border border-stone-100">
                      <ShoppingBag className="h-12 w-12 text-stone-300 stroke-[1.5]" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-extrabold text-stone-850">Your cart is empty</p>
                      <p className="text-xs text-stone-400 font-semibold max-w-xs">
                        Browse our delicious categories and add your favorite street food items to start your order.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      Browse Popular Menu
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Clear Cart Shortcut */}
                    <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                      <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">Cart Contents</span>
                      <button
                        onClick={onClearCart}
                        className="text-xs font-extrabold text-red-500 hover:text-red-700 transition-colors flex items-center space-x-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span>Clear All</span>
                      </button>
                    </div>

                    {/* Cart Items List */}
                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                      {cartItems.map((item) => (
                        <div 
                          key={item.menuItem.id} 
                          className="flex items-center space-x-4 p-3 bg-stone-50 rounded-2xl border border-stone-100 hover:border-orange-100 transition-colors"
                        >
                          <img 
                            src={item.menuItem.imageUrl} 
                            alt={item.menuItem.name} 
                            className="h-16 w-16 rounded-xl object-cover shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-extrabold text-stone-900 truncate">
                              {item.menuItem.name}
                            </h4>
                            <p className="text-xs text-stone-400 font-bold mt-0.5">
                              ₹{item.menuItem.price} each
                            </p>
                            <p className="text-xs text-orange-600 font-extrabold mt-1">
                              ₹{item.menuItem.price * item.quantity}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2.5 bg-white border border-stone-150 rounded-xl p-1 shrink-0">
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity - 1)}
                              className="p-1 rounded-lg text-stone-450 hover:bg-stone-50 transition-colors"
                              title="Decrease Quantity"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="text-xs font-black text-stone-850 w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                              className="p-1 rounded-lg text-stone-450 hover:bg-stone-50 transition-colors"
                              title="Increase Quantity"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Details Form */}
                    <div className="border-t border-stone-100 pt-5 space-y-4">
                      <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider block">Customer Details</span>
                      
                      {/* Name input */}
                      <div className="space-y-1">
                        <label className="block text-[11px] font-extrabold text-stone-500 uppercase">Your Name</label>
                        <input
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="Enter your name"
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4.5 py-2.5 text-sm font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Order Type Toggle */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-extrabold text-stone-500 uppercase">Order Type</label>
                        <div className="grid grid-cols-3 gap-2">
                          {(['Takeaway', 'Dine-in', 'Delivery'] as const).map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setOrderType(type)}
                              className={`py-2 rounded-xl text-xs font-extrabold transition-all border ${
                                orderType === type
                                  ? 'bg-orange-500 border-orange-500 text-white shadow-md'
                                  : 'bg-stone-50 border-stone-200 text-stone-650 hover:bg-stone-100/50'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Conditional input fields */}
                      {orderType === 'Dine-in' && (
                        <div className="space-y-1 animate-fade-in">
                          <label className="block text-[11px] font-extrabold text-stone-500 uppercase">Table Number</label>
                          <input
                            type="text"
                            value={tableNumber}
                            onChange={(e) => setTableNumber(e.target.value)}
                            placeholder="e.g. Table 4"
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4.5 py-2.5 text-sm font-semibold text-stone-850 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          />
                        </div>
                      )}

                      {orderType === 'Delivery' && (
                        <div className="space-y-1 animate-fade-in">
                          <label className="block text-[11px] font-extrabold text-stone-500 uppercase">Delivery Address</label>
                          <textarea
                            rows={2}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter full delivery address"
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4.5 py-2.5 text-sm font-semibold text-stone-850 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                          />
                        </div>
                      )}

                      {/* Custom instructions / notes */}
                      <div className="space-y-1">
                        <label className="block text-[11px] font-extrabold text-stone-500 uppercase">Special Notes (Optional)</label>
                        <input
                          type="text"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="e.g. Make it spicy, no onions"
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4.5 py-2.5 text-sm font-semibold text-stone-850 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Footer Checkout Panel */}
              {cartItems.length > 0 && (
                <div className="border-t border-stone-150 px-6 py-6 bg-stone-50 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-500">Items Subtotal</span>
                      <span className="text-sm font-bold text-stone-800">₹{subtotal}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-stone-200 pt-2">
                      <span className="text-sm font-black text-stone-850">Total Payable</span>
                      <span className="text-lg font-black text-orange-600">₹{subtotal}</span>
                    </div>
                  </div>

                  <button
                    onClick={handlePlaceOrder}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-755 text-white py-3 rounded-2xl font-black text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                  >
                    <MessageSquare className="h-4.5 w-4.5 fill-white" />
                    <span>Place Order via WhatsApp</span>
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
