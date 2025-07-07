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

  return (
    <footer className="bg-stone-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-light mb-6 text-stone-800"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Stay Connected
          </h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Join our community for updates on new collections, stories, and quiet moments.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white border border-stone-200 focus:border-stone-400 focus:outline-none transition-colors duration-300 text-stone-700 placeholder-stone-400"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-stone-800 text-white font-light tracking-wide hover:bg-stone-700 transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          {isSubscribed && (
            <p className="text-stone-600 mt-4 text-sm">Thank you for subscribing to our newsletter.</p>
          )}
        </div>

        {/* Quote Section */}
        <div className="text-center mb-16">
          <blockquote 
            className="text-xl md:text-2xl font-light text-stone-700 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {mockQuote}
          </blockquote>
        </div>

        {/* Footer Links */}
        <div className="border-t border-stone-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 
                className="text-2xl font-light text-stone-800"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                still.
              </h3>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 hover:text-stone-800 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <div className="text-stone-400 text-xs">
                © 2024 still. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;