import React, { useState } from 'react';
import { mockQuote } from '../mockData';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-stone-50 to-stone-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="container mx-auto px-6 pt-20 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-5xl md:text-6xl font-light mb-6 text-stone-800 animate-fade-in"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Stay Connected
            </h2>
            <p className="text-xl font-light text-stone-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Join our community for thoughtful updates on new collections, stories, and moments of quiet inspiration.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/80 backdrop-blur-sm border border-stone-200 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 transition-all duration-500 text-stone-700 placeholder-stone-400 rounded-lg shadow-sm hover:shadow-md"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-stone-800 text-white font-light tracking-wide hover:bg-stone-700 transition-all duration-500 whitespace-nowrap rounded-lg transform hover:scale-105 hover:shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-gradient-to-r from-stone-700 to-stone-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </form>
            
            {isSubscribed && (
              <p className="text-stone-600 text-sm animate-fade-in bg-green-50 border border-green-200 rounded-lg px-4 py-2 inline-block">
                Thank you for joining our community. Welcome to Still.
              </p>
            )}
          </div>
        </div>

        {/* Quote Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <blockquote 
              className="text-3xl md:text-4xl font-light text-stone-700 leading-relaxed mb-8 transform hover:scale-105 transition-transform duration-700"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {mockQuote}
            </blockquote>
            <div className="w-16 h-px bg-stone-400 mx-auto"></div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-stone-200/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <h3 
                  className="text-3xl font-light text-stone-800 mb-4 transform hover:scale-105 transition-transform duration-500"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  still.
                </h3>
                <p className="text-stone-600 leading-relaxed max-w-md">
                  Creating timeless pieces for those who understand that true luxury is found in simplicity, that beauty lies in the essential.
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-light text-stone-800 mb-4 tracking-wide">
                  Explore
                </h4>
                <ul className="space-y-3">
                  {['About', 'Shop', 'Lookbook', 'Journal'].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => {
                          const element = document.getElementById(item.toLowerCase());
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-stone-600 hover:text-stone-800 transition-all duration-300 transform hover:translate-x-2 block"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Connect */}
              <div>
                <h4 className="text-lg font-light text-stone-800 mb-4 tracking-wide">
                  Connect
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-600 hover:text-stone-800 transition-all duration-300 transform hover:translate-x-2 flex items-center group"
                    >
                      <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        const element = document.querySelector('input[type="email"]');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                          element.focus();
                        }
                      }}
                      className="text-stone-600 hover:text-stone-800 transition-all duration-300 transform hover:translate-x-2 flex items-center group"
                    >
                      <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Newsletter
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200/50">
              <div className="text-stone-500 text-sm mb-4 md:mb-0">
                © 2024 Still. All rights reserved. Crafted with intention.
              </div>
              
              <div className="flex items-center space-x-6">
                <button
                  onClick={scrollToTop}
                  className="text-stone-600 hover:text-stone-800 transition-all duration-300 transform hover:scale-110 flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                  Back to Top
                </button>
                
                <div className="text-stone-400 text-xs">
                  Made with ❤️ by Emergent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;