import React from "react";
import SlideBox from "./SlideBox";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import {Autoplay } from "swiper";


export default function CustSlide() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={100}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          1200: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          375: {
            slidesPerView: 1,
            slidesPerGroup: 1
          },
        }}
        
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide><SlideBox/></SwiperSlide>
        <SwiperSlide><SlideBox/></SwiperSlide>
        <SwiperSlide><SlideBox/></SwiperSlide>
        <SwiperSlide><SlideBox/></SwiperSlide>
      </Swiper>
    </>
  );
}
