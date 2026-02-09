import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./screens/About.jsx";
import Home from "./screens/Home.jsx";
import Login from "./screens/Login.jsx";
import Store from "./screens/store.jsx";
import NotFound from "./screens/NotFound.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import Product from "./screens/Product.jsx";
import Cart from "./screens/Cart.jsx";
import Profile from "./screens/Profile.jsx";
import Register from "./screens/Register.jsx";
import Shipping from "./screens/Shipping.jsx";
import PrivateRoutes from "./components/PrivateRoutes.jsx";
import Payment from "./screens/Payment.jsx";
import PlaceOrder from "./screens/PlaceOrder.jsx";
import DetailsOrder from "./screens/DetailsOrder.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "",
        element: <PrivateRoutes />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/shipping",
            element: <Shipping />,
          },
          {
            path: "/payment",
            element: <Payment />,
          },
          {
            path: "/placeorder",
            element: <PlaceOrder />,
          },
          {
            path: "/order/:id",
            element: <DetailsOrder />,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </StrictMode>,
);
