import TextIconButton from "@/src/components/button/TextIconButton";
import { Select } from "antd";
import React from "react";

const data = [
  {
    id: 1,
    name: ".com",
    extra: "",
  },
  {
    id: 2,
    name: ".org",
    extra: "",
  },
  {
    id: 3,
    name: ".info",
    extra: "",
  },
  {
    id: 4,
    name: ".store",
    extra: "",
  },
  {
    id: 5,
    name: ".net",
    extra: "",
  },
  {
    id: 6,
    name: ".co.uk",
    extra: "",
  },
];

function SectionDomain() {
  return (
    <section className="section-domain">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col col-12 col-md-5">
            <h2 className="h2">Giảm giá 10% hôm nay</h2>
            <div className="mt-2 title-2">
              Tìm kiếm <strong>Tên miền</strong> của bạn một cách nhanh chóng và
              sở hữu ngay!
            </div>
          </div>
          <div className="col col-12 col-md-6 mt-4 mt-md-0">
            <div className="wrapper-choose-domain d-flex ">
              <div style={{ width: "100%" }}>
                <input placeholder="Tên miền của bạn" />
              </div>
              <div className="d-flex align-items-center">
                <div className="select-domain">.com</div>
                <div>
                  <TextIconButton
                    styles={{ boxShadow: "none" }}
                    name="Tìm kiếm"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 d-flex align-items-center justify-content-between flex-wrap">
              {data.map((item) => (
                <div key={item.id}>
                  <div>{item.name}</div>
                  <div>{item.extra}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionDomain;
