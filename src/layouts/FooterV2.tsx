/* eslint-disable react/jsx-no-target-blank */
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import TextImageButton from "../components/button/TextImageButton";
import Divider from "../components/Divider";
import { HOME2_IMAGE, ICON_IMAGE } from "../utils";

const gofiber = [
  {
    id: 1,
    name: "Giới thiệu",
    link: "/gioi-thieu",
  },
  {
    id: 2,
    name: "Tuyển dụng",
    link: "/tuyen-dung",
  },
  {
    id: 3,
    name: "Chính sách hoàn trả",
    link: "/chinh-sach-hoan-huy-dich-vu",
  },
  {
    id: 4,
    name: "Chính sách thanh toán",
    link: "/chinh-sach-thanh-toan",
  },
  {
    id: 5,
    name: "Chính sách bảo mật",
    link: "/chinh-sach-bao-mat",
  },
  {
    id: 6,
    name: "Cam kết chất lượng",
    link: "/",
  },
];

const importantInfo = [
  {
    id: 1,
    name: "Hướng dẫn gửi hỗ trợ",
    link: "/",
  },
  {
    id: 2,
    name: "Hướng dẫn thanh toán",
    link: "/",
  },
  {
    id: 3,
    name: "Hướng dẫn đăng ký dịch vụ",
    link: "/",
  },
  {
    id: 4,
    name: "Hướng dẫn sử dụng",
    link: "/",
  },
];

const contactInfo = [
  {
    id: 1,
    name: "Số 131, Đường CN11, P. Sơn Kỳ, Q. Tân Phú",
    image: HOME2_IMAGE.FOOTER.LOCATION,
  },
  {
    id: 2,
    name: "Số điện thoại : 0985 07 85 07",
    image: HOME2_IMAGE.FOOTER.PHONE,
  },
  {
    id: 3,
    name: "Sales@gofiber.vn",
    image: HOME2_IMAGE.FOOTER.MESSAGE,
  },
];

const service = [
  {
    id: 1,
    name: "Dịch vụ BacklinkVina",
    image: HOME2_IMAGE.FOOTER.BACKLINK,
    link: "https://backlinkvina.com/gioi-thieu",
  },
  {
    id: 2,
    name: "Dịch vụ TrafficVina",
    image: HOME2_IMAGE.FOOTER.TRAFFIC,
    link: "https://dichvutraffic.com/gioi-thieu",
  },
  {
    id: 3,
    name: "Dịch vụ PBN",
    image: HOME2_IMAGE.FOOTER.PBN,
    link: "https://dichvupbn.com/gioi-thieu",
  },
];

function FooterV2() {
  const { pathname } = useRouter();

  return (
    <footer id="footer-v2">
      <div className="container">
        <div className="box-contact row justify-content-center">
          <div className="col col-12 col-md-10">
            <div className="d-flex">
              <h4 className="h4">GOFIBER</h4>
              <h4 className="h4 mx-1">-</h4>
              <h5 className="h5">
                DỊCH VỤ HOSTING, MÁY CHỦ VẬT LÝ, MÁY CHỦ ẢO VPS TỐC ĐỘ CAO
              </h5>
            </div>
            <div
              style={{ fontWeight: "400", fontSize: "14px" }}
              className="mt-2"
            >
              Xuất phát điểm là đơn vị giàu kinh nghiệm hoạt động trong lĩnh vực
              thiết kế website và các dịch vụ SEO tổng thể cũng như chuyên sâu,
              GOFIBER tự hào đã hỗ trợ đắc lực và hiệu quả cho các đối tượng
              khách hàng là cá nhân, tổ chức và cả doanh nghiệp.
            </div>
            <div className="mt-4 d-flex">
              <Link className="a" href={"/lien-he"}>
                <TextImageButton
                  color="white"
                  src={ICON_IMAGE.MESSENGER}
                  name="Liên hệ ngay"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4 row justify-content-center wrapper-info">
          <div className="col col-12 col-md-10">
            <div className="row">
              <div className="col-12 col-md-4 px-0 mt-4">
                <h5 className="h5">Về GoFiber</h5>
                {gofiber.map((item) => (
                  <div className="px-0 mt-1" key={item.id}>
                    <Link className="a" href={item.link}>
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="col-12 col-md-4 px-0 mt-4">
                <h5 className="h5">Thông tin cần thiết</h5>
                {importantInfo.map((item) => (
                  <div className="px-0 mt-1" key={item.id}>
                    <Link className="a" href={item.link}>
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="col-12 col-md-4 px-0 mt-4">
                <h5 className="h5">Thông tin liên lạc</h5>
                {contactInfo.map((item) => (
                  <div className="px-0 mb-3 d-flex" key={item.id}>
                    <img
                      style={{ minWidth: "24px", height: "24px" }}
                      width={24}
                      height={24}
                      src={item.image}
                      alt={item.name}
                    />
                    <a className="mt-1 a">{item.name}</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="row mt-4 justify-content-center">
              <div className="col col-12 col-lg-8 px-0">
                <div className="row mt-4 align-items-center">
                  {service.map((item) => (
                    <div
                      className="col col-12 col-md-4 mt-2 mt-md-0 service-footer-item p-0 d-flex align-items-center justify-content-start justify-content-md-center justify-content-lg-start"
                      key={item.id}
                    >
                      <img src={item.image} alt={item.name} />
                      <a
                        className="a"
                        href={item?.link}
                        target="_blank"
                        rel="nofollow noopener"
                      >
                        <span>{item.name}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col col-12 col-lg-4 px-0 d-flex mt-4 mt-md-0 align-items-end justify-content-center justify-content-lg-end">
                <a
                  className="a"
                  href={`https://www.dmca.com/site-report/gofiber.vn?refurl=https://gofiber.vn${pathname}`}
                  target="_blank"
                >
                  <picture title="dmca-badge">
                    <source
                      type="image/webp"
                      src="https://gofiber.b-cdn.net/Admin/dmca-logo-2023.webp"
                    />
                    <img
                      width="153"
                      height="55"
                      src="https://gofiber.b-cdn.net/Admin/dmca-logo-2023.webp"
                      alt="dmca-badg"
                      data-pin-no-hover="true"
                    />
                  </picture>
                </a>
                {/* <img
                  width={153}
                  height={33}
                  src={HOME2_IMAGE.FOOTER.PROTECTED}
                  alt="protected"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="px-0">
          <Divider styles={{ margin: "40px 0px 10px" }} />
        </div>
        <div className="text-center">
          <div className="mt-4" style={{ color: "#fff" }}>
            Copyright © Gofiber
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterV2;
