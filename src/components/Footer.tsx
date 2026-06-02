import React from 'react';
import { Utensils, Instagram, Facebook, Phone, MapPin, ExternalLink, ArrowUpCircle } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com' },
    { label: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com' }
  ];

  const quickLinks = [
    { id: 'hero', label: 'Home Page' },
    { id: 'about', label: 'Culinary Story' },
    { id: 'menu', label: 'Popular Menu' },
    { id: 'why-us', label: 'Our Promises' },
    { id: 'reviews', label: 'Guest Reviews' },
    { id: 'gallery', label: 'Photo Stream' },
    { id: 'location', label: 'Find Us' },
    { id: 'contact', label: 'Inquiries' }
  ];

  return (
    <footer id="footer-section" className="bg-stone-950 text-stone-300 pt-16 pb-8 border-t border-stone-900 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-stone-900">
          
          {/* Logo & Info Brief (4 cols) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <button
              onClick={() => onNavClick('hero')}
              className="flex items-center space-x-2 group focus:outline-none"
            >
              <div className="bg-gradient-to-tr from-red-650 to-orange-550 text-white p-2 rounded-xl shadow-md">
                <Utensils className="h-5 w-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                <span className="text-red-500">Shri</span> <span className="text-orange-500 font-bold">The</span> <span className="text-yellow-400">Chat House</span>
              </span>
            </button>
            
            <p className="text-xs sm:text-sm text-stone-400 font-semibold leading-relaxed">
              Serving the finest, crispiest, and most hygienic range of authentic Indian street foods, savory chaats, fast-food wonders, and hot ginger tea in Suchitra, Hyderabad.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-stone-900 hover:bg-gradient-to-tr hover:from-red-600 hover:to-orange-500 hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-stone-800 text-stone-400"
                  aria-label={`Follow us on ${soc.label}`}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h3 className="font-extrabold text-xs uppercase tracking-widest text-[#ffd324]">Quick Navigation</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="text-stone-400 hover:text-orange-400 font-semibold transition-colors flex items-center"
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h3 className="font-extrabold text-xs uppercase tracking-widest text-[#ffd324]">Contact Hub</h3>
            
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-stone-400 font-semibold leading-relaxed">
                  Shri The Chat House, Plot No. 64, Raghavendra Colony Road, Suchitra, Aeronautic Enclave, Quthbullapur, Hyderabad, Telangana 500067, India
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 shrink-0" />
                <a
                  href="tel:+919963233899"
                  className="font-extrabold text-stone-200 hover:text-orange-400 transition-colors"
                >
                  +91 9963233899
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-stone-500 font-semibold">
            © 2026 Shri The Chat House. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-2 text-stone-500 font-bold">
            <span>Prepared with extreme hygiene in Hyderabad</span>
            <span>•</span>
            <button
              onClick={() => onNavClick('hero')}
              className="hover:text-amber-400 transition-colors flex items-center space-x-1"
            >
              <span>Back to Top</span>
              <ArrowUpCircle className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
