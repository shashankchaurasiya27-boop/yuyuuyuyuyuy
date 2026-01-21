import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { playClick } from '../utils/audio';

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const PixelButton: React.FC<PixelButtonProps> = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyles = "px-6 py-3 font-pixel text-sm transition-transform active:translate-y-1 active:shadow-none border-2 border-black shadow-pixel uppercase tracking-wider rounded-lg";
  const variants = {
    primary: "bg-autumn-orange hover:bg-orange-400 text-white",
    secondary: "bg-autumn-teal hover:bg-teal-500 text-white",
    danger: "bg-red-500 hover:bg-red-400 text-white",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playClick();
    onClick?.(e);
  };

  return (
    <button className={twMerge(baseStyles, variants[variant], className)} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};
