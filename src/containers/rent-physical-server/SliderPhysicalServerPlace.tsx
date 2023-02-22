import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import TextIconPrice from "@/src/components/web-hosting/TextIconPrice";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { ICON } from "@/src/utils";

type Props = {
  data: any[];
};

const responsive = [
  {
    id: 1,
    class: "show-for-small",
    slidesPerView: 1,
  },
  {
    id: 2,
    class: "hide-for-small ",
    slidesPerView: 2,
  },
];

function SliderPhysicalServerPlace({ data }: Props) {
  return (
    <div className="row show-for-medium mt-4">
      {responsive.map((item) => (
        <div className={item.class} key={item.id}>
          <Swiper
            slidesPerView={item.slidesPerView}
            spaceBetween={10}
            className="mySwiper hide-pagination"
            id="slider-physical-server-place"
            centeredSlides
            loop
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="slider-physical-server-place-item mt-4"
                  style={{ height: "100%" }}
                >
                  <div className="img text-center">
                    <img src={item.image} alt={item.id} />
                  </div>
                  <div className="mt-4">
                    {item.data.map((e: any, index: number) => (
                      <div key={index} className="text-icon-price mt-2">
                        <Link href={e.link} className="d-flex a">
                          <Icon className={`blue`} icon={ICON.CHECKED} />
                          <p className="px-2">{e.name}</p>
                        </Link>
                      </div>
                    ))}
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

export default SliderPhysicalServerPlace;
