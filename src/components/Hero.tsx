
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Play, Plus } from 'lucide-react';

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
    <div className="relative h-[85vh] overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0">
        <img 
          src={movie.backdrop} 
          alt={`${movie.title} backdrop`}
          className="w-full h-full object-cover animate-scale-in"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark via-cinema-dark/80 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 pt-20">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-3 opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              {movie.title}
            </h1>
            <div className="flex items-center space-x-3 mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
              <span className="text-cinema-gold font-semibold">{movie.year}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-cinema-light bg-cinema-navy/50 px-3 py-1 rounded-full text-sm">{movie.genres.join(', ')}</span>
            </div>
            <p className="text-lg text-slate-200 mb-8 line-clamp-3 opacity-0 animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
              {movie.description}
            </p>
            <div className="flex space-x-4 opacity-0 animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
              <Button 
                className="bg-cinema-accent hover:bg-cinema-accent/90 text-white px-8 py-6 rounded-full group"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <Play size={20} className="mr-2 transition-transform group-hover:scale-125" fill="white" />
                Watch Trailer
              </Button>
              <Button variant="outline" className="border-cinema-light hover:bg-cinema-light/10 px-8 py-6 rounded-full">
                <Plus size={20} className="mr-2" />
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
