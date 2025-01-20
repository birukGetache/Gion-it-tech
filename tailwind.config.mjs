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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cursive: ['"Comic Sans MS"', 'cursive', 'sans-serif'], // Add your cursive font
      },
      keyframes: {
        aboutanime: {
          from: { transform: "translateY(300px)" },
          to: { transform: "translateX(0px)" },
        },
        serviceanime: { // Move this inside the `keyframes` object
          from: { transform: "translateY(100px)" },
          to: { transform: "translateX(0px)" },
        },
      },
      animation: {
        aboutanime: "aboutanime 1s ease-out", // Customize duration and easing as needed
        serviceanime: "serviceanime 1s ease-out",
      },
    },
  },
  plugins: [],
};
