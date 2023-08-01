// import MyHeaderFooter from "@/Components/MyHeaderFooter";
// import { getProductById } from "@/services/products";
// import Link from "next/link";
// import React from "react";

// export default function Home(props) {
//   return (
//     <>
//       <MyHeaderFooter>
//         {/* <div style={{ background: "#eff1f2" }}>{todosList}</div> */}
//       </MyHeaderFooter>
//     </>
//   );
// }

// export async function getServerSideProps(context) {
//   console.log(context);
//   const data = getProductById();
//   return {
//     props: {
//       title: "Hello",
//       todos: data,
//     },
//   };
// }

export default function Home(props) {
  return (
    <>
      <MyHeaderFooter>
        <h1>dskj</h1>
      </MyHeaderFooter>
    </>
  );
}
