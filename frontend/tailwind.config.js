// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         // Système noir & blanc épuré
//         ink: {
//           50: "#fafafa",
//           100: "#f5f5f5",
//           200: "#eeeeee",
//           300: "#e0e0e0",
//           400: "#bdbdbd",
//           500: "#9e9e9e",
//           600: "#757575",
//           700: "#616161",
//           800: "#424242",
//           900: "#212121",
//           950: "#0a0a0a",
//         },
//         paper: {
//           DEFAULT: "#ffffff",
//           dark: "#fafafa",
//         },
//       },
//       backgroundImage: {
//         "mesh-pattern":
//           "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
//       },
//       boxShadow: {
//         soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
//         medium: "0 4px 16px rgba(0, 0, 0, 0.06)",
//         strong: "0 8px 24px rgba(0, 0, 0, 0.08)",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // Couleur principale - Cyan Électrique
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9", // Cyan principal
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        // Couleur secondaire - Violet Vibrant
        secondary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#8b5cf6", // Violet principal
          700: "#7c3aed",
          800: "#6d28d9",
          900: "#5b21b6",
          950: "#4c1d95",
        },
        // Accent - Rose/Pink Électrique
        accent: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899", // Rose principal
          600: "#db2777",
          700: "#be185d",
          800: "#9f1239",
          900: "#831843",
          950: "#500724",
        },
        // Noir et Gris - Avec nuances bleu nuit
        dark: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#0b1120",
          DEFAULT: "#030712",
        },
        // Alias pour faciliter l'usage
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        violet: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9f1239",
          900: "#831843",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-in-out",
        slideDown: "slideDown 0.5s ease-out",
        slideUp: "slideUp 0.5s ease-out",
        slideRight: "slideRight 0.5s ease-out",
        slideLeft: "slideLeft 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-aurora": "pulse-aurora 3s ease-in-out infinite",
        "aurora-wave": "aurora-wave 15s ease infinite",
        "shimmer-aurora": "shimmer-aurora 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "pulse-aurora": {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(14, 165, 233, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 30px rgba(14, 165, 233, 0.6), 0 0 60px rgba(139, 92, 246, 0.4), 0 0 90px rgba(236, 72, 153, 0.2)",
          },
        },
        "aurora-wave": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "shimmer-aurora": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-cyan":
          "0 0 30px rgba(14, 165, 233, 0.4), 0 0 60px rgba(14, 165, 233, 0.2)",
        "glow-cyan-lg":
          "0 0 40px rgba(14, 165, 233, 0.6), 0 0 80px rgba(14, 165, 233, 0.3), 0 0 120px rgba(14, 165, 233, 0.1)",
        "glow-violet":
          "0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)",
        "glow-violet-lg":
          "0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(139, 92, 246, 0.3), 0 0 120px rgba(139, 92, 246, 0.1)",
        "glow-pink":
          "0 0 30px rgba(236, 72, 153, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)",
        "glow-pink-lg":
          "0 0 40px rgba(236, 72, 153, 0.6), 0 0 80px rgba(236, 72, 153, 0.3)",
        "glow-aurora":
          "0 0 40px rgba(14, 165, 233, 0.3), 0 0 60px rgba(139, 92, 246, 0.2), 0 0 80px rgba(236, 72, 153, 0.1)",
      },
      spacing: {
        18: "4.5rem",
        112: "28rem",
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionDuration: {
        400: "400ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-aurora":
          "linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 50%, #EC4899 100%)",
        "gradient-cyan-violet":
          "linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 100%)",
        "gradient-violet-pink":
          "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
        "gradient-night":
          "linear-gradient(135deg, #030712 0%, #0B1120 50%, #030712 100%)",
      },
    },
    keyframes: {
      fadeInUp: {
        "0%": { opacity: "0", transform: "translateY(20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
    animation: {
      fadeInUp: "fadeInUp 0.6s ease-out forwards",
    },
  },
  plugins: [],
};
