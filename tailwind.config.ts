/**
 * Role: Tailwind CSS 설정 — 로보락 S10 레퍼런스 하이테크 디자인
 * Key Features: 퓨어 블랙, 실버 그레이, 레이저 레드, 네온 블루(물청소 등 엑센트)
 * Dependencies: tailwindcss
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: "#000000",
          light: "#F2F2F2", /* Zenixa soft light gray */
          card: "rgba(255,255,255,0.05)",
          panel: "#111111", /* 제어 패널/팝업 배경 */
        },
        accent: {
          DEFAULT: "#FB4D27", /* Zenixa Flame Orange */
          red: "#FB4D27",
          blue: "#00C2FF",    /* 물갈이/센서 블루 */
          silver: "#B3B3B3",  /* 메탈릭 실버 */
        },
        muted: {
          DEFAULT: "rgba(255,255,255,0.6)",
          dark: "rgba(0,0,0,0.6)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
