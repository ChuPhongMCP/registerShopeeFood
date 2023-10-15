import React from "react";

function PartnerComment() {
  return (
    <>
      <div className="cover_doitac">
        <div className="thutuc_title">ĐỐI TÁC NÓI GÌ VỀ SHOPEEFOOD?</div>

        <div className="dangky_decorection">
          <img src={require("assets/decorection/decorection1.PNG")} alt="..." />
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
                  - Nhờ có ShopeeFood, việc đảm bảo kinh doanh và vận hành trong
                  thời kỳ dịch bệnh diễn biến phức tạp không còn là nỗi lo cho
                  những người làm nghề như chúng tôi. Doanh thu chúng tôi nhận
                  được từ việc giao nhận thức ăn qua ShopeeFood giữ mức tăng
                  trưởng hiện tại hơn 20% và lượng đơn hàng tăng gần 30% so với
                  trước Tết.
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
                  - Là một startup mới trong ngành dịch vụ ăn uống tại thời điểm
                  bất lợi như hiện nay, việc phối hợp cùng dịch vụ đặt thức ăn
                  trực tuyến và giao nhận như ShopeeFood giúp chúng tôi tiếp cận
                  nguồn khách hàng ẩm thực tiềm năng tại thành phố HCM một cách
                  nhanh chóng…, kết quả thể hiện rõ rệt ở mức tăng trưởng hơn
                  30% doanh thu so với thời điểm chúng tôi chỉ tập trung bán tại
                  Quán.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerComment;
