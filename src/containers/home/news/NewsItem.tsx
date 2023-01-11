import Image from 'next/image';
import React from 'react'

type Props = {
    item: any;
}

function NewsItem({ item }: Props) {
    return (
        <div className='col col-12 col-sm-6 col-lg-4'>
            <div className='news_item'>
                <a href='/'>
                    <div className='box-image'>
                        <div className='image-cover'>
                            <Image className='img' src={item?.image} alt={item?.id} />
                        </div>
                    </div>
                    <div className='wrapper_content'>
                        <div className='time'>{item.time}</div>
                        <div className='title mt-2'>{item.title}</div>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default NewsItem