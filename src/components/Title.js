import React from "react";

export default function Title(props) {
  return (
    <label>
      Title
      <input type="text" onChange={props.getTitle} />
    </label>
  );
}
