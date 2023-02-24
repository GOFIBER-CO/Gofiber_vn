import { SeoApi } from "@/src/api/seo";
import BannerPage from "@/src/components/banner/BannerPage";
import BannerV2Page from "@/src/components/banner/BannerV2Page";
import TextIconInfo from "@/src/components/footer/TextIconInfo";
import Contact from "@/src/containers/home/contact";
import { CONTACT_IMAGE, ICON } from "@/src/utils";
import { Icon } from "@iconify/react";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";

const banner = {
  large: CONTACT_IMAGE.BANNER_LARGE,
  medium: CONTACT_IMAGE.BANNER_MEDIUM,
  small: CONTACT_IMAGE.BANNER_SMALL,
};
const data = [
  {
    id: "1",
    name: "Thiết kế website",
  },
  {
    id: "2",
    name: "Web Hosting",
  },
  {
    id: "3",
    name: "Thuê VPS",
  },
  {
    id: "4",
    name: "SSL",
  },
  {
    id: "5",
    name: "Thuê máy chủ vật lý",
  },
  {
    id: "6",
    name: "Thuê chỗ đặt máy chủ",
  },
  {
    id: "7",
    name: "Firewall",
  },
  {
    id: "8",
    name: "Khác",
  },
];

const infoData = [
  {
    id: "1",
    text: "Số 131, Đường CN11, P. Sơn Kỳ, Q. Tân Phú, TP.HCM",
    icon: CONTACT_IMAGE.LOCATION,
  },
  {
    id: "2",
    text: "0989.07.85.07",
    icon: CONTACT_IMAGE.PHONE,
  },
  {
    id: "3",
    text: "Sales@gofiber.vn",
    icon: CONTACT_IMAGE.EMAIL,
  },
];

type DataType = {
  id: string;
  name: string;
};

type Props = {
  tags: any[];
};

function ContactPage({ tags }: Props) {
  const [dataSelected, setDataSelected] = useState<Array<DataType>>([data[0]]);

  const selected = (id: string) => {
    const isSelected = dataSelected.find((item) => item.id === id);

    return isSelected ? "selected" : "";
  };

  const onChoose = (item: DataType) => {
    const isExist = dataSelected.find((e) => e?.id === item?.id);

    if (isExist)
      setDataSelected((prevState) => {
        return prevState.filter((e) => e?.id !== item?.id);
      });
    else
      setDataSelected((prevState) => {
        return [...prevState, item];
      });
  };

  return (
    <>
      <Head>
        <title>Liên hệ Công ty TNHH Công Nghệ Phần Mềm Gofibe</title>
        <link rel="canonical" href="https://gofiber.vn/lien-he" />
        {tags.map((tag, index) => (
          <React.Fragment key={index}>{ReactHtmlParser(tag)}</React.Fragment>
        ))}
      </Head>
      <div id="contact">
        <BannerV2Page
          styleLinkName={{ maxWidth: "400px" }}
          image="https://gofiber.b-cdn.net/new-design/lien-he/desktop-lien-he.png"
          name="Liên hệ"
          extra="Những giao diện website mà gofiber.vn cung cấp luôn làm hài lòng khách hàng. Sự hài lòng của khách hàng là động lực để chúng tôi phát triển"
        />
        <div className="container">
          <section className="section-contact">
            <div className="row justify-content-center align-items-center">
              <div className="my-4 text-center">
                <h3 className="h3">LIÊN HỆ VỚI GOFIBER</h3>
              </div>
              <div className="col col-10 col-md-6 d-flex justify-content-center justify-content-md-end">
                <img
                  src={CONTACT_IMAGE.ILLUSTRATION}
                  alt="LIÊN HỆ VỚI GOFIBER"
                  width={400}
                  height={500}
                />
              </div>
              <div className="col col-10 col-md-6">
                <div className="mt-3">
                  {infoData.map((item) => (
                    <div
                      className="extra_info d-flex align-items-center"
                      key={item.id}
                    >
                      <img
                        src={item.icon}
                        alt={item.text}
                        width={50}
                        height={50}
                      />
                      <div>{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className='col col-12 col-md-6'>
                            <form className='effect_form'>
                                <div className='category_list d-flex align-items-center justify-content-lg-center flex-wrap'>
                                    {
                                        data.map(item => (
                                            <div className={`category_item ${selected(item?.id)}`} key={item.id}>
                                                <button onClick={() => onChoose(item)} type='button' className='btn0 py-2 px-3 py-lg-3 px-lg-4'>
                                                    {item.name}
                                                </button>
                                            </div>
                                        )
                                        )
                                    }
                                </div>

                                <div className='wrapper_input'>
                                    <input className='effect_input' placeholder='Họ tên' />
                                </div>
                                <div className='wrapper_input'>
                                    <input className='effect_input' placeholder='Số điện thoại' />
                                </div>
                                <div className='wrapper_input'>
                                    <input className='effect_input' placeholder='Email' />
                                </div>
                                <div className='wrapper_input'>
                                    <textarea className='effect_input' placeholder='Nội dung' rows={5}></textarea>
                                </div>
                                <button id='btn-registry' className='btn0' type='submit'>
                                    LIÊN HỆ NGAY
                                </button>
                            </form>
                        </div> */}
            </div>
            <Contact showTitle={false} />
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const params: any = {
      link: "/lien-he",
      domain: process.env.NEXT_PUBLIC_DOMAIN,
    };

    const response = await SeoApi.getSeoByLink(params);

    const tags = response?.data?.data?.tags;

    return {
      props: {
        tags: tags?.map((item: any) => item?.value) || [],
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
