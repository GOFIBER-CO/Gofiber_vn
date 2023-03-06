import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx: any) => {
  const result = await fetch(
    `https://api.gofiber.vn/api/posts/getPaging?pageSize=10000&pageIndex=1`
  );
  const posts = await result.json();
  if (posts && posts?.data?.length > 0) {
    const newsSitemaps = posts?.data?.map((item: any) => ({
      loc: `https://gofiber.vn/${item.slug?.toString()}`,
      lastmod: new Date(item.createdAt).toISOString(),
    }));
    const fields = [...newsSitemaps];
    return getServerSideSitemap(ctx, fields || []);
  }

  return getServerSideSitemap(ctx, []);
};

export default function SiteMap() {
  return <></>;
}
