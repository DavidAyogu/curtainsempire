import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#101010',
        ivory: '#F8F3ED',
        sand: '#D8C5B3',
        gold: '#B99A63',
        mocha: '#4B372A',
        smoke: '#C9C1B5',
      },
      boxShadow: {
        luxe: '0 24px 80px rgba(16, 16, 16, 0.24)',
        glass: '0 16px 40px rgba(255,255,255,0.12)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(185,154,99,0.14), transparent 38%)',
      },
    },
  },
  plugins: [],
};

export default config;
