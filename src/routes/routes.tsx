import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routesGenerator from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";

import ProtectedRoute from "../components/layout/ProtectedRoute";

import { homePaths } from "./home.routes";
import DashboardLayout from "../components/layout/DashboardLayout";
import NotFound from "../components/Shared/NotFound";
import userPaths from "./user.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routesGenerator(homePaths),
    errorElement:<NotFound/>
  },
  {
    path: "/admin",
    element: (
        <DashboardLayout />
        //uncomment to use protected route
      // <ProtectedRoute role="admin">
      // </ProtectedRoute>
    ),
    children: routesGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
        <DashboardLayout/>
        //uncomment to use protected route
      // <ProtectedRoute role="user">
      // </ProtectedRoute>
    ),
    children: routesGenerator(userPaths),
  },



]);

export default router;
