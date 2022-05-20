import React, { useState } from "react";
import AbstractStoryPath from "./assets/Abstract-story.jpg";
import AbstractPostPath from "./assets/Abstract-post.jpg";
import AbstractBannerPath from "./assets/Abstract-banner.jpg";
import CroquisStoryPath from "./assets/Croquis-story.png";
import CroquisPostPath from "./assets/Croquis-post.png";
import CroquisBannerPath from "./assets/Croquis-banner.png";
import OutsideStoryPath from "./assets/Outside-story.jpg";
import OutsidePostPath from "./assets/Outside-post.jpg";
import OutsideBannerPath from "./assets/Outside-banner.jpg";
import ExhibitStoryPath from "./assets/Exhibit-story.png";
import ExhibitPostPath from "./assets/Exhibit-post.png";
import ExhibitBannerPath from "./assets/Exhibit-banner.png";

const AbstractStory = {
  path: AbstractStoryPath,
  format: "story",
  template: "abstract",
};
const AbstractPost = {
  path: AbstractPostPath,
  format: "post",
  template: "abstract",
};
const AbstractBanner = {
  path: AbstractBannerPath,
  format: "banner",
  template: "abstract",
};
const CroquisStory = {
  path: CroquisStoryPath,
  format: "story",
  template: "croquis",
};
const CroquisPost = {
  path: CroquisPostPath,
  format: "post",
  template: "croquis",
};
const CroquisBanner = {
  path: CroquisBannerPath,
  format: "banner",
  template: "croquis",
};
const OutsideStory = {
  path: OutsideStoryPath,
  format: "story",
  template: "outside",
};
const OutsidePost = {
  path: OutsidePostPath,
  format: "post",
  template: "outside",
};
const OutsideBanner = {
  path: OutsideBannerPath,
  format: "banner",
  template: "outside",
};
const ExhibitStory = {
  path: ExhibitStoryPath,
  format: "story",
  template: "outside",
};
const ExhibitPost = {
  path: ExhibitPostPath,
  format: "post",
  template: "outside",
};
const ExhibitBanner = {
  path: ExhibitBannerPath,
  format: "banner",
  template: "outside",
};
// const Mockups =[AbstractStory, AbstractPost, AbstractBanner]

const templates = ["abstract", "croquis", "outdoor", "exhibit"];
export default function Mockups(props) {
  console.log(props.format);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const onTemplateClicked = (template) => () => {
    props.onTemplateChange(template);
    setSelectedTemplate(template);
  };
  return (
    <section className="MockupsSection">
      {templates.map((template) => (
        <div
          className={template}
          key={Math.random()}
          onClick={onTemplateClicked(template)}
        >
          <h1>{template}</h1>
        </div>
      ))}
    </section>
  );
}
