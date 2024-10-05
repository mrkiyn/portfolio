import React, { useEffect, useRef, useState } from 'react';

function Quote() {
  const quoteRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFadedIn, setHasFadedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = quoteRef.current.getBoundingClientRect().top;
      const isVisible = top < window.innerHeight - 100; // Adjust as needed

      if (isVisible && !hasFadedIn) {
        setIsVisible(true);
        setHasFadedIn(true); // Set to true to prevent further fading
        window.removeEventListener('scroll', handleScroll); // Remove listener after fade-in
      }
    };

    // Check initial screen width
    if (window.innerWidth > 1024) {
      window.addEventListener('scroll', handleScroll);
      // Initial check when component mounts
      handleScroll();

      // Clean up the event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setIsVisible(true); // Ensure content is statically visible if screen width <= 1024
    }
  }, [hasFadedIn]);

  return (
    <div
      id="quote" ref={quoteRef}
      className={`w-full flex justify-center py-5 lg:py-24 bg-castleton`}
    >
      <div className="lg:px-20 xl:px-32 2xl:px-64 px-7">
        <p className= {`text-sm lg:text-6xl font-black text-center fade-in ${isVisible ? 'is-visible' : ''}`}>
          <span className="bg-gradient-to-r from-mainbg to-emerald text-transparent bg-clip-text">
            "Each line of code is a stride toward success; stay driven, stay dedicated, and conquer the digital realm."
          </span>
        </p>
      </div>
    </div>
  );
}

export default Quote;
