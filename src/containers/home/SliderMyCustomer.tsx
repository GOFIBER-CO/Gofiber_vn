import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from 'next/image';

const data = [
    {
        id: '1',
        image: require("@/public/images/introduction/customer-1.png")
    },
    {
        id: '2',
        image: require("@/public/images/introduction/customer-2.png")
    },
    {
        id: '3',
        image: require("@/public/images/introduction/customer-3.png")
    },
    {
        id: '4',
        image: require("@/public/images/introduction/customer-4.png")
    },
    {
        id: '5',
        image: require("@/public/images/introduction/customer-5.png")
    }
]


function SliderMyCustomer() {
    return (
        <div className='row show-for-small'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                className="mySwiper"
                id="slider-my-customer"
                centeredSlides
                loop
            >
                {
                    data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='img d-flex align-items-center justify-content-center' style={{ height: '100%' }}>
                                <div className='p-2'>
                                    <Image src={item.image} alt={item.id} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default SliderMyCustomer