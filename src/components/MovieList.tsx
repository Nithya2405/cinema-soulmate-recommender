
import React, { useRef } from 'react';
import MovieCard from './MovieCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Movie {
  id: number;
  title: string;
  year: number;
  poster: string;
  rating: number;
  genres: string[];
}

interface MovieListProps {
  title: string;
  movies: Movie[];
  className?: string;
}

const MovieList = ({ title, movies, className }: MovieListProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    
    container.scrollTo({
      left: direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };
  
  if (!movies.length) {
    return null;
  }
  
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-playfair font-semibold relative">
          {title}
          <span className="absolute -bottom-2 left-0 h-[3px] w-12 bg-cinema-accent"></span>
        </h2>
        
        <div className="flex space-x-2">
          <Button 
            variant="outline"
            size="icon"
            className="rounded-full border-cinema-blue hover:border-cinema-gold hover:bg-cinema-dark"
            onClick={() => scroll('left')}
          >
            <ArrowLeft size={18} />
          </Button>
          <Button 
            variant="outline"
            size="icon"
            className="rounded-full border-cinema-blue hover:border-cinema-gold hover:bg-cinema-dark"
            onClick={() => scroll('right')}
          >
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-scroll space-x-4 pb-6 hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {movies.map((movie, index) => (
          <div 
            key={movie.id}
            className="min-w-[180px] md:min-w-[220px] opacity-0 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
          >
            <MovieCard 
              id={movie.id} 
              title={movie.title}
              year={movie.year}
              poster={movie.poster}
              rating={movie.rating}
              genres={movie.genres}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
