import React, { useState, useEffect } from 'react';
import { mockLookbook } from '../mockData';

const Lookbook = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className={`text-6xl md:text-7xl font-light text-stone-800 mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Lookbook
            </h1>
            <p 
              className={`text-xl font-light text-stone-600 leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Visual stories of quiet elegance
            </p>
          </div>
        </div>
      </section>

      {/* Lookbook Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {mockLookbook.map((item, index) => (
              <div 
                key={item.id}
                className={`grid md:grid-cols-2 gap-16 items-center mb-24 ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="aspect-[4/5] bg-stone-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="max-w-md">
                    <div className="text-sm font-light text-stone-500 mb-2 tracking-wide">
                      {item.season}
                    </div>
                    <h2 
                      className="text-4xl md:text-5xl font-light text-stone-800 mb-6"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.title}
                    </h2>
                    <p className="text-stone-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-4xl md:text-5xl font-light text-stone-800 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Discover The Collection
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8">
              Each piece tells a story of mindful design and timeless elegance.
            </p>
            <button className="bg-stone-800 text-white px-8 py-3 font-light tracking-wide hover:bg-stone-700 transition-colors duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lookbook;