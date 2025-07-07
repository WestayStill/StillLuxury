import React, { useState, useEffect } from 'react';
import { mockJournal } from '../mockData';

const Journal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleReadMore = (article) => {
    // Mock read more functionality
    alert(`Opening "${article.title}" - This would normally open the full article.`);
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
              Journal
            </h1>
            <p 
              className={`text-xl font-light text-stone-600 leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Thoughts on mindful living and timeless style
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {mockJournal.map((article, index) => (
              <article 
                key={article.id}
                className={`mb-16 pb-16 border-b border-stone-200 last:border-b-0 last:pb-0 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="aspect-[4/5] bg-stone-100 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex items-center text-sm text-stone-500 mb-4">
                      <span>{formatDate(article.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 
                      className="text-3xl md:text-4xl font-light text-stone-800 mb-4"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {article.title}
                    </h2>
                    <p className="text-stone-600 leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <button
                      onClick={() => handleReadMore(article)}
                      className="text-stone-800 font-light tracking-wide hover:text-stone-600 transition-colors duration-300 flex items-center group"
                    >
                      Read More
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
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
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-4xl md:text-5xl font-light text-stone-800 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Never Miss a Story
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8">
              Subscribe to our journal for thoughtful insights on mindful living.
            </p>
            <button className="bg-stone-800 text-white px-8 py-3 font-light tracking-wide hover:bg-stone-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;