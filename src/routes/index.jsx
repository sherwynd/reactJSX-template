import App from "../App.jsx";
import { Profile } from "../pages/profile/Profile";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { ErrorPage } from "../pages/common/ErrorPage.jsx";
import { ForgotPassword } from "../pages/auth/ForgotPassword";
import { Test } from "../components/Test";
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
