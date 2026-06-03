import React from 'react';
import { Utensils, ShieldCheck, Sparkles, IndianRupee, Clock, Users, Flame } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {

  // Custom helper mapping icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="h-6 w-6 text-red-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6 text-red-600" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-red-600" />;
      case 'IndianRupee':
        return <IndianRupee className="h-6 w-6 text-red-600" />;
      case 'Clock':
        return <Clock className="h-6 w-6 text-red-600" />;
      case 'Users':
        return <Users className="h-6 w-6 text-red-600" />;
      default:
        return <Flame className="h-6 w-6 text-red-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white border-t border-b border-orange-50/50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Content */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center space-x-1.5 bg-yellow-100 text-yellow-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>OUR CULINARY PROMISE</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Why Food Lovers Choose <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Shri The Chat House</span>
          </h2>
          <p className="text-stone-500 font-medium text-sm sm:text-md">
            We don’t just serve fast food; we recreate hygienic, traditional street food experiences with an uncompromising commitment to flavor.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              id={`wcu-item-${item.id}`}
              key={item.id}
              className="relative p-8 rounded-3xl bg-orange-50/10 border border-orange-100/30 hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20 hover:border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Icon container */}
              <div className="h-12 w-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-6 group-hover:bg-gradient-to-tr group-hover:from-red-500 group-hover:to-orange-400">
                <span className="group-hover:text-white transition-colors">
                  {getIcon(item.icon)}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-500 text-xs sm:text-sm font-semibold leading-relaxed">
                {item.description}
              </p>

              {/* Highlight ribbon accent */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-red-500 to-orange-400 transform scale-x-0 group-hover:scale-x-105 transition-transform duration-300 rounded-t-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
