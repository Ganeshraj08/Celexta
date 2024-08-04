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
        card:"#C017C31A",
        cardBold:"#C017C3",
        hard: "#130022",
        darkgradient:"#3A373766",
        whitebg:'rgba(255, 255, 255, 0.15)',
        pink:'rgba(192, 23, 195, 1)',
        purpletransparent: 'rgba(139, 56, 205, 0.30)',
        purpleStart:"#C017C4",
        purpleEnd:"#8B38CD",
        blur:"#00000066"
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
        doublegradient:"linear-gradient(180deg, rgba(192, 23, 196, 0.3) 0%, rgba(139, 56, 205, 0.3) 100%)",
        lineargradient:"linear-gradient(98.23deg, #8B38CD -2.8%, #C017C4 97.1%)",

      },
      borderColor:{
        'gradientborder':'linear-gradient(90deg, #C017C4 0%, #8B38CD 100%)'
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none', 
          '&::-webkit-scrollbar': {
            display: 'none', 
          },
        },
        '.scrollbar-custom': {
          '&::-webkit-scrollbar': {
            width: '3px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#ffffff',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#8B38CD',
            borderRadius: '5px',
            border: '1px solid #8B38CD',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#8B38CD',
          },
        },
       
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};
