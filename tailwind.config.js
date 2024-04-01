module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      width: {
        "fill-available": "-webkit-fill-available",
        "inherit": "inherit"
      },
      backgroundImage: {
        becomingbg: "url('/src/assets/becoming-bg.svg')",
      },
      colors: {
        "locked-overlay":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 2.60%, #FFF 37.50%)",
        btnshadow: "4px 4px 20px 0px rgba(13, 39, 107, 0.06);",
        releasesbg: "rgba(235, 250, 250, 1)",
        rankbg: "linear-gradient(180deg, #F8E9DB 0%, #EBFAFA 100%)",
        transparentborder: "rgba(11, 70, 84, 0.25)",
        orangebtn: "#DC9249",
        password: "rgba(208, 201, 214, 1)",
        checkboxborder: "rgba(11, 70, 84, 0.24)",
        inputborder: "rgba(232, 233, 232, 1)",
        cindigo: "rgba(11, 70, 84, 1)",
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_01": "#060706",
          "900_11": "#00000011",
          "900_19": "#00000019",
          "900_3f": "#0000003f",
          "900_7f_01": "#0607067f",
          "900_26": "#00000026",
          "900_e5": "#060706e5",
        },
        light_blue: {
          200: "#75d2f4",
          300: "#4cdafe",
          400: "#2aabee",
          A700_38: "#0084f438",
        },
        light_green: { 200: "#d7caa8", A700: "#4ec306" },
        deep_orange: {
          50: "#f8e9db",
          100: "#f1d3b6",
          200: "#eabe92",
          700: "#dc4a26",
          "100_01": "#fab9af",
          A700: "#da2902",
          A100: "#e3a86d",
        },
        gray: {
          100: "#f3f4f3",
          200: "#e8e9e8",
          300: "#dbdbe9",
          500: "#a5a6a6",
          600: "#797a79",
          800: "#4c4d4d",
          900: "#1a1d2b",
          "800_02": "#45454a",
          "800_01": "#583a1d",
          "200_a2": "#e8e9e8a2",
          "100_a2": "#f1f7f9a2",
          "200_01": "#ebeaed",
          "100_01": "#f5f0fb",
          "300_a2": "#dedce1a2",
          "900_02": "#131313",
          "900_03": "#1b1b1b",
          "900_04": "#19041d",
          "900_05": "#20162b",
          "600_01": "#737377",
          "900_01": "#1f2120",
          "900_06": "#262626",
          "300_01": "#dedce1",
        },
        red: {
          300: "#de6c6b",
          400: "#dc4848",
          500: "#ea4335",
          "400_26": "#dc484826",
          A200: "#ff5964",
          "400_87": "#dc484887",
        },
        blue: {
          50: "#e5f3fe",
          200: "#8bcde5",
          400: "#4a90e2",
          500: "#1da1f2",
          600: "#1182ea",
          "200_01": "#99cefb",
          "600_01": "#229ed9",
          "600_87": "#1182ea87",
          "800_90": "#2958c590",
          "300_75": "#5cb9ec75",
          "400_75": "#579bea75",
          "400_01": "#339df6",
        },
        yellow: { 800: "#dc903c", "800_01": "#ea942c" },
        indigo: {
          50: "#e7e9f0",
          400: "#466cc6",
          500: "#4267b2",
          "50_01": "#ebebf9",
          "900_19": "#0d276b19",
          A700: "#0346f2",
          "900_0f": "#0d276b0f",
          A100: "#7b89f8",
        },
        teal: {
          400: "#31a3a6",
          900: "#0b4654",
          A200_90: "#4ef4ff90",
          "900_3f": "#0b46543f",
          "900_3d": "#0b46543d",
          "900_02": "#185253",
          "900_01": "#003562",
        },
        blue_gray: {
          50: "#f0f1f3",
          100: "#cfc9d6",
          400: "#858ead",
          500: "#4d82a3",
          800: "#3e3355",
          900: "#2b3448",
          "900_02": "#333333",
          "900_01": "#303a42",
          "100_01": "#d9d9d9",
          "100_02": "#d2d3d2",
          "400_0f": "#848a910f",
          "100_03": "#cdcfd3",
          "400_0a": "#898f950a",
          "800_01": "#402c56",
          "600_19": "#525e8819",
          "500_01": "#5ca28b",
        },
        purple: { A200: "#e249f2", A400_87: "#cc11ea87", A400: "#cc11ea" },
        amber: { 500: "#fbbc05", "500_01": "#d7bb04" },
        orange: {
          100: "#f9dfc0",
          300: "#ecb751",
          600: "#ff8700",
          A200: "#dc9249",
          A200_87: "#dc924987",
        },
        white: { A700_66: "#ffffff66", A700: "#ffffff", A700_00: "#ffffff00" },
        lime: { 50: "#fbf4ed", 800: "#b0753a", 900: "#74471b" },
        cyan: { 50: "#ebfafa" },
        green: { 600: "#34a853", A700: "#0dc143" },
        deep_purple: {
          100: "#d9c5ef",
          300: "#9f6dd6",
          "300_26": "#9f6dd626",
          "300_38": "#9f6dd638",
        },
      },
      fontFamily: {
        athiti: "Athiti",
        poppins: "Poppins",
        nunito: "Nunito",
        inter: "Inter",
        sourcesanspro: "Source Sans Pro",
        vodafonerg: "Vodafone Rg",
        opensans: "Open Sans",
      },
      backgroundImage: {
        bg: "",
        gradient: "linear-gradient(141deg ,#466cc6,#75d2f4)",
        gradient1: "linear-gradient(92deg ,#5cb9ec75,#579bea75)",
        gradient2: "linear-gradient(141deg ,#2958c590,#4ef4ff90)",
        gradient3: "linear-gradient(180deg ,#ffffff00,#ffffff)",
        gradient4: "linear-gradient(142deg ,#dc4848,#dc9249)",
        gradient5: "linear-gradient(142deg ,#1182ea,#dc9249)",
        gradient6: "linear-gradient(142deg ,#cc11ea,#dc9249)",
        gradient7: "linear-gradient(180deg ,#f8e9db,#ebfafa)",
        gradient8: "linear-gradient(142deg ,#dc484887,#dc924987)",
        gradient9: "linear-gradient(142deg ,#1182ea87,#dc924987)",
        gradient10: "linear-gradient(142deg ,#cc11ea87,#dc924987)",
        gradient11: "linear-gradient(180deg ,#ffffff,#f5f0fb)",
        gradient12: "linear-gradient(180deg ,#0607067f,#060706e5)",
        gradient13: "linear-gradient(180deg ,#2aabee,#229ed9)",
        gradient14: "linear-gradient(180deg ,#ff8700,#da2902)",
        gradient15: "linear-gradient(107deg ,#9f6dd638,#0084f438)",
        gradient16: "linear-gradient(315deg ,#9f6dd6,#339df6)",
      },
      boxShadow: {
        bs1: "0px 4px  4px 0px #0000003f",
        bs6: "4px 4px  20px 0px #0d276b0f",
        bs2: "0px 4px  18px 4px #525e8819",
        bs9: "0px 4px  4px 0px #00000019",
        bs8: "0px 4px  8px 0px #00000019",
        bs: "8px 8px  16px 4px #848a910f",
        bs5: "8px 8px  16px 4px #898f950a",
        bs10: "0px 4px  28px 0px #00000026",
        bs4: "0px 7px  20px 0px #00000011",
        bs3: "0px 7px  64px 0px #00000011",
        bs7: "-8px 8px  40px 0px #00000026",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};