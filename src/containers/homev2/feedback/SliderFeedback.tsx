import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { HOME2_IMAGE } from "@/src/utils";

const data = [
  {
    id: 1,
    name: "Uyên (Content Marketing - Báo VN)",
    gender: 0,
    content1: `Mặc dù hợp tác với số lượng lớn đối tác tuy nhiên dichvuPBN chưa bao giờ trễ hẹn. Luôn hoàn thành đúng những gì đã được ghi trong hợp đồng.`,
    content2: `Kết quả mà khách hàng nhận được không chỉ dừng lại ở KPI mà hơn thế nữa là về doanh thu, thương hiệu,...trên 1 nền tảng chất lượng nhất.`,
    image: HOME2_IMAGE.FEEDBACK.UYEN,
  },
  {
    id: 2,
    name: "Hoàng Minh (Admin - Phật Phong Thủy)",
    gender: 1,
    content1:
      "Không những có trình độ mà thái độ của các nhân viên ở đây cũng rất tốt. Tư vấn nhiệt tình, hỗ trợ hết mình. Luôn cố gắp đáp ứng những yêu cầu của khách hàng nhanh nhất có thể.",
    content2:
      "DichvuPBN có ban cố vấn là những chuyên gia đầu ngành đến từ các nước như Singapore, HongKong và Việt Nam. Với nhiều kinh nghiệm ố vấn chiến lược, triển khai, tối đa hóa vận hành qua nhiều website ở các chủ đề, lĩnh vực  khác nhau.",
    image: HOME2_IMAGE.FEEDBACK.HOANG_MINH,
  },
  {
    id: 3,
    name: "Phương Nhi (Admin - Thế Giới Nội Y)",
    gender: 0,
    content1:
      "Hợp đồng là thứ liên kết giữa dichvuPBN với khách hàng. Chính vì vậy chúng luôn thực hiện tốt những gì đã cam kết trong hợp đồng, có kế hoạch chi tiết, rõ ràng.",
    content2:
      "Hợp đồng được trình bày theo giai đoạn để khách hàng nắm rõ được công khai, rõ ràng tính pháp lý. Đây cũng là một trong những yếu tố để nhiều doanh nghiệp lớn đã và đang hợp tác với dichvupbn lâu dài.",
    image: HOME2_IMAGE.FEEDBACK.PHUONG_NHI,
  },
  {
    id: 4,
    name: "Phương Nhi (Admin - Thế Giới Nội Y)",
    gender: 0,
    content1:
      "Với kinh nghiệm làm việc lâu năm, chúng tôi luôn tự tin mang đến gói dịch vụ chất lượng với mức giá phải chăng, lấy uy tín làm kim chi nam phát triển. Do vậy, bạn có thể hoàn toàn yên tâm khi sử dụng dịch vụ của chúng tôi.",
    content2:
      "Trên đây là toàn bộ nội dung bài viết về dịch vụ PBN, mong rằng những thông tin từ bài viết sẽ giúp anh em có được cái nhìn tổng quát và định hướng cho dịch vụ kinh doanh của mình.",
    image: HOME2_IMAGE.FEEDBACK.PHUONG_NHI,
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
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                    />
                  </div>
                  <p className="content mt-4">{item.content1}</p>
                  <p className="content">{item.content1}</p>

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
