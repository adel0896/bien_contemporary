import React, { Component } from "react";
import CustomizerSwiper from "./Swiper";
import Customizer from "./Customizer";
import Preview from "./Preview";
import logo from "./assets/logo.png";

import ArrowBack from "./assets/arrow-back.png";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      title: "Abstract painting & cocktails",
      artist: "Artist's name",
      date: "13/05",
      time: "from 5pm to 8pm ",
      location: "Vester Volgade 8",
      logo: "none",
      image: "none",
      file: "none",
    };
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  };
  handleColorChange = (e) => {
    const color = e;
    const name = "color";
    this.setState(() => ({
      [name]: color,
    }));
  };
  handleLogoChange = (e) => {
    const logo = e;
    const name = "logo";
    this.setState(() => ({
      [name]: logo,
    }));
  };
  handleImageChange = (e) => {
    const image = e;
    const name = "image";
    this.setState(() => ({
      [name]: image,
      file: "none",
    }));
  };

  handleImageUpload = (e) => {
    const name = "file";
    const selectedFile = URL.createObjectURL(e.target.files[0]);
    this.setState(() => ({
      [name]: selectedFile,
      image: "none",
    }));
  };

  checkWidth = () => {
    let desktop = window.innerWidth >= 950;
    return desktop;
  };

  render() {
    const format = this.props.appState.format;
    const template = this.props.appState.template;
    this.checkWidth();
    if (this.checkWidth() === false) {
      return (
        <section className="ScreenMobile">
          <div className="EditorHeaderMobile">
            <button onClick={this.props.goBack}>
              <img src={ArrowBack} alt="arrow-back" />
              Back
            </button>
            <img
              onClick={this.props.goBack}
              className="headerLogo"
              src={logo}
              alt="logo"
            ></img>
          </div>
          <section className="EditorMainMobile">
            <CustomizerSwiper
              onInputChange={this.handleInputChange}
              onColorChange={this.handleColorChange}
              onLogoChange={this.handleLogoChange}
              onImageChange={this.handleImageChange}
              onImageUpload={this.handleImageUpload}
              state={this.state}
            ></CustomizerSwiper>

            <Preview
              state={this.state}
              format={format}
              template={template}
            ></Preview>
          </section>
        </section>
      );
    }

    return (
      <section className="Screen">
        <div className="EditorHeader">
          <button onClick={this.props.goBack}>
            <img src={ArrowBack} alt="arrow-back" />
            Back
          </button>
          <img
            onClick={this.props.goBack}
            className="headerLogo"
            src={logo}
            alt="logo"
          ></img>
        </div>
        <section className="EditorMain">
          <Customizer
            appstate={this.props.appState}
            onInputChange={this.handleInputChange}
            onColorChange={this.handleColorChange}
            onLogoChange={this.handleLogoChange}
            onImageChange={this.handleImageChange}
            onImageUpload={this.handleImageUpload}
            state={this.state}
          ></Customizer>
          <Preview
            appstate={this.props.appState}
            state={this.state}
            format={format}
            template={template}
          ></Preview>
        </section>
      </section>
    );
  }
}
