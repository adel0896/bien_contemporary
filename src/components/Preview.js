import React from "react";
import Template from "./Template";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
// import File from "./File";

export default function Preview(props) {
  async function captureJPG() {
    const image = document.querySelector(".Preview");
    html2canvas(image).then(function (canvas) {
      document.querySelector(".appendhere").appendChild(canvas);
    });
    const canvas = await html2canvas(image);
    const dataURL = canvas.toDataURL("image/jpeg");
    downloadjs(dataURL, `download.png`, "image/jpeg");
  }
  async function capturePNG() {
    const image = document.querySelector(".Preview");
    html2canvas(image).then(function (canvas) {
      document.querySelector(".appendhere").appendChild(canvas);
    });
    const canvas = await html2canvas(image);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, `download.png`, "image/png");
  }

  return (
    <>
      <div className="Preview">
        <Template
          title={props.state.title}
          date={props.state.date}
          location={props.state.location}
          time={props.state.time}
          color={props.state.color}
          logo={props.state.logo}
          image={props.state.image}
          imagenew={props.state.file}
          format={props.format}
          template={props.template}
        ></Template>

        <div className="appendhere"></div>
      </div>
      <a href="#" onClick={captureJPG}>
        CaptureJPG
      </a>
      <a href="#" onClick={capturePNG}>
        CapturePNG
      </a>
    </>
  );
}
