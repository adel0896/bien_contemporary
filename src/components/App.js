import React, { Component, useState } from "react";
import Editor from "./Editor";
import Format from "./Format";
import Mockups from "./Mockups";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      format: "post",
      template: "abstract",
      show: true,
    };
  }
  handleFormatChange = (e) => {
    const format = e;
    const name = "format";
    this.setState(() => ({
      [name]: format,
    }));
  };
  handleTemplateChange = (e) => {
    const template = e;
    const name = "template";
    this.setState(() => ({
      [name]: template,
    }));
  };
  hideFirstScreen = (e) => {
    console.log("wasap");
    this.setState(() => ({
      show: false,
    }));
  };
  render() {
    const show = this.state.show;
    if (show)
      return (
        <>
          <section className="FormatTemplate">
            <div className="FormatSection">
              <Format
                onFormatChange={this.handleFormatChange}
                name="format"
              ></Format>
            </div>
            <div className="TemplateSection">
              <Mockups
                format={this.state.format}
                onTemplateChange={this.handleTemplateChange}
              ></Mockups>
            </div>
            <button onClick={this.hideFirstScreen}>NEXT</button>
          </section>
        </>
      );
    else
      return (
        <section className="EditorScreen">
          <Editor appState={this.state}></Editor>
        </section>
      );
  }
}
