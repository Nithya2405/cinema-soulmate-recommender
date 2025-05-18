
import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MovieCardProps {
  id: number;
  title: string;
  year: number;
  poster: string;
  rating: number;
  genres: string[];
  className?: string;
}

const MovieCard = ({ id, title, year, poster, rating, genres, className }: MovieCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/movie/${id}`);
  };
  
  return (
    <div 
      className={cn(
        "movie-card bg-cinema-navy rounded-lg overflow-hidden cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={poster} 
          alt={`${title} poster`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-cinema-gold rounded-full px-2 py-1 text-xs flex items-center">
          <Star size={12} className="mr-1 fill-cinema-gold" />
          {rating.toFixed(1)}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm line-clamp-1">{title}</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-muted-foreground">{year}</span>
          {genres.length > 0 && (
            <span className="text-xs text-cinema-light">{genres[0]}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
