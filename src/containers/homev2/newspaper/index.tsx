import React from "react";
import SlideNewspaper from "./SliderWhyChoose";

function Newspaper() {
    return (
        <section className="section-why-choose">
            <div data-aos="fade-up" className="container">
                <div className="text-center">
                    <h2 className="h2">Vì sao nên chọn sử dụng dịch vụ tại GoFiber</h2>
                </div>

                <SlideNewspaper />
            </div>
        </section>
    );
}

export default Newspaper;
