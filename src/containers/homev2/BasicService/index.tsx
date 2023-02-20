import { HOME2_IMAGE } from "@/src/utils";
import React from "react";
import BasicServiceItem from "./BasicServiceItem";

const data = [
  {
    id: 1,
    name: "Thiết kế Website",
    content: "",
    link: "/",
    image: HOME2_IMAGE.BASIC_SERVICE.WEB_DESIGN,
  },
  {
    id: 2,
    name: `Chăm sóc Website
    chuyên nghiệp`,
    content: "",
    link: "/",
    image: HOME2_IMAGE.BASIC_SERVICE.CARE,
  },
  {
    id: 3,
    name: "SEO tổng thể",
    content: "",
    link: "/",
    image: HOME2_IMAGE.BASIC_SERVICE.SEO_FULL,
  },
  {
    id: 4,
    name: "SEO từ khóa",
    content: "",
    link: "/",
    image: HOME2_IMAGE.BASIC_SERVICE.KEY_WORD,
  },
  {
    id: 5,
    name: "Entity SEO",
    content: "",
    link: "/",
    image: HOME2_IMAGE.BASIC_SERVICE.ENTITY,
  },
  {
    id: 6,
    name: "Xây dựng nội dung chất lượng",
    content: "",
    link: "/",
    image: HOME2_IMAGE.BASIC_SERVICE.BUILD_CONTENT,
  },
];

function BasicService() {
  return (
    <section className="section-basic-service">
      <div className="container">
        <div data-aos="fade-up" className="text-center">
          <h2 className="h2">Dịch vụ nền tảng GoFiber</h2>
        </div>

        <div className="mt-4 row" data-aos="fade-up">
          {data.map((item) => (
            <BasicServiceItem item={item} key={item?.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BasicService;
