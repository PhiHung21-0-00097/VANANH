import React from "react";
import images1 from "../assets/images/news/img-a.png";
import images2 from "../assets/images/news/img-b.png";
import images3 from "../assets/images/news/img-c.png";
import chevron from "../assets/svg/news/chevron-right.svg";
import box from "../assets/svg/news/box-arow-down.svg";
import "../styles/News.scss";
import { Link } from "react-router-dom";

class News extends React.Component {
  render() {
    return (
      <>
        <section className="news pb-5">
          <div className="container">
            <div className="row row-container">
              <div className="row row-top-news mt-5 text-center   justify-content-center">
                <div className="col col-xl-12 col-md-12 col-sm-12 col-title text-center align-items-center  justify-content-center">
                  <h3 className="title-top">sự kiện mới nhất</h3>
                  <p className="partner-span">
                    Peel To Reveal: Four Reasons To Consider A Professional Peel
                    Treatment For Your Skin If you love coming to Eyebrow Ink
                    Styling for our popular brow styling and permanent
                  </p>
                </div>
              </div>

              <div className="row row-body-news justify-content-between">
                <div className="col col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-xm-12">
                  <div className="card">
                    <Link to={"/tintuc-chitiet"} className="div-a">
                      <img className="img-news" src={images1} alt=""></img>
                    </Link>
                    <div className="card-body">
                      <h2 className="card-title">
                        Ắc quy xe nâng loại nào tốt? Giá bình xe nâng điện mới
                        nhất 2023
                      </h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetu iscing tempor ut
                        labore magna aliqua. Quis ipsum suspendisse ultrices
                        gravida.
                      </p>
                      <div className="row">
                        <div className="col dang-tai">
                          <span>
                            {" "}
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="white"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_1_570)">
                                <path
                                  d="M1.76679 17.1267H15.7799C15.9863 17.1267 16.1844 17.0447 16.3304 16.8987C16.4764 16.7527 16.5584 16.5547 16.5584 16.3482V8.56318C16.5584 8.35671 16.4764 8.1587 16.3304 8.0127C16.1844 7.8667 15.9863 7.78468 15.7799 7.78468C15.5734 7.78468 15.3754 7.8667 15.2294 8.0127C15.0834 8.1587 15.0014 8.35671 15.0014 8.56318V15.5697H2.54529V3.11365H9.55183C9.75831 3.11365 9.95632 3.03163 10.1023 2.88563C10.2483 2.73963 10.3303 2.54162 10.3303 2.33515C10.3303 2.12867 10.2483 1.93066 10.1023 1.78466C9.95632 1.63866 9.75831 1.55664 9.55183 1.55664H1.76679C1.56031 1.55664 1.3623 1.63866 1.2163 1.78466C1.0703 1.93066 0.988281 2.12867 0.988281 2.33515V16.3482C0.988281 16.5547 1.0703 16.7527 1.2163 16.8987C1.3623 17.0447 1.56031 17.1267 1.76679 17.1267Z"
                                  fill="#8B8B8B"
                                />
                                <path
                                  d="M8.77734 6.48711V8.56339C8.77734 8.76986 8.85936 8.96787 9.00536 9.11387C9.15136 9.25987 9.34938 9.34189 9.55585 9.34189H11.6313C11.8378 9.34185 12.0358 9.2598 12.1817 9.11379L17.8913 3.40501C17.9637 3.33271 18.0211 3.24685 18.0603 3.15234C18.0995 3.05783 18.1196 2.95653 18.1196 2.85422C18.1196 2.75191 18.0995 2.65061 18.0603 2.5561C18.0211 2.46159 17.9637 2.37573 17.8913 2.30343L15.815 0.227936C15.669 0.0819886 15.4711 0 15.2646 0C15.0582 0 14.8602 0.0819886 14.7142 0.227936L9.00545 5.93671C8.85944 6.08268 8.77739 6.28066 8.77734 6.48711ZM10.3344 6.81019L15.2646 1.87914L16.2401 2.85461L11.309 7.78488H10.3344V6.81019Z"
                                  fill="#8B8B8B"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1_570">
                                  <rect
                                    width="18.6841"
                                    height="18.6841"
                                    fill="white"
                                    transform="translate(0.212891)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            Đăng tải 48 phút trước
                          </span>
                        </div>
                        <div className="col read d-flex align-items-center">
                          <div className="row">
                            <span>
                              TÌM HIỂU THÊM
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="20"
                                fill="white"
                                class="bi bi-chevron-right"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* <a className="read-more text-center">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-box-arrow-in-down-left"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                              />
                              <path
                                fill-rule="evenodd"
                                d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z"
                              />
                            </svg>
                            Đăng tải 48 phút trước
                          </span>
                          <span className="read">TÌM HIỂU THÊM</span>
                        </a> */}
                    </div>
                  </div>
                </div>

                <div className="col col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-xm-12">
                  <Link to={"/tintuc-chitiet"}>
                    <div className="card">
                      <img className="img-news" src={images2} alt=""></img>

                      <div className="card-body">
                        <h2 className="card-title">
                          Ắc quy xe nâng loại nào tốt? Giá bình xe nâng điện mới
                          nhất 2023
                        </h2>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetu iscing tempor
                          ut labore magna aliqua. Quis ipsum suspendisse
                          ultrices gravida.
                        </p>
                        <div className="row d-flex justify-content-between">
                          <div className="col dang-tai">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_1_570)">
                                  <path
                                    d="M1.76679 17.1267H15.7799C15.9863 17.1267 16.1844 17.0447 16.3304 16.8987C16.4764 16.7527 16.5584 16.5547 16.5584 16.3482V8.56318C16.5584 8.35671 16.4764 8.1587 16.3304 8.0127C16.1844 7.8667 15.9863 7.78468 15.7799 7.78468C15.5734 7.78468 15.3754 7.8667 15.2294 8.0127C15.0834 8.1587 15.0014 8.35671 15.0014 8.56318V15.5697H2.54529V3.11365H9.55183C9.75831 3.11365 9.95632 3.03163 10.1023 2.88563C10.2483 2.73963 10.3303 2.54162 10.3303 2.33515C10.3303 2.12867 10.2483 1.93066 10.1023 1.78466C9.95632 1.63866 9.75831 1.55664 9.55183 1.55664H1.76679C1.56031 1.55664 1.3623 1.63866 1.2163 1.78466C1.0703 1.93066 0.988281 2.12867 0.988281 2.33515V16.3482C0.988281 16.5547 1.0703 16.7527 1.2163 16.8987C1.3623 17.0447 1.56031 17.1267 1.76679 17.1267Z"
                                    fill="#8B8B8B"
                                  />
                                  <path
                                    d="M8.77734 6.48711V8.56339C8.77734 8.76986 8.85936 8.96787 9.00536 9.11387C9.15136 9.25987 9.34938 9.34189 9.55585 9.34189H11.6313C11.8378 9.34185 12.0358 9.2598 12.1817 9.11379L17.8913 3.40501C17.9637 3.33271 18.0211 3.24685 18.0603 3.15234C18.0995 3.05783 18.1196 2.95653 18.1196 2.85422C18.1196 2.75191 18.0995 2.65061 18.0603 2.5561C18.0211 2.46159 17.9637 2.37573 17.8913 2.30343L15.815 0.227936C15.669 0.0819886 15.4711 0 15.2646 0C15.0582 0 14.8602 0.0819886 14.7142 0.227936L9.00545 5.93671C8.85944 6.08268 8.77739 6.28066 8.77734 6.48711ZM10.3344 6.81019L15.2646 1.87914L16.2401 2.85461L11.309 7.78488H10.3344V6.81019Z"
                                    fill="#8B8B8B"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_570">
                                    <rect
                                      width="18.6841"
                                      height="18.6841"
                                      fill="white"
                                      transform="translate(0.212891)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Đăng tải 48 phút trước
                            </span>
                          </div>
                          <div className="col read d-flex align-items-center">
                            <div className="row">
                              <span className="">
                                TÌM HIỂU THÊM
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="20"
                                  fill="white"
                                  class="bi bi-chevron-right"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-xm-12">
                  <Link to={"/tintuc-chitiet"}>
                    <div className="card">
                      <img className="img-news" src={images3} alt=""></img>

                      <div className="card-body">
                        <h2 className="card-title">
                          Ắc quy xe nâng loại nào tốt? Giá bình xe nâng điện mới
                          nhất 2023
                        </h2>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetu iscing tempor
                          ut labore magna aliqua. Quis ipsum suspendisse
                          ultrices gravida.
                        </p>
                        <div className="row">
                          <div className="col dang-tai">
                            <span>
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="white"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_1_570)">
                                  <path
                                    d="M1.76679 17.1267H15.7799C15.9863 17.1267 16.1844 17.0447 16.3304 16.8987C16.4764 16.7527 16.5584 16.5547 16.5584 16.3482V8.56318C16.5584 8.35671 16.4764 8.1587 16.3304 8.0127C16.1844 7.8667 15.9863 7.78468 15.7799 7.78468C15.5734 7.78468 15.3754 7.8667 15.2294 8.0127C15.0834 8.1587 15.0014 8.35671 15.0014 8.56318V15.5697H2.54529V3.11365H9.55183C9.75831 3.11365 9.95632 3.03163 10.1023 2.88563C10.2483 2.73963 10.3303 2.54162 10.3303 2.33515C10.3303 2.12867 10.2483 1.93066 10.1023 1.78466C9.95632 1.63866 9.75831 1.55664 9.55183 1.55664H1.76679C1.56031 1.55664 1.3623 1.63866 1.2163 1.78466C1.0703 1.93066 0.988281 2.12867 0.988281 2.33515V16.3482C0.988281 16.5547 1.0703 16.7527 1.2163 16.8987C1.3623 17.0447 1.56031 17.1267 1.76679 17.1267Z"
                                    fill="#8B8B8B"
                                  />
                                  <path
                                    d="M8.77734 6.48711V8.56339C8.77734 8.76986 8.85936 8.96787 9.00536 9.11387C9.15136 9.25987 9.34938 9.34189 9.55585 9.34189H11.6313C11.8378 9.34185 12.0358 9.2598 12.1817 9.11379L17.8913 3.40501C17.9637 3.33271 18.0211 3.24685 18.0603 3.15234C18.0995 3.05783 18.1196 2.95653 18.1196 2.85422C18.1196 2.75191 18.0995 2.65061 18.0603 2.5561C18.0211 2.46159 17.9637 2.37573 17.8913 2.30343L15.815 0.227936C15.669 0.0819886 15.4711 0 15.2646 0C15.0582 0 14.8602 0.0819886 14.7142 0.227936L9.00545 5.93671C8.85944 6.08268 8.77739 6.28066 8.77734 6.48711ZM10.3344 6.81019L15.2646 1.87914L16.2401 2.85461L11.309 7.78488H10.3344V6.81019Z"
                                    fill="#8B8B8B"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_570">
                                    <rect
                                      width="18.6841"
                                      height="18.6841"
                                      fill="white"
                                      transform="translate(0.212891)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              Đăng tải 48 phút trước
                            </span>
                          </div>
                          <div className="col read d-flex align-items-center">
                            <div className="row ">
                              <span className="">
                                TÌM HIỂU THÊM
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="20"
                                  fill="white"
                                  class="bi bi-chevron-right"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default News;
