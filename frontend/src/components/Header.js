import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-light tracking-wide text-black hover:opacity-70 transition-opacity duration-300"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            still.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className={`text-sm font-light tracking-wide transition-all duration-300 hover:opacity-70 ${
                isActive('/about') ? 'text-black opacity-100' : 'text-gray-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/shop"
              className={`text-sm font-light tracking-wide transition-all duration-300 hover:opacity-70 ${
                isActive('/shop') ? 'text-black opacity-100' : 'text-gray-600'
              }`}
            >
              Shop
            </Link>
            <Link
              to="/lookbook"
              className={`text-sm font-light tracking-wide transition-all duration-300 hover:opacity-70 ${
                isActive('/lookbook') ? 'text-black opacity-100' : 'text-gray-600'
              }`}
            >
              Lookbook
            </Link>
            <Link
              to="/journal"
              className={`text-sm font-light tracking-wide transition-all duration-300 hover:opacity-70 ${
                isActive('/journal') ? 'text-black opacity-100' : 'text-gray-600'
              }`}
            >
              Journal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black hover:opacity-70 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-100">
            <div className="px-6 py-4 space-y-4">
              <Link
                to="/about"
                className="block text-sm font-light tracking-wide text-gray-600 hover:text-black transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/shop"
                className="block text-sm font-light tracking-wide text-gray-600 hover:text-black transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/lookbook"
                className="block text-sm font-light tracking-wide text-gray-600 hover:text-black transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lookbook
              </Link>
              <Link
                to="/journal"
                className="block text-sm font-light tracking-wide text-gray-600 hover:text-black transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Journal
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;