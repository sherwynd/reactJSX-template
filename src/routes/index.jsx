import App from "../App.jsx";
import { Profile } from "../pages/profile/Profile";
import { Discover } from "../pages/discover/Discover";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { ErrorPage } from "../pages/auth/ErrorPage";
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
        path: "discover",
        element: <Discover />,
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
];

export default routes;
