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
import Artist from "./Artist";

export default class Customizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: "",
    };
  }

  render() {
    if (this.props.appstate.template === "exhibit") {
      return (
        <div className="Customizer">
          <Color
            onColorChange={this.props.onColorChange}
            name="color"
            value={this.props.value}
          ></Color>
          <Logo
            onLogoChange={this.props.onLogoChange}
            name="logo"
            value={this.props.value}
          ></Logo>
          <Title
            onInputChange={this.props.onInputChange}
            name="title"
            value={this.props.value}
            defaultTitle={this.props.state.title}
          ></Title>
          <Artist
            onInputChange={this.props.onInputChange}
            name="artist"
            value={this.props.value}
            defaultArtist={this.props.state.artist}
          ></Artist>
          <Date
            onInputChange={this.props.onInputChange}
            name="date"
            value={this.props.value}
            defaultDate={this.props.state.date}
          ></Date>
          <Time
            onInputChange={this.props.onInputChange}
            name="time"
            value={this.props.value}
            defaultTime={this.props.state.time}
          ></Time>

          <Location
            onInputChange={this.props.onInputChange}
            name="location"
            value={this.props.value}
            defaultLocation={this.props.state.location}
          ></Location>
          <div className="imageSelectorFile">
            <Image
              onImageChange={this.props.onImageChange}
              onImageUpload={this.props.onImageUpload}
              name="image"
              value={this.props.value}
            ></Image>

            <File
              handleChange={this.props.onImageUpload}
              state={this.props.state}
            ></File>
          </div>
        </div>
      );
    }

    return (
      <div className="Customizer">
        <Color
          onColorChange={this.props.onColorChange}
          name="color"
          value={this.props.value}
        ></Color>
        <Logo
          onLogoChange={this.props.onLogoChange}
          name="logo"
          value={this.props.value}
        ></Logo>
        <Title
          onInputChange={this.props.onInputChange}
          name="title"
          value={this.props.value}
          defaultTitle={this.props.state.title}
        ></Title>
        <Date
          onInputChange={this.props.onInputChange}
          name="date"
          value={this.props.value}
          defaultDate={this.props.state.date}
        ></Date>
        <Time
          onInputChange={this.props.onInputChange}
          name="time"
          value={this.props.value}
          defaultTime={this.props.state.time}
        ></Time>

        <Location
          onInputChange={this.props.onInputChange}
          name="location"
          value={this.props.value}
          defaultLocation={this.props.state.location}
        ></Location>
        <div className="imageSelectorFile">
          <Image
            onImageChange={this.props.onImageChange}
            onImageUpload={this.props.onImageUpload}
            name="image"
            value={this.props.value}
          ></Image>

          <File
            handleChange={this.props.onImageUpload}
            state={this.props.state}
          ></File>
        </div>
      </div>
    );
  }
}
