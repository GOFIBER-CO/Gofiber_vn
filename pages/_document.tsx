import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>

          <Script type="text/javascript" async src={`https://www.googletagmanager.com/gtag/js?id=G-J21MM63QMB`} />
          <Script
            id="googleTag"
            dangerouslySetInnerHTML={{
              __html: `<!-- Google tag (gtag.js) -->
         
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-J21MM63QMB');
          `,
            }}
          />
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
