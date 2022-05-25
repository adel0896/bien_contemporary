import React from "react";
import { Component } from "react";
import Color from "./Color";
import Title from "./Title";
import Date from "./Date";
import Time from "./Time";
import Location from "./Location";
import Logo from "./Logo";
import Image from "./Image";
import File from "./File";

export default class Customizer extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      file: "",
    };

    console.log(props.state);
  }

  render() {
    return (
      <div className="Customizer">
        <Color
          onColorChange={this.props.onColorChange}
          name="color"
          value={this.props.value}
        ></Color>
        <Title
          onInputChange={this.props.onInputChange}
          name="title"
          value={this.props.value}
        ></Title>
        <div className="DateTimeRow">
          <Date
            onInputChange={this.props.onInputChange}
            name="date"
            value={this.props.value}
          ></Date>
          <Time
            onInputChange={this.props.onInputChange}
            name="time"
            value={this.props.value}
          ></Time>
        </div>
        <Location
          onInputChange={this.props.onInputChange}
          name="location"
          value={this.props.value}
        ></Location>
        <Image
          onImageChange={this.props.onImageChange}
          onImageUpload={this.props.onImageUpload}
          name="image"
          value={this.props.value}
        ></Image>
        <Logo
          onLogoChange={this.props.onLogoChange}
          name="logo"
          value={this.props.value}
        ></Logo>
        <File
          handleChange={this.props.onImageUpload}
          state={this.props.state}
        ></File>
      </div>
    );
  }
}
