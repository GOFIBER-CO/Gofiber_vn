import React, { useState, useMemo, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import { Pagination } from 'swiper';
import TextIconPrice from '@/src/components/web-hosting/TextIconPrice';
import { formatNumber } from '@/src/utils';

const dataWithTab = [
  {
    tab: 'vps',
    data: [
      {
        id: 1,
        name: 'CLOUD VPS 1GB',
        extra: 'Giải pháp lý tưởng cho người mới',
        price: '190000',
        feature: {
          name: 'Tính năng hàng đầu',
          data: ['1 CPU', '1GB RAM', '15GB SSD', 'Công nghệ Ảo Hoá KVM'],
        },
        security: {
          name: 'Bảo mật',
          data: ['SSL Miễn phí Không giới hạn', 'Hạn chế tấn công DDOS'],
        },
        free: {
          name: 'Phần thưởng miễn phí',
          data: ['Hỗ trợ IPv6', 'Sao lưu hàng tuần'],
        },
        isBest: true
      },
      {
        id: 2,
        name: 'CLOUD VPS 2GB',
        extra: 'Giải pháp lý tưởng cho dự án nhỏ',
        price: '380000',
        feature: {
          name: 'Tính năng hàng đầu',
          data: ['2 CPU', '2GB RAM', '20GB SSD', 'Công nghệ Ảo Hoá KVM'],
        },
        security: {
          name: 'Bảo mật',
          data: ['SSL Miễn phí Không giới hạn', 'Hạn chế tấn công DDOS'],
        },
        free: {
          name: 'Phần thưởng miễn phí',
          data: ['Hỗ trợ IPv6', 'Sao lưu hàng tuần'],
        },
      },
      {
        id: 3,
        name: 'CLOUD VN 4G',
        extra: 'Giải pháp lý tưởng cho dự án nhỏ',
        price: '720000',
        feature: {
          name: 'Tính năng hàng đầu',
          data: ['2 CPU', '8GB RAM', '60GB SSD', 'Công nghệ Ảo Hoá KVM'],
        },
        security: {
          name: 'Bảo mật',
          data: ['SSL Miễn phí Không giới hạn', 'Hạn chế tấn công DDOS'],
        },
        free: {
          name: 'Phần thưởng miễn phí',
          data: ['Hỗ trợ IPv6', 'Sao lưu hàng tuần'],
        },
      },
      {
        id: 4,
        name: 'CLOUD VN 8G',
        extra: 'Giải pháp lý tưởng cho dự án vừa và doanh nghiệp nhỏ',
        price: '1400000',
        feature: {
          name: 'Tính năng hàng đầu',
          data: ['4 CPU', '8GB RAM', '90GB SSD', 'Công nghệ Ảo Hoá KVM'],
        },
        security: {
          name: 'Bảo mật',
          data: ['SSL Miễn phí Không giới hạn', 'Hạn chế tấn công DDOS'],
        },
        free: {
          name: 'Phần thưởng miễn phí',
          data: ['Hỗ trợ IPv6', 'Sao lưu hàng tuần'],
        },
      },
      {
        id: 5,
        name: 'CLOUD VN 16G',
        extra: 'Giải pháp lý tưởng cho doanh nghiệp vừa',
        price: '2300000',
        feature: {
          name: 'Tính năng hàng đầu',
          data: ['8 CPU', '16GB RAM', '150GB SSD', 'Công nghệ Ảo Hoá KVM'],
        },
        security: {
          name: 'Bảo mật',
          data: ['SSL Miễn phí Không giới hạn', 'Hạn chế tấn công DDOS'],
        },
        free: {
          name: 'Phần thưởng miễn phí',
          data: ['Hỗ trợ IPv6', 'Sao lưu hàng tuần'],
        },
      },
      {
        id: 6,
        name: 'CLOUD VN 32G',
        extra: 'Giải pháp lý tưởng cho doanh nghiệp vừa',
        price: '3800000',
        feature: {
          name: 'Tính năng hàng đầu',
          data: ['16 CPU', '32GB RAM', '300GB SSD', 'Công nghệ Ảo Hoá KVM'],
        },
        security: {
          name: 'Bảo mật',
          data: ['SSL Miễn phí Không giới hạn', 'Hạn chế tấn công DDOS'],
        },
        free: {
          name: 'Phần thưởng miễn phí',
          data: ['Hỗ trợ IPv6', 'Sao lưu hàng tuần'],
        },
      },
    ],
  },
  {
    tab: 'Server Việt Nam',
    data: [
      {
        id: 1,
        name: 'Xeon 8 Core Series',
        extra: 'Phí khởi tạo 800.000',
        price: '4900000',
        feature: {
          name: 'Tính năng hàng đầu',
          data: [
            '8 CPU',
            '32GB RAM',
            '240GB SSD SAS',
            '100Mbps Băng thông',
            '1 IPv4',
            '16 IPv16',
          ],
        },
        free: {
          name: 'Tuỳ chọn nâng cấp',
          data: [
            '8GB RAM: 200.000 vnđ/th',
            '600GB SSD SAS: 200.000 vnđ/th',
            'Cài lại hệ điều hành: 200.000 vnđ/lần',
          ],
        },
      },
      {
        id: 2,
        name: 'Xeon 12 Core Series',
        extra: 'Phí khởi tạo 800.000',
        price: '5700000',
        feature: {
          name: 'Tính năng hàng đầu',
          data: [
            '12 CPU',
            '32GB RAM',
            '240GB SSD SAS',
            '100Mbps Băng thông',
            '1 IPv4',
            '16 IPv16',
          ],
        },
        free: {
          name: 'Tuỳ chọn nâng cấp',
          data: [
            '8GB RAM: 200.000 vnđ/th',
            '600GB SSD SAS: 200.000 vnđ/th',
            'Cài lại hệ điều hành: 200.000 vnđ/lần',
          ],
        },
      },
      {
        id: 2,
        name: 'Xeon 14 Core Series',
        extra: 'Phí khởi tạo 800.000',
        price: '6100000',
        feature: {
          name: 'Tính năng hàng đầu',
          data: [
            '14 CPU',
            '32GB RAM',
            '240GB SSD SAS',
            '100Mbps Băng thông',
            '1 IPv4',
            '16 IPv16',
          ],
        },
        free: {
          name: 'Tuỳ chọn nâng cấp',
          data: [
            '8GB RAM: 200.000 vnđ/th',
            '600GB SSD SAS: 200.000 vnđ/th',
            'Cài lại hệ điều hành: 200.000 vnđ/lần',
          ],
        },
      },
      {
        id: 2,
        name: 'Xeon 18 Core Series',
        extra: 'Phí khởi tạo 800.000',
        price: '8100000',
        feature: {
          name: 'Tính năng hàng đầu',
          data: [
            '18 CPU',
            '32GB RAM',
            '240GB SSD SAS',
            '100Mbps Băng thông',
            '1 IPv4',
            '16 IPv16',
          ],
        },
        free: {
          name: 'Tuỳ chọn nâng cấp',
          data: [
            '8GB RAM: 200.000 vnđ/th',
            '600GB SSD SAS: 200.000 vnđ/th',
            'Cài lại hệ điều hành: 200.000 vnđ/lần',
          ],
        },
      },
    ],
  },
  {
    tab: 'Server US',
  },
  {
    tab: 'Server Alibaba',
  },
  {
    tab: 'Server Singapore',
  },
  {
    tab: 'Server Japan',
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
    slidesPerView: 4,
  },
];

type Props = {
  tab: string;
  onSelectPackage: any;
};

function SliderHire({ tab, onSelectPackage }: Props) {
  const data = useMemo(() => {
    const result = dataWithTab.find((item) => item.tab === tab)?.data || [];
    onSelectPackage(result[0]);
    return result;
  }, [tab]);

  return (
    <div id="slider-hire">
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
            {data?.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <div className={`hire-item ${item.isBest ? 'best' : ''}`}>
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
                          fontSize: '32px',
                          fontWeight: 'bold',
                        }}
                      >
                        {formatNumber(parseInt(item.price))}
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
                    {item?.feature && (
                      <>
                        <div className="name">{item?.feature?.name}</div>
                        {item.feature?.data.map((e: any, index: any) => (
                          <TextIconPrice key={index} content={e} />
                        ))}
                      </>
                    )}
                    {item?.security && (
                      <>
                        <div className="name">{item?.security?.name}</div>
                        {item.security?.data.map((e: any, index: any) => (
                          <TextIconPrice
                            color="green"
                            key={index}
                            content={e}
                          />
                        ))}
                      </>
                    )}
                    {item?.free && (
                      <>
                        <div className="name">{item?.free?.name}</div>
                        {item.free?.data.map((e: any, index: any) => (
                          <TextIconPrice color="blue" key={index} content={e} />
                        ))}
                      </>
                    )}
                  </div>
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

export default SliderHire;
