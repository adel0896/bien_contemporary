import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Color from "./Color";
import Title from "./Title";
import Date from "./Date";
import Time from "./Time";
import Location from "./Location";
import Logo from "./Logo";
import Image from "./Image";
import File from "./File";
import Artist from "./Artist";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default class CustomizerSwiper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: "",
    };
  }

  render() {
    if (this.props.template === "exhibit") {
      return (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper CustomizerSwiper"
          >
            <SwiperSlide>
              <Color
                onColorChange={this.props.onColorChange}
                name="color"
                value={this.props.value}
              ></Color>
            </SwiperSlide>
            <SwiperSlide>
              <Logo
                onLogoChange={this.props.onLogoChange}
                name="logo"
                value={this.props.value}
              ></Logo>
            </SwiperSlide>
            <SwiperSlide>
              <Title
                onInputChange={this.props.onInputChange}
                name="title"
                value={this.props.value}
              ></Title>
            </SwiperSlide>
            <SwiperSlide>
              <Artist
                onInputChange={this.props.onInputChange}
                name="artist"
                value={this.props.value}
                defaultArtist={this.props.state.artist}
              ></Artist>
            </SwiperSlide>
            <SwiperSlide>
              <Date
                onInputChange={this.props.onInputChange}
                name="date"
                value={this.props.value}
              ></Date>
            </SwiperSlide>
            <SwiperSlide>
              <Time
                onInputChange={this.props.onInputChange}
                name="time"
                value={this.props.value}
              ></Time>
            </SwiperSlide>
            <SwiperSlide>
              <Location
                onInputChange={this.props.onInputChange}
                name="location"
                value={this.props.value}
              ></Location>
            </SwiperSlide>
            <SwiperSlide className="ImageFileDivMobile">
              <Image
                onImageChange={this.props.onImageChange}
                onImageUpload={this.props.onImageUpload}
                name="image"
                value={this.props.value}
                template={this.props.template}
              ></Image>
              <File
                handleChange={this.props.onImageUpload}
                state={this.props.state}
              ></File>
            </SwiperSlide>
          </Swiper>
        </>
      );
    }
    return (
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper CustomizerSwiper"
        >
          <SwiperSlide>
            <Color
              onColorChange={this.props.onColorChange}
              name="color"
              value={this.props.value}
            ></Color>
          </SwiperSlide>
          <SwiperSlide>
            <Logo
              onLogoChange={this.props.onLogoChange}
              name="logo"
              value={this.props.value}
            ></Logo>
          </SwiperSlide>
          <SwiperSlide>
            <Title
              onInputChange={this.props.onInputChange}
              name="title"
              value={this.props.value}
            ></Title>
          </SwiperSlide>
          <SwiperSlide>
            <Date
              onInputChange={this.props.onInputChange}
              name="date"
              value={this.props.value}
            ></Date>
          </SwiperSlide>
          <SwiperSlide>
            <Time
              onInputChange={this.props.onInputChange}
              name="time"
              value={this.props.value}
            ></Time>
          </SwiperSlide>
          <SwiperSlide>
            <Location
              onInputChange={this.props.onInputChange}
              name="location"
              value={this.props.value}
            ></Location>
          </SwiperSlide>
          <SwiperSlide className="ImageFileDivMobile">
            <Image
              onImageChange={this.props.onImageChange}
              onImageUpload={this.props.onImageUpload}
              name="image"
              value={this.props.value}
              template={this.props.template}
            ></Image>
            <File
              handleChange={this.props.onImageUpload}
              state={this.props.state}
            ></File>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}
