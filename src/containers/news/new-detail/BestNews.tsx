import { HOME_IMAGE } from '@/src/utils';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';

type Props = {
    item: any,
    className: string,
    onRedirect?: () => void;
}

function BestNews({ className, item, onRedirect = () => null }: Props) {
    return (
        <div className={`row best-news-item mt-4 ${className}`}>
            <div className='wrapper-best-news'>
                <Link onClick={onRedirect} href={`/${item?.slug}`}>
                    <img src={item?.thumb || HOME_IMAGE.NEWS} alt={item?.title} />
                </Link>
                <div className='info'>
                    <Link onClick={onRedirect} href={`/${item?.slug}`} className='news-title'>
                        {item?.title}
                    </Link>
                    <div className='time mt-2'>{moment(item?.createdAt).format("HH:mm, DD/MM/YYYY")}</div>
                </div>
            </div>
        </div>
    )
}

export default BestNews