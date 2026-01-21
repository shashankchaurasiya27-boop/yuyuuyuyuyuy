import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const PixelCard: React.FC<{ children: React.ReactNode; className?: string; title?: string }> = ({ children, className = '', title }) => {
  return (
    <div className={twMerge("bg-autumn-light border-4 border-black p-6 shadow-pixel relative rounded-lg", className)}>
      {title && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-autumn-yellow border-2 border-black px-4 py-1 text-xs whitespace-nowrap uppercase font-pixel">
          {title}
        </div>
      )}
      {children}
    </div>
  );
};
