import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
          <meta
            name="description"
            content="Gofiber Hosting là nơi chuyên cấp dịch vụ: Hosting, máy chủ ảo VPS, Cloud Server, dịch vụ SEO, dịch vụ Private Blog Network, Firewall chống DDoS hàng đầu Việt Nam."
          />
          <title>Gofiber Hosting - VPS Cloud Server Hàng Đầu Việt Nam</title>
          <meta charSet="UTF-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
