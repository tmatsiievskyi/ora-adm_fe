import { Config } from 'tailwindcss';

const config = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
    './dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        bkg: 'hsl(var(--bkg) / <alpha-value>)',
        'bkg-frg': 'hsl(var(--bkg-frg) / <alpha-value>)',
        'bkg-sec': 'hsl(var(--bkg-sec) / <alpha-value>)',
        'bkg-sec-frg': 'hsl(var(--bkg-sec-frg) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-frg': 'hsl(var(--primary-frg) / <alpha-value>)',
        destructive: 'hsl(var(--destructive))',
        'destructive-frg': 'hsl(var(--destructive-frg) / <alpha-value>)',
      },
      fontFamily: {
        comfortaa: ['Comfortaa'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
