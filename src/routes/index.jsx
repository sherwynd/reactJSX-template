import App from "../App.jsx";
import { Profile } from "../pages/profile/Profile";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { ErrorPage } from "../pages/common/ErrorPage.jsx";
import { ForgotPassword } from "../pages/auth/ForgotPassword";
import { PurchaseHistory } from "../pages/profile/PurchaseHistory";
import { BlogHistory } from "../pages/profile/BlogHistory";
import { ReviewHistory } from "../pages/profile/ReviewHistory";
import { Setting } from "../pages/profile/Setting";

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
        children: [
          {
            path: "purchaseHistory",
            element: <PurchaseHistory />,
          },
          {
            path: "blogHistory",
            element: <BlogHistory />,
          },
          {
            path: "reviewHistory",
            element: <ReviewHistory />,
          },
        ],
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "setting",
        element: <Setting />,
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
