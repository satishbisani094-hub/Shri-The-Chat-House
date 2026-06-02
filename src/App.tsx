/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import PopularMenu from './components/PopularMenu';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerReviews from './components/CustomerReviews';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import { Utensils, Flame } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Selecting fresh ingredients...');
  const [activeSection, setActiveSection] = useState('hero');

  // Loading text rotation sequence
  useEffect(() => {
    const texts = [
      'Selecting fresh ingredients...',
      'Muddling cool mint-coriander water...',
      'Puffing golden crispy puris...',
      'Tossing rich work-fired noodles...',
      'Brewing fragrant hot ginger tea...',
      'Sanitizing counters for maximum hygiene...'
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setLoadingText(texts[index]);
    }, 700);

    const timer = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  // Intersection Observer for highlighting Navbar items relative to scrolling viewport
  useEffect(() => {
    if (isLoading) return;

    const sections = ['hero', 'about', 'menu', 'why-us', 'reviews', 'gallery', 'location', 'contact'];
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          rootMargin: '-30% 0px -50% 0px', // Trigger when section occupies the sweet middle spot
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, [isLoading]);

  // Smooth scroll click handler
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80; // Navbar offset height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-stone-950 flex flex-col items-center justify-center text-center z-50 p-4">
        <div className="relative flex flex-col items-center justify-center space-y-6 select-none animate-fade-in">
          {/* Pulsing Loading Logo Wrapper */}
          <div className="bg-gradient-to-tr from-red-600 via-orange-500 to-amber-500 p-5 rounded-3xl shadow-2xl relative animate-pulse ring-4 ring-yellow-400">
            <Utensils className="h-10 w-10 text-white" />
            <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1 border border-stone-950 animate-bounce">
              <Flame className="h-4 w-4 text-red-600 fill-red-500" />
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-white tracking-tight leading-none">
              <span className="text-red-500">Shri</span> <span className="text-orange-500">The</span> <span className="text-amber-400">Chat House</span>
            </h1>
            <p className="text-[10px] text-stone-500 font-extrabold uppercase tracking-widest mt-1">
              Hygiene & Taste Standard First
            </p>
          </div>

          <div className="w-48 h-1 bg-stone-800 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-650 via-orange-500 to-yellow-400 animate-[loading-bar_2.8s_ease-in-out_infinite] w-1/3 rounded-full" />
          </div>

          <p className="text-xs text-stone-400 font-bold italic animate-pulse h-4">
            {loadingText}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="application-root" className="min-h-screen bg-white text-stone-900 overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* Dynamic Sticky Header Navigation */}
      <Header onNavClick={handleScrollToSection} activeSection={activeSection} />

      {/* Main Page Content Sections layout */}
      <main className="w-full">
        {/* 1. Hero Cover */}
        <Hero onViewMenuClick={() => handleScrollToSection('menu')} />

        {/* 2. Brand Story / About section */}
        <AboutUs />

        {/* 3. Popular Food Menu Item Cards filter list */}
        <PopularMenu />

        {/* 4. Why Food Lovers Choose us cards */}
        <WhyChooseUs />

        {/* 5. Authentic Customer Reviews */}
        <CustomerReviews />

        {/* 6. Curated Image Gallery lightbox section */}
        <Gallery />

        {/* 7. Interactive Location map and schedule contact directions */}
        <LocationSection />

        {/* 8. Direct Inquiry Contact form and responsive Admin Inbox toggler */}
        <ContactSection />
      </main>

      {/* 9. Footing Details */}
      <Footer onNavClick={handleScrollToSection} />

      {/* Floating Action Elements */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

