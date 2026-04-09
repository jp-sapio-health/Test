/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#F5F1EA',
        ink: '#1A1A1A',
        muted: '#6B6558',
        line: '#E5DFD3',
        accent: '#D94F2B',
        leaf: '#3F5D45',
        amber: '#C8872E',
      },
      borderRadius: {
        xl: '14px',
      },
    },
  },
  plugins: [],
}
