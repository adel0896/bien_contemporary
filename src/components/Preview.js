import React from "react";
import Template from "./Template";
import graphicGirl from "./assets/girl-graphic.png";

export default function Preview(props) {
  return (
    // <>
    <div className="Preview">
      <Template
        title={props.state.title}
        artist={props.state.artist}
        date={props.state.date}
        location={props.state.location}
        time={props.state.time}
        color={props.state.color}
        logo={props.state.logo}
        image={props.state.image}
        imagenew={props.state.file}
        format={props.format}
        template={props.template}
        appstate={props.appstate}
      ></Template>

      {/* <div className="appendhere"></div> */}
    </div>
    // <a href="#" onClick={captureJPG}>
    //   CaptureJPG
    // </a>
    // <a href="#" onClick={capturePNG}>
    //   CapturePNG
    // </a>
    // </>
  );
}
