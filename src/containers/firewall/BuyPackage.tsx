import { formatNumber, openNotificationWithIcon } from '@/src/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { notification } from 'antd';
function BuyPackage({ packageSelect }: any) {
  const [usedTime, setUsedTime] = useState(1);
  const [api, contextHolder] = notification.useNotification();
  const handleBuyPackage = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const templateParams = {
      to_name: formProps?.fullName,
      number_phone: formProps?.numberPhone,
      email: formProps?.email,
      comment: formProps?.comment || '',
      name_service: 'Firewall 1',
      price: formatNumber(91800),
      used_time: `${usedTime} tháng`,
      total_price: formatNumber(91800 * usedTime),
    };

    emailjs
      .send(
        'service_1jvutpr',
        'template_28uxqmd',
        templateParams,
        'g-iUYFW8FHIpEY9Rx',
      )
      .then(
        (response) => {
          console.log(response);
          openNotificationWithIcon(
            'success',
            'Đặt hàng thành công',
            'Đơn hàng đặt thành công. Quý khách vui lòng kiểm tra email để xem chi tiết đơn hàng.',
            api,
          );
        },
        (err) => {
          console.log(err);
          openNotificationWithIcon(
            'error',
            'Đặt hàng thất bại',
            'Đã có lỗi xảy ra. Quý khách vui lòng thử lại sau',
            api,
          );
        },
      );
  };
  return (
    <div id="buy-package">
      {contextHolder}
      <div className="row mx-0 justify-content-center">
        <div className="col col-12 col-md-6">
          <form className="form" onSubmit={handleBuyPackage}>
            <div className="img text-center">
              <Image
                className="logo"
                src={require('@/public/images/logo.png')}
                alt="Logo"
              />
            </div>
            <p
              className="tab_content text-center mt-2"
              style={{ color: '#777777' }}
            >
              <strong>Firewall 1</strong>
              <br />
              <span
                style={{
                  'fontSize': '48px',
                  'fontWeight': 'bold',
                  'color': '#00acd7',
                }}
              >
                {formatNumber(91800)}
              </span>
              VNĐ/Th
            </p>
            <div className="row">
              <div className="col col-12">
                <input placeholder="Họ tên" name="fullName" />
              </div>
              <div className="col-12">
                <input placeholder="Số điện thoại" name="numberPhone" />
              </div>
              <div className="col-12 ">
                <input placeholder="Email" name="email" />
              </div>
              <div className="col-12 ">
                <select
                  placeholder="Thời gian"
                  name="timeUsed"
                  onChange={(e) => setUsedTime(parseInt(e.target.value))}
                >
                  <option value={1}>1 tháng</option>
                  <option value={3}>3 tháng</option>
                  <option value={6}>6 tháng</option>
                  <option value={9}>9 tháng</option>
                  <option value={12}>12 tháng</option>
                </select>
              </div>
              <div className="col-12 ">
                <textarea placeholder="" rows={5} name="comment"></textarea>
              </div>
              <div className="col-12">
                <span style={{ fontSize: '20px', marginTop: '5px' }}>
                  Tổng thanh toán{' '}
                  <span style={{ color: '#F2994A', fontWeight: '700' }}>
                    {formatNumber(91800 * usedTime)}đ
                  </span>
                </span>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn0" id="btn-registry">
                MUA NGAY
              </button>
            </div>
          </form>
        </div>
        <div className="col col-12 mt-4 mt-md-0 col-md-4">
          <div className="form">
            <h4 className="h4">
              Thanh toán bằng tiền mặt tại văn phòng Công ty GoFiber
            </h4>
            <p className="font_size_14 font_weight_400 mt-3 color_777777">
              Quý khách đến và thực hiện thanh toán bằng tiền mặt trực tiếp tại
              văn phòng Công ty GoFiber tại các địa chỉ sau:
              <br />
              Số 131, Đường CN11, P. Sơn Kỳ, Q. Tân Phú, TP.HCM
            </p>
            <div className="show-for-small">
              <h4 className="h4">
                Thanh toán bằng tiền mặt tại văn phòng Công ty GoFiber
              </h4>
              <ul className="has-style mt-3 font_size_14 font_weight_400 mt-3 color_777777">
                <li>Số TK: 060260311991</li>
                <li>Tên TK: Nguyễn Trung Hiếu</li>
                <li>Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank)</li>
              </ul>
              <p className="mt-2 font_size_14 font_weight_400 mt-3 color_777777">
                Quý khách thực hiện chuyển khoản vào một trong các tài khoản
                hiển thị bên tay phải, với số tiền chính xác kèm theo nội dung
                chuyển khoản theo đúng cú pháp là HD{'<'}Số hoá đơn{'>'}. Ví dụ
                số hoá đơn là #100149 thì cú pháp sẽ là HD100149.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyPackage;
