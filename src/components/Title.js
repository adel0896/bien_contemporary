import React from "react";

export default function Title(props) {
  return (
    <div>
      Title
      <input onChange={props.onChange} name="title" value={props.value}></input>
    </div>
  );
}
