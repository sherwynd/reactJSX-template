import { useState, useEffect } from "react";

import { ResponsiveDrawer } from "./components/Navbar";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <>
      <ResponsiveDrawer />
    </>
  );
}
