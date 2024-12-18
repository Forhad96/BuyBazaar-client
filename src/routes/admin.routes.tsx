import {
  LayoutDashboard,
  Users,
  User,
  UserCheck,
  Shield,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  Box,
  Grid,
  PlusCircle,
  ListTree,
  Tag,
  Check,
  AlertTriangle,
  BarChart,
  PieChart,
  UserPlus,
  FileText,
  Settings
} from "lucide-react";

import AdminDashboard from "../pages/adminDashboard/AdminDashboard";
import { TUserPath } from "@/types";
import { ManageCustomer } from "@/pages/adminDashboard/ManageCustomer";


export const adminPaths: TUserPath[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: LayoutDashboard,
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    path: "users",
    icon: Users,
    element: "UserManagementPage",
    children: [
      {
        name: "Customers",
        path: "users/customers",
        icon: User,
        element: <ManageCustomer/>
      },
      {
        name: "Vendors",
        path: "users/vendors",
        icon: UserCheck,
        element: "VendorPage"
      },
      {
        name: "Admins",
        path: "users/admins",
        icon: Shield,
        element: "AdminPage"
      }
    ]
  },
  {
    name: "Order Management",
    path: "orders",
    icon: Package,
    element: "OrderManagementPage",
    children: [
      {
        name: "Pending Orders",
        path: "orders/pending",
        icon: Clock,
        element: "PendingOrdersPage"
      },
      {
        name: "Completed Orders",
        path: "orders/completed",
        icon: CheckCircle,
        element: "CompletedOrdersPage"
      },
      {
        name: "Cancelled Orders",
        path: "orders/cancelled",
        icon: XCircle,
        element: "CancelledOrdersPage"
      }
    ]
  },
  {
    name: "Product Management",
    path: "products",
    icon: Box,
    element: "ProductManagementPage",
    children: [
      {
        name: "All Products",
        path: "products/all",
        icon: Grid,
        element: "AllProductsPage"
      },
      {
        name: "Add New Product",
        path: "products/new",
        icon: PlusCircle,
        element: "AddProductPage"
      },
      {
        name: "Categories",
        path: "products/categories",
        icon: ListTree,
        element: "CategoriesPage"
      }
    ]
  },
  {
    name: "Coupon Management",
    path: "coupons",
    icon: Tag,
    element: "CouponManagementPage",
    children: [
      {
        name: "Active Coupons",
        path: "coupons/active",
        icon: Check,
        element: "ActiveCouponsPage"
      },
      {
        name: "Expired Coupons",
        path: "coupons/expired",
        icon: AlertTriangle,
        element: "ExpiredCouponsPage"
      }
    ]
  },
  {
    name: "Reports",
    path: "reports",
    icon: BarChart,
    element: "ReportsPage",
    children: [
      {
        name: "Sales Reports",
        path: "reports/sales",
        icon: PieChart,
        element: "SalesReportsPage"
      },
      {
        name: "User Reports",
        path: "reports/users",
        icon: UserPlus,
        element: "UserReportsPage"
      },
      {
        name: "Order Reports",
        path: "reports/orders",
        icon: FileText,
        element: "OrderReportsPage"
      }
    ]
  },
  {
    name: "Settings",
    path: "settings",
    icon: Settings,
    element: "SettingsPage"
  }
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
