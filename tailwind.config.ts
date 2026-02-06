import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#281C9D',
          700: '#5655B9',
          500: '#A8A3D7',
          100: '#F2F1F9',
        },
        neutral: {
          900: '#343434',
          700: '#898989',
          600: '#9B9B9B',
          500: '#CACACA',
          200: '#E0E0E0',
          100: '#FFFFFF',
        },
        semantic: {
          error: '#FF4267',
          info: '#0089FE',
          warning: '#FFAF2A',
          success: '#52D5BA',
          danger: '#FB6B18',
        },
      },
      boxShadow: {
        card: '0px 4px 30px rgba(54, 41, 183, 0.07)',
        cardSmall: '0px -5px 30px rgba(54, 41, 183, 0.07)',
      },
      fontSize: {
        title1: ['24px', { lineHeight: '32px', fontWeight: '600' }],
        title2: ['20px', { lineHeight: '28px', fontWeight: '600' }],
        title3: ['16px', { lineHeight: '24px', fontWeight: '600' }],
        body1: ['16px', { lineHeight: '24px' }],
        body2: ['14px', { lineHeight: '20px' }],
        caption: ['12px', { lineHeight: '16px', fontWeight: '500' }],
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
