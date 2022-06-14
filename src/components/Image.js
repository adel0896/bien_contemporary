import React, { useState } from "react";
import {
  abstractImages,
  outsideImages,
  croquisImages,
  exhibitImages,
} from "./imageArrays";

export const imageArrays = [
  abstractImages,
  outsideImages,
  croquisImages,
  exhibitImages,
];

export default function Image(props) {
  const matchingObject = imageArrays.filter(
    (x) => x.template === props.template
  )[0];
  const arrayToMap = matchingObject.images;
  // console.log(props.template);
  const [file, setFile] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const onImageClicked = (image) => () => {
    props.onImageChange(image.imageOption);
    setSelectedImage(image.path);
  };
  return (
    <div className="imageSelectContainer">
      <p className="inputLabel">Picture</p>
      <div className="imageSelect">
        {arrayToMap.map((image) => (
          <div
            onClick={onImageClicked(image)}
            key={Math.random()}
            value={props.value}
            name="image"
          >
            <img src={image.path} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
