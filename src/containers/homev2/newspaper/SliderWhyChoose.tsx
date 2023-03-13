import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { HOME2_IMAGE, HOME_IMAGE, ICON } from "@/src/utils";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const data = [
  {
    id: 1,
    title: "Gofiber cung cấp dịch vụ máy chủ giá thấp",
    content: `Theo báo cáo từ đơn vị, tính riêng 3 tháng cuối năm 2022 và 2 tháng đầu năm 2023, bộ phận bán hàng đã nhận được số lượng đơn hàng kỷ lục dành cho các dịch vụ cho thuê VPS, đặc biệt là VPS SSD giá rẻ. Đại diện Gofiber nhận định, công nghệ máy chủ phát triển ngoài ...`,
    image: "https://gofiber.b-cdn.net/new-design/news/3.png",
    link: "https://vnexpress.net/gofiber-cung-cap-dich-vu-may-chu-gia-thap-4574541.html"
  },
  {
    id: 2,
    title: "Đơn vị cung cấp dịch vụ hosting nổi tiếng hiện nay",
    content: `Đứng trước cuộc cách mạng công nghiệp 4.0, khi mà sự chuyển đổi số đang là một xu thế tất yếu thì hầu hết các doanh nghiệp đều muốn xây dựng cho mình một hệ thống website chuyên nghiệp.Tuy nhiên, không phải doanh nghiệp nào cũng có thể đạt được điều mình `,
    image: "https://gofiber.b-cdn.net/new-design/news/2.png",
    link: "https://www.24h.com.vn/kham-pha-cong-nghe/don-vi-cung-cap-dich-vu-hosting-noi-tieng-hien-nay-c675a1443470.html"
  },
  {
    id: 3,
    title: "Gofiber cung cấp dịch vụ máy chủ giá thấp",
    content: `Gofiber là đơn vị nhiều năm kinh nghiệm với dịch vụ thiết kế website, xây dựng website phục vụ đa dạng lĩnh vực và xây dựng website theo nhu cầu của khách hàng. Không những vậy, Gofiber còn mở rộng dịch vụ của mình sang hỗ trợ khách hàng trong việc bảo trì, nâng cấp và ...`,
    image: "https://gofiber.b-cdn.net/new-design/news/1.png",
    link: "https://www.nguoiduatin.vn/on-vi-cung-cap-dich-vu-hosting-noi-tieng-hien-nay-a595515.html"
  },
  {
    id: 4,
    title: "Dịch vụ web hosting và máy chủ ảo của Gofiber",
    content: `Máy chủ ảo xuất phát từ khái niệm tiếng Anh ban đầu là Virtual Private Server, viết tắt là VPS. Các máy chủ ảo (VPS) được tạo ra bằng phương pháp phân chia tài nguyên của một máy chủ vật lý thành nhiều máy chủ khác nhau. 
    Khi lựa chọn sử dụng VPS .....`,
    image: "https://gofiber.b-cdn.net/new-design/news/4.png",
    link: "https://dantri.com.vn/kinh-doanh/dich-vu-web-hosting-va-may-chu-ao-cua-gofiber-20230225102244599.htm"
  },

];

const responsive = [
  {
    id: 1,
    class: "show-for-small",
    slideClass: "custom-pagination hide-navigation",
    classButton: "d-none",
    slidesPerView: 1,
  },
  {
    id: 2,
    class: "show-for-medium hide-for-small",
    slideClass: "hide-pagination custom-navigation",
    slidesPerView: 2,
  },
  {
    id: 3,
    class: "hide-for-medium",
    slideClass: "hide-pagination custom-navigation",
    slidesPerView: 4,
  },
];

function SlideNewspaper() {
  const sliderRef = useRef<any>(null);
  const sliderRef1 = useRef<any>(null);
  const [index, setIndex] = useState<number>(0);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
    sliderRef1.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
    sliderRef1.current.swiper.slideNext();
  }, []);


  return (
    <div id="slider-why-choose" className="position-relative">
      {responsive.map((item) => (
        <div className={item.class} key={item.id}>
          <Swiper
            ref={item.id === 2 ? sliderRef : sliderRef1}
            slidesPerView={item.slidesPerView}
            spaceBetween={5}
            centeredSlides
            pagination={{
              clickable: true,
            }}
            scrollbar={{ draggable: true }}
            loop
            modules={[Pagination]}
            className={`mySwiper ${item.slideClass}`}
            autoplay
          >
            {data.map((item, index) => (<>

              <SwiperSlide key={index}>
                <a key={index} target="_blank" href={item.link} style={{ textDecoration: "none" }} rel="nofollow noopener  noreferrer">
                  <div className="newspaper-item">
                    <div className="img">
                      <img
                        src={item.image}
                        alt={item.title}
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="title">{item.title}</div>
                    <div className="content">{item.content}</div>

                  </div>
                </a>
              </SwiperSlide>
            </>

            ))}
          </Swiper>
          <button
            onClick={handlePrev}
            className={`btn0 custom-button-prev ${item.classButton ?? ""}`}
          >
            <Icon icon={ICON.PREV} />
          </button>
          <button
            onClick={handleNext}
            className={`btn0 custom-button-next ${item.classButton ?? ""}`}
          >
            <Icon icon={ICON.NEXT} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default SlideNewspaper;
