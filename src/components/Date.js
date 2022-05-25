import React from "react";

export default function Date(props) {
  return (
    <div className="Date customizerInput">
      <label className="inputLabel">
        Date
        <input onChange={props.onInputChange} name="date" value={props.value} />
      </label>
    </div>
  );
}
