import React from "react";
import SlideBox from "./SlideBox";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation , Autoplay } from "swiper";
// import SwiperCore, { Autoplay } from 'swiper';


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
        
        navigation={true}
        modules={[Pagination, Navigation , Autoplay]}
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
