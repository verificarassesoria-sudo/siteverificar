
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'dark' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg viewBox="0 0 500 500" className="h-full w-auto drop-shadow-md">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#F5E050', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        {/* Círculo Externo */}
        <circle cx="250" cy="250" r="210" fill="none" stroke="url(#goldGradient)" strokeWidth="35" />
        {/* Checkmark */}
        <path 
          d="M120 250 L220 350 L430 100" 
          fill="none" 
          stroke="url(#goldGradient)" 
          strokeWidth="60" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
      <span className={`text-2xl font-black tracking-tighter mt-1 ${variant === 'dark' ? 'text-black' : 'text-white'}`}>
        Verifi<span className="font-medium">Car</span>
      </span>
    </div>
  );
};

export default Logo;
