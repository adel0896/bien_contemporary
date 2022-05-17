import React from "react";
import Color from "./Color";
import Title from "./Title";
import Date from "./Date";
import Time from "./Time";
import Location from "./Location";
import Logo from "./Logo";

export default function Customizer() {
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
