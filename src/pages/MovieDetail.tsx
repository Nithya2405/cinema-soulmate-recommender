
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById } from '@/data/mockMovies';
import { getCurrentUser } from '@/data/mockUsers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarRating from '@/components/StarRating';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bookmark, Play, Star, Calendar, Clock } from 'lucide-react';
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
      <div className="min-h-screen flex items-center justify-center bg-cinema-dark">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cinema-blue border-t-cinema-gold rounded-full mx-auto animate-spin"></div>
          <p className="mt-4 text-cinema-light animate-pulse">Loading movie details...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Movie Header with Backdrop */}
        <div className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={movie.backdrop} 
              alt={`${movie.title} backdrop`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark via-cinema-dark/80 to-transparent" />
          </div>
        </div>
        
        {/* Movie Content */}
        <div className="container mx-auto px-4 -mt-64 md:-mt-72 lg:-mt-80 relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Poster */}
            <div className="w-full max-w-xs mx-auto md:mx-0 shrink-0 animate-fade-in">
              <div className="rounded-lg overflow-hidden shadow-poster relative group">
                <img 
                  src={movie.poster} 
                  alt={`${movie.title} poster`}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cinema-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <Button className="bg-cinema-accent hover:bg-cinema-accent/90 text-white rounded-full">
                      <Play className="mr-2" fill="white" />
                      Watch Trailer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Details */}
            <div className="flex-grow">
              <h1 className="text-3xl md:text-5xl font-bold font-playfair mb-2 animate-fade-in">{movie.title}</h1>
              
              <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
                <span className="text-cinema-gold flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {movie.year}
                </span>
                <div className="flex items-center">
                  <Star size={16} className="text-cinema-gold fill-cinema-gold mr-1" />
                  <span>{movie.rating.toFixed(1)}</span>
                </div>
                <span className="text-cinema-light">140 min</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                {movie.genres.map((genre: string, idx: number) => (
                  <Badge key={idx} variant="outline" className="bg-cinema-navy/50 text-cinema-light border-cinema-blue">
                    {genre}
                  </Badge>
                ))}
              </div>
              
              <div className="mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
                <h2 className="text-xl font-playfair font-semibold mb-2">Overview</h2>
                <p className="text-slate-200 leading-relaxed">{movie.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <h2 className="text-lg font-playfair font-semibold mb-4">Your Rating</h2>
                  <div className="bg-cinema-navy/50 p-4 rounded-lg border border-cinema-blue/30">
                    <StarRating 
                      initialRating={userRating} 
                      onRate={handleRate} 
                      size="lg"
                    />
                    <p className="mt-3 text-sm text-muted-foreground">Rate this movie to improve your recommendations</p>
                  </div>
                </div>
                
                <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
                  <h2 className="text-lg font-playfair font-semibold mb-4">Actions</h2>
                  <div className="bg-cinema-navy/50 p-4 rounded-lg border border-cinema-blue/30">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        variant={inWatchlist ? "default" : "outline"}
                        onClick={toggleWatchlist}
                        className={inWatchlist ? "bg-cinema-gold text-cinema-dark hover:bg-cinema-gold/80 grow" : "grow"}
                      >
                        <Bookmark size={18} className="mr-2" />
                        {inWatchlist ? "In Watchlist" : "Add to Watchlist"}
                      </Button>
                      
                      <Button variant="outline" className="border-cinema-accent text-cinema-accent hover:bg-cinema-accent/10 grow">
                        <Play size={18} className="mr-2" fill="currentColor" />
                        Watch Trailer
                      </Button>
                    </div>
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
