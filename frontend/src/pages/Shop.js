import React, { useState, useEffect } from 'react';
import { mockProducts } from '../mockData';

const Shop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(mockProducts);
    } else {
      setFilteredProducts(mockProducts.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories = ['All', 'Essentials', 'Bottoms', 'Accessories'];

  const handleQuickShop = (product) => {
    // Mock quick shop functionality
    alert(`Added ${product.name} to cart`);
  };

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
              Shop
            </h1>
            <p 
              className={`text-xl font-light text-stone-600 leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Carefully curated pieces for mindful living
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-stone-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-light tracking-wide transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-stone-800 border-b-2 border-stone-800'
                    : 'text-stone-600 hover:text-stone-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className={`group cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/4] bg-stone-100 overflow-hidden mb-4 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.isNewDrop && (
                    <div className="absolute top-4 left-4 bg-stone-800 text-white px-3 py-1 text-xs font-light tracking-wide">
                      NEW
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <button
                    onClick={() => handleQuickShop(product)}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-stone-800 py-3 px-6 text-sm font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
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
                  <p className="text-stone-800 font-light">
                    ${product.price}
                  </p>
                  <div className="flex justify-center space-x-2 mt-2">
                    {product.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className={`w-3 h-3 rounded-full border border-stone-300 ${
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;