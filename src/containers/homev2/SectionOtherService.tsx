import TextIconButton from "@/src/components/button/TextIconButton";
import { HOME2_IMAGE } from "@/src/utils";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: "1",
    title: "Hỗ trợ và hạn chế website chống DDos",
    content: `Công nghệ và giải pháp độc quyền giúp hạn chế và bảo vệ website kinh doanh của bạn trước những cuộc tấn công DDoS có chủ đích và ác ý từ những đối thủ cạnh tranh.`,
    image: HOME2_IMAGE.OTHER_SERVICE.DDOS,
    class: "flex-row-reverse",
    link: "/ho-tro-chong-ddos",
    classText: "align-items-start align-items-lg-end",
  },
  {
    id: "2",
    title: "Chứng chỉ SSL",
    content: `Ngoài các chứng chỉ SSL được cấp miễn phí như Let's Encrypt, GOFIBER cũng mang đến cho khách hàng của mình 
    giải pháp chứng chỉ SSL được cấp từ các thương hiệu công nghệ bảo mật hàng đầu như SSL DV, SSL Wildcard DV, Digicert Basic EV (FLEX),...`,
    image: HOME2_IMAGE.OTHER_SERVICE.SSL,
    link: "/chung-chi-ssl",
    classText: "align-items-start",
  },
];

function SectionOtherService() {
  return (
    <section className="section-hot-service">
      <div className="container">
        <div className="text-center">
          <h2 data-aos="fade-up" className="h2">
            Các dịch vụ hỗ trợ công nghệ khác
          </h2>
        </div>

        {data.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            className={`row align-items-center ${item.class}`}
          >
            <div className="col col-12 col-lg-6 text-center">
              <div className="img">
                <img
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={400}
                />
              </div>
            </div>

            <div
              className={`col col-12 col-lg-5 d-flex justify-content-center flex-column ${item.classText}`}
            >
              <h3 className="h3 title">{item.title}</h3>
              <div
                style={{ textAlign: "justify" }}
                className="mt-2 mt-md-4 content"
              >
                {item.content}
              </div>
              <div className="mt-4">
                <Link className="a" href={item.link} className="mt-4">
                  <TextIconButton
                    className="btn-primary-to-white"
                    name="Xem thêm"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionOtherService;
