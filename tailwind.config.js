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
        darkgradient:"#3A373766",
        whitebg:'rgba(255, 255, 255, 0.15)',
        pink:'rgba(192, 23, 195, 1)'
      },
      
      boxShadow: {
        'custom-white': '0px 4px 15px 0px rgba(255, 255, 255, 0.25)',
      },
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('assets/images/background.jfif')",
        customgradient: 'linear-gradient(180deg, rgba(234, 103, 255, 0.48) 0%, rgba(181, 72, 219, 0.6) 28.5%, rgba(139, 56, 205, 0.6) 63%, rgba(94, 11, 159, 0.6) 100%)',

      },
    },
  },
  plugins: [],
};
