import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

import { Pagination } from "swiper";
import { Icon } from '@iconify/react';
import { ICON } from '@/src/utils';

const specification = [
    {
        id: 1,
        title: 'Firewall 1',
        price: '91.800',
        info1: '1 Core',
        info2: '300Mbs',
        info3: '1',
    },
    {
        id: 1,
        title: 'Firewall 2',
        price: '91.800',
        info1: '1 Core',
        info2: '700Mbs',
        info3: '1',
    },
    {
        id: 1,
        title: 'Firewall 3',
        price: '91.800',
        info1: '1 Core',
        info2: '1.5GB',
        info3: '1',
    },
    {
        id: 1,
        title: 'Firewall 4',
        price: '91.800',
        info1: '1 Core',
        info2: '5GB',
        info3: '1',
    },
    {
        id: 1,
        title: 'Firewall 5',
        price: '91.800',
        info1: '1 Core',
        info2: '10GB',
        info3: '1',
    },
    {
        id: 1,
        title: 'Firewall 6',
        price: '91.800',
        info1: '1 Core',
        info2: '20GB',
        info3: '1',
    }
]

function SliderSpecification() {

    return (
        <div id='slider-specification'>
            <Swiper
                slidesPerView={1}
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
                    specification.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='specification-item'>
                                <div className="price-firewall-mobile" style={{ borderBottom: '1px solid ' }}>
                                    <div className="name-server info-server">{item.title}<br />{item.price} VNĐ/Th</div>
                                </div>
                                <div className="price-firewall-mobile">
                                    <div className="info-server">
                                        <p>{item.info1}</p>
                                    </div>
                                    <div className="info-server">
                                        <p>{item.info2}</p>
                                    </div>
                                    <div className="info-server">
                                        <p>{item.info3}</p>
                                    </div>
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) =>
                                            <div className="info-server" key={item}>
                                                <p>
                                                    <Icon icon={ICON.CHECKED} />
                                                </p>
                                            </div>)
                                    }
                                    <div className="info-server">
                                        <button className="btn0 btn-price">
                                            Chọn
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div >

    )
}

export default SliderSpecification