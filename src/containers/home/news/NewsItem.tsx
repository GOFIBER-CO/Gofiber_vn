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
                            <Image className='img' src={item?.image} alt={item?.id} />
                        </div>
                    </div>
                    <div className='wrapper_content'>
                        <div className='time'>{item.time}</div>
                        <div className='title mt-2'>{item.title}</div>
                    </div>
                </Link>
                <div className={`type ${item.class}`}>
                    {item.type}
                </div>
            </div>
        </div>
    )
}

export default NewsItem