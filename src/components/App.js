import React, { Component, useState } from "react";
import Editor from "./Editor";
import Format from "./Format";
import Mockups from "./Mockups";
import ArrowNext from "./assets/arrow-next.png";

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
    this.setState(() => ({
      show: false,
    }));
  };
  goBack = (e) => {
    this.setState(() => ({
      show: true,
      format: "post",
      template: "abstract",
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
                defaultFormat={this.state.format}
              ></Format>
            </div>
            <div className="TemplateSection">
              <label className="labelTemp">Select the template:</label>
              <Mockups
                format={this.state.format}
                onTemplateChange={this.handleTemplateChange}
                template={this.state.template}
              ></Mockups>
            </div>
            <button onClick={this.hideFirstScreen} className="arrowNext">
              <img src={ArrowNext} alt="arrow-next" />
              NEXT
            </button>
          </section>
        </>
      );
    else
      return (
        <section className="EditorScreen">
          <Editor appState={this.state} goBack={this.goBack}></Editor>
        </section>
      );
  }
}
