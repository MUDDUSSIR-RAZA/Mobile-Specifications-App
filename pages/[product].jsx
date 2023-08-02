import MyHeaderFooter from "@/Components/MyHeaderFooter";
import { getProductById } from "@/services/products";
import React from "react";
import { Badge, Descriptions } from "antd";

export default function Home({ data }) {
  const nav = [
    {
      key: "asdaf",
    },
    {
      key: "vdfsdf",
    },
    {
      key: "sdf",
    },
    {
      key: "fdvdsz",
    },
    {
      key: "vffdz",
    },
  ];
  return (
    <>
      <MyHeaderFooter nav={nav}>
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
  const data = getProductById(params.product);
  return {
    props: {
      data,
    },
  };
}
