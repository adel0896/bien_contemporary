import React from "react";

export default function Title(props) {
  return (
    <div>
      Title
      <input
        onChange={props.onInputChange}
        name="title"
        value={props.value}
      ></input>
    </div>
  );
}
