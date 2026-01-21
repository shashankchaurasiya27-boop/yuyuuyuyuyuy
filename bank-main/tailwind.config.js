/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          purple: '#6B2CF5',
          pink: '#FF69B4',
          cyan: '#00FFFF',
          yellow: '#FFFF00',
          dark: '#1a1a2e',
          light: '#e0e0e0',
        },
        // Mapping old autumn classes to new retro theme for compatibility
        autumn: {
          orange: '#FF69B4', // Pink
          brown: '#6B2CF5',  // Purple
          yellow: '#FFFF00', // Yellow
          teal: '#00FFFF',   // Cyan
          light: '#F0F0F0',
          dark: '#1a1a2e',
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      boxShadow: {
        pixel: '4px 4px 0px 0px rgba(0,0,0,0.4)',
      }
    },
  },
  plugins: [],
}
