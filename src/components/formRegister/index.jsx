import React, { useCallback, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ReactComponent as Logo5Ngay } from "assets/dangky/5ngay.svg";

import Loading from "components/svg/loading";
import Cancle from "components/svg/cancle";

function FormRegister(props) {
  const [isHaveReponsive, setIsHaveReponsive] = useState(true);

  const [isShowResult, setIsShowResult] = useState(false);

  const [isValidated, setIsValidated] = useState(true);

  const [isHaveError, setIsHaveError] = useState(false);

  const form = useRef();

  const sendEmail = async () => {
    // e.preventDefault();

    if (!isValidated) {
      return (
        alert("Bạn chưa xác thực reCAPTCHA")
      );
    }

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
          setIsHaveError(false);
          setIsHaveReponsive(true);
          setIsShowResult(true);
        },
        (error) => {
          console.log(error.text);
          setIsHaveError(true);
          setIsHaveReponsive(true);
          setIsShowResult(true);
        }
      );
  };

  const validation = useFormik({
    initialValues: {
      user_email: "",
      phone_number: "",
    },

    validationSchema: Yup.object({
      user_email: Yup.string()
        .test("email type", "Email không đúng định dạng", (value) => {
          const emailRegex = /^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

          return emailRegex.test(value);
        })
        .required("Vui lòng nhập Email!"),
      phone_number: Yup.string()
        .test("phone type", "Số điện thoại không hợp lệ", (value) => {
          const phoneRegex =
            /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

          return phoneRegex.test(value);
        })
        .required("Vui lòng nhập số điện thoại!"),
    }),

    onSubmit: (values) => {
      sendEmail();
    },
  });

  const onClickButtonSubmit = useCallback(
    (e) => {
      e.preventDefault();

      validation.handleSubmit();
    },
    [validation]
  );

  const isErrorInfo = (fieldName) => {
    if (validation.errors[fieldName] && validation.touched[fieldName]) {
      return true;
    }
    return false;
  };

  function onChangeCaptcha(value) {
    if (value !== null) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }

  const handleClickCancle = useCallback(() => {
    setIsShowResult(false);
  }, []);

  return (
    <>
      {!isHaveReponsive && (
        <div className="loadingContainer">
          <Loading />
        </div>
      )}

      <div
        className={
          isShowResult ? "background_result" : "hide_background_result"
        }
      >
        <div className={isShowResult ? "cover_result" : "hide_cover_result"}>
          <div onClick={handleClickCancle} className="cover_cancle">
            <Cancle />
          </div>

          <span className="result_title">Thông Báo</span>
          {isHaveError ? (
            <span className="result_content">
              Đăng ký thất bại! <br />
              Hệ thống đang bị lỗi <br />
              Xin vui lòng thử lại sau!
            </span>
          ) : (
            <span className="result_content">
              Đăng ký thành công! <br />
              Vui lòng chờ bộ phần kinh doanh liên lạc lại <br />
              Xin cám ơn!
            </span>
          )}
        </div>
      </div>

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
            <form ref={form} onSubmit={onClickButtonSubmit}>
              <div className="row">
                <div className="mb-3 input_div">
                  <input
                    name="store_name"
                    type="text"
                    className="form-control"
                    id="store_name"
                    placeholder="Tên nhà hàng/quán ăn"
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="mb-3 input_div">
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Địa chỉ"
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="mb-3 input_div">
                  <input
                    name="location"
                    type="text"
                    className="form-control"
                    id="location"
                    placeholder="Định vị quán (nếu có)"
                    autoComplete="off"
                  />
                </div>

                <div className="mb-3 input_div">
                  <input
                    name="open_time"
                    type="text"
                    className="form-control"
                    id="open_time"
                    placeholder="Thời gian hoạt động của quán"
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="col-6 mb-3 input_div">
                  <input
                    name="phone_number"
                    type="text"
                    className={`form-control ${
                      isErrorInfo("phone_number") && "is-invalid"
                    }`}
                    id="phone_number"
                    placeholder="Số điện thoại"
                    required
                    autoComplete="off"
                    value={validation.values.phone_number}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                  />

                  {isErrorInfo("phone_number") && (
                    <div className="input_error">
                      {validation.errors.phone_number}
                    </div>
                  )}
                </div>

                <div className="col-6 mb-3 input_div">
                  <input
                    name="user_email"
                    type="email"
                    className={`form-control ${
                      isErrorInfo("user_email") && "is-invalid"
                    }`}
                    id="user_email"
                    placeholder="Email"
                    required
                    autoComplete="off"
                    value={validation.values.user_email}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                  />

                  {isErrorInfo("user_email") && (
                    <div className="input_error">
                      {validation.errors.user_email}
                    </div>
                  )}
                </div>

                <div className="mb-3 input_div">
                  <input
                    name="bank_num"
                    type="text"
                    className="form-control"
                    id="bank_num"
                    placeholder="Số tài khoản"
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="col-6 mb-3 input_div">
                  <input
                    name="bank_name"
                    type="text"
                    className="form-control"
                    id="bank_name"
                    placeholder="Ngân hàng"
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="col-6 mb-3 input_div">
                  <input
                    name="bank_user"
                    type="text"
                    className="form-control"
                    id="bank_user"
                    placeholder="Chủ tài khoản"
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="mb-3 input_div">
                  <input
                    name="identifier_num"
                    type="text"
                    className="form-control"
                    id="identifier_num"
                    placeholder="Số CMND/CCCD"
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="col-6 mb-3 input_div">
                  <input
                    name="identifier_day"
                    type="text"
                    className="form-control "
                    id="identifier_day"
                    placeholder="Ngày cấp"
                    required
                    autoComplete="off"
                  />
                </div>

                <div className="col-6 mb-3 input_div">
                  <input
                    name="identifier_location"
                    type="text"
                    className="form-control"
                    id="identifier_location"
                    placeholder="Nơi cấp"
                    required
                    autoComplete="off"
                  />
                </div>

                <div
                  className="cover_captcha"
                  style={{ transform: "scale(0.85)", transformOrigin: "0 0" }}
                >
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_SITE_KEY}
                    onChange={onChangeCaptcha}
                  />
                </div>

                <div className="cover_btn_dangky_form">
                  <button
                    type="submit"
                    className={`btn btn-danger ${
                      isValidated
                        ? "btn_dangky_form"
                        : "btn_dangky_form_disable"
                    }`}
                  >
                    ĐĂNG KÝ
                  </button>

                  {/* <button
                      type="submit"
                      className="btn btn-danger btn_dangky_form"
                    >
                      ĐĂNG KÝ
                    </button> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4"></div>
      </div>
    </>
  );
}

export default FormRegister;
