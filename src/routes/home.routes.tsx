import Product from "@/pages/Product/Product";
import About from "../pages/About/About";
import ContactUs from "../pages/ContactUs/ContactUs";
import HomePage from "../pages/Home/HomePage";
import Login from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";
import SignUp from "../pages/Auth/SignUp";
import ProductDetails from "@/pages/Product/ProductDetails";
import Vendor from "@/pages/Vendor/Vendor";
import VendorDetails from "@/pages/Vendor/VendorDetails";
import FlashSale from "@/pages/FlashSale/FlashSale";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Cart/Checkout";
import Categories from "@/pages/Category/Categories";
import Wishlist from "@/pages/Wishlist/Wishlist";
import ReturnsPolicy from "@/pages/Policy/ReturnsPolicy";
import ShippingPolicy from "@/pages/Policy/ShippingPolicy";
import OrderConfirm from "@/pages/Cart/OrderConfirm";
import PexelsImageSearch from "@/pages/PexelsImageSearch";

export const homePaths = [
  {
    path: "/",
    element: <HomePage />,
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
