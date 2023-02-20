import Link from "next/link";
import React from "react";
import TextImageButton from "../components/button/TextImageButton";
import Divider from "../components/Divider";
import { ICON_IMAGE } from "../utils";

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
    name: "Chính sách hoản trả",
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
  },
  {
    id: 2,
    name: "Số điện thoại : 0985 07 85 07",
  },
  {
    id: 3,
    name: "Sales@gofiber.vn",
  },
];

function FooterV2() {
  return (
    <div id="footer-v2">
      <div className="container">
        <div className="box-contact row justify-content-center">
          <div className="col col-12 col-md-10">
            <div className="d-flex align-items-center">
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
            <div className="mt-4">
              <Link href={"/lien-he"}>
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
                    <Link href={item.link}>{item.name}</Link>
                  </div>
                ))}
              </div>
              <div className="col-12 col-md-4 px-0 mt-4">
                <h5 className="h5">Thông tin cần thiết</h5>
                {importantInfo.map((item) => (
                  <div className="px-0 mt-1" key={item.id}>
                    <Link href={item.link}>{item.name}</Link>
                  </div>
                ))}
              </div>
              <div className="col-12 col-md-4 px-0 mt-4">
                <h5 className="h5">Thông tin liên lạc</h5>
                {contactInfo.map((item) => (
                  <div className="px-0 mt-1" key={item.id}>
                    <a>{item.name}</a>
                  </div>
                ))}
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
    </div>
  );
}

export default FooterV2;
