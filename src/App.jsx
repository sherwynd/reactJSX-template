import { useState, useEffect } from "react";
import { Layout } from "./components/Layout";
import { Test } from "./components/Test";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({});

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Test />
        </Layout>
      </ThemeProvider>
    </>
  );
}
