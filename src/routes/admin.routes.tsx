import AdminDashboard from "../pages/adminDashboard/AdminDashboard";
import CreateCar from "../pages/adminDashboard/CreateCar";
import ManageBookings from "../pages/adminDashboard/ManageBookings";
import ManageCars from "../pages/adminDashboard/ManageCars";


export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Manage Cars",
    path: "manage-cars",
    element: <ManageCars />,
  },
  {
    name: "Create Car",
    path: "create-car",
    element: <CreateCar />,
  },
  {
    name: "Manage Bookings",
    path: "manage-bookings",
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
