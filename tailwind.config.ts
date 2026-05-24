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
        brand: {
          DEFAULT: '#1D4ED8',
          light: '#DBEAFE',
          muted: '#BFDBFE',
          dark: '#1E40AF',
        },
        ink: {
          DEFAULT: '#0F172A',
          muted: '#475569',
          faint: '#94A3B8',
        },
        surface: {
          DEFAULT: '#F8FAFF',
          card: '#FFFFFF',
          border: '#DDEAF8',
        },
      },
    },
  },
  plugins: [],
}
export default config
