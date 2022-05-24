import React from "react";

export default function Title(props) {
  return (
    <div className="Title customizerInput">
      <label>
        Title
        <input
          onChange={props.onInputChange}
          name="title"
          value={props.value}
        ></input>
      </label>
    </div>
  );
}
