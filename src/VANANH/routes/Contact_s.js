import React, { Component } from "react";
import xexuc from "../assets/images/introduce/xe-xuc.png";
import "./styles/Contact_s.scss";
import i_br from "../assets/images/slider/bg-slider.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Contact_s = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3002/create", {
        name,
        email,
        phone,
        title,
        text,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <sectione className="contact_s">
        <div className="row row-top-bg align-items-center">
          <div
            className="col Contact position-absolute text-center fw-bold fs-1"
            style={{ color: "white" }}
          >
            Contact
          </div>
          <img className="" src={i_br} alt=""></img>
        </div>
        {/* --- */}
        <div className="notifycations position-fixed ">
          <div className="toast success">
            <i className="fa-solid fa-circle-check"></i>
            <div className="content">
              <div className="title">Success</div>
              <span>This is a success toast.</span>
            </div>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        {/* ----- */}
        <div className="container ctn mt-4">
          <div className="row justify-content-between">
            <div className="col col-img col-md-12 col-lg-8 m-3">
              <div className="row">
                <div className="col col-xxl-5 mt-5">
                  <img className="img-fluid" src={xexuc} alt=""></img>
                </div>
                <div className="col  m-3">
                  <h4 className="fw-bold ">LIÊN HỆ </h4>
                  <p className="">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the dummy text
                    ever since the 1500s, when
                  </p>
                  <p>
                    <span>Hotline: </span>0903 079 135
                  </p>
                  <p>
                    <span>Email: </span>vananhtechnology@gmail.com
                  </p>
                  <p>
                    <span>Website: </span>xenangvananh.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col m-3 col-contact">
              <div className="row row-title">
                <h5>LIÊN HỆ</h5>
              </div>
              <div className="row row-text">
                <p>
                  <span>Địa chỉ:</span> Địa Chỉ : Số 51, Hẻm 245, Đường Hoàng
                  Hữu Nam, Phường Tân Phú, TP.Hồ Chí Minh
                </p>
                <p>
                  <span>Hotline: </span>0903 079 135
                </p>
                <p>
                  <span>Email: </span>vananhtechnology@gmail.com
                </p>
                <p>
                  <span>Website: </span>xenangvananh.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4 mb-4">
          <div className="row row-body">
            <div className="col col-xxl-5 col-xl-6 col-lg-7 col-md-12 col-xs-12 col-left text-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.1811431449642!2d106.81188335896913!3d10.860025200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527dedb2dfe23%3A0xcd5f4aa28b78b901!2zQ8O0bmcgdHkgVE5ISCBL4bu5IFRodeG6rXQgVsOibiBBbmg!5e0!3m2!1svi!2s!4v1697183644269!5m2!1svi!2s"
                width="550"
                height="450"
              ></iframe>
            </div>
            <div className="col  col-right">
              <form onSubmit={handleSubmit}>
                <div className="row p-4">
                  <div className="row row-title">
                    <h5 className="fw-bold">THÔNG TIN LIÊN HỆ</h5>
                  </div>
                  <div className="row">
                    <div className="col col-xs-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 pt-2">
                      <input
                        type="text"
                        name={name.name}
                        placeholder="Họ và tên"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                      ></input>
                    </div>

                    <div className="col col-xs-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 pt-2">
                      <input
                        type="phone"
                        name={phone.phone}
                        placeholder="Điện thoại"
                        className="form-control"
                        onChange={(e) => setPhone(e.target.value)}
                      ></input>
                    </div>

                    <div className="col col-xs-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 pt-2">
                      <input
                        type="email"
                        name={email.email}
                        placeholder="Email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                    </div>
                    <div className="col col-xs-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6  pt-2">
                      <input
                        type="text"
                        name={title.title}
                        placeholder="Tiêu đề"
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                      ></input>
                    </div>
                    <div className="col  pt-2">
                      <textarea
                        className="form-control"
                        name={text.text}
                        rows="5"
                        cols="20"
                        id="ctl00_mainContent_ctl01_ctl32e5dfcbd3de4bc597172154825c2a38_txt32e5dfcbd3de4bc597172154825c2a38"
                        placeholder="Nội dung"
                        onChange={(e) => setText(e.target.value)}
                      ></textarea>
                    </div>

                    <div className="btn-submit pt-2">
                      <button
                        className="contact-btn btn-lg "
                        id="success"
                        type="submit"

                      >
                        GỬI ĐĂNG KÝ
                      </button>
               
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </sectione>
    </>
  );
};
export default Contact_s;
