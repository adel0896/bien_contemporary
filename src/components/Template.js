import React from "react";
import { logoColors } from "./Logo";
import { imageArrays } from "./Image";
import downloadJPGicon from "./assets/downloadJPG.png";
import downloadPNGicon from "./assets/downloadPNG.png";

import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import graphicGirl from "./assets/girl-graphic.png";

export default function Template(props) {
  if (props.color !== "black") {
    document.querySelector(".templateContainer").style.color = `${props.color}`;
  }
  const logoToDisplay = logoColors.filter((x) => x.logoColor === props.logo)[0];

  const arrayToFilter = imageArrays.filter(
    (x) => x.template === props.template
  )[0].images;

  const imageToDisplay = arrayToFilter.filter(
    (x) => x.imageOption === props.image
  )[0];

  const newImage = props.imagenew;
  if (props.logo !== "none") {
    document.querySelector(".logo img").src = logoToDisplay.path;
  }
  if (props.image !== "none" && props.imagenew === "none") {
    document.querySelector(
      ".image"
    ).style.backgroundImage = `url("${imageToDisplay.path}")`;
  } else if (props.imagenew !== "none" && props.image === "none") {
    document.querySelector(
      ".image"
    ).style.backgroundImage = `url("${newImage}")`;
  }
  if (
    props.image !== "none" &&
    props.imagenew === "none" &&
    props.template === "croquis"
  ) {
    document.querySelector(".image").style.backgroundImage = "";
    document.querySelector(".image").style.backgroundImage = `url("")`;
    document.querySelector(".image").style.backgroundColor = "white !important";
    document.querySelector(
      ".imageCroquis"
    ).style.backgroundImage = `url("${imageToDisplay.path}")`;
  } else if (
    props.imagenew !== "none" &&
    props.image === "none" &&
    props.template === "croquis"
  ) {
    document.querySelector(".image").style.backgroundImage = "";
    document.querySelector(".image").style.backgroundImage = `url("")`;
    document.querySelector(".image").style.backgroundColor = "white !important";
    document.querySelector(
      ".imageCroquis"
    ).style.backgroundImage = `url("${newImage}")`;
  }
  async function captureJPG() {
    const image = document.querySelector(".templateContainer");
    html2canvas(image).then(function (canvas) {
      document.querySelector(".appendhere").appendChild(canvas);
      document.querySelector(".appendhere").classList.remove("hidden");
      document.querySelector("body").style.overflow = "hidden";
      setInterval(function () {
        if (document.querySelector(".appendhere").hasChildNodes()) {
          document.querySelector(".appendhere").removeChild(canvas);
        }
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
        if (document.querySelector(".appendhere").hasChildNodes()) {
          document.querySelector(".appendhere").removeChild(canvas);
        }
        document.querySelector(".appendhere").classList.add("hidden");
      }, 3000);
    });
    const canvas = await html2canvas(image);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, `download.png`, "image/png");
  }
  return (
    <>
      <div className="templateContainerGrid">
        <div
          className={`${props.template}-${props.format} templateContainer ${props.format}Size`}
          id="templateContainer"
        >
          <div className="TemplateText">
            <h1
              className={
                props.template === "exhibit"
                  ? `${props.template}Artist artist`
                  : `${props.template}Artist artist hidden`
              }
            >
              {props.artist}
            </h1>
            <h1 className={`${props.template}Title title`}>{props.title}</h1>

            <div className="eventDetails details">
              <h1 className={`${props.template}Location`}>{props.location}</h1>
              <h1 className={`${props.template}Date`}>{props.date}</h1>
              <h1 className={`${props.template}Time`}>{props.time}</h1>
            </div>
          </div>
          <div className="image" id="image">
            <div className="imageCroquis"></div>
          </div>
          {/* className={template.name === props.template ? "mockupselected" : ""} */}
          <img
            src={graphicGirl}
            className={
              props.template === "croquis"
                ? "graphicCroquis"
                : "graphicCroquis hidden"
            }
            alt="graphics"
          ></img>
          <div className="logo">
            <img src={logoColors[5].path} alt="" />
          </div>
          <div className="opacityDiv"></div>
          <div className="exhibitWhiteBG"></div>
        </div>
        <div className="appendhere hidden"></div>
      </div>
      <div className="ExportButtons" id="ExportButtons">
        <button onClick={captureJPG}>
          <img src={downloadJPGicon} alt="jpg-icon" />
        </button>
        <button onClick={capturePNG}>
          <img src={downloadPNGicon} alt="png-icon" />
        </button>
      </div>
    </>
  );
}
