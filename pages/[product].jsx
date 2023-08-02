import MyHeaderFooter from "@/Components/MyHeaderFooter";
import { getNav, getProductById } from "@/services/products";
import React from "react";
import { Descriptions } from "antd";

export default function Home({ data, navNames }) {
  return (
    <>
      <MyHeaderFooter nav={navNames}>
        <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
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
  const data = getProductById(params.product);
  const navNames = getNav();
  return {
    props: {
      data,
      navNames: navNames,
    },
  };
}
