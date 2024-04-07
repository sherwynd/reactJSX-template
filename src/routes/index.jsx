import App from "../App.jsx";
import { Profile } from "../pages/profile/Profile.jsx";
import { Friend } from "../pages/friend/Friend.jsx";
import { Notification } from "../pages/notification/Notification.jsx";
import { ErrorPage } from "../pages/auth/ErrorPage.jsx";
import { Coaching } from "../pages/coaching/Coaching.jsx";
import CoachingDetail from "../pages/coaching/CoachingDetail.jsx";

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'profile', element: <Profile /> },
      { 
        path: 'coaching', 
        element: <Coaching />,
      },
      { 
        path: 'coaching/:id', 
        element: <CoachingDetail />,
      },
      { path: 'friend', element: <Friend /> },
      { path: 'notification', element: <Notification /> },
    ],
  },
  { path: '*', element: <ErrorPage /> },
];

export default routes;
