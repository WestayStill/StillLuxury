import React, { useState, useEffect } from 'react';
import { mockAbout } from '../mockData';

const About = () => {
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
              About
            </h1>
            <p 
              className={`text-xl md:text-2xl font-light text-stone-600 leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {mockAbout.philosophy}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 
                  className="text-4xl md:text-5xl font-light text-stone-800 mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Our Mission
                </h2>
                <p className="text-stone-600 leading-relaxed mb-8">
                  {mockAbout.mission}
                </p>
              </div>
              <div className="bg-stone-50 p-8">
                <h3 className="text-2xl font-light text-stone-800 mb-6">
                  We Believe In
                </h3>
                <ul className="space-y-4">
                  {mockAbout.values.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-stone-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      <span className="text-stone-600">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="aspect-[3/4] bg-stone-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1601926299866-6a5c9bfa6be0"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[3/4] bg-stone-200 overflow-hidden md:mt-8">
                <img
                  src="https://images.unsplash.com/photo-1590739169125-a9438401596a"
                  alt="Materials"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[3/4] bg-stone-200 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg"
                  alt="Philosophy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;