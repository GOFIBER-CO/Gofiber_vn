import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { HOME2_IMAGE } from "@/src/utils";

const data = [
  {
    id: 1,
    name: "Uyên (Content Marketing - Báo Việt Nam)",
    gender: 0,
    content1: `Tôi đã từng sử dụng dịch vụ hosting tại rất nhiều đơn vị. Tuy nhiên, GoFiber là đơn vị duy 
    nhất tôi cảm thấy hài lòng. Sản phẩm hosting đáp ứng được nhu cầu công việc của tôi. 
    Kèm theo đó chính là dịch vụ chăm sóc khách hàng vô cùng tuyệt vời. Chắc chắn tôi sẽ tiếp tục lựa chọn Gofiber làm người bạn đồng hành trong tương lai.`,
    content2: `Kết quả mà khách hàng nhận được không chỉ dừng lại ở KPI mà hơn thế nữa là về doanh thu, thương hiệu,...trên 1 nền tảng chất lượng nhất.`,
    image: HOME2_IMAGE.FEEDBACK.UYEN,
  },
  {
    id: 2,
    name: "Hoàng Minh (Admin - Phật Phong Thủy)",
    gender: 1,
    content1:
      "Dịch vụ VPS, server tại Gofiber thực sự khiến tôi hài lòng và an tâm. Đặc biệt, đội ngũ chăm sóc khách hàng tận tình khiến tôi hoàn toàn tin tưởng và lựa chọn dịch vụ tại đây.",
    content2:
      "DichvuPBN có ban cố vấn là những chuyên gia đầu ngành đến từ các nước như Singapore, HongKong và Việt Nam. Với nhiều kinh nghiệm ố vấn chiến lược, triển khai, tối đa hóa vận hành qua nhiều website ở các chủ đề, lĩnh vực  khác nhau.",
    image: HOME2_IMAGE.FEEDBACK.HOANG_MINH,
  },
  {
    id: 3,
    name: "Phương Nhi (Admin tại Thế Giới Nội Y)",
    gender: 0,
    content1:
      "Tôi cảm thấy an tâm khi làm việc với đơn vị bởi vì chất lượng tốt, phản hồi nhanh và có nhiều chương trình khuyến mãi dành cho khách hàng. Nhất định tôi sẽ đồng hành với Gofiber trong thời gian dài.",
    content2:
      "Hợp đồng được trình bày theo giai đoạn để khách hàng nắm rõ được công khai, rõ ràng tính pháp lý. Đây cũng là một trong những yếu tố để nhiều doanh nghiệp lớn đã và đang hợp tác với dichvupbn lâu dài.",
    image: HOME2_IMAGE.FEEDBACK.PHUONG_NHI,
  },
  {
    id: 4,
    name: "Sơn Tùng (SEO Leader - Trường Việt Nam)",
    gender: 1,
    content1:
      "Khi sử dụng dịch vụ hosting tại Gofiber tôi thấy mức giá vô cùng rẻ mà tốc độ load website nhanh. Đặc biệt có nhiều chương trình khuyến mãi, sự kiện hấp dẫn dành cho khách hàng. Tôi thực sự tin tưởng vào đơn vị để thực hiện các dự án SEO quan trọng.",
    content2:
      "Trên đây là toàn bộ nội dung bài viết về dịch vụ PBN, mong rằng những thông tin từ bài viết sẽ giúp anh em có được cái nhìn tổng quát và định hướng cho dịch vụ kinh doanh của mình.",
    image: HOME2_IMAGE.FEEDBACK.SON_TUNG,
  },
];

const responsive = [
  {
    id: 1,
    class: "show-for-small",
    slideClass: "custom-pagination",
    slidesPerView: 1,
  },
  {
    id: 2,
    class: "show-for-medium hide-for-small",
    slideClass: "hide-pagination",
    slidesPerView: 2,
  },
  {
    id: 3,
    class: "hide-for-medium",
    slideClass: "hide-pagination",
    slidesPerView: 4,
  },
];

function SliderFeedback() {
  return (
    <div id="slider-feedback">
      {responsive.map((item) => (
        <div className={item.class} key={item.id}>
          <Swiper
            slidesPerView={item.slidesPerView}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            scrollbar={{ draggable: true }}
            loop
            modules={[Pagination]}
            className={`mySwiper ${item.slideClass}`}
            autoplay
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="feedback-item">
                  <div className="img">
                    <img
                      style={{
                        borderRadius: "100%",
                        border: "1px solid #5708CD",
                      }}
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                    />
                  </div>
                  <p className="content mt-4">{item.content1}</p>

                  <p>
                    {item.gender === 0 ? "Chị" : "Anh"}{" "}
                    <strong>{item.name}</strong>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}

export default SliderFeedback;
