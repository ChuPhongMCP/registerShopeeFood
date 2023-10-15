import React from "react";
import { Link } from "react-router-dom";

import { LOCATIONS } from "constants/index";

function BtnRegister() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
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
    </>
  );
}

export default BtnRegister;
