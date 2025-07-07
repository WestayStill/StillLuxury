import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ScrollAnimation from './components/ScrollAnimation';
import ParallaxSection from './components/ParallaxSection';
import { mockAbout, mockProducts, mockLookbook, mockJournal } from './mockData';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleQuickShop = (product) => {
    alert(`Added ${product.name} to cart`);
  };

  const handleReadMore = (article) => {
    alert(`Opening "${article.title}" - This would normally open the full article.`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <h1 
            className="text-4xl font-light text-stone-800 mb-4 animate-pulse"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            still.
          </h1>
          <div className="w-16 h-px bg-stone-300 mx-auto animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-black/20 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(1)'
        }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <div className="text-center mb-16">
                  <h2 
                    className="text-6xl md:text-7xl font-light text-stone-800 mb-8"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    About
                  </h2>
                  <p className="text-xl md:text-2xl font-light text-stone-600 leading-relaxed max-w-4xl mx-auto">
                    {mockAbout.philosophy}
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                <ScrollAnimation delay={200}>
                  <div>
                    <h3 
                      className="text-4xl md:text-5xl font-light text-stone-800 mb-6"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Our Mission
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-8 text-lg">
                      {mockAbout.mission}
                    </p>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation delay={400}>
                  <div className="bg-stone-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-500">
                    <h4 className="text-2xl font-light text-stone-800 mb-6">
                      We Believe In
                    </h4>
                    <ul className="space-y-4">
                      {mockAbout.values.map((value, index) => (
                        <li key={index} className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                          <span className="w-2 h-2 bg-stone-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                          <span className="text-stone-600">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>

              <ScrollAnimation delay={600}>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    'https://images.unsplash.com/photo-1601926299866-6a5c9bfa6be0',
                    'https://images.unsplash.com/photo-1590739169125-a9438401596a',
                    'https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg'
                  ].map((image, index) => (
                    <div key={index} className={`aspect-[3/4] bg-stone-200 overflow-hidden rounded-lg ${index === 1 ? 'md:mt-8' : ''}`}>
                      <img
                        src={image}
                        alt={`About ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <ParallaxSection 
          id="shop" 
          className="py-20 bg-stone-50"
          speed={0.3}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <div className="text-center mb-16">
                  <h2 
                    className="text-6xl md:text-7xl font-light text-stone-800 mb-8"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Shop
                  </h2>
                  <p className="text-xl font-light text-stone-600 leading-relaxed">
                    Carefully curated pieces for mindful living
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockProducts.map((product, index) => (
                  <ScrollAnimation key={product.id} delay={index * 100}>
                    <div className="group cursor-pointer transform hover:scale-105 transition-all duration-500">
                      <div className="aspect-[3/4] bg-stone-100 overflow-hidden mb-4 relative rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {product.isNewDrop && (
                          <div className="absolute top-4 left-4 bg-stone-800 text-white px-3 py-1 text-xs font-light tracking-wide rounded">
                            NEW
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <button
                          onClick={() => handleQuickShop(product)}
                          className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-stone-800 py-3 px-6 text-sm font-light tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white transform hover:scale-105 rounded"
                        >
                          Quick Shop
                        </button>
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-light text-stone-800 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-stone-600 text-sm mb-2">
                          {product.description}
                        </p>
                        <p className="text-stone-800 font-light text-lg">
                          ${product.price}
                        </p>
                        <div className="flex justify-center space-x-2 mt-3">
                          {product.colors.map((color, colorIndex) => (
                            <div
                              key={colorIndex}
                              className={`w-4 h-4 rounded-full border-2 border-stone-300 hover:scale-110 transition-transform duration-300 ${
                                color === 'Black' ? 'bg-black' :
                                color === 'Ivory' ? 'bg-stone-100' :
                                color === 'Slate' ? 'bg-slate-500' :
                                color === 'Beige' ? 'bg-amber-100' :
                                'bg-stone-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Lookbook Section */}
        <section id="lookbook" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation>
                <div className="text-center mb-16">
                  <h2 
                    className="text-6xl md:text-7xl font-light text-stone-800 mb-8"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Lookbook
                  </h2>
                  <p className="text-xl font-light text-stone-600 leading-relaxed">
                    Visual stories of quiet elegance
                  </p>
                </div>
              </ScrollAnimation>

              {mockLookbook.map((item, index) => (
                <ScrollAnimation key={item.id} delay={index * 200}>
                  <div className={`grid md:grid-cols-2 gap-16 items-center mb-24 ${
                    index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                  }`}>
                    <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <div className="aspect-[4/5] bg-stone-100 overflow-hidden rounded-lg">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      <div className="max-w-md">
                        <div className="text-sm font-light text-stone-500 mb-2 tracking-wide">
                          {item.season}
                        </div>
                        <h3 
                          className="text-4xl md:text-5xl font-light text-stone-800 mb-6"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-stone-600 leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Journal Section */}
        <section id="journal" className="py-20 bg-stone-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollAnimation>
                <div className="text-center mb-16">
                  <h2 
                    className="text-6xl md:text-7xl font-light text-stone-800 mb-8"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Journal
                  </h2>
                  <p className="text-xl font-light text-stone-600 leading-relaxed">
                    Thoughts on mindful living and timeless style
                  </p>
                </div>
              </ScrollAnimation>

              {mockJournal.map((article, index) => (
                <ScrollAnimation key={article.id} delay={index * 200}>
                  <article className="mb-16 pb-16 border-b border-stone-200 last:border-b-0 last:pb-0">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-1">
                        <div className="aspect-[4/5] bg-stone-100 overflow-hidden rounded-lg">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="flex items-center text-sm text-stone-500 mb-4">
                          <span>{formatDate(article.date)}</span>
                          <span className="mx-2">•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h3 
                          className="text-3xl md:text-4xl font-light text-stone-800 mb-4"
                          style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                          {article.title}
                        </h3>
                        <p className="text-stone-600 leading-relaxed mb-6">
                          {article.excerpt}
                        </p>
                        <button
                          onClick={() => handleReadMore(article)}
                          className="text-stone-800 font-light tracking-wide hover:text-stone-600 transition-colors duration-300 flex items-center group"
                        >
                          Read More
                          <svg 
                            className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={1} 
                              d="M17 8l4 4m0 0l-4 4m4-4H3" 
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;