
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Service from "../pages/Service";
import SignUp from "../pages/SignUp";

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
    path: "/service",
    element: <Service />,
  },
];
