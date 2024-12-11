import Product from "@/pages/Product";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegisterPage from "../pages/Register";
import SignUp from "../pages/SignUp";
import ProductDetails from "@/pages/ProductDetails";
import Vendor from "@/pages/Vendor";
import VendorDetails from "@/pages/VendorDetails";
import FlashSale from "@/pages/FlashSale";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Categories from "@/pages/Categories";

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
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/vendors",
    element: <Vendor />,
    children: [
      {
        path: "/vendor/:id",
        element: <VendorDetails />,
      },
    ],
  },
  {
    path: "/flash-sales",
    element: <FlashSale />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
];
