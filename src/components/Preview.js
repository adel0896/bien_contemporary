import React from "react";
import { useCallback } from "react";
import Template from "./Template";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

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
  // const handleCaptureClick = useCallback(async () => {
  //   const image = document.querySelector < HTMLElement > ".Preview";
  //   if (!image) return;
  //   const canvas = await html2canvas(image);
  //   const dataURL = canvas.toDataURL("image/png");
  //   downloadjs(dataURL, "download.png", "image/png");
  // }, []);

  // console.log(props.giveStatus);

  console.log(props.state.title);
  // const [data, setData] = useState(null);
  // function getInputValue() {
  //   setData();
  // }
  return (
    <>
      <div className="Preview">
        <Template title={props.state.title} date={props.state.date} location={props.state.location} time={props.state.time} color={props.state.color}></Template>
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
