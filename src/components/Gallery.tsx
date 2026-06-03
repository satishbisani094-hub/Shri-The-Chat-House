import React, { useState } from 'react';
import { Camera, ZoomIn, X, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Group */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-1.5 bg-orange-100 text-orange-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Camera className="h-4 w-4" />
            <span>VISUAL CULINARY SHOWCASE</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Vlimpses of <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Shri The Chat House</span>
          </h2>
          <p className="text-stone-500 font-medium text-sm sm:text-md">
            Gaze upon our freshly prepared pani puris, colorful dahi puris, hand-made samosas, and high-standard hygienic food preparation environment.
          </p>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              id={`gallery-item-${item.id}`}
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 border border-stone-100/60"
            >
              {/* Actual Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Black Gradient Hover Mask */}
              <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/50 transition-colors duration-300 flex flex-col justify-end p-6" />

              {/* Text metadata appearing on hover */}
              <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between text-white z-10">
                <div className="text-left">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-yellow-300 bg-yellow-500/20 px-2.5 py-1 rounded-full border border-yellow-400/30">
                    {item.category}
                  </span>
                  <h3 className="font-extrabold text-sm sm:text-md mt-2 text-stone-100 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="bg-white/10 hover:bg-white/25 border border-white/20 p-2.5 rounded-xl backdrop-blur-md shrink-0">
                  <ZoomIn className="h-4.5 w-4.5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Zoom Overlay Popup */}
        {activePhoto && (
          <div
            id="gallery-lightbox-overlay"
            className="fixed inset-0 bg-stone-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                id="lightbox-close-btn"
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 bg-stone-950/70 border border-stone-800 text-stone-200 hover:text-white p-2.5 rounded-full z-10 hover:scale-105 transition-transform focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Popup Core Content */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-8 flex justify-center items-center bg-stone-950 relative h-[60vh] md:h-[70vh]">
                  <img
                    src={activePhoto.imageUrl}
                    alt={activePhoto.title}
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:col-span-4 p-8 text-white flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block bg-orange-500 text-white font-extrabold text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-lg">
                      {activePhoto.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-stone-50 leading-tight">
                      {activePhoto.title}
                    </h3>
                    <p className="text-xs text-stone-400 font-medium leading-relaxed">
                      This picture captures the core soul of our street cuisine. We cook in small, frequent batches daily to offer maximum crunchiness and authentic Hyderabad aromas.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-stone-800 space-y-2">
                    <div className="flex items-center space-x-2 text-stone-300">
                      <Info className="h-4 w-4 text-orange-400" />
                      <span className="text-xs font-bold uppercase tracking-wider">Pure RO Prep Line</span>
                    </div>
                    <p className="text-[11px] text-stone-500 font-semibold leading-tight">
                      Shri The Chat House, Plots No 64, Suchitra Enclave, Hyderabad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
