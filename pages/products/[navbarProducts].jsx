import { getNav, getNavProducts } from "@/services/products";
import MyHeaderFooter from "@/Components/MyHeaderFooter";
import React from "react";
import { Descriptions } from "antd";

export default function App({ data, navNames }) {
  return (
    <>
      <MyHeaderFooter nav={navNames}>
        <div style={{ width: "800px", margin: "0 auto" }}>
          <Descriptions bordered column={1}>
            {Object.entries(data)
              .slice(1)
              .map(([key, value]) => (
                <Descriptions.Item key={key} label={key}>
                  {value}
                </Descriptions.Item>
              ))}
          </Descriptions>
        </div>
      </MyHeaderFooter>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const navNames = getNav();
  const data = getNavProducts(params.navbarProducts);
  return {
    props: {
      data,
      navNames: navNames,
    },
  };
}
