import React, { Component } from "react";

import Customizer from "./Customizer";
import Preview from "./Preview";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      title: "Abstract painting & cocktails",
      date: "13/05",
      time: "from 5pm to 8pm ",
      location: "Vester Volgade 8",
      logo: "none",
      image: "none",
      file: "none",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  };
  handleColorChange = (e) => {
    const color = e;
    const name = "color";
    this.setState(() => ({
      [name]: color,
    }));
  };
  handleLogoChange = (e) => {
    const logo = e;
    const name = "logo";
    this.setState(() => ({
      [name]: logo,
    }));
  };
  handleImageChange = (e) => {
    const image = e;
    const name = "image";
    this.setState(() => ({
      [name]: image,
      file: "none",
    }));
    console.log(e);
  };

  handleImageUpload = (e) => {
    const name = "file";
    const selectedFile = URL.createObjectURL(e.target.files[0]);
    this.setState(() => ({
      [name]: selectedFile,
      image: "none",
    }));
  };

  render() {
    return (
      <section className="Screen">
        <Customizer
          onInputChange={this.handleInputChange}
          onColorChange={this.handleColorChange}
          onLogoChange={this.handleLogoChange}
          onImageChange={this.handleImageChange}
          onImageUpload={this.handleImageUpload}
          state={this.state}
        ></Customizer>
        <Preview state={this.state}></Preview>
      </section>
    );
  }
}
