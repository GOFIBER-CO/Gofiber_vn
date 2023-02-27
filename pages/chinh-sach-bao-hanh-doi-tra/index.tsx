import { SeoApi } from "@/src/api/seo";
import BannerPage from "@/src/components/banner/BannerPage";
import TextIconPrice from "@/src/components/web-hosting/TextIconPrice";
import { POLICY_IMAGE } from "@/src/utils";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import React from "react";
import parse from 'html-react-parser';

const banner = {
  large: POLICY_IMAGE.GUARANTEE.BANNER_LARGE,
  medium: POLICY_IMAGE.GUARANTEE.BANNER_MEDIUM,
  small: POLICY_IMAGE.GUARANTEE.BANNER_SMALL,
};

type Props = {
  tags: any[];
};

function GuaranteePolicyPage({ tags }: Props) {
  return (
    <>
      <Head>
        {tags.map((tag, index) => (
          <React.Fragment key={index}>{parse(tag)}</React.Fragment>
        ))}
      </Head>
      <div id="service">
        <section>
          <BannerPage
            image={banner}
            styleLinkName={{ lineHeight: "1.3" }}
            bannerLinkLargeWidth="40%"
            bannerLinkMediumWidth="54%"
            name="Chính sách bảo hành, đổi trả"
          />
        </section>
        <div className="container">
          <section className="section-policy">
            <div className="row justify-content-center">
              <h1 className="h2 mb-4 text-center color_primary text-uppercase">
                CHÍNH SÁCH BẢO HÀNH, ĐỔI TRẢ
              </h1>
              <div className="col col-12 col-md-10">
                <h3 className="h3">1. Chính sách bảo hành</h3>
                <p className="mt-2 extra">
                  Thời gian bảo hành: Tất cả mặt hàng do chúng tôi cung cấp được
                  bảo hành miễn phí từ 06 tháng kể từ ngày giao hàng và lắp đặt
                  hoàn thiện.
                </p>
              </div>

              <div className="col col-12 col-md-10 mt-4">
                <h3 className="h3">2. Điều kiện bảo hành</h3>
                <TextIconPrice
                  content="Chúng tôi sẽ tiến hành bảo hành đối với mọi trục trặc kỹ thuật đối với các lỗi thuộc về khâu sản xuất và lắp đặt gây ra."
                  color="blue"
                />
                <TextIconPrice
                  content="Hàng hóa bảo hành phải còn nguyên tem bảo hành, tem sản phẩm và giấy biên nhận chứng minh là quý khách đã mua hàng từ vuoncuabe.vn."
                  color="blue"
                />
                <TextIconPrice
                  content="Đối với những hỏng hóc như: Làm vỡ, làm hỏng, gây biến dạng, để lửa gây hư hại và các trường hợp tương tự khác không thuộc phạm vị bảo hành."
                  color="blue"
                />
                <TextIconPrice
                  content="Chúng tôi vẫn có trách nhiệm sửa chữa nhưng bên mua phải thanh toán theo chi phí thực tế của vật tư linh kiện thay thế"
                  color="blue"
                />
                <TextIconPrice
                  content="Sửa chữa hoặc thay thế mới với giá ưu đãi khi hết thời hạn bảo hành."
                  color="blue"
                />
              </div>

              <div className="col col-12 col-md-10 mt-4">
                <h3 className="h3">3. Hướng dẫn yêu cầu bảo hành</h3>
                <p>
                  Quý khách có thể gọi điện tới bộ phận chăm sóc khách hàng của
                  công ty để yêu cầu bảo hành
                </p>
                <p>
                  Mọi chi tiết xin quý khách vui lòng liên hệ với chúng tôi:
                  <br />
                  Hotline: ......
                </p>
              </div>

              <div className="col col-12 col-md-10 mt-4">
                <h3 className="h3">4. Chính sách đổi trả </h3>
                <p className="extra mt-2">Phạm vi áp dụng</p>
                <p>
                  Áp dụng đổi trả hàng trong vòng 12 giờ đối với các sản phẩm bị
                  hư hỏng do lỗi vận chuyển hoặc lỗi do nhà sản xuất
                </p>
              </div>

              <div className="col col-12 col-md-10 mt-4">
                <h3 className="h3">5. Điều kiện đổi trả</h3>
                <TextIconPrice
                  content="Thời gian đổi trả: trong vòng 7 ngày kể từ ngày yêu cầu đổi trả hàng."
                  color="blue"
                />
                <TextIconPrice
                  content="Yêu cầu giữ nguyên bao bì, tem mác của sản phẩm khi đổi trả."
                  color="blue"
                />
                <TextIconPrice
                  content="Số lần đổi trả cho 1 sản phẩm là 1 lần."
                  color="blue"
                />
                <TextIconPrice
                  content="Các sản phẩm không được đổi trả: đã hết thời gian đổi trả và các sản phẩm không do lỗi của nhà vận chuyển và không do lỗi của nhà sản xuất."
                  color="blue"
                />
                <p>
                  Chúng tôi cũng rất sẵn lòng lắng nghe các góp ý và yêu cầu của
                  quý khách hàng.
                </p>
                <p>
                  Quý khách có thể liên hệ số: …………(giờ hành chính) để đóng góp
                  ý kiến của quý khách về sản phẩm và dịch vụ của chúng tôi
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default GuaranteePolicyPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const params: any = {
      link: "/chinh-sach-bao-hanh-doi-tra",
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
