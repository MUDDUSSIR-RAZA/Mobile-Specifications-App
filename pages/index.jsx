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
