import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
          <Script id="globalSchema " type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cty TNHH Công Nghệ Phần Mềm Gofiber",
              "image": "https://gofiber.b-cdn.net/Admin/Logo.jpg",
              "@id": "",
              "url": "https://gofiber.vn/",
              "telephone": "0985078507",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Số 131, Đường CN11, Phường Sơn Kỳ, Quận Tân Phú",
                "addressLocality": "Thành phố Hồ Chí Minh",
                "postalCode": "700000",
                "addressCountry": "VN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.809041572139755,,
                "longitude": 106.6098084217615
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/gofibervn1/",
                "https://twitter.com/gofibervn",
                "https://www.youtube.com/@gofibervn/about",
                "https://www.pinterest.com/gofibervn/",
                "https://soundcloud.com/gofibervn",
                "https://gofiber.vn/",
                "https://www.linkedin.com/in/gofibervn/",
                "https://www.tumblr.com/gofiber"
              ] 
            }` }} />
          <Script id="globalSchema1" type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Công ty TNHH Công Nghệ Phần Mềm Gofiber",
  "alternateName": "Gofiber",
  "url": "https://gofiber.vn/",
  "logo": "https://gofiber.b-cdn.net/Admin/Logo.jpg",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "0985078507",
    "contactType": "technical support",
    "areaServed": "VN",
    "availableLanguage": "Vietnamese"
  },{
    "@type": "ContactPoint",
    "telephone": "0987198705",
    "contactType": "customer service",
    "areaServed": "VN",
    "availableLanguage": "Vietnamese"
  }]
}
`}} />
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
