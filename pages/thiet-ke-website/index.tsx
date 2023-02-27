import React from "react";
import BannerPage from "@/src/components/banner/BannerPage";
import Contact from "@/src/containers/home/contact";
import TitleWithLine from "@/src/components/TitleWithLine";
import OurProducts from "@/src/containers/web-design/OurProducts";
import { INTRODUCE_IMAGE, WEB_DESIGN_IMAGE } from "@/src/utils";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { SeoApi } from "@/src/api/seo";
import parse from 'html-react-parser';
import BannerV2Page from "@/src/components/banner/BannerV2Page";

type Props = {
  tags: any[];
};

function WebDesign({ tags }: Props) {
  const banner = {
    large: WEB_DESIGN_IMAGE.BANNER_LARGE,
    medium: WEB_DESIGN_IMAGE.BANNER_MEDIUM,
    small: WEB_DESIGN_IMAGE.BANNER_SMALL,
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://gofiber.vn/thiet-ke-website" />
        {tags.map((tag, index) => (
          <React.Fragment key={index}>{parse(tag)}</React.Fragment>
        ))}
      </Head>
      <div id="web-design">
        <BannerV2Page
          styleLinkName={{ maxWidth: "400px" }}
          image= {banner.large}
          imageDesktop={banner.large}
          imageTablet={banner.medium}
          imageSmall={banner.small}
          name="Thiết kế Website"
          extra="Những giao diện website mà gofiber.vn cung cấp luôn làm hài lòng khách hàng. Sự hài lòng của khách hàng là động lực để chúng tôi phát triển"
        />
        <div className="container">
          <section className="section-design">
            <div className="section-content position-relative">
              <div className="row justify-content-center">
                <div className="col col-12 col-lg-6">
                  <TitleWithLine title="THIẾT KẾ WEBSITE CHUYÊN NGHIỆP" />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col col-12 col-md-10">
                  <p>
                    Dù là một doanh nghiệp non trẻ nhưng những nhân sự mà
                    GOFIBER đang có đều là những chuyên gia trong lĩnh vực, đặc
                    biệt là Thiết kế website giá rẻ. GOFIBER vui mừng và vinh dự
                    khi được rất đông các khách hàng có nhu cầu xây dựng website
                    kinh doanh tin tưởng và trao cho chúng tôi cơ hội được phục
                    vụ.
                  </p>
                  <p>
                    Mỗi một dự án hay sản phẩm mà GOFIBER hoàn thiện đều trải
                    qua một quy trình chuẩn mực được đảm bảo bởi các nhân sự cực
                    kỳ năng nổ và tài năng.
                  </p>
                  <p>
                    Nhận thấy nhu cầu của các khách hàng vẫn còn rất lớn, nhất
                    là cho các website phổ thông như website giới thiệu doanh
                    nghiệp, website công ty, website bán hàng… GOFIBER đã đi
                    trước và cho xây dựng sẵn kho mẫu website để tiện lợi hơn
                    cho khách hàng trong việc lựa chọn và xây dựng website của
                    mình.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-design">
            <div className="section-content position-relative">
              <div className="row justify-content-center">
                <div className="col col-12 col-md-8 col-lg-6">
                  <TitleWithLine title="NHỮNG LỢI ÍCH CHỌN WEBSITE THEO MẪU CÓ SẴN" />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col col-12 col-md-10">
                  <h3 className="h3 color_primary mb-3">
                    01. NỀN TẢNG WEBSITE ĐƯỢC THIẾT KẾ DÀNH RIÊNG CHO NGƯỜI VIỆT
                  </h3>

                  <p>
                    Nếu như ở các đơn vị khác thì mẫu website có sẵn thường phục
                    vụ cho người nước ngoài và được thiết kế bởi các chuyên gia
                    nước ngoài. Điều này có một bất lợi là gu thẩm mỹ và góc
                    nhìn về sự thuận tiện của họ thường khác với người Việt rất
                    nhiều.
                  </p>
                  <p>
                    Với các mẫu website xây dựng bởi GOFIBER dành cho thị trường
                    Việt thì phong cách thiết kế và sự tiện lợi đáp ứng hầu hết
                    thói quen của người Việt. Khách hàng của bạn sẽ dễ dàng hơn
                    rất nhiều trong việc lướt web và đưa ra quyết định mang lại
                    sự chuyển đổi có giá trị.
                  </p>

                  <h3 className="h3 color_primary  mt-4 mb-3">
                    02.CHI PHÍ THẤP NHƯNG HIỆU QUẢ LẠI CAO
                  </h3>
                  <p>
                    Với những dự án xây dựng và thiết kế website giá rẻ dựa trên
                    các mẫu có sẵn thì chi phí thường được tiết kiệm hơn rất
                    nhiều. Việc tiết kiệm chi phí chủ yếu nhờ vào việc không
                    phải phát triển từ đầu mà chủ yếu là hiệu chỉnh lại cái có
                    sẵn cho phù hợp với ngách của website.
                  </p>
                  <p>
                    Khi phát triển trên cái có sẵn cũng đồng nghĩa phía
                    developer có nhiều thời gian hơn cho việc cấu hình các tính
                    năng quan trọng khác và nhờ vậy mà hiệu quả đạt được của dự
                    án thường cao hơn.
                  </p>

                  <h3 className="h3 color_primary mt-4 mb-3">
                    03. SỬ DỤNG NỀN TẢNG WORDPRESS
                  </h3>
                  <p>
                    WordPress là một nền tảng lý tưởng và sẵn có cho hầu hết mọi
                    nhu cầu từ cơ bản đến nâng cao. Một CMS có số người dùng
                    ‘khủng’ nhất hiện nay và được support bởi lực lượng
                    developer hùng hậu, tài năng và kinh nghiệm từ khắp nơi trên
                    thế giới.
                  </p>
                  <p>
                    Nhờ vào các ưu thế đó bạn rất dễ dàng tìm được người hỗ trợ
                    về sau cho dự án của mình. Nếu bạn không có thời gian cho
                    việc quản trị website, làm SEO, làm nội dung thì dịch vụ
                    chăm sóc website chuyên nghiệp của GOFIBER sẵn sàng hỗ trợ
                    bạn. Nếu bạn không thích GOFIBER thì cũng không sao, hầu như
                    tất cả nhân sự SEO, Content và Marketing ngày nay đều am
                    hiểu về WordPress và có thể hỗ trợ bạn.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section-other-service">
            <div className="section-content position-relative">
              <div className="row justify-content-center"></div>
              <div className="row align-items-center mt-4 flex-row-reverse">
                <div className="col col-12 col-lg-6 text-center">
                  <div className="img">
                    <img
                      width={1000}
                      height={500}
                      src={INTRODUCE_IMAGE.CHEAP_WEBSITE}
                      alt="Các dịch vụ khác"
                    />
                  </div>
                </div>
                <div className="col col-12 col-lg-6">
                  <p>
                    Dù là một doanh nghiệp non trẻ nhưng những nhân sự mà
                    GOFIBER đang có đều là những chuyên gia trong lĩnh vực, đặc
                    biệt là Thiết kế website giá rẻ. GOFIBER vui mừng và vinh dự
                    khi được rất đông các khách hàng có nhu cầu xây dựng website
                    kinh doanh tin tưởng và trao cho chúng tôi cơ hội được phục
                    vụ.
                  </p>
                  <p className="mt-4">
                    Mỗi một dự án hay sản phẩm mà GOFIBER hoàn thiện đều trải
                    qua một quy trình chuẩn mực được đảm bảo bởi các nhân sự cực
                    kỳ năng nổ và tài năng.
                  </p>
                  <p className="mt-4">
                    Nhận thấy nhu cầu của các khách hàng vẫn còn rất lớn, nhất
                    là cho các website phổ thông như website giới thiệu doanh
                    nghiệp, website công ty, website bán hàng… GOFIBER đã đi
                    trước và cho xây dựng sẵn kho mẫu website để tiện lợi hơn
                    cho khách hàng trong việc lựa chọn và xây dựng website của
                    mình.
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const params: any = {
      link: "/thiet-ke-website",
      domain: process.env.NEXT_PUBLIC_DOMAIN,
    };

    const response = await SeoApi.getSeoByLink(params);

    const tags = response?.data?.data?.tags;

    return {
      props: {
        tags: tags?.map((item: any) => item?.value) || [],
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
