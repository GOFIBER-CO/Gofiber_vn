import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

import { Pagination } from "swiper";
import TextIconPrice from '@/src/components/web-hosting/TextIconPrice';

type Props = {
    name: string;
    data: any[];
}

function SliderPhysicalServer({ data, name }: Props) {

    return (
        <div id='slider-hire'>
            <div className='text-center'>
                <h4 className='h4'>{name}</h4>

            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={5}
                centeredSlides
                pagination={{
                    clickable: true
                }}
                scrollbar={{ draggable: true }}
                loop
                modules={[Pagination]}
                className="mySwiper has-custom-pagination"
                autoplay
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
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        "@1.50": {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                    }
                }
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='ssl-item'>
                                <div className='wrapper_content'>
                                    <p className='text-center'>
                                        <strong>{item.name}</strong>
                                    </p>
                                    <div className='text-center'>
                                        <button className='btn0'>
                                            <a href='/contact'><span>Liên hệ</span></a>
                                        </button>
                                    </div>
                                    <div className='my-3 divider divider--primary'></div>
                                    {
                                        item?.data?.map((e: any, index: any) => <TextIconPrice color='blue' key={index} content={e} />)
                                    }
                                </div>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div >
    )
}

export default SliderPhysicalServer