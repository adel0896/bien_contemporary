import React from "react";

export default function Date(props) {
  return (
    <label>
      Date
      <input onChange={props.onInputChange} name="date" value={props.value} />
    </label>
  );
}
