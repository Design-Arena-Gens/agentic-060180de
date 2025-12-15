import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'void-black': '#0E0E0E',
        'deep-surface': '#121212',
        'prism-yellow': '#F3E68F',
        'neon-pink': '#EFA9B6',
        'cyan-glow': '#4AF2EA',
        'zinc-400': '#A1A1AA',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
