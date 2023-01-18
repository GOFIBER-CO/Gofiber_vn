import { Icon } from '@iconify/react';
import { Drawer, Menu, MenuProps } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import EffectButton from '../components/button/EffectButton';
import { ICON } from '../utils';

type Props = {
    visible: boolean;
    onClose: () => void;
}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Giới thiệu', '/introduction', null),
    getItem('Dịch vụ', '2', null, [
        getItem('Thiết kế Website', '/web-design', <Image className='menu_icon' src={require("@/public/images/icons/icon-1.svg")} alt="Thiết kế website" />),
        getItem('Hosting khủng giá rẻ ', '/web-hosting', <Image className='menu_icon' src={require("@/public/images/icons/icon-2.svg")} alt="Hosting khủng giá rẻ" />),
        getItem('Dịch vụ Firewall', '/firewall', <Image className='menu_icon' src={require("@/public/images/icons/icon-3.svg")} alt="Dịch vụ Firewall" />),
        getItem('Thuê VPS', '/rent-vps', <Image className='menu_icon' src={require("@/public/images/icons/icon-4.svg")} alt="Thuê VPS" />),
        getItem('Chứng chỉ SSL', '/ssl', <Image className='menu_icon' src={require("@/public/images/icons/icon-5.svg")} alt="Chứng chỉ SSL" />),
        getItem('Thuê máy chủ vật lý', '/rent-physical-server', <Image className='menu_icon' src={require("@/public/images/icons/icon-6.svg")} alt="Thuê máy chủ vật lý" />),

    ]),

    getItem('Liên hệ', '/contact', null),
    getItem('Tuyển dụng', '4', null),
];

const logo = (
    <div className='img p-3'>
        <Image style={{ width: 'auto', height: '48px' }} src={require("@/public/images/logo.png")} alt='logo' />
    </div>
)

function DrawerMenu({ onClose, visible }: Props) {
    const router = useRouter();

    const handleRedirect = (path: string) => {
        router.push(path);
        onClose();
    }

    return (
        <div>
            <Drawer onClose={onClose} rootClassName='drawer_menu' placement='left' title={logo} open={visible}>
                <div className='wrapper_drawer'>
                    <Menu
                        onClick={(e) => handleRedirect(e.key)}
                        style={{ width: '100%' }}
                        mode="inline"
                        items={items}
                    />
                </div>
                <div className='mt-4 text-center'>
                    <a href='tel:0971026910' className='btn0 btn-support'>
                        <Icon icon={ICON.CALL} />
                        Hỗ trợ 24/7: 0971026910
                    </a>
                </div>

                <ul className='d-flex m-0 p-0 mt-4 align-items-center justify-content-center'>
                    <li>
                        <EffectButton name='Đăng ký' color='white' />
                    </li>
                    <li className='mx-2'>
                        <EffectButton name='Đăng nhập' color='primary' />
                    </li>
                </ul>
            </Drawer>
        </div>
    )
}

export default DrawerMenu