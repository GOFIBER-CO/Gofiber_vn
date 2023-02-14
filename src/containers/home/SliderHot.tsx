import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import { Pagination } from "swiper";
import { HOME_IMAGE } from "@/src/utils";

const data = [
  {
    id: 1,
    title: "Cloud VPS",
    content:
      "Toàn bộ 100% các dịch vụ máy chủ và VPS của GOFIBER đều sử dụng ổ cứng chuẩn SSD tốc độ truy xuất dữ liệu cao.",
    image: HOME_IMAGE.HOT.CLOUD_VPS,
  },
  {
    id: 2,
    title: "SEO Hosting",
    content:
      "GOFIBER mang đến giải pháp SEO chuyên nghiệp, giúp cải thiện thứ hạng Google dễ dàng hơn với hệ thống website vệ tinh có IP riêng biệt.",
    image: HOME_IMAGE.HOT.SEO,
  },
  {
    id: 3,
    title: "Firewall Anti DDOS",
    content:
      "Công nghệ và giải pháp độc quyền giúp hạn chế tấn công DDOS và các website được lưu trữ trên hệ thống máy chủ và VPS của GOFIBER.",
    image: HOME_IMAGE.HOT.FIREWALL,
  },
  {
    id: 4,
    title: "Miễn phí SSL",
    content:
      "GOFIBER hỗ trợ các khách hàng sử dụng VPS khởi tạo các chứng chỉ SSL tiêu chuẩn với mức phía 0đ.",
    image: HOME_IMAGE.HOT.SSL,
  },
  {
    id: 5,
    title: "VPS",
    content:
      "VPS và máy chủ có GPU hiệu năng cao có khả năng xử lý đa luồng nhanh và hiệu quả vượt trội.",
    image: HOME_IMAGE.HOT.VPS,
  },
];

const responsive = [
  {
    id: 1,
    class: "show-for-small",
    slidesPerView: 1,
  },
  {
    id: 2,
    class: "show-for-medium hide-for-small ",
    slidesPerView: 2,
  },
  {
    id: 3,
    class: "hide-for-medium",
    slidesPerView: 4,
  },
];

function SliderHot() {
  return (
    <div id="slider-hot">
      {responsive.map((item) => (
        <div className={item.class} key={item.id}>
          <Swiper
            slidesPerView={item.slidesPerView}
            spaceBetween={5}
            centeredSlides
            pagination={{
              clickable: true,
            }}
            scrollbar={{ draggable: true }}
            loop
            modules={[Pagination]}
            className="mySwiper has-custom-pagination"
            autoplay
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="hot-item">
                  <div className="wrapper_image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}

export default SliderHot;
