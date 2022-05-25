import React from "react";
import { Component } from "react";
import Plus from "./assets/icon-plus.png";
export default class File extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="File ">
        <label htmlFor="imageInput">
          <img src={Plus} alt="plus-icon" />
        </label>
        <input
          id="imageInput"
          className="addImageBtn"
          type="file"
          onChange={this.props.handleChange}
          name="file"
        />
      </div>
    );
  }
}
