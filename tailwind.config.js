/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#16191E",
        primary: "#F8F8F8",
        footer: "#040401",
      },
    },
  },
  plugins: [],
};
