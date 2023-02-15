const siteUrl = "https://gofiber.vn/";
module.exports = {
  siteUrl,
  exclude: ["/404"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404", "admin.gofiber.vn", "/readme.html"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [`${siteUrl}sitemap.xml`, `${siteUrl}post-sitemap.xml`],
  },
};
