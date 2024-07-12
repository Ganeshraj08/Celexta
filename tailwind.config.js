/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #8B38CD",
        secondary: "#8C52FF",
        tertiary: "#6C18B0",
        background: "#130022",
        card: "#1E1E1E",
        text: "#E5E5E5",
        blackColor: "#030606",
        purple: "#5E0B9F",
        white: "#FFFFFF",
        dark: "#8B38CD",
        light: "#FFFFFF0D",
        hard: "#130022",
      },
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('assets/images/background.jfif')",
      },
    },
  },
  plugins: [],
};
