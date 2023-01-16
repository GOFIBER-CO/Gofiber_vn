import TextIconButton from '@/src/components/button/TextIconButton'
import Image from 'next/image'
import React from 'react'

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

function Contact() {
    return (
        <div className='col col-12 col-md-10 col-lg-10'>
            <form className='contact_form'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-10'>
                        <div className='img text-center'>
                            <Image className='logo' src={require("@/public/images/logo.png")} alt="Logo" />
                        </div>
                        <div className='mx-2 font_size_20 font_weight_500'>Bạn cần</div>
                        <div className='category_list d-flex align-items-center flex-wrap'>
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
                        <div className='row mt-4'>
                            <div className='col-12 col-md-6 mt-4 px-2'>
                                <input placeholder='Tên của bạn' />
                            </div>
                            <div className='col-12 col-md-6 mt-4 px-2'>
                                <input placeholder='Email của bạn' />
                            </div>
                            <div className='col-12 col-md-6 mt-4 px-2'>
                                <input placeholder='Số điện thoại' />
                            </div>
                            <div className='col-12 col-md-6 mt-4 px-2'>
                                <input placeholder='Về dự án của bạn' />
                            </div>
                        </div>
                        <div className='text-center mt-4'>
                            <TextIconButton className='mt-4' name='Gửi ngay' color='primary' type='submit' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact