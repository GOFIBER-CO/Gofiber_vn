import TextIconButton from "@/src/components/button/TextIconButton";
import TitleWithLine from "@/src/components/TitleWithLine";
import Contact from "@/src/containers/home/contact";
import MyCustomer from "@/src/containers/home/my-customer";
import NewsAndEvents from "@/src/containers/home/news";
import Question from "@/src/containers/home/question";
import ServiceList from "@/src/containers/home/service";
import SliderHot from "@/src/containers/home/SliderHot";
import SliderMyCustomer from "@/src/containers/home/SliderMyCustomer";
import SliderService from "@/src/containers/home/SliderService";
import DrawerMenu from "@/src/layouts/DrawerMenu";
import { useAppSelector } from "@/src/redux";
import { HOME_IMAGE, ICON } from "@/src/utils";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useEffect, useRef, useState } from "react";

import EffectButton from "../src/components/button/EffectButton";

const dataWhy = [
  {
    id: "1",
    class: "row-why-1",
    title: "Giá rẻ ổn định",
    content:
      "Cam kết luôn đem tới cho khách hàng dịch vụ cho thuê máy chủ, thuê server giá rẻ, đường truyền ổn định",
    image: HOME_IMAGE.WHY.CHEAP,
    aos: ["fade-right", "fade-left"],
  },
  // {
  //   id: "2",
  //   class: "row-why-2",
  //   title: "Bảo mật tối đa",
  //   content: `Với hơn 300.000 website đang hoạt động trên hệ thống,
  //   chúng tôi luôn có các quy trình chặt chẽ để bảo vệ dữ liệu của khách hàng trên mức cần thiết.`,
  //   image: HOME_IMAGE.WHY.SECURITY,
  //   aos: ["fade-left", "fade-right"],
  // },
  {
    id: "2",
    class: "row-why-2",
    title: "Cam kết chất lượng (SLA)",
    content: `Chúng tôi cam kết uptime dịch vụ Shared Hosting, VPS, Dedicated Server và 
    Co-location luôn đạt mức tối thiểu là 99,9% trong suốt thời gian sử dụng dịch vụ theo chu kỳ đã thanh toán.`,
    image: HOME_IMAGE.WHY.SECURITY,
    aos: ["fade-left", "fade-right"],
  },
  {
    id: "3",
    class: "row-why-1",
    title: "Hỗ trợ kỹ thuật 24/7/365",
    content: `Bạn có thể trò chuyện cùng 
    chúng tôi bất cứ thời điểm nào, cùng những chuyên gia giàu kinh nghiệm 
    sẵn sàng hỗ trợ bạn bất cứ lúc nào, 24/7/365.`,
    image: HOME_IMAGE.WHY.SUPPORT,
    aos: ["fade-right", "fade-left"],
  },
];

function Home() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef) {
      console.log("platyixds");
      videoRef?.current?.play();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Giải pháp công nghệ hàng đầu</title>
        <link rel="canonical" href="https://gofiber.vn/" />
      </Head>
      <div id="home">
        <section className="top">
          {/* <div className="bg section-bg fill bg-fill bg-loaded">
        </div> */}
          <div className="section-content position-relative bg-custom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col col-12 col-md-6 col-lg-4">
                  <div className="col-left content">
                    <h1 style={{ lineHeight: "1.5" }} className="uppercase h1">
                      CÔNG NGHỆ GIẢI PHÁP TỐI ƯU VÀ TIẾT KIỆM
                    </h1>
                    <p style={{ textAlign: "justify" }}>
                      Tự hào Phát triển và đi lên nhờ vào sự tin tưởng của khách
                      hàng với dịch vụ thiết kế website giá rẻ uy tín và tối ưu.
                      Công ty TNHH Công Nghệ Phần Mềm GOFIBER tự tin có thể tiếp
                      tục mở rộng dịch vụ và mang đến nhiều hơn nữa các giá trị
                      cho khách hàng của mình.
                    </p>
                    <Link href={"/lien-he"}>
                      <EffectButton
                        onClick={() => router.push("/lien-he")}
                        className="shadow"
                        color="primary"
                        name="Liên hệ ngay"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col col-12 col-md-6 col-lg-8 mt-4 mt-md-0">
                  <div className="row justify-content-end">
                    <div className="col col-12 col-lg-8">
                      <div className="img col-right">
                        <div className="img img-inner dark">
                          <video
                            style={{ width: "100%" }}
                            src={HOME_IMAGE.INIT}
                            muted
                            autoPlay
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <section>
            <div className="section-content position-relative">
              <div className="row justify-content-center">
                <div className="col col-12 col-lg-8">
                  <TitleWithLine
                    title="CÁC DỊCH VỤ CỦA GOFIBER"
                    extra="Con người và Công nghệ là hai yếu tố luôn được chúng tôi xem trọng và đặt lên hàng đầu, trong các cách vận hành cũng như trong các sản phẩm và dịch vụ của mình."
                    extra2="Chúng tôi cam kết mang đến sự hài lòng tuyệt đối cho các khách hàng của mình."
                  />
                </div>
              </div>
              <div className="row">
                <div className="hide-for-medium">
                  <SliderService />
                </div>
                <div className="hide-for-large">
                  <ServiceList />
                </div>
              </div>
            </div>
          </section>

          <section className="section-hot">
            <div className="section-content position-relative">
              <div className="row justify-content-center">
                <div className="col col-12 col-lg-8">
                  <TitleWithLine
                    title="NỔI BẬT"
                    extra="Các tính năng vượt trội so với số còn lại trên thị trường của các sản phẩm và dịch vụ do GOFIBER cung cấp."
                  />
                </div>
              </div>
              <div className="row">
                <SliderHot />
              </div>
            </div>
          </section>

          <section className="section-why">
            <div className="section-content position-relative">
              <div className="row justify-content-center">
                <div className="col col-12 col-md-8 col-lg-6">
                  <TitleWithLine
                    title="VÌ SAO CHỌN HOSTING VÀ MÁY CHỦ CÙNG CÁC SẢN PHẨM KHÁC CỦA GOFIBER"
                    extra="Chỉ với một khoản chi phí đầu tư rất nhỏ, bạn không còn phải lo lắng hay suy nghĩ về dự án website của mình khi được đặt tại GOFIBER."
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col col-12 col-md-7">
                  {dataWhy.map((item) => (
                    <div
                      key={item.id}
                      className={`row align-items-center ${item.class}`}
                    >
                      <div
                        data-aos={item.aos[0]}
                        className="col col-12 col-md-6"
                      >
                        <h6 className="title">{item.title}</h6>
                        <p className="content">{item.content}</p>
                        <TextIconButton
                          name="Xem chi tiết"
                          color="white"
                          icon={ICON.RIGHT}
                        />
                      </div>
                      <div
                        data-aos={item.aos[1]}
                        className="col col-12 col-md-6 mt-4 mt-md-0 d-flex justify-content-center justify-content-md-start"
                      >
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <NewsAndEvents />

          <Question />

          <section className="section-customer">
            <div className="section-content position-relative">
              <div className="row justify-content-center">
                <div className="col col-12">
                  <TitleWithLine title="KHÁCH HÀNG CỦA CHÚNG TÔI" />
                </div>
              </div>
              <MyCustomer />
              <SliderMyCustomer />
            </div>
          </section>

          {/* <section className="section-contact">
          <div className="section-content position-relative">
            <div className="row justify-content-center">
              <div className="col col-12">
                <div className="col-inner">
                  <div className="row row-title justify-content-center">
                    <div className="col col-12 col-md-6 col-lg-4 col-title-3 text-center">
                      <h2 className="m-0">
                        BẠN QUAN TÂM GÌ ĐẾN Các dịch vụ của GOFIBER
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <Contact />
            </div>
          </div>
        </section> */}
        </div>
      </div>
    </>
  );
}

export default Home;
