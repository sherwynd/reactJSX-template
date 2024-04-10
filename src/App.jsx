import { useState, useEffect } from "react";
import { Layout } from "./components/layout/Layout";
import { TopNavBar } from "./components/layout/TopNavBar";
import { Outlet } from "react-router-dom";
import { Test } from "./components/Test";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

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
  return (
    <>
      <ThemeProvider theme={outerTheme}>
        <CssBaseline />
        <TopNavBar />
        <Outlet />
      </ThemeProvider>
    </>
  );
}
