import MyHeaderFooter from "@/Components/MyHeaderFooter";
import { getAll, getNav } from "@/services/products";
import Link from "next/link";
import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default function Home(props) {
  const { todos, navNames } = props;
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
              margin: "5px",
            }}
            cover={
              <img
                alt="example"
                src="https://th.bing.com/th/id/R.2b2ac1bb5b369a4aea0e5dc1768f10b4?rik=uXHEZ0EPPT7U7w&pid=ImgRaw&r=0"
              />
            }
          >
            <Meta title={`${todo.Name}`} description={`Rs ${todo.Price}`} />
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
          {todosList}
        </div>
      </MyHeaderFooter>
    </>
  );
}

export async function getServerSideProps() {
  const data = getAll();
  const navNames = getNav();
  console.log(navNames);
  return {
    props: {
      title: "Hello",
      todos: data,
      navNames: navNames,
    },
  };
}
