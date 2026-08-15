/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#07080A',
          raised: '#0D0F13',
          surface: '#101319',
          surface2: '#151922',
        },
        border: {
          DEFAULT: '#1E222A',
          hover: '#2B303B',
        },
        ink: {
          primary: '#F3F5F7',
          secondary: '#9AA1AC',
          tertiary: '#5D636D',
        },
        signal: {
          DEFAULT: '#4C7CFF',
          dim: '#33437A',
          soft: '#8FA7FF',
        },
        violet: {
          DEFAULT: '#9B7CFF',
        },
        wire: {
          DEFAULT: '#3DDC97',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.03em',
        widen: '0.14em',
        widest: '0.22em',
      },
      maxWidth: {
        content: '1360px',
      },
      backgroundImage: {
        'grid-fine':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'radial-signal':
          'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(76,124,255,0.10), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-node': {
          '0%,100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'pulse-node': 'pulse-node 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
