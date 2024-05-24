import { NavBar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Test } from "./components/Test";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Alert,
  AlertTitle,
  Collapse,
  CssBaseline,
  IconButton,
} from "@mui/material";
import { green, orange } from "@mui/material/colors";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";

const theme = createTheme({});

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#dc8665",
    },
  },
});

const innerTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

export default function App() {
  const location = useLocation();
  const alertOpen = location.state?.alertOpen;
  return (
    <>
      {/* <ThemeProvider theme={outerTheme}> */}
      <CssBaseline />
      <NavBar>
        <Collapse in={alertOpen}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlertOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
            severity="info"
          >
            Reminder! The subscription receipt has been sent to your email!
          </Alert>
        </Collapse>
        <Outlet />
      </NavBar>
      {/* </ThemeProvider> */}
    </>
  );
}
