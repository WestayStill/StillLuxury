import React, { useEffect, useRef } from 'react';

const ParallaxSection = ({ children, backgroundImage, speed = 0.5, className = '' }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const element = parallaxRef.current;
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Only apply parallax when element is in viewport
        if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
          const yPos = -(scrolled - elementTop) * speed;
          element.style.transform = `translateY(${yPos}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={parallaxRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;