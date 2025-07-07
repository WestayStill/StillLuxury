import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/32862200/pexels-photo-32862200.jpeg"
          alt="Still Fashion Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 
          className={`text-8xl md:text-9xl font-light text-white mb-8 transition-all duration-2000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          still.
        </h1>
        
        <p 
          className={`text-lg md:text-xl font-light text-white/90 max-w-md mx-auto leading-relaxed transition-all duration-2000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Timeless pieces for quiet moments
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-xs font-light mb-2 tracking-wider">SCROLL</span>
          <div className="w-px h-8 bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;