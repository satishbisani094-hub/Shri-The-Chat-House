import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, ShieldCheck, Heart } from 'lucide-react';
import { HYGIENIC_PREP_IMAGE } from '../data';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Story Representation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-1.5 bg-orange-50 text-orange-600 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-orange-500 animate-pulse" />
              <span>HYDERABAD'S FAVORITE SPOT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
              Crafting Happiness, <br />
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">One Purii at a Time!</span>
            </h2>

            {/* Official about text supplied by user request */}
            <p className="text-md sm:text-lg text-stone-600 font-medium leading-relaxed">
              Welcome to <span className="font-bold text-red-600">Shri The Chat House</span>, one of Hyderabad's favorite destinations for mouth-watering street food and authentic chat varieties. We are passionate about serving fresh, hygienic, and delicious snacks prepared with quality ingredients. From spicy pani puri to crispy samosas and special chat combinations, every dish is crafted to deliver unforgettable flavors and a delightful dining experience.
            </p>

            {/* Core commitments highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-orange-50/50 border border-orange-100/60 transition-transform hover:scale-[1.01]">
                <div className="p-2 sm:p-2.5 bg-orange-500 text-white rounded-lg shadow-md shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-stone-950">Hygiene Checked</h3>
                  <p className="text-xs text-stone-500 font-semibold mt-0.5">RO Purified water, gloves, and daily sanitized fryers.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-4 rounded-xl bg-amber-50/50 border border-amber-100/60 transition-transform hover:scale-[1.01]">
                <div className="p-2 sm:p-2.5 bg-amber-500 text-white rounded-lg shadow-md shrink-0">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-stone-950">Pure Authentic Spice</h3>
                  <p className="text-xs text-stone-500 font-semibold mt-0.5">Unique mint-coriander and sweet date chat blends.</p>
                </div>
              </div>
            </div>

            {/* Visual Callout */}
            <blockquote className="border-l-4 border-red-500 pl-4 py-1.5 italic text-sm text-stone-500 font-semibold bg-stone-50/80 rounded-r-lg">
              "Nothing matches the satisfaction of watching fresh spiced water splash inside a crispy puri, ready to be gulped down in one pure bite."
            </blockquote>
          </div>

          {/* Right Column: Dynamic Visual Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">

              {/* Main Image Framing */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-8 ring-stone-100 transition-transform hover:rotate-1 duration-300">
                <img
                  src={HYGIENIC_PREP_IMAGE}
                  alt="Hygienic prep counter of Shri The Chat House"
                  className="w-full h-auto object-cover object-center aspect-[4/3] sm:aspect-square lg:aspect-[4/5] scale-102"
                  referrerPolicy="no-referrer"
                />

                {/* Image Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#ffd324]">Our Kitchen Vow</p>
                  <h4 className="text-lg font-bold mt-1">Fresh ingredients & pure RO drinking water prepare every bite.</h4>
                </div>
              </div>

              {/* Decorative Absolute Badges */}
              <div className="absolute -top-5 -right-5 bg-gradient-to-br from-red-600 to-orange-500 text-white py-3.5 px-4.5 rounded-2xl shadow-xl transform rotate-6 border-2 border-white flex flex-col items-center">
                <span className="text-3xl font-extrabold tracking-tight">100%</span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-yellow-200 mt-0.5">Veg Recipes</span>
              </div>

              <div className="absolute -bottom-5 -left-5 bg-stone-900 text-white p-3.5 rounded-2xl shadow-xl flex items-center space-x-2.5 max-w-[200px] border border-stone-800">
                <div className="bg-red-500 p-1.5 rounded-lg">
                  <Heart className="h-4 w-4 text-white fill-white animate-pulse" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-stone-400 font-bold uppercase">Served with</p>
                  <p className="text-xs font-extrabold text-white leading-tight">Love & Hygiene</p>
                </div>
              </div>

              {/* Background abstract colorful blobs for visual energy */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-tr from-orange-400/10 to-yellow-400/10 filter blur-3xl opacity-80" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
