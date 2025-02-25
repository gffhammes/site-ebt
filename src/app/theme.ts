"use Client";

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
      default: "#194b3c", 
    },
    error: {
      main: "#3F0204",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontSize: 42,
      "& strong": {
        color: "white",
      },
      "@media (min-width:600px)": {
        fontSize: 62,
      },
    },
    h2: {
      fontSize: 32,
      "& strong": {
        color: "white",
      },
      "@media (min-width:600px)": {
        fontSize: 48,
      },
    },
    allVariants: {
      color: "white", 
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
        contained: {
          textTransform: "none",
          color: "white",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          boxShadow: "none",
          lineHeight: 1,
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
            "& fieldset": {
              border: "none",
            },
          },
        },
      },
    },
  },
});

theme.typography.h1.color = theme.palette.primary.main;
theme.typography.h2.color = theme.palette.primary.main;

export default theme;
