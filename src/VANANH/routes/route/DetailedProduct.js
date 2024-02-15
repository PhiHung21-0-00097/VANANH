import React, { Component } from "react";
import "./styles/DetailedProduct.scss";
import { useState, useEffect } from "react";

function DetailedProduct() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/info_sp")
      .then((response) => response.json())
      .then((sanpham) => {
        setData(sanpham);
      });
  }, []);

  // getSampham(renderCourses);

  // function getSampham(callback) {
  //   fetch("http://localhost:3002/info_sp")
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(callback);
  // }

  // function renderCourses(courses) {

  // }

  return (
    <>
      <section
        className="servicebuy mt-5 mb-5"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div className="container">
          <div className="row row-title ">
            <div className="col col-body">
              <div className="row title-servicebuy pt-4">
                <h3>sản phẩm chi tiết</h3>
              </div>
              <div className="row row-body pt-4">
                <div className="col col-xxl-9 col-left">
                  <div className="row bg-white">
                    <div className="col col-xxl-6">
                      <div className="row">
                        <img
                          className=" TinyZoom img-body img-fluid p-2"
                          src={
                            "https://vananhco.com/sanpham_images/2722/may-han-bao-bi.png"
                          }
                        ></img>
                      </div>
                      <div className="row">
                        <div className="col p-1">
                          <img
                            className="img-thumbnail"
                            src={
                              "https://xenangthuantien.com/upload/images/ac-quy-xe-nang-dien.jpg"
                            }
                          ></img>
                        </div>
                        <div className="col p-1">
                          <img
                            className="img-thumbnail"
                            src={
                              "https://xenanghangvn.com/wp-content/uploads/2020/08/binh-ac-quy-xe-nang-dien-heli.jpg"
                            }
                          ></img>
                        </div>
                        <div className="col p-1">
                          <img
                            className="img-thumbnail"
                            src={
                              "https://acquyrocket.com.vn/uploads/tiny_uploads/ac-quy-xe-nang%20(3).jpg"
                            }
                          ></img>
                        </div>
                        <div className="col p-1">
                          <img
                            className="img-thumbnail"
                            src={
                              "https://xenangbinhminh.net/wp-content/uploads/2020/12/ac-quy-axit-chi-tren-xe-nang-scaled.jpg"
                            }
                          ></img>
                        </div>
                      </div>
                    </div>

                    <div className="col col-right">
                      <div className="row product-top p-2">
                        <h2 className="title-head fw-bold">
                          Bình điện xe nâng hiệu GS YUASA | Thương hiệu ắc quy
                          xe nâng bền bỉ
                        </h2>
                        <div className="special-price">
                          <span className="price product-price">500.000₫</span>
                        </div>
                        <div classNameName="row row-list-info">
                          <p></p>
                          <p>
                            • Model: GS YUASA
                            <br></br>• Nhà sản xuất: GS Yuasa
                            <br></br>• Cung cấp sỉ và lẻ ắc quy xe nâng GS •
                            Yuasa, Thương Hiệu Nhật, Nhâp khẩu Thái Lan. Các
                            model thông dụng và lý do tại sao nên chọn ắcquy GS
                            Yuasa.
                          </p>
                        </div>
                        <div classNameName="row">
                          <div className="custom custom-btn-numbers form-control">
                            <button
                              onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN(qty) &amp; qty > 1 ) result.value--;return false;"
                              className="btn-minus btn-cts"
                              type="button"
                              fdprocessedid="7owbdo"
                            >
                              –
                            </button>
                            <input
                              type="text"
                              className="qty input-text"
                              id="qty"
                              name="quantity"
                              size="4"
                              value="1"
                              maxlength="3"
                              fdprocessedid="qk2qso"
                            ></input>

                            <button
                              //   onclick={var result = document.getElementById("qty");
                              //   var qty = result.value;
                              //   if (!isNaN(qty)) result.value++;
                              // return false;}
                              className="btn-plus "
                              type="button"
                              fdprocessedid="bf5dri"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div class="row btn-mua pt-4">
                          <div className="col ">
                            <button
                              type="submit"
                              data-role="addtocart"
                              className="btn  btn-lg btn-gray btn-cart btn_buy add_to_cart"
                              fdprocessedid="md1dc7"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 576 512"
                              >
                                <path
                                  fill="white"
                                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                                />
                              </svg>
                              <span class="txt-main ">ĐẶT THUÊ</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col align-items-center">
                  <div className="card-zalo align-items-center bg-white">
                    <div className="row p-3 justify-content-center text-center">
                      <h4 className="fs-5 fw-bold text-uppercase text-primary">
                        customer support
                      </h4>
                      <span>Request a callback</span>
                      <div className="input-phone p-2">
                        <input
                          type="phone"
                          className="form-control"
                          width="90"
                          placeholder="Enter your phone"
                        ></input>
                      </div>
                      <div className="input-phone p-2">
                        <button className="btn btn-primary">Contact us</button>
                      </div>
                      <div className="row justify-content-between">
                        <div className="col text-start">
                          <span className="text-primary fw-bold">
                            Chat zalo
                          </span>
                        </div>
                        <div className="col text-end">
                          <span className="fw-bold">0903 079 135</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row  text-center mt-4 mb-4 bg-white">
                <div className="row row-title ">
                  <h2>Mô tả</h2>
                </div>
                <div className="row row-if text-start">
                  <div className="col col-lg-6 col-md-12 col-sm-12 col-left">
                    <h2></h2>
                    <span>
                      <p>
                        Bình điện xe nâng được cấu tạo từ các tấm chì dạng hở
                        nằm trong môi trường axit sunfuric và có dạng cấu trúc
                        hình phẳng, dẹp từ khung lưới và thêm các hạt hóa chất.
                      </p>
                    </span>
                  </div>
                  <div className="col col-bottom-right">
                    <h2></h2>
                    <span>
                      <p>
                        Bình điện xe nâng đóng vai trò vô cùng quan trọng trong
                        hệ thống nhiên liệu của động cơ thiết bị. Chúng được ví
                        như một chiếc bơm máu đi nuôi dưỡng và cung cấp năng
                        lượng cho các cơ quan, mọi bộ phận của xe để có thể vận
                        hành.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default DetailedProduct;
