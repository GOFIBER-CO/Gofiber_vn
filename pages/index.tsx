import SliderService from '@/src/containers/home/SliderService';
import Image from 'next/image';
import React from 'react'
import EffectButton from '../src/components/button/EffectButton';

function Home() {

  return (
    <div id='home' className='container'>
      <section className='top'>
        {/* <div className="bg section-bg fill bg-fill bg-loaded">
        </div> */}
        <div className='section-content position-relative'>
          <div className='row align-items-center justify-content-center'>
            <div className='col col-12 col-md-6'>
              <div className='col-left content'>
                <h1 className='uppercase'>CÔNG NGHỆ GIẢI PHÁP TỐI ƯU VÀ TIẾT KIỆM</h1>
                <p>
                  Tự hào Phát triển và đi lên nhờ vào sự tin tưởng của khách hàng với dịch vụ thiết kế website giá rẻ uy tín và tối ưu.
                  Công ty TNHH Công Nghệ Phần Mềm GOFIBER tự tin có thể tiếp tục mở rộng dịch vụ và mang đến nhiều hơn nữa các giá trị cho khách hàng của mình.
                </p>
                <EffectButton color='primary' name='Liên hệ ngay' />
              </div>
            </div>
            <div className='col col-12 col-md-6'>
              <div className='img col-right'>
                <div className='img img-inner dark'>
                  <Image src={require("@/public/images/introduction/Video-33.gif")} alt="Video 33" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='section-content position-relative'>
          <div className='row justify-content-center'>
            <div className='col col-12 col-lg-8'>
              <div className='col-inner'>
                <div className='row row-title justify-content-center'>
                  <div className='col col-11 col-md-5 col-title-1 text-center'>
                    <h2 className='m-0'>DỊCH VỤ CỦA CHÚNG TÔI</h2>
                  </div>
                </div>
                <div className='text-center'>
                  <p className='describe'>Với sự đầu tư đồng bộ về công nghệ và yếu tố con người đặt lên hàng đầu.
                    <br />
                    Chúng tôi cam kết đảm bảo 100% hài lòng.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <SliderService />
          </div>
        </div>
      </section >
    </div >
  )
}

export default Home;