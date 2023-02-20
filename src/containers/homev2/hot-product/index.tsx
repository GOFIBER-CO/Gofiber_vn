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
  },
  {
    id: 2,
    name: "CLOUD VPS 2GB",
    extra: "Giải pháp lý tưởng cho dự án nhỏ",
    price: 380000,
    discount: 28,
    rate: 2,
    image: HOME2_IMAGE.HOT_PRODUCT.VPS2GB,
  },
  {
    id: 3,
    name: "CLOUD VN 4G",
    extra: "Giải pháp lý tưởng cho dự án nhỏ",
    price: 720000,
    rate: 3,
    image: HOME2_IMAGE.HOT_PRODUCT.VPS4GB,
  },
  {
    id: 4,
    name: "CLOUD VN 8G",
    extra: "Giải pháp lý tưởng cho dự án vừa và doanh nghiệp nhỏ",
    price: 1400000,
    rate: 4,
    image: HOME2_IMAGE.HOT_PRODUCT.VPS8GB,
  },
  {
    id: 5,
    name: "CLOUD VN 16G",
    extra: "Giải pháp lý tưởng cho doanh nghiệp vừa",
    price: 2300000,
    rate: 5,
    image: HOME2_IMAGE.HOT_PRODUCT.VPS16GB,
  },
  {
    id: 6,
    name: "CLOUD VN 32G",
    extra: "Giải pháp lý tưởng cho doanh nghiệp vừa",
    price: 3800000,
    rate: 5,
    image: HOME2_IMAGE.HOT_PRODUCT.VPS32GB,
  },
  {
    id: 7,
    name: "Compurter S1",
    extra: "Thuê máy chủ vật lý",
    price: 190000,
    image: HOME2_IMAGE.HOT_PRODUCT.COMPUTER1S,
    style: {
      width: "64px",
    },
  },
  {
    id: 8,
    name: "Location S1",
    extra: "Thuê chỗ đặt máy chủ",
    price: 190000,
    image: HOME2_IMAGE.HOT_PRODUCT.LOCATION1S,
  },
];

function HotProduct() {
  return (
    <section className="section-hot-product">
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
