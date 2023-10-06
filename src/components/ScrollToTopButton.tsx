import { useState, useEffect } from 'react';


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add an event listener to track scroll position
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check if the user has scrolled down a certain amount (e.g., 100 pixels)
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <svg className='fill-white hover:fill-[#00a8f3] hover:bg-white hover:w-12 hover:h-10 hover:border hover:border-[#00a8f3] rounded-full' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>
    </div>
  );
};

export default ScrollToTopButton;
