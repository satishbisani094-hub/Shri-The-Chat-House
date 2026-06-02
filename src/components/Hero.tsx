import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, Star, Heart, Leaf } from 'lucide-react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onViewMenuClick: () => void;
}

export default function Hero({ onViewMenuClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-stone-900"
    >
      {/* Background Graphic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Shri The Chat House Food Platter"
          className="w-full h-full object-cover object-center scale-105 filter brightness-45 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Colorful Gradient Vignette for warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/40" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        <div className="max-w-3xl mx-auto">
          {/* Pure Vegetarian & Rating Tags */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
            <span className="inline-flex items-center space-x-1.5 bg-green-500/90 text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg shadow-green-500/20 backdrop-blur-md">
              <Leaf className="h-3.5 w-3.5 fill-white" />
              <span>100% Pure Vegetarian</span>
            </span>
            <span className="inline-flex items-center space-x-1 bg-amber-500/90 text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg shadow-amber-500/20 backdrop-blur-md">
              <Star className="h-3.5 w-3.5 fill-white text-white" />
              <span>Top Rated in Suchitra</span>
            </span>
          </div>

          {/* Core Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none mb-6">
            <span className="text-red-500 block sm:inline drop-shadow-[0_2px_10px_rgba(239,68,68,0.4)]">
              Shri
            </span>{' '}
            <span className="text-orange-500 block sm:inline drop-shadow-[0_2px_10px_rgba(249,115,22,0.4)]">
              The
            </span>{' '}
            <span className="text-yellow-400 block sm:inline drop-shadow-[0_2px_10px_rgba(234,179,8,0.4)]">
              Chat House
            </span>
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-stone-200 font-medium tracking-wide leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-md">
            "Taste the Authentic Flavors of Hyderabad's Favorite Chat Destination"
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              id="hero-call-now-btn"
              href="tel:+919963233899"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white rounded-xl font-extrabold text-md shadow-xl hover:shadow-orange-500/25 transition-all transform hover:-translate-y-1 hover:scale-[1.02] flex items-center justify-center space-x-2.5 group"
            >
              <Phone className="h-5 w-5 animate-pulse" />
              <span>Call Now to Order</span>
            </a>
            <button
              id="hero-view-menu-btn"
              onClick={onViewMenuClick}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/80 rounded-xl font-extrabold text-md transition-all transform hover:-translate-y-1 backdrop-blur-md flex items-center justify-center space-x-2"
            >
              <span>View Authentic Menu</span>
              <ArrowRight className="h-5 w-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Food Specialties Scroll Indicator */}
          <div className="mt-16 pt-8 border-t border-white/10 max-w-md mx-auto">
            <span className="text-stone-300 font-bold uppercase tracking-widest text-[10px]">
              Signature Varieties
            </span>
            <div className="flex justify-center items-center gap-1.5 flex-wrap mt-2.5">
              {['Pani Puri', 'Dahi Puri', 'Ragada Chaat', 'Samosa', 'Veg Manchuria', 'Fresh Ginger Chai'].map((item, idx) => (
                <div key={idx} className="flex items-center text-xs text-yellow-300/90 font-medium tracking-wide">
                  <span>{item}</span>
                  {idx < 5 && <span className="mx-2 text-stone-600">•</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Curved Divider at bottom for seamless flow to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[30px] md:h-[60px] fill-white"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,13.24V0Z" />
        </svg>
      </div>
    </section>
  );
}
