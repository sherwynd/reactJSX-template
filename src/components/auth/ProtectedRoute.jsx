import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { accessToken, refreshAccessToken } = useContext(AuthContext);

  useEffect(() => {
    if (!accessToken) {
      refreshAccessToken();
    }
  }, [accessToken, refreshAccessToken]);

  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
