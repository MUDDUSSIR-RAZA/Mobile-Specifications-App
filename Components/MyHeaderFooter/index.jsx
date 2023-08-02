import React from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer, Sider } = Layout;

const App = ({ children, nav }) => {
  return (
    <Layout hasSider>
      <Sider
        breakpoint="lg"
        width={125}
        collapsedWidth="125"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: "100",
        }}
      >
        <Link href={"/"}>
          <div
            style={{
              fontSize: "15px",
              padding: "6px",
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
        </Link>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          {nav.map((item) => (
            <Menu.Item key={item.key}>
              <Link href={`/products/${item.key}`}>{item.key}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 58,
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
          <h1>MOBILE SPECSIFICATIONS</h1>
        </Header>

        <Content
          style={{
            margin: "30px 0px 50px 0px", // Adjust the margins as needed
            overflow: "auto",
            textAlign: "center",
            padding: "5px",
            color: "#001529",
            position: "fixed",
            top: "70px", // Set the top position to account for the fixed header's height
            left: "130px", // Set the left position to the width of the sider
            right: "0",
            bottom: "0",
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
            padding: "10px",
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
