/* eslint-disable react/jsx-no-target-blank */
import { SeoApi } from "@/src/api/seo";
import TextImageButton from "@/src/components/button/TextImageButton";
import BasicService from "@/src/containers/homev2/basic-service";
import Feedback from "@/src/containers/homev2/feedback";
import HeaderFixed from "@/src/containers/homev2/header/HeaderFixed";
import HeaderLarge from "@/src/containers/homev2/header/HeaderLarge";
import HeaderMedium from "@/src/containers/homev2/header/HeaderMedium";
import HotCustomer from "@/src/containers/homev2/hot-customer";
import HotProduct from "@/src/containers/homev2/hot-product";
import SectionDomain from "@/src/containers/homev2/SectionDomain";
import SectionHotService from "@/src/containers/homev2/SectionHotService";
import SectionOtherService from "@/src/containers/homev2/SectionOtherService";
import SectionQuestion from "@/src/containers/homev2/SectionQuestion";
import SectionRegistryPromotion from "@/src/containers/homev2/SectionRegistryPromotion";
import WhyChoose from "@/src/containers/homev2/why-choose";
import { HOME2_IMAGE, ICON, ICON_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
import Script from "next/script";

const intraExtra = [
  {
    id: 1,
    name: "Hỗ trợ kỹ thuật 24/7",
    image: HOME2_IMAGE.EXTRA_INTRO._247,
    extra:
      "Đội ngũ kỹ thuật chuyên môn cao túc trực 24/7 mang đến sự an tâm cho khách hàng",
  },
  {
    id: 2,
    name: "Dùng thử miễn phí",
    image: HOME2_IMAGE.EXTRA_INTRO.FREE,
    extra: "Đăng ký dùng thử miễn phí 120 giờ VPS SSD trước khi quyết định mua",
  },
  {
    id: 3,
    name: "Tốc độ và bảo mật làm nền tảng",
    image: HOME2_IMAGE.EXTRA_INTRO.SPEED,
    extra:
      "Trang thiết bị và hạ tầng kỹ thuật GOFIBER được chuyển giao từ những thương hiệu nổi tiếng có tính bảo mật và ổn định cao",
  },
];

type Props = {
  tags: any[];
};

function TestPage({ tags }: Props) {
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleAdvanceMenu, setVisibleAdvanceMenu] = useState<boolean>(false);

  const handleChangeVisibleAdvanceMenu = (value: boolean) => {
    setVisibleAdvanceMenu(value);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setVisible(true);
      } else {
        setVisibleAdvanceMenu(false);
        setVisible(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY >= 200) {
          setVisible(true);
        } else {
          setVisibleAdvanceMenu(false);
          setVisible(false);
        }
      });
    };
  }, []);

  const handleGotoHotProduct = () => {
    const scroll: any = document.getElementById("section-hot-product");

    const offset = -100;
    const y = scroll.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <Head>

        <title>Giải pháp công nghệ hàng đầu</title>
        <link rel="canonical" href="https://gofiber.vn/" />
        {tags.map((tag, index) => (
          <React.Fragment key={index}>{parse(tag)}</React.Fragment>
        ))}
      </Head>
      <Script id="script" dangerouslySetInnerHTML={{
        __html: JSON.stringify(`{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "GOFIBER cung cấp những dịch vụ công nghệ gì?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hiện nay GOFIBER đang cung cấp các dịch vụ công nghệ như web hosting, server máy chủ vật lý tốc độ cao, VPS SSD giá rẻ, VPS treo game, Firewall anti DDoS, chứng chỉ SSL,... "
              }
            },
            {
              "@type": "Question",
              "name": "Chi phí ở đây đã rẻ nhất hay chưa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "“Hosting rẻ nhất Việt Nam” chưa bao giờ nằm trong chiến lược của GOFIBER. Thay vào đó chúng tôi đặt sự ưu tiên trong việc hài hòa giữa chất lượng dịch vụ và mức phí hợp lý dành cho mọi đối tượng khách hàng."
              }
            },
            {
              "@type": "Question",
              "name": "GOFIBER có hỗ trợ Domain Name Servers (DNS) trong trường hợp tôi chưa có Hosting không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Trong trường hợp bạn chưa đăng ký dịch vụ Hosting, GOFIBER sẽ hỗ trợ 1 DNS dành cho tên miền mà bạn đã đăng ký để trỏ về. Vì vậy, trong trường hợp bạn cần sự hỗ trợ hãy liên hệ với chúng tôi bằng cách mở ticket support hoặc để được hỗ trợ nhanh nhất."
              }
            },
            {
              "@type": "Question",
              "name": "Nếu không hài lòng với dịch vụ tôi có được hoàn lại phí không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Chúng tôi sẽ hoàn trả lại 100% số tiền chúng tôi đã nhận với điều kiện: lý do bạn không hài lòng là đúng hoặc bạn không vi phạm quy định sử dụng dịch vụ của chúng tôi. Xem thêm về quy định hoàn tiền tại đây."
              }
            },
            {
              "@type": "Question",
              "name": "Sau bao lâu tôi có thể sử dụng dịch vụ sau khi hoàn tất thanh toán?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hệ thống của GOFIBER tạo tài khoản và cài đặt các dịch vụ cho khách hàng hoàn toàn tự động và gần như hoàn thành ngay lập tức sau khi thanh toán cho đơn hàng được xác nhận thành công. Đối với các khách hàng sử dụng dịch vụ máy chủ ảo VPS có mở thêm yêu cầu hỗ trợ cài các panel như Aapanel hay Directadmin, thời gian để các chuyên viên hệ thống hoàn tất cài đặt thường cộng thêm từ 30-60 phút."
              }
            },
            {
              "@type": "Question",
              "name": "Tôi đang sử dụng dịch vụ hosting ở nơi khác, làm sao để chuyển sang dịch vụ của GOFIBER?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hiện tại GOFIBER đang có chính sách hỗ trợ chuyển server từ nhà cung cấp cũ của quý khách về GOFIBER hoàn toàn miễn phí. Quý khách có thể mở ticket để gửi yêu cầu cho các chuyên viên phụ trách để nhờ thực hiện chuyển data về hộ nếu muốn. Website của quý khách sau khi chuyển về được các chuyên viên kiểm tra và đảm bảo vận hành trơn tru trước khi bàn giao lại cho quý khách."
              }
            },
            {
              "@type": "Question",
              "name": "Tôi có thể nâng cấp gói dịch vụ đang sử dụng không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bất cứ lúc nào khách hàng cũng có thể chọn để nâng cấp dịch vụ đang sử dụng lên các gói cao cấp hơn. Hệ thống của GOFIBER tự động tính toán phần chi phí và quý khách chỉ phải chi trả cho phần chênh lệch giữa hai gói dịch vụ khi nâng cấp. Việc thanh toán gói dịch vụ nâng cấp theo giá mới sẽ bắt đầu vào chu kỳ gia hạn dịch vụ tiếp theo dựa trên tài khoản của khách hàng."
              }
            },
            {
              "@type": "Question",
              "name": "Tôi có thể liên hệ với GOFIBER qua đâu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "GOFIBER có đa dạng kênh liên lạc nhằm hỗ trợ khách hàng tốt nhất. Bạn có thể liên hệ với chúng tôi qua FanPage Facebook, TikTok, Email,... để được hỗ trợ tức thời, hãy liên hệ với chúng tôi qua số điện thoại 0989078507 (Tel-Viber-Zalo).Đối với các yêu cầu hỗ trợ liên quan đến các dịch vụ như dịch vụ hosting, dịch vụ máy chủ, dịch vụ máy chủ áo VPS,... chúng tôi khuyến khích khách hàng mở yêu cầu hỗ trợ qua hệ thống ticket để được hỗ trợ hiệu quả nhất và bảo mật nhất."
              }
            },
            {
              "@type": "Question",
              "name": "Các hình thức thanh toán sử dụng dịch vụ",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có 2 hình thức thanh toán:Một là, thanh toán bằng tiền mặt tại văn phòng Công ty GOFIBER: Quý khách đến và thực hiện thanh toán bằng tiền mặt trực tiếp tại văn phòng Công ty TNHH Công Nghệ Phần Mềm GOFIBER  tại địa chỉ: Số 131, Đường CN11, P. Sơn Kỳ, Q. Tân Phú, TP.HCM). Hai là, thanh toán qua hình thức chuyển khoản. Khách hàng có thể thanh toán dịch vụ qua chuyển khoản ngân hàng, VISA, ví Momo, QR code."
              }
            },
            {
              "@type": "Question",
              "name": "Tôi lỡ quên gia hạn dịch vụ thì dữ liệu có thể phục hồi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dữ liệu là điều quý khách không phải lo khi sử dụng các dịch vụ của GOFIBER. Hệ thống của chúng tôi được cài đặt để thực hiện backup dữ liệu của quý khách thường xuyên trên cấp độ server. Do đó quý khách hàng hoàn toàn có thể liên hệ với nhân viên hỗ trợ để được hỗ trợ nhận lại dữ liệu khi cần thiết. Theo chính sách bảo lưu của GOFIBER, dữ liệu của quý khách cùng tên miền, nếu lỡ quên gia hạn, được hỗ trợ “giữ hộ” miễn phí với thời hạn lên đến 12 tháng. Sau khi dịch vụ đã hết hạn, nếu có bất kỳ vấn đề phát sinh gì xin Quý khách vui lòng liên hệ với NVKD đang làm việc hoặc hotline/livechat để được giải quyết."
              }
            },
            {
              "@type": "Question",
              "name": "GOFIBER có giữ bí mật các thông tin dữ liệu cá nhân của tôi không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "GOFIBER cam kết các thông tin và dữ liệu của khách hàng luôn được bảo mật theo tiêu chuẩn chung của Pháp luật Việt Nam và Tiêu chí riêng của GOFIBER."
              }
            },
            {
              "@type": "Question",
              "name": "Có thể dùng thử mà không cần thanh toán?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "GOFIBER là một thương hiệu uy tín với các chính sách dùng thử tốt nhất hiện nay. Khách hàng có thể đăng ký dùng thử với bộ phận Kinh doanh để được trải nghiệm thử 7 ngày hoàn toàn miễn phí. Thủ tục dùng thử tại GOFIBER thường không cần xét duyệt và chờ đợi, kích hoạt dùng thử trong 5 phút. Bất cứ lúc nào trong thời hạn dùng thử, khách hàng cũng có thể chủ động tiến hành thanh toán để có nâng cấp tài khoản thành chính thức. Có thể nói, hoàn toàn không có khác biệt giữa chất lượng dịch vụ của tài khoản dùng thử và tài khoản chính thức."
              }
            }
          ]
        }}`)
      }}></Script>

      <Script type="text/javascript" async src={`https://www.googletagmanager.com/gtag/js?id=G-J21MM63QMB`} />
      <Script
        id='google-analytics'
        dangerouslySetInnerHTML={{
          __html: `<!-- Google tag (gtag.js) -->
         
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-J21MM63QMB');
          `,
        }}
      />
      <div id="home-v2">
        <section className="intro">
          <div className="container">
            {/* <HeaderFixed
              onChangeIsibleAdvanceMenu={handleChangeVisibleAdvanceMenu}
              visibleAdvanceMenu={visibleAdvanceMenu}
              menuLv2={menuLv2}
              visible={visible}
            /> */}

            {/* <HeaderLarge menuLv2={menuLv2} />

            <HeaderMedium /> */}

            <div className="row box-intro align-items-center flex-row-reverse">
              <div className="col col-12 col-md-7">
                <div className="d-flex align-items-center justify-content-end">
                  <img
                    src={HOME2_IMAGE.INTRO}
                    alt="Gofiber"
                    width={600}
                    height={500}
                  />
                </div>
              </div>
              <div className="col col-12 col-md-5 mt-4 mt-md-0">
                <h1 className="title">GOFIBER</h1>
                <div className="extra-1 mb-3" style={{ justifyContent: "center" }}>
                  DỊCH VỤ HOSTING, MÁY CHỦ VẬT LÝ, MÁY CHỦ ẢO VPS TỐC ĐỘ CAO
                </div>
                <div className="extra-2 mb-3" style={{ justifyContent: "center" }}>
                  Xuất phát điểm là đơn vị giàu kinh nghiệm hoạt động trong lĩnh
                  vực thiết kế website và các dịch vụ SEO tổng thể cũng như
                  chuyên sâu, GOFIBER tự hào đã hỗ trợ đắc lực và hiệu quả cho
                  các đối tượng khách hàng là cá nhân, tổ chức và cả doanh
                  nghiệp.
                </div>
                <div className="mt-4">
                  <button
                    onClick={handleGotoHotProduct}
                    className="btn0 btn-intro d-flex align-items-center btn-white-to-primary"
                  >
                    {/* <img src={ICON_IMAGE.MESSENGER} width={24} height={24} /> */}
                    <span>Tìm hiểu</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="box-intro-extra">
            <div className="container">
              <div data-aos="fade-up" className="row">
                {intraExtra.map((item) => (
                  <div
                    key={item.id}
                    className="col col-12 col-md-4 d-flex mt-4 mt-md-0"
                  >
                    <div>
                      <img
                        src={item.image}
                        width={74}
                        height={74}
                        alt={item.name}
                      />
                    </div>

                    <div className="info">
                      <div className="name mt-3" style={{ justifyContent: "center" }}>{item.name}</div>
                      <div className="mt-2 extra" style={{ justifyContent: "center" }}>{item.extra}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HotProduct />

        <SectionDomain />

        <SectionHotService />

        <BasicService />

        <SectionOtherService />

        <WhyChoose />

        <HotCustomer />

        <Feedback />

        <SectionRegistryPromotion />

        <SectionQuestion />
      </div>
    </>
  );
}

export default TestPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const params: any = {
      link: "/",
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
