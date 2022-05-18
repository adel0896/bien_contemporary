import React, { Component } from "react";

import Customizer from "./Customizer";
import Preview from "./Preview";
// import { render } from "@testing-library/react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "black",
      title: "Abstract painting & cocktails",
      date: "13/05",
      time: "from 5pm to 8pm ",
      location: "Vester Volgade 8",
      logo: "none",
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
    console.log(e);
  };

  render() {
    return (
      <section className="Screen">
        <Customizer
          onInputChange={this.handleInputChange}
          onColorChange={this.handleColorChange}
          onLogoChange={this.handleLogoChange}
        ></Customizer>
        <Preview state={this.state}></Preview>
      </section>
    );
  }
}
// render();
