import React, { Component } from "react";
import Editor from "./Editor";
import Format from "./Format";

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
    console.log(format);
  };
  render() {
    return (
      <>
        <section className="FormatTemplate">
          <Format onFormatChange={this.handleFormatChange}></Format>
        </section>
        <section className="EditorScreen">
          <Editor></Editor>
        </section>
      </>
    );
  }
}
