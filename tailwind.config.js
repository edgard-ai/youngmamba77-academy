/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        court: '#0d0d1a',
        'court-mid': '#1a1a2e',
        'court-light': '#16213e',
        gold: '#FFD700',
        'gold-dim': '#B8860B',
        mamba: '#8B0000',
        'mamba-bright': '#DC143C',
        purple: '#4B0082',
        'purple-bright': '#7B2D8B',
      },
      fontFamily: {
        display: ['Impact', 'Arial Black', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-gold': 'pulse 1.5s ease-in-out infinite',
        'slide-up': 'slideUp 0.3s ease-out',
        'xp-fill': 'xpFill 1s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        xpFill: {
          '0%': { width: '0%' },
        },
      },
    },
  },
  plugins: [],
}
