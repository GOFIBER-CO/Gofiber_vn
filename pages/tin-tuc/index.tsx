import { SeoApi } from "@/src/api/seo";
import BannerPage from "@/src/components/banner/BannerPage";
import NewItem from "@/src/containers/news/NewItem";
import { useAppDispatch } from "@/src/redux";
import { getPagingByCate, getPagingByDomain } from "@/src/redux/slice";
import { NEWS_IMAGE } from "@/src/utils";
import { is } from "immer/dist/internal";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import parse from 'html-react-parser';
import BannerV2Page from "@/src/components/banner/BannerV2Page";

const banner = {
  large: NEWS_IMAGE.BANNER_LARGE,
  medium: NEWS_IMAGE.BANNER_MEDIUM,
  small: NEWS_IMAGE.BANNER_SMALL,
};

const SkeletonItem = () => {
  return (
    <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
      <div className="p-2 recruit-item-skeleton">
        <Skeleton style={{ height: "200px" }} count={1} />
        <Skeleton style={{ height: "24px", width: "70%" }} className="mt-4" />
        <Skeleton style={{ height: "72px" }} className="mt-4" />
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

      setNews(data || []);
      setCount(count || 0);
    } catch (error) {
      console.log("getPosts", error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(news1)
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
      setNews((prevState) => {
        return [...prevState, ...(data || [])];
      });
    } catch (error) {
      console.log("getPosts", error);
    } finally {
      setIsLoadingSeeMore(false);
    }
  };

  useEffect(() => {
    if (pageIndex > 1) getPostsSeeMore();
  }, [pageIndex]);

  const onSeeMore = () => {
    setPageIndex((prevState) => prevState + 1);
  };

  const render = {
    isLoading: (
      <div className="row">
        {[1, 2].map((item) => (
          <SkeletonItem key={item} />
        ))}
      </div>
    ),
    notLoading: (
      <>
        {news?.length === 0 ? (
          <div className="row justify-content-center">
            <div className="col col-12 col-md-6 col-lg-6">
              <div className="img">
                <Image
                  src={require("@/public/images/nodata.png")}
                  alt="Hiện tại không có bài viết"
                />
              </div>
              <h4 className="h4 text-center">Hiện tại không có bài viết</h4>
            </div>
          </div>
        ) : (
          <>
            <div className="row" style={{ marginBottom: "130px" }}>
              {news1.map((item, index) => (
                <NewItem
                  item={item}
                  wrapperClassName={`col-lg-4 col-md-6 `}
                  key={index}
                />
              ))}
            </div>
            <div className="row">

              {news.map((item, index) => (
                <NewItem
                  item={item}
                  wrapperClassName={`col-lg-4 col-md-6 `}
                  key={index}
                />
              ))}
            </div>
            {news?.length < count && (
              <div className="row">
                <div className="mt-4 d-flex justify-content-center">
                  <button
                    onClick={onSeeMore}
                    type="button"
                    className={`btn0 button_text_icon button_text_icon__white mt-4`}
                  >
                    <span>Xem thêm</span>
                    <Image
                      style={{ marginLeft: "8px" }}
                      src={require("@/public/images/icons/right.svg")}
                      alt="Xem thêm"
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
      <div id="recruit">
        <BannerV2Page
          styleLinkName={{ maxWidth: "400px" }}
          image="https://gofiber.b-cdn.net/new-design/tin-tuc/desktop-tin-tuc.png"
          name="Tin tức"
          extra="Những giao diện website mà gofiber.vn cung cấp luôn làm hài lòng khách hàng. Sự hài lòng của khách hàng là động lực để chúng tôi phát triển"
        />
        <div className="container">
          <section className="section-recruit">
            {isLoading ? render["isLoading"] : render["notLoading"]}
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
      link: "/tin-tuc",
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
