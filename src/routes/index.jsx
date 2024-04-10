import App from "../App.jsx";
import { Profile } from "../pages/profile/Profile";
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
