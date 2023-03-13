import { SeoApi } from "@/src/api/seo";
import BannerPage from "@/src/components/banner/BannerPage";
import NewItem from "@/src/containers/news/NewItem";
import { useAppDispatch } from "@/src/redux";
import { getPagingByCate, getPagingByDomain, getPostForSpecificCate } from "@/src/redux/slice";
import { NEWS_IMAGE } from "@/src/utils";
import { is } from "immer/dist/internal";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import parse from 'html-react-parser';
import BannerV2Page from "@/src/components/banner/BannerV2Page";
import { useRouter } from "next/router";
import Link from "next/link";

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
    const router = useRouter();
    const { cateSlug } = router?.query;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [news, setNews] = useState<any>([]);
    const [cateListPost, setCateListPost] = useState<any[]>([])
    const [cateListPage, setCateListPage] = useState<any>({})

    const [pageIndex, setPageIndex] = useState<number>(1);
    const [isLoadingSeeMore, setIsLoadingSeeMore] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const [cateName, setCateName] = useState<String>("")
    const getPosts = async (cateSlug: any) => {
        try {
            const params = {
                domain: process.env.NEXT_PUBLIC_DOMAIN,
                status: 1,
                pageSize: 6,
                categories: cateSlug,
                pageIndex,
            };


            const result = await dispatch(getPostForSpecificCate(params)).unwrap();
            const { data, count, cateName, cateList, cateInfo } = result?.data;
            setCateListPage(cateInfo as any || {})
            setCateListPost(cateList as any || [])
            setCateName(cateName || "")
            setNews(data || []);
            setCount(count || 0);
        } catch (error) {
            console.log("getPosts", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (cateSlug !== undefined) {

            getPosts(cateSlug);
        }
    }, [cateSlug]);

    const getPostsSeeMore = async () => {
        try {
            setIsLoadingSeeMore(true);
            const params = {
                domain: process.env.NEXT_PUBLIC_DOMAIN,
                status: 1,
                pageSize: 6,
                categories: cateSlug,
                pageIndex,
            };

            const result = await dispatch(getPostForSpecificCate(params)).unwrap();
            const { data, count, cateName, cateList, cateInfo } = result?.data;

            setCateListPost(prevState => {
                return [...prevState as any, ...(cateList || [])];
            });
            setNews((prevState: any) => {
                return [...prevState, ...(data || [])];
            });
        } catch (error) {
            console.log("getPosts", error);
        } finally {
            setIsLoadingSeeMore(false);
        }
    };
    console.log(cateListPage)
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
                        <div className="row">
                            {news.map((item: any, index: any) => (
                                <NewItem
                                    cateList={cateListPost[index]}
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

            <div id="news">
                <BannerV2Page
                    styleLinkName={{ maxWidth: "400px" }}
                    image="https://gofiber.b-cdn.net/new-design/tin-tuc/desktop-tin-tuc.png"
                    name={cateName as any}
                    extra={cateListPage?.description as any}
                    showButton={false}

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

