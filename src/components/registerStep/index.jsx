import React from "react";

import { ReactComponent as LogoBuoc1 } from "assets/dangky/b1.svg";
import { ReactComponent as LogoBuoc2 } from "assets/dangky/b2.svg";
import { ReactComponent as LogoBuoc3 } from "assets/dangky/b3.svg";

function RegisterStep() {
  return (
    <>
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
    </>
  );
}

export default RegisterStep;
