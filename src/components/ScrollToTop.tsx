import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
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

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 
            rounded-full shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 z-50
            backdrop-blur-sm group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
        </button>
      )}
    </>
  );
}