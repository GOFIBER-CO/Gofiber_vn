/* eslint-disable @next/next/inline-script-id */
import type { AppProps } from 'next/app';
import '../styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../src/layouts';
import '../styles/webDesign/index.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect } from 'react';
import AOS from 'aos';
import { Provider } from 'react-redux';
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';

import 'aos/dist/aos.css';
import { env } from '@/src/utils';
import Head from 'next/head';
import { store } from '@/src/redux';
import { SkeletonTheme } from 'react-loading-skeleton';
import Script from 'next/script';
import { useRouter } from 'next/router';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'GOFIBER cung cấp những dịch vụ công nghệ gì?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hiện nay GOFIBER đang cung cấp các dịch vụ công nghệ như web hosting, server máy chủ vật lý tốc độ cao, VPS SSD giá rẻ, VPS treo game, Firewall anti DDoS, chứng chỉ SSL,... ',
      },
    },
    {
      '@type': 'Question',
      name: 'Chi phí ở đây đã rẻ nhất hay chưa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '“Hosting rẻ nhất Việt Nam” chưa bao giờ nằm trong chiến lược của GOFIBER. Thay vào đó chúng tôi đặt sự ưu tiên trong việc hài hòa giữa chất lượng dịch vụ và mức phí hợp lý dành cho mọi đối tượng khách hàng.',
      },
    },
    {
      '@type': 'Question',
      name: 'GOFIBER có hỗ trợ Domain Name Servers (DNS) trong trường hợp tôi chưa có Hosting không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trong trường hợp bạn chưa đăng ký dịch vụ Hosting, GOFIBER sẽ hỗ trợ 1 DNS dành cho tên miền mà bạn đã đăng ký để trỏ về. Vì vậy, trong trường hợp bạn cần sự hỗ trợ hãy liên hệ với chúng tôi bằng cách mở ticket support hoặc để được hỗ trợ nhanh nhất.',
      },
    },
    {
      '@type': 'Question',
      name: 'Nếu không hài lòng với dịch vụ tôi có được hoàn lại phí không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chúng tôi sẽ hoàn trả lại 100% số tiền chúng tôi đã nhận với điều kiện: lý do bạn không hài lòng là đúng hoặc bạn không vi phạm quy định sử dụng dịch vụ của chúng tôi. Xem thêm về quy định hoàn tiền tại đây.',
      },
    },
    {
      '@type': 'Question',
      name: 'Sau bao lâu tôi có thể sử dụng dịch vụ sau khi hoàn tất thanh toán?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hệ thống của GOFIBER tạo tài khoản và cài đặt các dịch vụ cho khách hàng hoàn toàn tự động và gần như hoàn thành ngay lập tức sau khi thanh toán cho đơn hàng được xác nhận thành công. Đối với các khách hàng sử dụng dịch vụ máy chủ ảo VPS có mở thêm yêu cầu hỗ trợ cài các panel như Aapanel hay Directadmin, thời gian để các chuyên viên hệ thống hoàn tất cài đặt thường cộng thêm từ 30-60 phút.',
      },
    },
    {
      '@type': 'Question',
      name: 'Tôi đang sử dụng dịch vụ hosting ở nơi khác, làm sao để chuyển sang dịch vụ của GOFIBER?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hiện tại GOFIBER đang có chính sách hỗ trợ chuyển server từ nhà cung cấp cũ của quý khách về GOFIBER hoàn toàn miễn phí. Quý khách có thể mở ticket để gửi yêu cầu cho các chuyên viên phụ trách để nhờ thực hiện chuyển data về hộ nếu muốn. Website của quý khách sau khi chuyển về được các chuyên viên kiểm tra và đảm bảo vận hành trơn tru trước khi bàn giao lại cho quý khách.',
      },
    },
    {
      '@type': 'Question',
      name: 'Tôi có thể nâng cấp gói dịch vụ đang sử dụng không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bất cứ lúc nào khách hàng cũng có thể chọn để nâng cấp dịch vụ đang sử dụng lên các gói cao cấp hơn. Hệ thống của GOFIBER tự động tính toán phần chi phí và quý khách chỉ phải chi trả cho phần chênh lệch giữa hai gói dịch vụ khi nâng cấp. Việc thanh toán gói dịch vụ nâng cấp theo giá mới sẽ bắt đầu vào chu kỳ gia hạn dịch vụ tiếp theo dựa trên tài khoản của khách hàng.',
      },
    },
    {
      '@type': 'Question',
      name: 'Tôi có thể liên hệ với GOFIBER qua đâu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GOFIBER có đa dạng kênh liên lạc nhằm hỗ trợ khách hàng tốt nhất. Bạn có thể liên hệ với chúng tôi qua FanPage Facebook, TikTok, Email,... để được hỗ trợ tức thời, hãy liên hệ với chúng tôi qua số điện thoại 0989078507 (Tel-Viber-Zalo).Đối với các yêu cầu hỗ trợ liên quan đến các dịch vụ như dịch vụ hosting, dịch vụ máy chủ, dịch vụ máy chủ áo VPS,... chúng tôi khuyến khích khách hàng mở yêu cầu hỗ trợ qua hệ thống ticket để được hỗ trợ hiệu quả nhất và bảo mật nhất.',
      },
    },
    {
      '@type': 'Question',
      name: 'Các hình thức thanh toán sử dụng dịch vụ',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Có 2 hình thức thanh toán:Một là, thanh toán bằng tiền mặt tại văn phòng Công ty GOFIBER:Quý khách đến và thực hiện thanh toán bằng tiền mặt trực tiếp tại văn phòng Công ty TNHH Công Nghệ Phần Mềm GOFIBER  tại địa chỉ: Số 131, Đường CN11, P. Sơn Kỳ, Q. Tân Phú, TP.HCM).Hai là, thanh toán qua hình thức chuyển khoản. Khách hàng có thể thanh toán dịch vụ qua chuyển khoản ngân hàng, VISA, ví Momo, QR code.',
      },
    },
    {
      '@type': 'Question',
      name: 'Tôi lỡ quên gia hạn dịch vụ thì dữ liệu có thể phục hồi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dữ liệu là điều quý khách không phải lo khi sử dụng các dịch vụ của GOFIBER. Hệ thống của chúng tôi được cài đặt để thực hiện backup dữ liệu của quý khách thường xuyên trên cấp độ server. Do đó quý khách hàng hoàn toàn có thể liên hệ với nhân viên hỗ trợ để được hỗ trợ nhận lại dữ liệu khi cần thiết.Theo chính sách bảo lưu của GOFIBER, dữ liệu của quý khách cùng tên miền, nếu lỡ quên gia hạn, được hỗ trợ “giữ hộ” miễn phí với thời hạn lên đến 12 tháng. Sau khi dịch vụ đã hết hạn, nếu có bất kỳ vấn đề phát sinh gì xin Quý khách vui lòng liên hệ với NVKD đang làm việc hoặc hotline/livechat để được giải quyết.',
      },
    },
    {
      '@type': 'Question',
      name: 'GOFIBER có giữ bí mật các thông tin dữ liệu cá nhân của tôi không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GOFIBER cam kết các thông tin và dữ liệu của khách hàng luôn được bảo mật theo tiêu chuẩn chung của Pháp luật Việt Nam và Tiêu chí riêng của GOFIBER.',
      },
    },
    {
      '@type': 'Question',
      name: 'Có thể dùng thử mà không cần thanh toán?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GOFIBER là một thương hiệu uy tín với các chính sách dùng thử tốt nhất hiện nay. Khách hàng có thể đăng ký dùng thử với bộ phận Kinh doanh để được trải nghiệm thử 7 ngày hoàn toàn miễn phí. Thủ tục dùng thử tại GOFIBER thường không cần xét duyệt và chờ đợi, kích hoạt dùng thử trong 5 phút.Bất cứ lúc nào trong thời hạn dùng thử, khách hàng cũng có thể chủ động tiến hành thanh toán để có nâng cấp tài khoản thành chính thức. Có thể nói, hoàn toàn không có khác biệt giữa chất lượng dịch vụ của tài khoản dùng thử và tài khoản chính thức.',
      },
    },
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <>
      <Script
        type='text/javascript'
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-J21MM63QMB`}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `<!-- Google tag (gtag.js) -->
         
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-J21MM63QMB');
          `,
        }}
      />
      <Script
        id='globalSchema'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
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
    "latitude": "10.809041572139755",
    "longitude": "106.6098084217615"
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
}
`,
        }}
      />
      <Script
        id='globalSchema1'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
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
`,
        }}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.__lc = window.__lc || {};
            window.__lc.license = 15101298;
            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
            `,
        }}
      ></Script>
      <Provider store={store}>
        <SkeletonTheme baseColor={'#ebfbff'} highlightColor={'#96eaff'}>
          <FpjsProvider
            loadOptions={{
              apiKey: env.FP_PUBLIC_API_KEY || '',
            }}
          >
            <noscript>
              <a
                href='https://www.livechat.com/chat-with/15101298/'
                rel='nofollow'
              >
                Chat with us
              </a>
              , powered by{' '}
              <a
                href='https://www.livechat.com/?welcome'
                rel='noopener nofollow noreferrer'
                target='_blank'
              >
                LiveChat
              </a>
            </noscript>
            <Head>
              <meta
                name='google-site-verification'
                content='MGEbcIEmyG0Sp5dKi1iy07QOlgtTlUUMhjdqZfw9wsc'
              />
              <meta
                name='dmca-site-verification'
                content='VTVITzZSMUZ5VEhGNG83TUJKanRyZz090'
              />
              <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0'
              />
              {router.route !== '/tin-tuc/[cateSlug]' ? (
                <title>
                  Gofiber Hosting và Máy chủ hiệu năng cao - Gofiber.vn - Giới
                  thiệu sản phẩm
                </title>
              ) : null}
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </FpjsProvider>
        </SkeletonTheme>
      </Provider>
    </>
  );
}
