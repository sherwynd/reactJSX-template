import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { ProductContextProvider } from "./contexts/ProductContext";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </ProductContextProvider>
  </React.StrictMode>
);
