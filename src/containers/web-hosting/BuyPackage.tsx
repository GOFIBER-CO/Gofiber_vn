import Image from 'next/image'
import React from 'react'

function BuyPackage() {
    return (
        <div id='buy-package'>
            <div className='row mx-0 justify-content-center'>
                <div className='col col-12 col-md-6'>
                    <form className='form'>
                        <div className='img text-center'>
                            <Image className='logo' src={require("@/public/images/logo.png")} alt="Logo" />
                        </div>
                        <p className='tab_content text-center mt-2 hide-for-small' style={{ color: '#777777' }}>
                            <strong>Website Hosting Cá Nhân</strong>
                            <br />
                            Giải pháp lý tưởng cho người mới<br />
                            <span style={{ "fontSize": "48px", "fontWeight": "bold", "color": "#00acd7" }}>25.000</span>VNĐ/Th
                        </p>
                        <div className='row'>
                            <div className='col col-12'>
                                <input placeholder='Họ tên' />
                            </div>
                            <div className='col-12'>
                                <input placeholder='Số điện thoại' />
                            </div>
                            <div className='col-12 '>
                                <input placeholder='Email' />
                            </div>
                            <div className='col-12 '>
                                <textarea placeholder='' rows={5}></textarea>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='btn0' id='btn-registry'>MUA NGAY</button>
                        </div>
                    </form>
                </div>
                <div className='col col-12 mt-4 mt-md-0 col-md-4'>
                    <div className='form'>
                        <h4 className='h4'>
                            Thanh toán bằng tiền mặt tại văn phòng Công ty GoFiber
                        </h4>
                        <p className='font_size_14 font_weight_400 mt-3 color_777777'>
                            Quý khách đến và thực hiện thanh toán bằng tiền mặt trực tiếp tại văn phòng Công ty GoFiber tại các địa chỉ sau:
                            <br />
                            Số 131, Đường CN11, P. Sơn Kỳ, Q. Tân Phú, TP.HCM
                        </p>
                        <div className='show-for-small'>
                            <h4 className='h4'>
                                Thanh toán bằng tiền mặt tại văn phòng Công ty GoFiber
                            </h4>
                            <ul className='has-style mt-3 font_size_14 font_weight_400 mt-3 color_777777'>
                                <li>Số TK: 060260311991</li>
                                <li>Tên TK: Nguyễn Trung Hiếu</li>
                                <li>Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank)</li>
                            </ul>
                            <p className='mt-2 font_size_14 font_weight_400 mt-3 color_777777'>
                                Quý khách thực hiện chuyển khoản vào một trong các tài khoản hiển thị bên tay phải, với số tiền chính xác kèm
                                theo nội dung chuyển khoản theo đúng cú pháp là HD{'<'}Số hoá đơn{'>'}. Ví dụ số hoá đơn là #100149 thì cú pháp sẽ là HD100149.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BuyPackage