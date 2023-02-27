import useClickOutSide from "@/src/hooks/useClickOutSide";
import { HOME2_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useRef } from "react";

const vps = [
  {
    id: 1,
    title: "Cloud VPS 1 GB",
    extra: "1CPU, 1GB RAM, 15GB SSD, Công nghệ VKM",
  },
  {
    id: 2,
    title: "Cloud VPS 2 GB",
    extra: "2CPU, 2GB RAM, 20GB SSD, Công nghệ VKM",
    hot: true,
  },
  {
    id: 3,
    title: "Cloud VPS 4 GB",
    extra: "2CPU, 8GB RAM, 60GB SSD, Công nghệ VKM",
  },
];

const physicalServer = [
  {
    id: 1,
    title: "Compurter S1",
    extra: "Máy chủ vật lý hiệu năng cao",
  },
  {
    id: 2,
    title: "Location S1",
    extra: "Thuê chỗ đặt máy chủ vật lý, máy chủ cá nhân",
    hot: true,
  },
];

const hosting = [
  {
    id: 1,
    title: "Cá Nhân Cao Cấp",
    extra: "50GB SSD, 100GB băng thông, FREE SSL",
  },
  {
    id: 2,
    title: "Website hosting cho doanh nghiệp",
    extra:
      "25GB SSD, 100GB băng thông, FREE SSL, Nameservers bảo vệ bằng Cloudflare",
    hot: true,
  },
  {
    id: 3,
    title: "Website hosting cho doanh nghiệp PRO",
    extra:
      "50GB SSD, Không giới hạn băng thông, FREE SSL, Nameservers bảo vệ bằng Cloudflare",
  },
];

type Props = {
  visible: boolean;
  onChange: (e: boolean) => void;
};

function AdvanceMenu({ visible, onChange }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutSide(ref, () => {
    onChange(false);
  });

  return (
    <div
      ref={ref}
      id="advance-menu"
      className={`${visible ? "show" : ""} fixed`}
    >
      <div className="row" style={{ height: "100%" }}>
        <div className="col col-3">
          <div className="advance-menu-item">
            <div>
              <div className="d-flex align-items-center justify-content-start">
                <div className="title">Thuê VPS</div>
                <img
                  src={HOME2_IMAGE.HOT_SERVICE.VPS}
                  alt="Thuê vps"
                  width={50}
                  height={50}
                />
              </div>
              <div className="mt-2">
                {vps.map((item) => (
                  <div key={item.id} className="advance-menu-child">
                    <div className="d-flex align-items-center justify-content-between">
                      <Link className="a name" href={"/thue-vps"}>
                        {item.title}
                      </Link>
                      {item?.hot && <div className="hot">Hot</div>}
                    </div>
                    <p>{item.extra}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link className="a see-detail" href={"/thue-vps"}>
                Xem chi tiết
              </Link>
              <img
                width={8}
                height={8}
                src="https://gofiber.b-cdn.net/Desktop/Trang-chu-2/advance-right.png"
              />
            </div>
          </div>
        </div>

        <div className="col col-3">
          <div className="advance-menu-item">
            <div>
              <div className="d-flex align-items-center justify-content-start">
                <div className="title">Thuê máy chủ vật lý</div>
                <img
                  src={HOME2_IMAGE.HOT_SERVICE.PHYSICAL_SERVER}
                  alt="Thuê vps"
                  width={50}
                  height={50}
                />
              </div>
              <div className="mt-2">
                {physicalServer.map((item) => (
                  <div key={item.id} className="advance-menu-child">
                    <div className="d-flex align-items-center justify-content-between">
                      <Link href={"/thue-may-chu-vat-ly"} className="name a">
                        {item.title}
                      </Link>
                      {item?.hot && <div className="hot">Hot</div>}
                    </div>
                    <p>{item.extra}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link className="see-detail a" href={"/thue-may-chu-vat-ly"}>
                Xem chi tiết
              </Link>
              <img
                width={8}
                height={8}
                src="https://gofiber.b-cdn.net/Desktop/Trang-chu-2/advance-right.png"
              />
            </div>
          </div>
        </div>

        <div className="col col-3">
          <div className="advance-menu-item">
            <div>
              <div className="d-flex align-items-center justify-content-start">
                <div className="title">Web Hosting</div>
                <img
                  src={HOME2_IMAGE.HOT_SERVICE.WEB_HOSTING}
                  alt="Thuê vps"
                  width={50}
                  height={50}
                />
              </div>
              <div className="mt-2">
                {hosting.map((item) => (
                  <div key={item.id} className="advance-menu-child">
                    <div className="d-flex align-items-center justify-content-between">
                      <Link href={"/dich-vu-hosting-web-hosting-gia-re"} className="name a">
                        {item.title}
                      </Link>
                      {item?.hot && <div className="hot">Hot</div>}
                    </div>
                    <p>{item.extra}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link className="see-detail a" href={"/dich-vu-hosting-web-hosting-gia-re"}>
                Xem chi tiết
              </Link>
              <img
                width={8}
                height={8}
                src="https://gofiber.b-cdn.net/Desktop/Trang-chu-2/advance-right.png"
              />
            </div>
          </div>
        </div>

        <div className="col col-3">
          <div className="advance-menu-item-normal">
            <div>
              <div>
                <div className="title">Dịch vụ khác</div>
              </div>

              <div className="mt-4">
                <div className="title-2">
                  <Link className="a" href={"/"}>
                    Dịch vụ quản trị website
                  </Link>
                </div>
                <div className="title-2">
                  <Link className="a" href={"/"}>
                    Dịch vụ nội dung chất lượng
                  </Link>
                </div>
                <div className="title-2">
                  <Link className="a" href={"/"}>
                    Dịch vụ chăm sóc website chuyên nghiệp
                  </Link>
                </div>
                <div className="title-2">
                  <Link className="a" href={"/"}>
                    Dịch vụ SEO Marketing
                  </Link>
                </div>
                <div className="mt-1">
                  <div className="advance-menu-child">
                    <div className="name">SEO tổng thể</div>
                    <div className="name">SEO từ khóa</div>
                    <div className="name">Entity SEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvanceMenu;
