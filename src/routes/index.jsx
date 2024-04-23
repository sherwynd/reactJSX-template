import App from "../App.jsx";
import { Profile } from "../pages/profile/Profile";
import { Discover } from "../pages/discover/Discover";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { ErrorPage } from "../pages/common/ErrorPage.jsx";
import { ForgotPassword } from "../pages/auth/ForgotPassword";
import { PurchaseHistory } from "../pages/profile/PurchaseHistory";
import { BlogHistory } from "../pages/profile/BlogHistory";
import { CoachingHistory } from "../pages/profile/CoachingHistory";
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
import PaymentPage from "../pages/discover/PaymentPage.jsx";
import { BlogPost } from "../pages/blog/Blog";
import { Favorites } from "../pages/favourites/Favourites";
import { Rating } from "../pages/rating/Rating";

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
            path: "",
            element: <PurchaseHistory />,
          },
          {
            path: "purchaseHistory",
            element: <PurchaseHistory />,
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
            path: "ratingHistory",
            element: <RatingHistory />,
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
        path: "discover/:id",
        element: <ProductDetail />,
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
        path: "discover/:id/update",
        element: <ProductFormUpdate />,
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
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "rating",
        element: <Rating />,
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
        path: "setting",
        element: <Setting />,
      },
      {
        path: "blog",
        element: <BlogPost />,
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
