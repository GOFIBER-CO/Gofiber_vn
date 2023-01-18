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

function Header({ onShowDrawer }: Props) {
    return (
        <header id='header' className=''>
            <div className='header_wrapper'>
                <div className='container d-flex align-items-center justify-content-between'>
                    <Link href='/'>
                        <Image id='logo' className='logo-left logo' src={require("@/public/images/logo.png")} alt="" />
                    </Link>
                    <div className='flex-col flex-left flex-grow hide-for-932'>
                        <ul className='nav justify-content-end'>
                            <li className='menu_item'>
                                <Link href='/introduction'>
                                    Giới thiệu
                                </Link>
                            </li>
                            <li className='menu_item has-dropdown position-relative'>
                                <Link href='/service'>
                                    Dịch vụ
                                    <Icon icon={ICON.DOWN} />
                                </Link>
                                <MenuService />
                            </li>

                            <li className='menu_item'>
                                <Link href='/contact'>
                                    Liên hệ
                                </Link>
                            </li>
                            <li className='menu_item'>
                                <Link href='#'>
                                    Tuyển dụng
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='show-for-932'>
                        <DrawerButton onClick={onShowDrawer} icon={ICON.MENU} classNameButton="menu-button" />
                    </div>
                    <div className='flex-right flew-col hide-for-932'>
                        <ul className='d-flex align-items-center justify-content-center p-0 mb-2'>
                            <li className='mx-2'>
                                <EffectButton styles={{ width: '100px' }} name='Đăng ký' color='white' />
                            </li>
                            <li>
                                <EffectButton styles={{ width: '100px' }} name='Đăng nhập' color='primary' />
                            </li>
                            <li>
                                <a href='tel:0971026910' className='btn0 btn-support'>
                                    <Icon icon={ICON.CALL} />
                                    Hỗ trợ 24/7: 0971026910
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