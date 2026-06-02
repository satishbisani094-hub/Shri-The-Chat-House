import React from 'react';
import { Star, MessageSquareCode, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-stone-50 overflow-hidden scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-1.5 bg-red-100 text-red-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <MessageSquareCode className="h-4 w-4" />
            <span>CUSTOMER EXPERIENCE Vows</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Loved By <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Hyderabad Foodies</span>
          </h2>
          <p className="text-stone-500 font-medium text-sm sm:text-md">
            Don’t just take our word for it—read the authentic reviews from our valuable guests around Suchitra, Hyderabad.
          </p>
        </div>

        {/* Testimonial Cards Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              id={`review-card-${review.id}`}
              key={review.id}
              className="bg-white rounded-3xl p-8 border border-orange-100/30 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between overflow-hidden group"
            >
              {/* Giant decorative icon */}
              <div className="absolute -top-1 -right-1 text-orange-100/40 group-hover:text-orange-100/60 transition-colors pointer-events-none">
                <Quote className="h-20 w-20 fill-current opacity-80" />
              </div>

              {/* Main review section */}
              <div className="space-y-4 relative z-10">
                {/* 5-Star Row */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-stone-700 text-xs sm:text-sm font-semibold italic leading-relaxed">
                  "{review.description}"
                </p>
              </div>

              {/* User Signatures footer */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center space-x-4 relative z-10 shrink-0">
                {/* Custom Avatar Circular Symbol */}
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-tr from-red-500 via-orange-500 to-yellow-400 text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                  {review.avatarInitials}
                </div>
                
                <div className="text-left">
                  <h4 className="font-extrabold text-sm text-stone-900 leading-tight">
                    {review.author}
                  </h4>
                  <div className="flex items-center space-x-2 mt-0.5">
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">{review.role}</span>
                    <span className="text-[10px] text-stone-300">•</span>
                    <span className="text-[10px] text-stone-400 font-semibold">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
