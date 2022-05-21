import React, { useState } from "react";
import image1 from "../assets/abstract.jpg";
import image2 from "../assets/abstract2.jpg";
import image3 from "../assets/abstract3.jpg";

const Image1 = {
  path: image1,
  imageOption: "image1",
};
const Image2 = {
  path: image2,
  imageOption: "image2",
};
const Image3 = {
  path: image3,
  imageOption: "image3",
};

export const images = [Image1, Image2, Image3];

export default function Image(props) {
  const [file, setFile] = useState();

  function onFileAdded(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    const selectedFile = e.target.files[0].name;
    console.log(selectedFile);
    props.onImageUpload(selectedFile);
  }

  const [selectedImage, setSelectedImage] = useState(null);
  const onImageClicked = (path, imageOption) => () => {
    props.onImageChange(imageOption);
    setSelectedImage(path);
  };
  return (
    <div className="imageSelect">
      {images.map((image) => (
        <div onClick={onImageClicked(image.path, image.imageOption)} key={Math.random()} value={props.value} name="image">
          <img src={image.path} alt="" />
        </div>
      ))}
    </div>
  );
}
