import twAnimate from 'tailwindcss-animate'
import flexPlugin from '../src/tailwind/flex.plugin.js'
import transitionPlugin from '../src/tailwind/transition.plugin.js'
import { breakpoints } from '../src/lib/breakpoints'

const config = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    '../../packages/ui/src/**/*.{ts,tsx}',
    '../../apps/storybook/.storybook/**/*',
    '../../apps/admin/src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      ...breakpoints,
    },
    fontFamily: {
      sans: ['Switzer', 'Inter', 'Helvetica', 'sans-serif'],
      code: ['JetBrainsMono', 'monospace'],
    },
    extend: {
      fontSize: {
        '2xs': ['0.785rem', {
          letterSpacing: '0.01em',
          lineHeight: '1.25em',
        }],
        'xs': ['0.825rem', {
          letterSpacing: '0.01em',
          lineHeight: '1.25em',
        }],
        'sm': ['0.875rem', {
          letterSpacing: '0.01em',
          lineHeight: '1.25em',
        }],
        'base': ['0.94rem', {
          letterSpacing: '0.01em',
          lineHeight: '1.25em',
        }],
        'md': ['1rem', {
          letterSpacing: '0.01em',
          lineHeight: '1.25em',
        }],
        'lg': ['1.125rem', {
          letterSpacing: '0.01em',
          lineHeight: '1.25em',
        }],
        'xl': ['1.25rem', {
          letterSpacing: '0.01em',
          lineHeight: '1.25em',
        }],
        '2xl': ['1.375rem', {
          letterSpacing: '0.01em',
          lineHeight: '1.25em',
        }],
        '3xl': ['1.5rem', {
          letterSpacing: '0.01em',
          lineHeight: '1.25em',
        }],
        '4xl': ['1.75rem', {
          letterSpacing: '0.01em',
          lineHeight: '1.25em',
        }],
        '5xl': ['2rem', {
          letterSpacing: '0.01em',
          lineHeight: '1.25em',
        }],
        '6xl': ['2.25rem', {
          letterSpacing: '0.01em',
          lineHeight: '1.25em',
        }],
        '7xl': ['2.5rem', {
          letterSpacing: '0.01em',
          lineHeight: '1.25em',
        }],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',

        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },

        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          background: 'hsl(var(--primary-background))',
          foreground: 'hsl(var(--primary-foreground))',
        },

        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          background: 'hsl(var(--secondary-background))',
          foreground: 'hsl(var(--secondary-foreground))',
        },

        red: {
          DEFAULT: 'hsl(var(--red))',
          background: 'hsl(var(--red-background))',
          foreground: 'hsl(var(--red-foreground))',
        },

        orange: {
          DEFAULT: 'hsl(var(--orange))',
          background: 'hsl(var(--orange-background))',
          foreground: 'hsl(var(--orange-foreground))',
        },

        green: {
          DEFAULT: 'hsl(var(--green))',
          background: 'hsl(var(--green-background))',
          foreground: 'hsl(var(--green-foreground))',
        },
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
  plugins: [
    twAnimate,
    flexPlugin,
    transitionPlugin,
  ],
}

export default config
