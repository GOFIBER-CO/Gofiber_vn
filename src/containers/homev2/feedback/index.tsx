import React from "react";
import SliderFeedback from "./SliderFeedback";

function Feedback() {
  return (
    <section className="section-feedback">
      <div data-aos="fade-up" className="container">
        <div className="text-center">
          <h2 className="h2">Phản hồi từ khách hàng</h2>
        </div>

        <SliderFeedback />
      </div>
    </section>
  );
}

export default Feedback;
