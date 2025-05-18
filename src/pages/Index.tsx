
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MovieList from '@/components/MovieList';
import { getPopularMovies, getRecommendedMovies, mockMovies } from '@/data/mockMovies';

const Index = () => {
  const featuredMovie = mockMovies[0]; // Use Inception as the featured movie
  const popularMovies = getPopularMovies();
  const recommendedMovies = getRecommendedMovies();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        <Hero movie={featuredMovie} />
        
        <div className="container mx-auto px-4 py-16 space-y-16">
          <MovieList 
            title="Recommended for You" 
            movies={recommendedMovies} 
          />
          
          <MovieList 
            title="Popular Movies" 
            movies={popularMovies} 
          />
          
          <div className="py-12 px-6 bg-cinema-navy/50 rounded-2xl border border-cinema-blue/20 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold mb-4">Personalized Movie Recommendations</h2>
              <p className="text-muted-foreground mb-8">
                Our AI-powered recommendation system learns your preferences and suggests movies you'll love. 
                Rate movies to get even more accurate recommendations tailored just for you.
              </p>
              <div className="inline-flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cinema-accent via-cinema-gold to-cinema-accent opacity-75 blur"></div>
                  <button className="relative px-8 py-3 bg-cinema-navy rounded-lg font-medium">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
