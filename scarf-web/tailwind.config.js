/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pastel renk paleti için özel renkler ekliyoruz.
        // Bu renkler projenin minimal ve yumuşak estetiğine katkı sağlayacak.
        'pastel-pink': '#FFD1DC',
        'pastel-blue': '#AEC6CF',
        'pastel-green': '#B2F0C8',
        'pastel-yellow': '#FDFD96',
      },
    },
  },
  plugins: [],
}