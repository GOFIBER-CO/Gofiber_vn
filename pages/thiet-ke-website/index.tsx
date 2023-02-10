import React from 'react';
import BannerPage from '@/src/components/banner/BannerPage';
import Contact from '@/src/containers/home/contact';
import TitleWithLine from '@/src/components/TitleWithLine';
import OurProducts from '@/src/containers/web-design/OurProducts';
import { WEB_DESIGN_IMAGE } from '@/src/utils';
import Head from 'next/head';

function WebDesign() {
  const banner = {
    large: WEB_DESIGN_IMAGE.BANNER_LARGE,
    medium: WEB_DESIGN_IMAGE.BANNER_MEDIUM,
    small: WEB_DESIGN_IMAGE.BANNER_SMALL
  }

  return (
    <>
      <Head>
        <link rel="canonical" href="https://gofiber.vn/thiet-ke-website" />
      </Head>
      <div id="web-design">

        <section>
          <BannerPage bannerLinkLargeWidth='30%' bannerLinkMediumWidth='50%' image={banner} key="1" name="Thiết kế website" />
        </section>

        <div className='container'>

          <section className='section-design'>
            <div className="section-content position-relative">
              <div className="row justify-content-center">
                <div className="col col-12 col-lg-6">
                  <TitleWithLine title='THIẾT KẾ WEBSITE CHUYÊN NGHIỆP' />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className='col col-12 col-md-10'>
                  <p>
                    Dù là một doanh nghiệp non trẻ nhưng những nhân sự mà GOFIBER đang có đều là những
                    chuyên gia trong lĩnh vực, đặc biệt là Thiết kế website giá rẻ. GOFIBER vui mừng và vinh dự khi được rất đông các
                    khách hàng có nhu cầu xây dựng website kinh doanh tin tưởng và trao cho chúng tôi cơ hội được phục vụ.
                  </p>
                  <p>
                    Mỗi một dự án hay sản phẩm mà GOFIBER hoàn thiện đều trải
                    qua một quy trình chuẩn mực được đảm bảo bởi các nhân sự cực kỳ năng nổ và tài năng.
                  </p>
                  <p>
                    Nhận thấy nhu cầu của các khách hàng vẫn còn rất lớn, nhất là cho các
                    website phổ thông như website giới thiệu doanh nghiệp, website công ty, website bán hàng… GOFIBER
                    đã đi trước và cho xây dựng sẵn kho mẫu website
                    để tiện lợi hơn cho khách hàng trong việc lựa chọn và xây dựng website của mình.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className='section-design'>
            <div className="section-content position-relative">
              <div className="row justify-content-center">
                <div className="col col-12 col-md-8 col-lg-6">
                  <TitleWithLine title='NHỮNG LỢI ÍCH CHỌN WEBSITE THEO MẪU CÓ SẴN' />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className='col col-12 col-md-10'>
                  <h3 className='h3 color_primary mb-3'>
                    01. NỀN TẢNG WEBSITE ĐƯỢC THIẾT KẾ DÀNH RIÊNG CHO NGƯỜI VIỆT
                  </h3>

                  <p>
                    Nếu như ở các đơn vị khác thì mẫu website có sẵn thường phục vụ cho người nước ngoài và được thiết kế bởi các chuyên gia nước ngoài. Điều này có một bất lợi là gu thẩm mỹ và góc nhìn về sự thuận tiện của họ thường khác với người Việt rất nhiều.
                  </p>
                  <p>
                    Với các mẫu website xây dựng bởi GOFIBER dành cho thị trường Việt thì phong cách thiết kế và sự tiện lợi đáp ứng hầu hết thói quen của người Việt. Khách hàng của bạn sẽ dễ dàng hơn rất nhiều trong việc lướt web và đưa ra quyết định mang lại sự chuyển đổi có giá trị.
                  </p>

                  <h3 className='h3 color_primary  mt-4 mb-3'>
                    02.CHI PHÍ THẤP NHƯNG HIỆU QUẢ LẠI CAO
                  </h3>
                  <p>
                    Với những dự án xây dựng và thiết kế website giá rẻ dựa trên các mẫu có sẵn thì chi phí thường được tiết kiệm hơn rất nhiều. Việc tiết kiệm chi phí chủ yếu nhờ vào việc không phải phát triển từ đầu mà chủ yếu là hiệu chỉnh lại cái có sẵn cho phù hợp với ngách của website.
                  </p>
                  <p>
                    Khi phát triển trên cái có sẵn cũng đồng nghĩa phía developer có nhiều thời gian hơn cho việc cấu hình các tính năng quan trọng khác và nhờ vậy mà hiệu quả đạt được của dự án thường cao hơn.
                  </p>

                  <h3 className='h3 color_primary mt-4 mb-3'>
                    03. SỬ DỤNG NỀN TẢNG WORDPRESS
                  </h3>
                  <p>
                    WordPress là một nền tảng lý tưởng và sẵn có cho hầu hết mọi nhu cầu từ cơ bản đến nâng cao. Một CMS có số người dùng ‘khủng’ nhất hiện nay và được support bởi lực lượng developer hùng hậu, tài năng và kinh nghiệm từ khắp nơi trên thế giới.
                  </p>
                  <p>
                    Nhờ vào các ưu thế đó bạn rất dễ dàng tìm được người hỗ trợ về sau cho dự án của mình. Nếu bạn không có thời gian cho việc quản trị website, làm SEO, làm nội dung thì dịch vụ chăm sóc website chuyên nghiệp của GOFIBER sẵn sàng hỗ trợ bạn. Nếu bạn không thích GOFIBER thì cũng không sao, hầu như tất cả nhân sự SEO, Content và Marketing ngày nay đều am hiểu về WordPress và có thể hỗ trợ bạn.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>

        <OurProducts />

        <Contact />
      </div>
    </>
  );
}

export default WebDesign;
