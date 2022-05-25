import React, { useState } from "react";
import { story, post, banner } from "./MockupArrays";

const formats = [story, post, banner];
export default function Mockups(props) {
  // console.log(props.template);
  const matchArray = formats.filter((x) => x.format === props.format)[0];
  const arrayToMap = matchArray.templates;

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  // const [clickedTemplate, setClickedTemplate] = useState(false);
  // console.log(selectedTemplate);
  // if (selectedTemplate.name == "abstract") {
  //   console.log("i selected abstract");

  //   document.querySelector(".mockupContainer").classList.add("mockupselected");
  // }
  // const onClickedTemplate = (event) => {
  //   // console.log(event);
  //   // setClickedTemplate((current) => !current);
  // };
  const onTemplateClicked = (template) => (e) => {
    props.onTemplateChange(template.name);
    setSelectedTemplate(template);
    console.log(template);
    if (template.name === "abstratct") {
    }
    e.currentTarget.classList.add("mockupselected");
    console.log(e);
    // console.log(event);
    // console.log(template);
    // document.querySelector(".mockupContainer").style.border = "solid red 1.5px";
  };
  // const selectTemplate (e) => {

  // }
  // const selectTemplate = (e) => {
  //   console.log(e);
  //   console.log(e.type);
  //   if (e.type === "click") {
  //     // console.log("mouse is down");
  //     console.log(e.currentTarget);
  //     let mydiv = e.target;
  //     mydiv.style.backgroundColor = "red";
  //     // document.querySelector(".mockupContainer").classList.add("mockupselected");
  //   }
  // };
  return (
    <section className="templateOptions">
      {arrayToMap.map((template) => (
        <div key={Math.random()}>
          <div className="templateMockupContainer">
            <div className={`${props.format}Mockup`} onClick={onTemplateClicked(template)}>
              <img src={template.path} alt="" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
