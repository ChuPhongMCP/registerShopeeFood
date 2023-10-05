import React, { memo, useCallback, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

import { ReactComponent as Logo5Ngay } from "assets/dangky/5ngay.svg";
import { ReactComponent as LogoBuoc1 } from "assets/dangky/b1.svg";
import { ReactComponent as LogoBuoc2 } from "assets/dangky/b2.svg";
import { ReactComponent as LogoBuoc3 } from "assets/dangky/b3.svg";
import { LOCATIONS } from "constants/index";

import "./contents.css";

function Contents(props) {
  const { items } = props;

  const [questions, setQuestions] = useState(items);

  const [isHaveReponsive, setIsHaveReponsive] = useState(true);

  const [isValidated, setIsValidated] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Ngăn hành vi mặc định của phím Enter
    }
  };

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

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
          console.log(result.text);

          console.log("message sent");
          
          alert(
            "Đăng ký thành công! Vui lòng chờ bộ phận kinh doanh liên lạc lại. Cảm ơn bạn!"
            );
            
            window.location.reload();

          setIsHaveReponsive(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  function onChangeCaptcha(value) {
    if (value !== null) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }

  const toggle_frame_question = useCallback(
    (event, index) => {
      event.stopPropagation();
      const updatedQuestions = [...questions];
      updatedQuestions[index].isExtend = !updatedQuestions[index].isExtend;
      setQuestions(updatedQuestions);
    },
    [questions]
  );

  return (
    <div onKeyDown={handleKeyDown}>
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
                      autoComplete="off"
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
                      autoComplete="off"
                    />
                  </div>

                  <div className="mb-3 input_div">
                    <input
                      name="location"
                      type="text"
                      className="form-control"
                      id="1"
                      placeholder="Định vị quán (nếu có)"
                      autoComplete="off"
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
                      autoComplete="off"
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
                      autoComplete="off"
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
                      autoComplete="off"
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
                      autoComplete="off"
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
                      autoComplete="off"
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
                      autoComplete="off"
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
                      autoComplete="off"
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
                      autoComplete="off"
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

        <div className="cover_btn_dangky">
          <Link
            to={LOCATIONS.REGISTER}
            className="link_to_reg"
            onClick={handleClick}
          >
            <button className="btn btn-danger btn_dangky">
              <span className="btn_dangky_content">ĐĂNG KÝ TRÊN WEB</span>

              <span className="btn_dangky_des">TẢI ỨNG DỤNG PARTNER SAU</span>
            </button>
          </Link>

          <span className="btn_dangky_contact">
            Mọi thắc mắc cần giải đáp, bạn vui lòng liên hệ ShopeeFood qua email
            vietxuan.tran@foody.vn nhé.
          </span>
        </div>

        <div className="cover_thutuc">
          <div className="thutuc_title">
            CÁC GIẤY TỜ CẦN THIẾT <br /> KHI KÝ HỢP ĐỒNG LÀM ĐỐI TÁC SHOPEEFOOD
          </div>

          <div className="dangky_decorection">
            <img
              src={require("assets/decorection/decorection2.PNG")}
              alt="..."
            />
          </div>

          <div className="thutuc_cacbuoc">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 thutuc_cacBuoc_buoc">
                  <div className="thutuc_cacBuoc_logo">
                    <img
                      src={require("assets/thutuc/b1.png")}
                      alt="..."
                      width={"118px"}
                      height={"125px"}
                    />
                  </div>

                  <div className="thutuc_dangky_des">
                    <div className="thutuc_cacBuoc_img_muiten">
                      <img
                        src={require("assets/thutuc/cacBuoc.png")}
                        alt="..."
                        width={"100%"}
                        height={"97px"}
                      />
                    </div>

                    <span className="cover_thutuc_des_title">
                      Đối với hợp đồng ký với tư cách pháp nhân là Cá Nhân, Hộ
                      Kinh Doanh
                    </span>

                    <ul className="cover_dangky_des_des">
                      <li>CMND/CCCD/Hộ chiếu (bản gốc)</li>
                      <li>Giấy Đăng ký Hộ kinh doanh cá thể (nếu có)</li>
                      <li>Thực đơn Quán</li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 thutuc_cacBuoc_buoc">
                  <div className="thutuc_cacBuoc_logo">
                    <img
                      src={require("assets/thutuc/b2.png")}
                      alt="..."
                      width={"134.54px"}
                      height={"125px"}
                    />
                  </div>

                  <div className="thutuc_dangky_des">
                    <div className="thutuc_cacBuoc_img_muiten">
                      <img
                        src={require("assets/thutuc/cacBuoc.png")}
                        alt="..."
                        width={"100%"}
                        height={"97px"}
                      />
                    </div>

                    <span className="cover_thutuc_des_title">
                      Đối với hợp đồng ký với tư cách pháp nhân là Công Ty
                    </span>

                    <ul className="cover_dangky_des_des">
                      <li>Giấy Phép Đăng Ký Kinh Doanh (bản gốc)</li>
                      <li>
                        Giấy ủy quyền cho người đại diện ký thay (bản gốc)
                      </li>
                      <li>CMND/CCCD/Hộ chiếu người đại diện (bản gốc)</li>
                      <li>Thực đơn Quán</li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 thutuc_cacBuoc_buoc">
                  <div className="thutuc_cacBuoc_logo">
                    <img
                      src={require("assets/thutuc/b3.png")}
                      alt="..."
                      width={"193.75px"}
                      height={"125px"}
                    />
                  </div>

                  <div className="thutuc_dangky_des">
                    <div className="thutuc_cacBuoc_img_muiten">
                      <img
                        src={require("assets/thutuc/cacBuoc.png")}
                        alt="..."
                        width={"100%"}
                        height={"97px"}
                      />
                    </div>

                    <span className="cover_thutuc_des_title">
                      Đối với hợp đồng ký với tư cách pháp nhân là Công Ty Chi
                      Nhánh
                    </span>

                    <ul className="cover_dangky_des_des">
                      <li>
                        Giấy Phép Đăng Ký Kinh Doanh Công Ty Chi Nhánh (bản gốc)
                      </li>
                      <li>
                        Giấy ủy quyền cho người đại diện ký thay (bản gốc),
                        người được ủy quyền ký phải nhận ủy quyền từ Công Ty
                        Tổng
                      </li>
                      <li>CMND/CCCD/Hộ chiếu người đại diện (bản gốc)</li>
                      <li>Thực đơn Quán</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cover_doitac">
          <div className="thutuc_title">ĐỐI TÁC NÓI GÌ VỀ SHOPEEFOOD?</div>

          <div className="dangky_decorection">
            <img
              src={require("assets/decorection/decorection1.PNG")}
              alt="..."
            />
          </div>

          <div className="row doitac_cacbuoc">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="row doitac_des">
                <div className="col-4">
                  <div className="cover_img_doitac">
                    <img
                      className="img_doitac"
                      src={require("assets/doitac/doitac1.jpg")}
                      alt="..."
                    />
                  </div>
                </div>

                <div className="col-8 cover_des_doitac">
                  <img
                    className="img_doitac_daunhay"
                    src={require("assets/doitac/daunhay.png")}
                    width={"27px"}
                    height={"21px"}
                    alt="..."
                  />

                  <span className="des_doitac_title">THE CUPS COFFEE</span>

                  <span className="des_doitac">- Đà Nẵng</span>

                  <span className="des_doitac">
                    - Trước đây, phần lớn doanh thu của chúng tôi đến từ khách
                    hàng thưởng thức tại quán, thì nay hình thức đặt hàng trực
                    tuyến đã đóng góp hơn 70% doanh thu và hỗ trợ duy trì phát
                    triển kinh doanh ổn định. Trong đó, ShopeeFood vẫn luôn đóng
                    vai trò quan trọng hơn hết.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="row doitac_des">
                <div className="col-4">
                  <div className="cover_img_doitac">
                    <img
                      className="img_doitac"
                      src={require("assets/doitac/doitac2.jpg")}
                      alt="..."
                    />
                  </div>
                </div>

                <div className="col-8 cover_des_doitac">
                  <img
                    className="img_doitac_daunhay"
                    src={require("assets/doitac/daunhay.png")}
                    width={"27px"}
                    height={"21px"}
                    alt="..."
                  />

                  <span className="des_doitac_title">BÁNH MÌ MINH NHẬT</span>

                  <span className="des_doitac">- Hà Nội</span>

                  <span className="des_doitac">
                    - Nhờ có ShopeeFood, việc đảm bảo kinh doanh và vận hành
                    trong thời kỳ dịch bệnh diễn biến phức tạp không còn là nỗi
                    lo cho những người làm nghề như chúng tôi. Doanh thu chúng
                    tôi nhận được từ việc giao nhận thức ăn qua ShopeeFood giữ
                    mức tăng trưởng hiện tại hơn 20% và lượng đơn hàng tăng gần
                    30% so với trước Tết.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="row doitac_des">
                <div className="col-4">
                  <div className="cover_img_doitac">
                    <img
                      className="img_doitac"
                      src={require("assets/doitac/doitac3.jpg")}
                      alt="..."
                    />
                  </div>
                </div>

                <div className="col-8 cover_des_doitac">
                  <img
                    className="img_doitac_daunhay"
                    src={require("assets/doitac/daunhay.png")}
                    width={"27px"}
                    height={"21px"}
                    alt="..."
                  />

                  <span className="des_doitac_title">LONG KEE CHA</span>

                  <span className="des_doitac">- TP. Hồ Chí Minh</span>

                  <span className="des_doitac">
                    - Là một startup mới trong ngành dịch vụ ăn uống tại thời
                    điểm bất lợi như hiện nay, việc phối hợp cùng dịch vụ đặt
                    thức ăn trực tuyến và giao nhận như ShopeeFood giúp chúng
                    tôi tiếp cận nguồn khách hàng ẩm thực tiềm năng tại thành
                    phố HCM một cách nhanh chóng…, kết quả thể hiện rõ rệt ở mức
                    tăng trưởng hơn 30% doanh thu so với thời điểm chúng tôi chỉ
                    tập trung bán tại Quán.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cover_cauhoi">
          <div className="cauhoi_title">CÂU HỎI THƯỜNG GẶP</div>

          <div className="cauhoi_decorection">
            <img
              src={require("assets/decorection/decorection2.PNG")}
              alt="..."
            />
          </div>

          <div className="hang_cauhoi">
            <div className="container">
              <div className="row">
                {questions.map((item, index) => {
                  return (
                    <div
                      key={item.num}
                      className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
                    >
                      <div className="cover_noidung_cauhoi">
                        <div className="cover_cauhoi_traloi">
                          <span
                            className={
                              item.isExtend ? "cauhoi_extend" : "cauhoi"
                            }
                          >
                            {item.title}
                          </span>

                          <span
                            className={
                              item.isExtend ? "traloi_extend" : "traloi"
                            }
                          >
                            {item.content}
                          </span>
                        </div>

                        <div className="cover_toggle_icon">
                          <img
                            src={require("assets/cauhoi/toggle_icon.png")}
                            onClick={(event) =>
                              toggle_frame_question(event, index)
                            }
                            className={
                              item.isExtend
                                ? "img_toggle_icon_isExtend"
                                : "img_toggle_icon"
                            }
                            width={"25px"}
                            height={"25px"}
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Contents);
