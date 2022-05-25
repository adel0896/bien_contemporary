import React from "react";

export default function Time(props) {
  return (
    <div className="Time customizerInput">
      <label>
        Time
        <input
          type="text"
          onChange={props.onInputChange}
          name="time"
          value={props.value}
        />
      </label>
    </div>
  );
}
