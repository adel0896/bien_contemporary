import React, { Component } from "react";

import Customizer from "./Customizer";
import Preview from "./Preview";

export default class Editor extends Component {
  constructor() {
    super();
    this.state = {
      color: "black",
      title: "Abstract painting & cocktails",
      date: "13/05",
      time: "from 5pm to 8pm ",
      location: "Vester Volgade 8",
      logo: "none",
      image: "none",
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
    }));
    console.log(e);
  };

  render() {
    return (
      <section className="Editor">
        <Customizer
          onInputChange={this.handleInputChange}
          onColorChange={this.handleColorChange}
          onLogoChange={this.handleLogoChange}
          onImageChange={this.handleImageChange}
        ></Customizer>
        <Preview state={this.state}></Preview>
      </section>
    );
  }
}
