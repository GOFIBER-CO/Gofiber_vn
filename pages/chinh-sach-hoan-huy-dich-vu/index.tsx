import { SeoApi } from "@/src/api/seo";
import BannerPage from "@/src/components/banner/BannerPage";
import BannerV2Page from "@/src/components/banner/BannerV2Page";
import TextIconPrice from "@/src/components/web-hosting/TextIconPrice";
import { POLICY_IMAGE } from "@/src/utils";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import React from "react";
import ReactHtmlParser from "react-html-parser";

const banner = {
  large: POLICY_IMAGE.DELIVERY_PRODUCT.BANNER_LARGE,
  medium: POLICY_IMAGE.DELIVERY_PRODUCT.BANNER_MEDIUM,
  small: POLICY_IMAGE.DELIVERY_PRODUCT.BANNER_SMALL,
};

type Props = {
  tags: any[];
};

function DeliveryProductPolicyPage({ tags }: Props) {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://gofiber.vn/chinh-sach-hoan-huy-dich-vu"
        />

        {tags.map((tag, index) => (
          <React.Fragment key={index}>{ReactHtmlParser(tag)}</React.Fragment>
        ))}
      </Head>
      <div id="service">
        <BannerV2Page
          image="https://gofiber.b-cdn.net/new-design/chinh-sach-hoan-huy-dich-vu/desktop-chinh-sach-hoan-huy-dich-vu.png"
          name="Chính sách hoàn hủy dịch vụ"
          extra="Những giao diện website mà gofiber.vn cung cấp luôn làm hài lòng khách hàng. Sự hài lòng của khách hàng là động lực để chúng tôi phát triển"
        />
        <div className="container">
          <section className="section-policy">
            <div className="row justify-content-center">
              <h1 className="h2 mb-4 text-center color_primary text-uppercase">
                CHÍNH SÁCH HOÀN HUỶ DỊCH VỤ
              </h1>

              <div className="col col-12 col-md-10">
                <h3 className="h3">1. Chính sách hoàn tiền:</h3>
                <TextIconPrice
                  content="Thời gian gửi yêu cầu hoàn tiền phải trong vòng 30 ngày kể từ ngày thanh toán dịch vụ."
                  color="blue"
                />
                <TextIconPrice
                  content="GOFIBER không hoàn tiền cho các dịch vụ bị hủy do vi phạm điều khoản Chính sách dịch vụ."
                  color="blue"
                />
                <TextIconPrice
                  content="GOFIBER chỉ hoàn tiền khi khách hàng gửi yêu cầu hoàn tiền."
                  color="blue"
                />
                <TextIconPrice
                  content="Với các hóa đơn dưới 100.000 đồng, số tiền hoàn lại sẽ được cộng vào số dư tín dụng tài khoản của quý khách tại GOFIBER. Quý khách có thể sử dụng số dư này để đăng ký hoặc gia hạn dịch vụ khác."
                  color="blue"
                />
                <TextIconPrice
                  content="Không hoàn tiền dịch vụ đăng ký tên miền và các dịch vụ liên quan đến tên miền."
                  color="blue"
                />
                <TextIconPrice
                  content="Thời gian hoàn tiền sẽ từ 3 đến 7 ngày tùy theo ngân hàng hoặc cổng thanh toán của khách hàng khi thanh toán dịch vụ."
                  color="blue"
                />
              </div>

              <div className="col col-12 col-md-10 mt-4">
                <h3 className="h3">2. Phí hoàn tiền</h3>
                <p className="mt-2 extra">
                  Nhằm đảm bảo cân bằng quyền lợi của đôi bên, chúng tôi áp dụng
                  chính sách thu phí hoàn tiền như sau:
                </p>
                <TextIconPrice
                  content="Hoàn tiền qua chuyển khoản ngân hàng: Khách hàng chịu phí giao dịch và 40.000 phí phục vụ."
                  color="blue"
                />
                <TextIconPrice
                  content="Hoàn tiền Trực tiếp: Miễn phí"
                  color="blue"
                />
              </div>

              <div className="col col-12 col-md-10 mt-4">
                <h3 className="h3">3. Hướng dẫn yêu cầu hoàn tiền</h3>
                <p className="mt-2 extra">
                  Trước khi gửi yêu cầu hoàn tiền, khách hàng phải chắc chắn
                  rằng đã backup toàn bộ dữ liệu trên Hosting/VPS/Server. Khách
                  hàng gửi yêu cầu hoàn tiền thông qua email Sales@gofiber.vn
                  hoặc đến văn phòng trực tiếp.
                </p>
                <p>
                  Trong nội dung liên hệ qua mail khách hàng có thể ghi lý do
                  nếu muốn. GOFIBER rất mong nhận được ý kiến đóng góp của khách
                  hàng nên nếu được, hãy cho chúng tôi biết chúng tôi phục vụ
                  chưa tốt ở đâu để dịch vụ ngày càng hoàn thiện hơn.
                </p>
                <p>
                  Sau đó trong vòng 24 giờ phòng kinh doanh sẽ có phản hồi lại
                  và hỗ trợ bạn hoàn tiền.
                </p>
                <p>
                  Hy vọng với chính sách này tại GOFIBER sẽ giúp khách hàng có
                  thể yên tâm trải nghiệm dịch vụ của chúng tôi.
                </p>
                <TextIconPrice
                  content="Hoàn tiền qua chuyển khoản ngân hàng: Khách hàng chịu phí giao dịch và 40.000 phí phục vụ."
                  color="blue"
                />
                <TextIconPrice
                  content="Hoàn tiền Trực tiếp: Miễn phí"
                  color="blue"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default DeliveryProductPolicyPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const params: any = {
      link: "/chinh-sach-hoan-huy-dich-vu",
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
