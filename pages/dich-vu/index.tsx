import BannerPage from "@/src/components/banner/BannerPage";
import BannerV2Page from "@/src/components/banner/BannerV2Page";
import TextIconButton from "@/src/components/button/TextIconButton";
import Contact from "@/src/containers/home/contact";
import { ICON, SERVICE_IMAGE } from "@/src/utils";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import parse from 'html-react-parser';
import { GetServerSidePropsContext } from "next";
import { SeoApi } from "@/src/api/seo";

const banner = {
  large: SERVICE_IMAGE.BANNER_LARGE,
  medium: SERVICE_IMAGE.BANNER_MEDIUM,
  small: SERVICE_IMAGE.BANNER_SMALL,
};

const data = [
  {
    id: "1",
    title: "Dịch vụ thiết kế website",
    content: `Với nhiều năm hoạt động trong lĩnh vực thiết kế website, GoFiber hiện đang sở hữu một kho giao 
        diện mẫu phong phú bật nhất tại Việt Nam. Mỗi giao diện mẫu là một dự án 
        hoàn thiện và có thể áp dụng theo yêu cầu của quý khách một cách nhanh nhất với chi phí tiết kiệm nhất.`,
    image: SERVICE_IMAGE.MY_SERVICE.WEB_DESIGN,
    class: "flex-row-reverse",
    aos: ["fade-left", "fade-right"],
    link: "/dich-vu-thiet-ke-website-chuyen-nghiep",
  },
  {
    id: "2",
    title: "Hosting khủng giá rẻ",
    content: `GoFiber là nhà cung cấp dịch vụ lưu trữ web hosting được đánh giá “tuyệt vời” bởi hàng ngàn người dùng thực tế.
        Chúng tôi tự hào là một trong những công ty cung cấp dịch vụ cho thuê hosting và 
        máy chủ hiệu năng cao với giá thành 
        cực kỳ hợp lý… có thể đáp ứng gần như mọi nhu cầu từ cơ bản đến chuyên nghiệp.`,
    extra: `Chúng tôi tự hào là một trong những công ty cung cấp dịch vụ cho thuê 
        hosting và máy chủ hiệu năng cao với giá thành cực kỳ hợp lý… 
        có thể đáp ứng gần như mọi nhu cầu từ cơ bản đến chuyên nghiệp.
        `,
    image: SERVICE_IMAGE.MY_SERVICE.WEB_HOSTING,
    aos: ["fade-right", "fade-left"],
    link: "/dich-vu-hosting",
  },
  {
    id: "3",
    title: "Dịch vụ hỗ trợ chống DDos",
    content: `Dịch vụ hỗ trợ chống DDos giúp kiểm soát luồng thông tin giữa Intranet và Internet, 
        chúng phát hiện và phán xét những hành vi được truy cập và 
        không được truy cập vào bên trong hệ thống, đảm bảo tối đa sự an toàn thông tin.`,
    image: SERVICE_IMAGE.MY_SERVICE.FIREWALL,
    class: "flex-row-reverse",
    aos: ["fade-left", "fade-right"],
    link: "/ho-tro-chong-ddos",
  },
  {
    id: "4",
    title: "Thuê VPS",
    content: `Ở Gofiber, mỗi máy chủ ảo VPS server đều sử dụng vi xử lý Intel Xeon mới nhất, 
        hàng terabytes ổ cứng SSD NVMe và 512 GB RAM. Điều này giúp cung cấp đủ tốc độ xử lý cho mọi dự án từ vừa đến lớn.`,
    image: SERVICE_IMAGE.MY_SERVICE.VPS,
    aos: ["fade-right", "fade-left"],
    link: "/thue-vps",
  },
  {
    id: "5",
    title: "Chứng chỉ SSL",
    content: `Mua chứng chỉ SSL sẽ giúp website của bạn được an toàn và bảo mật 
        hơn với thanh địa chỉ có chìa khóa xanh. Mọi thông tin dữ liệu của website và khách hàng 
        sẽ được mã hóa nhằm tránh nguy cơ bị tấn công 
        từ hacker. Đồng thời, đảm bảo độ tin cậy và niềm tin cho khách hàng khi truy cập vào website.`,
    image: SERVICE_IMAGE.MY_SERVICE.SSL,
    class: "flex-row-reverse",
    aos: ["fade-left", "fade-right"],
    link: "/chung-chi-ssl",
  },
  {
    id: "6",
    title: "Thuê máy chủ vật lý",
    content: `Các ứng dụng và website của bạn có thể sử dụng tất cả các 
        tài nguyên trên server mà không cần phải chia sẻ tài nguyên với bất kỳ ai. 
        Bởi vì, tài nguyên trong server không giới hạn nhờ vào sự linh hoạt trong 
        nâng cấp các thiết bị phần cứng và phần mềm. Đồng thời, sức tải của server có thể mở rộng vô hạn.`,
    image: SERVICE_IMAGE.MY_SERVICE.PHYSICAL,
    aos: ["fade-right", "fade-left"],
    link: "/thue-may-chu-vat-ly",
  },
];

type Props = {
  tags: any[];
};

function Service({ tags }: Props) {
  return (
    <>
      <Head>
        {tags.map((tag, index) => (

          <React.Fragment key={index}>{parse(tag)}</React.Fragment>
        ))}
      </Head>
      <div id="service">
        <BannerV2Page
          styleLinkName={{ maxWidth: "400px" }}
          image="https://gofiber.b-cdn.net/new-design/dich-vu/desktop-dich-vu.png"
          imageDesktop="https://gofiber.b-cdn.net/new-design/dich-vu/desktop-dich-vu.png"
          imageTablet="https://gofiber.b-cdn.net/new-design/dich-vu/desktop-dich-vu.png"
          imageSmall="https://gofiber.b-cdn.net/new-design/dich-vu/desktop-dich-vu.png"
          name="Dịch vụ"
          extra="Những giao diện website mà gofiber.vn cung cấp luôn làm hài lòng khách hàng. Sự hài lòng của khách hàng là động lực để chúng tôi phát triển"
        />
        <div className="square"></div>
        <div className="container">
          <section className="section-hire">
            <div className="row justify-content-center">
              <div className="col col-12 col-md-10">
                <h2 className="h2 color_primary text-center">
                  DỊCH VỤ CỦA CHÚNG TÔI
                </h2>
                <p className="mt-4">
                  Gofiber.vn là đơn vị kinh doanh dịch vụ thiết kế website giá
                  rẻ chuyên nghiệp mọi lĩnh vực cho khách hàng. Bên cạnh việc
                  thiết kế, đơn vị còn chú trọng công tác bảo trì, nâng cấp và
                  chăm sóc khách hàng khi khách hàng có yêu cầu.
                  <br />
                  Chúng tôi mong muốn góp một chút công sức của mình cho sự phát
                  triển của lĩnh vực thiết kế website tại TP. Hồ Chí Minh nói
                  riêng và cũng như Việt Nam nói chung.
                </p>
              </div>
            </div>
            {data.map((item: any, index: number) => (
              <div
                key={index}
                className={`mt-4 row justify-content-center align-items-center ${item?.class ? item?.class : ""
                  }`}
              >
                <div
                  className="col col-12 col-md-6 mx-0"
                  data-aos={item?.aos[0]}
                >
                  <div className="row justify-content-center">
                    <div className="col col-12 col-md-7 mx-0">
                      <h3 className="h3">{item.title}</h3>
                      <p className="mt-4">{item.content}</p>
                      <p>{item.extra}</p>
                      <Link className="a" href={item.link}>
                        <TextIconButton
                          name="Xem chi tiết"
                          icon={ICON.RIGHT}
                          color="white"
                          styles={{ boxShadow: "none" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col col-12 col-md-6 mx-0"
                  data-aos={item?.aos[1]}
                >
                  <div className="img">
                    <img
                      width={1000}
                      height={500}
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>

          <Contact />
        </div>
      </div>
    </>
  );
}

export default Service;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const params: any = {
      link: "/dich-vu",
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