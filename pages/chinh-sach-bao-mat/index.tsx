import BannerPage from '@/src/components/banner/BannerPage'
import TextIconPrice from '@/src/components/web-hosting/TextIconPrice'
import { POLICY_IMAGE } from '@/src/utils'
import React from 'react'

const banner = {
    large: POLICY_IMAGE.INFORMATION_SECURITY.BANNER_LARGE,
    medium: POLICY_IMAGE.INFORMATION_SECURITY.BANNER_MEDIUM,
    small: POLICY_IMAGE.INFORMATION_SECURITY.BANNER_SMALL
}
function InformationSecurityPage() {
    return (
        <div id='service'>
            <section>
                <BannerPage image={banner} bannerLinkLargeWidth="33%" bannerLinkMediumWidth='54%' name="Chính sách bảo mật" />
            </section>
            <div className="container">
                <section className="section-policy">
                    <div className='row justify-content-center'>
                        <h1 className='h2 mb-4 text-center color_primary text-uppercase'>
                            CHÍNH SÁCH BẢO MẬT THÔNG TIN
                        </h1>
                        <div className='col col-12 col-md-10'>
                            <h3 className='h3'>1. Mục đích thu thập thông tin cá nhân</h3>
                            <p className='mt-2 extra'>
                                Mục đích của việc thu thập thông tin khách hàng nhằm liên quan đến các vấn đề như:
                            </p>
                            <TextIconPrice content='Hỗ trợ khách hàng: mua hàng, thanh toán, giao hàng.' color='blue' />
                            <TextIconPrice content='Cung cấp thông tin sản phẩm, các dịch vụ và hỗ trợ theo yêu cầu của khách hàng' color='blue' />
                            <TextIconPrice content='Gửi thông báo các chương trình, sản phẩm mới nhất của chúng tôi.' color='blue' />
                            <TextIconPrice content='Đem lại lợi thế kinh doanh trực tuyến thực sự cho doanh nghiệp' color='blue' />
                        </div>

                        <div className='col col-12 col-md-10 mt-4'>
                            <h3 className='h3'>2. Phạm vi thu thập thông tin</h3>
                            <p className='mt-2 extra'>
                                Chúng tôi thu thập thông tin cá nhân của khách hàng khi tiến hàng đặt hàng trên website:
                            </p>
                            <TextIconPrice content='Họ tên' color='blue' />
                            <TextIconPrice content='Địa chỉ email' color='blue' />
                            <TextIconPrice content='Số điện thoại' color='blue' />
                            <TextIconPrice content='Địa chỉ' color='blue' />
                        </div>

                        <div className='col col-12 col-md-10 mt-4'>
                            <h3 className='h3'>3. Thời gian lưu trữ thông tin</h3>
                            <p className='mt-2 extra'>
                                Dữ liệu cá nhân của Thành viên sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự
                                thành viên đăng nhập và thực hiện hủy bỏ.
                                Còn lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật trên máy chủ của gofiber.vn.
                            </p>
                        </div>

                        <div className='col col-12 col-md-10 mt-4'>
                            <h3 className='h3'>4. Những người hoặc tổ chức có thể được tiếp cận với thông tin đó</h3>
                            <TextIconPrice content='Đối với các bên vận chuyển, sẽ cung cấp các thông tin để phục vụ cho việc giao nhận hàng hóa như: Tên, địa chỉ và số điện thoại.' color='blue' />
                            <TextIconPrice content='Đối với nhân viên công ty sẽ có các bộ phận chuyên trách để phục vụ việc chăm sóc khách hàng trong quá trình sử dụng sản phẩm.' color='blue' />
                            <TextIconPrice content='Các chương trình có tính liên kết, đồng thực hiện, thuê ngoài cho các mục đích được nêu tại Mục 1 và luôn áp dụng các yêu cầu bảo mật thông tin cá nhân.' color='blue' />
                            <TextIconPrice content='Yêu cầu pháp lý: Chúng tôi có thể tiết lộ các thông tin cá nhân nếu điều đó do luật pháp yêu cầu và việc tiết lộ như vậy là cần thiết một cách hợp lý để tuân thủ các quy trình pháp lý.' color='blue' />
                            <TextIconPrice content='Chuyển giao kinh doanh (nếu có): trong trường hợp sáp nhập, hợp nhất toàn bộ hoặc một phần với công ty khác, người mua sẽ có quyền truy cập thông tin được chúng tôi lưu trữ, duy trì trong đó bao gồm cả thông tin cá nhân. ' color='blue' />
                        </div>

                        <div className='col col-12 col-md-10 mt-4'>
                            <h3 className='h3'>5. Địa chỉ của đơn vị thu thập và quản lý thông tin</h3>
                            <TextIconPrice content='Tên doanh nghiệp: GOFIBER' color='blue' />
                            <TextIconPrice content='Thành lập và hoạt động theo Giấy chứng nhận đăng ký doanh nghiệp số: 0317495104 do Chi cục thuế Quận Tân Phú cấp ngày 28 tháng 09 năm 2022.' color='blue' />
                            <TextIconPrice content='Trụ sở chính: Số 131, Đường CN11, P. Sơn Kỳ, Q. Tân Phú, TP.HCM' color='blue' />
                        </div>

                        <div className='col col-12 col-md-10 mt-4'>
                            <h3 className='h3'>6. Phương thức và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu:</h3>
                            <p className='mt-2 extra'>
                                Nếu quý khách có bất cứ về yêu cầu nào về việc tiếp cận và chỉnh sửa thông
                                tin cá nhân đã cung cấp, quý khách có thể:
                            </p>
                            <TextIconPrice content='Gọi điện trực tiếp về số điện thoại: 0989.07.85.07' color='blue' />
                            <TextIconPrice content='Gửi mail: Sales@gofiber.vn' color='blue' />
                        </div>

                        <div className='col col-12 col-md-10 mt-4'>
                            <h3 className='h3 text-center'>
                                Cơ chế tiếp nhận và giải quyết khiếu nại của người tiêu dùng liên quan
                                đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo:
                            </h3>
                            <p>
                                Tại gofiber.vn, việc bảo vệ thông tin cá nhân của bạn là rất quan trọng,
                                bạn được đảm bảo rằng thông tin cung cấp cho chúng tôi sẽ được mật gofiber.vn
                                cam kết không chia sẻ, bán hoặc cho thuê thông tin cá nhân của bạn cho bất kỳ người nào khác.
                                gofiber.vncam kết chỉ sử dụng các thông tin của bạn vào các trường hợp sau:
                            </p>
                            <TextIconPrice content='Nâng cao chất lượng dịch vụ dành cho khách hàng' color='blue' />
                            <TextIconPrice content='Giải quyết các tranh chấp, khiếu nại' color='blue' />
                            <TextIconPrice content='Khi cơ quan pháp luật có yêu cầu.' color='blue' />
                            <p>
                                gofiber.vn hiểu rằng quyền lợi của bạn trong việc
                                bảo vệ thông tin cá nhân cũng chính là trách nhiệm của chúng tôi nên trong bất kỳ trường hợp có thắc
                                mắc, góp ý nào liên quan đến chính sách bảo mật của gofiber.vn, và liên quan đến việc thông tin cá
                                nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo vui lòng liên hệ qua số hotline 0989.07.85.07 hoặc email:
                                Sales@gofiber.vn để xử lý và làm việc trực tiếp với khách hàng.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default InformationSecurityPage