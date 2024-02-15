import logo from "../assets/images/footer/logo-footer.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../styles/Footer.scss";
function Footer() {
  // const [backtoTopButton, setbacktoTopButton] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       setbacktoTopButton(true);
  //     } else {
  //       setbacktoTopButton(false);
  //     }
  //   });
  // }, []);
  // const scrollUp = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row row-container">
            <div className="row row-body">
              <div className="col-body-left col-xl-3 col-md-12 col-sm-6 pt-4 text-center">
                <a href="trangchu">
                  <Link>
                    <img className="body-img" src={logo} alt=""></img>
                  </Link>
                </a>
                <div className="row text text-center">
                  <ul className="col text-center">
                    <li>
                      <a href="google.com">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the dummy
                        text ever since the 1500s, when
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-info col-xl-3 col-md-4 col-sm-12 pt-4">
                <h4>Thông Tin Liên Hệ</h4>
                <ul>
                  <li>
                    <a href="https://www.google.com/maps/place/V%E1%BB%87+Sinh+L%C3%A0m+S%E1%BA%A1ch+5s/@21.0345626,105.8123056,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab45e445a555:0xedb67d73b0d429bc!8m2!3d21.0345626!4d105.8148805!16s%2Fg%2F11h7d7dw4l?hl=vi-VN&entry=ttu">
                      Địa Chỉ : Số 51, Hẻm 245, Đường Hoàng Hữu Nam, Phường Tân
                      Phú, TP.Hồ Chí Minh
                    </a>
                  </li>
                  <li>
                    <a href="">Email: vananhtechnology@gmail.com</a>
                  </li>
                  <li>
                    <a href="">Số Điện Thoại: 0903 079 135</a>
                  </li>
                  <li>
                    <a href="trangchu">Website: xenangvananh.com</a>
                  </li>
                </ul>
              </div>

              <div className="col-info  col-xl-3 col-md-4 col-sm-12 pt-4">
                <h4>Quy Định & Chính Sách</h4>
                <ul>
                  <li>
                    <a href="google.com"> Quy định đăng tin</a>
                  </li>
                  <li>
                    <a href="google.com"> Điều khoản thỏa thuận</a>
                  </li>
                  <li>
                    <a href="google.com"> Chính sách bảo mật</a>
                  </li>
                  <li>
                    <a href="google.com"> Góp ý báo lỗi</a>
                  </li>
                </ul>
              </div>

              <div className="col-info col-xl-3 col-md-4 col-sm-12 pt-4">
                <h4>KẾT NỐI CHÚNG TÔI</h4>
                <div className="footer-link">
                  <Link
                    to={"https://twitter.com/?lang=vi"}
                    className=" icons-footer"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link
                    to={"https://www.facebook.com/congtyiweb"}
                    className=" icons-footer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link
                    to={"https://www.instagram.com/"}
                    className=" icons-footer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link
                    to={"https://www.instLinkgram.com/"}
                    className=" icons-footer"
                  >
                    <i className="fa-solid  fa-envelope"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row row-footer-end align-items-center justify-content-center">
              <div
                className="col col-12 text-center
              pt-1"
              >
                <p className="title-end">
                  Copyright © 2023 XE NÂNG VÂN ANH . All rights reserved. Design
                  by i-web.vn
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* {backtoTopButton && (
        <button
          class="scroll-to-top fa-solid fa-caret-up"
          id="myBtn"
          onclick={scrollUp}
        ></button>
      )} */}
      </footer>
      <div className="hotline">
        <span class="sun sunshine"></span>
        <span class="sun">
          {" "}
          <i className="fas fa-phone"></i>
        </span>
      </div>
    </>
  );
}
export default Footer;
