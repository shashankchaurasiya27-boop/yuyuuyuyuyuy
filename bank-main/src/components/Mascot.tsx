import React from 'react';
import { clsx } from 'clsx';

// Mapping generated images to moods
// Note: These paths are based on the generation order.
const MASCOT_IMAGES = {
  idle: '/assets/aigc/images/mascot-poses_1768671808_000.png',
  happy: '/assets/aigc/images/mascot-poses_1768671808_001.png',
  thinking: '/assets/aigc/images/mascot-poses_1768671808_002.png',
  sad: '/assets/aigc/images/mascot-poses_1768671808_003.png',
};

interface MascotProps {
  mood?: 'idle' | 'happy' | 'thinking' | 'sad';
  className?: string;
  message?: string;
}

export const Mascot: React.FC<MascotProps> = ({ mood = 'idle', className = '', message }) => {
  return (
    <div className={clsx("relative flex flex-col items-center", className)}>
      {message && (
        <div className="bg-white border-2 border-black p-3 rounded-lg mb-2 relative shadow-pixel max-w-[200px] text-center text-sm animate-fade-in">
          {message}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-black rotate-45"></div>
        </div>
      )}
      <img 
        src={MASCOT_IMAGES[mood]} 
        alt={`Mascot ${mood}`} 
        className={clsx(
          "w-32 h-32 object-contain pixelated transition-transform",
          mood === 'happy' && "animate-bounce",
          mood === 'thinking' && "animate-pulse",
          mood === 'sad' && "grayscale opacity-80"
        )} 
      />
    </div>
  );
};
