import { Link } from "react-router-dom";
import "../styles/Introduce.scss";
import v from "../assets/svg/introduce/v.svg";
import xexuc from "../assets/images/introduce/xe-xuc.png";
import i_gt from "../assets/svg/introduce/i-gt.svg";
const Introduce = () => {
  return (
    <>
      <section className="introduce mt-5">
        <div className="container">
          <div className="row row-introduce mt-5">
            <div className="col col-introduce-left col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-xs-12 ">
              <div className="row align-items-center justify-content-center">
                <div className="col-in-left">
                  <b>
                    <img
                      className=""
                      alt=" "
                      src={i_gt}
                      style={{ bottom: "0" }}
                    ></img>
                    về chúng tôi
                  </b>
                  <span className="title-all ">
                    CÔNG TY TNHH KỸ THUẬT VÂN ANH
                    <span
                      className="text-uppercase fw-bold d-flex fs-5"
                      style={{ color: "#575757" }}
                    >
                      CHO THUÊ ẮC-QUY XE NÂNG
                    </span>
                  </span>

                  <span className="introduce-comments">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here.
                  </span>
                  <div className="row row-list-body">
                    <div className="col col-left col-md-6 col-lg-4 col-xl-4 col-xxl-6">
                      <div className=" list">
                        <img className="" src={v}></img>
                        <span>Tiêu chuẩn chất lượng tốt nhất</span>
                      </div>
                      <div className=" list">
                        <img className="" src={v}></img>
                        <span>Đảm bảo hài lòng 100%</span>
                      </div>
                      <div className=" list">
                        <img className="" src={v}></img>
                        <span>Hệ thống kiểm soát chất lượng</span>
                      </div>
                    </div>
                    <div className="col col-right">
                      <div className=" list">
                        <img className="" src={v}></img>
                        <span>Tiêu chuẩn chất lượng tốt nhất</span>
                      </div>
                      <div className=" list">
                        <img className="" src={v}></img>
                        <span>Đảm bảo hài lòng 100%</span>
                      </div>
                      <div className=" list">
                        <img className="" src={v}></img>
                        <span>Hệ thống kiểm soát chất lượng</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-button-introduce mt-3">
                <div className="col col-auto">
                  <div className="button-introduce">
                    <Link to={"/dichvu"}>
                      <img src={""} alt="" className=""></img>
                      <span>XEM THÊM</span>
                    </Link>
                  </div>
                </div>
                <div className="col col-auto">
                  <div className="button-introduce-contact ">
                    <Link to={"/lienhe"}>LIÊN HỆ NGAY</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col introduce-left col-xs-3 text-center ">
              <img className="img-car" src={xexuc} alt="" />
              <div className="square"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduce;
