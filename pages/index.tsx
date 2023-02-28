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
                <div className="extra-1 mb-3">
                  DỊCH VỤ HOSTING, MÁY CHỦ VẬT LÝ, MÁY CHỦ ẢO VPS TỐC ĐỘ CAO
                </div>
                <div className="extra-2 mb-3">
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
                      <div className="name mt-3">{item.name}</div>
                      <div className="mt-2 extra">{item.extra}</div>
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
