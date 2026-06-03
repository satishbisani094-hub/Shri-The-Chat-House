import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {

  const text = encodeURIComponent('Hello Shri The Chat House! I am looking at your online promotional website and would love to ask about availability / catering packages.');
  const waLink = `https://wa.me/919963233899?text=${text}`;

  return (
    <a
      id="whatsapp-floating-action-button"
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group ring-4 ring-green-150 animate-bounce cursor-pointer"
      title="Chat on WhatsApp"
    >
      <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7 fill-white" />

      {/* Dynamic tooltip appearing on hover */}
      <span className="absolute right-14 bg-stone-900 text-white text-[10px] font-extrabold tracking-wider uppercase py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-stone-800 pointer-events-none shadow-md">
        WhatsApp Order Chat
      </span>
    </a>
  );
}
