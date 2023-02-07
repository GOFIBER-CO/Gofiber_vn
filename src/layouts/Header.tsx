import { Popover } from 'antd';
import Image from 'next/image';
import React from 'react';
import EffectButton from '../components/button/EffectButton';
import MenuService from '../containers/header/MenuService';
import { Icon } from '@iconify/react'
import { ICON } from '../utils';
import DrawerButton from '../components/button/IconButton';
import Link from 'next/link';

type Props = {
    onShowDrawer: () => void;
}

function Header({ onShowDrawer }: Props): any {
    return (
        <header id='header' className=''>
            <div className='header_wrapper'>
                <div style={{ height: '80px' }} className='container d-flex align-items-center justify-content-between'>
                    <Link href='/'>
                        <Image id='logo' className='logo-left logo' src={require("@/public/images/logo.png")} alt="" />
                    </Link>
                    <div className='flex-col flex-left flex-grow hide-for-932'>
                        <ul className='nav justify-content-end'>
                            <li className='menu_item'>
                                <Link href='/gioi-thieu'>
                                    Giới thiệu
                                </Link>
                            </li>
                            <li className='menu_item has-dropdown position-relative'>
                                <Link href='/dich-vu'>
                                    Dịch vụ
                                    <Icon icon={ICON.DOWN} />
                                </Link>
                                <MenuService />
                            </li>

                            <li className='menu_item'>
                                <Link href='/lien-he'>
                                    Liên hệ
                                </Link>
                            </li>
                            <li className='menu_item'>
                                <Link href='/tuyen-dung'>
                                    Tuyển dụng
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='show-for-932'>
                        <DrawerButton onClick={onShowDrawer} icon={ICON.MENU} classNameButton="menu-button" />
                    </div>
                    <div className='flex-right flew-col hide-for-932'>
                        <ul className='d-flex align-items-center justify-content-center p-0'>
                            <li className='mx-2'>
                                <a href='https://go.vngserver.vn/register'>
                                    <EffectButton className='btn_auth shadow border' styles={{ width: '136px' }} name='Đăng ký' color='white' />
                                </a>
                            </li>
                            <li>
                                <a href='https://go.vngserver.vn/'>
                                    <EffectButton className='btn_auth shadow' styles={{ width: '136px' }} name='Đăng nhập' color='primary' />
                                </a>
                            </li>
                            <li>
                                <a href='tel:0989078507' className='btn0 btn-support d-flex'>
                                    <span className='moving'>
                                        <Icon icon={ICON.CALL} />
                                        Hỗ trợ 24/7: 0989.07.85.07
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </header >
    )
}

export default Header;