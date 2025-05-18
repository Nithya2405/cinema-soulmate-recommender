
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById } from '@/data/mockMovies';
import { getCurrentUser } from '@/data/mockUsers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarRating from '@/components/StarRating';
import { Button } from '@/components/ui/button';
import { Bookmark, Play, Star } from 'lucide-react';
import { toast } from 'sonner';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [userRating, setUserRating] = useState(0);
  const [inWatchlist, setInWatchlist] = useState(false);
  
  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }
    
    const movieId = parseInt(id);
    const movieData = getMovieById(movieId);
    
    if (!movieData) {
      navigate('/not-found');
      return;
    }
    
    setMovie(movieData);
    
    const user = getCurrentUser();
    
    // Check if user has rated this movie
    const userRating = user.ratings.find(r => r.movieId === movieId);
    if (userRating) {
      setUserRating(userRating.rating);
    }
    
    // Check if movie is in user's watchlist
    if (user.watchlist.includes(movieId)) {
      setInWatchlist(true);
    }
    
    setLoading(false);
  }, [id, navigate]);
  
  const handleRate = (rating: number) => {
    // In a real app, this would call an API to save the rating
    setUserRating(rating);
    toast.success(`You rated ${movie.title} ${rating} stars!`);
  };
  
  const toggleWatchlist = () => {
    // In a real app, this would call an API to update the user's watchlist
    setInWatchlist(!inWatchlist);
    
    if (!inWatchlist) {
      toast.success(`Added ${movie.title} to your watchlist!`);
    } else {
      toast.success(`Removed ${movie.title} from your watchlist!`);
    }
  };
  
  if (loading || !movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cinema-light mx-auto"></div>
          <p className="mt-4 text-cinema-light">Loading movie details...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Movie Header with Backdrop */}
        <div className="relative h-[50vh] lg:h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={movie.backdrop} 
              alt={`${movie.title} backdrop`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark via-cinema-dark/60 to-transparent" />
          </div>
        </div>
        
        {/* Movie Content */}
        <div className="container mx-auto px-4 -mt-48 relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Poster */}
            <div className="w-full max-w-xs mx-auto md:mx-0 shrink-0">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={movie.poster} 
                  alt={`${movie.title} poster`}
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Details */}
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{movie.title}</h1>
              
              <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-6">
                <span className="text-cinema-gold">{movie.year}</span>
                <span className="text-cinema-light">{movie.genres.join(', ')}</span>
                <div className="flex items-center">
                  <Star size={18} className="text-cinema-gold fill-cinema-gold mr-1" />
                  <span>{movie.rating.toFixed(1)}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-muted-foreground">{movie.description}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <div>
                  <h2 className="text-lg font-semibold mb-2">Your Rating</h2>
                  <StarRating 
                    initialRating={userRating} 
                    onRate={handleRate} 
                    size="lg"
                  />
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-2">Actions</h2>
                  <div className="flex gap-2">
                    <Button 
                      variant={inWatchlist ? "default" : "outline"}
                      onClick={toggleWatchlist}
                      className={inWatchlist ? "bg-cinema-gold text-cinema-dark hover:bg-cinema-gold/80" : ""}
                    >
                      <Bookmark size={18} className="mr-2" />
                      {inWatchlist ? "In Watchlist" : "Add to Watchlist"}
                    </Button>
                    
                    <Button variant="outline" className="border-cinema-accent text-cinema-accent hover:bg-cinema-accent/10">
                      <Play size={18} className="mr-2" fill="currentColor" />
                      Trailer
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* More movie details could be added here: directors, cast, etc. */}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MovieDetail;
