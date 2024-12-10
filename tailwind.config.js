/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        primary: "#FF3600",
        primaryHover: "#E02F00", // slightly darker for hover effect
        secondary: "#FF6F47", // lighter orange-red for highlights and accents
        secondaryHover: "#E06440", // slightly darker for hover effect
        error: "#FF4D4F",
        success: "#52C41A",
        light: {
          background: "#FFFFFF",
          overlay: "rgba(255, 255, 255, 0.6)",
          text: "#333333",
          card: "#FAFAFA",
          border: "#E0E0E0",
          input: "#FFE8E0", // very light orange to complement the primary color
          buttonText: "#FFFFFF",
          buttonHover: "#FF5A36", // hover effect for light button
        },
        dark: {
          background: "#1A1A1A", // dark gray to let the orange-red pop
          overlay: "rgba(0, 0, 0, 0.6)",
          text: "#E0E0E0",
          card: "#2C2C2C",
          border: "#333333",
          input: "#3D2F2A", // dark muted orange for a cohesive look
          buttonText: "#FFFFFF",
          buttonHover: "#D03D30", // hover effect for dark button
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        bounceSlow: "bounce 2s infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
