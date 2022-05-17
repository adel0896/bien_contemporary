import React from "react";
{
  /* <Title onChange={this.handleChange} name="title" value={title}></Title> */
}

export default function Title(props) {
  console.log(props.onChange);
  return (
    <div>
      Title
      <input onChange={props.onChange} name="title" value={props.value}></input>
      {/* <p>{props.title}</p> */}
    </div>

    // <label>

    //   Title
    //   <input type="text" onChange={props.getInputValue} />
    // </label>
  );
}
