import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import { Pagination } from "swiper";
import TextIconPrice from "@/src/components/web-hosting/TextIconPrice";
import Link from "next/link";
import { formatNumber } from "@/src/utils";
import ButtonSlideSeeMore from "@/src/components/button/ButtonSlideSeeMore";

type Props = {
  name: string;
  data: any[];
  onSelectPackage: any;
};

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

function SliderPhysicalServer({ data, name, onSelectPackage }: Props) {
  return (
    <div id="slider-hire">
      <div className="text-center">
        <h4 className="h4">{name}</h4>
      </div>

      {responsive.map((item) => (
        <div className={item.class} key={item.id}>
          <Swiper
            slidesPerView={item.slidesPerView}
            spaceBetween={10}
            centeredSlides
            pagination={{
              clickable: true,
            }}
            scrollbar={{ draggable: true }}
            loop
            modules={[Pagination]}
            className="mySwiper hide-pagination"
            autoplay
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`ssl-item ${item.isBest ? "best" : ""}`}>
                  <div className="wrapper_content">
                    <div className="text-center">
                      <p className="text-center">
                        <strong>{item.name}</strong>
                        <br />
                        <span className="mt-2" style={{ fontSize: "14px" }}>
                          {item.extra}
                        </span>
                        <br />
                        <span
                          className="color_primary"
                          style={{
                            fontSize: "32px",
                            fontWeight: "bold",
                          }}
                        >
                          {formatNumber(item?.price)}
                        </span>
                        VNĐ/Th
                      </p>
                      <div className="text-center">
                        <a
                          href="#buy-package"
                          onClick={() => onSelectPackage(item)}
                        >
                          <button className="btn0">
                            <span>Thêm vào giỏ hàng</span>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="my-3 divider divider--primary"></div>
                    {item?.data?.map((e: any, index: any) => (
                      <TextIconPrice color="blue" key={index} content={e} />
                    ))}
                  </div>
                  {item.isBest && (
                    <div className="wrapper-best">
                      <button className="btn0 btn-best">
                        <span>Phổ biến nhất</span>
                      </button>
                    </div>
                  )}
                  {/* <ButtonSlideSeeMore alt={item.name} isBest={item.isBest || false} /> */}
                  {item.isBest && (
                    <div className="wrapper-best">
                      <button className="btn0 btn-best">
                        <span>Phổ biến nhất</span>
                      </button>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}

export default SliderPhysicalServer;
