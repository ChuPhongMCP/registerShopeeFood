import React, { memo } from "react";

import "./footer.css";
import Location from "components/icon/location";
import Mobile from "components/icon/mobile";
import Email from "components/icon/email";

function Footer() {
  return (
    <div className="cover_footer">
      <div className="card1">
        <div className="opacity_logo">
          <img
            className="img_admin_footer"
            src={require("assets/footer/anhFooter.jpg")}
            alt="..."
          />
        </div>

        <div className="cover_logo_footer">
          <img
            className="logo_footer"
            src={require("assets/logo/logoFooter.png")}
            width={"60px"}
            height={"60px"}
            alt="..."
          />
        </div>

        <span className="admin_name">Trần Viết Xuân</span>

        <span className="admin_des">Chuyên viên phát triển kinh doanh</span>

        <hr className="footerHr" />

        <div className="cover_admin_add">
          <div className="cover_location">
            <Location />
          </div>

          <div className="cover_admin_add_des">
            <span className="admin_add">9th Floor, VietNam Post Tower,</span>

            <span className="admin_add">
              271 Nguyen Van Linh, Thanh Khe District, Da Nang
            </span>
          </div>
        </div>

        <div className="cover_admin_phonenumber">
          <Mobile />
          <span className="admin_phonenumber">(+84) 936 422 013</span>
        </div>

        <div className="cover_admin_email">
          <Email />
          <span className="admin_email">vietxuan.tran@foody.vn</span>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
