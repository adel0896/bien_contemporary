import React from "react";
// import { useState } from "react";
import Color from "./Color";
import Title from "./Title";
import Date from "./Date";
import Time from "./Time";
import Location from "./Location";
import Logo from "./Logo";
import Image from "./Image";

export default function Customizer(props) {
  return (
    <div className="Customizer">
      <Color
        onColorChange={props.onColorChange}
        name="color"
        value={props.value}
      ></Color>
      <Title
        onInputChange={props.onInputChange}
        name="title"
        value={props.value}
      ></Title>
      <Date
        onInputChange={props.onInputChange}
        name="date"
        value={props.value}
      ></Date>
      <Time
        onInputChange={props.onInputChange}
        name="time"
        value={props.value}
      ></Time>
      <Location
        onInputChange={props.onInputChange}
        name="location"
        value={props.value}
      ></Location>
      <Image
        onImageChange={props.onImageChange}
        name="image"
        value={props.value}
      ></Image>
      <Logo
        onLogoChange={props.onLogoChange}
        name="logo"
        value={props.value}
      ></Logo>
    </div>
  );
}
