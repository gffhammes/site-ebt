"use client";
import { createTheme } from "@mui/material/styles";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#F76101",
    },
    secondary: {
      main: "#3F0204",
    },
    background: {
      default: "#ffffff",
    },
    error: {
      main: "#ff0000",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontSize: 42,
      "@media (min-width:600px)": {
        fontSize: 62,
      },
    },
    h2: {
      fontSize: 32,
      "@media (min-width:600px)": {
        fontSize: 48,
      },
    },
    body1: {
      "@media (min-width:600px)": {
        fontSize: 20,
      },
    },
    button: {
      "@media (min-width:600px)": {
        fontSize: 24,
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 500,
        },
        contained: {
          textTransform: "none",
          color: "white",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          boxShadow: "none",
          lineHeight: 1,
        },
        containedPrimary: {
          color: "#fff",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        sx: {
          "& .MuiInputBase-root": {
            borderRadius: 4,
            py: 0,
            backgroundColor: "white",
            boxShadow: 2,
            px: 1,
            "& .MuiInputBase-input": {
              py: 1,
              px: 1,
            },
          },
        },
      },
    },
  },
});

export default theme;
