import React from "react";

export default function Location(props) {
  return (
    <label>
      Location
      <input type="text" onChange={props.onChange} name="location" value={props.value} />
    </label>
  );
}
