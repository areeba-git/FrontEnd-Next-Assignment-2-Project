'use client';

import { useState, useEffect } from 'react';
import { FaPaw } from 'react-icons/fa';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToTop();
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2 animate-bounce"
          aria-label="Go to top of page"
          tabIndex="0"
        >
          <FaPaw className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default GoToTop;