import React from "react";
import { useState } from "react";
import Color from "./Color";
import Title from "./Title";
import Date from "./Date";
import Time from "./Time";
import Location from "./Location";
import Logo from "./Logo";

export default function Customizer(props) {
  console.log(props.name);
  // const [val, setVal] = useState("initial value");
  // console.log(val);
  // function getInfo(event) {
  //   setData(event.target.value);
  //   console.log(event.target.value);
  // }

  return (
    <div className="Customizer">
      <Color></Color>
      <Title></Title>
      <Date></Date>
      <Time></Time>
      <Location></Location>
      <Logo></Logo>
    </div>
  );
}
