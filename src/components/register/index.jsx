import React, { memo, useRef, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

import { ReactComponent as Logo5Ngay } from "assets/dangky/5ngay.svg";
import { ReactComponent as LogoBuoc1 } from "assets/dangky/b1.svg";
import { ReactComponent as LogoBuoc2 } from "assets/dangky/b2.svg";
import { ReactComponent as LogoBuoc3 } from "assets/dangky/b3.svg";

function Register(props) {
  // const [isValidated, setIsValidated] = useState(false);

  const [isHaveReponsive, setIsHaveReponsive] = useState(true);

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsHaveReponsive(false);

    await emailjs
      .sendForm(
        process.env.REACT_APP_ADMIN_SEND_MAIL_SERVICE_ID,
        process.env.REACT_APP_ADMIN_SEND_MAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_ADMIN_SEND_MAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);

          console.log("message sent");

          window.location.reload();

          alert(
            "Đăng ký thành công! Vui lòng chờ bộ phận kinh doanh liên lạc lại. Cảm ơn bạn!"
          );

          setIsHaveReponsive(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // function onChangeCaptcha(value) {
  //   if (value !== null) {
  //     setIsValidated(true);
  //   } else {
  //     setIsValidated(false);
  //   }
  // }

  return (
    <>
      {!isHaveReponsive && (
        <div className="loadingContainer">
          <div className="loadingIcon"></div>
        </div>
      )}

      <div className="cover_content">
        <div className="dangky_title">TRỞ THÀNH QUÁN ĐỐI TÁC SHOPEEFOOD</div>

        <div className="dangky_decorection">
          <img src={require("assets/decorection/decorection1.PNG")} alt="..." />
        </div>

        <div className="dangKy_DKTrucTuyen">ĐĂNG KÝ TRỰC TUYẾN</div>

        <div className="dangky_logo5Ngay">
          <Logo5Ngay width={"235.38px"} height={"72px"} />
        </div>
        <div className="row form_dang_ky">
          <div className="cover_background_form">
            <img
              className="background_form"
              src={require("assets/banner/backgroundForm.jpg")}
              alt="..."
            />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"></div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="cover_form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="mb-3 input_div">
                    <input
                      name="store_name"
                      type="text"
                      className="form-control"
                      id="1"
                      placeholder="Tên nhà hàng/quán ăn"
                      required
                    />
                  </div>

                  <div className="mb-3 input_div">
                    <input
                      name="address"
                      type="text"
                      className="form-control"
                      id="1"
                      placeholder="Địa chỉ"
                      required
                    />
                  </div>

                  <div className="mb-3 input_div">
                    <input
                      name="location"
                      type="text"
                      className="form-control"
                      id="1"
                      placeholder="Định vị quán (nếu có)"
                    />
                  </div>

                  <div className="mb-3 input_div">
                    <input
                      name="open_time"
                      type="text"
                      className="form-control"
                      id="1"
                      placeholder="Thời gian hoạt động của quán"
                      required
                    />
                  </div>

                  <div className="col-6 mb-3 input_div">
                    <input
                      name="phone_number"
                      type="text"
                      className="form-control "
                      id="1"
                      placeholder="Số điện thoại"
                      required
                    />
                  </div>

                  <div className="col-6 mb-3 input_div">
                    <input
                      name="user_email"
                      type="email"
                      className="form-control"
                      id="1"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="mb-3 input_div">
                    <input
                      name="bank_num"
                      type="text"
                      className="form-control"
                      id="1"
                      placeholder="Số tài khoản"
                      required
                    />
                  </div>

                  <div className="col-6 mb-3 input_div">
                    <input
                      name="bank_name"
                      type="text"
                      className="form-control"
                      id="1"
                      placeholder="Ngân hàng"
                      required
                    />
                  </div>

                  <div className="col-6 mb-3 input_div">
                    <input
                      name="bank_user"
                      type="text"
                      className="form-control"
                      id="1"
                      placeholder="Chủ tài khoản"
                      required
                    />
                  </div>

                  <div className="mb-3 input_div">
                    <input
                      name="identifier_num"
                      type="text"
                      className="form-control"
                      id="1"
                      placeholder="Số CMND/CCCD"
                      required
                    />
                  </div>

                  <div className="col-6 mb-3 input_div">
                    <input
                      name="identifier_day"
                      type="text"
                      className="form-control "
                      id="1"
                      placeholder="Ngày cấp"
                      required
                    />
                  </div>

                  <div className="col-6 mb-3 input_div">
                    <input
                      name="identifier_location"
                      type="text"
                      className="form-control"
                      id="1"
                      placeholder="Nơi cấp"
                      required
                    />
                  </div>

                  {/* <div
                  className="cover_captcha"
                  style={{ transform: "scale(0.85)", transformOrigin: "0 0" }}
                >
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_SITE_KEY}
                    onChange={onChangeCaptcha}
                  />
                </div> */}

                  <div className="cover_btn_dangky_form">
                    {/* <button
                    type="submit"
                    className={`btn btn-danger ${
                      isValidated
                        ? "btn_dangky_form"
                        : "btn_dangky_form_disable"
                    }`}
                  >
                    ĐĂNG KÝ
                  </button> */}
                    <button
                      type="submit"
                      className="btn btn-danger btn_dangky_form"
                    >
                      ĐĂNG KÝ
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"></div>
        </div>

        <div className="dangKy_cacBuoc">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 dangKy_cacBuoc_buoc">
                <div className="dangKy_cacBuoc_logo">
                  <LogoBuoc1 width={"158.34px"} height={"120px"} />
                </div>

                <div className="cover_dangky_des">
                  <span className="cover_dangky_des_title">
                    Cung Cấp Thông Tin Của Quán
                  </span>

                  <span className="cover_dangky_des_des">
                    Chủ động cung cấp các thông tin chi tiết của Quán bằng cách
                    điền thông tin vào Form bên trên.
                  </span>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 dangKy_cacBuoc_buoc">
                <div className="dangKy_cacBuoc_logo">
                  <LogoBuoc2 width={"189.33"} height={"120px"} />
                </div>

                <div className="cover_dangky_des">
                  <span className="cover_dangky_des_title">Ký Hợp Đồng</span>

                  <span className="cover_dangky_des_des">
                    ShopeeFood sẽ liên hệ với Quán để lên lịch hẹn tới văn phòng
                    của ShopeeFood và ký hợp đồng đối tác.
                  </span>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 dangKy_cacBuoc_buoc">
                <div className="dangKy_cacBuoc_logo">
                  <LogoBuoc3 width={"181.33"} height={"120px"} />
                </div>

                <div className="cover_dangky_des">
                  <span className="cover_dangky_des_title">
                    Bắt Đầu Kinh Doanh Trên ShopeeFood
                  </span>

                  <span className="cover_dangky_des_des">
                    Đăng nhập ứng dụng Shopee Partner và bắt đầu kinh doanh trên
                    ShopeeFood.
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

export default memo(Register);
