import React from 'react';
import { MapPin, Phone, Clock, Compass, Navigation } from 'lucide-react';

export default function LocationSection() {
  
  const googleMapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Shri+The+Chat+House+Plot+No.+64+Raghavendra+Colony+Road+Suchitra+Aeronautic+Enclave+Quthbullapur+Hyderabad+Telangana+500067';

  return (
    <section id="location" className="py-20 md:py-28 bg-stone-50 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Content */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-1.5 bg-yellow-100 text-yellow-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Compass className="h-4 w-4" />
            <span>FIND YOUR WAY HERE</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Visit Our <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Chaat House</span>
          </h2>
          <p className="text-stone-500 font-medium text-sm sm:text-md">
            Located in the cozy Aeronautic Enclave near Suchitra Junction. Pop in for a fresh plate of piping hot samosas or chilled dahi puris!
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Map Embed */}
          <div className="lg:col-span-7 h-[350px] sm:h-[450px] lg:h-auto rounded-3xl overflow-hidden shadow-md border-4 border-white ring-1 ring-orange-100 flex">
            <iframe
              id="google-maps-embed-frame"
              title="Shri The Chat House Location Map"
              src="https://maps.google.com/maps?q=Shri%20The%20Chat%20House,%20Plot%2064,%20Raghavendra%20Colony%20Road,%20Suchitra,%20Hyderabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Column 2: Details & Actions */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-orange-100/40 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
                Business Information
              </h3>

              {/* Address details */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-red-50 text-red-600 rounded-xl mt-0.5 shrink-0 border border-red-100">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-stone-400 uppercase tracking-widest leading-none mb-1">Address</h4>
                  <p className="text-stone-700 text-xs sm:text-sm font-semibold leading-relaxed">
                    Plot No. 64, Raghavendra Colony Road, Suchitra, Aeronautic Enclave, Quthbullapur, Hyderabad, Telangana 500067, India
                  </p>
                </div>
              </div>

              {/* Phone details */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl mt-0.5 shrink-0 border border-orange-100">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-stone-400 uppercase tracking-widest leading-none mb-1">Phone Call</h4>
                  <p className="text-stone-800 text-sm sm:text-base font-extrabold">
                    +91 9963233899
                  </p>
                  <p className="text-[11px] text-stone-400 font-bold uppercase mt-0.5">Click to call anytime for phone parcel orders</p>
                </div>
              </div>

              {/* Clock/Hours details */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-yellow-50 text-yellow-600 rounded-xl mt-0.5 shrink-0 border border-yellow-100">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-stone-400 uppercase tracking-widest leading-none mb-1">Operating Hours</h4>
                  <p className="text-stone-800 text-sm sm:text-base font-extrabold">
                    11:30 AM – 10:30 PM
                  </p>
                  <p className="text-[11px] text-[#4ea34e] font-extrabold uppercase mt-0.5">Open every day including holidays</p>
                </div>
              </div>
            </div>

            {/* Actions button footer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-stone-100 shrink-0">
              <a
                id="location-directions-btn"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 text-white py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold shadow-md hover:shadow-lg transition-all text-center"
              >
                <Navigation className="h-4 w-4 fill-white" />
                <span>Get Directions</span>
              </a>
              <a
                id="location-call-btn"
                href="tel:+919963233899"
                className="flex items-center justify-center space-x-2 bg-stone-100 hover:bg-stone-200 text-stone-800 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all text-center"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
