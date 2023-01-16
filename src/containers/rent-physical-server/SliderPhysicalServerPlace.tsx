import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from 'next/image';
import TextIconPrice from '@/src/components/web-hosting/TextIconPrice';


type Props = {
    data: any[]
}

function SliderPhysicalServerPlace({ data }: Props) {
    return (
        <div className='row show-for-medium mt-4'>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                className="mySwiper"
                id="slider-physical-server-place"
                centeredSlides
                loop
                breakpoints={
                    {
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                    }
                }
            >
                {
                    data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='slider-physical-server-place-item mt-4' style={{ height: '100%' }}>
                                <div className='img text-center'>
                                    <Image src={item.image} alt={item.id} />
                                </div>
                                <div className='mt-4'>
                                    {
                                        item.data.map((e: any, index: number) => (
                                            <a href={e.link} key={index}>
                                                <TextIconPrice color='blue' content={e.name} />
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default SliderPhysicalServerPlace