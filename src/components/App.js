import React, { Component } from "react";
import Editor from "./Editor";

export default class App extends Component {
  render() {
    return (
      <section className="Screen">
        <Editor></Editor>
      </section>
    );
  }
}
