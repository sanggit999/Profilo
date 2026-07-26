/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0B0F17',
          light: '#F8FAFC',
        },
        surface: {
          dark: '#151C28',
          light: '#FFFFFF',
          borderDark: '#1E293B',
          borderLight: '#E2E8F0',
        },
        brand: {
          blue: '#3B82F6',
          blueHover: '#2563EB',
          violet: '#8B5CF6',
          mint: '#10B981',
          glowBlue: 'rgba(59, 130, 246, 0.25)',
          glowViolet: 'rgba(139, 92, 246, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
