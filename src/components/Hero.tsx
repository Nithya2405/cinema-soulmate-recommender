
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  movie?: {
    id: number;
    title: string;
    backdrop: string;
    description: string;
    year: number;
    genres: string[];
  };
}

const Hero = ({ movie }: HeroProps) => {
  const navigate = useNavigate();
  
  if (!movie) {
    return null;
  }
  
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0">
        <img 
          src={movie.backdrop} 
          alt={`${movie.title} backdrop`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cinema-dark via-cinema-dark/90 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{movie.title}</h1>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-cinema-gold">{movie.year}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-cinema-light">{movie.genres.join(', ')}</span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 line-clamp-3">
              {movie.description}
            </p>
            <div className="flex space-x-4">
              <Button 
                className="bg-cinema-accent hover:bg-cinema-accent/80 text-white"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                More Info
              </Button>
              <Button variant="outline" className="border-cinema-light hover:bg-cinema-light/10">
                Add to Watchlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
