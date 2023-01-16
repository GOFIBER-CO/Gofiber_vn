import React, { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

import { Pagination } from "swiper";
import TextIconPrice from '@/src/components/web-hosting/TextIconPrice';

const dataWithTab = [
    {
        tab: 'vps',
        data: [
            {
                id: 1,
                name: 'CLOUD VPS 1GB',
                extra: 'Giải pháp lý tưởng cho người mới',
                price: '190.000',
                feature: {
                    name: "Tính năng hàng đầu",
                    data: [
                        "1 CPU",
                        "1GB RAM",
                        "15GB SSD",
                        "Công nghệ Ảo Hoá KVM"
                    ]
                },
                security: {
                    name: "Bảo mật",
                    data: [
                        "SSL Miễn phí Không giới hạn",
                        "Hạn chế tấn công DDOS"
                    ]
                },
                free: {
                    name: "Phần thưởng miễn phí",
                    data: [
                        "Hỗ trợ IPv6",
                        "Sao lưu hàng tuần"
                    ]
                }
            },
            {
                id: 2,
                name: 'CLOUD VPS 2GB',
                extra: 'Giải pháp lý tưởng cho dự án nhỏ',
                price: '380.000',
                feature: {
                    name: "Tính năng hàng đầu",
                    data: [
                        "2 CPU",
                        "2GB RAM",
                        "20GB SSD",
                        "Công nghệ Ảo Hoá KVM"
                    ]
                },
                security: {
                    name: "Bảo mật",
                    data: [
                        "SSL Miễn phí Không giới hạn",
                        "Hạn chế tấn công DDOS"
                    ]
                },
                free: {
                    name: "Phần thưởng miễn phí",
                    data: [
                        "Hỗ trợ IPv6",
                        "Sao lưu hàng tuần"
                    ]
                }
            },
            {
                id: 3,
                name: 'CLOUD VN 4G',
                extra: 'Giải pháp lý tưởng cho dự án nhỏ',
                price: '720.000',
                feature: {
                    name: "Tính năng hàng đầu",
                    data: [
                        "2 CPU",
                        "8GB RAM",
                        "60GB SSD",
                        "Công nghệ Ảo Hoá KVM"
                    ]
                },
                security: {
                    name: "Bảo mật",
                    data: [
                        "SSL Miễn phí Không giới hạn",
                        "Hạn chế tấn công DDOS"
                    ]
                },
                free: {
                    name: "Phần thưởng miễn phí",
                    data: [
                        "Hỗ trợ IPv6",
                        "Sao lưu hàng tuần"
                    ]
                }
            },
            {
                id: 4,
                name: 'CLOUD VN 8G',
                extra: 'Giải pháp lý tưởng cho dự án vừa và doanh nghiệp nhỏ',
                price: '1.400.000',
                feature: {
                    name: "Tính năng hàng đầu",
                    data: [
                        "4 CPU",
                        "8GB RAM",
                        "90GB SSD",
                        "Công nghệ Ảo Hoá KVM"
                    ]
                },
                security: {
                    name: "Bảo mật",
                    data: [
                        "SSL Miễn phí Không giới hạn",
                        "Hạn chế tấn công DDOS"
                    ]
                },
                free: {
                    name: "Phần thưởng miễn phí",
                    data: [
                        "Hỗ trợ IPv6",
                        "Sao lưu hàng tuần"
                    ]
                }
            },
            {
                id: 5,
                name: 'CLOUD VN 16G',
                extra: 'Giải pháp lý tưởng cho doanh nghiệp vừa',
                price: '2.300.000',
                feature: {
                    name: "Tính năng hàng đầu",
                    data: [
                        "8 CPU",
                        "16GB RAM",
                        "150GB SSD",
                        "Công nghệ Ảo Hoá KVM"
                    ]
                },
                security: {
                    name: "Bảo mật",
                    data: [
                        "SSL Miễn phí Không giới hạn",
                        "Hạn chế tấn công DDOS"
                    ]
                },
                free: {
                    name: "Phần thưởng miễn phí",
                    data: [
                        "Hỗ trợ IPv6",
                        "Sao lưu hàng tuần"
                    ]
                }
            },
            {
                id: 6,
                name: 'CLOUD VN 32G',
                extra: 'Giải pháp lý tưởng cho doanh nghiệp vừa',
                price: '3.800.000',
                feature: {
                    name: "Tính năng hàng đầu",
                    data: [
                        "16 CPU",
                        "32GB RAM",
                        "300GB SSD",
                        "Công nghệ Ảo Hoá KVM"
                    ]
                },
                security: {
                    name: "Bảo mật",
                    data: [
                        "SSL Miễn phí Không giới hạn",
                        "Hạn chế tấn công DDOS"
                    ]
                },
                free: {
                    name: "Phần thưởng miễn phí",
                    data: [
                        "Hỗ trợ IPv6",
                        "Sao lưu hàng tuần"
                    ]
                }
            }
        ]
    },
    {
        tab: 'Server Việt Nam',
        data: [
            {
                id: 1,
                name: 'Xeon 8 Core Series',
                extra: 'Phí khởi tạo 800.000',
                price: '4.900.000',
                feature: {
                    name: "Tính năng hàng đầu",
                    data: [
                        "8 CPU",
                        "32GB RAM",
                        "240GB SSD SAS",
                        "100Mbps Băng thông",
                        "1 IPv4",
                        "16 IPv16"
                    ]
                },
                free: {
                    name: "Tuỳ chọn nâng cấp",
                    data: [
                        "8GB RAM: 200.000 vnđ/th",
                        "600GB SSD SAS: 200.000 vnđ/th",
                        "Cài lại hệ điều hành: 200.000 vnđ/lần"
                    ]
                }
            },
            {
                id: 2,
                name: 'Xeon 12 Core Series',
                extra: 'Phí khởi tạo 800.000',
                price: '5.700.000',
                feature: {
                    name: "Tính năng hàng đầu",
                    data: [
                        "12 CPU",
                        "32GB RAM",
                        "240GB SSD SAS",
                        "100Mbps Băng thông",
                        "1 IPv4",
                        "16 IPv16"
                    ]
                },
                free: {
                    name: "Tuỳ chọn nâng cấp",
                    data: [
                        "8GB RAM: 200.000 vnđ/th",
                        "600GB SSD SAS: 200.000 vnđ/th",
                        "Cài lại hệ điều hành: 200.000 vnđ/lần"
                    ]
                }
            },
            {
                id: 2,
                name: 'Xeon 14 Core Series',
                extra: 'Phí khởi tạo 800.000',
                price: '6.100.000',
                feature: {
                    name: "Tính năng hàng đầu",
                    data: [
                        "14 CPU",
                        "32GB RAM",
                        "240GB SSD SAS",
                        "100Mbps Băng thông",
                        "1 IPv4",
                        "16 IPv16"
                    ]
                },
                free: {
                    name: "Tuỳ chọn nâng cấp",
                    data: [
                        "8GB RAM: 200.000 vnđ/th",
                        "600GB SSD SAS: 200.000 vnđ/th",
                        "Cài lại hệ điều hành: 200.000 vnđ/lần"
                    ]
                }
            },
            {
                id: 2,
                name: 'Xeon 18 Core Series',
                extra: 'Phí khởi tạo 800.000',
                price: '8.100.000',
                feature: {
                    name: "Tính năng hàng đầu",
                    data: [
                        "18 CPU",
                        "32GB RAM",
                        "240GB SSD SAS",
                        "100Mbps Băng thông",
                        "1 IPv4",
                        "16 IPv16"
                    ]
                },
                free: {
                    name: "Tuỳ chọn nâng cấp",
                    data: [
                        "8GB RAM: 200.000 vnđ/th",
                        "600GB SSD SAS: 200.000 vnđ/th",
                        "Cài lại hệ điều hành: 200.000 vnđ/lần"
                    ]
                }
            },
        ]
    },
    {
        tab: 'Server US',
    },
    {
        tab: 'Server Alibaba',
    },
    {
        tab: 'Server Singapore',
    },
    {
        tab: 'Server Japan',
    }
]

type Props = {
    tab: string;
}

function SliderHire({ tab }: Props) {
    const data = useMemo(() => {
        return dataWithTab.find((item) => item.tab === tab)?.data || [];
    }, [tab])

    return (
        <div id='slider-hire'>
            <Swiper
                slidesPerView={3}
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
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        "@1.00": {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        "@1.25": {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        "@1.50": {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        }
                    }
                }
            >
                {
                    data?.map((item: any, index: number) => (
                        <SwiperSlide key={index}>
                            <div className='hire-item'>
                                <div className='wrapper_content'>
                                    <p className='text-center'>
                                        <strong>{item.name}</strong>
                                        <br />
                                        <span className='mt-2' style={{ fontSize: '14px' }}>
                                            {item.extra}
                                        </span>
                                        <br />
                                        <span className='color_primary' style={{
                                            fontSize: '32px',
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
                                    {
                                        item?.feature &&
                                        <>
                                            <div className='name'>
                                                {item?.feature?.name}
                                            </div>
                                            {
                                                item.feature?.data.map((e: any, index: any) => <TextIconPrice key={index} content={e} />)
                                            }
                                        </>
                                    }
                                    {
                                        item?.security &&
                                        <>
                                            <div className='name'>
                                                {item?.security?.name}
                                            </div>
                                            {
                                                item.security?.data.map((e: any, index: any) => <TextIconPrice color='green' key={index} content={e} />)
                                            }
                                        </>
                                    }
                                    {
                                        item?.free &&
                                        <>
                                            <div className='name'>
                                                {item?.free?.name}
                                            </div>
                                            {
                                                item.free?.data.map((e: any, index: any) => <TextIconPrice color='blue' key={index} content={e} />)
                                            }
                                        </>
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

export default SliderHire