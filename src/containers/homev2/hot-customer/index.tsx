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
        <div className="text-center">
          <h2 className="h2">Khách hàng tiêu biểu</h2>
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
