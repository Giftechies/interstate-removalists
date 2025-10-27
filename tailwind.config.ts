const plugin = require("tailwindcss/plugin");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xs: "480px",
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          xxl: "1400px",
          "3xl": "1600px",
          "4xl": "1800px",
        },
      },

      screens: {
        xs: "480px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        "3xl": "1600px",
        "4xl": "1800px",
      },

      // *** START: SHADCN COLOR INTEGRATION ***
      // We must define these keys using HSL variables for Shadcn components to work.
      colors: {
        // Core Shadcn Required Colors (fixes `border-border` error)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Your Primary/Secondary colors now use the HSL variables defined in globals.css
        primary: {
          DEFAULT: "hsl(var(--primary-shadcn))", // References HSL of #F39740
          foreground: "hsl(var(--primary-foreground))", // White text on primary
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary-shadcn))", // References a light background color
          foreground: "hsl(var(--secondary-foreground))", // Dark text on secondary
          light: "#8eafed", // Kept your existing custom secondaryLight hex
        },
        
        // Other necessary Shadcn colors
        destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          // Retaining your custom accent shades
          1: "#1D1D1D",
          2: "#121212",
          3: "#FFCE32",
          4: "#FFEFD7",
          5: "#CDFF00",
        },
        card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
        },
        popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
        },
        
        // Retaining your original custom color shades
        white: {
          1: "#FFFFFF",
          2: "#F2F6F6",
          3: "#B3B6B9",
          4: "#F8F8F8",
        },
        black: {
          1: "#343839",
          2: "#232627",
          3: "#555555",
          4: "#121212",
        },
      },
      // *** END: SHADCN COLOR INTEGRATION ***

      backgroundImage: {
        "hero-pattern":
          "linear-gradient(256deg, #CBF1D3 2.16%, #FFEFD7 109.64%)",
      },

      fontFamily: {
        kanit: ["var(--body-font)"],
      },
      boxShadow: {
        custom1: "0px 6px 30px 0px rgba(0, 0, 0, 0.04)",
        custom2: "0px 6px 30px 0px rgba(0, 0, 0, 0.06)",
        custom3: "0px 6px 30px 0px rgba(0, 0, 0, 0.08)",
      },

      spacing: {
        15: "60px",
        18: "72px",
        25: "100px",
        30: "120px",
      },

      keyframes: {
        "custom-pulse": {
          "0%": { opacity: "0.2" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        "spin-slow": "spin 10s linear infinite",
        "custom-pulse":
          "custom-pulse 6s ease-in-out infinite alternate-reverse;",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }: { addComponents: ({}) => void }) {
      addComponents({
        ".theme-transition-3": {
          transition: "all 0.3s ease-in-out",
        },
        ".theme-transition-10": {
          transition: "all 1s ease-in-out",
        },
        ".theme-transition-4": {
          transition: "all 0.4s ease-in-out",
        },
        ".theme-transition-6": {
          transition: "all 0.6s ease-in-out",
        },
        ".theme-transition-8": {
          transition: "all 0.8s ease-in-out",
        },
      });
    }),
  ],
};
export default config;
