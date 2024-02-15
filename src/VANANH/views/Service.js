import React from "react";
import acquy from "../assets/images/service/ac-quy.png";
import xea from "../assets/images/service/xe-nang-a.png";
import xeb from "../assets/images/service/xe-nang-b.png";
import xec from "../assets/images/service/xe-nang-c.png";
import { Link } from "react-router-dom";
import "../styles/Service.scss";
const Service = () => {
  return (
    <>
      <section className="service mt-5 ">
        <div className="container">
          <div className="row row-container ">
            <div className="row row-body-service text-center align-items-center justify-content-center">
              <div className=" col col-body-service col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12  mt-4 text-center">
                <div className="card">
                  <Link to={"/ggg"} className="link-car-service">
                    <div className="row justify-content-center pt-4">
                      <div className="div-img">
                        <img className="img" src={acquy} alt=""></img>
                      </div>
                    </div>
                  </Link>
                  <div className="service-card text-center">
                    <h4 className="service-header text-center mt-3">
                      CHO THUÊ BÌNH ẮC QUY
                    </h4>
                    <div className="row row-text d-flex justify-content-center">
                      <span className="card-span">
                        Take one of Udemy’s range of Python courses and learn
                        how to code using this incredibly useful language.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-body-service col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12  mt-4 text-center">
                <div className="card">
                  <Link to={"/ggg"} className="link-car-service">
                    <div className="row justify-content-center pt-4">
                      <div className="div-img">
                        <img className="img" src={xea} alt=""></img>
                      </div>
                    </div>
                  </Link>
                  <div className="service-card text-center">
                    <h4 className="service-header text-center mt-3">
                      MUA BÁN XE NÂNG{" "}
                    </h4>

                    <div className="row row-text d-flex justify-content-center">
                      <span className="card-span">
                        Take one of Udemy’s range of Python courses and learn
                        how to code using this incredibly useful language.
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="col col-body-service col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12  mt-4 text-center">
                <div className="card">
                  <Link to={"/ggg"} className="link-car-service">
                    <div className="row justify-content-center pt-4">
                      <div className="div-img">
                        <img className="img" src={xeb} alt=""></img>
                      </div>
                    </div>{" "}
                  </Link>
                  <div className="service-card text-center">
                    <h4 className="service-header text-center mt-3">
                      CHO THUÊ XE NÂNG{" "}
                    </h4>

                    <div className="row row-text d-flex justify-content-center">
                      <span className="card-span">
                        Take one of Udemy’s range of Python courses and learn
                        how to code using this incredibly useful language.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-body-service col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-xs-12  mt-4 text-center">
                <div className="card">
                  <Link to={"/ggg"} className="link-car-service">
                    <div className="row justify-content-center pt-4">
                      <div className="div-img">
                        <img className="img" src={xec} alt=""></img>
                      </div>
                    </div>{" "}
                  </Link>
                  <div className="service-card text-center">
                    <h4 className="service-header text-center mt-3">
                      SỬA CHỮA XE NÂNG{" "}
                    </h4>

                    <div className="row row-text d-flex justify-content-center">
                      <span className="card-span">
                        Take one of Udemy’s range of Python courses and learn
                        how to code using this incredibly useful language.
                      </span>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
