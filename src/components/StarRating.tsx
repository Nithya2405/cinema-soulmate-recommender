
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  initialRating?: number;
  totalStars?: number;
  size?: 'sm' | 'md' | 'lg';
  onRate?: (rating: number) => void;
  readOnly?: boolean;
  className?: string;
}

const StarRating = ({
  initialRating = 0,
  totalStars = 5,
  size = 'md',
  onRate,
  readOnly = false,
  className
}: StarRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
  
  const sizes = {
    sm: 16,
    md: 20,
    lg: 24
  };
  
  const handleClick = (index: number) => {
    if (readOnly) return;
    
    const newRating = index + 1;
    setRating(newRating);
    if (onRate) {
      onRate(newRating);
    }
  };
  
  return (
    <div 
      className={cn(
        "star-rating",
        className
      )}
    >
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        
        return (
          <Star
            key={index}
            size={sizes[size]}
            className={cn(
              "star transition-all duration-200",
              (ratingValue <= (hover || rating))
                ? "text-cinema-gold fill-cinema-gold"
                : "text-muted-foreground",
              readOnly ? "cursor-default" : "cursor-pointer"
            )}
            onClick={() => handleClick(index)}
            onMouseEnter={() => !readOnly && setHover(ratingValue)}
            onMouseLeave={() => !readOnly && setHover(0)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
