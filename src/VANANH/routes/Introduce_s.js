import React, { Component } from "react";
import "./styles/Contact_s.scss";
import "./styles/Introduce_s.scss";
import i_br from "../assets/images/slider/bg-slider.png";

import xexuc from "../assets/images/introduce/xe-xuc.png";

function Introduce_s() {
  //   axios
  //     .get("http://localhost:8081/")
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <div className="introduce_s  pb-5">
        <div className="row row-top-bg align-items-center">
          <div
            className="col Contact position-absolute text-center fw-bold fs-1"
            style={{ color: "white" }}
          >
            GIỚI THIỆU
          </div>
          <img className="" src={i_br} alt=""></img>
        </div>
        <div className="container">
          <div className="row row-container">
            <div className="row row-top-introduce_s pt-5">
              <div className="col col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-xs-12 col-left-introduce_s ">
                <h2>Giới thiệu</h2>
                <b></b>
                <p></p>
                <strong>
                  Công Ty TNHH Kỹ Thuật Vân Anh có mã số thuế 0315648475, do
                  ông/bà Nguyễn Hải Vân làm đại diện pháp luật, được cấp giấy
                  chứng nhận đăng ký kinh doanh ngày 25/04/2019. Công ty có
                  ngành nghề kinh doanh chính là "Bán buôn máy móc, thiết bị và
                  phụ tùng máy khác.", do Chi cục Thuế Quận 9 quản lý. Địa chỉ
                  trụ sở: Số 51 Hẻm 245 Đường Hoàng Hữu Nam, Khu phố 5, Phường
                  Tân Phú, Quận 9, TP Hồ Chí Minh.
                </strong>
                <p></p>
                <span>
                  Địa chỉ: Số 51 Hẻm 245 Đường Hoàng Hữu Nam, Khu phố 5, Phường
                  Tân Phú, Quận 9, Thành phố Hồ Chí Minh <br></br>Đại diện pháp
                  luật: Nguyễn Hải Vân <br></br>Ngày cấp giấy phép: 25/04/2019
                  <br></br>Ngày hoạt động: 25/04/2019 (Đã hoạt động 4 năm)
                  <br></br>Trạng thái: Đang hoạt động Nguồn:
                  https://www.tratencongty.com/company/4bf37d1b-cong-ty-tnhh-ky-thuat-van-anh/#ixzz8Ft1GZRBR
                </span>
              </div>
              <div className="col col-right text-center">
                <img className="img-fluid" alt="" src={xexuc}></img>
              </div>
            </div>

            <div
              className="row row-body-introduce_s pt-5 pb-5"
              style={{ backgroundColor: "#f8f8f8" }}
            >
              <div className="row text-center">
                <h2 className="text-uppercase">SỰ MỆNH VÀ TẦM NHÌN</h2>
              </div>
              <div className="row">
                <div className="col col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12 text-center">
                  <div className="icons">
                    <svg
                      enable-background="new 72.6 109.443 492.845 308.594"
                      height="200"
                      viewBox="72.6 109.443 492.845 308.594"
                      width="80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="#F18320">
                        <path d="m318.856 418.037c-62.346-.363-117.07-21.97-165.938-59.753-31.25-24.161-57.118-53.373-79.74-85.593-3.631-5.173-4.212-10.58-.577-15.828 35.063-50.608 77.272-93.661 133.579-120.331 87.92-41.644 173.351-34.654 255.325 16.697 42.464 26.601 75.6 62.898 103.993 103.767 3.302 4.749 3.149 9.98-.053 14.564-40.512 57.99-90.313 104.822-157.68 130.297-29.149 11.024-58.233 16.134-88.909 16.18zm218.126-154.149c-3.287-4.373-6.211-8.424-9.298-12.345-31.453-39.954-68.492-73.165-115.479-93.899-67.14-29.631-133.57-27.102-198.879 5.888-34.817 17.586-64.027 42.407-89.542 71.666-8.053 9.233-15.445 19.043-23.064 28.496 30.937 42.501 67.222 77.74 113.713 101.301 53.153 26.938 108.663 33.271 166.232 16.938 42.552-12.074 78.756-35.207 110.686-65.38 16.864-15.939 31.92-33.463 45.631-52.665z"></path>
                        <path d="m232.018 263.853c.028-47.981 39.129-86.903 87.236-86.835 47.426.065 86.691 39.515 86.664 87.063-.028 47.697-39.522 86.94-87.393 86.838-47.666-.104-86.535-39.223-86.507-87.066zm146.658.221c.104-32.265-27.069-59.593-59.477-59.815-32.228-.22-59.599 26.883-59.939 59.351-.34 32.348 27.236 60.082 59.725 60.066 32.313-.017 59.586-27.247 59.691-59.602z"></path>
                        <path d="m359.695 263.427c-.086 7.763-5.722 13.862-13.173 14.261-7.069.376-13.232-5.071-14.269-12.611-1.429-10.405-4.043-13.043-14.254-14.384-7.581-.996-13.046-7.051-12.762-14.14.299-7.428 6.387-13.163 14.129-13.313 20.812-.401 40.563 19.281 40.329 40.187z"></path>
                      </g>
                    </svg>
                  </div>
                  <h3>Tầm nhìn</h3>
                  <span>
                    Trở thành nhà cung cấp dịch vụ vệ sinh công nghiệp chuyên
                    nghiệp hàng đầu tại Việt Nam, cung cấp những dịch vụ và giải
                    pháp chuyên nghiệp nhằm tạo ra môi trường sống và làm việc
                    trong lành, xanh tươi hơn.
                  </span>
                </div>
                <div className="col col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12 text-center">
                  <div className="icons-introduce_s">
                    <svg
                      enable-background="new 87.669 86.226 350.509 383.606"
                      height="200"
                      viewBox="87.669 86.226 350.509 383.606"
                      width="80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="#F18320">
                        <path d="m438.178 214.211c-.26 23.881-6.786 42.071-16.364 59.292-1.872 3.367-1.745 5.789.072 9.09 9.582 17.405 16.314 35.717 16.172 55.946-.201 28.479-13.227 49.26-38.183 62.568-16.527 8.814-34.533 11.806-53.024 12.166-4.135.081-6.531 1.433-8.673 5.037-8.673 14.597-19.393 27.488-33.354 37.395-26.452 18.771-56.82 18.83-83.364.213-14.313-10.039-25.119-23.271-34.03-38.107-1.849-3.079-3.797-4.425-7.421-4.477-13.54-.194-26.875-1.945-39.791-6.255-41.079-13.699-60.65-49.013-49.419-90.838 3.161-11.771 8.701-22.939 13.61-34.185 1.351-3.096 1.572-5.218-.083-8.192-8.654-15.556-14.861-31.969-16.227-49.908-2.828-37.162 18.533-63.201 49.404-74.115 12.996-4.595 26.403-6.934 40.131-7.017 5.237-.031 8.271-1.782 10.99-6.402 7.741-13.154 17.559-24.67 29.717-34.063 28.292-21.856 62.711-21.479 90.604.971 12.229 9.843 21.911 21.849 29.865 35.274 1.636 2.763 3.404 3.854 6.683 3.942 19.133.529 37.843 3.327 54.951 12.595 24.932 13.503 37.398 34.592 37.734 59.07zm-259.256 107.195c.287 2.61 1.927 5.77 3.966 7.382 23.377 18.498 48.993 33.221 76.699 44.223 2.042.811 4.98.753 7.037-.068 27.839-11.121 53.57-25.966 77.065-44.594 1.705-1.353 2.999-3.986 3.327-6.196 4.375-29.512 4.279-59.063-.006-88.571-.316-2.184-1.774-4.73-3.502-6.101-23.365-18.521-48.967-33.257-76.648-44.312-2.196-.877-5.332-.985-7.499-.121-27.837 11.116-53.585 25.933-77.066 44.584-1.619 1.286-3.074 3.682-3.282 5.696-3.68 18.005-3.013 69.672-.091 88.078zm31.389 90.765c14.236 19.159 29.476 36.104 55.28 34.727 23.155-1.234 37.102-17.045 50.034-34.86-1.859-.515-2.921-.867-4.011-1.101-9.257-1.979-18.946-2.813-27.682-6.15-14.19-5.425-27.472-5.444-41.711-.059-9.805 3.709-20.566 4.9-31.91 7.443zm105.551-268.062c-13.707-18.5-28.066-34.863-52.38-35.075-24.789-.215-39.448 16.28-53.084 34.701 1.348.56 2.055.965 2.814 1.153 15.627 3.854 31.247 7.74 46.909 11.449 1.951.462 4.235.347 6.189-.171 10.598-2.797 21.098-5.963 31.714-8.674 5.564-1.419 11.298-2.167 17.838-3.383zm-195.311 156.591c-11.277 19.721-14.167 46.403-2.951 63.91 11.36 17.731 40.241 26.499 55.204 25.046.021-.325.13-.676.046-.971-4.597-16.105-9.19-32.212-13.861-48.296-.354-1.217-1.053-2.481-1.942-3.372-12.087-12.098-24.235-24.135-36.496-36.317zm284.944-1.27c-7.346 8.071-13.231 16.433-20.906 22.549-13.031 10.385-20.198 23.114-22.821 39.477-1.549 9.666-5.678 18.921-8.874 29.081 22.022-2.171 42.757-6.544 55.345-26.318 13.722-21.561 6.679-43.035-2.744-64.789zm-51.913-133.931c4.457 16.379 8.565 31.912 12.989 47.355.811 2.829 2.451 5.704 4.462 7.857 10.424 11.183 21.088 22.14 31.681 33.163.741.772 1.581 1.451 2.835 2.593 9.35-21.675 16.41-43.147 2.692-64.709-12.584-19.779-33.317-24.148-54.659-26.259zm-181.105.523c-26.147.317-49.752 12.45-58.119 31.542-6.854 15.639-3.116 48.121 6.579 57.855 9.821-10.128 19.311-20.621 29.607-30.25 5.452-5.099 8.763-10.392 10.421-17.789 3.11-13.869 7.558-27.442 11.512-41.358zm125.035 4.261c.039.398.078.797.116 1.195 13.509 7.777 27.019 15.557 41.931 24.143-3.91-10.097-7.231-18.896-10.804-27.596-.407-.994-2.304-2.134-3.345-1.993-9.32 1.263-18.603 2.797-27.898 4.251zm-67.58 215.157c-14.911-8.606-28.458-16.428-43.536-25.132 3.957 10.183 7.347 19.087 10.948 27.904.36.882 2.091 1.874 3.037 1.742 9.468-1.312 18.905-2.85 29.551-4.514zm-43.493-189.792c14.996-8.658 28.542-16.479 43.546-25.144-10.89-1.659-20.492-3.175-30.123-4.493-.773-.105-2.198.942-2.532 1.772-3.562 8.842-6.965 17.746-10.891 27.865zm109.624 189.807c10.662 1.683 19.961 3.194 29.281 4.55.927.134 2.622-.438 2.901-1.118 3.728-9.075 7.266-18.229 11.331-28.586-15.04 8.693-28.504 16.476-43.513 25.154zm77.565-131.319c-.384.221-.77.44-1.153.662v46.619c6.986-6.838 12.939-14.159 18.672-21.649.624-.816.5-3.017-.17-3.885-5.665-7.339-11.539-14.52-17.349-21.747zm-220.094.709c-.363-.249-.727-.498-1.09-.747-5.893 7.333-11.882 14.594-17.553 22.094-.689.914-.208 3.527.648 4.659 4.308 5.693 8.885 11.188 13.447 16.686 1.257 1.515 2.789 2.798 4.547 4.535.001-16.403.001-31.815.001-47.227z"></path>
                        <path d="m263.168 248.235c6.098-8.459 13.629-13.485 23.647-14.069 13.31-.774 23.99 4.225 30.769 15.698 7.024 11.893 6.431 24.433-.56 36.078-3.268 5.444-8.02 10.247-12.878 14.438-12.099 10.438-24.663 20.337-36.997 30.504-2.723 2.245-5.333 2.484-8.09.22-12.993-10.676-26.04-21.287-38.958-32.053-10.812-9.008-17.235-20.133-16.249-34.753.893-13.19 9.523-24.452 22.169-28.615 12.89-4.244 25.608-.774 34.352 9.368.748.867 1.509 1.72 2.795 3.184z"></path>
                      </g>
                    </svg>
                  </div>
                  <h3>Sứ mệnh</h3>
                  <span>
                    Cung cấp dịch vụ làm sạch, mang đến cho khách hàng một môi
                    trường/ không gian sạch sẽ, đảm bảo sức khoẻ: không còn bụi
                    và vết bẩn, không còn mùi hôi, không còn vi khuẩn gây bệnh.
                    <br></br>Giúp duy trì và gia tăng tuổi thọ tài sản cho khách
                    hàng.
                    <br></br>Góp phần tạo nên giá trị thương hiệu cho khách
                    hàng.
                  </span>
                </div>
                <div className="col col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12 text-center">
                  <div className="icons-introduce_s">
                    <svg
                      enable-background="new 49.769 35.592 227.337 227.316"
                      height="200"
                      viewBox="49.769 35.592 227.337 227.316"
                      width="80"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="#F18320">
                        <path d="m255.903 101.44-10.522 10.522c6.238 12.933 9.405 26.831 9.405 41.351 0 52.615-42.806 95.421-95.422 95.421s-95.422-42.806-95.422-95.421c0-52.616 42.806-95.423 95.422-95.423 14.533 0 28.441 3.172 41.382 9.42l10.521-10.521c-.666-.359-1.325-.73-1.998-1.075-15.539-7.96-32.33-11.997-49.905-11.997-60.431 0-109.595 49.164-109.595 109.596s49.164 109.596 109.595 109.596 109.595-49.164 109.595-109.596c0-17.562-4.029-34.34-11.979-49.87-.346-.675-.718-1.336-1.077-2.003z"></path>
                        <path d="m196.234 146.403c-.287-1.539-.693-3.035-1.165-4.505l-12.396 12.397c-.017.408-.044.813-.082 1.218-1.112 11.837-11.103 21.131-23.227 21.131-12.866 0-23.333-10.466-23.333-23.331 0-12.124 9.296-22.113 21.135-23.227.418-.039.84-.066 1.266-.083l12.384-12.384c-1.466-.474-2.96-.881-4.496-1.168-2.279-.429-4.619-.646-6.954-.646-2.737 0-5.404.303-7.976.862-16.861 3.667-29.53 18.7-29.53 36.645 0 20.681 16.825 37.505 37.506 37.505 17.922 0 32.94-12.639 36.63-29.468.568-2.591.876-5.278.876-8.037-.002-2.319-.216-4.644-.638-6.909z"></path>
                        <path d="m228.256 129.087c-1.563-4.452-3.554-8.757-5.965-12.842-.192-.328-.396-.649-.596-.975l-10.381 10.381c2.501 4.692 4.345 9.702 5.493 14.885.925 4.174 1.405 8.457 1.405 12.775 0 32.449-26.399 58.85-58.85 58.85-32.449 0-58.849-26.399-58.849-58.85s26.399-58.851 58.849-58.851c4.33 0 8.627.481 12.816 1.414 5.181 1.151 10.192 2.993 14.881 5.496l10.376-10.377c-.538-.329-1.077-.657-1.625-.974-3.889-2.243-7.974-4.104-12.191-5.588-7.754-2.726-15.961-4.146-24.257-4.146-40.265 0-73.022 32.759-73.022 73.023 0 40.266 32.758 73.022 73.022 73.022s73.022-32.758 73.022-73.022c.002-8.287-1.41-16.479-4.128-24.221z"></path>
                        <path d="m277.106 59.634-21.833-2.854-2.209-21.188-37.344 37.343-.047 13.891.018.018-61.344 61.462c-2.766 2.771-2.762 7.257.009 10.022 1.384 1.381 3.194 2.07 5.006 2.07 1.816 0 3.632-.692 5.016-2.08l61.351-61.468 14.16.003z"></path>
                      </g>
                    </svg>
                  </div>
                  <h3>Giá trị cốt lõi</h3>
                  <span>
                    Tinh thần Phải – Làm – Được: Đừng nói “không thể”, hãy đưa
                    ra “giải pháp“.<br></br>
                    Đoàn kết – Chuyên nghiệp: Đoàn kết và chuyên nghiệp là sức
                    mạnh của IFREE, hãy góp phần tăng cao sức mạnh này.<br></br>
                    Sống nghiêm túc – Làm việc vui vẻ: Tuân thủ các chuẩn mực và
                    tận hưởng niềm hứng khởi trong công việc.
                  </span>
                </div>
              </div>
            </div>

            <div className="row row-body pt-5 text-center">
              <h3 className="title">CÔNG TY TNHH KỸ THUẬT VÂN ANH</h3>
              <p>
                Công ty Nội Thất Hà Tĩnh tự hào là một trong số ít đơn vị chuyên
                nghiệp và đầy đủ năng lực trong lĩnh vực thiết kế và sản xuất
                nội thất tại thị trường TP Hồ Chí Minh. Với kinh nghiệm hoạt
                động từ năm 2013 đến nay, Nội Thất Hà Tĩnh đã kiến tạo lên nhiều
                không gian sống và làm việc đẹp, tiện nghi, và độc đáo cho khách
                hàng của mình.
              </p>
              <div className="img">
                <img
                  src="https://vantaivananh.com.vn/thumbs/1366x640x1/upload/photo/0905-311-115-0975-117-799-0906-161-106-9229.png"
                  alt=""
                  className="img-fluid"
                ></img>
                <div className="row text-start">
                  <p className=" fw-bold">Dịch vụ công ty nội thất Hà Tĩnh</p>
                  <p>
                    <span className="fw-bold ">
                      Công ty TNHH kỹ thuật Vân Anh
                    </span>{" "}
                    chuyên thiết kế và thi công trọn gói nội thất chung cư căn
                    hộ, văn phòng, nhà phố, biệt thự, nhà hàng và quán cafe,
                    khách sạn, khu nghỉ dưỡng, không giang trưng bày bán
                    hàng,...
                  </p>
                  <p className="fw-bold">
                    Điểm khác biệt tạo nên niềm tin và uy tín từ kỹ thuật Vân
                    Anh
                  </p>
                  <p>
                    Với tâm thế luôn giữ vững tinh thần và sự tỉnh táo như những
                    ngày đầu sáng lập lên công ty, trải qua thời gian dài đánh
                    dốc cột mốc 10 năm{" "}
                    <span className="fw-bold">
                      Công ty TNHH kỹ thuật Vân Anh
                    </span>{" "}
                    đã có được sự tin tưởng mạnh mẽ từ phía khách hàng thông qua
                    các sự tín nhiệm quan trọng để xây dựng lên uy tín.
                  </p>
                  <p className="fw-bold">Tầm nhìn công ty</p>
                  <p>
                    Chúng tôi đã luôn đặt chất lượng sản phẩm và dịch vụ lên
                    hàng đầu, đảm bảo rằng mọi sản phẩm mà chúng tôi tạo ra đều
                    đáp ứng hoặc vượt qua mong đợi của khách hàng.
                  </p>
                  <p>
                    Sự tận tâm, tôn trọng và đạo đức kinh doanh là những nguyên
                    tắc quan trọng trong mối quan hệ với khách hàng, giúp chúng
                    tôi xây dựng mối liên kết vững chắc và lòng tin từ khách
                    hàng trong suốt thời gian qua.
                  </p>
                  <p>
                    <span className="fw-bold">
                      Công ty TNHH kỹ thuật Vân Anh
                    </span>{" "}
                    có xưởng sản xuất sản phẩm nội thất trực tiếp
                  </p>
                  <p>
                    <span className="fw-bold">Kỹ thuật Vân Anh </span>có xưởng
                    sản xuất nội thất trực tiếp là điểm mạnh quan trọng giúp
                    chúng tôi luôn đứng vững và phát triển trong lĩnh vực thiết
                    kế nội thất. Điều này cho phép chúng tôi không chỉ đáp ứng,
                    mà còn vượt qua các yêu cầu và mong đợi của khách hàng.
                  </p>
                  <p>
                    Khả năng tùy chỉnh sản phẩm theo yêu cầu cụ thể của khách
                    hàng là điểm đặc biệt mà chúng tôi tự hào mang đến.
                  </p>
                  <p>
                    Chúng tôi có thể thực hiện từ những chi tiết nhỏ nhất cho
                    đến những dự án lớn và phức tạp.
                  </p>
                  <p className="fw-bold">Khác biệt từ đội ngũ</p>
                  <p>
                    Đội ngũ kiến trúc sư và thợ lành nghề là trái tim của công
                    ty chúng tôi trong lĩnh vực thiết kế và sản xuất nội thất.
                    Kiến thức chuyên môn và sự kỹ lưỡng của họ đóng vai trò quan
                    trọng trong việc tạo ra những sản phẩm nội thất đẳng cấp và
                    độc đáo cho khách hàng.
                  </p>
                  <p>
                    Tận tâm, sáng tạo, và khả năng sửa lỗi nhanh chóng là những
                    đặc điểm tạo nên đội ngũ kiến trúc sư và thợ lành nghề xuất
                    sắc của chúng tôi.
                  </p>
                  <img
                    src="https://vananhco.com/aboutus_images/2722/GT4.png"
                    alt=""
                    className=""
                    style={{ width: "1000px" }}
                  ></img>
                </div>
              </div>
            </div>

            <div
              className="row row-body-introduce_s mt-5 pt-5 "
              style={{ backgroundColor: "#f8f8f8" }}
            >
              <div className="row pt-4">
                <div className="col col-xl-4 col-md-6 col-sm-12 text-center">
                  <div className="icons pb-4">
                    <i aria-hidden="true" class="far fa-smile"></i>
                  </div>
                  <h3>Cam Kết Sự Hài Lòng</h3>
                  <span>
                    Chúng tôi luôn đặt sự hài lòng của Qúy khách lên hàng đầu.
                    <br></br>
                    Chúng tôi cam kết mang đến những sản phẩm và dịch vụ tốt
                    nhất với đội ngũ nhân viên Tận Tâm & Chuyên Nghiệp.
                  </span>
                </div>
                <div className="col col-xl-4 col-md-6 col-sm-12 text-center">
                  <div className="icons-introduce_s pb-4">
                    <i aria-hidden="true" class="far fa-money-bill-alt"></i>
                  </div>
                  <h3>Dịch Vụ Chuyên Nghiệp</h3>
                  <span>
                    Chúng tôi liên kết hầu hết các Ngân hàng tốt nhất tại Việt
                    Nam.<br></br>
                    Cung cấp cho khách hàng những giải pháp tài chính tốt nhất,
                    tiết kiệm tối đa chi phí & thời gian.
                  </span>
                </div>
                <div className="col col-xl-4 col-md-6 col-sm-12 text-center">
                  <div className="icons-introduce_s pb-4">
                    <i aria-hidden="true" class="far fa-star"></i>
                  </div>
                  <h3>Dịch Vụ Hàng Đầu Chuẩn Quốc Tế</h3>
                  <span>
                    Chúng tôi cung cấp cho khách hàng các dịch vụ hậu mãi tốt
                    nhất.<br></br>
                    Đội ngũ nhân viên giàu kinh nghiệm, chuyên môn cao cùng cơ
                    sở hạ tầng đạt tiêu chuẩn Quốc Tế.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Introduce_s;
