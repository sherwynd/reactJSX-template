import App from "../App.jsx";
import { Profile } from "../pages/profile/Profile.jsx";
import { Login } from "../pages/auth/Login.jsx";
import { Register } from "../pages/auth/Register.jsx";
import { ErrorPage } from "../pages/auth/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />,
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
