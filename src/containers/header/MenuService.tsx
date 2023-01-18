import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const menu = [
    {
        title: 'Thiết kế website',
        image: require("@/public/images/menu/web-design.svg"),
        link: '/web-design'
    },
    {
        title: 'Hosting khủng giá rẻ',
        image: require("@/public/images/menu/web-hosting.svg"),
        link: '/web-hosting'
    },
    {
        title: 'Dịch vụ Firewall',
        image: require("@/public/images/menu/firewall.svg"),
        link: '/firewall'
    },
    {
        title: 'Thuê VPS',
        image: require("@/public/images/menu/vps.svg"),
        link: '/rent-vps'
    },
    {
        title: 'Chứng chỉ SSL',
        image: require("@/public/images/menu/ssl.svg"),
        link: '/ssl'
    },
    {
        title: 'Thuê máy chủ vật lý',
        image: require("@/public/images/menu/physical-server.svg"),
        link: '/rent-physical-server'
    }
]

function MenuService() {
    const [hide, setHide] = useState<boolean>(false);

    const onClick = () => {
        setHide(true);
        setTimeout(() => setHide(false), 100)
    }

    return (
        <div className={`menu_service nav-dropdown ${hide ? 'hide' : ''}`}>
            <div className='row'>
                {
                    menu.map((item, index) =>
                        <div className='col col-6 sub_menu' key={index}>
                            <Link onClick={onClick} href={item.link}>
                                <Image
                                    className="menu_icon"
                                    src={item.image}
                                    alt={item.title}
                                />
                                <span>{item.title}</span>
                            </Link>
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default MenuService;
