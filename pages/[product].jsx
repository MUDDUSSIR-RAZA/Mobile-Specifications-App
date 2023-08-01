import MyHeaderFooter from "@/Components/MyHeaderFooter";
import { getProductById } from "@/services/products";
import React from "react";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <MyHeaderFooter>
        <div style={{ background: "#eff1f2" }}>{data.Name}</div>
      </MyHeaderFooter>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const data = getProductById(params.product);
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
