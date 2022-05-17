import React, { Component } from "react";
import Title from "./Title";
import Date from "./Date";
// import Customizer from "./Customizer";
import Preview from "./Preview";
// import { render } from "@testing-library/react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      date: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const { title, date } = this.state;
    this.setState(() => ({
      [name]: value,
      status: `${title}, ${date}`,
    }));
  };

  render() {
    // const { title, date, status } = this.state;
    return (
      <section className="Screen">
        <Title onChange={this.handleChange}></Title>
        <Date onChange={this.handleChange}></Date>

        <Preview state={this.state}></Preview>
      </section>
    );
  }
}
// render();
