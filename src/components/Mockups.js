import React, { useState } from "react";
import { story, post, banner } from "./MockupArrays";

const formats = [story, post, banner];
export default function Mockups(props) {
  const matchArray = formats.filter((x) => x.format === props.format)[0];
  const arrayToMap = matchArray.templates;

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const onTemplateClicked = (template) => () => {
    props.onTemplateChange(template.name);
    setSelectedTemplate(template);
  };
  return (
    <section className="templateOptions">
      {arrayToMap.map((template) => (
        <div key={Math.random()}>
          <div className="templateContainer">
            <div
              className={`${props.format}Mockup`}
              onClick={onTemplateClicked(template)}
            >
              <img src={template.path} alt="" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
