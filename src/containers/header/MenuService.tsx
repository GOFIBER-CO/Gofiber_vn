import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function MenuService() {
    return (
        <ul className="menu_service nav-dropdown">
            <li className="sub_menu">
                <Link href="/web-design">
                    <Image
                        className="menu_icon"
                        src={require('@/public/images/icons/icon-1.svg')}
                        alt="Thiết kế website"
                    />
                    Thiết kế website
                </Link>
            </li>
            <li className="sub_menu">
                <Link href="/web-hosting">
                    <Image
                        className="menu_icon"
                        src={require('@/public/images/icons/icon-2.svg')}
                        alt="Hosting khủng giá rẻ"
                    />
                    Hosting khủng giá rẻ
                </Link>
            </li>
            <li className="sub_menu">
                <Link href="/firewall">
                    <Image
                        className="menu_icon"
                        src={require('@/public/images/icons/icon-3.svg')}
                        alt="Dịch vụ Firewall"
                    />
                    Dịch vụ Firewall
                </Link>
            </li>
            <li className="sub_menu">
                <Link href="/rent-vps">
                    <Image
                        className="menu_icon"
                        src={require('@/public/images/icons/icon-4.svg')}
                        alt="Thuê VPS"
                    />
                    Thuê VPS
                </Link>
            </li>
            <li className="sub_menu">
                <Link href="/ssl">
                    <Image
                        className="menu_icon"
                        src={require('@/public/images/icons/icon-5.svg')}
                        alt="Chứng chỉ SSL"
                    />
                    Chứng chỉ SSL
                </Link>
            </li>
            <li className="sub_menu">
                <Link href="/rent-physical-server">
                    <Image
                        className="menu_icon"
                        src={require('@/public/images/icons/icon-6.svg')}
                        alt="Thuê máy chủ vật lý"
                    />
                    Thuê máy chủ vật lý
                </Link>
            </li>
        </ul>
    );
}

export default MenuService;
