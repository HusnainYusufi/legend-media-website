import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        green: {
          400: '#34D399', // Leaf Green Accent
          600: '#10B981', // Leaf Green Primary
          700: '#059669', // Darker green for hover
          900: '#064E3B', // Dark Green Secondary
          50: '#ECFDF5', // Light green backgrounds
        },
        slate: {
          50: '#F8FAFC', // Neutral Light
          100: '#F1F5F9',
          200: '#E2E8F0',
          500: '#64748B', // Neutral
          600: '#475569',
          700: '#334155',
          900: '#0F172A', // Neutral Dark
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Desktop
        '6xl': ['4rem', { lineHeight: '1', letterSpacing: '-0.02em' }], // Hero
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.02em' }], // H1
        '4xl': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // H2
        '3xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // H3
        '2xl': ['1.5rem', { lineHeight: '1.3' }], // H4
        xl: ['1.25rem', { lineHeight: '1.4' }],
        lg: ['1.125rem', { lineHeight: '1.75' }], // Body Large
        base: ['1rem', { lineHeight: '1.75' }], // Body
        sm: ['0.875rem', { lineHeight: '1.5' }], // Body Small
        xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }], // Caption
      },
      spacing: {
        // 4px scale
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;

