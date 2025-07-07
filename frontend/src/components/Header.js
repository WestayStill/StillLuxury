import React, { useState, useEffect } from 'react';
import LoginModal from './LoginModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('stillUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'shop', 'lookbook', 'journal'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (section) => {
    return activeSection === section;
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('stillUser');
    setUser(null);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-light tracking-wide text-black hover:opacity-70 transition-all duration-500 transform hover:scale-105"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              still.
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-light tracking-wide transition-all duration-500 hover:opacity-70 transform hover:scale-105 ${
                  isActive('about') ? 'text-black opacity-100 border-b border-black' : 'text-gray-600'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('shop')}
                className={`text-sm font-light tracking-wide transition-all duration-500 hover:opacity-70 transform hover:scale-105 ${
                  isActive('shop') ? 'text-black opacity-100 border-b border-black' : 'text-gray-600'
                }`}
              >
                Shop
              </button>
              <button
                onClick={() => scrollToSection('lookbook')}
                className={`text-sm font-light tracking-wide transition-all duration-500 hover:opacity-70 transform hover:scale-105 ${
                  isActive('lookbook') ? 'text-black opacity-100 border-b border-black' : 'text-gray-600'
                }`}
              >
                Lookbook
              </button>
              <button
                onClick={() => scrollToSection('journal')}
                className={`text-sm font-light tracking-wide transition-all duration-500 hover:opacity-70 transform hover:scale-105 ${
                  isActive('journal') ? 'text-black opacity-100 border-b border-black' : 'text-gray-600'
                }`}
              >
                Journal
              </button>
              
              {/* Login/User Section */}
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-light text-stone-700">
                    Hello, {user.firstName}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-light tracking-wide text-stone-600 hover:text-stone-800 transition-all duration-500 transform hover:scale-105"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={openLoginModal}
                  className="text-sm font-light tracking-wide text-stone-600 hover:text-stone-800 transition-all duration-500 transform hover:scale-105 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Account
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black hover:opacity-70 transition-all duration-500 transform hover:scale-110"
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
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg border-t border-gray-100 animate-fade-in">
              <div className="px-6 py-4 space-y-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left text-sm font-light tracking-wide text-gray-600 hover:text-black transition-all duration-500 transform hover:translate-x-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('shop')}
                  className="block w-full text-left text-sm font-light tracking-wide text-gray-600 hover:text-black transition-all duration-500 transform hover:translate-x-2"
                >
                  Shop
                </button>
                <button
                  onClick={() => scrollToSection('lookbook')}
                  className="block w-full text-left text-sm font-light tracking-wide text-gray-600 hover:text-black transition-all duration-500 transform hover:translate-x-2"
                >
                  Lookbook
                </button>
                <button
                  onClick={() => scrollToSection('journal')}
                  className="block w-full text-left text-sm font-light tracking-wide text-gray-600 hover:text-black transition-all duration-500 transform hover:translate-x-2"
                >
                  Journal
                </button>
                
                {/* Mobile Login/User */}
                {user ? (
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-light text-stone-700 mb-2">
                      Hello, {user.firstName}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="text-sm font-light tracking-wide text-stone-600 hover:text-stone-800 transition-all duration-500"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={openLoginModal}
                      className="flex items-center text-sm font-light tracking-wide text-stone-600 hover:text-stone-800 transition-all duration-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Account
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Header;