import React from "react";

export default function Template(props) {
  return (
    <div>
      <h1>TITLE IS{props.title}</h1>
      <h1>DATE IS{props.date}</h1>
      <h2>Date</h2>
    </div>
  );
}
