import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

import { Pagination } from "swiper";

const data = [
    {
        id: 1,
        title: 'Cloud VPS',
        content: 'Toàn bộ 100% các dịch vụ máy chủ và VPS của GOFIBER đều toàn bộ sử dụng ổ cứng chuẩn SSG tốc độ truy xuất dữ liệu cao.',
        image: require("@/public/images/introduction/Cloud-VPS.png")
    },
    {
        id: 2,
        title: 'SEO Hosting',
        content: 'GOFIBER mang đến giải pháp SEO chuyên nghiệp , giúp cải thiện thứ hạng Google dễ dàng hơn với hệ thống website vệ tinh có IP riêng biệt.',
        image: require("@/public/images/introduction/SEO-Hosting.png")
    },
    {
        id: 3,
        title: 'Firewall Anti DDOS',
        content: 'Công nghệ và giải pháp độc quyền giúp hạn chế tấn công DDOS và các website được lưu trữ trên hệ thống máy chủ và VPS của GOFIBER.',
        image: require("@/public/images/introduction/Firewall.png")
    },
    {
        id: 4,
        title: 'Miễn phí SSL',
        content: 'GOFIBER hỗ trợ các khách hàng sử dụng VPS khởi tạo các chứng chỉ SSL tiêu chuẩn với mức phía 0đ.',
        image: require("@/public/images/introduction/Hosting.png")
    },
    {
        id: 5,
        title: 'VPS',
        content: 'VPS và máy chủ có GPU hiệu năng cao có khả năng xử lý đa luồng nhanh và hiệu quả vượt trội',
        image: require("@/public/images/introduction/VPS.png")
    }
]

function SliderHot() {

    return (
        <div id='slider-hot'>
            <Swiper
                slidesPerView={5}
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
                        "@1.25": {
                            slidesPerView: 4,
                            spaceBetween: 5,
                        },
                        "@1.50": {
                            slidesPerView: 5,
                            spaceBetween: 5,
                        }
                    }
                }
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='hot-item'>
                                <div className='wrapper_image'>
                                    <Image src={item.image} alt={item.title} />
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </div >

    )
}

export default SliderHot