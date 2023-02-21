import useClickOutSide from "@/src/hooks/useClickOutSide";
import { HOME2_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useRef } from "react";

const vps = [
  {
    id: 1,
    title: "Cloud VPS 1 GB",
    extra: "1 Cpu, 2 Gb Ram, 15 Gb SSD...",
  },
  {
    id: 2,
    title: "Cloud VPS 2 GB",
    extra: "2 Cpu, 2 Gb Ram, 20 Gb SSD...",
    hot: true,
  },
  {
    id: 3,
    title: "Cloud VPS 4 GB",
    extra: "2 Cpu, 8 Gb Ram, 60 Gb SSD...",
  },
];

const physicalServer = [
  {
    id: 1,
    title: "Server1",
    extra: "4 Gb RAM, 500 Gb SSD, 100 Gb băng thông.....",
  },
  {
    id: 2,
    title: "Server2",
    extra: "8 Gb RAM, 500 Gb SSD, 100 Gb băng thông.....",
    hot: true,
  },
];

const hosting = [
  {
    id: 1,
    title: "Website Hosting Doanh nghiệp Pro",
    extra: "4 Gb RAM, 500 Gb SSD, 100 Gb băng thông.....",
  },
  {
    id: 2,
    title: "Website Hosting Cá nhân",
    extra: "4 Gb RAM, 500 Gb SSD, 100 Gb băng thông.....",
    hot: true,
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
              <div className="d-flex align-items-center justify-content-center">
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
                      <Link href={"/thue-vps"} className="name">
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
              <Link className="see-detail" href={"/thue-vps"}>
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
              <div className="d-flex align-items-center justify-content-center">
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
                      <Link href={"/thue-may-chu-vat-ly"} className="name">
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
              <Link className="see-detail" href={"/thue-may-chu-vat-ly"}>
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
              <div className="d-flex align-items-center justify-content-center">
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
                      <Link href={"/hosting-khung-gia-re"} className="name">
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
              <Link className="see-detail" href={"/hosting-khung-gia-re"}>
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
          <div className="advance-menu-item-normal d-flex">
            <div>
              <div>
                <div className="title">Thiết kế Web</div>
              </div>
              <div className="mt-2">
                <div className="advance-menu-child">
                  <div className="name">Website cá nhân</div>
                  <div className="name">Website Doanh nghiệp</div>
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <div className="title">Thiết kế Web WordPress</div>
                </div>
                <div className="mt-2">
                  <div className="advance-menu-child">
                    <div className="name">Website cá nhân</div>
                    <div className="name">Website Doanh nghiệp</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="title">Dịch vụ SEO</div>
              </div>
              <div className="mt-2">
                <div className="advance-menu-child">
                  <div className="name">SEO tổng thể</div>
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
