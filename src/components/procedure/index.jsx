import React from "react";

function Procedure() {
  return (
    <>
      <div className="cover_thutuc">
        <div className="thutuc_title">
          CÁC GIẤY TỜ CẦN THIẾT <br /> KHI KÝ HỢP ĐỒNG LÀM ĐỐI TÁC SHOPEEFOOD
        </div>

        <div className="dangky_decorection">
          <img src={require("assets/decorection/decorection2.PNG")} alt="..." />
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
                    <li>Giấy ủy quyền cho người đại diện ký thay (bản gốc)</li>
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
                      Giấy ủy quyền cho người đại diện ký thay (bản gốc), người
                      được ủy quyền ký phải nhận ủy quyền từ Công Ty Tổng
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
    </>
  );
}

export default Procedure;
