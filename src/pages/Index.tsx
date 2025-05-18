
import React from 'react';
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
      
      <main className="flex-grow">
        <Hero movie={featuredMovie} />
        
        <div className="container mx-auto px-4 py-12">
          <MovieList 
            title="Recommended for You" 
            movies={recommendedMovies} 
            className="mb-12"
          />
          
          <MovieList 
            title="Popular Movies" 
            movies={popularMovies} 
            className="mb-12"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
