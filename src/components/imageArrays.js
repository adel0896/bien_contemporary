import abstract1 from "./assets/abstract.jpg";
import abstract2 from "./assets/abstract2.jpg";
import abstract3 from "./assets/abstract3.jpg";

import outside1 from "./assets/outside.jpg";
import outside2 from "./assets/outside2.jpg";
import outside3 from "./assets/outside3.jpg";

import croquis1 from "./assets/croquis.jpg";
import croquis2 from "./assets/croquis2.jpg";
import croquis3 from "./assets/croquis3.jpg";

import exhibit1 from "./assets/exhibit.jpg";
import exhibit2 from "./assets/exhibit2.jpg";
import exhibit3 from "./assets/exhibit3.jpg";

const Abstract1 = {
  path: abstract1,
  imageOption: "abstract1",
};
const Abstract2 = {
  path: abstract2,
  imageOption: "abstract2",
};
const Abstract3 = {
  path: abstract3,
  imageOption: "abstract3",
};

const Outside1 = {
  path: outside1,
  imageOption: "outside1",
};
const Outside2 = {
  path: outside2,
  imageOption: "outside2",
};
const Outside3 = {
  path: outside3,
  imageOption: "outside3",
};

const Croquis1 = {
  path: croquis1,
  imageOption: "croquis1",
};
const Croquis2 = {
  path: croquis2,
  imageOption: "croquis2",
};
const Croquis3 = {
  path: croquis3,
  imageOption: "croquis3",
};

const Exhibit1 = {
  path: exhibit1,
  imageOption: "exhibit1",
};
const Exhibit2 = {
  path: exhibit2,
  imageOption: "exhibit2",
};
const Exhibit3 = {
  path: exhibit3,
  imageOption: "exhibit3",
};

export const abstractImages = {
  template: "abstract",
  images: [Abstract1, Abstract2, Abstract3],
};
export const outsideImages = {
  template: "outside",
  images: [Outside1, Outside2, Outside3],
};
export const croquisImages = {
  template: "croquis",
  images: [Croquis1, Croquis2, Croquis3],
};
export const exhibitImages = {
  template: "exhibit",
  images: [Exhibit1, Exhibit2, Exhibit3],
};
