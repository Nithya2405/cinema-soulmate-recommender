
import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cinema-navy py-8 mt-16 border-t border-cinema-blue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CinemaSoulmate</h3>
            <p className="text-muted-foreground">
              Discover your next favorite movie with our personalized recommendation system.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-cinema-gold">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cinema-gold">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cinema-gold">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-cinema-gold">
                <Github />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-cinema-blue text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CinemaSoulmate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
