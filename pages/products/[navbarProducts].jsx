import { getNav, getNavProducts } from "@/services/products";
import MyHeaderFooter from "@/Components/MyHeaderFooter";
import Link from "next/link";
import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default function App({ allProducts, navNames }) {
  if (!allProducts) {
    return <div>Loading...</div>;
  }
  const productList = allProducts.map((product) => {
    return (
      <>
        <Link href={`/${product[""]}`}>
          <Card
            hoverable
            style={{
              width: 240,
              margin: "5px",
            }}
            cover={
              <img
                alt="example"
                src="https://th.bing.com/th/id/R.2b2ac1bb5b369a4aea0e5dc1768f10b4?rik=uXHEZ0EPPT7U7w&pid=ImgRaw&r=0"
              />
            }
          >
            <Meta
              title={`${product.Name}`}
              description={`Rs ${product.Price}`}
            />
          </Card>
        </Link>
        <br />
      </>
    );
  });
  return (
    <>
      <MyHeaderFooter nav={navNames}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignContent: "space-between",
          }}
        >
          {productList}
        </div>
      </MyHeaderFooter>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const navNames = getNav();
  const data = getNavProducts(params.navbarProducts);
  console.log(data);
  return {
    props: {
      allProducts: data,
      navNames: navNames,
    },
  };
}
