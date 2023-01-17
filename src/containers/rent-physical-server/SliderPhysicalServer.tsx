import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

import { Pagination } from "swiper";
import TextIconPrice from '@/src/components/web-hosting/TextIconPrice';
import Link from 'next/link';

type Props = {
    name: string;
    data: any[];
}

const responsive = [
    {
        id: 1,
        class: 'show-for-small',
        slidesPerView: 1
    },
    {
        id: 2,
        class: 'show-for-medium hide-for-small ',
        slidesPerView: 2
    },
    {
        id: 3,
        class: 'hide-for-medium',
        slidesPerView: 3
    }
]

function SliderPhysicalServer({ data, name }: Props) {

    return (
        <div id='slider-hire'>
            <div className='text-center'>
                <h4 className='h4'>{name}</h4>

            </div>

            {
                responsive.map(item => (
                    <div className={item.class} key={item.id}>
                        <Swiper
                            slidesPerView={item.slidesPerView}
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
                    </div>
                ))}
        </div >
    )
}

export default SliderPhysicalServer