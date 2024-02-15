import React, { useState } from "react";
import logo from "../assets/images/footer/logo-footer.png";
import phone from "../assets/images/header/phone.svg";
import { Link } from "react-router-dom";
import "../styles/MenuBar.scss";

// import "../styles/js.scss";

function MenuBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <section className="section-menu">
        <div className="rowmenubar mt-3 mb-3">
          <div className="container">
            <div className="row row-top justify-content-center align-items-center">
              <div className="col col-xxl-3 col-xl-5 col-lg-12 text-center ">
                <img src={logo} className="logo"></img>
              </div>
              <div className="col col-xxl-5 col-xl-7 col-lg-12 col-md-12 text-center ">
                <div class="searchBox">
                  <input
                    class="searchInput"
                    type="text"
                    name=""
                    placeholder="Nhập từ khóa tìm kiếm"
                  ></input>
                  <button class="searchButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2_17)">
                        <g filter="url(#filter0_d_2_17)">
                          <path
                            d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                            stroke="white"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            shape-rendering="crispEdges"
                          ></path>
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_2_17"
                          x="-0.418549"
                          y="3.70435"
                          width="29.7139"
                          height="29.7139"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="4"></feOffset>
                          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                          <feComposite
                            in2="hardAlpha"
                            operator="out"
                          ></feComposite>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2_17"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2_17"
                            result="shape"
                          ></feBlend>
                        </filter>
                        <clipPath id="clip0_2_17">
                          <rect
                            width="28.0702"
                            height="28.0702"
                            fill="white"
                            transform="translate(0.403503 0.526367)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="col hotline-menu">
                <div class="row row-hotline d-flex justify-content-beetwen">
                  <div className="col col-left">
                    <div className="row row-left justify-content-beetwen">
                      <div className="col transformskew col-xxl-2 col-xl-1  d-flex align-items-center m-1 transformskew">
                        <img className="" alt="" src={phone}></img>
                      </div>
                      <div className="col trans">
                        <span>HỖ TRỢ KỸ THUẬT</span>
                        <h4>0901 982 922</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row ">
                      <div className="col transformskew col-xxl-2 col-xl-1   d-flex align-items-center m-1">
                        <img className="" alt="" src={phone}></img>
                      </div>
                      <div className="col">
                        <span>HỖ TRỢ KỸ THUẬT</span>
                        <h4>0901 982 922</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row-bar-menu">
          <div className="container">
            <div className="row">
              <div className="row menu-bar align-items-center">
                <nav className=" l-12 m-12 c-12">
                  <ul className="menu d-flex align-items-center justify-content-between">
                    <li className="lienhe lienhe-top d-flex justify-content-center">
                      <Link to={"/"}>TRANG CHỦ</Link>
                    </li>
                    <li className="lienhe d-flex justify-content-center">
                      <Link to={"/gioithieu"}>GIỚI THIỆU</Link>
                    </li>
                    <li className="lienhe d-flex justify-content-center ">
                      <Link to={"/sanpham"}>SẢN PHẨM</Link>

                      {/* <ul className="list-dd-h2">
                      <li className="menu-dd">
                        <h3>
                          <Link to={"/dichvu-chitiet"}>
                            VỆ SINH CÔNG NGHIỆP SAU XÂY DỰNG
                          </Link>
                        </h3>
                      </li>
                      <li>
                        <h3>
                          <Link to={"/dichvu"}> VỆ SINH NHÀ Ở ĐỊNH KỲ</Link>
                        </h3>
                      </li>
                      <li>
                        <h3>
                          <Link to={"/dichvu"}> VỆ SINH KÍNH TÒA NHÀ</Link>
                        </h3>
                      </li>
                      <li>
                        <h3>
                          <Link to={"/dichvu"}>CUNG ỨNG TẠP VỤ VĂN PHÒNG</Link>
                        </h3>
                      </li>
                      <li>
                        <h3>
                          <Link to={"/dichvu"}>TẠP VỤ VĂN PHÒNG THEO GIỜ</Link>
                        </h3>
                      </li>
                      <li>
                        <h3>
                          <Link to={"/dichvu"}>TẠP VỤ VĂN PHÒNG ĐỊNH KỲ</Link>
                        </h3>
                      </li>
                    </ul> */}
                    </li>

                    <li className="lienhe d-flex justify-content-center ">
                      <Link to={"/thue"}>THUÊ BÌNH ẮC QUY XE NÂNG</Link>
                    </li>
                    <li className="lienhe d-flex justify-content-center">
                      <Link to={"/dichvu"}>DỊCH VỤ</Link>
                    </li>
                    <li className="lienhe d-flex justify-content-center">
                      <Link to={"/tintuc"}>TIN TỨC</Link>
                    </li>

                    <li className="lienhe-a lienhe-end d-flex justify-content-center-a ">
                      <Link to={"/lienhe"}>LIÊN HỆ</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuBar;
