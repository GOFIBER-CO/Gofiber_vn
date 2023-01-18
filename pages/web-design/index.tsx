import React from 'react';
import Image from 'next/image';
import OurProducts from '@/src/containers/web-design/OurProducts';
import BannerPage from '@/src/components/banner/BannerPage';
import Contact from '@/src/containers/home/contact';

function webDesign() {
  const banner = {
    large:
      'https://gofiber.vn/wp-content/uploads/2022/12/banner-thietketweb.png',
    medium: 'https://gofiber.vn/wp-content/uploads/2022/12/bg-thietkeweb-1.png',
    small: 'https://gofiber.vn/wp-content/uploads/2022/12/bg-thietkeweb-1.png',
  };

  return (
    <>
      <BannerPage image={banner} key="1" name="Thiết kế website" />
      <div id="how__to">
        <div className="container">
          <div className="row" style={{ padding: '5% 7% 0% 7%' }}>
            <div className="col-12 how__to_title pb-2">
              <div className="how__to_title_bg">
                <span className="how__to_title_text">
                  THIẾT KẾ WEBSITE CHUYÊN NGHIỆP
                </span>
                <Image
                  src={require('@/public/images/webdesign/element1.png')}
                  alt=""
                  // style={{ zIndex: '10' }}
                  className="how__to_image_absolute"
                />
                <Image
                  src={require('@/public/images/webdesign/element2.png')}
                  alt=""
                  // style={{ zIndex: '10' }}
                  className="how__to_image_absolute_right"
                />
              </div>
            </div>
            <div className="col-12 how__to_text">
              Dù là một doanh nghiệp non trẻ nhưng những nhân sự mà GOFIBER đang
              có đều là những chuyên gia trong lĩnh vực, đặc biệt là Thiết kế
              website giá rẻ. GOFIBER vui mừng và vinh dự khi được rất đông các
              khách hàng có nhu cầu xây dựng website kinh doanh tin tưởng và
              trao cho chúng tôi cơ hội được phục vụ.
            </div>

            <div className="col-12 how__to_text">
              Mỗi một dự án hay sản phẩm mà GOFIBER hoàn thiện đều trải qua một
              quy trình chuẩn mực được đảm bảo bởi các nhân sự cực kỳ năng nổ và
              tài năng.
            </div>
            <div className="col-12 how__to_text">
              Nhận thấy nhu cầu của các khách hàng vẫn còn rất lớn, nhất là cho
              các website phổ thông như website giới thiệu doanh nghiệp, website
              công ty, website bán hàng… GOFIBER đã đi trước và cho xây dựng sẵn
              kho mẫu website để tiện lợi hơn cho khách hàng trong việc lựa chọn
              và xây dựng website của mình.
            </div>
            <div className="col-12 how__to_title pb-2">
              <div className="how__to_title_bg">
                <span className="how__to_title_text">
                  NHỮNG LỢI ÍCH CHỌN WEBSITE THEO MẪU CÓ SẴN
                </span>
                <Image
                  src={require('@/public/images/webdesign/element1.png')}
                  alt=""
                  // style={{ zIndex: '10' }}
                  className="how__to_image_absolute"
                />
                <Image
                  src={require('@/public/images/webdesign/element2.png')}
                  alt=""
                  // style={{ zIndex: '10' }}
                  className="how__to_image_absolute_right"
                />
              </div>
            </div>
            <h4 style={{ color: 'rgb(0, 172, 215)', marginBottom: '25px' }}>
              01. NỀN TẢNG WEBSITE ĐƯỢC THIẾT KẾ DÀNH RIÊNG CHO NGƯỜI VIỆT
            </h4>
            <div className="col-12 how__to_text">
              Nếu như ở các đơn vị khác thì mẫu website có sẵn thường phục vụ
              cho người nước ngoài và được thiết kế bởi các chuyên gia nước
              ngoài. Điều này có một bất lợi là gu thẩm mỹ và góc nhìn về sự
              thuận tiện của họ thường khác với người Việt rất nhiều.
            </div>
            <div className="col-12 how__to_text">
              Với các mẫu website xây dựng bởi GOFIBER dành cho thị trường Việt
              thì phong cách thiết kế và sự tiện lợi đáp ứng hầu hết thói quen
              của người Việt. Khách hàng của bạn sẽ dễ dàng hơn rất nhiều trong
              việc lướt web và đưa ra quyết định mang lại sự chuyển đổi có giá
              trị.
            </div>

            {/* /// */}
            <h4 style={{ color: 'rgb(0, 172, 215)', marginBottom: '25px' }}>
              02.CHI PHÍ THẤP NHƯNG HIỆU QUẢ LẠI CAO
            </h4>
            <div className="col-12 how__to_text">
              Với những dự án xây dựng và thiết kế website giá rẻ dựa trên các
              mẫu có sẵn thì chi phí thường được tiết kiệm hơn rất nhiều. Việc
              tiết kiệm chi phí chủ yếu nhờ vào việc không phải phát triển từ
              đầu mà chủ yếu là hiệu chỉnh lại cái có sẵn cho phù hợp với ngách
              của website.
            </div>
            <div className="col-12 how__to_text">
              Khi phát triển trên cái có sẵn cũng đồng nghĩa phía developer có
              nhiều thời gian hơn cho việc cấu hình các tính năng quan trọng
              khác và nhờ vậy mà hiệu quả đạt được của dự án thường cao hơn.
            </div>

            {/* /// */}
            <h4 style={{ color: 'rgb(0, 172, 215)', marginBottom: '25px' }}>
              03. SỬ DỤNG NỀN TẢNG WORDPRESS
            </h4>
            <div className="col-12 how__to_text">
              WordPress là một nền tảng lý tưởng và sẵn có cho hầu hết mọi nhu
              cầu từ cơ bản đến nâng cao. Một CMS có số người dùng ‘khủng’ nhất
              hiện nay và được support bởi lực lượng developer hùng hậu, tài
              năng và kinh nghiệm từ khắp nơi trên thế giới.
            </div>
            <div className="col-12 how__to_text">
              Nhờ vào các ưu thế đó bạn rất dễ dàng tìm được người hỗ trợ về sau
              cho dự án của mình. Nếu bạn không có thời gian cho việc quản trị
              website, làm SEO, làm nội dung thì dịch vụ chăm sóc website chuyên
              nghiệp của GOFIBER sẵn sàng hỗ trợ bạn. Nếu bạn không thích
              GOFIBER thì cũng không sao, hầu như tất cả nhân sự SEO, Content và
              Marketing ngày nay đều am hiểu về WordPress và có thể hỗ trợ bạn.
            </div>
          </div>
        </div>
      </div>
      <OurProducts />

      <Contact />
    </>
  );
}

export default webDesign;
