import React from "react";

export default function Time(props) {
  return (
    <div className="Time customizerInput">
      <label className="inputLabel">
        Time
        <input
          type="text"
          placeholder={props.defaultTime}
          onChange={props.onInputChange}
          name="time"
          value={props.value}
        />
      </label>
    </div>
  );
}
