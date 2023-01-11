import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const data = [
    {
        id: 1,
        title: 'VPS',
        content: 'VPS có GPU, máy chủ hiệu năng vượt trội, xử lý nhanhh chống',
    }
]

function SliderHot() {
    return (
        <div id='slider-hot'>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                centeredSlides={true}
                className="mySwiper"
                id="slider-service"
                onSlideChange={(e) => console.log('change', e.slideNext)}
                autoplay
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <div>VPS - {index}</div>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div>
    )
}

export default SliderHot