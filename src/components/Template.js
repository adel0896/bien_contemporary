import React from "react";

import { logoColors } from "./Logo";
import { images } from "./Image";

export default function Template(props) {
  if (props.color !== "black") {
    document.querySelector(".templateContainer").style.color = `${props.color}`;
  }
  const logoToDisplay = logoColors.filter((x) => x.logoColor === props.logo)[0];
  const imageToDisplay = images.filter((x) => x.imageOption === props.image)[0];
  const newImage = props.imagenew;
  // console.log(newImage);
  // console.log(logoToDisplay);

  if (props.logo !== "none") {
    document.querySelector(".logo img").src = logoToDisplay.path;
  }

  if (props.image !== "none" && props.imagenew === "none") {
    document.querySelector(".image img").src = imageToDisplay.path;
  } else if (props.imagenew !== "none" && props.image === "none") {
    document.querySelector(".image img").src = newImage;
  }

  return (
    <div className={`${props.template}-${props.format} templateContainer`}>
      <h1>TITLE IS{props.title}</h1>
      <h1>DATE IS{props.date}</h1>
      <h1>Location is {props.location}</h1>
      <h1>Time is {props.time}</h1>

      <div className="logo">
        <img src={logoColors[5].path} alt="" />
      </div>
      <div className="image">
        <img src="" alt="" />
      </div>
    </div>
  );
}
