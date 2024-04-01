import React from "react";
import { ResponsiveDrawer } from "../../components/Navbar";

export function DiscoverLayout({children}) {

    return (
        <div>
            <ResponsiveDrawer />
            {children}
        </div>
    );
}
