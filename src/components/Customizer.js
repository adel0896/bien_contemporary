import React from "react";
// import { useState } from "react";
import Color from "./Color";
import Title from "./Title";
import Date from "./Date";
import Time from "./Time";
import Location from "./Location";
import Logo from "./Logo";

export default function Customizer(props) {
  console.log(props);

  return (
    <div className="Customizer">
      <Color></Color>
      <Title onChange={props.onChange} name="title" value={props.value}></Title>
      <Date onChange={props.onChange} name="date" value={props.value}></Date>
      <Time onChange={props.onChange} name="time" value={props.value}></Time>
      <Location
        onChange={props.onChange}
        name="location"
        value={props.value}
      ></Location>
      <Logo></Logo>
    </div>
  );
}
