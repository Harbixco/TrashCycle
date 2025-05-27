import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      
    },
    extend: {
      colors: {
        primary: "#1D2B53",
        secondary: "#6BC049",
        adminBg: "#F5F5F5",
        adminPrimary: "#27662A",
        
      },
    },
  },
  plugins: [flowbite.plugin()],
};
