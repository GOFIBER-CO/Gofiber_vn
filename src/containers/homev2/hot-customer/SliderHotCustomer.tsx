import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import { HOME_IMAGE } from "@/src/utils";

const data = [
  {
    id: "1",
    image: HOME_IMAGE.CUSTOMER.FIRST,
  },
  {
    id: "2",
    image: HOME_IMAGE.CUSTOMER.SECOND,
  },
  {
    id: "3",
    image: HOME_IMAGE.CUSTOMER.THIRD,
  },
  {
    id: "4",
    image: HOME_IMAGE.CUSTOMER.FOURTH,
  },
  {
    id: "5",
    image: HOME_IMAGE.CUSTOMER.FIFTH,
  },
];

const responsive = [
  {
    id: 2,
    class: "show-for-medium",
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

function SliderHotCustomer() {
  return (
    <div id="slide-hot-customer" className="row">
      {responsive.map((item) => (
        <div key={item.id} className={item.class}>
          <Swiper
            slidesPerView={item.slidesPerView}
            spaceBetween={10}
            className="mySwiper"
            id="slider-my-customer"
            centeredSlides
            loop
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="img d-flex align-items-center justify-content-center"
                  style={{ height: "100%" }}
                >
                  <div className="p-2">
                    <img
                      style={{ height: "100px" }}
                      width={250}
                      height={100}
                      src={item.image}
                      alt={item.id}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}

export default SliderHotCustomer;
