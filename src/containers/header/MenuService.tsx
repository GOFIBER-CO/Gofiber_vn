import Image from 'next/image'
import React from 'react';

function MenuService() {
    return (
        <ul className='menu_service'>
            <li className='sub_menu'>
                <a href='/'>
                    <Image className='menu_icon' src={require("@/public/images/icons/icon-1.svg")} alt="Thiết kế website" />
                    Thiết kế website
                </a>
            </li>
            <li className='sub_menu'>
                <a href='/'>
                    <Image className='menu_icon' src={require("@/public/images/icons/icon-2.svg")} alt="Hosting khủng giá rẻ" />
                    Hosting khủng giá rẻ
                </a>
            </li>
            <li className='sub_menu'>
                <a href='/'>
                    <Image className='menu_icon' src={require("@/public/images/icons/icon-3.svg")} alt="Dịch vụ Firewall" />
                    Dịch vụ Firewall
                </a>
            </li>
            <li className='sub_menu'>
                <a href='/'>
                    <Image className='menu_icon' src={require("@/public/images/icons/icon-4.svg")} alt="Thuê VPS" />
                    Thuê VPS
                </a>
            </li>
            <li className='sub_menu'>
                <a href='/'>
                    <Image className='menu_icon' src={require("@/public/images/icons/icon-5.svg")} alt="Chứng chỉ SSL" />
                    Chứng chỉ SSL
                </a>
            </li>
            <li className='sub_menu'>
                <a href='/'>
                    <Image className='menu_icon' src={require("@/public/images/icons/icon-6.svg")} alt="Thuê máy chủ vật lý" />
                    Thuê máy chủ vật lý
                </a>
            </li>
        </ul>
    )
}

export default MenuService