import { HOME2_IMAGE } from "@/src/utils";
import React from "react";
import HotProductItem from "./HotProductItem";

const data = [
  {
    id: 1,
    name: "CLOUD VPS 1GB",
    extra: "Giải pháp lý tưởng cho người mới",
    price: 190000,
    rate: 1,
    image: HOME2_IMAGE.HOT_PRODUCT.VPS1GB,
    link: "/thue-vps",
  },
  {
    id: 2,
    name: "CLOUD VPS 2GB",
    extra: "Giải pháp lý tưởng cho dự án nhỏ",
    price: 380000,
    discount: 28,
    startPrice: 520000,
    rate: 2,
    image: HOME2_IMAGE.HOT_PRODUCT.VPS2GB,
    link: "/thue-vps",
  },
  {
    id: 3,
    name: "CLOUD VN 4G",
    extra: "Giải pháp lý tưởng cho dự án nhỏ",
    price: 720000,
    rate: 3,
    image: HOME2_IMAGE.HOT_PRODUCT.VPS4GB,
    link: "/thue-vps",
  },
  {
    id: 4,
    name: "CLOUD VN 8G",
    extra: "Giải pháp lý tưởng cho dự án vừa và doanh nghiệp nhỏ",
    price: 1400000,
    rate: 4,
    image: HOME2_IMAGE.HOT_PRODUCT.VPS8GB,
    link: "/thue-vps",
  },
  {
    id: 5,
    name: "CLOUD VN 16G",
    extra: "Giải pháp lý tưởng cho doanh nghiệp vừa",
    price: 2300000,
    rate: 5,
    image: HOME2_IMAGE.HOT_PRODUCT.VPS16GB,
    link: "/thue-vps",
  },
  {
    id: 6,
    name: "CLOUD VN 32G",
    extra: "Giải pháp lý tưởng cho doanh nghiệp vừa",
    price: 3800000,
    rate: 5,
    image: HOME2_IMAGE.HOT_PRODUCT.VPS32GB,
    link: "/thue-vps",
  },
  {
    id: 7,
    name: "Compurter S1",
    extra: "Thuê máy chủ vật lý",
    price: 1200000,
    image: HOME2_IMAGE.HOT_PRODUCT.COMPUTER1S,
    style: {
      width: "64px",
    },
    link: "/thue-may-chu-vat-ly",
  },
  {
    id: 8,
    name: "Location S1",
    extra: "Thuê chỗ đặt máy chủ",
    price: 200000,
    image: HOME2_IMAGE.HOT_PRODUCT.LOCATION1S,
    link: "/thue-may-chu-vat-ly",
  },
];

const vps = [
  {
    _id: "63e3845ea116ee4eab4127ff",
    name: "CLOUD VPS 1GB",
    slug: "cloud-vps-1gb",
    extra: "Giải pháp lý tưởng cho người mới",
    price: 190000,
    feature: ["1 CPU", "1GB RAM", "15GB SSD", "Công nghệ Ảo Hoá KVM"],
    security: ["SSL Miễn phí Không giới hạn", "Hạn chế tấn công DDOS"],
    free: ["Hỗ trợ IPv6", "Sao lưu hàng tuần"],
    isBest: true,
    tab: "63e36e0be435aa416b6a9069",
    status: 1,
    createdAt: "2023-02-08T11:15:42.342Z",
    updatedAt: "2023-02-09T04:19:38.286Z",
    __v: 0,
    advance: [],
  },
  {
    _id: "63e385f2a116ee4eab41283f",
    name: "CLOUD VPS 2GB",
    slug: "cloud-vps-2gb",
    extra: "Giải pháp lý tưởng cho dự án nhỏ",
    price: 380000,
    feature: ["2 CPU", "2GB RAM", "20GB SSD", "Công nghệ Ảo Hoá KVM"],
    security: ["SSL Miễn phí Không giới hạn", "Hạn chế tấn công DDOS"],
    free: ["Hỗ trợ IPv6", "Sao lưu hàng tuần"],
    isBest: false,
    tab: "63e36e0be435aa416b6a9069",
    status: 1,
    createdAt: "2023-02-08T11:22:26.968Z",
    updatedAt: "2023-02-08T11:22:26.968Z",
    __v: 0,
  },
  {
    _id: "63e3867ea116ee4eab412847",
    name: "CLOUD VN 4G",
    slug: "cloud-vn-4g",
    extra: "Giải pháp lý tưởng cho dự án nhỏ",
    price: 720000,
    feature: ["2 CPU", "8GB RAM", "60GB SSD", "Công nghệ Ảo Hoá KVM"],
    security: ["SSL Miễn phí Không giới hạn", "Hạn chế tấn công DDOS"],
    free: ["Hỗ trợ IPv6", "Sao lưu hàng tuần"],
    isBest: false,
    tab: "63e36e0be435aa416b6a9069",
    status: 1,
    createdAt: "2023-02-08T11:24:46.074Z",
    updatedAt: "2023-02-10T11:15:24.355Z",
    __v: 0,
    advance: [],
  },
  {
    _id: "63e386a8a116ee4eab41284b",
    name: "CLOUD VN 8G",
    slug: "cloud-vn-8g",
    extra: "Giải pháp lý tưởng cho dự án vừa và doanh nghiệp nhỏ",
    price: 1400000,
    feature: ["4 CPU", "8GB RAM", "90GB SSD", "Công nghệ Ảo Hoá KVM"],
    security: ["SSL Miễn phí Không giới hạn", "Hạn chế tấn công DDOS"],
    free: ["Hỗ trợ IPv6", "Sao lưu hàng tuần"],
    isBest: false,
    tab: "63e36e0be435aa416b6a9069",
    status: 1,
    createdAt: "2023-02-08T11:25:28.533Z",
    updatedAt: "2023-02-08T11:25:28.533Z",
    __v: 0,
  },
  {
    _id: "63e386e8a116ee4eab41284f",
    name: "CLOUD VN 16G",
    slug: "cloud-vn-16g",
    extra: "Giải pháp lý tưởng cho doanh nghiệp vừa",
    price: 2300000,
    feature: ["8 CPU", "16GB RAM", "150GB SSD", "Công nghệ Ảo Hoá KVM"],
    security: ["SSL Miễn phí Không giới hạn", "Hạn chế tấn công DDOS"],
    free: ["Hỗ trợ IPv6", "Sao lưu hàng tuần"],
    isBest: false,
    tab: "63e36e0be435aa416b6a9069",
    status: 1,
    createdAt: "2023-02-08T11:26:32.554Z",
    updatedAt: "2023-02-08T11:26:32.554Z",
    __v: 0,
  },
  {
    _id: "63e38705a116ee4eab412853",
    name: "CLOUD VN 32G",
    slug: "cloud-vn-32g",
    extra: "Giải pháp lý tưởng cho doanh nghiệp vừa",
    price: 3800000,
    feature: ["16 CPU", "32GB RAM", "300GB SSD", "Công nghệ Ảo Hoá KVM"],
    security: ["Hỗ trợ IPv6", "Sao lưu hàng tuần"],
    free: ["SSL Miễn phí Không giới hạn", "Hạn chế tấn công DDOS"],
    isBest: false,
    tab: "63e36e0be435aa416b6a9069",
    status: 1,
    createdAt: "2023-02-08T11:27:01.631Z",
    updatedAt: "2023-02-10T11:15:33.927Z",
    __v: 0,
    advance: [],
  },
];

function HotProduct() {
  return (
    <section id="section-hot-product">
      <div className="container">
        <div data-aos="fade-up" className="text-center">
          <h2 className="h2">Sản phẩm tiêu biểu</h2>
        </div>

        <div className="mt-4 row" data-aos="fade-up">
          {data.map((item) => (
            <HotProductItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HotProduct;
