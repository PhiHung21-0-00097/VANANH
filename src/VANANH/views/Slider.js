import React from "react";

import i_br from "../assets/images/slider/bg-slider.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Slider.scss";

const Slider = () => {
  return (
    <>
      <section className="slider">
        <div className="row-slider">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="row row-slider-container">
              <div className="col col-slider-container">
                <SwiperSlide>
                  <Link to={"/banggia"} className="slider-form">
                    <img className="img-slider" src={i_br} alt=" "></img>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to={"/banggia"} className="slider-form">
                    <img className="img-slider" src={i_br} alt=" "></img>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to={"/banggia"} className="slider-form">
                    <img className="img-slider" src={i_br} alt=" "></img>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to={"/banggia"} className="slider-form">
                    <img className="img-slider" src={i_br} alt=" "></img>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to={"/banggia"} className="slider-form">
                    <img className="img-slider" src={i_br} alt=" "></img>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to={"/banggia"} className="slider-form">
                    <img className="img-slider" src={i_br} alt=" "></img>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to={"/banggia"} className="slider-form">
                    <img className="img-slider" src={i_br} alt=" "></img>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to={"/banggia"} className="slider-form">
                    <img className="img-slider" src={i_br} alt=" "></img>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to={"/banggia"} className="slider-form">
                    <img className="img-slider" src={i_br} alt=" "></img>
                  </Link>
                </SwiperSlide>
              </div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Slider;
