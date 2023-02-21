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
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const menuLv1 = [
  {
    id: 1,
    name: "Tài khoản",
    link: "/",
  },
  {
    id: 2,
    name: "Tin tức",
    link: "/tin-tuc",
  },
  {
    id: 3,
    name: "Liên hệ",
    link: "/lien-he",
  },
];

const menuLv2 = [
  {
    id: 1,
    name: "Hosting",
    link: "/hosting-khung-gia-re",
  },
  {
    id: 2,
    name: "Server",
    link: "/thue-may-chu-vat-ly",
  },
  {
    id: 3,
    name: "VPS",
    link: "/thue-vps",
  },
  {
    id: 4,
    name: "Thiết kế Website",
    link: "/thiet-ke-website",
  },
  {
    id: 5,
    name: "Dịch vụ khác",
    link: "/dich-vu",
  },
];

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

function TestPage() {
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

  return (
    <div id="home-v2">
      <section className="intro">
        <div className="container">
          <div
            style={{ display: "flex" }}
            className="menu-lv1 align-items-center justify-content-between py-3 hide-for-small"
          >
            <div className="hot-line">Hotline: 0985 07 85 07</div>
            <ul className="ul d-flex">
              {menuLv1.map((item) => (
                <li key={item.id} className="menu-item">
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <HeaderFixed
            onChangeIsibleAdvanceMenu={handleChangeVisibleAdvanceMenu}
            visibleAdvanceMenu={visibleAdvanceMenu}
            menuLv2={menuLv2}
            visible={visible}
          />

          <HeaderLarge menuLv2={menuLv2} />

          <HeaderMedium />

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
                vực thiết kế website và các dịch vụ SEO tổng thể cũng như chuyên
                sâu, GOFIBER tự hào đã hỗ trợ đắc lực và hiệu quả cho các đối
                tượng khách hàng là cá nhân, tổ chức và cả doanh nghiệp.
              </div>
              <div className="mt-4">
                <button className="btn0 btn-intro d-flex align-items-center">
                  <img src={ICON_IMAGE.MESSENGER} width={24} height={24} />
                  <span>Liên hệ ngay</span>
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
  );
}

export default TestPage;
