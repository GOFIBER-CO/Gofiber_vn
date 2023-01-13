import BannerPage from '@/src/components/banner/BannerPage'
import TextIconInfo from '@/src/components/footer/TextIconInfo'
import { ICON } from '@/src/utils'
import { Icon } from '@iconify/react'
import React from 'react'

const banner = {
    large: 'https://gofiber.vn/wp-content/uploads/2023/01/bg-lienhe.png',
    medium: 'https://gofiber.vn/wp-content/uploads/2023/01/tablet-lienhe.png',
    small: 'https://gofiber.vn/wp-content/uploads/2023/01/mobile-dieukhoanvadieukien-1.png'
}

const data = [
    {
        id: '1',
        name: "Thiết kế website",
    },
    {
        id: '2',
        name: "Web Hosting",
    },
    {
        id: '3',
        name: "Thuê VPS",
    },
    {
        id: '4',
        name: 'SSL'
    },
    {
        id: '5',
        name: "Thuê máy chủ vật lý",
    },
    {
        id: '6',
        name: "Thuê chỗ đặt máy chủ",
    },
    {
        id: '7',
        name: "Firewall",
    },
    {
        id: '8',
        name: "Khác",
    },

]

const infoData = [
    {
        id: '1',
        text: 'Số 131, Đường CN11, P. Sơn Kỳ, Q. Tân Phú, TP.HCM',
        icon: require("@/public/images/icons/address.svg")
    },
    {
        id: '2',
        text: 'Sales@gofiber.vn',
        icon: require("@/public/images/icons/email.svg")
    },
    {
        id: '3',
        text: '0989.07.85.07',
        icon: require("@/public/images/icons/call.svg")
    },
]

function Contact() {
    return (
        <div id='contact'>
            <section>
                <BannerPage image={banner} name="Liên hệ" />
            </section>
            <div className='container'>
                <section className='section-contact'>
                    <div className='row justify-content-center'>
                        <div className='col col-12 col-md-6'>
                            <h3 className='h3'>LIÊN HỆ  VỚI GOFIBER</h3>
                            <div className='mt-3'>
                                <div className='extra_info'>
                                    <Icon icon={ICON.RIGHT_CIRCLE} />
                                    <span>
                                        Hợp tác
                                    </span>
                                </div>
                                <div className='extra_info'>
                                    <Icon icon={ICON.RIGHT_CIRCLE} />
                                    <span>
                                        Khiếu nại & góp ý
                                    </span>
                                </div>
                            </div>
                            <div className='mt-3'>
                                {
                                    infoData.map(item => (
                                        <TextIconInfo key={item.id} icon={item.icon} text={item.text} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className='col col-12 col-md-6'>
                            <form className='effect_form'>
                                <div className='category_list d-flex align-items-center justify-content-lg-center flex-wrap'>
                                    {
                                        data.map(item => (
                                            <div className='category_item' key={item.id}>
                                                <button type='button' className='btn0 py-2 px-3 py-lg-3 px-lg-4'>
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
                                <button className='btn0' type='submit'>
                                    LIÊN HỆ NGAY
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact