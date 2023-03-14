import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import 'moment/locale/vi';
import axios from 'axios';
import EmptyImage from '@/src/components/EmptyImage';
import { getNewsBySlug, getPagingByDomain } from '@/src/redux/slice';
import { useAppDispatch } from '@/src/redux';
import BestNews from '@/src/containers/news/new-detail/BestNews';
import { Divider } from 'antd';
import RelativeNews from '@/src/containers/news/new-detail/RelativeNews';
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton from 'react-loading-skeleton';
import Head from 'next/head';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { convertObjectToQuery } from '@/src/utils';
import { fetchApi } from '@/src/api';
import Image from 'next/image';
import NewItem from '@/src/containers/news/NewItem';
import Parser from 'html-react-parser';

import cheerio from 'cheerio';

const pageSize = 4;

const handleText = (text: any) => {
  return <React.Fragment>{text}</React.Fragment>;
};
const SkeletonPage = () => (
  <div className='row'>
    <div className='col-12 col-md-8 content mt-5'>
      <Skeleton count={1} style={{ height: '48px' }} />
      <Skeleton
        style={{ width: '200px', height: '22px' }}
        count={1}
        className='mt-4'
      />
      <Skeleton count={10} style={{ height: '24px' }} className='mt-4' />
    </div>
    <div className='col col-12 col-md-4 hide-for-medium'>
      <div className='d-flex align-items-center'>
        <Skeleton style={{ height: '60px', width: '15px' }} />
        <Skeleton
          style={{ width: '150px', marginLeft: '20px', height: '32px' }}
        />
      </div>
      <Skeleton className='mt-4' style={{ height: '200px' }} />
      <Skeleton style={{ height: '24px', width: '70%' }} className='mt-3' />
      <Skeleton style={{ height: '20px', width: '30%' }} className='mt-3' />

      <div className='mt-4 d-flex'>
        <Skeleton style={{ width: '150px', height: '100px' }} />
        <div className='mx-2'>
          <Skeleton style={{ width: '200px', height: '24px' }} />
          <Skeleton
            style={{ width: '150px', height: '20px' }}
            className='mt-3'
          />
        </div>
      </div>
      <div className='mt-4 d-flex'>
        <Skeleton style={{ width: '150px', height: '100px' }} />
        <div className='mx-2'>
          <Skeleton style={{ width: '200px', height: '24px' }} />
          <Skeleton
            style={{ width: '150px', height: '20px' }}
            className='mt-3'
          />
        </div>
      </div>
      <div className='mt-4 d-flex'>
        <Skeleton style={{ width: '150px', height: '100px' }} />
        <div className='mx-2'>
          <Skeleton style={{ width: '200px', height: '24px' }} />
          <Skeleton
            style={{ width: '150px', height: '20px' }}
            className='mt-3'
          />
        </div>
      </div>
    </div>
  </div>
);

type Props = {
  title: string;
  description: string;
};

function NewsDetail({ title, description }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { slug } = router?.query;
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [data, setData] = useState<any>({});
  const [isLoadingSeeMore, setIsLoadingSeeMore] = useState<boolean>(false);
  const [relativeNews, setRelativeNews] = useState<any[]>([]);
  const [bestNews, setBestNews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);

  const htmlText = description;
  const $ = cheerio.load(htmlText);
  const stringText = $.text();

  const text = stringText;

  const getNewsByDomain = async (slug: any) => {
    try {
      setIsLoading(true);

      const params = {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        status: 1,
        pageSize: pageSize,
        pageIndex: 1,
        slug,
      };

      const result = await dispatch(getPagingByDomain(params)).unwrap();

      const { data, count } = result?.data;
      setRelativeNews(data || []);
      setCount(count || 0);
      setPageIndex(pageIndex + 1);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getBestNews = async (slug: any) => {
    try {
      const params = {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        status: 1,
        pageSize: 5,
        slug,
        pageIndex: 1,
      };

      const result = await dispatch(getPagingByDomain(params)).unwrap();
      const { data } = result?.data;

      setBestNews(data || []);
    } catch (error) {
      console.log('error', error);
    }
  };
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
      const { data, count } = result?.data;
      if (data.length === 0) {
        setShowButton(false);
      }
      setRelativeNews(prevState => {
        return [...prevState, ...(data || [])];
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
  const getNewsDetail = async (slug: any) => {
    try {
      const params = {
        slug,
        domain: process.env.NEXT_PUBLIC_DOMAIN,
      };
      const result = await dispatch(getNewsBySlug(params)).unwrap();

      const { data } = result?.data;

      setData(data || {});
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (slug) {
      getNewsDetail(slug);
      getNewsByDomain(slug);
      getBestNews(slug);
    }
  }, [slug]);

  const getTime = (time?: any, like?: any, view?: any) => {
    const date = new Date(time);
    const dateString = date.toLocaleDateString(); // returns "3/6/2023" (or equivalent in your local time zone)
    const timeString = date.toLocaleTimeString(); // returns "9:32:50 AM" (or equivalent in your local time zone)
    const weekday = date.toLocaleString('vi-VN', { weekday: 'long' });
    return weekday + ', ' + dateString + ', ' + timeString;
  };

  const onRedirect = () => {
    setPageIndex(1);
  };

  const render = {
    loading: <SkeletonPage />,
    notLoading: (
      <div className='row '>
        <div className='col-12 col-md-8 content ' style={{ marginTop: '80px' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>{title}</h1>
          <div className='mt-2 time' style={{ marginBottom: '16px' }}>
            <span>
              {getTime(data?.createdAt, data?.likes, data?.views)}{' '}
              <img src='/icon-view.png' className='mx-2 pb-1' alt='like' />
              {' ' + data?.views}{' '}
            </span>
          </div>
          <div
            className='mt-2 classforContent'
            style={{ marginBottom: '16px' }}
          >
            <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
          </div>
          <div
            className='mt-4 classforContent'
            style={{ marginBottom: '16px' }}
          >
            <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
          </div>
          <div className='relative-news'>
            <h4 className='h4 text-uppercase title'>CÓ THỂ BẠN QUAN TÂM</h4>
            {/* <div id="relative-news" ref={ref}>
                                {
                                    relativeNews?.map((item, index) =>
                                        <React.Fragment key={index}>
                                            <RelativeNews item={item} key={item?._id} />
                                            <Divider className='mx-3' />
                                        </React.Fragment>
                                    )
                                }
                            </div> */}
            {/* <InfiniteScroll
              style={{ overflow: "hidden", fontFamily: "GoogleSans-Bold" }}
              dataLength={relativeNews.length}
              next={fetchMoreData}
              hasMore={relativeNews?.length < count}
              loader={
                <div className="row mt-2">
                  <div className="col-4">
                    <Skeleton
                      style={{ width: "100%", height: "150px" }}
                      count={1}
                    />
                  </div>
                  <div className="col-8">
                    <Skeleton
                      style={{ width: "200px", height: "24px" }}
                      count={1}
                    />
                    <Skeleton
                      style={{
                        width: "80%",
                        height: "72px",
                        marginTop: "10px",
                      }}
                      count={1}
                    />
                    <Skeleton
                      style={{
                        width: "100px",
                        height: "24px",
                        marginTop: "10px",
                      }}
                      count={1}
                    />
                  </div>
                </div>
              }
            >
              {relativeNews?.map((item, index) => (
                <React.Fragment key={index}>
                  <RelativeNews
                    onRedirect={onRedirect}
                    item={item}
                    key={item?._id}
                  />
                  <Divider className="mx-3" />
                </React.Fragment>
              ))}
            </InfiniteScroll> */}
            <div className='row'>
              {relativeNews?.map((item, index) => (
                <React.Fragment key={index}>
                  <RelativeNews
                    onRedirect={onRedirect}
                    item={item}
                    key={item?._id}
                  />
                </React.Fragment>
              ))}
            </div>
            {relativeNews?.length < count && (
              <div className='row'>
                <div className='mt-4 d-flex justify-content-center'>
                  {showButton && (
                    <button
                      onClick={onSeeMore}
                      type='button'
                      className={`btn0 button_text_icon button_text_icon__white mt-4`}
                    >
                      <span>Xem thêm</span>
                      <Image
                        style={{ marginLeft: '8px' }}
                        src={require('@/public/images/icons/right.svg')}
                        alt='Xem thêm'
                      />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          style={{ marginTop: '30px' }}
          className='col-12 col-md-4 hide-for-medium'
        >
          <div className='best-news'>
            <h4
              className='h4 text-uppercase title '
              style={{ fontWeight: 100, marginTop: '70px' }}
            >
              Xem nhiều nhất
            </h4>
            {bestNews?.map((item, index) => (
              <React.Fragment key={index}>
                <BestNews
                  onRedirect={onRedirect}
                  item={item}
                  className={`${index === 0 ? 'primary' : 'secondary'}`}
                  key={item?._id}
                />
                <Divider className='mx-3' />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    ),
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='canonical' href={`https://gofiber.vn/${slug}`} />
        <link
          rel='alternate'
          href={`https://gofiber.vn/${slug}`}
          hreflang='vi-vn'
        />
        <meta name='description' content={text} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@gofibervn' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={text} />
        <meta
          name='twitter:image'
          content='https://gofiber.b-cdn.net/new-design/tin-tuc/desktop-tin-tuc.png'
        />
      </Head>
      <div id='news-detail'>
        <div className='breadcrumb'>
          <div className='container '>
            <div className='breadcrumb_container'>
              <div className='breadcrumb_link mt-2 flex-wrap hide-for-small'>
                <Link className='a' href='/'>
                  Trang chủ
                </Link>
                <a className='mx-2 a'>{'>'}</a>
                <a className='a'>Tin tức</a>
                <a className='mx-2 a'>{'>'}</a>
                <a className='a'>{data?.title}</a>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          {isLoading ? render['loading'] : render['notLoading']}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  try {
    const { slug } = query;
    const params: any = {
      slug,
      domain: process.env.NEXT_PUBLIC_DOMAIN,
    };

    const url =
      `/posts/domain/getByDomainAndSlug` + convertObjectToQuery(params);

    const response = await fetchApi().get(url);

    const title = response?.data?.data?.title;
    const description = response?.data?.data?.description;

    if (!title) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      props: {
        ...(title ? { title } : {}),
        ...(description ? { description } : {}),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}

export default NewsDetail;
