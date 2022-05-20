import React, { Component } from "react";
import Editor from "./Editor";
import Format from "./Format";
import Mockups from "./Mockups";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      format: "post",
      template: "",
    };
  }
  handleFormatChange = (e) => {
    const format = e;
    const name = "format";
    this.setState(() => ({
      [name]: format,
    }));
    // console.log(format);
  };
  handleTemplateChange = (e) => {
    const template = e;
    const name = "template";
    this.setState(() => ({
      [name]: template,
    }));
    // console.log(template);
  };
  render() {
    return (
      <>
        <section className="FormatTemplate">
          <Format onFormatChange={this.handleFormatChange}></Format>
        </section>
        <section className="EditorScreen">
          <Editor></Editor>
          <Mockups
            format={this.state.format}
            onTemplateChange={this.handleTemplateChange}
          ></Mockups>
        </section>
      </>
    );
  }
}
