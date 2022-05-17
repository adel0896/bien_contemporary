import React, { useState } from "react";
import Customizer from "./Customizer";
import Preview from "./Preview";
export default function App(props) {
  const [data, setData] = useState(null);
  function getData(event) {
    setData(event.target.value);
    console.log(event.target.value);
  }
  return (
    <section className="Screen">
      <Customizer></Customizer>
      <Preview></Preview>
      <h1>{data}</h1>
      <input type="text" onChange={getData} />
    </section>
  );
}
