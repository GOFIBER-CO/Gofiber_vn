import React from "react";
import SlideWhyChoose from "./SliderWhyChoose";

function WhyChoose() {
  return (
    <section className="section-why-choose">
      <div data-aos="fade-up" className="container">
        <div className="text-center">
          <h2 className="h2">Vì sao nên chọn sử dụng dịch vụ tại GoFiber</h2>
        </div>

        <SlideWhyChoose />
      </div>
    </section>
  );
}

export default WhyChoose;
