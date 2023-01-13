import React from 'react'

type Props = {
    image: {
        large: any,
        medium: any,
        small: any
    },
    name: string;
}

function BannerPage({ image, name }: Props) {

    return (
        <>
            <div className='banner banner-page hide-for-medium' style={{ backgroundImage: `url(${image?.large})` }}>
                <div className='fill className="container"'>
                    <div className='banner-bg fill'>
                        <div className='banner-layers'>
                            <div className='banner-link large'>
                                <h1>{name}</h1>
                                <div className='link d-flex align-items-center justify-content-center'>
                                    <a href='/'>Trang chủ</a>
                                    <a className='mx-2'>{'>'}</a>
                                    <a>{name}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner banner-page show-for-medium hide-for-small' style={{ backgroundImage: `url(${image?.medium})` }}>
                <div className='fill'>
                    <div className='banner-bg fill'>
                        <div className='banner-layers'>
                            <div className='banner-link medium text-center'>
                                <h1>{name}</h1>
                                <div className='link d-flex align-items-center justify-content-center'>
                                    <a href='/'>Trang chủ</a>
                                    <a className='mx-2'>{'>'}</a>
                                    <a>{name}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner banner-page show-for-small' style={{ backgroundImage: `url(${image?.small})` }}>
                <div className='fill'>
                    <div className='banner-bg fill'>
                        <div className='banner-layers'>
                            <div className='banner-link small text-center'>
                                <h1>{name}</h1>
                                <div className='link d-flex align-items-center justify-content-center'>
                                    <a href='/'>Trang chủ</a>
                                    <a className='mx-2'>{'>'}</a>
                                    <a>{name}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BannerPage