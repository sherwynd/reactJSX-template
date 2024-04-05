import App from "../App.jsx";
import { Profile } from "../pages/profile/Profile.jsx";
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
];

export default routes;
