import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  
} from "@/components/ui/sidebar";

import DashboardSidebarItems from "./SidebarMenuItems";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import sidebarItemsGenerator from "@/utils/sidebarItemsGenerator";
import { adminPaths } from "@/routes/admin.routes";
import userPaths from "@/routes/user.routes";
import { UserAvatarDropdown } from "./UserAvatarDropdown";


const userRole = {
  ADMIN: "admin",
  USER: "user",
};

export const DashboardLayoutSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const token = useAppSelector(selectCurrentToken);

  // Uncomment to use user role dynamically when logged in
  // let user: TUser | undefined ;

  // if (token) {
  //   user = verifyToken(token) as TUser;
  // }

  // its hardcoded user role for testing
  const user = {
    role: "admin",
  };
  let sidebarItems;

  switch (user?.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.USER:
      sidebarItems = sidebarItemsGenerator(userPaths, userRole.USER);
      break;
    default:
      sidebarItems = undefined;
      break;
  }
  // console.log(sidebarItems);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={teams}/> */}
        {/* <NavLogo/> */}
        {/* <h1 className=" md:text-2xl  font-bold text-center">
          <span className="bg-gradient-purple-to-pink bg-clip-text text-transparent ">
            Buy
          </span>
          Bazaar
        </h1> */}
      </SidebarHeader>
      <SidebarContent>
        <DashboardSidebarItems items={ sidebarItems ?? []} />
      </SidebarContent>
      <SidebarFooter>
        <UserAvatarDropdown />
      </SidebarFooter>
    </Sidebar>
  );
};


DashboardLayoutSidebar.displayName = "DashboardLayoutSidebar";

