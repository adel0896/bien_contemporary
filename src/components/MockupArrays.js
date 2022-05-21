import AbstractStoryPath from "./assets/Abstract-story.jpg";
import AbstractPostPath from "./assets/Abstract-post.jpg";
import AbstractBannerPath from "./assets/Abstract-banner.jpg";
import CroquisStoryPath from "./assets/Croquis-story.jpg";
import CroquisPostPath from "./assets/Croquis-post.jpg";
import CroquisBannerPath from "./assets/Croquis-banner.jpg";
import OutsideStoryPath from "./assets/Outside-story.jpg";
import OutsidePostPath from "./assets/Outside-post.jpg";
import OutsideBannerPath from "./assets/Outside-banner.jpg";
import ExhibitStoryPath from "./assets/Exhibit-story.jpg";
import ExhibitPostPath from "./assets/Exhibit-post.jpg";
import ExhibitBannerPath from "./assets/Exhibit-banner.jpg";

const AbstractStory = {
  path: AbstractStoryPath,
  format: "story",
  name: "abstract",
};
const CroquisStory = {
  path: CroquisStoryPath,
  format: "story",
  name: "croquis",
};
const OutsideStory = {
  path: OutsideStoryPath,
  format: "story",
  name: "outside",
};
const ExhibitStory = {
  path: ExhibitStoryPath,
  format: "story",
  name: "exhibit",
};
const AbstractPost = {
  path: AbstractPostPath,
  format: "post",
  name: "abstract",
};
const CroquisPost = {
  path: CroquisPostPath,
  format: "post",
  name: "croquis",
};
const OutsidePost = {
  path: OutsidePostPath,
  format: "post",
  name: "outside",
};
const ExhibitPost = {
  path: ExhibitPostPath,
  format: "post",
  name: "exhibit",
};
const AbstractBanner = {
  path: AbstractBannerPath,
  format: "banner",
  name: "abstract",
};
const CroquisBanner = {
  path: CroquisBannerPath,
  format: "banner",
  name: "croquis",
};
const OutsideBanner = {
  path: OutsideBannerPath,
  format: "banner",
  name: "outside",
};
const ExhibitBanner = {
  path: ExhibitBannerPath,
  format: "banner",
  name: "exhibit",
};

export const story = {
  format: "story",
  templates: [AbstractStory, CroquisStory, OutsideStory, ExhibitStory],
};
export const post = {
  format: "post",
  templates: [AbstractPost, CroquisPost, OutsidePost, ExhibitPost],
};
export const banner = {
  format: "banner",
  templates: [AbstractBanner, CroquisBanner, OutsideBanner, ExhibitBanner],
};
