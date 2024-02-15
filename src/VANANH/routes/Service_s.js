import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import i_br from "../assets/images/slider/bg-slider.png";
import { Link } from "react-router-dom";
import "./styles/Service_s.scss";
import { useState, useEffect } from "react";

function Service_s() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/info_service")
      .then((response) => response.json())
      .then((service) => {
        setData(service);
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
      <section className="service_s mb-5">
        <div className="row row-top-bg align-items-center">
          <div
            className="col Contact position-absolute text-center fw-bold fs-1"
            style={{ color: "white" }}
          >
            Dịch vụ
          </div>
          <img className="" src={i_br} alt=""></img>
        </div>
        <div className="container">
          <div className="row row-body pt-4">
            <div className="col col-body">
              <div className="row-body-title p-10">
                <h3>
                  <span>DỊCH VỤ KỸ THUẬT VÂN ANH</span>
                </h3>
              </div>
              <div className="row-body">
                <Swiper
                  pagination={pagination}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="row row-card p-1">
                      {data.map((service, i) => (
                        <div className="col col-xxl-3 col-xl-4 col-md-6 col-sm-12 mt-3">
                          <div className="card">
                            {" "}
                            <Link to={"/dichvu-chitiet"}>
                              <img
                                className="img p-2"
                                src={service.image}
                                alt=""
                              ></img>
                              <div className="service-card text-center p-2">
                                <div className="row button-service_s d-flex justify-content-end">
                                  <div className="col align-items-center">
                                    <h5 className="fw-bold pt-4 text-black">
                                      {" "}
                                      {service.title}
                                    </h5>
                                  </div>
                                  <div className="col link ">
                                    <img src={""} alt=""></img>
                                    <span> TÌM HIỂU THÊM</span>
                                  </div>
                                </div>
                              </div>{" "}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="row row-card p-1">
                      {data.map((service, i) => (
                        <div className="col col-xxl-3 col-xl-4 col-md-6 col-sm-12 mt-3">
                          <div className="card">
                            {" "}
                            <Link to={"/dichvu-chitiet"}>
                              <img
                                className="img p-2"
                                src={service.image}
                                alt=""
                              ></img>
                              <div className="service-card text-center p-2">
                                <div className="row button-service_s d-flex justify-content-end">
                                  <div className="col align-items-center">
                                    <h5 className="fw-bold pt-4 text-black">
                                      {" "}
                                      {service.title}
                                    </h5>
                                  </div>
                                  <div className="col link ">
                                    <img src={""} alt=""></img>
                                    <span> TÌM HIỂU THÊM</span>
                                  </div>
                                </div>
                              </div>{" "}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service_s;
{
  /* <div className="row row-bottom-newss">
              <div className="col col-xl-4 col-md-5 col-sm-12 col-left">
                <div className="row row-title">
                  <h3>BÀI VIẾT NỔI BẬT</h3>
                </div>
                <div className="row">
                  <div className="row row-body-left">
                    <div className="row row-body-kid p-1">
                      <div className="col col-4">
                        <img
                          src="https://i.ytimg.com/vi/u2VGM_FmXrQ/maxresdefault.jpg"
                          alt=""
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="col">
                        <Link>
                          Top 11 nhà máy gia công mỹ phẩm tại Hà nội uy tín nhất
                          2023
                        </Link>
                      </div>
                    </div>
                    <div className="row row-body-kid p-1">
                      <div className="col col-4">
                        <img
                          src="https://i.ytimg.com/vi/u2VGM_FmXrQ/maxresdefault.jpg"
                          alt=""
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="col">
                        <Link>
                          Top 11 nhà máy gia công mỹ phẩm tại Hà nội uy tín nhất
                          2023
                        </Link>
                      </div>
                    </div>
                    <div className="row row-body-kid p-1">
                      <div className="col  col-4">
                        <img
                          src="https://i.ytimg.com/vi/u2VGM_FmXrQ/maxresdefault.jpg"
                          alt=""
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="col">
                        <Link>
                          Top 11 nhà máy gia công mỹ phẩm tại Hà nội uy tín nhất
                          2023
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              */
}
