import React from "react";

export default function Color() {
  return (
    <label>
      Text color
      <select name="color">
        <option value="lightgreen">lightgreen</option>
        <option value="lightgrey">lightgrey</option>
        <option value="pink">pink</option>
        <option value="green">green</option>
        <option value="grey">grey</option>
      </select>
    </label>
  );
}
