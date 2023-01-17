import Link from 'next/link';
import React from 'react'

type Props = {
    image: {
        large: any,
        medium: any,
        small: any
    },
    name: string;
    bannerLinkLargeWidth?: string;
    bannerLinkMediumWidth?: string;
    bannerLinkSmallWidth?: string;
    styleLinkName?: any;
}

function BannerPage({ image, name, bannerLinkLargeWidth = "21%", bannerLinkMediumWidth = "43%", bannerLinkSmallWidth = "83%",
    styleLinkName = {} }: Props) {

    return (
        <>
            <div className='banner banner-page hide-for-medium' style={{ backgroundImage: `url(${image?.large})` }}>
                <div className='fill className="container"'>
                    <div className='banner-bg fill'>
                        <div className='banner-layers'>
                            <div style={{ width: bannerLinkLargeWidth }} className='banner-link large'>
                                <h1 style={styleLinkName}>{name}</h1>
                                <div className='link d-flex align-items-center justify-content-center mt-4'>
                                    <Link href='/'>Trang chủ</Link>
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
                            <div style={{ width: bannerLinkMediumWidth }} className='banner-link medium text-center'>
                                <h1 style={styleLinkName}>{name}</h1>
                                <div className='link d-flex align-items-center justify-content-center mt-4'>
                                    <Link href='/'>Trang chủ</Link>
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
                            <div style={{ width: bannerLinkSmallWidth }} className='banner-link small text-center'>
                                <h1 style={styleLinkName}>{name}</h1>
                                <div className='link d-flex align-items-center justify-content-center mt-4'>
                                    <Link href='/'>Trang chủ</Link>
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