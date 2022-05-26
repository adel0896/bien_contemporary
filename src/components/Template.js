import React from "react";
import { logoColors } from "./Logo";
import { images } from "./Image";
import defaultImage from "./assets/abstract.jpg";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import svgGraphic from "./assets/graphicAbstract.svg";

export default function Template(props) {
  if (props.color !== "black") {
    document.querySelector(".templateContainer").style.color = `${props.color}`;
  }
  const logoToDisplay = logoColors.filter((x) => x.logoColor === props.logo)[0];
  const imageToDisplay = images.filter((x) => x.imageOption === props.image)[0];
  const newImage = props.imagenew;

  if (props.logo !== "none") {
    document.querySelector(".logo img").src = logoToDisplay.path;
  }

  if (props.image !== "none" && props.imagenew === "none") {
    document.querySelector(".image").style.backgroundImage = `url("${imageToDisplay.path}")`;
    // document.querySelector(".image img").src = imageToDisplay.path;
  } else if (props.imagenew !== "none" && props.image === "none") {
    // document.querySelector(".image img").src = newImage;
    // document.querySelector(".image img").src = "";
    document.querySelector(".image").style.backgroundImage = `url("${newImage}")`;
  }

  // downloading the template

  async function captureJPG() {
    const image = document.querySelector(".templateContainer");
    html2canvas(image).then(function (canvas) {
      document.querySelector(".appendhere").appendChild(canvas);
      document.querySelector(".appendhere").classList.remove("hidden");
      document.querySelector("body").style.overflow = "hidden";
      setInterval(function () {
        document.querySelector(".appendhere").removeChild(canvas);
        document.querySelector(".appendhere").classList.add("hidden");
      }, 3000);
    });
    const canvas = await html2canvas(image);
    const dataURL = canvas.toDataURL("image/jpeg");
    downloadjs(dataURL, `download.png`, "image/jpeg");
  }

  async function capturePNG() {
    const image = document.querySelector(".templateContainer");
    html2canvas(image).then(function (canvas) {
      document.querySelector(".appendhere").appendChild(canvas);
      document.querySelector(".appendhere").classList.remove("hidden");
      document.querySelector("body").style.overflow = "hidden";

      setInterval(function () {
        document.querySelector(".appendhere").removeChild(canvas);
        document.querySelector(".appendhere").classList.add("hidden");
      }, 3000);
    });

    const canvas = await html2canvas(image);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, `download.png`, "image/png");
  }

  return (
    <>
      <div className="templatContainerGrid">
        <div className={`${props.template}-${props.format} templateContainer ${props.format}Size`} id="templateContainer">
          <div className="TemplateText">
            <h1 className={`${props.template}Title `}>{props.title}</h1>
            {/* <div className="graphicElAbstract">
              <svg src={svgGraphic}></svg>
            </div> */}
            <div className="eventDetails">
              <h1 className={`${props.template}Location`}>{props.location}</h1>
              <h1 className={`${props.template}Date`}>{props.date}</h1>
              <h1 className={`${props.template}Time`}>{props.time}</h1>
            </div>
          </div>
          <div className="logo">
            <img src={logoColors[5].path} alt="" />
          </div>
          <div className="image">{/* <img src={defaultImage} alt="" /> */}</div>
          {/* <div className="graphicElAbstract">
            <svg viewBox="0 0 100 100" src={svgGraphic}></svg>
          </div> */}
        </div>
        <div className="appendhere hidden"></div>
      </div>
      <div className="ExportButtons" id="ExportButtons">
        <button onClick={captureJPG}>CaptureJPG</button>
        <button onClick={capturePNG}>CapturePNG</button>
      </div>
    </>
  );
}
