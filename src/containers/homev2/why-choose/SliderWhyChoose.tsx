import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { HOME2_IMAGE, HOME_IMAGE, ICON } from "@/src/utils";
import { Icon } from "@iconify/react";

const data = [
  {
    id: 1,
    title: "Đầu tư mạnh mẽ vào hạ tầng",
    content: `Hệ thống cơ sở hạ tầng được đầu tư mạnh mẽ với nhiều lớp bảo mật được tối ưu bởi các chuyên gia hàng đầu. Tất cả giúp tăng cường khả năng giám sát và cảnh báo nhằm hỗ trợ khách hàng hiệu quả nhất trong mọi tình huống.
    `,
    image: HOME2_IMAGE.WHY_CHOOSE.INVEST,
  },
  {
    id: 2,
    title: "Đội ngũ nhân viên kỹ thuật cao, giàu kinh nghiệm",
    content: `GOFIBER hiện đang sở hữu đội ngũ nhân lực trẻ trung, năng động, nhiệt huyết và luôn muốn tìm hiểu cũng như cập nhật những kiến thức và công nghệ mới mẻ.`,
    image: HOME2_IMAGE.WHY_CHOOSE.EMPLOYEE,
  },
  {
    id: 3,
    title: "Tự chủ về kỹ thuật và công nghệ",
    content: `Công nghệ Firewall Anti DDoS được chuyển giao từ các công ty công nghệ nổi tiếng trên thế giới với nhiều tính năng vượt trội.`,
    image: HOME2_IMAGE.WHY_CHOOSE.TECHNOLOGY,
  },
  {
    id: 4,
    title: "Hỗ trợ nhiệt tình 24/7",
    content: `Đội ngũ hỗ trợ và hệ thống giám sát hoạt động 24/7 giúp phát hiện nhanh các sự cố, phản hồi nhanh chóng, đảm bảo dịch vụ của khách hàng vận hành xuyên suốt và ổn định.`,
    image: HOME2_IMAGE.WHY_CHOOSE.SUPPORT,
  },
  {
    id: 5,
    title: "Chính sách dịch vụ rõ ràng",
    content: `Tất cả các thông tin liên quan đến chính sách và điều khoản của GOFIBER đều được thể hiện đầy đủ, rõ ràng và chi tiết trên website chính thức của công ty. Khách hàng 
        sẽ không phải lo về các chi phí ẩn hay bất kỳ sự mập mờ thông tin nào.`,
    image: HOME2_IMAGE.WHY_CHOOSE.POLICY,
  },
  {
    id: 6,
    title: "Nhiều ưu đãi cho khách hàng cũ và mới",
    content: `Để thể hiện sự tri ân đối với các khách hàng đang có, GOFIBER thường xuyên tung ra các chương trình khuyến mãi vào các dịp đặc biệt. 
    Việc sử dụng các mã giảm giá đăng ký mới và gia hạn dịch vụ tại GOFIBER sẽ quý khách tiết kiệm được thêm nhiều chi phí.
    `,
    image: HOME2_IMAGE.WHY_CHOOSE.CUSTOMER,
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

function SlideWhyChoose() {
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
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="why-choose-item">
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
                  <div className="d-flex justify-content-center">
                    <div className="line"></div>
                  </div>
                </div>
              </SwiperSlide>
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

export default SlideWhyChoose;
