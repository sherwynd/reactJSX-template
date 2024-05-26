import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./stores/store";
import { AuthProvider } from "./contexts/AuthContext";

import routes from "./routes";
import "./styles/index.css";
import { ProductContextProvider } from "./contexts/ProductContext";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </Provider>
      </StyledEngineProvider>
    </ProductContextProvider>
  </React.StrictMode>
);
