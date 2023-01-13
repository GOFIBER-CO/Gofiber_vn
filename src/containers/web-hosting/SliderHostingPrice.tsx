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
            name: 'Website Hosting Cao Cấp',
            extra: 'Giải pháp lý tưởng cho người mới',
            price: '45.000',
            feature: [
                "1 trang web",
                "50 GB Dung lượng ổ SSD",
                "~10 000 lượt truy cập hàng tháng",
                "100 GB Băng thông",
                "2 Databases"
            ],
            security: [
                "SSL Miễn phí Không giới hạn",
                "Nameservers bảo vệ bằng Cloudflare"
            ],
            free: [
                "Website builder",
                "Sao lưu hàng tuần"
            ],
            isBest: true
        },
        {
            id: '2',
            name: 'Website Hosting Cá Nhân',
            extra: 'Giải pháp lý tưởng cho người mới',
            price: '25.000',
            feature: [
                "1 trang web",
                "50 GB Dung lượng ổ SSD",
                "~10 000 lượt truy cập hàng tháng",
                "100 GB Băng thông",
                "2 Databases"
            ],
            security: [
                "SSL Miễn phí Không giới hạn",
                "Nameservers bảo vệ bằng Cloudflare"
            ],
            free: [
                "Website builder",
                "Sao lưu hàng tuần"
            ]
        },
        {
            id: '3',
            name: 'Website Hosting Doanh nghiệp',
            extra: 'Giải pháp lý tưởng cho người mới',
            price: '75.000',
            feature: [
                "1 trang web",
                "50 GB Dung lượng ổ SSD",
                "~10 000 lượt truy cập hàng tháng",
                "100 GB Băng thông",
                "2 Databases"
            ],
            security: [
                "SSL Miễn phí Không giới hạn",
                "Nameservers bảo vệ bằng Cloudflare"
            ],
            free: [
                "Website builder",
                "Sao lưu hàng tuần"
            ]
        },
        {
            id: '4',
            name: 'Website Hosting Doanh nghiệp',
            extra: '',
            price: '105.000',
            feature: [
                "5 trang web",
                "50 GB Dung lượng ổ SSD",
                "~10 000 lượt truy cập hàng tháng",
                "100 GB Băng thông",
                "2 Databases"
            ],
            security: [
                "SSL Miễn phí Không giới hạn",
                "Nameservers bảo vệ bằng Cloudflare"
            ],
            free: [
                "Website builder",
                "Sao lưu hàng tuần"
            ]
        },
        {
            id: '5',
            name: 'Website Hosting Doanh nghiệp',
            extra: '',
            price: '105.000',
            feature: [
                "10 trang web",
                "50 GB Dung lượng ổ SSD",
                "~10 000 lượt truy cập hàng tháng",
                "100 GB Băng thông",
                "5 Databases"
            ],
            security: [
                "SSL Miễn phí Không giới hạn",
                "Nameservers bảo vệ bằng Cloudflare"
            ],
            free: [
                "Website builder",
                "Sao lưu hàng tuần"
            ]
        }
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
                            <div className='web-hosting-item'>
                                <div className='wrapper_content'>
                                    <p className='text-center'>
                                        <strong>{item.name}</strong>
                                        <br />
                                        <span className='mt-2' style={{ fontSize: '14px' }}>
                                            {item.extra}
                                        </span>
                                        <br />
                                        <span className='color_primary' style={{
                                            fontSize: '48px',
                                            fontWeight: 'bold'
                                        }}>
                                            {item.price}
                                        </span>
                                        VNĐ/Th
                                    </p>
                                    <div className='text-center'>
                                        <button className='btn0'>
                                            <a href='#buy-package'><span>Chọn</span></a>
                                        </button>
                                    </div>
                                    <div className='my-3 divider divider--primary'></div>
                                    <div>
                                        Tính năng hàng đầu
                                    </div>
                                    {
                                        item.feature.map((e, index) => <TextIconPrice key={index} content={e} />)
                                    }
                                    <div className='mt-3'>
                                        Bảo mật
                                    </div>
                                    {
                                        item.security.map((e, index) => <TextIconPrice key={index} color="green" content={e} />)
                                    }
                                    <div className='mt-3'>
                                        Phần thưởng miễn phí
                                    </div>
                                    {
                                        item.free.map((e, index) => <TextIconPrice key={index} color="blue" content={e} />)
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