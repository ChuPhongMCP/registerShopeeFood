import React, { memo } from "react";
import { Link } from "react-router-dom";

import "./banner.css";

function Banner() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide slide1"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={3}
          aria-label="Slide 4"
        />
      </div>
      <div className="carousel-inner cover_slide_img">
        <div className="carousel-item active slide_img">
          <img
            src={require("assets/banner/banner1.jpg")}
            className="d-block w-100 img_inSlide"
            alt="..."
          />
          <div className="slide_content">
            <span className="slide_content_title">
              ĐỘI NGŨ GIAO HÀNG CHUYÊN NGHIỆP
            </span>
            <span className="slide_content_des">
              Đội ngũ Tài xế giao hàng chuyên nghiệp với quy mô lớn và được đào
              tạo bài bản với đầy đủ kỹ năng, văn hóa ứng xử khi giao hàng
            </span>
            <button className="btn btn-danger btn_dangky">
              <span className="btn_dangky_content">ĐĂNG KÝ TRÊN WEB</span>
              <span className="btn_dangky_des">TẢI ỨNG DỤNG PARTNER SAU</span>
            </button>
          </div>
        </div>
        <div className="carousel-item slide_img">
          <img
            src={require("assets/banner/banner2.jpg")}
            className="d-block w-100 img_inSlide"
            alt="..."
          />
          <div className="slide_content">
            <span className="slide_content_title">
              GIẢI PHÁP CÔNG NGHỆ TỐI ƯU
            </span>
            <span className="slide_content_des">
              Giải pháp công nghệ giúp Quán tối ưu trong vận hành và phát triển
              kinh doanh
            </span>
            <button className="btn btn-danger btn_dangky">
              <span className="btn_dangky_content">ĐĂNG KÝ TRÊN WEB</span>
              <span className="btn_dangky_des">TẢI ỨNG DỤNG PARTNER SAU</span>
            </button>
          </div>
        </div>
        <div className="carousel-item slide_img">
          <img
            src={require("assets/banner/banner3.jpg")}
            className="d-block w-100 img_inSlide"
            alt="..."
          />
          <div className="slide_content">
            <span className="slide_content_title">
              KHỞI ĐỘNG VỚI GÓI TĂNG TRƯỞNG DOANH THU
            </span>
            <span className="slide_content_des">
              Cơ hội tham gia gói Tăng trưởng doanh thu cho Quán mới với nhiều
              quyền lợi hấp dẫn & giúp tăng doanh số hiệu quả.
            </span>
            <button className="btn btn-danger btn_dangky">
              <span className="btn_dangky_content">ĐĂNG KÝ TRÊN WEB</span>
              <span className="btn_dangky_des">TẢI ỨNG DỤNG PARTNER SAU</span>
            </button>
          </div>
        </div>
        <div className="carousel-item slide_img">
          <img
            src={require("assets/banner/banner4.jpg")}
            className="d-block w-100 img_inSlide"
            alt="..."
          />
          <div className="slide_content">
            <span className="slide_content_title">
              TIẾP CẬN HÀNG TRIỆU KHÁCH HÀNG
            </span>
            <span className="slide_content_des">
              ShopeeFood giúp Quán tận dụng mạng lưới các kênh truyền thông kết
              nối hàng triệu người dùng trong hệ sinh thái Foody, Shopee và
              ShopeePay
            </span>
            <button className="btn btn-danger btn_dangky">
              <span className="btn_dangky_content">ĐĂNG KÝ TRÊN WEB</span>
              <span className="btn_dangky_des">TẢI ỨNG DỤNG PARTNER SAU</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Banner);
