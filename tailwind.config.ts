import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-kanit)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        body: ['15px', { lineHeight: '1.7' }],
        heading: ['26px', { lineHeight: '1.3', fontWeight: '400' }],
      },
      colors: {
        green: {
          brand: '#15803D',
          light: '#DCFCE7',
          muted: '#BBF7D0',
        },
        ink: {
          DEFAULT: '#1A2D1C',
          muted: '#6A8A6C',
          faint: '#9DB89E',
        },
        surface: {
          DEFAULT: '#F7FBF7',
          card: '#FFFFFF',
          border: '#D9EAD9',
        },
      },
    },
  },
  plugins: [],
}
export default config
