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
import Wishlist from "@/pages/Wishlist";
import ReturnsPolicy from "@/pages/ReturnsPolicy";
import ShippingPolicy from "@/pages/ShippingPolicy";
import OrderConfirm from "@/pages/OrderConfirm";
import PexelsImageSearch from "@/pages/PexelsImageSearch";

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
    path: "/wishlist",
    element: <Wishlist/>,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/order-confirm",
    element: <OrderConfirm />,
  },
  {
    path: "/returns-policy",
    element: <ReturnsPolicy />,
  },
  {
    path: "/shipping-policy",
    element: <ShippingPolicy />,
  },
  {
    path: "/pexels-image-search",
    element: <PexelsImageSearch/>,
  },
];
