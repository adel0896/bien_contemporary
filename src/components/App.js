import React, { Component } from "react";

import Customizer from "./Customizer";
import Preview from "./Preview";
// import { render } from "@testing-library/react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "black",
      title: "",
      date: "",
      time: "",
      location: "",
      logo: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  };
  handleColorChange = (e) => {
    console.log(e);
    // const { name, color } = e;
    const color = e;
    const name = "color";
    this.setState(() => ({
      [name]: color,
    }));
  };

  render() {
    return (
      <section className="Screen">
        <Customizer
          onInputChange={this.handleInputChange}
          onColorChange={this.handleColorChange}
        ></Customizer>
        <Preview state={this.state}></Preview>
      </section>
    );
  }
}
// render();
