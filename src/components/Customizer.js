import React from "react";
import Color from "./Color";
import Title from "./Title";
import Date from "./Date";
import Time from "./Time";
import Location from "./Location";
import Logo from "./Logo";

export default function Customizer(props) {
  return (
    <div className="Customizer">
      <Color></Color>
      <Title getTitle={props.getTitle}></Title>
      <Date getDate={props.getDate}></Date>
      <Time></Time>
      <Location></Location>
      <Logo></Logo>
    </div>
  );
}
