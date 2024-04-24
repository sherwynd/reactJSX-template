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
      main: "#FFF9EF",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Mohave, sans-serif",
          fontWeight: "bold",
          fontSize: "1rem",
          backgroundColor: "#FFC876",
          color: "#000",
          "&:hover": {
            backgroundColor: "#FFA31A",
          },
        },
        outlinedPrimary: {
          "&:hover": {
            backgroundColor: "#FFEDD1",
          },
        },
        outlinedWarning: {
          backgroundColor: "red",
          color: "white",
          "&:hover": {
            backgroundColor: "#FFEDD1",
            color: "black",
          },
        },
        outlinedSuccess: {
          backgroundColor: "green",
          color: "white",
          "&:hover": {
            backgroundColor: "#FFEDD1",
            color: "black",
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
