import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import TextIconButton from "@/src/components/button/TextIconButton";
import { HOME_IMAGE, ICON } from "@/src/utils";
import Link from "next/link";

const sliders = [
    {
        id: 1,
        title: 'Dịch vụ thiết kế Website',
        content1: `Giao diện đẹp mắt, thân thiện với người dùng và công cụ tìm kiếm... là 
            những yếu tố luôn được đảm bảo trong bất ky sản phẩm nào do đội ngữ GOFIBER làm ra. 
            Ngoài ra, các mẫu websitedo chúng tôi thiết kế cũng luôn được đảm bảo sự hiển thị đồng bộ và đẹp mắt trên các thiết bị khác nhau.`,
        content2: `
            Tốc độ load của website cũng được đội ngũ nhân viên giàu kinh nghiệm của GOFIBER theo dõi 
            và tối ưu kỹ càng trước khi bàn giao cho khách hàng
      `,
        image: HOME_IMAGE.MY_SERVICE.WEB_DESIGN
    },
    {
        id: 2,
        title: 'Cho thuê server giá rẻ',
        content1: `Đi lên từ dịch vụ nền tảng là Thiết kế Website giá rẻ nên 
        GOFIBER hiểu rõ những mong muốn của khách hàng của mình về dịch vụ hosting cũng như cho thuê server giá rẻ với cấu hình cao..`,
        content2: `
        Chúng tôi tự hào là một trong những công ty cung cấp dịch vụ cho thuê hosting và máy 
        chủ hiệu năng cao với giá thành cực kỳ hợp lý… có thể đáp ứng gần như mọi nhu cầu từ cơ bản đến chuyên nghiệp.
      `,
        image: HOME_IMAGE.MY_SERVICE.RENT_SERVICE
    },
    {
        id: 3,
        title: 'Cung cấp hosting và VPS ‘khủng’ giá rẻ',
        content1: `Nhằm tri ân những khách hàng của mình, GOFIBER đặc biệt chú trọng 
        các giải pháp công nghệ nhằm đáp ứng nhu cầu hosting và VPS ‘khủng’ với ngân sách vừa phải. Tóm lại, mọi yếu tố để giúp bạn khởi động dự án của mình 
        đã được đội ngũ giàu kinh nghiệm của GOFIBER chuẩn bị sẵn. 
        Hãy liên hệ ngay với nhân viên sale để được tư vấn ngay hôm nay.`,
        image: HOME_IMAGE.MY_SERVICE.HOSTING_VPS
    },
    {
        id: 4,
        title: 'Xây dựng nội dung chất lượng',
        content1: `Đội ngũ content của GOFIBER được 
        đào tạo bài bản và chuyên sâu về SEO luôn sẵn sàng hỗ trợ khách hàng trong việc chuẩn bị nội dung cho website của mình. 
        Đây là một trong những thế mạnh của dịch vụ xây dựng nội dung của chúng tôi nhiều năm qua.`,
        image: HOME_IMAGE.MY_SERVICE.BUILD_CONTENT
    },
    {
        id: 5,
        title: 'Dịch vụ chăm sóc Website chuyên nghiệp',
        content1: `Không phải chủ dự án nào cũng có thời gian để chăm sóc website của mình sau khi xây dựng. 
        Trong đó, có không ít các chủ website còn mắc phải sai lầm nghiêm trọng là không quan tâm và đầu tư nội dung ngay từ đầu cho website. 
        Điều này thường dẫn đến hệ quả là website không phát huy được hết giá trị của nó, khiến cho sự đầu tư và các cơ hội khác bị bỏ lỡ.`,
        content2: `
        Dịch vụ chăm sóc website chuyên nghiệp của GOFIBER được sinh ra để hỗ trợ cho các các nhân và doanh nghiệp
         sở hữu website vận hành website của mình hiệu quả hơn và nhận được nhiều lợi ích rõ ràng hơn.
        `,
        image: HOME_IMAGE.MY_SERVICE.CARE_WEBSITE
    },
    {
        id: 6,
        title: 'Hạ tầng an toàn và bảo mật',
        content1: `Cơ sở hạ tầng của GOFIBER được đầu tư và trang bị chỉn chu với các thiết bị được 
        chuyển giao từ những thương hiệu nổi tiếng như Dell, HP… có tính bảo mật và ổn định cao.`,
        content2: `
        Dịch vụ chăm sóc website chuyên nghiệp của GOFIBER được sinh ra để hỗ trợ cho các các nhân và doanh nghiệp
         sở hữu website vận hành website của mình hiệu quả hơn và nhận được nhiều lợi ích rõ ràng hơn.
        `,
        image: HOME_IMAGE.MY_SERVICE.INFRASTRUCTURE
    }
]

gsap.registerPlugin(ScrollTrigger)

function SliderService() {

    useEffect(() => {
        const section = gsap.utils.toArray(".scroll-slide");
        gsap.to(section, {
            xPercent: -100 * (section.length - 1),
            ease: "none",
            smoothOrigin: false,
            scrollTrigger: {
                pin: true,
                trigger: '.scroll-wrapper',
                scrub: 0.1,
                end: "+=2000",
            }
        })
    }, [])

    // return (
    //     <div id="slider-service">
    //         <div style={{ paddingTop: '150px' }} className="scroll-wrapper">
    //             {
    //                 sliders.map((slide) => (
    //                     <article key={slide.id} className="item scroll-slide">
    //                         <div className="item-container">
    //                             <div className="container">
    //                                 <div className="img">
    //                                     <img width={500} height={500} src={slide.image} alt="Image" title="Gofiber Hosting và Máy chủ hiệu năng cao 19" />
    //                                 </div>
    //                                 <div className="content-slider">
    //                                     <div className="content">
    //                                         <h3 className="mb-3 h3">{slide.title}</h3>
    //                                         <p>{slide.content1}</p>
    //                                         {/* <p>{slide.content2}</p> */}
    //                                         <TextIconButton className="mt-2" icon={ICON.RIGHT} name="Xem thêm" color="primary" />
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </article>
    //                 ))}
    //         </div>
    //     </div>
    // )

    const sliderRef = useRef<any>(null);
    const [index, setIndex] = useState<number>(0);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <Swiper
                ref={sliderRef}
                slidesPerView={"auto"}
                spaceBetween={5}
                className="mySwiper position-relative"
                id="slider-service"
                onSlideChange={(e) => setIndex(e?.activeIndex)}
                autoplay
                loop
                navigation
            >
                {
                    sliders.map((slide) => (
                        <SwiperSlide key={slide?.id}>
                            <div className='item-container'>
                                <div className="container">
                                    <div className="image">
                                        <img src={slide?.image} alt={slide.title} />
                                    </div>
                                    <div className="content-slider">
                                        <div className="content">
                                            <h3 className="mb-3">{slide.title}</h3>
                                            <p>{slide.content1}</p>
                                            {/* <p>{slide.content2}</p> */}
                                            <TextIconButton className="mt-2" icon={ICON.RIGHT} name="Xem thêm" color="primary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
                {/* <button className="custom-navigation-button custom-prev-arrow btn0" onClick={handlePrev}>
                    <div className="img">
                        <Image src={require("@/public/images/icons/left.svg")} alt="prev" />
                    </div>
                </button>
                <button className="custom-navigation-button custom-next-arrow btn0" onClick={handleNext}>
                    <div className="img">
                        <Image src={require("@/public/images/icons/right.svg")} alt="prev" />
                    </div>
                </button> */}
                <div className="mt-3 text-center pagination-index">
                    <button className="btn0 button-pagination" onClick={handlePrev}>
                        <div className="img">
                            <Image src={require("@/public/images/icons/left.svg")} alt="prev" />
                        </div>
                    </button>
                    <span>
                        {(index % sliders?.length) + 1}/{sliders?.length}
                    </span>
                    <button className="btn0 button-pagination" onClick={handleNext}>
                        <div className="img">
                            <Image src={require("@/public/images/icons/right.svg")} alt="prev" />
                        </div>
                    </button>
                </div>
            </Swiper>
        </>
    );
}

export default SliderService;
