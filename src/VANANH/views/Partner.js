import React from "react";
import { Link } from "react-router-dom";
import iweb from "../assets/images/partner/iweb.png";
import hoaphat from "../assets/images/partner/hoa-phat.png";
import rekey from "../assets/images/partner/rekey.png";
import bachkhoa from "../assets/images/partner/back-khoa.png";
import antam from "../assets/images/partner/an-tam.png";
import vinaco from "../assets/images/partner/vinav.png";
import "../styles/Partner.scss";
const Partner = () => {
  return (
    <>
      <section className="partner pb-3 pt-3">
        <div className="container">
          <div className="row row-container">
            <div className="col col-container">
              <div className="row row-top-partner text-center">
                <div className="col col-xl-12 col-md-12 col-sm-12 col-title text-center">
                  <h3 className="title-top">ĐỐI TÁC CỦA VÂN ANH</h3>
                  <p className="partner-span">
                    Peel To Reveal: Four Reasons To Consider A Professional Peel
                    Treatment For Your Skin If you love coming to Eyebrow Ink
                    Styling for our popular brow styling and permanent
                  </p>
                </div>
              </div>

              <div className="row row-body-partner justify-content-center ">
                <div className="col pt-2 align-items-center  col-xxl-auto col-xl-4 col-lg-4 col-md-4 col-xs-12 text-center col-img  ">
                  <Link to={"/"} className="">
                    <img src={iweb} alt=""></img>
                  </Link>
                </div>
                <div className="col pt-2 align-items-center col-xxl-auto col-xl-4 col-lg-4 col-md-4 col-xs-12 text-center uto col-img ">
                  <Link to={"/"}>
                    <img src={bachkhoa} alt=""></img>
                  </Link>
                </div>{" "}
                <div className="col pt-2 align-items-center col-xxl-auto col-xl-4 col-lg-4 col-md-4 col-xs-12 text-center  col-img ">
                  <Link to={"/"}>
                    <img src={rekey} alt=""></img>
                  </Link>
                </div>
                <div className="col pt-2 align-items-center col-xxl-auto col-xl-4 col-lg-4 col-md-4 col-xs-12 text-center  col-img ">
                  <Link to={"/"}>
                    <img src={hoaphat} alt=""></img>
                  </Link>
                </div>
                <div className="col pt-2 align-items-center col-xxl-auto col-xl-4 col-lg-4 col-md-4 col-xs-12 text-center  col-img ">
                  <Link to={"/"}>
                    <img src={antam} alt=""></img>
                  </Link>
                </div>
                <div className="col pt-2 align-items-center col-xxl-auto col-xl-4 col-lg-4 col-md-4 col-xs-12 text-center  col-img ">
                  <Link to={"/"}>
                    <img src={vinaco} alt=""></img>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
