import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

import { Pagination } from "swiper";
import TextIconPrice from '@/src/components/web-hosting/TextIconPrice';

function SliderHostingPrice() {
    const data = [
        {
            id: '1',
            name: 'SSL DV',
            service: [
                "Đơn vị cấp: Comondo",
                "Loại xác thực:  DV",
                "Xác thực: tên miền",
                "1 tên miền chính",
                "1 tên miền con",
                "Thời gian cấp phát: 1 - 5 phút",
                "Hỗ trợ cài đặt miễn phí"
            ],
        },
        {
            id: '2',
            name: 'SSL Wildcard DV',
            service: [
                "Đơn vị cấp: Comondo",
                "Loại xác thực:  DV",
                "Xác thực: tên miền",
                "1 tên miền chính",
                "1 tên miền con",
                "Thời gian cấp phát: 1 - 5 phút",
                "Hỗ trợ cài đặt miễn phí"
            ],
        },
        {
            id: '3',
            name: 'SSL EV',
            service: [
                "Đơn vị cấp: Comondo",
                "Loại xác thực:  EV",
                "Xác thực: Thông tin DN",
                "1 tên miền chính",
                "Thời gian cấp phát: 1 - 5 ngày",
                "Hỗ trợ cài đặt miễn phí",
            ],
            class: 'mt-4'
        },
        {
            id: '4',
            name: 'Digicert Basic EV (FLEX)',
            service: [
                "Đơn vị cấp: Comondo",
                "Loại xác thực:  EV",
                "Xác thực: Thông tin DN",
                "1 tên miền chính",
                "Thời gian cấp phát: 2 - 24 giờ",
                "Hỗ trợ cài đặt miễn phí",
            ],
            class: 'mt-4'
        },
    ]

    return (
        <div id='slider-web-hosting'>
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
                                    <div>
                                        Thông tin gói dịch vụ
                                    </div>
                                    {
                                        item.service.map((e, index) => <TextIconPrice color='blue' key={index} content={e} />)
                                    }
                                    {
                                        item.class && <div style={{ minHeight: '24px' }} className={`${item.class ? item.class : ''}`}></div>
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

export default SliderHostingPrice