import { FC } from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import BreadcrumbBanner from "./components/breadcrumbBanner/BreadcrumbBanner";

const App: FC = () => {
  const location = useLocation();
  const pathsToIgnore = ["/", "/login", "/register",]; // Add paths you want to ignore
  return (
    <div>
      <Navbar />
      {/* {!pathsToIgnore.includes(location.pathname) && <BreadcrumbBanner />} */}

      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
