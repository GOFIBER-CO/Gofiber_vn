import { SeoApi } from "@/src/api/seo";
import BannerPage from "@/src/components/banner/BannerPage";
import BannerV2Page from "@/src/components/banner/BannerV2Page";
import TextIconPrice from "@/src/components/web-hosting/TextIconPrice";
import { POLICY_IMAGE } from "@/src/utils";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import React from "react";
import parse from 'html-react-parser';

const banner = {
  large: POLICY_IMAGE.PAYMENT.BANNER_LARGE,
  medium: POLICY_IMAGE.PAYMENT.BANNER_MEDIUM,
  small: POLICY_IMAGE.PAYMENT.BANNER_SMALL,
};

type Props = {
  tags: any[];
};

function PaymentPolicyPage({ tags }: Props) {
  return (
    <>
      <Head>
        <title>Chính sách thanh toán</title>
        <link rel="canonical" href="https://gofiber.vn/chinh-sach-thanh-toan" />
        {tags.map((tag, index) => (
          <React.Fragment key={index}>{parse(tag)}</React.Fragment>
        ))}
      </Head>
      <div id="service">
        <BannerV2Page
          image="https://gofiber.b-cdn.net/new-design/chinh-sach-thanh-toan/desktop-chinh-sach-thanh-toan.png"
          name="Chinh sách thanh toán"
          extra="Những giao diện website mà gofiber.vn cung cấp luôn làm hài lòng khách hàng. Sự hài lòng của khách hàng là động lực để chúng tôi phát triển"
        />
        <div className="container">
          <section className="section-policy">
            <div className="row justify-content-center">
              <h2 className="h2 mb-4 text-center color_primary text-uppercase">
                CHÍNH SÁCH THANH TOÁN
              </h2>
              <div className="col col-12 col-md-10">
                <h3 className="h3">
                  1. Thanh toán bằng tiền mặt tại văn phòng Công ty GoFiber
                </h3>
                <p className="mt-2 extra">
                  Quý khách đến và thực hiện thanh toán bằng tiền mặt trực tiếp
                  tại văn phòng Công ty GoFiber tại các địa chỉ sau:
                </p>
                <TextIconPrice
                  content="Số 131, Đường CN11, P. Sơn Kỳ, Q. Tân Phú, TP.HCM."
                  color="blue"
                />
              </div>

              <div className="col col-12 col-md-10 mt-4">
                <h3 className="h3">2. Thanh toán qua chuyển khoản</h3>
                <p className="mt-2 extra">Thông tin thanh toán:</p>
                <TextIconPrice content="Số TK: 060260311991" color="blue" />
                <TextIconPrice
                  content="Tên TK: Nguyễn Trung Hiếu"
                  color="blue"
                />
                <TextIconPrice
                  content="Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank)"
                  color="blue"
                />
                <p>
                  Quý khách thực hiện chuyển khoản vào một trong các tài khoản
                  hiển thị bên tay phải, với số tiền chính xác kèm theo nội dung
                  chuyển khoản theo đúng cú pháp là HD{"<"}Số hoá đơn{">"}. Ví
                  dụ số hoá đơn là #100149 thì cú pháp sẽ là HD100149.
                </p>
                <p>
                  Nếu ghi đúng cú pháp, dịch vụ và hoá đơn sẽ được tự động kích
                  hoạt.
                </p>
              </div>

              {/* <div className="col col-12 col-md-10">
                <TextIconPrice
                  content="Thanh toán bằng tiền mặt: Số 131 CN11, Phường Sơn Kỳ, quận Tân Phú, thành phố Hồ Chí Minh."
                  color="blue"
                />
                <TextIconPrice
                  content="Thanh toán bằng hình thức chuyển khoản: Số tài khoản 88585888 - ngân hàng ACB - chủ tài khoản CTY TNHH Công nghệ phần mềm GOFIBER."
                  color="blue"
                />
                <p className="mt-4">
                  Sau khi nhận được chuyển khoản chậm nhất sau 12 tiếng chúng
                  tôi sẽ gọi điện xác nhận với khách hàng
                </p>
                <p className="mt-4">
                  Công ty khi nhận được thanh toán sẽ xuất hóa đơn hoặc chứng từ
                  gởi qua mail cho khách hàng trong quá trình mua hàng.
                </p>
              </div> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default PaymentPolicyPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const params: any = {
      link: "/chinh-sach-thanh-toan",
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
