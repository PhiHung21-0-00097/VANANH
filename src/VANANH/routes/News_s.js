import React from "react";
import { Link } from "react-router-dom";
import "./styles/News_s.scss";
import i_br from "../assets/images/slider/bg-slider.png";
import { useState, useEffect } from "react";
function News_s() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/info_tintuc")
      .then((response) => response.json())
      .then((tintuc) => {
        setData(tintuc);
      });
  }, []);

  return (
    <>
      <section className="news_s mb-5">
        <div className="row row-top-bg align-items-center">
          <div
            className="col Contact position-absolute text-center fw-bold fs-1"
            style={{ color: "white" }}
          >
            News
          </div>
          <img className="" src={i_br} alt=""></img>
        </div>
        <div className="container">
          {/* <div className="row row-bottom-newss">
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

              */}

          <div className="row row-body">
            <div className="col col-body">
              <div className="row-body-title pt-5">
                <h3>TIN TỨC MỚI NHẤT</h3>
              </div>
              <div className="row row-body ">
                {data.map((tintuc, i) => (
                  <Link to={"/tintuc-chitiet"}>
                    <div className="row p-1 row-card align-items-center">
                      <div className="col col-5 col-left-card">
                        <img
                          src={tintuc.imgNew}
                          alt=""
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="col col-right-card align-items-center justify-content-center">
                        <div className="row p-3  align-items-center justify-content-center">
                          <h4 className="text">{tintuc.nameNew}</h4>
                          <span>{tintuc.dayNew}</span>
                          <p>{tintuc.textNew}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default News_s;
