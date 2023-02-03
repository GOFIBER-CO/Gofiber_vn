import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

import { Pagination } from "swiper";
import TextIconPrice from '@/src/components/web-hosting/TextIconPrice';
import ButtonSlideSeeMore from '@/src/components/button/ButtonSlideSeeMore';

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
        slidesPerView: 4
    }
]

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
            isBest: true
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
            {
                responsive.map(item => (
                    <div className={item.class} key={item.id}>
                        <Swiper
                            slidesPerView={item.slidesPerView}
                            spaceBetween={10}
                            centeredSlides
                            pagination={{
                                clickable: true
                            }}
                            scrollbar={{ draggable: true }}
                            loop
                            modules={[Pagination]}
                            className="mySwiper hide-pagination"
                            autoplay
                        >
                            {
                                data.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={`ssl-item ${item.isBest ? 'best' : ''}`}>
                                            <div className='wrapper_content'>
                                                <p className='text-center'>
                                                    <strong>{item.name}</strong>
                                                </p>
                                                <div className="text-center">
                                                    <button className="btn0">
                                                        <span>Thêm vào giỏ hàng</span>
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
                                            {
                                                item.isBest && <div className="wrapper-best">
                                                    <button className="btn0 btn-best">
                                                        <span>Phổ biến nhất</span>
                                                    </button>
                                                </div>
                                            }
                                            <ButtonSlideSeeMore alt={item.name} isBest={item?.isBest || false} />
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

export default SliderHostingPrice