import React from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
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
const App = ({ children }) => {
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
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      {/* <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider> */}
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
            paddingTop: "50px",
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

// import React from "react";

// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { Layout, Menu, theme } from "antd";
// const { Header, Content, Footer, Sider } = Layout;
// const App = ({ children }) => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout>
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         onBreakpoint={(broken) => {
//           console.log(broken);
//         }}
//         onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//         }}
//       >
//         <div className="demo-logo-vertical" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={["4"]}
//           items={[
//             UserOutlined,
//             VideoCameraOutlined,
//             UploadOutlined,
//             UserOutlined,
//           ].map((icon, index) => ({
//             key: String(index + 1),
//             icon: React.createElement(icon),
//             label: `nav ${index + 1}`,
//           }))}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         />
//         <Content
//           style={{
//             margin: "24px 16px 0",
//           }}
//         >
//           {children}
//         </Content>
//         <Footer
//           style={{
//             textAlign: "center",
//           }}
//         >
//           Ant Design ©2023 Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };
// export default App;
