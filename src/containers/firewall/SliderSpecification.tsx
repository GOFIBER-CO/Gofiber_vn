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
        name: 'Firewall 1',
        price: '91800',
        info1: '1 Core',
        info2: '300Mbs',
        info3: '1',
    },
    {
        id: 1,
        name: 'Firewall 2',
        price: '91800',
        info1: '1 Core',
        info2: '700Mbs',
        info3: '1',
    },
    {
        id: 1,
        name: 'Firewall 3',
        price: '91800',
        info1: '1 Core',
        info2: '1.5GB',
        info3: '1',
    },
    {
        id: 1,
        name: 'Firewall 4',
        price: '91800',
        info1: '1 Core',
        info2: '5GB',
        info3: '1',
    },
    {
        id: 1,
        name: 'Firewall 5',
        price: '91800',
        info1: '1 Core',
        info2: '10GB',
        info3: '1',
    },
    {
        id: 1,
        name: 'Firewall 6',
        price: '91800',
        info1: '1 Core',
        info2: '20GB',
        info3: '1',
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
        class: 'show-for-medium hide-for-small ',
        slidesPerView: 3
    },
]

type Props = {
    onSelectPackage: any
}

function SliderSpecification({ onSelectPackage }: Props) {

    return (
        <div id='slider-specification'>
            {
                responsive.map(item => (
                    <div key={item.id} className={item.class}>
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
                            className="mySwiper has-custom-pagination"
                            autoplay
                        >
                            {
                                specification.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='specification-item'>
                                            <div className="price-firewall-mobile" style={{ borderBottom: '1px solid #d6d6d6' }}>
                                                <div className="name-server info-server">{item.name}<br />
                                                    <span className='price'>
                                                        {item.price}
                                                        VNĐ/Th
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="price-firewall-mobile">
                                                <div className="info-server item">
                                                    <p>{item.info1}</p>
                                                </div>
                                                <div className="info-server item">
                                                    <p>{item.info2}</p>
                                                </div>
                                                <div className="info-server item">
                                                    <p>{item.info3}</p>
                                                </div>
                                                {
                                                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) =>
                                                        <div className={`info-server item ${item === 8 ? 'end' : ''}`} key={item}>
                                                            <p>
                                                                <Icon icon={ICON.CHECKED} />
                                                            </p>
                                                        </div>)
                                                }
                                                <div className="info-server">
                                                    <a href='#buy-package' onClick={() => onSelectPackage(item)}>
                                                        <button className="btn0 btn-price">
                                                            Chọn
                                                        </button>
                                                    </a>

                                                </div>

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

export default SliderSpecification