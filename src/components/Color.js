import React from "react";

export default function Color() {
  return (
    <label>
      Text color
      <select name="color">
        <option data-color="lightgreen" value="lightgreen">
          lightgreen
        </option>
        <option data-color="lightgrey" value="lightgrey">
          lightgrey
        </option>
        <option data-color="pink" value="pink">
          pink
        </option>
        <option data-color="green" value="green">
          green
        </option>
        <option data-color="grey" value="grey">
          grey
        </option>
      </select>
    </label>
  );
}
