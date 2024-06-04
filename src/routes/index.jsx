import App from "../App.jsx";
import { Profile } from "../pages/profile/Profile";
import { Discover } from "../pages/discover/Discover";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { ErrorPage } from "../pages/common/ErrorPage.jsx";
import { ForgotPassword } from "../pages/auth/ForgotPassword";
import { ProductHistory } from "../pages/profile/ProductHistory";
import { PurchaseHistory } from "../pages/profile/PurchaseHistory";
import { BlogHistory } from "../pages/profile/BlogHistory";
import { CoachingHistory } from "../pages/profile/CoachingHistory";
import { EventHistory } from "../pages/profile/EventHistory";
import { RatingHistory } from "../pages/profile/RatingHistory";
import { Setting } from "../pages/profile/Setting";

import { Test } from "../components/Test";
import { Cart } from "../pages/cart/Cart";
import { Coaching } from "../pages/coaching/Coaching.jsx";
import CoachingDetail from "../pages/coaching/CoachingDetail.jsx";
import CoachingCreate from "../pages/coaching/CoachingCreate.jsx";
import ProductDetail from "../pages/discover/ProductDetail.jsx";
import ProductFormUpdate from "../pages/discover/ProductFormUpdate.jsx";
import ProductForm from "../pages/discover/ProductForm.jsx";
import { BlogPost } from "../pages/blog/Blog";
import { Favorites } from "../pages/favourites/Favourites";
import { Rate } from "../pages/rating/Rating";
import { BlogDetails } from "../pages/blog/BlogDetail";
import { CoachingCart } from "../pages/cart/CoachingCart.jsx";
import CoachingUpdate from "../pages/coaching/CoachingUpdate.jsx";
import { ResetPassword } from "../pages/auth/ResetPassword.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile/:refId",
        element: <Profile />,
        children: [
          {
            path: "",
            element: <ProductHistory />,
          },
          {
            path: "productHistory",
            element: <ProductHistory />,
          },
          {
            path: "blogHistory",
            element: <BlogHistory />,
          },
          {
            path: "coachingHistory",
            element: <CoachingHistory />,
          },
          {
            path: "eventHistory",
            element: <EventHistory />,
          },
          {
            path: "ratingHistory",
            element: <RatingHistory />,
          },
          {
            path: "purchaseHistory",
            element: <PurchaseHistory />,
          },
        ],
      },
      {
        path: "",
        element: <Discover />,
      },
      {
        path: "sell",
        element: <ProductForm />,
      },
      {
        path: "discover",
        element: <Discover />,
      },
      {
        path: "discover/:id/update",
        element: <ProductFormUpdate />,
      },
      {
        path: "sell",
        element: <ProductForm />,
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
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "coachingCart",
        element: <CoachingCart />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "rating/:productIdPassed",
        element: <Rate />,
      },
      {
        path: "coaching",
        element: <Coaching />,
      },
      {
        path: "coaching/:id",
        element: <CoachingDetail />,
      },
      {
        path: "coaching/create",
        element: <CoachingCreate />,
      },
      {
        path: "coaching/:id/update",
        element: <CoachingUpdate />,
      },
      {
        path: "setting/:refId",
        element: <Setting />,
      },
      {
        path: "blog",
        element: <BlogPost />,
      },
      {
        path: "blog-details/:id",
        element: <BlogDetails />,
      },
      // {
      //   path: "blog-details",
      //   element: <BlogDetails />,
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
  {
    path: "resetPassword/:token",
    element: <ResetPassword />,
  },
];

export default routes;
