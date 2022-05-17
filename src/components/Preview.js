import React from "react";
import Template from "./Template";

export default function Preview(props) {
  console.log(props.getTitle);
  return (
    <div className="Preview">
      <Template />
    </div>
  );
}
