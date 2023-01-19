import TextIconButton from '@/src/components/button/TextIconButton';
import TitleWithLine from '@/src/components/TitleWithLine';
import Contact from '@/src/containers/home/contact';
import MyCustomer from '@/src/containers/home/my-customer';
import NewsAndEvents from '@/src/containers/home/news';
import Question from '@/src/containers/home/question';
import ServiceList from '@/src/containers/home/service';
import SliderHot from '@/src/containers/home/SliderHot';
import SliderMyCustomer from '@/src/containers/home/SliderMyCustomer';
import SliderService from '@/src/containers/home/SliderService';
import DrawerMenu from '@/src/layouts/DrawerMenu';
import { useAppSelector } from '@/src/redux';
import { ICON } from '@/src/utils';
import Image from 'next/image';
import { useRouter } from 'next/router';

import React, { useState } from 'react';

import EffectButton from '../src/components/button/EffectButton';

const dataWhy = [
  {
    id: '1',
    class: 'row-why-1',
    title: 'Giá rẻ ổn định',
    content:
      'Cam kết luôn đem tới cho khách hàng dịch vụ cho thuê máy chủ, thuê server giá rẻ, đường truyền ổn định',
    image: require('@/public/images/introduction/why-1.png'),
    aos: ["fade-right", "fade-left"]
  },
  {
    id: '2',
    class: 'row-why-2',
    title: 'Bảo mật tối đa',
    content: `Với hơn 300.000 website đang hoạt động trên hệ thống, 
    chúng tôi luôn có các quy trình chặt chẽ để bảo vệ dữ liệu của khách hàng trên mức cần thiết.`,
    image: require('@/public/images/introduction/why-2.png'),
    aos: ["fade-left", "fade-right"]
  },
  {
    id: '3',
    class: 'row-why-1',
    title: 'Hỗ trợ kỹ thuật 24/7/365',
    content: `Đội ngũ kỹ thuật đông đảo chuyên môn cao luôn túc trực 24/7 nhằm mang lại sự yên tâm 
    tối đa cho khách hàng, tất cả vấn đề của bạn sẽ luôn được phản hồi dưới 15 phút. 
    Chúng tôi tự hào là một trong những đơn vị có chế độ hỗ trợ khách hàng tốt nhất hiện nay.`,
    image: require('@/public/images/introduction/why-3.png'),
    aos: ["fade-right", "fade-left"]
  },
];

function Home() {
  const router = useRouter();

  return (
    <div id="home">
      <section className="top">
        {/* <div className="bg section-bg fill bg-fill bg-loaded">
        </div> */}
        <div className="section-content position-relative bg-custom">
          <div className='container'>
            <div className="row align-items-center">
              <div className="col col-12 col-md-6 col-lg-4">
                <div className="col-left content">
                  <h1 className="uppercase">
                    CÔNG NGHỆ GIẢI PHÁP TỐI ƯU VÀ TIẾT KIỆM
                  </h1>
                  <p style={{ textAlign: 'justify' }}>
                    Tự hào Phát triển và đi lên nhờ vào sự tin tưởng của khách
                    hàng với dịch vụ thiết kế website giá rẻ uy tín và tối ưu.
                    Công ty TNHH Công Nghệ Phần Mềm GOFIBER tự tin có thể tiếp tục
                    mở rộng dịch vụ và mang đến nhiều hơn nữa các giá trị cho
                    khách hàng của mình.
                  </p>
                  <EffectButton onClick={() => router.push("/contact")} color="primary" name="Liên hệ ngay" />
                </div>
              </div>
              <div className="col col-12 col-md-6 col-lg-8 mt-4 mt-md-0">
                <div className='row justify-content-end'>
                  <div className='col col-12 col-lg-8'>
                    <div className="img col-right">
                      <div className="img img-inner dark">
                        <Image
                          src={require('@/public/images/Init.gif')}
                          alt="Video 33"
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
            <div style={{ marginBottom: '-150px' }} className="row justify-content-center">
              <div className="col col-12 col-lg-8">
                <TitleWithLine title='DỊCH VỤ CỦA CHÚNG TÔI'
                  extra='Với sự đầu tư đồng bộ về công nghệ và yếu tố con người đặt lên hàng đầu.'
                  extra2='Chúng tôi cam kết đảm bảo 100% hài lòng.' />
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
                <TitleWithLine title='NỔI BẬT'
                  extra='Các tính năng vượt trội so với số còn lại trên thị trường của các sản phẩm và dịch vụ do GOFIBER cung cấp.' />
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
                <TitleWithLine title='VÌ SAO CHỌN HOSTING VÀ MÁY CHỦ CÙNG CÁC SẢN PHẨM KHÁC CỦA GOFIBER'
                  extra='Bạn hoàn toàn yên tâm với khoản đầu tư ít tốn kém.'
                  extra2='Không chịu rủi ro phần cứng và đường truyền thuộc phía nhà cung cấp cấp dịch vụ.' />
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col col-12 col-md-7">
                {dataWhy.map((item) => (
                  <div
                    key={item.id}
                    className={`row align-items-center ${item.class}`}
                  >
                    <div data-aos={item.aos[0]} className="col col-12 col-md-6">
                      <h6 className="title">{item.title}</h6>
                      <p className="content">{item.content}</p>
                      <TextIconButton
                        name="Xem chi tiết"
                        color="white"
                        icon={ICON.RIGHT}
                      />
                    </div>
                    <div data-aos={item.aos[1]} className="col col-12 col-md-6 mt-4 mt-md-0 d-flex justify-content-center justify-content-md-start">
                      <Image src={item.image} alt={item.title} />
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
                <TitleWithLine title='KHÁCH HÀNG CỦA CHÚNG TÔI' />
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
                        BẠN QUAN TÂM GÌ ĐẾN DỊCH VỤ CỦA CHÚNG TÔI
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
  );
}

export default Home;
