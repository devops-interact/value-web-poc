import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#08979C',
          light: '#0FBEC5',
          dark: '#056B6E',
          muted: '#E6F7F7',
        },
        charcoal: '#1C1C1E',
        graphite: '#3A3A3C',
        ash: '#6E6E73',
        smoke: '#F2F2F7',
        ink: '#111111',
      },
      fontFamily: {
        serif: ['JetBrains Mono', 'monospace'],
        sans: ['JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'label': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee2': 'marquee2 40s linear infinite',
        'spin-slow': 'spin 120s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-teal': 'linear-gradient(135deg, #08979C 0%, #056B6E 100%)',
        'gradient-teal-subtle': 'linear-gradient(135deg, rgba(8,151,156,0.12) 0%, rgba(5,107,110,0.04) 100%)',
        'gradient-dark': 'linear-gradient(180deg, #111111 0%, #0A0A0A 100%)',
      },
      boxShadow: {
        'teal-sm': '0 4px 20px rgba(8,151,156,0.15)',
        'teal-md': '0 8px 40px rgba(8,151,156,0.2)',
        'teal-lg': '0 20px 60px rgba(8,151,156,0.25)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
