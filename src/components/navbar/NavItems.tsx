import React from "react";
import { NavLink,} from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

interface NavItemsProps {
  isToggleOpen: boolean;
}

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Contact",
    path: "contact",
  },

];
const NavItems: React.FC<NavItemsProps> = ({ isToggleOpen }) => {
  const user = useAppSelector(selectCurrentUser)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // navigate("/login");
  };
  return (
    <ul
      role="menubar"
      aria-label="Select page"
      className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-brandPrimary px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
        isToggleOpen
          ? "visible opacity-100 backdrop-blur-sm"
          : "invisible opacity-0"
      }`}
    >
      {navItems.map((route, index) => (
        <li key={index} role="none" className="flex items-stretch text-base">
          <NavLink
            to={route.path}
            className={({ isActive }) =>
              `flex items-center gap-2 py-4 transition-colors duration-300 ${
                isActive ? "text-highlight" : "hover:text-highlight"
              } focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8`
            }
          >
            <span>{route.name}</span>
          </NavLink>
        </li>
      ))}

      {user?.role ? (
        <>
          <NavLink
            to={`${user?.role}/dashboard`}
            className={({ isActive }) =>
              `flex items-center gap-2 py-4 transition-colors duration-300 ${
                isActive ? "text-highlight" : "hover:text-highlight"
              } focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8`
            }
          >
            <span>{"Dashboard"}</span>
          </NavLink>
          <NavLink
            to={"/login"}
            onClick={handleLogout}
            className={({ isActive }) =>
              `flex items-center gap-2 py-4 transition-colors duration-300 ${
                isActive ? "text-highlight" : "hover:text-highlight"
              } focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8`
            }
          >
            <span>{"Logout"}</span>
          </NavLink>
        </>
      ) : (
        <NavLink
          to={`login`}
          className={({ isActive }) =>
            `flex items-center gap-2 py-4 transition-colors duration-300 ${
              isActive ? "text-highlight" : "hover:text-highlight"
            } focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8`
          }
        >
          <span>{"Login"}</span>
        </NavLink>
      )}
    </ul>
  );
};

export default NavItems;
