import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { AuthProvider } from "./contexts/AuthContext";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
