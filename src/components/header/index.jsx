import React, { memo } from "react";
import { Link } from "react-router-dom";

import { LOCATIONS } from "constants/index";
import "./header.css";

function Header(props) {
  return (
    <div className="nav_">
      <nav className="navbar navbar-expand-sm bg-night navbar-night">
        <div className="container-fluid">
          <Link
            className="navbar-brand mt-1 mb-1 nav_logo"
            to={LOCATIONS.HOME}
          >
            <img
              src={require("assets/logo/logo.png")}
              width={"160px"}
              height={"30px"}
              alt="a"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="nav_menu">
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link nav_link"
                    to="https://shopeefood.vn/da-nang/food"
                  >
                    Đồ ăn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link nav_link"
                    to="https://shopeefood.vn/da-nang/fresh"
                  >
                    Thực phẩm
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link nav_link"
                    to="https://shopeefood.vn/da-nang/liquor"
                  >
                    Bia
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link nav_link"
                    to="https://shopeefood.vn/da-nang/flowers"
                  >
                    Hoa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link nav_link"
                    to="https://shopeefood.vn/da-nang/fmcg"
                  >
                    Siêu Thị
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link nav_link"
                    to="https://shopeefood.vn/da-nang/pets"
                  >
                    Thú cưng
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default memo(Header);
