import TextIconButton from "@/src/components/button/TextIconButton";
import { HOME2_IMAGE } from "@/src/utils";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: "1",
    title: "Web Hosting ",
    content: `Đi lên từ dịch vụ nền tảng là Thiết kế website nên GOFIBER hiểu rõ hơn ai hết những mong đợi của khách hàng đối với dịch vụ web hosting.
     Do vậy, chúng tôi luôn cố gắng mang đến cho khách hàng dịch vụ hosting chất lượng cùng cam kết uptime lên đến 99,9%.`,
    image: HOME2_IMAGE.HOT_SERVICE.WEB_HOSTING,
    class: "flex-row-reverse",
    link: "/hosting-khung-gia-re",
    classText: "align-items-start align-items-lg-end",
  },
  {
    id: "2",
    title: "Server máy chủ vật lý",
    content: `Máy chủ của GOFIBER được đặt tại các Datacenter hàng đầu Việt Nam đạt tiêu chuẩn quốc tế TIER 3 như FPT, Viettel, v.v. 
    Dịch vụ cho thuê máy chủ và cho thuê chỗ đặt máy chủ của của GOFIBER luôn ổn định và đạt hiệu quả cao.`,
    image: HOME2_IMAGE.HOT_SERVICE.PHYSICAL_SERVER,
    link: "/thue-may-chu-vat-ly",
    classText: "align-items-start",
  },
  {
    id: "3",
    title: "Server máy chủ ảo",
    content: `Với việc đang sở hữu đội ngũ nhân lực trẻ trung, năng động,
     nhiệt huyết và luôn sẵn sàng cập nhật những kiến thức và công nghệ mới mẻ, dịch vụ máy chủ VPS của GOFIBER không ngừng được nâng cao.
     Các dịch vụ VPS như VPS SSD, Cloud VPS, VPS giá rẻ, VPS treo game,... đang là sự lựa chọn ưu tiên hàng đầu của các khách hàng.`,
    image: HOME2_IMAGE.HOT_SERVICE.VPS,
    class: "flex-row-reverse",
    link: "/thue-may-chu-vat-ly",
    classText: "align-items-start align-items-lg-end",
  },
];

function SectionHotService() {
  return (
    <section className="section-hot-service">
      <div className="container">
        <div className="text-center">
          <h2 data-aos="fade-up" className="h2">
            Dịch vụ nổi bật tại GoFiber
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
                <Link href={item.link} className="a mt-4">
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

export default SectionHotService;
