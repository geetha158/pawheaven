// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top on route change
    window.scrollTo(0, 0);
  }, [location]); // This hook will run every time the route changes

  return null; // This component doesn't need to render anything
};

export default ScrollToTop;