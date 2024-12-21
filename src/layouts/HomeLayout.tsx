import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const HomeLayout = () => {
//   const location = useLocation();
//   const pathsToIgnore = ["/", "/login", "/register"]; // Add paths you want to ignore
  return (
    <div>
      <Navbar />
      {/* {!pathsToIgnore.includes(location.pathname) && <BreadcrumbBanner />} */}
      <Outlet />
      <Footer />
    </div>
  );
};
export default HomeLayout;
