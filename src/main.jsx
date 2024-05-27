import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import routes from "./routes";
import AllProviders from "./contexts/index";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProviders>
      <RouterProvider router={router} />
    </AllProviders>
  </React.StrictMode>
);
