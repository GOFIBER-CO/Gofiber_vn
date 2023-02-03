import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

import { Pagination } from "swiper";
import Link from 'next/link';

const data = [
    {
        id: '1',
        title: 'WEBSITE DỊCH VỤ',
        image: require("@/public/images/introduction/Agency-1.png"),

    },
    {
        id: '2',
        title: 'BLOG CÁ NHÂN',
        image: require("@/public/images/introduction/Portfolio.png"),
    },
    {
        id: '3',
        title: 'WEBSITE TRƯỜNG HỌC',
        image: require("@/public/images/introduction/Education.png"),
    },
    {
        id: '4',
        title: 'WEBSITE BÁN KHOÁ HỌC',
        image: require("@/public/images/introduction/Blog.png"),
    },
    {
        id: '5',
        title: 'WEBSITE ĐA MỤC ĐÍCH',
        image: require("@/public/images/introduction/Agency-2.png"),
    }
]

const responsive = [
    {
        id: 1,
        class: 'show-for-small',
        slidesPerView: 1
    },
    {
        id: 2,
        class: 'hide-for-small ',
        slidesPerView: 2
    },
]

function SliderIntroduction() {
    return (
        <div id='slider-introduction'>
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
                                        <div className='introduction-item'>
                                            <div className='wrapper_image'>
                                                <Link href='/'>
                                                    <Image src={item.image} alt={item.title} />

                                                </Link>
                                            </div>
                                            <div className='box-text text-center'>
                                                <h4 className='m-0 h4 color_primary'>{item.title}</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                ))
                            }
                        </Swiper>
                    </div>
                ))
            }
        </div >
    )
}

export default SliderIntroduction