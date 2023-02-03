import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import { WEB_DESIGN_IMAGE } from '@/src/utils';

const data = [
    {
        id: 1,
        title: 'Website Agency Mẫu 1',
        image: WEB_DESIGN_IMAGE.AGENCY1
    },
    {
        id: 2,
        title: 'Website Agency Mẫu 2',
        image: WEB_DESIGN_IMAGE.AGENCY2
    },
    {
        id: 3,
        title: 'Website Trường Học',
        image: WEB_DESIGN_IMAGE.EDUCATION
    },
    {
        id: 4,
        title: 'Website Blog Cá Nhân',
        image: WEB_DESIGN_IMAGE.BLOG
    },
    {
        id: 5,
        title: 'Website Bán Khoá Học',
        image: WEB_DESIGN_IMAGE.PORTFOLIO
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
                                <img width={1000} height={1500} alt={item.title} src={item.image} />
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