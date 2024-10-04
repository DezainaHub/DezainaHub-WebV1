/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        // ----Global Colours--------

        "PrimaryColor": "#1e1e1e",
        "SecondaryColor": "#25C1EC",
        "ThirdColor":  '#f4f4f4',

        // ----Global Font Colors--------

        "HeadFontColor": "#364154",
        "SecondaryFontColor":  "#ffffff",
        "ContentFontColor":  "#888888",
  
      },
      fontFamily: {

        // Global Fonts

        "HeadFont":  "Montserrat",
        "SecondaryFont" : "Martel Sans",
        "ContentFont": "Rasa"
      },
      borderRadius: {

        // ----Global Border Radius--------

        "PrimaryBorderRadius": "1.25rem",
        "SecondaryBorderRadius": "0.8rem",
             
        "UpperRadius": "1.25rem 1.25rem 0rem 0rem",
        "UpperSecondaryRadius": "0.8rem 0.8rem 0rem 0rem",
        "BottomRadius": "0rem 0rem 1.25rem 1.25rem",
      },
      boxShadow: {
        
        // ----Global Shadow--------
        
        
        "PrimaryShadow": "0px 5px 30px 2px rgba(136, 137, 137, 0.25)",
        "SecondaryShadow": "0px 5px 20px 5px rgba(0, 0, 0, 0.35)",
        "ThirdShadow": "0px 5px 20px 5px rgba(0, 0, 0, 0.15)",
        
        
        // Helping Shadows
        
        "HelpingShadowPrimaryColor": "rgba(30, 30, 30, 0.05)",
        "HelpingShadowDarkPrimaryColor": "rgba(30, 30, 30, 0.5)",
        "HelpingShadowSecondaryColor": "rgba(37, 193, 236, 0.2)",
        "HelpingShadowThirdColor": "rgba(255, 171, 171, 0.2)",
      }
    },
  },
  plugins: [],
}

