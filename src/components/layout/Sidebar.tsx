import { Layout, Menu, MenuProps } from "antd";
import sidebarItemsGenerator from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentToken, TUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import userPaths from "../../routes/user.routes";
import NavLogo from "../navbar/NavLogo";

const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
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
  let sidebarItems: MenuProps["items"] | undefined;

  switch (user?.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(
        adminPaths,
        userRole.ADMIN
      ) as MenuProps["items"];
      break;
    case userRole.USER:
      sidebarItems = sidebarItemsGenerator(
        userPaths,
        userRole.USER
      ) as MenuProps["items"];
      break;
    default:
      sidebarItems = undefined;
      break;
  }
  // console.log(sidebarItems);
  return (
    <Sider
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      breakpoint="lg"
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth="0"
    >
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavLogo />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["Dashboard"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
