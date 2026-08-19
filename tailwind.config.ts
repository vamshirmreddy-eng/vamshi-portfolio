import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Theme-aware palette: actual values swap via CSS vars in globals.css
        // depending on the .dark class the header toggle sets.
        'primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-dark': 'rgb(var(--color-primary-dark) / <alpha-value>)',
        'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
        'secondary-dark': 'rgb(var(--color-secondary-dark) / <alpha-value>)',
        'dark-bg': 'rgb(var(--color-bg) / <alpha-value>)',
        'dark-bg-light': 'rgb(var(--color-bg-light) / <alpha-value>)',
        'light-bg': 'rgb(var(--color-bg-light) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'text': 'rgb(var(--color-text) / <alpha-value>)',
        'secondary-text': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        // Fixed 8% opacity, not <alpha-value> — every one of the ~18 call sites this replaces
        // used exactly rgba(15,23,42,0.08), never a different opacity.
        'border': 'rgb(var(--color-border) / 0.08)',
      },
      fontFamily: {
        'sans': ['var(--font-cabin)', ...defaultTheme.fontFamily.sans],
        'heading': ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
        'display': ['var(--font-bangers)', 'cursive'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '1.3', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}

export default config
