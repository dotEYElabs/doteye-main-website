import React from "react";
import Slider2Card from "./Slider2Card";
import SliderCard from "./SliderCard";
import SliderCardReverse from "./SliderCardReverse";
import SliderCard2Reverse from "./SliderCard2Reverse";
import vector1 from "../assets/vector/Vector-1.min.png";
import shield from '../assets/images/shield.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

import ChartLine from "../assets/vector/ChartLine.min.png";

const Slider = () => {

  return (
    <div className="Slider-Head" id="WhatWeDO">
      <div className=" px-3 py-3 w-16">
        <img src={vector1} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="Heading text-black text-center font-bold text-3xl py-4">
          WHAT <span className="Heading-overlay"> WE DO?</span>
        </h1>
        {/* <div>
          <img src={shield} alt="" className="pl-9 w-16 mt-6 " />
        </div> */}
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#ff7c08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px"
        }}
      >
        <SwiperSlide><SliderCard/></SwiperSlide>
        <SwiperSlide><SliderCardReverse/></SwiperSlide>
        <SwiperSlide><Slider2Card/></SwiperSlide>
        <SwiperSlide><SliderCard2Reverse/></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
