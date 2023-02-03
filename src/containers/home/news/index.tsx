import TextIconButton from '@/src/components/button/TextIconButton';
import TitleWithLine from '@/src/components/TitleWithLine';
import { useAppDispatch } from '@/src/redux';
import { getPagingByDomain } from '@/src/redux/slice';
import { ICON, NEWS_TAB } from '@/src/utils';
import { Icon } from '@iconify/react';
import { Button } from 'antd';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';

// const data = [
//     {
//         id: 1,
//         type: "Tin tức",
//         class: "news",
//         time: "12/12/2022",
//         title: "Tránh lỗi SEO với chỉ 5 bước cơ bản",
//         image: require("@/public/images/introduction/news-1.png"),
//     },
//     {
//         id: 2,
//         type: "Sự kiện",
//         class: "event",
//         time: "12/12/2022",
//         title: "Tránh lỗi SEO với chỉ 5 bước cơ bản",
//         image: require("@/public/images/introduction/news-2.png"),
//     },
//     {
//         id: 3,
//         type: "Tin tức",
//         class: "news",
//         time: "12/12/2022",
//         title: "Tránh lỗi SEO với chỉ 5 bước cơ bản",
//         image: require("@/public/images/introduction/news-3.png"),
//     },
//     {
//         id: 4,
//         type: "Sự kiện",
//         class: "event",
//         time: "12/12/2022",
//         title: "Tránh lỗi SEO với chỉ 5 bước cơ bản",
//         image: require("@/public/images/introduction/news-4.png"),
//     },
//     {
//         id: 5,
//         type: "Tin tức",
//         class: "news",
//         time: "12/12/2022",
//         title: "Tránh lỗi SEO với chỉ 5 bước cơ bản",
//         image: require("@/public/images/introduction/news-5.png"),
//     },
//     {
//         id: 6,
//         // type: "Sự kiện",
//         // class: "event",
//         time: "12/12/2022",
//         title: "Tránh lỗi SEO với chỉ 5 bước cơ bản",
//         image: require("@/public/images/introduction/news-6.png"),
//     }
// ]

function NewsAndEvents() {
    const dispatch = useAppDispatch();
    const [tab, setTab] = useState<string>('all');
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const params = {
                    domain: process.env.NEXT_PUBLIC_DOMAIN,
                    status: 1,
                    pageSize: 6,
                    pageIndex: 1,
                }

                const result = await dispatch(getPagingByDomain(params)).unwrap();
                const { data } = result?.data;

                setData(data || [])
            } catch (error) {
                console.log('getPosts', error)
            }
        }
        if (tab === NEWS_TAB.EVENT) setData([]);
        else
            getPosts();
    }, [tab])

    return (
        <section className="section-news">
            <div className="section-content position-relative">
                <div className="row justify-content-center">
                    <div className="col col-12 col-lg-8">
                        <TitleWithLine title='TIN TỨC VÀ SỰ KIỆN'
                            extra=' Cập nhật tin tức công nghệ, cập nhật kiến thức và các tin khuyến mãi từ GOFIBER' />
                    </div>
                </div>
                <div className="row">
                    <div className='wrapper_news'>
                        <div className='d-flex justify-content-center'>
                            <div className='tabs'>
                                <button onClick={() => setTab(NEWS_TAB.ALL)} className={`tab_item tab_item__left ${Boolean(tab === NEWS_TAB.ALL) ? 'active' : ''}`}>Tất cả</button>
                                <button onClick={() => setTab(NEWS_TAB.NEWS)} className={`tab_item ${Boolean(tab === NEWS_TAB.NEWS) ? 'active' : ''}`}>Tin tức</button>
                                <button onClick={() => setTab(NEWS_TAB.EVENT)} className={`tab_item tab_item__right ${Boolean(tab === NEWS_TAB.EVENT) ? 'active' : ''}`}>Sự kiện</button>
                            </div>
                        </div>
                        <div className='news_list'>
                            <div className='d-flex justify-content-end'>
                                {
                                    data?.length > 0 &&
                                    <TextIconButton className='mt-4' name="Xem tất cả" icon={ICON.RIGHT} color="white" styles={{ boxShadow: 'none' }} />
                                }
                            </div>
                            {
                                data?.length > 0 ? <div className='row mt-4'>
                                    {
                                        data.map((item, index) => <NewsItem key={index} item={item} />)
                                    }
                                </div>
                                    :
                                    <div className='row justify-content-center'>
                                        <div className='col col-12 col-md-6 col-lg-6'>
                                            <div className='img'>
                                                <Image src={require("@/public/images/nodata.png")} alt='Hiện tại không có bài viết1' />
                                            </div>
                                            <h4 className='h4 text-center'>Hiện tại không có bài viết</h4>

                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsAndEvents;