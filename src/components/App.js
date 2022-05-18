import React, { Component } from "react";
// import Title from "./Title";
// import Date from "./Date";
import Customizer from "./Customizer";
import Preview from "./Preview";
// import { render } from "@testing-library/react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
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

  render() {
    return (
      <section className="Screen">
        <Customizer onChange={this.handleInputChange}></Customizer>
        <Preview state={this.state}></Preview>
      </section>
    );
  }
}
// render();
