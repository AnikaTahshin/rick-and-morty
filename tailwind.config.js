/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ttTravels: ["var(--font-ttravels)", "sans-serif"],
      },
      fontSize: {
        "8px": "0.5rem",
        "10px": "0.625rem",
        "12px": "0.75rem",
        "14px": "0.875rem",
        "16px": "1rem",
        "20px": "1.25rem",
        "24px": "1.5rem",
        "40px": "2.5rem",
        "128px": "8rem",
      },
      fontWeight: {
        medium: "500",       // Medium
        semibold: "600",     // DemiBold / SemiBold
        bold: "800",         // ExtraBold
      },
    },
  },
  plugins: [],
};
