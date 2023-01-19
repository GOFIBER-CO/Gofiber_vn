import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import { Pagination } from 'swiper';

const data = [
    {
        id: 1,
        title: 'Website Agency Mẫu 1',
        image: require("@/public/images/webdesign/Agency-1.png")
    },
    {
        id: 2,
        title: 'Website Agency Mẫu 2',
        image: require("@/public/images/webdesign/Agency-2.png")
    },
    {
        id: 3,
        title: 'Website Trường Học',
        image: require("@/public/images/webdesign/Education.png")
    },
    {
        id: 4,
        title: 'Website Blog Cá Nhân',
        image: require("@/public/images/webdesign/Blog.png")
    },
    {
        id: 5,
        title: 'Website Bán Khoá Học',
        image: require("@/public/images/webdesign/Portfolio.png")
    }
]

function SliderOutProducts() {
    return (
        <div id='slider-our-products' className='show-for-small'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides
                pagination={{
                    clickable: true,
                }}
                scrollbar={{ draggable: true }}
                loop
                modules={[Pagination]}
                className="mySwiper has-custom-pagination"
                autoplay
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-our-product-item">
                            <div className='img'>
                                <Image alt={item.title} src={item.image} />
                            </div>
                            <div className='mt-4 text-center'>
                                <h3 className='h3'>
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SliderOutProducts