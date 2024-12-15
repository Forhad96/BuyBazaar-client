import { CreditCard,  LayoutDashboard, ListTree, MessageSquare, Settings, Store, Users } from "lucide-react";
import AdminDashboard from "../pages/adminDashboard/AdminDashboard";

import ManageBookings from "../pages/adminDashboard/ManageBookings";
import ManageCars from "../pages/adminDashboard/ManageCars";


export const adminPaths = [
  {
    name: "Admin Dashboard",
    path: "dashboard",
    icon: LayoutDashboard,
    element: <AdminDashboard />,
  },
  {
    name: "Manage Users",
    path: "users",
    icon: Users,
    element: <ManageCars />,
  },
  {
    name: "Vendor Shops",
    path: "vendors",
    icon:Store,
    element: <ManageBookings />,
  },
  {
    name: "Products Categories",
    path: "categories",
    icon:ListTree,
    element: <ManageBookings />,
  },
  {
    name: "Transactions",
    path: "transactions",
    icon:CreditCard,
    element: <ManageBookings />,
  },
  {
    name: "Reviews",
    path: "reviews",
    icon: MessageSquare, 
    element: <ManageBookings />,
  },
  {
    name: "Settings",
    path: "settings",
    icon: Settings,
    element: <ManageBookings />,
  },
  // {
  //   name: "Academic Management",
  //   children: [],
  // },
];

//* Pragmatical way

//! Hard coded way

// export const adminPaths = [
//   {
//     path: 'dashboard',
//     element: <AdminDashboard />,
//   },
//   {
//     path: 'create-student',
//     element: <CreateStudent />,
//   },
//   {
//     path: 'create-admin',
//     element: <CreateAdmin />,
//   },
//   {
//     path: 'create-faculty',
//     element: <CreateFaculty />,
//   },
// ];
