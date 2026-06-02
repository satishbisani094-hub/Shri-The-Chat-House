import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="scroll-to-top-button"
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 bg-white/90 hover:bg-white text-stone-800 p-3 sm:p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-stone-200/80 backdrop-blur-md flex items-center justify-center cursor-pointer"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
    </button>
  );
}
