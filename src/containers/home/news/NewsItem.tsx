import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    item: any;
}

function NewsItem({ item }: Props) {
    return (
        <div className='col col-12 col-sm-6 col-lg-4' data-aos="fade-up">
            <div className='news_item'>
                <Link href='/'>
                    <div className='box-image'>
                        <div className='image-cover'>
                            <Image className='img' src={item?.image || require("@/public/images/introduction/news-1.png")} alt={item?.id} />
                        </div>
                    </div>
                    <div className='wrapper_content'>
                        <div className='time'>{moment(item?.createdAt).format("DD/MM/YYYY")}</div>
                        <div className='title mt-2'>{item.title}</div>
                    </div>
                </Link>
                <div className={`type news`}>
                    {'Tin tức'}
                </div>
            </div>
        </div>
    )
}

export default NewsItem