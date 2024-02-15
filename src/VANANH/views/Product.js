import React from "react";
import box from "../assets/svg/product/box-arow-down.svg";
import "../styles/Product.scss";
import more from "../assets/svg/more.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Producet = () => {
  return (
    <>
      <section className="product ">
        <div className="container">
          <div className="row row-container">
            <div className="col col-container ">
              <div className="row row-top-product">
                <div className="col col-xl-12 col-md-12 col-sm-12">
                  <div className="row form-product-header">
                    <div className="title-form-product  d-flex justify-content-beetwen">
                      <div className="title-header">ẮC QUY XE NÂNG</div>
                      <div className="title-header-end">
                        <Link to={"/sanpham"}>
                          <img src={box} alt="" className="img-btn"></img>
                          XEM NHIỀU HƠN
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row product-form">
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items">
                    <div className="card-product">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/may-nen-khi.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/n602.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng{" "}
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/CHI%20TRANG.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng{" "}
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/soi%20pp%20trang.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng{" "}
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================================================ */}
          <div className="row row-container">
            <div className="col col-container ">
              <div className="row row-top-product">
                <div className="col col-xl-12 col-md-12 col-sm-12">
                  <div className="row form-product-header">
                    <div className="title-form-product  d-flex justify-content-beetwen">
                      <div className="title-header">XE NÂNG TOYOTA</div>
                      <div className="title-header-end">
                        <Link to={"/sanpham"}>
                          <img src={box} alt="" className="img-btn"></img>
                          XEM NHIỀU HƠN
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row product-form">
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/may-nen-khi.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/n602.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng{" "}
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/CHI%20TRANG.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng{" "}
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/soi%20pp%20trang.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng{" "}
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* =========================================================================================== */}
          <div className="row row-container">
            <div className="col col-container ">
              <div className="row row-top-product">
                <div className="col col-xl-12 col-md-12 col-sm-12">
                  <div className="row form-product-header">
                    <div className="title-form-product  d-flex justify-content-beetwen">
                      <div className="title-header">XE NÂNG LINDE</div>
                      <div className="title-header-end">
                        <Link to={"/sanpham"}>
                          <img src={box} alt="" className="img-btn"></img>
                          XEM NHIỀU HƠN
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row product-form">
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/may-nen-khi.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/n602.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng{" "}
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/CHI%20TRANG.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng{" "}
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/soi%20pp%20trang.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng{" "}
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ============================================================================================== */}
          <div className="row row-container-bottom">
            <div className="col col-container-bottom ">
              <div className="row row-top-product">
                <div className="col col-xl-12 col-md-12 col-sm-12">
                  <div className="row form-product-header">
                    <div className="title-form-product  d-flex justify-content-beetwen">
                      <div className="title-header">XE NÂNG TCL</div>
                      <div className="title-header-end">
                        <Link to={"/sanpham"}>
                          <img src={box} alt="" className="img-btn"></img>
                          XEM NHIỀU HƠN
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row product-form">
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/may-nen-khi.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/n602.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng{" "}
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/CHI%20TRANG.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng{" "}
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12 pt-3">
                  <div className="product-items text-center">
                    <div className="card-product text-center">
                      <Link to={"/lienhe"} className=" img-product-items">
                        <img
                          src={
                            "https://vananhco.com/sanpham_images/2722/soi%20pp%20trang.png"
                          }
                          alt=""
                          className="i-pf"
                        ></img>
                      </Link>
                    </div>
                    <div className="row service-content text-center align-items-center justify-content-center">
                      <div className="row">
                        <h1 className="col col-xxl-11 col-xl-10 col-lg-10 col-md-6 service-header text-center">
                          Ắc quy US AGM 27 (12v – 106ah), ắc quy cho xe nâng{" "}
                        </h1>
                      </div>

                      <div className="row button-product text-center align-items-center justify-content-center">
                        <div className="d-flex col col-xxl-8 col-xl-10 col-lg-9 col-md7 text-center align-items-center justify-content-center">
                          <Link to={"/lienhe"} className="link">
                            <img src={box} alt="" className="img-btn"></img>
                            <span> LIÊN HỆ NGAY</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Producet;
