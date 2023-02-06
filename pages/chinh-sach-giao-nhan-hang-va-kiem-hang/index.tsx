import BannerPage from '@/src/components/banner/BannerPage'
import TextIconPrice from '@/src/components/web-hosting/TextIconPrice'
import { POLICY_IMAGE } from '@/src/utils'
import React from 'react'

const banner = {
    large: POLICY_IMAGE.DELIVERY_PRODUCT.BANNER_LARGE,
    medium: POLICY_IMAGE.DELIVERY_PRODUCT.BANNER_MEDIUM,
    small: POLICY_IMAGE.DELIVERY_PRODUCT.BANNER_SMALL
}

function DeliveryProductPolicyPage() {
    return (
        <div id='service'>
            <section>
                <BannerPage styleLinkName={{ lineHeight: '1.3' }} image={banner} bannerLinkLargeWidth="40%" bannerLinkMediumWidth='70%' bannerLinkSmallWidth='90%' name="Chính sách giao, nhận hàng và kiểm hàng" />
            </section>
            <div className="container">
                <section className="section-policy">
                    <div className='row justify-content-center'>
                        <h1 className='h2 mb-4 text-center color_primary text-uppercase'>
                            CHÍNH SÁCH GIAO, NHẬN HÀNG VÀ KIỂM HÀNG
                        </h1>

                        <div className='col col-12 col-md-10'>
                            <h3 className='h3'>1. Phạm vi áp dụng:</h3>
                            <p className='mt-2 extra'>
                                Phạm vi áp dụng: tất cả mọi tỉnh thành trên cả nước
                            </p>
                        </div>

                        <div className='col col-12 col-md-10 mt-4'>
                            <h3 className='h3'>2. Thời gian giao – nhận hàng</h3>
                            <TextIconPrice content='Đơn hàng sau khi được tiếp nhận xử lý xong sẽ được giao ngay trong vòng 24h hoặc theo tiến độ hợp đồng.' color='blue' />
                            <TextIconPrice content='Đối với khách hàng ở tỉnh xa, sau khi tiếp nhận đơn hàng thời gian nhận hàng dự kiến từ 3 - 5 ngày. Tuy nhiên, tùy vào tình trạng hàng hóa điều kiện thời tiết,... mà ngày nhận hàng sẽ có sự thay đổi.' color='blue' />
                            <TextIconPrice content='Thời gian giao hàng được tính từ lúc hoàn tất thủ tục đặt hàng với nhân viên tư vấn đến khi nhận được hàng.' color='blue' />
                            <TextIconPrice content='Đem lại lợi thế kinh doanh trực tuyến thực sự cho doanh nghiệp' color='blue' />
                        </div>

                        <div className='col col-12 col-md-10 mt-4'>
                            <h3 className='h3'>3. Hình thức giao hàng:</h3>
                            <TextIconPrice content='Đối với khách tỉnh xa: Sử dụng dịch vụ giao hàng.' color='blue' />
                            <TextIconPrice content='Đối với khách nội thành/ ngoại thành: Sử dụng dịch vụ giao hàng.' color='blue' />
                        </div>

                        <div className='col col-12 col-md-10 mt-4'>
                            <p>
                                Phân định trách nhiệm của thương nhân, tổ chức cung ứng dịch vụ logistics về cung cấp chứng từ hàng hóa trong quá trình giao nhận.
                            </p>
                            <p>
                                Đơn vị cung cấp dịch vụ logistic có trách nhiệm cung cấp bằng chứng giao nhận hàng hóa (ảnh chụp và chữ ký người nhận hàng) tới người mua và người bán khi có yêu cầu.
                            </p>
                        </div>

                        <div className='col col-12 col-md-10 mt-4'>
                            <h3 className='h3'>4. Chính sách kiểm hàng: (chọn 1 trong 2 trường hợp)</h3>
                            <p className='extra mt-2'>
                                Trường hợp cho kiểm tra hàng:
                            </p>
                            <TextIconPrice content='Khi nhận hàng quý khách có quyền yêu cầu nhân viên giao hàng mở cho kiểm.' color='blue' />
                            <TextIconPrice content='Trường hợp đơn hàng đặt mà bên bán giao không đúng loại sản phẩm quý khách có quyền trả hàng và không không thanh toán tiền.' color='blue' />
                            <TextIconPrice content='Trường hợp quý khách đã thanh toán trước nhưng đơn hàng không đúng quý khách yêu cầu hoàn toàn hoặc giao lại đơn mới như đã đặt' color='blue' />
                            <TextIconPrice content='Trong trường hợp yêu cầu hoàn tiền hoặc đổi đơn quý khách liên hệ qua Email: chief.vuoncuabe@gmail.com hoặc số điện thoại 0912277022 chúng tôi cam kết sẽ giải quyết mọi yêu cầu của quý khách.' color='blue' />

                            <p className='extra mt-2'>
                                Trường hợp không cho kiểm tra hàng:
                            </p>
                            <p>
                                Bên Shop KHÔNG CHO XEM / KIỂM TRA HÀNG (Không đồng kiểm). Tránh trường hợp bị
                                tráo đổi hàng hóa bên trong, Khách nhận hàng xong CÓ VẤN ĐỀ thì gọi ngay 0912277022
                                để Shop xử lý & sẽ đổi trả miễn phí. Xin cảm ơn!
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DeliveryProductPolicyPage