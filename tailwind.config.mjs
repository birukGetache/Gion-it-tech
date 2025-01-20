/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background variable
        foreground: "var(--foreground)", // Custom foreground variable
      },
      fontFamily: {
        cursive: ['"Comic Sans MS"', 'cursive', 'sans-serif'], // Add a cursive font
      },
      keyframes: {
        'gradient-motion': {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      animation: {
        'gradient-motion': "gradient-motion 3s linear infinite", // Gradient motion animation
      },
      backgroundSize: {
        '400%': '400%', // Extended background size for smoother animation
      },
    },
  },
  plugins: [],
};
