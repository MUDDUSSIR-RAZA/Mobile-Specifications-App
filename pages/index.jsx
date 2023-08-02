import MyHeaderFooter from "@/Components/MyHeaderFooter";
import { getAll } from "@/services/products";
import Link from "next/link";
import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default function Home(props) {
  const { todos } = props;
  if (!todos) {
    return <div>Loading...</div>;
  }

  const todosList = todos.map((todo) => {
    return (
      <>
        <Link href={`/${todo[""]}`}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title={`${todo.Name}`} description={`${todo.Price}`} />
          </Card>
        </Link>
        <br />
      </>
    );
  });
  return (
    <>
      <MyHeaderFooter>
        <div
          style={{
            background: "#eff1f2",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignContent: "space-between",
          }}
        >
          {todosList}
        </div>
      </MyHeaderFooter>
    </>
  );
}

export async function getServerSideProps() {
  const data = getAll();
  return {
    props: {
      title: "Hello",
      todos: data,
    },
  };
}

{
  /* <div
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
</div> */
}
