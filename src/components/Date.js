import React from "react";

export default function Date(props) {
  return (
    <label>
      Date
      <input onChange={props.onChange} name="date" value={props.value} />
    </label>
  );
}
