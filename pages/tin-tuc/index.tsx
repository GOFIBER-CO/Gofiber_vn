import { SeoApi } from '@/src/api/seo';
import BannerPage from '@/src/components/banner/BannerPage';
import NewItem from '@/src/containers/news/NewItem';
import { useAppDispatch } from '@/src/redux';
import { getPagingByCate, getPagingByDomain } from '@/src/redux/slice';
import { NEWS_IMAGE } from '@/src/utils';
import { is } from 'immer/dist/internal';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import parse from 'html-react-parser';
import BannerV2Page from '@/src/components/banner/BannerV2Page';

const banner = {
  large: NEWS_IMAGE.BANNER_LARGE,
  medium: NEWS_IMAGE.BANNER_MEDIUM,
  small: NEWS_IMAGE.BANNER_SMALL,
};

const SkeletonItem = () => {
  return (
    <div className='col-12 col-md-6 mb-4 d-flex justify-content-center'>
      <div className='p-2 recruit-item-skeleton'>
        <Skeleton style={{ height: '200px' }} count={1} />
        <Skeleton style={{ height: '24px', width: '70%' }} className='mt-4' />
        <Skeleton style={{ height: '72px' }} className='mt-4' />
      </div>
    </div>
  );
};

type Props = {
  tags: any[];
};

function NewsPage({ tags }: Props) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [news, setNews] = useState<any[]>([]);
  const [news1, setNews1] = useState<any[]>([]);
  const [cateList, setCateList] = useState<any>([]);
  const [cateList1, setCateList1] = useState<any>([]);

  const [pageIndex, setPageIndex] = useState<number>(1);
  const [isLoadingSeeMore, setIsLoadingSeeMore] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const getPosts = async () => {
    try {
      const params = {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        status: 1,
        pageSize: 6,
        pageIndex,
      };
      const params1 = {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        status: 1,
        pageSize: 6,
        pageIndex,
      };

      const result = await dispatch(getPagingByDomain(params)).unwrap();
      const result1 = await dispatch(getPagingByCate(params1)).unwrap();
      const { data, count } = result?.data;
      setNews1(result1?.data.data || []);
      setCateList(result?.data.cateList as any);
      setCateList1(result?.data.cateList as any);
      setNews(data || []);
      setCount(count || 0);
    } catch (error) {
      console.log('getPosts', error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  const getPostsSeeMore = async () => {
    try {
      setIsLoadingSeeMore(true);
      const params = {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        status: 1,
        pageSize: 6,
        pageIndex,
      };

      const result = await dispatch(getPagingByDomain(params)).unwrap();
      const { data } = result?.data;
      setNews(prevState => {
        return [...prevState, ...(data || [])];
      });
      setCateList((prevState: any) => {
        return [...prevState, ...(result?.data.cateList || [])];
      });
    } catch (error) {
      console.log('getPosts', error);
    } finally {
      setIsLoadingSeeMore(false);
    }
  };
  useEffect(() => {
    if (pageIndex > 1) getPostsSeeMore();
  }, [pageIndex]);

  const onSeeMore = () => {
    setPageIndex(prevState => prevState + 1);
  };

  const render = {
    isLoading: (
      <div className='row'>
        {[1, 3].map(item => (
          <SkeletonItem key={item} />
        ))}
      </div>
    ),
    notLoading: (
      <>
        {news?.length === 0 ? (
          <div className='row justify-content-center'>
            <div className='col col-12 col-md-6 col-lg-6'>
              <div className='img'>
                <Image
                  src={require('@/public/images/nodata.png')}
                  alt='Hi???n t???i kh??ng c?? b??i vi???t'
                />
              </div>
              <h4 className='h4 text-center'>Hi???n t???i kh??ng c?? b??i vi???t</h4>
            </div>
          </div>
        ) : (
          <>
            <div className='row' style={{ marginBottom: '130px' }}>
              {news1.map((item, index) => (
                <NewItem
                  cateList={cateList1[index]}
                  item={item}
                  wrapperClassName={`col-lg-4 col-md-6 `}
                  key={index}
                />
              ))}
            </div>
            <div className='row'>
              {news.map((item, index) => (
                <NewItem
                  cateList={cateList[index]}
                  item={item}
                  wrapperClassName={`col-lg-4 col-md-6 `}
                  key={index}
                />
              ))}
            </div>
            {news?.length < count && (
              <div className='row'>
                <div className='mt-4 d-flex justify-content-center'>
                  <button
                    onClick={onSeeMore}
                    type='button'
                    className={`btn0 button_text_icon button_text_icon__white mt-4`}
                  >
                    <span>Xem th??m</span>
                    <Image
                      style={{ marginLeft: '8px' }}
                      src={require('@/public/images/icons/right.svg')}
                      alt='Xem th??m'
                    />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </>
    ),
  };

  return (
    <>
      <Head>
        {tags.map((tag, index) => (
          <React.Fragment key={index}>{parse(tag)}</React.Fragment>
        ))}
      </Head>
      <div id='news'>
        <BannerV2Page
          styleLinkName={{ maxWidth: '400px' }}
          image='https://gofiber.b-cdn.net/new-design/tin-tuc/desktop-tin-tuc.png'
          name='Tin t???c'
          extra='C???p nh???t tin t???c d???ch v???, s???n ph???m v?? tuy???n d???ng t??? c??ng ty GOFIBER.'
          showButton={false}
        />
        <div className='container'>
          <section className='section-recruit'>
            {isLoading ? render['isLoading'] : render['notLoading']}
          </section>
        </div>
      </div>
    </>
  );
}

export default NewsPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const params: any = {
      link: '/tin-tuc',
      domain: process.env.NEXT_PUBLIC_DOMAIN,
    };

    const response = await SeoApi.getSeoByLink(params);

    const tags = response?.data?.data?.tags;

    return {
      props: {
        tags: tags?.map((item: any) => item?.value) || [],
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}
