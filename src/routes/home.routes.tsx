
import Product from "@/pages/Product";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegisterPage from "../pages/Register";
import Service from "../pages/Service";
import SignUp from "../pages/SignUp";
import ProductDetails from "@/pages/ProductDetails";

export const homePaths = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "cars",
    // element: <Cars />,
    children: [
      {
        path: "cars/:id",
        // element: <CarDetails />,
      },
    ],
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <ContactUs />,
  },
  {
    path: "sing-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/product",
    element: <Product />,
    children: [
{
  path: "/product/:id",
  element: <ProductDetails />
}
    ]
  },
  {
    path: "/service",
    element: <Service />,
  },
];
