import React from "react";
import { Component } from "react";
export default class File extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="File ">
        <h2>Add Image:</h2>
        <input type="file" onChange={this.props.handleChange} name="file" />
        {/* in case we want a little image to appear when we upload */}
        {/* <img src={this.props.state.file} /> */}
      </div>
    );
  }
}
