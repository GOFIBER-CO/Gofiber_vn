import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from 'next/image';
import { HOME_IMAGE } from '@/src/utils';

const data = [
    {
        id: '1',
        image: HOME_IMAGE.CUSTOMER.FIRST
    },
    {
        id: '2',
        image: HOME_IMAGE.CUSTOMER.SECOND
    },
    {
        id: '3',
        image: HOME_IMAGE.CUSTOMER.THIRD
    },
    {
        id: '4',
        image: HOME_IMAGE.CUSTOMER.FOURTH
    },
    {
        id: '5',
        image: HOME_IMAGE.CUSTOMER.FIFTH
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
                                    <img width={150} height={150} src={item.image} alt={item.id} />
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