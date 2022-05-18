import React from "react";
import Template from "./Template";

export default function Preview(props) {
  return (
    <div className="Preview">
      <Template
        title={props.state.title}
        date={props.state.date}
        location={props.state.location}
        time={props.state.time}
        color={props.state.color}
        logo={props.state.logo}
      ></Template>
    </div>
  );
}
