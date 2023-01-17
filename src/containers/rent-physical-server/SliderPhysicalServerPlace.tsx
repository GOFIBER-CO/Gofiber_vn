import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from 'next/image';
import TextIconPrice from '@/src/components/web-hosting/TextIconPrice';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { ICON } from '@/src/utils';


type Props = {
    data: any[]
}

function SliderPhysicalServerPlace({ data }: Props) {
    return (
        <div className='row show-for-medium mt-4'>
            <div className='show-for-small'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    className="mySwiper"
                    id="slider-physical-server-place"
                    centeredSlides
                    loop
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
                                                <div key={index} className='text-icon-price mt-2'>
                                                    <Link href={e.link} className='d-flex'>
                                                        <Icon className={`blue`} icon={ICON.CHECKED} />
                                                        <p className='px-2'>{e.name}</p>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className='hide-for-small'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    className="mySwiper"
                    id="slider-physical-server-place"
                    centeredSlides
                    loop
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
                                                <div key={index} className='text-icon-price mt-2'>
                                                    <Link href={e.link} className='d-flex'>
                                                        <Icon className={`blue`} icon={ICON.CHECKED} />
                                                        <p className='px-2'>{e.name}</p>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default SliderPhysicalServerPlace