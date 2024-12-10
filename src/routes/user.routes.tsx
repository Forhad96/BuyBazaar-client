import MyBookings from "../pages/userDashboard/MyBookings";
import UserDashboard from "../pages/userDashboard/UserDashboard";

const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "Bookings",
    path: "my-bookings",
    element: <MyBookings/>,
  },
  {
    name: "Return Car",
    path: "return-car",
    element: <MyBookings/>,
  },

];

export default userPaths;
