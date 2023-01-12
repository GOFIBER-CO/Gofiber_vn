import TextIconButton from '@/src/components/button/TextIconButton';
import { ICON, NEWS_TAB } from '@/src/utils';
import { Icon } from '@iconify/react';
import { Button } from 'antd';
import React, { useState } from 'react'
import NewsItem from './NewsItem';

const data = [
    {
        id: 1,
        type: "Tin tức",
        class: "news",
        time: "12/12/2022",
        title: "Tránh lỗi SEO với chỉ 5 bước cơ bản",
        image: require("@/public/images/introduction/news-1.png"),
    },
    {
        id: 2,
        type: "Sự kiện",
        class: "event",
        time: "12/12/2022",
        title: "Tránh lỗi SEO với chỉ 5 bước cơ bản",
        image: require("@/public/images/introduction/news-2.png"),
    },
    {
        id: 3,
        type: "Tin tức",
        class: "news",
        time: "12/12/2022",
        title: "Tránh lỗi SEO với chỉ 5 bước cơ bản",
        image: require("@/public/images/introduction/news-3.png"),
    },
    {
        id: 4,
        type: "Sự kiện",
        class: "event",
        time: "12/12/2022",
        title: "Tránh lỗi SEO với chỉ 5 bước cơ bản",
        image: require("@/public/images/introduction/news-4.png"),
    },
    {
        id: 5,
        type: "Tin tức",
        class: "news",
        time: "12/12/2022",
        title: "Tránh lỗi SEO với chỉ 5 bước cơ bản",
        image: require("@/public/images/introduction/news-5.png"),
    },
    {
        id: 6,
        type: "Sự kiện",
        class: "event",
        time: "12/12/2022",
        title: "Tránh lỗi SEO với chỉ 5 bước cơ bản",
        image: require("@/public/images/introduction/news-6.png"),
    }
]

function NewsAndEvents() {
    const [tab, setTab] = useState<string>('all');

    const render = {
        all: <></>
    }

    return (
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
                    <TextIconButton className='mt-4' name="Xem tất cả" icon={ICON.RIGHT} color="white" styles={{ boxShadow: 'none' }} />
                </div>
                <div className='row mt-4'>
                    {
                        data.map(item => <NewsItem key={item.id} item={item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsAndEvents;