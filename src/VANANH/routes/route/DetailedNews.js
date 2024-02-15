import React, { Component } from "react";
import { useState, useEffect } from "react";
import i_br from "../../assets/images/slider/bg-slider.png";
import { Link } from "react-router-dom";
import "./styles/DetailedNews.scss";

function DetailedNews() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/info_tintuc")
      .then((response) => response.json())
      .then((tintucct) => {
        setData(tintucct);
      });
  }, []);
  return (
    <>
      <section className="detailednews  mb-5">
        <div className="row row-top-bg align-items-center">
          <div
            className="col Contact position-absolute text-center fw-bold fs-1"
            style={{ color: "white" }}
          >
            DetailedNew
          </div>
          <img className="" src={i_br} alt=""></img>
        </div>
        <div className="container">
          <div className="row row-title">
            <div className="col col-body">
              <div className="row title p-10">
                <h3>TIN TỨC</h3>
              </div>

              <div className="row row-body text-center">
                <div className="col col-xxl-9">
                  <div className="row row-text text-start">
                    <div className="col">
                      <i className="d-flex fs-6 fw-bold">
                        Thursday, 1/1/2023 - #Admin
                      </i>

                      <span>
                        Khi bạn bước chân vào một tòa nhà, một văn phòng. Các
                        giác quan của bạn sẽ tự động đánh giá văn phòng này có
                        “SẠCH” hay “KHÔNG SẠCH”. Nếu “SẠCH”, đó sẽ là sự hài
                        lòng và dễ chịu. Nếu “KHÔNG SẠCH” sự khó chịu sẽ bắt đầu
                        cho cả bạn, nhân viên và đối tác của bạn.<br></br>
                        Với Lamsach5s, mọi thứ thật đơn giản, văn phòng của
                        khách hàng phải “SẠCH”, không có ngoại lệ.
                      </span>
                      <div className="mt-3 mb-3">
                        <img
                          className="img-first"
                          src="https://baobariavungtau.com.vn/dataimages/202005/original/images1616782_C__quan_ch_c_n_ng__TP._V_ng_T_u_ki_m_tra_x__ng_ch_a_ho__ch_t_C_ng_ty_TNHH_Thu_n_Phong..jpg"
                          alt=""
                        ></img>
                      </div>

                      <span className="">
                        Khách hàng của bạn kỳ vọng điều đó, nhân viên của bạn
                        khao khát điều đó và chúng tôi có đủ kinh nghiệm và
                        nguồn lực để điều đó xảy ra.<br></br>
                        Lần tới khi bạn bước chân vào văn phòng của mình, bạn
                        hãy tự hỏi: Văn phòng này có sạch chưa? Nếu chưa hãy gọi
                        chúng tôi Lamsach5s, chúng tôi sẽ làm điều đó cho bạn
                        theo cách đơn giản nhất.
                      </span>

                      <div className="img-after  mt-3">
                        <img
                          className="img-fluid "
                          src="https://tanlongvietnam.com/wp-content/uploads/2023/10/BO-KIT-FLUX-THIET-KE-TU-VAN-LAP-DAT-TRON-GOI_TANLONG.jpg"
                          alt=""
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col col-xxl-3 d-block position-sticky"
                  style={{ top: "110px" }}
                >
                  <div className="row row-lienquan text-start">
                    <h5 className="fw-bold m-1 ">Bài viết liên quan</h5>
                  </div>
                  {data.map((tintucct, i) => (
                    <Link to={"/tintuc-chitiet"}>
                      <div className="row pt-2 row-card align-items-center">
                        <div className="col col-xxl-5 col-left-card">
                          <img
                            src="https://baobariavungtau.com.vn/dataimages/202005/original/images1616782_C__quan_ch_c_n_ng__TP._V_ng_T_u_ki_m_tra_x__ng_ch_a_ho__ch_t_C_ng_ty_TNHH_Thu_n_Phong..jpg"
                            alt=""
                            className="img-fluid"
                          ></img>
                        </div>
                        <div className="col col-xxl-7 col-right-card ">
                          <div className="row text-start text-uppercase">
                            <span className="text fw-bold">
                              {tintucct.nameNew}
                            </span>
                            <i>{tintucct.dayNew}</i>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailedNews;
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
