import React from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const App = ({ children, nav }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        breakpoint="lg"
        collapsedWidth="200"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            fontSize: "20px",
            textAlign: "center",
            color: "white",
            margin: "15px 8px",
            background: "rgb(51, 68, 84)",
            borderRadius: "5px",
          }}
          className="demo-logo-vertical"
        >
          <h1>BRANDS</h1>
        </div>
        {/* <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        /> */}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          {nav.map((item) => (
            <Menu.Item key={item.key} icon={item.key}>
              <Link href={`/${item.key}`}>{item.key}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            textAlign: "center",
            position: "fixed",
            top: 0,
            width: "100%",
            background: "rgb(49, 82, 114)",
            color: "white",
          }}
        >
          <h1>CUSTOMER DETAILS PROJECTS</h1>
        </Header>
        <Content
          style={{
            margin: "70px 0px 50px 12px",
            overflow: "initial",
            textAlign: "center",
            padding: "5px",
            color: "#001529",
            overflow: "auto",
            zIndex: "2000",
            position: "fixed",
            width: "86%",
            height: "86%",
            overflow: "auto",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {children}
        </Content>

        <Footer
          style={{
            textAlign: "center",
            textAlign: "center",
            position: "fixed",
            bottom: 0,
            width: "100%",
            padding: "2px",
            background: "rgb(49, 82, 114)",
            color: "white",
          }}
        >
          <h1> MR DEVELOPER</h1>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
