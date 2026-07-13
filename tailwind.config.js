/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#0E0B12",
          panel: "#161219",
          card: "#1B161F",
          line: "#2B2530",
        },
        ink: {
          DEFAULT: "#F4F2F6",
          muted: "#A199A8",
          faint: "#61586B",
        },
        violet: {
          glow: "#8B5CF6",
        },
        amber: {
          glow: "#F59E0B",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(139, 92, 246, 0.35), 0 0 80px -20px rgba(245, 158, 11, 0.25)",
        card: "0 8px 30px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "duo-gradient": "linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%)",
      },
      animation: {
        pulseBar: "pulseBar 1.4s ease-in-out infinite",
        floatSlow: "floatSlow 8s ease-in-out infinite",
      },
      keyframes: {
        pulseBar: {
          "0%, 100%": { transform: "scaleY(0.4)", opacity: "0.6" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
