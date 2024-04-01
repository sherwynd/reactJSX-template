import App from "../App.jsx";
import { Profile } from "../pages/profile/Profile.jsx";
import { Discover } from "../pages/discover/Discover.jsx";
import { Gathering } from "../pages/gathering/Gathering.jsx";
import { Friend } from "../pages/friend/Friend.jsx";
import { Notification } from "../pages/notification/Notification.jsx";
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
    path: "discover",
    element: <Discover />,
  },
  {
    path: "gathering",
    element: <Gathering />,
  },
  {
    path: "friend",
    element: <Friend />,
  },
  {
    path: "notification",
    element: <Notification />,
  },
];

export default routes;
