import App from "../App.jsx";
import { Profile } from "../pages/profile/Profile";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { ErrorPage } from "../pages/common/ErrorPage.jsx";
import { ForgotPassword } from "../pages/auth/ForgotPassword";
import { Test } from "../components/Test";
import { Cart } from "../pages/cart/Cart";
// import { Profile } from "../pages/profile/Profile.jsx";
// import { Friend } from "../pages/friend/Friend.jsx";
// import { Notification } from "../pages/notification/Notification.jsx";
import { Coaching } from "../pages/coaching/Coaching.jsx";
import CoachingDetail from "../pages/coaching/CoachingDetail.jsx";

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
      {
        path: "cart",
        element: <Cart />,
      }, 
      {
        path: "coaching",
        element: <Coaching />,
      },
      {
        path: "coaching/:id",
        element: <CoachingDetail />,
      },
      // {
      //   path: "friend",
      //   element: <Friend />,
      // },
      // {
      //   path: "notification",
      //   element: <Notification />,
      // },
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
