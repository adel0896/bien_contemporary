import React from "react";

export default function Template(props) {
  if (props.color !== "black") {
    document.querySelector(".templateContainer").style.color = `${props.color}`;
  }

  return (
    <div className="templateContainer">
      <h1>TITLE IS{props.title}</h1>
      <h1>DATE IS{props.date}</h1>
      <h1>Location is {props.location}</h1>
      <h1>Time is {props.time}</h1>
      <h1>Color is {props.color}</h1>
    </div>
  );
}
