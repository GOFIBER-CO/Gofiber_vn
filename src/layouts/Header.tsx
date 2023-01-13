import { Popover } from 'antd';
import Image from 'next/image';
import React from 'react';
import EffectButton from '../components/button/EffectButton';
import MenuService from '../containers/header/MenuService';
import { Icon } from '@iconify/react'
import { ICON } from '../utils';
import DrawerButton from '../components/button/IconButton';

type Props = {
    onShowDrawer: () => void;
}

function Header({ onShowDrawer }: Props) {
    return (
        <header id='header' className=''>
            <div className='header_wrapper'>
                <div className='container d-flex align-items-center justify-content-between'>
                    <a href='/'>
                        <Image id='logo' className='logo-left logo' src={require("@/public/images/logo.png")} alt="" />
                    </a>
                    <div className='flex-col flex-left flex-grow hide-for-medium'>
                        <ul className='nav justify-content-end'>
                            <li className='menu_item'>
                                <a href='/introduction'>
                                    Giới thiệu
                                </a>
                            </li>
                            <li className='menu_item has-dropdown position-relative'>
                                <a href='#'>
                                    Dịch vụ
                                    <Icon icon={ICON.DOWN} />
                                </a>
                                <MenuService />
                            </li>

                            <li className='menu_item'>
                                <a href='/contact'>
                                    Liên hệ
                                </a>
                            </li>
                            <li className='menu_item'>
                                <a href='#'>
                                    Tuyển dụng
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='hide-for-large'>
                        <DrawerButton onClick={onShowDrawer} icon={ICON.MENU} classNameButton="menu-button" />
                    </div>
                    <div className='flex-right flew-col hide-for-medium'>
                        <ul className='d-flex align-items-center justify-content-center p-0 mb-2'>
                            <li className='mx-2'>
                                <EffectButton name='Đăng ký' color='white' />
                            </li>
                            <li>
                                <EffectButton name='Đăng nhập' color='primary' />
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </header >
    )
}

export default Header;