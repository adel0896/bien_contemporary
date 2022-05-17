import React from "react";

export default function Template(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.date}</h2>
      <h2>Date</h2>
    </div>
  );
}
