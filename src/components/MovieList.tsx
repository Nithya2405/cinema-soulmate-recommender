
import React from 'react';
import MovieCard from './MovieCard';

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
  if (!movies.length) {
    return null;
  }
  
  return (
    <div className={className}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {movies.map(movie => (
          <MovieCard 
            key={movie.id} 
            id={movie.id}
            title={movie.title}
            year={movie.year}
            poster={movie.poster}
            rating={movie.rating}
            genres={movie.genres}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
