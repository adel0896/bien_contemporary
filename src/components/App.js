import React, { useState } from "react";
import Customizer from "./Customizer";
import Preview from "./Preview";
export default function App() {
  //   let TextContent = {
  //     title: "default",
  //     date: "default",
  //   };
  //   const textContent = Object.create(TextContent);
  const [data, setData] = useState(null);
  function getTitle(event) {
    setData(event.target.value);
    return data; // return textContent.title;
  }
  //   console.log(textContent.title);

  function getDate(event) {
    setData(event.target.value);
    // textContent.date = data;
    console.log(data);
  }

  return (
    <section className="Screen">
      <Customizer getTitle={getTitle} getDate={getDate}></Customizer>
      <Preview getTitle={getTitle}></Preview>
    </section>
  );
}
