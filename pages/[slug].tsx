import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import "moment/locale/vi";
import axios from "axios";
import EmptyImage from "@/src/components/EmptyImage";
import { getNewsBySlug, getPagingByDomain } from "@/src/redux/slice";
import { useAppDispatch } from "@/src/redux";
import BestNews from "@/src/containers/news/new-detail/BestNews";
import { Divider } from "antd";
import RelativeNews from "@/src/containers/news/new-detail/RelativeNews";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import Head from "next/head";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { convertObjectToQuery } from "@/src/utils";
import { fetchApi } from "@/src/api";

const pageSize = 4;

const SkeletonPage = () => (
  <div className="row">
    <div className="col-12 col-md-8 content">
      <Skeleton count={1} style={{ height: "48px" }} />
      <Skeleton
        style={{ width: "200px", height: "22px" }}
        count={1}
        className="mt-4"
      />
      <Skeleton count={10} style={{ height: "24px" }} className="mt-4" />
    </div>
    <div className="col col-12 col-md-4 hide-for-medium">
      <div className="d-flex align-items-center">
        <Skeleton style={{ height: "60px", width: "15px" }} />
        <Skeleton
          style={{ width: "150px", marginLeft: "20px", height: "32px" }}
        />
      </div>
      <Skeleton className="mt-4" style={{ height: "200px" }} />
      <Skeleton style={{ height: "24px", width: "70%" }} className="mt-3" />
      <Skeleton style={{ height: "20px", width: "30%" }} className="mt-3" />

      <div className="mt-4 d-flex">
        <Skeleton style={{ width: "150px", height: "100px" }} />
        <div className="mx-2">
          <Skeleton style={{ width: "200px", height: "24px" }} />
          <Skeleton
            style={{ width: "150px", height: "20px" }}
            className="mt-3"
          />
        </div>
      </div>
      <div className="mt-4 d-flex">
        <Skeleton style={{ width: "150px", height: "100px" }} />
        <div className="mx-2">
          <Skeleton style={{ width: "200px", height: "24px" }} />
          <Skeleton
            style={{ width: "150px", height: "20px" }}
            className="mt-3"
          />
        </div>
      </div>
      <div className="mt-4 d-flex">
        <Skeleton style={{ width: "150px", height: "100px" }} />
        <div className="mx-2">
          <Skeleton style={{ width: "200px", height: "24px" }} />
          <Skeleton
            style={{ width: "150px", height: "20px" }}
            className="mt-3"
          />
        </div>
      </div>
    </div>
  </div>
);

type Props = {
  title: string;
};

function NewsDetail({ title }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { slug } = router?.query;
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [data, setData] = useState<any>({});
  const [relativeNews, setRelativeNews] = useState<any[]>([]);
  const [bestNews, setBestNews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

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
      console.log("error", error);
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
      console.log("error", error);
    }
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
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (slug) {
      getNewsDetail(slug);
      getNewsByDomain(slug);
      getBestNews(slug);
    }
  }, [slug]);

  const getTime = (time: any) => {
    const string = moment().format("dddd, DD/MM/YYYY, hh:mm");
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchMoreData = async () => {
    try {
      const params = {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        status: 1,
        pageSize: pageSize,
        pageIndex,
        slug,
      };

      const result = await dispatch(getPagingByDomain(params)).unwrap();
      const { data, count } = result?.data;
      setRelativeNews((prevState) => [...prevState, ...(data || [])]);
      setCount(count || 0);
      setPageIndex(pageIndex + 1);
    } catch (error) {
      console.log("error", error);
    }
  };

  const onRedirect = () => {
    setPageIndex(1);
  };

  const render = {
    loading: <SkeletonPage />,
    notLoading: (
      <div className="row">
        <div className="col-12 col-md-8 content">
          <h1>{title}</h1>
          <div className="mt-2 time">{getTime(data?.createdAt)}</div>
          <div className="mt-2">
            <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
          </div>
          <div className="mt-4">
            <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
          </div>
          <div className="relative-news">
            <h4 className="h4 text-uppercase title">CÓ THỂ BẠN QUAN TÂM</h4>
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
            <InfiniteScroll
              style={{ overflow: "hidden" }}
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
            </InfiniteScroll>
          </div>
        </div>
        <div
          style={{ marginTop: "30px" }}
          className="col-12 col-md-4 hide-for-medium"
        >
          <div className="best-news">
            <h4 className="h4 text-uppercase title">Xem nhiều nhất</h4>
            {bestNews?.map((item, index) => (
              <React.Fragment key={index}>
                <BestNews
                  onRedirect={onRedirect}
                  item={item}
                  className={`${index === 0 ? "primary" : "secondary"}`}
                  key={item?._id}
                />
                <Divider className="mx-3" />
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
        <link rel="canonical" href="https://gofiber.vn/" />
      </Head>
      <div id="news-detail">
        <div className="breadcrumb">
          <div className="container">
            <div className="breadcrumb_container">
              <h2 className="h2 text-uppercase">Tin tức</h2>
              <div className="breadcrumb_link mt-2 flex-wrap hide-for-small">
                <Link href="/">Trang chủ</Link>
                <a className="mx-2">{">"}</a>
                <a>Tin tức</a>
                <a className="mx-2">{">"}</a>
                <a>{data?.title}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {isLoading ? render["loading"] : render["notLoading"]}
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

    if (!title) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {
        ...(title ? { title } : {}),
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
