
import React, { useState, useEffect } from 'react';
import { Search, User, Film } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 w-full z-10 transition-all duration-300 py-4",
      isScrolled 
        ? "bg-cinema-navy/95 backdrop-blur-md shadow-md" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => navigate('/')}
        >
          <Film size={28} className="text-cinema-accent" />
          <div>
            <span className="text-2xl font-bold font-playfair tracking-wider">
              <span className="text-cinema-accent">Cinema</span>
              <span className="gold-shine">Soulmate</span>
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 relative max-w-xs w-full">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            <Search size={18} />
          </div>
          <Input 
            placeholder="Search movies..." 
            className="pl-10 bg-cinema-dark/50 border-cinema-blue focus:border-cinema-gold transition-colors duration-300 rounded-full"
          />
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="relative font-medium hover:text-cinema-gold transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-cinema-gold after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">Home</a>
            </li>
            <li>
              <a href="#" className="relative font-medium hover:text-cinema-gold transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-cinema-gold after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">Discover</a>
            </li>
            <li>
              <a href="#" className="relative font-medium hover:text-cinema-gold transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-cinema-gold after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">My Ratings</a>
            </li>
          </ul>
        </nav>
        
        <div className="md:hidden flex items-center">
          <button className="p-1">
            <User size={24} className="text-cinema-light hover:text-cinema-gold transition-colors" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
