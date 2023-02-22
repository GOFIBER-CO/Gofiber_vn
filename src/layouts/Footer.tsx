import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TextIconInfo from "../components/footer/TextIconInfo";
import { ICON } from "../utils";

const infoData = [
  {
    id: "1",
    text: "Số 131, Đường CN11, P. Sơn Kỳ, Q. Tân Phú, TP.HCM",
    icon: require("@/public/images/icons/address.svg"),
  },
  {
    id: "2",
    text: "Sales@gofiber.vn",
    icon: require("@/public/images/icons/email.svg"),
  },
  {
    id: "3",
    text: "0989.07.85.07",
    icon: require("@/public/images/icons/call.svg"),
  },
  {
    id: "4",
    text: `Giấy phép kinh doanh số: 0317495104 cấp bởi 
        Sở Kế Hoạch và Đầu Tư TP Hồ Chí Minh`,
    icon: require("@/public/images/icons/note.svg"),
  },
  {
    id: "5",
    text: "Tuyển dụng",
    icon: require("@/public/images/icons/user-add.svg"),
    link: "/tuyen-dung",
  },
];

const serviceData = [
  {
    id: "1",
    icon: require("@/public/images/icons/send.svg"),
    text: "Thiết kế Website",
  },
  {
    id: "2",
    icon: require("@/public/images/icons/send.svg"),
    text: "Chăm sóc Website chuyên nghiệp",
  },
  {
    id: "3",
    icon: require("@/public/images/icons/send.svg"),
    text: "Xây dựng nội dung chất lượng",
  },
  {
    id: "4",
    icon: require("@/public/images/icons/send.svg"),
    text: "Hosting / VPS Khủng giá rẻ",
  },
  {
    id: "5",
    icon: require("@/public/images/icons/send.svg"),
    text: "Thuê Server giá rẻ",
  },
  {
    id: "6",
    icon: require("@/public/images/icons/send.svg"),
    text: "An toàn và bảo mật",
  },
  {
    id: "7",
    icon: require("@/public/images/icons/send.svg"),
    text: "Báo Việt Nam",
    // link: 'https://baovietnam.com'
  },
  {
    id: "8",
    icon: require("@/public/images/icons/send.svg"),
    text: "Cung cấp PBN",
    link: "https://dichvupbn.com",
  },
  {
    id: "9",
    icon: require("@/public/images/icons/send.svg"),
    text: "Dịch vụ Traffic User",
    link: "https://dichvutraffic.com",
  },
];

const socialData = [
  {
    id: "1",
    icon: require("@/public/images/icons/facebook.svg"),
    link: "/",
  },
  {
    id: "2",
    icon: require("@/public/images/icons/instagram.svg"),
    link: "/",
  },
  {
    id: "3",
    icon: require("@/public/images/icons/twitter.svg"),
    link: "/",
  },
];

const bankData = [
  {
    id: "1",
    image: require("@/public/images/icons/Visa._logo.svg"),
  },
  {
    id: "2",
    image: require("@/public/images/icons/PayPal.svg"),
  },
  {
    id: "3",
    image: require("@/public/images/icons/Mastercard-logo.svg"),
  },
];

const policy = [
  {
    id: 1,
    icon: require("@/public/images/icons/send.svg"),
    name: "Chính sách bảo mật",
    link: "/chinh-sach-bao-mat",
  },
  {
    id: 2,
    icon: require("@/public/images/icons/send.svg"),
    name: "Chính sách hoàn huỷ dịch vụ",
    link: "/chinh-sach-hoan-huy-dich-vu",
  },
  // {
  //     id: 3,
  //     icon: require("@/public/images/icons/send.svg"),
  //     name: 'Chính sách bảo hành, đổi trả',
  //     link: '/chinh-sach-bao-hanh-doi-tra'
  // },
  {
    id: 4,
    icon: require("@/public/images/icons/send.svg"),
    name: "Chính sách thanh toán",
    link: "/chinh-sach-thanh-toan",
  },
];

function Footer() {
  return (
    <footer id="footer">
      <section className="container">
        <div className="section-content position-relative">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="img mx-3">
                <Image
                  className="logo"
                  src={require("@/public/images/logo.png")}
                  alt="Logo"
                />
              </div>
              <div className="font_size_16 font_weight_600 mt-3 color_primary">
                CTY TNHH CÔNG NGHỆ PHẦN MỀM GOFIBER
              </div>
              <p className="font_size_14 font_weight_500 mt-3">
                Tự hào là một trong những đơn vị dịch vụ thiết kế website giá rẻ
                uy tín tại Việt Nam, chúng tôi tự tin đáp ứng mọi yêu cầu của
                quý khách, nhằm giúp quý khách có thể tiếp cận tốt hơn đến khách
                hàng của mình trên internet.
              </p>

              <div className="font_size_16 font_weight_500 color_primary mb-3">
                Chính sách khách hàng
              </div>
              {policy.map((item) => (
                <TextIconInfo
                  link={item.link}
                  icon={item.icon}
                  key={item.id}
                  text={item.name}
                />
              ))}
              <div className="hide-for-large my-3">
                <div className="d-flex align-items-center">
                  {socialData.map((item) => (
                    <a
                      key={item.id}
                      href={item.link}
                      className="button_social button_social__medium a"
                    >
                      <Image src={item.icon} alt={item.id} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="font_size_16 font_weight_500 color_primary">
                Thông tin liên hệ
              </div>
              <div className="mt-3">
                {infoData.map((item) => (
                  <TextIconInfo
                    link={item.link}
                    key={item.id}
                    icon={item.icon}
                    text={item.text}
                  />
                ))}
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="font_size_16 font_weight_500 color_primary mb-3">
                Dịch vụ
              </div>
              <div className="mt-3">
                {serviceData.map((item) => (
                  <TextIconInfo
                    link={item.link}
                    key={item.id}
                    icon={item.icon}
                    text={item.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
      <div className="divider"></div>
      <section className="container mt-4">
        <div className="section-content position-relative">
          <div className="row">
            <div className="col col-12 col-md-4">
              <div className="hide-for-medium">
                <div className="d-flex align-items-center">
                  {socialData.map((item) => (
                    <a
                      key={item.id}
                      href={item.link}
                      className="button_social button_social__large a"
                    >
                      <Image src={item.icon} alt={item.id} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-4">
              <div className="d-flex align-items-center justify-content-center">
                {bankData.map((item) => (
                  <div className="mx-2" key={item.id}>
                    <Image src={item.image} alt={item.id} />
                  </div>
                ))}
              </div>
              <div className="font_weight_500 text-center mt-2">
                Copyright ©Gofiber.vn
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
