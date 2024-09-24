import * as twAnimate from 'tailwindcss-animate'
// @ts-ignore
import flexPlugin from './tailwind/flex.plugin.js'
// @ts-ignore
import transitionPlugin from './tailwind/transition.plugin.js'

const config = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    '../../packages/ui/src/**/*.{ts,tsx}',
    '../../apps/storybook/.storybook/**/*',
    '../../apps/admin/src/**/*.{ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '2xs': ['0.775rem'],
        'xs': ['0.825rem'],
        'sm': ['0.875rem'],
        'base': ['0.94rem', {
          letterSpacing: '0.01em',
        }],
        'md': ['1rem'],
        'lg': ['1.1rem'],
        'xl': ['1.2rem'],
        '2xl': ['1.315rem'],
        '3xl': ['1.5rem'],
        '4xl': ['1.75rem'],
        '5xl': ['2rem'],
        '6xl': ['2.25rem'],
        '7xl': ['2.5rem'],
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
      brightness: {
        80: '.80',
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
