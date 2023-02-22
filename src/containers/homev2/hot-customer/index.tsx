import React from "react";
import SliderHotCustomer from "./SliderHotCustomer";
import Marquee from "react-fast-marquee";
import { HOME_IMAGE } from "@/src/utils";

const data = [
  {
    id: "1",
    image: HOME_IMAGE.CUSTOMER.FIRST,
  },
  {
    id: "2",
    image: HOME_IMAGE.CUSTOMER.SECOND,
  },
  {
    id: "3",
    image: HOME_IMAGE.CUSTOMER.THIRD,
  },
  {
    id: "4",
    image: HOME_IMAGE.CUSTOMER.FOURTH,
  },
  {
    id: "5",
    image: HOME_IMAGE.CUSTOMER.FIFTH,
  },
];

function HotCustomer() {
  return (
    <section className="section-hot-customer">
      <div data-aos="fade-up" className="container">
        <div className="row justify-content-center">
          <div className="col col-12 col-md-8">
            <div className="text-center">
              <h2 className="h2">Khách hàng tiêu biểu</h2>
              <p className="mt-3 extra-title">
                GOFIBER tự hào cung cấp dịch vụ hosting, máy chủ vật lý, máy chủ
                ảo VPS tốc độ cao cho hơn 1000 khách hàng trong nước và quốc tế.
                GOFIBER luôn sẵn sàng đáp ứng nhu cầu đa dạng của tất cả các
                khách hàng ở tất cả các lĩnh vực
              </p>
            </div>
          </div>
        </div>

        <div className="marquee-hot-customer">
          <Marquee gradient={false} speed={150}>
            {data.map((item) => (
              <div
                key={item.id}
                className="img d-flex align-items-center justify-content-center"
                style={{ height: "100%" }}
              >
                <div className="px-4">
                  <img
                    style={{ height: "100px" }}
                    width={250}
                    height={100}
                    src={item.image}
                    alt={item.id}
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* <SliderHotCustomer /> */}
      </div>
    </section>
  );
}

export default HotCustomer;
