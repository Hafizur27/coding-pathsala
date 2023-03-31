/** @type {import('tailwindcss').Config} */
   export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#db5f1c",
                  
          "secondary": "#e8c766",
                  
          "accent": "#a5ace5",
                  
          "neutral": "#1E1A23",
                  
          "base-100": "#E7EFF4",
                  
          "info": "#6D80D0",
                  
          "success": "#26D988",
                  
          "warning": "#F6B128",
                  
          "error": "#EA3B2E",
                  },
                },
              ],
    },
  plugins: [require("daisyui")],
}

