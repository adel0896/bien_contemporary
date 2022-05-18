import React from "react";
import Template from "./Template";

export default function Preview(props) {
  // console.log(props.giveStatus);
  console.log(props.state.title);
  // const [data, setData] = useState(null);
  // function getInputValue() {
  //   setData();
  // }
  return (
    <div className="Preview">
      <Template title={props.state.title} date={props.state.date} location={props.state.location} time={props.state.time}></Template>
    </div>
  );
}
