import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import { Pagination } from 'swiper';
import TextIconPrice from '@/src/components/web-hosting/TextIconPrice';
import { formatNumber } from '@/src/utils';
import ButtonSlideSeeMore from '@/src/components/button/ButtonSlideSeeMore';
const data = [
  {
    id: '1',
    name: 'Website Hosting Cao Cấp',
    extra: 'Giải pháp lý tưởng cho người mới',
    price: '45000',
    feature: [
      '1 trang web',
      '50 GB Dung lượng ổ SSD',
      '~10 000 lượt truy cập hàng tháng',
      '100 GB Băng thông',
      '2 Databases',
    ],
    security: [
      'SSL Miễn phí Không giới hạn',
      'Nameservers bảo vệ bằng Cloudflare',
    ],
    free: ['Website builder', 'Sao lưu hàng tuần'],
    isBest: true,
  },
  {
    id: '2',
    name: 'Website Hosting Cá Nhân',
    extra: 'Giải pháp lý tưởng cho người mới',
    price: '25000',
    feature: [
      '1 trang web',
      '50 GB Dung lượng ổ SSD',
      '~10 000 lượt truy cập hàng tháng',
      '100 GB Băng thông',
      '2 Databases',
    ],
    security: [
      'SSL Miễn phí Không giới hạn',
      'Nameservers bảo vệ bằng Cloudflare',
    ],
    free: ['Website builder', 'Sao lưu hàng tuần'],
  },
  {
    id: '3',
    name: 'Website Hosting Doanh nghiệp',
    extra: 'Giải pháp lý tưởng cho người mới',
    price: '75000',
    feature: [
      '1 trang web',
      '50 GB Dung lượng ổ SSD',
      '~10 000 lượt truy cập hàng tháng',
      '100 GB Băng thông',
      '2 Databases',
    ],
    security: [
      'SSL Miễn phí Không giới hạn',
      'Nameservers bảo vệ bằng Cloudflare',
    ],
    free: ['Website builder', 'Sao lưu hàng tuần'],
  },
  {
    id: '4',
    name: 'Website Hosting Doanh nghiệp',
    extra: '',
    price: '105000',
    feature: [
      '5 trang web',
      '50 GB Dung lượng ổ SSD',
      '~10 000 lượt truy cập hàng tháng',
      '100 GB Băng thông',
      '2 Databases',
    ],
    security: [
      'SSL Miễn phí Không giới hạn',
      'Nameservers bảo vệ bằng Cloudflare',
    ],
    free: ['Website builder', 'Sao lưu hàng tuần'],
  },
  {
    id: '5',
    name: 'Website Hosting Doanh nghiệp',
    extra: '',
    price: '105000',
    feature: [
      '10 trang web',
      '50 GB Dung lượng ổ SSD',
      '~10 000 lượt truy cập hàng tháng',
      '100 GB Băng thông',
      '5 Databases',
    ],
    security: [
      'SSL Miễn phí Không giới hạn',
      'Nameservers bảo vệ bằng Cloudflare',
    ],
    free: ['Website builder', 'Sao lưu hàng tuần'],
  },
];

const responsive = [
  {
    id: 1,
    class: 'show-for-small',
    slidesPerView: 1,
  },
  {
    id: 2,
    class: 'show-for-medium hide-for-small ',
    slidesPerView: 2,
  },
  {
    id: 3,
    class: 'hide-for-medium',
    slidesPerView: 3,
  },
];

function SliderHostingPrice({ onSelectPackage }: any) {
  return (
    <div id="slider-web-hosting">
      {responsive.map((item) => (
        <div className={item.class} key={item.id}>
          <Swiper
            slidesPerView={item.slidesPerView}
            spaceBetween={10}
            centeredSlides
            pagination={{
              clickable: true,
            }}
            scrollbar={{ draggable: true }}
            loop
            modules={[Pagination]}
            className="mySwiper hide-pagination"
            autoplay
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`web-hosting-item ${item.isBest ? 'best' : ''}`}>
                  <div className="wrapper_content">
                    <p className="text-center">
                      <strong>{item.name}</strong>
                      <br />
                      <span className="mt-2" style={{ fontSize: '14px' }}>
                        {item.extra}
                      </span>
                      <br />
                      <span
                        className="color_primary"
                        style={{
                          fontSize: '48px',
                          fontWeight: 'bold',
                        }}
                      >
                        {formatNumber(item?.price)}
                      </span>
                      VNĐ/Th
                    </p>
                    <div className="text-center">
                      <button className="btn0">
                        <a
                          href="#buy-package"
                          onClick={() => onSelectPackage(item)}
                        >
                          <span>Thêm vào giỏ hàng</span>
                        </a>
                      </button>
                    </div>
                    <div className="my-3 divider divider--primary"></div>
                    <div>Tính năng hàng đầu</div>
                    {item.feature.map((e, index) => (
                      <TextIconPrice key={index} content={e} />
                    ))}
                    <div className="mt-3">Bảo mật</div>
                    {item.security.map((e, index) => (
                      <TextIconPrice key={index} color="green" content={e} />
                    ))}
                    <div className="mt-3">Phần thưởng miễn phí</div>
                    {item.free.map((e, index) => (
                      <TextIconPrice key={index} color="blue" content={e} />
                    ))}
                  </div>
                  <ButtonSlideSeeMore alt={item.name} isBest={item.isBest || false} />
                  {
                    item.isBest && <div className="wrapper-best">
                      <button className="btn0 btn-best">
                        <span>Phổ biến nhất</span>
                      </button>
                    </div>
                  }

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}

export default SliderHostingPrice;
