import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "var(--color-white)",
        ink: "var(--color-ink)",
        "ink-soft": "var(--color-ink-soft)",
        "ink-faint": "var(--color-ink-faint)",
        paper: "var(--color-paper)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        "surface-3": "var(--color-surface-3)",
        line: "var(--color-line)",
        "line-strong": "var(--color-line-strong)",
        navy: "var(--color-navy)",
        "navy-tint": "var(--color-navy-tint)",
        blue: {
          DEFAULT: "var(--color-blue)",
          600: "var(--color-blue-600)",
          700: "var(--color-blue-700)",
          tint: "var(--color-blue-tint)",
        },
        teal: {
          DEFAULT: "var(--color-teal)",
          600: "var(--color-teal-600)",
          tint: "var(--color-teal-tint)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          tint: "var(--color-success-tint)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          tint: "var(--color-warning-tint)",
        },
        danger: {
          DEFAULT: "var(--color-danger)",
          tint: "var(--color-danger-tint)",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-plex-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "var(--shadow)",
        "card-lg": "var(--shadow-lg)",
      },
      maxWidth: {
        content: "1120px",
        narrow: "760px",
      },
    },
  },
  plugins: [],
};

export default config;
