module.exports = {
  darkMode: "class", // Enable dark mode support
  content: ["./node_modules/flowbite/**/*.js", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#1E3A8A", // Navy Blue
          dark: "#5A20CB", // Royal Purple
        },
        secondary: {
          light: "#F3F4F6", // Soft Gray
          dark: "#111827", // Charcoal Gray
        },
        text: {
          light: "#1F2937", // Dark Slate
          dark: "#D1D5DB", // Light Gray
        },
        accent: {
          cyan: "#0EA5E9", // Cyan
          coral: "#F97316", // Coral
        },
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-in-top': {
          '0%': {
            transform: 'translateY(-20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out",
        "slide-up": "slideUp 1s ease-out",
        'zoom-in': 'zoomIn 1s ease-out',
        'slide-in': 'slideIn 1s ease-out',
        'slide-in-top': 'slide-in-top 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // Include Flowbite for components
  ],
};
