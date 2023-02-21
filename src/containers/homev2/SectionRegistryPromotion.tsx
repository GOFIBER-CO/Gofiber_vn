import TextIconButton from "@/src/components/button/TextIconButton";
import React from "react";

function SectionRegistryPromotion() {
  return (
    <section className="section-registry-promotion">
      <div className="container">
        <div className="wrapper-registry-promotion">
          <div data-aos="fade-up" className="row justify-content-center">
            <div className="col col-12 col-md-8 col-lg-6">
              <h5 className="h5 text-center title">
                Đăng ký nhận mã khuyến mãi và thông tin các chương trình ưu đãi
                mới nhất của GoFiber
              </h5>
              <div className="row mt-4">
                <div className="col col-12 col-md-8">
                  <input placeholder="Nhập email của bạn" />
                </div>
                <div className="col col-12 col-md-4 text-center mt-3 mt-md-0">
                  <TextIconButton
                    name="Gửi ngay"
                    color="white"
                    styles={{ boxShadow: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionRegistryPromotion;
