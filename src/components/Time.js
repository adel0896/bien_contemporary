import React from "react";

export default function Time(props) {
  return (
    <label>
      Time
      <input
        type="text"
        onChange={props.onInputChange}
        name="time"
        value={props.value}
      />
    </label>
  );
}
