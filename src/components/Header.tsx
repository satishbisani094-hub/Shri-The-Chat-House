import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils, Phone, Play } from 'lucide-react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'menu', label: 'Popular Menu' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'location', label: 'Location' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleItemClick = (sectionId: string) => {
    onNavClick(sectionId);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md py-3 border-b border-orange-100'
          : 'bg-white/95 backdrop-blur-md md:bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleItemClick('hero')}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="bg-gradient-to-tr from-red-600 to-orange-500 text-white p-2 rounded-xl shadow-lg ring-2 ring-yellow-300 transition-transform group-hover:scale-105">
              <Utensils className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-xl md:text-2xl tracking-tight block">
                <span className="text-red-600">Shri</span>{' '}
                <span className="text-orange-500">The</span>{' '}
                <span className="text-amber-500">Chat House</span>
              </span>
              <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-[#ce3426] block -mt-1">
                Authentic Hyderabad Street Food
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  id={`nav-item-desktop-${item.id}`}
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${isActive
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-500 hover:bg-orange-50/55'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              id="header-call-btn"
              href="tel:+919963233899"
              className="flex items-center space-x-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 hover:from-red-700 hover:to-orange-600 text-white px-4 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-red-600 hover:bg-orange-50 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay and Menu */}
      {isOpen && (
        <div id="mobile-nav-panel" className="lg:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-b border-orange-100 shadow-xl max-h-[85vh] overflow-y-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  id={`nav-item-mobile-${item.id}`}
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all ${isActive
                      ? 'bg-gradient-to-r from-red-50 to-orange-50 text-red-600 border-l-4 border-red-600'
                      : 'text-gray-700 hover:bg-orange-50/40 hover:text-red-500'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 pb-2 px-4 border-t border-gray-100 flex flex-col space-y-2.5">
              <a
                id="header-call-btn-mobile"
                href="tel:+919963233899"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-xl text-md font-bold shadow-md"
              >
                <Phone className="h-5 w-5" />
                <span>Call +91 9963233899</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
