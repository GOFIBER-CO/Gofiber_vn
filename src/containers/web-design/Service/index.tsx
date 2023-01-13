import React from 'react';
import Image from 'next/image';

const Service = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="row">
          <div className="col-12 service__title pb-2">
            <div className="service__title_bg">
              <span className="service__title_text">
                BẠN QUAN TÂM GÌ ĐẾN DỊCH VỤ CỦA CHÚNG TÔI
              </span>
              <Image
                src={require('@/public/images/webdesign/element1.png')}
                alt=""
                // style={{ zIndex: '10' }}
                className="service__image_absolute"
              />
              <Image
                src={require('@/public/images/webdesign/element2.png')}
                alt=""
                // style={{ zIndex: '10' }}
                className="service__image_absolute_right"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="row align-center service__row_form">
          <div className="service__row_form_col">
            <div className="col-12 service__row_form_col_img">
              <Image
                src={require('@/public/images/webdesign/Frame-88.png')}
                alt=""
                // style={{ zIndex: '10' }}
                //  className="OurProducts__image_absolute"
              />
            </div>
            <div className="col-12 service__row_form_col_icon">
              <span style={{ marginRight: '15px' }}>
                <button className="service__row_form_col_icon_button">
                  Thiết kế website
                </button>
              </span>
              <span style={{ marginRight: '15px' }}>
                <button className="service__row_form_col_icon_button">
                  Web Hosting
                </button>
              </span>
              <span style={{ marginRight: '15px' }}>
                <button className="service__row_form_col_icon_button">
                  Thuê VPS
                </button>
              </span>
              <span style={{ marginRight: '15px' }}>
                <button className="service__row_form_col_icon_button">
                  SSL
                </button>
              </span>
              <span style={{ marginRight: '15px' }}>
                <button className="service__row_form_col_icon_button">
                  Thuê máy chủ vật lý
                </button>
              </span>
              <span style={{ marginRight: '15px' }}>
                <button className="service__row_form_col_icon_button">
                  Thuê chỗ đặt máy chủ
                </button>
              </span>
              <span style={{ marginRight: '15px' }}>
                <button className="service__row_form_col_icon_button">
                  Firewall
                </button>
              </span>
              <span style={{ marginRight: '15px' }}>
                <button className="service__row_form_col_icon_button">
                  Khác
                </button>
              </span>
            </div>
            <div className="col-12">
              <input
                className="service__row_form_col_input"
                placeholder="Họ tên"
              />
            </div>
            <div className="col-12">
              <input
                className="service__row_form_col_input"
                placeholder="Số điện thoại"
              />
            </div>
            <div className="col-12">
              <input
                className="service__row_form_col_input"
                placeholder="Email"
              />
            </div>
            <div className="col-12">
              <textarea
                className="service__row_form_col_textarea"
                placeholder=""
              />
            </div>
            <div className="col-12">
              <button className="service__row_form_col_buton_Lh">
                LIÊN HỆ NGAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
