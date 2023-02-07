import BannerPage from '@/src/components/banner/BannerPage'
import TextIconPrice from '@/src/components/web-hosting/TextIconPrice'
import { POLICY_IMAGE } from '@/src/utils'
import React from 'react'

const banner = {
    large: POLICY_IMAGE.PAYMENT.BANNER_LARGE,
    medium: POLICY_IMAGE.PAYMENT.BANNER_MEDIUM,
    small: POLICY_IMAGE.PAYMENT.BANNER_SMALL
}

function PaymentPolicyPage() {
    return (
        <div id='service'>
            <section>
                <BannerPage image={banner} styleLinkName={{ lineHeight: '1.3' }} bannerLinkLargeWidth="40%" bannerLinkMediumWidth='54%' name="Chính sách thanh toán" />
            </section>
            <div className="container">
                <section className="section-policy">
                    <div className='row justify-content-center'>
                        <h1 className='h2 mb-4 text-center color_primary text-uppercase'>
                            CHÍNH SÁCH THANH TOÁN
                        </h1>
                        <div className='col col-12 col-md-10'>
                            <TextIconPrice content='Thanh toán bằng tiền mặt: Số 131 CN11, Phường Sơn Kỳ, quận Tân Phú, thành phố Hồ Chí Minh.' color='blue' />
                            <TextIconPrice content='Thanh toán bằng hình thức chuyển khoản: Số tài khoản 88585888 - ngân hàng ACB - chủ tài khoản CTY TNHH Công nghệ phần mềm GOFIBER.' color='blue' />
                            {/* <TextIconPrice content='Số điện thoại mua hàng + mã đơn hàng.' color='blue' /> */}
                            <p className='mt-4'>
                                Sau khi nhận được chuyển khoản chậm nhất sau 12 tiếng chúng tôi sẽ gọi điện xác nhận với khách hàng
                            </p>
                            <p className='mt-4'>
                                Công ty khi nhận được thanh toán sẽ xuất hóa đơn hoặc chứng từ gởi qua mail cho khách hàng trong quá trình mua hàng.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default PaymentPolicyPage