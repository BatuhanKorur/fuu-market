import * as twAnimate from 'tailwindcss-animate'

const config = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    './pages/**/*.{ts,tsx,js,jsx,html}',
    './components/**/*.{ts,tsx,js,jsx,html}',
    './app/**/*.{ts,tsx,js,jsx,html}',
    './src/**/*.{ts,tsx,js,jsx,html}',
    '../../packages/ui/**/*.{ts,tsx}',
    '../../apps/storybook/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        border: {
          DEFAULT: 'hsl(var(--border))',
          light: 'hsl(var(--border-light))',
        },

        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-light))',
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
      },
    },
  },
  plugins: [
    twAnimate,
  ],
}

export default config
