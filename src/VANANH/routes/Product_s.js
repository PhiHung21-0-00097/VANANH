import React, { Component } from "react";
import "./styles/Product_s.scss";
import i_br from "../assets/images/slider/bg-slider.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function Product_s() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/info_sp")
      .then((response) => response.json())
      .then((sanpham) => {
        setData(sanpham);
      });
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <div className="product_s ">
        <div className="row row-top-bg align-items-center">
          <div
            className="col Contact position-absolute text-center fw-bold fs-1"
            style={{ color: "white" }}
          >
            Sản phẩm
          </div>
          <img className="" src={i_br} alt=""></img>
        </div>
        <div className="container">
          <div className="row row-top pt-5 pb-5">
            <div className="col col-top">
              <div className="row row-top-title p-10">
                <h3>sản phẩm mới nhất</h3>
              </div>
            </div>

            <div className="row row-body mt-4">
              <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="row row-body-product_s p-2">
                    {data.map((sanpham, i) => (
                      <div className="col col-xl-3 col-md-6 col-sm-12 pt-3 mt-3 ">
                        <Link to={"/sanpham-chitiet"}>
                          <div className="card-product_s ">
                            <div className="col p-1">
                              <img
                                className="img-fluid div-img p-2"
                                alt=""
                                src={sanpham.images}
                              ></img>
                            </div>
                            <div className="row card-body-product_s justify-content-end">
                              <div>
                                <h6 className="card-title-product_s fw-bold text-uppercase">
                                  {sanpham.spName}
                                </h6>
                              </div>
                              <div className=" link justify-content-center">
                                <img src={""} alt=""></img>
                                <span> CHI TIẾT</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row row-body-product_s p-2">
                    {data.map((sanpham, i) => (
                      <div className="col col-xl-3 col-md-6 col-sm-12 pt-3 mt-3 ">
                        <Link to={"/sanpham-chitiet"}>
                          <div className="card-product_s ">
                            <div className="col p-1">
                              <img
                                className="img-fluid div-img p-2"
                                alt=""
                                src={sanpham.images}
                              ></img>
                            </div>
                            <div className="row card-body-product_s justify-content-end">
                              <div>
                                <h6 className="card-title-product_s fw-bold text-uppercase">
                                  {sanpham.spName}
                                </h6>
                              </div>
                              <div className=" link justify-content-center">
                                <img src={""} alt=""></img>
                                <span> CHI TIẾT</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product_s;
