import { Button, Flex, Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { useState } from "react";
const { Header, Content } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header  style={{ padding: 0,  backgroundColor: "black" }}>
          <Flex justify="space-between" style={{paddingTop:15}} align="center">
            <Button
              type="default"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 34,
                height: 34,
              }}
            />
            <Button onClick={handleLogout}>Logout</Button>
          </Flex>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/*render Outlet */}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
