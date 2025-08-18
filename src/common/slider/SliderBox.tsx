"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCards from "./SliderCard";
import React from "react";
import "./styles.scss";
import { SliderBoxProps } from "@/types/slidercard";

function SliderBox({ data }: SliderBoxProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <div className="slider_box">
      <Slider {...settings} className="slick_slider">
        {data?.map((item, index) => (
          <SliderCards item={item} index={index} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default SliderBox;
