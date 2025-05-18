
import React from 'react';
import { Github, Twitter, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-cinema-dark to-cinema-navy py-16 mt-16 border-t border-cinema-blue/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-bold font-playfair mb-6 flex items-center gap-2">
              <span className="text-cinema-accent">Cinema</span>
              <span className="gold-shine">Soulmate</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Discover your next favorite movie with our personalized recommendation system powered by AI.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-cinema-gold transition-all duration-300 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-cinema-accent mr-2"></span>
                  Popular Movies
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cinema-gold transition-all duration-300 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-cinema-accent mr-2"></span>
                  New Releases
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cinema-gold transition-all duration-300 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-cinema-accent mr-2"></span>
                  Top Rated
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-cinema-gold transition-all duration-300 flex items-center">
                  <span className="inline-block w-1 h-1 rounded-full bg-cinema-accent mr-2"></span>
                  Coming Soon
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-cinema-gold transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cinema-gold transition-all duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-cinema-gold transition-all duration-300">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-cinema-gold transition-transform hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-cinema-gold transition-transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-cinema-gold transition-transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-cinema-gold transition-transform hover:scale-110">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cinema-blue/20 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center">
            Made with <Heart size={14} className="mx-1 text-cinema-accent fill-cinema-accent" /> by CinemaSoulmate Team &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
