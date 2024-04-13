import App from "../App.jsx";
import { Profile } from "../pages/profile/Profile";
import { Discover } from "../pages/discover/Discover";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { ErrorPage } from "../pages/common/ErrorPage.jsx";
import { ForgotPassword } from "../pages/auth/ForgotPassword";
import { Test } from "../components/Test";
import ProductDetail from "../pages/discover/ProductDetail.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "discover",
        element: <Discover />,
      },
      {
        path: "discover/:id",
        element: <ProductDetail />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "forgotPassword",
    element: <ForgotPassword />,
  },
];

export default routes;
