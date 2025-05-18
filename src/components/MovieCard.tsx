
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
        "movie-card bg-cinema-navy rounded-lg overflow-hidden cursor-pointer shadow-elegant",
        className
      )}
      onClick={handleClick}
    >
      <div className="relative aspect-[2/3] overflow-hidden group">
        <img 
          src={poster} 
          alt={`${title} poster`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-navy via-transparent to-transparent opacity-70"></div>
        <div className="absolute top-2 right-2 bg-black/70 text-cinema-gold rounded-full px-2 py-1 text-xs flex items-center">
          <Star size={12} className="mr-1 fill-cinema-gold" />
          {rating.toFixed(1)}
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-cinema-navy/90 to-cinema-navy/50">
          {genres.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {genres.slice(0, 2).map((genre, idx) => (
                <span key={idx} className="text-[10px] bg-cinema-dark/50 text-cinema-light px-2 py-0.5 rounded-full">
                  {genre}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="p-3 relative">
        <h3 className="font-semibold text-sm line-clamp-1 mb-1">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-xs text-cinema-gold">{year}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
