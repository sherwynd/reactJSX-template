import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { ProductContextProvider } from "./ProductContext";
import { AuthProvider } from "./AuthContext";

import store from "../stores/store";

const AllProviders = (prop) => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ProductContextProvider>
          <AuthProvider>{prop.children}</AuthProvider>
        </ProductContextProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default AllProviders;
