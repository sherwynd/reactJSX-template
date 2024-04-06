import { useState, useEffect } from "react";

import { ResponsiveDrawer } from "./components/Navbar";
// import { Outlet } from "@mui/icons-material";
import { Outlet  } from "react-router-dom";


export default function App() {
  return (
    <>
      {/* <ResponsiveDrawer /> */}
      <Outlet/>
    </>
  );
}
