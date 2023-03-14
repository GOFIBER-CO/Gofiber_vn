import { HOME_IMAGE } from '@/src/utils';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';

type Props = {
  item: any;
  onRedirect?: () => void;
};

function RelativeNews({ item, onRedirect = () => null }: Props) {
  return (
    <div className='row relative-news-item mt-4'>
      <div className='col-4'>
        <div className='img'>
          <Link className='a' onClick={onRedirect} href={`/${item?.slug}`}>
            <img src={item?.thumb || HOME_IMAGE.NEWS} alt={item?.title} />
          </Link>
        </div>
      </div>
      <div className='col-8'>
        <Link
          onClick={onRedirect}
          href={`/${item?.slug}`}
          className='title-news a'
        >
          {item?.title}
        </Link>
        <p
          className='description mt-2 mb-0 number_line_3'
          dangerouslySetInnerHTML={{
            __html: item?.description.replace(/<[^>]*>/g, ''),
          }}
        ></p>
        <div className='time mt-2'>
          <div className='time mt-2'>
            {moment(item?.createdAt).format('HH:mm, DD/MM/YYYY')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelativeNews;
