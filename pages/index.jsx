import MyHeaderFooter from "@/Components/MyHeaderFooter";
import { getAll } from "@/services/products";
import Link from "next/link";
import React from "react";

export default function Home(props) {
  const { todos } = props;
  if (!todos) {
    return <div>Loading...</div>;
  }
  const todosList = todos.map((todo) => {
    return (
      <>
        <Link href={`/${todo[""]}`}>{todo.Name}</Link>
        <br />
      </>
    );
  });
  return (
    <>
      <MyHeaderFooter>
        <div style={{ background: "#eff1f2" }}>{todosList}</div>
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
