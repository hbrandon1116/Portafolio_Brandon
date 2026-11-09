/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Superficies: negros profundos con ligera escala de elevación
        ink: {
          950: '#0A0A0A', // fondo base
          900: '#101012', // secciones alternas
          800: '#17171A', // tarjetas
          700: '#222226', // bordes / separadores
        },
        // Acentos: únicos colores "de marca"
        accent: {
          sapphire: '#1D4ED8', // azul zafiro  (hover presionado)
          electric: '#3B82F6', // azul eléctrico (primario, = blue-500)
          sky: '#60A5FA',      // azul claro (texto destacado, = blue-400)
          cyan: '#22D3EE',     // cian brillante (resplandores, = cyan-400)
        },
      },
      fontFamily: {
        sans: [
          '"Inter Variable"',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(59, 130, 246, 0.55)',
        'glow-sm': '0 0 24px -6px rgba(59, 130, 246, 0.5)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.5)',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #3B82F6 0%, #22D3EE 100%)',
      },
    },
  },
  plugins: [],
}
