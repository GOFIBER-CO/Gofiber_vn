import BannerPage from '@/src/components/banner/BannerPage'
import Question from '@/src/containers/home/question'
import BuyPackage from '@/src/containers/web-hosting/BuyPackage'
import SliderHostingPrice from '@/src/containers/web-hosting/SliderHostingPrice'
import Image from 'next/image'
import React from 'react'

function WebHosting() {
    const banner = {
        large: 'https://gofiber.vn/wp-content/uploads/2022/12/bannner-webhosting.png',
        medium: '	https://gofiber.vn/wp-content/uploads/2022/12/bg-webhosting.png',
        small: 'https://gofiber.vn/wp-content/uploads/2022/12/bg-webhosting-1.png'
    }

    const data = [
        {
            id: '1',
            title: 'Web Hosting',
            class: 'first'
        },
        {
            id: '2',
            title: 'Thiết kế Website',
            class: 'second'
        },
        {
            id: '3',
            title: 'Thuê VPS',
            class: 'third'
        },
        {
            id: '4',
            title: 'Thuê máy chủ vật lý Thuê chỗ đặt máy chủ',
            class: 'fourth'
        },
        {
            id: '5',
            title: 'Firewall',
            class: 'firth'
        },
        {
            id: '6',
            title: 'Chứng chỉ SSL',
            class: 'sixth'
        }
    ]

    return (
        <div id="web-hosting">
            <section>
                <BannerPage image={banner} name="Web Hosting" />
            </section>
            <div className='container'>
                <section className='mt-4 text-center'>
                    <h4 className='h4 mt-4'>
                        Mua Hosting đang được tin dùng bởi hàng ngàn người
                    </h4>
                    <p className='mt-3'>
                        GoFiber là nhà cung cấp dịch vụ lưu trữ web hosting được đánh giá “tuyệt vời” bởi hàng ngàn người dùng thực tế.
                    </p>
                </section>
                <section className='section-hosting-price'>
                    <h3 className='h3 text-center'>
                        Bảng giá hosting
                    </h3>
                    <div>
                        <SliderHostingPrice />
                    </div>
                </section>
            </div>
            <section className='section-info-web-hosting'>
                <div className='container'>
                    <div className='row justify-content-center align-items-center flex-row-reverse'>
                        <div className='col col-12 col-md-6'>
                            <div className='img text-center text-md-left'>
                                <Image src={require("@/public/images/web-hosting/Cloud-hosting-rafiki-1.png")} alt="Cloud-hosting-rafiki" />
                            </div>
                        </div>
                        <div className='col col-12 col-md-6'>
                            <h4 className='h4'>
                                Chuyên gia hỗ trợ hosting 24/7
                            </h4>
                            <p>
                                Ngoài hỗ trợ tiếng Anh 24/7, chuyên gia đào tạo từ công ty Gofiber còn hỗ trợ kỹ thuật toàn
                                thời gian bằng tiếng Việt cho bạn. Nếu có vấn đề xảy ra, bạn không cần lo lắng vì đã có chúng tôi trợ giúp.
                            </p>
                            <h4 className='h4'>
                                Server host công nghệ hàng đầu
                            </h4>
                            <p>
                                Bạn lo lắng trang web chậm ảnh hưởng đến uy tín công ty?
                                Đừng lo lắng vì đã có chúng tôi! Với gói máy chủ host chạy trên hạ tầng HTTP/3 kết hợp cơ chế tự phát hiện và sửa lỗi,
                                ổ cứng SSD và không giới hạn băng thông, website của bạn sẽ đạt tốc độ cao nhất.
                            </p>
                            <h4 className='h4'>
                                Server host công nghệ hàng đầu
                            </h4>
                            <p>
                                Các chuyên gia kỹ thuật sẽ giúp bạn chuyển website tới Hostinger một
                                cách miễn phí để bạn có thể tập trung vào công việc chính của bạn nhanh hơn.
                            </p>
                        </div>
                    </div>
                    <div className='row justify-content-center align-items-center mt-4'>
                        <div className='col col-12 col-md-6'>
                            <div className='img text-center text-md-left'>
                                <Image src={require("@/public/images/web-hosting/Cloud-hosting-amico-2.png")} alt="Cloud-hosting-amico-2" />
                            </div>
                        </div>
                        <div className='col col-12 col-md-6'>
                            <h4 className='h4'>
                                Hosting tối ưu WordPress
                            </h4>
                            <p>
                                Mọi gói hosting của chúng tôi đều tối ưu cho WordPress.
                                Máy chủ với LiteSpeed và các công cụ tăng tốc WordPress sẽ giúp trang web bạn đạt tốc độ nhanh nhất.
                            </p>
                            <h4 className='h4'>
                                Bảo mật tối đa
                            </h4>
                            <p>
                                Bạn lo lắng trang web chậm ảnh hưởng đến uy tín công ty?
                                Đừng lo lắng vì đã có chúng tôi! Với gói máy chủ host chạy trên hạ tầng HTTP/3 kết hợp cơ chế tự phát hiện và sửa lỗi,
                                ổ cứng SSD và không giới hạn băng thông, website của bạn sẽ đạt tốc độ cao nhất.
                            </p>
                            <h4 className='h4'>
                                Không cần kinh nghiệm làm web
                            </h4>
                            <p>
                                Bạn có biết, bạn có thể mua web hosting và vận hành hiệu quả nhờ công cụ quản lý có giao diện trực quan, thân thiện với người dùng.
                                Hầu hết khách hàng của chúng tôi không phải là lập trình viên và họ đều có thể khởi chạy website trong ít phút.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-search-other container'>
                <h3 className='h3 text-center'>Bạn đang cần tìm gì khác?</h3>
                <div className='section-search-other__list hide-for-small'>
                    <div className='row justify-content-center'>
                        {
                            data.map(item => (
                                <div key={item.id} className='col col-12 col-md-6 col-lg-4 mt-4'>
                                    <div className={`d-flex align-items-center justify-content-center section-search-other__item section-search-other__item__${item.class}`}>
                                        <a href='/'>
                                            {item.title}
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="section-question">
                <div className="section-content position-relative">
                    <div className="row justify-content-center">
                        <div className="col col-12 col-lg-8">
                            <div className="col-inner">
                                <div className="row row-title justify-content-center">
                                    <div className="col col-11 col-md-5 col-title-1 text-center">
                                        <h2 className="m-0">CÂU HỎI THƯỜNG GẶP</h2>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="describe">
                                        Giải đáp các thắc mắc thường gặp của khách hàng mới khi lần
                                        đầu biết đến dịch vụ Hosting và Máy chủ hiệu năng cao của
                                        GOFIBER
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <Question />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-contact">
                <div className="section-content position-relative">
                    <div className="row justify-content-center">
                        <div className="col col-12">
                            <div className="col-inner">
                                <div className="row row-title justify-content-center">
                                    <div className="col col-12 col-md-6 col-lg-4 col-title-3 text-center">
                                        <h2 className="m-0">
                                            BẠN QUAN TÂM GÌ ĐẾN DỊCH VỤ CỦA CHÚNG TÔI
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <BuyPackage />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default WebHosting