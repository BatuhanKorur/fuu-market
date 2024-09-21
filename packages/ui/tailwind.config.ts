import * as twAnimate from 'tailwindcss-animate'

const config = {
  darkMode: 'selector',
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
      },
    },
  },
  plugins: [
    twAnimate,
  ],
}

export default config
