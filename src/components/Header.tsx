
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 z-10 bg-cinema-navy/90 backdrop-blur-sm border-b border-cinema-blue py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div 
          className="text-2xl font-bold text-cinema-gold cursor-pointer flex items-center gap-2"
          onClick={() => navigate('/')}
        >
          <span className="text-cinema-accent">Cinema</span>Soulmate
        </div>
        
        <div className="flex items-center space-x-2 relative max-w-xs w-full">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            <Search size={18} />
          </div>
          <Input 
            placeholder="Search movies..." 
            className="pl-10 bg-cinema-dark/50 border-cinema-blue focus:border-cinema-light"
          />
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-cinema-gold transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-cinema-gold transition-colors">Discover</a></li>
            <li><a href="#" className="hover:text-cinema-gold transition-colors">My Ratings</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
