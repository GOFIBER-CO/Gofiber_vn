import LargeBannerPage from '@/src/components/banner/BannerPage'
import React from 'react'

function Introduction() {
    const banner = {
        large: 'https://gofiber.vn/wp-content/uploads/2023/01/bg-gioithieu.png',
        medium: 'https://gofiber.vn/wp-content/uploads/2023/01/tablet-gioithieu.png',
        small: 'https://gofiber.vn/wp-content/uploads/2023/01/mobile-gioithieu.png'
    }

    return (
        <div id="introduction">
            <section>
                <LargeBannerPage image={banner} name="Giới thiệu" />
            </section>
            <div className='container'>
                <div className='row justify-content-center mt-4'>
                    <h2 className='h2 mt-4 text-center color_primary'>Công ty TNHH Công Nghệ Phần Mềm GOFIBER</h2>
                </div>

                <section className='mt-4'>
                    <div className="section-content position-relative">
                        <div className="row justify-content-center">
                            <div className="col col-12 col-lg-8">
                                <div className="col-inner">
                                    <div className="row row-title justify-content-center">
                                        <div className="col col-11 col-md-5 col-title-1 text-center">
                                            <h2 className="m-0">SỨ MỆNH VÀ TẦM NHÌN</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="describe mt-4">
                                Tiền thân là đơn vị giàu kinh nghiệm hoạt động trong lĩnh vực thiết kế website giá rẻ và các dịch vụ SEO tổng thể cũng như chuyên sâu.
                                GOFIBER tự hào đã hỗ trợ đắc lực và hiệu quả cho các đối tượng khách hàng là cá nhân, tổ chức và cả doanh nghiệp.
                            </p>
                            <p className='describe'>
                                Bước sang năm 2023, chúng tôi cảm thấy đã đến lúc phát huy thêm nữa các giá trị của mình, nâng tầm các dịch vụ sẵn có lên một tầm cao mới đồng thời xây
                                dựng thêm các dịch vụ chuyên nghiệp khác, đặc biệt là dịch vụ <a href='/' className='text-primary'>Cho thuê hosting và máy chủ VPS hiệu năng cao.</a>
                            </p>
                            <p className='describe'>
                                Với nguồn nhân lực chất lượng, không ngừng được nâng cao và phát triển, GOFIBER tự tin sẽ có thể đáp ứng
                                gần như mọi nhu cầu của khách hàng. Cho dù đó là nhu cầu cơ sở hạ tầng như hosting, máy chủ, VPS hay dịch
                                vụ thiết kế website và hỗ trợ
                                SEO tổng thể và chuyên sâu, chúng tôi cam kết sẽ làm 100% khách hàng của mình hài lòng.
                            </p>
                        </div>
                        <div className="row">
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Introduction