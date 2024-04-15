import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Mohave, sans-serif",
  },
  palette: {
    primary: {
      light: "#FFA31A",
      main: "#FFC876",
      dark: "#002884",
      contrastText: "#000",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Monoton, sans-serif",
          backgroundColor: "#FFC876",
          color: "#000",
        },
        outlinedPrimary: {
          "&:hover": {
            backgroundColor: "#FFEDD1",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFF9EF",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Mohave, Arial, sans-serif",
        },
      },
    },
  },
});

export default theme;
