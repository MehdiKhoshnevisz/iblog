/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        opacity: {
          "0, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.4,
          },
        },
      },
      animation: {
        opacity: "opacity 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
