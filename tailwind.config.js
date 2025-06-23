/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00D9FF',
        secondary: '#8B5CF6',
        accent: '#10B981',
        neon: '#FF0080',
        electric: '#00FFFF',
        dark: '#0A0A0A',
        'dark-light': '#1A1A1A',
        'dark-lighter': '#2A2A2A',
        'dark-card': '#151515',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s ease-out',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'matrix': 'matrix 20s linear infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'cyber-glitch': 'cyber-glitch 0.3s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        glow: {
          from: { 
            'box-shadow': '0 0 20px #00D9FF, 0 0 40px #00D9FF, 0 0 60px #00D9FF',
            transform: 'scale(1)'
          },
          to: { 
            'box-shadow': '0 0 30px #00D9FF, 0 0 60px #00D9FF, 0 0 90px #00D9FF',
            transform: 'scale(1.02)'
          },
        },
        'pulse-glow': {
          '0%, 100%': { 
            'box-shadow': '0 0 20px rgba(0, 217, 255, 0.5)',
            opacity: '0.8'
          },
          '50%': { 
            'box-shadow': '0 0 40px rgba(0, 217, 255, 0.8), 0 0 60px rgba(139, 92, 246, 0.3)',
            opacity: '1'
          },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(50px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.8)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'neon-pulse': {
          from: { 
            'text-shadow': '0 0 10px #00D9FF, 0 0 20px #00D9FF, 0 0 30px #00D9FF',
            color: '#00D9FF'
          },
          to: { 
            'text-shadow': '0 0 20px #FF0080, 0 0 30px #FF0080, 0 0 40px #FF0080',
            color: '#FF0080'
          },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        hologram: {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'translateY(0px) rotateX(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            opacity: '0.9',
            transform: 'translateY(-5px) rotateX(1deg)',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            opacity: '1',
            transform: 'translateY(-10px) rotateX(0deg)',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            opacity: '0.9',
            transform: 'translateY(-5px) rotateX(-1deg)',
            filter: 'hue-rotate(270deg)'
          },
        },
        'cyber-glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0,217,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,0.1) 1px, transparent 1px)',
        'neural-network': 'radial-gradient(circle at 25% 25%, rgba(0,217,255,0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139,92,246,0.2) 0%, transparent 50%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}