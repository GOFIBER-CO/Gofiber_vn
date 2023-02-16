import BannerPage from "@/src/components/banner/BannerPage";
import { NEWS_IMAGE } from "@/src/utils";
import Head from "next/head";
import React from "react";

const banner = {
  large: NEWS_IMAGE.BANNER_LARGE,
  medium: NEWS_IMAGE.BANNER_MEDIUM,
  small: NEWS_IMAGE.BANNER_SMALL,
};

function NewsPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://gofiber.vn/dich-vu" />
      </Head>
      <div id="service">
        <section>
          <BannerPage image={banner} name="Tin tức" />
        </section>
      </div>
    </>
  );
}

export default NewsPage;
