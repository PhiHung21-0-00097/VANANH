import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Axios } from "axios";
import Testt from "../styles/Testt.scss";
import logo from "../assets/images/footer/logo-footer.png";

const Test = () => {
  return (
    <>
      <div className="test">
        <nav>
          <input type="checkbox" id="check"></input>
          <label htmlFor="check">
            <i className="fas fa-bars" id="btn"></i>
            <i className="fas fa-times" id="cancel"></i>
          </label>
          <ul>
            <li>
              <Link to={"/"}>trang chủ</Link>
            </li>
            <li>
              <Link to={"/gioithieu"}>giớix thiệu</Link>
            </li>
            <li>
              <Link to={"/sanpham"}>sản phẩm</Link>
            </li>
            <li>
              <Link to={"/thue"}>thuê ắc quy xe nâng</Link>
            </li>
            <li>
              <Link to={"/dichvu"}>dịch vụ</Link>
            </li>
            <li>
              <Link to={"/tintuc"}>tin tức</Link>
            </li>
            <li>
              <Link to={"/lienhe"}>liên hệ</Link>
            </li>
          </ul>
        </nav>
        {/* <div className="row pt-5">
            <div className="col text-center">
              <div class="card">
                <h2>CARD</h2>
              </div>
            </div>
          </div>{" "}
          <div className="row pt-5">
            <div className="col text-center">
              <div class="cardd">
                <div class="card_load"></div>
                <div class="card_load_extreme_title"></div>
                <div class="card_load_extreme_descripion"></div>
              </div>{" "}
            </div>
          </div> */}
      </div>
    </>
  );
};
export default Test;
