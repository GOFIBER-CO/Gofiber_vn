import Image from 'next/image';
import React from 'react';

function Header() {
    return (
        <header id='header' className=''>
            <div className='header_wrapper'>
                <div className='container d-flex align-items-center justify-content-between'>
                    <a href='/'>
                        <Image id='logo' className='logo-left logo' src={require("../assets/images/logo.png")} alt="" />
                    </a>
                    <div className='flex-col flex-left flex-grow'>
                        dsa
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;