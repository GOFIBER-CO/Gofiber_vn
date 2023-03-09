import { SeoApi } from "@/src/api/seo";
import BannerPage from "@/src/components/banner/BannerPage";
import BuyPackage from "@/src/containers/BuyPackage";
import Contact from "@/src/containers/home/contact";
import Question from "@/src/containers/home/question";
import SliderHostingPrice from "@/src/containers/web-hosting/SliderHostingPrice";
import { useAppDispatch } from "@/src/redux";
import { getAllHosting } from "@/src/redux/slice/hostingSlice";
import { WEB_HOSTING_IMAGE } from "@/src/utils";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import parse from 'html-react-parser';
import BannerV2Page from "@/src/components/banner/BannerV2Page";
import BannerForHosting from "@/src/components/banner/BannerforHosting";
import Banner from "@/src/components/body/banner";
import Script from "next/script";


const banner = {
  large: WEB_HOSTING_IMAGE.BANNER_LARGE,
  medium: WEB_HOSTING_IMAGE.BANNER_MEDIUM,
  small: WEB_HOSTING_IMAGE.BANNER_SMALL,
};

const data = [
  {
    id: "1",
    title: "Web Hosting",
    className: "first",
    link: "/dich-vu-hosting",
  },
  {
    id: "2",
    title: "Thiết kế Website",
    className: "second",
    link: "/dich-vu-thiet-ke-website-chuyen-nghiep",
  },
  {
    id: "3",
    title: "Thuê VPS",
    className: "third",
    link: "/thue-vps",
  },
  {
    id: "4",
    title: "Thuê máy chủ vật lý Thuê chỗ đặt máy chủ",
    className: "fourth",
    link: "/thue-may-chu-vat-ly",
  },
  {
    id: "5",
    title: "Hỗ trợ chống DDos",
    className: "firth",
    link: "/ho-tro-chong-ddos",
  },
  {
    id: "6",
    title: "Chứng chỉ SSL",
    className: "sixth",
    link: "/chung-chi-ssl",
  },
];

const question = [
  {
    id: "1",
    title: "Tôi có dự án ở lớp cần có thể cài đặt website ASP/ ASP.NET, dịch vụ hosting GOFIBER có hỗ trợ không?",
    content: (
      <>
        Ngoài các gói dịch vụ hosting trên Linux, thường chuyên dụng cho web hosting chạy PHP và MySQL, GOFIBER cũng cung cấp các gói dịch vụ hosting trên Windows. Sản phẩm web hosting chạy Windows là một trong những sản phẩm lý tưởng và chuyên dụng dành cho website phát triển trên mã nguồn ASP/ ASP.NET.
      </>
    ),
  },
  {
    id: "2",
    title: "Dịch vụ hosting của GOFIBER hỗ trợ tôi cài đặt website thế nào?",
    content: (
      <>
        Với các gói web hosting giá rẻ đến cao cấp của dịch vụ hosting tại GOFIBER thì quý khách luôn có thể yêu cầu nhân viên kỹ thuật hỗ trợ khi gặp vấn đề trong việc cài đặt WordPress. Đặc biệt, các gói Hosting WordPress tại GOFIBER còn được tích hợp sẵn các phần mềm hỗ trợ trên tầng server nhằm giúp các website WordPress vận hành tối ưu hơn.
      </>
    ),
  },
  {
    id: "3",
    title: "Nâng cấp gói hosting như thế nào? Có ảnh hưởng gì đến các trang web đang chạy hay không ?",
    content: (
      <>
        Bạn có thể chọn để nâng cấp các gói dịch vụ hosting mà mình đang sử dụng bất cứ lúc nào mà không phải lo việc ảnh hưởng đến các trang web đang chạy. Việc nâng cấp gói hosting dù là về dung lượng SSD, CORE hay RAM đều được diễn ra ở thượng tầng máy chủ. Việc gián đoạn dịch vụ nếu có cũng chỉ mất khoảng một phút để các kỹ thuật viên restart lại hệ thống sau khi nâng cấp.
        {/* <p>
          <ul style={{ listStyle: "outside" }}>
            <li>
              <strong>Tốc độ trang Web</strong>: Nếu bạn chọn gói Hosting kém
              chất lượng, trang Web có thể tải chậm. Nó sẽ khiến trải nghiệm
              khách hàng kém đi, và còn có thể bị các công cụ tìm kiếm phạt, thứ
              hạng của trang trong kết quả tìm kiếm bị giảm xuống.
            </li>
            <li>
              <strong>Website luôn hoạt động:</strong>: Dịch vụ Hosting chấtBạn có thể chọn để nâng cấp các gói dịch vụ hosting mà mình đang sử dụng bất cứ lúc nào mà không phải lo việc ảnh hưởng đến các trang web đang chạy. Việc nâng cấp gói hosting dù là về dung lượng SSD, CORE hay RAM đều được diễn ra ở thượng tầng máy chủ. Việc gián đoạn dịch vụ nếu có cũng chỉ mất khoảng một phút để các kỹ thuật viên restart lại hệ thống sau khi nâng cấp.
              lượng, có cơ sở hạ tầng mạnh sẽ sẽ đảm bảo trang Web hoạt động
              24/7.
            </li>
            <li>
              <strong>Bảo mật</strong>: Một trang Web với nhà cung cấp Hosting
              kém chất lượng, không có độ bảo mật tốt sẽ dễ đánh mất niềm tin
              nơi khách hàng. Thêm vào đó, những Website có thể bị tấn công,
              nhiễm phần mềm độc hại.
            </li>
            <li>
              <strong>Nhà cung cấp và sự hiểu biết về SEO</strong>: Nếu nhà cung
              cấp Hosting thiếu kiến thức SEO thì họ có thể làm ảnh hưởng quá
              trình SEO. Ví dụ Website có Robot.txt giúp quản lý công cụ tìm
              kiếm mà nhà cung cấp không biết và xóa File đi gây ảnh hưởng đến
              cấu hình của Website.
            </li>
          </ul>
        </p> */}
        {/* <p>
          Nếu bạn chọn Hosting kém chất lượng, tốc độ tải trang Web sẽ chậm, khi
          ấy trải nghiệm khách hàng sẽ giảm xuống và trang của bạn có thể bị
          Google phạt dẫn đến thứ hạng của trang trong kết quả tìm kiếm bị giảm.
        </p>
        <p>
          Để trang Web hoạt động 24/7, chúng ta cần có dịch vụ Hosting chất
          lượng và cơ sở hạ tầng mạnh mẽ.
        </p>
        <p>
          Hosting kém chất lượng không có độ bảo mật tốt sẽ rất dễ đánh mất niềm
          tin nơi khách hàng. Bên cạnh đó, những Website ấy còn dễ bị vi rút tấn
          công và nhiễm phần mềm độc hại.
        </p>
        <p>
          Nếu nhà cung cấp Hosting thiếu kiến thức về SEO họ sẽ làm ảnh hưởng
          đến quá trình SEO của bạn. Ví dụ Web có Robot.txt để giúp người dùng
          quản lý công cụ tìm kiếm mà nhà cung cấp không biết và xóa đi sẽ ảnh
          hưởng đến cấu hình Website.
        </p> */}
      </>
    ),
  },
  {
    id: "4",
    title: "Nên sử dụng hosting có dung lượng bao nhiêu?",
    content: (
      <>
        {/* <p>
          <strong>Domain</strong> và hosting là 2 dịch vụ hoàn toàn khách nhau.
          Tuy nhiên, phải cần có cả 2 yếu tố đó thì website mới hoạt động được.
        </p>
        <p>
          Thông thường, 1 hệ thống tên miền cũng gần giống với 1 cuốn danh bạ
          khổng lồ thường xuyên được update. Sau mỗi tên miền là địa chỉ của
          dịch vụ lưu trữ các file của mỗi website.
        </p>
        <p>
          Không có tên miền thì sẽ không có cách nào để tìm ra website và nếu
          không có hosting thì bạn không cách nào để xây website được.
        </p> */}
        Mức dung lượng (disk space) của hosting mà bạn cần thường sẽ tùy thuộc hoàn toàn vào nhu cầu sử dụng của bạn. Với các trang web đơn giản, ít hình ảnh và các định dạng media thì chỉ cần một web hosting khoản từ 5-10GB. Tại GOFIBER, quý khách có thể nâng cấp gói dịch vụ lưu trữ của web hosting lên bất cứ lúc nào.
      </>
    ),
  },
  {
    id: "5",
    title: "Các phiên bản PHP hỗ trợ trên hosting GOFIBER ",
    content: (
      <>
        Tất cả máy chủ hosting tại GOFIBER đều hỗ trợ PHP 5.6 đến PHP 8.1 hoặc hơn, đảm bảo tương thích với mọi mã nguồn website. Hệ quản trị cơ sở dữ liệu (database) sử dụng MariaDB 10.2 đến mới nhất, hoặc MySQL phiên bản từ 5.1 đến 5.5.
        {/* <tr>
              <td>
                Domain là&nbsp;<strong>địa chỉ giúp nhận dạng</strong>&nbsp;hoặc
                một địa chỉ có tên của một địa điểm internet.
              </td>
              <td>
                Hosting là&nbsp;<strong>không gian lưu trữ</strong>&nbsp;để xuất
                bản website hay ứng dụng lên internet.
              </td>
            </tr>
            <tr>
              <td>
                Domain là&nbsp;giúp&nbsp;<strong>phân biệt trang web</strong>
                &nbsp;của bạn với những trang web khác và mang dấu ấn thương
                hiệu riêng của bạn.
              </td>
              <td>
                Hosting&nbsp;
                <strong>
                  cung cấp không gian và tài nguyên để trang web hoạt động
                </strong>
                &nbsp;cũng là nơi lưu trữ dữ liệu website, trong đó có cả lưu
                trữ domain.
              </td>
            </tr>
            <tr>
              <td>
                Tên miền (domain) của mỗi trang web đều phải được đăng kí theo
                đúng quy trình. Tên miền của mỗi website là&nbsp;
                <strong>riêng biệt và không trùng nhau</strong>.
              </td>
              <td>
                Hosting có thể thuê hoặc mua tùy theo nhu cầu sử dụng. Các trang
                web&nbsp;<strong>có thể dùng chung Hosting</strong>&nbsp;với
                nhau.
              </td>
            </tr> */}

      </>
    ),
  },
  {
    id: "6",
    title: "Hosting giá rẻ: của rẻ có bị ôi?",
    content: (
      <>
        {/* <tr>
              <td>
                Domain là&nbsp;<strong>địa chỉ giúp nhận dạng</strong>&nbsp;hoặc
                một địa chỉ có tên của một địa điểm internet.
              </td>
              <td>
                Hosting là&nbsp;<strong>không gian lưu trữ</strong>&nbsp;để xuất
                bản website hay ứng dụng lên internet.
              </td>
            </tr>
            <tr>
              <td>
                Domain là&nbsp;giúp&nbsp;<strong>phân biệt trang web</strong>
                &nbsp;của bạn với những trang web khác và mang dấu ấn thương
                hiệu riêng của bạn.
              </td>
              <td>
                Hosting&nbsp;
                <strong>
                  cung cấp không gian và tài nguyên để trang web hoạt động
                </strong>
                &nbsp;cũng là nơi lưu trữ dữ liệu website, trong đó có cả lưu
                trữ domain.
              </td>
            </tr>
            <tr>
              <td>
                Tên miền (domain) của mỗi trang web đều phải được đăng kí theo
                đúng quy trình. Tên miền của mỗi website là&nbsp;
                <strong>riêng biệt và không trùng nhau</strong>.
              </td>
              <td>
                Hosting có thể thuê hoặc mua tùy theo nhu cầu sử dụng. Các trang
                web&nbsp;<strong>có thể dùng chung Hosting</strong>&nbsp;với
                nhau.
              </td>
            </tr> */}
        Nhiều người cho rằng hosting giá rẻ không bao giờ mang lại chất lượng cao, song nhận định này không hẳn đúng. Trên thực tế, tùy vào mục đích và nhu cầu sử dụng của doanh nghiệp mà bạn cần các gói hosting khác nhau.
        Nếu là cá nhân hoặc doanh nghiệp nhỏ, quý khách hoàn toàn có thể chọn gói hosting giá rẻ để tối ưu chi phí. Sau một thời gian hoạt động nếu doanh nghiệp cần không gian lưu trữ lớn hơn lúc đó có thể nâng cấp hosting cũng không muộn.

      </>
    ),
  },
];
const dataForBanner = [
  "Bảng điều khiển cPanel",
  "Bảo mật với CloudLinux, Imunify360",
  "Hỗ trợ kỹ thuật 24/7",
  "Dùng thử 5 ngày, hoàn tiền 30 ngày",
  "Miễn phí chuyển dữ liệu",
  "LiteSpeed Web Server Enterprise"
]
const SkeletonSlide = () => (
  <div className="row mt-4 justify-content-center">
    {[
      "mt-0 mt-lg-3",
      "mt-0 d-none d-lg-block",
      "mt-lg-3 mt-0 d-none d-md-block",
    ].map((i, index) => (
      <div key={index} className={`col col-12 col-sm-8 col-md-6 col-lg-4 ${i}`}>
        <Skeleton count={1} style={{ width: "100%", minHeight: "600px" }} />
      </div>
    ))}
  </div>
);
const scriptForUser = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "GOFIBER cung cấp những dịch vụ công nghệ gì?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hiện nay GOFIBER đang cung cấp các dịch vụ công nghệ như web hosting, server máy chủ vật lý tốc độ cao, VPS SSD giá rẻ, VPS treo game, Firewall anti DDoS, chứng chỉ SSL,... "
      }
    },
    {
      "@type": "Question",
      "name": "Chi phí ở đây đã rẻ nhất hay chưa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "“Hosting rẻ nhất Việt Nam” chưa bao giờ nằm trong chiến lược của GOFIBER. Thay vào đó chúng tôi đặt sự ưu tiên trong việc hài hòa giữa chất lượng dịch vụ và mức phí hợp lý dành cho mọi đối tượng khách hàng."
      }
    },
    {
      "@type": "Question",
      "name": "GOFIBER có hỗ trợ Domain Name Servers (DNS) trong trường hợp tôi chưa có Hosting không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trong trường hợp bạn chưa đăng ký dịch vụ Hosting, GOFIBER sẽ hỗ trợ 1 DNS dành cho tên miền mà bạn đã đăng ký để trỏ về. Vì vậy, trong trường hợp bạn cần sự hỗ trợ hãy liên hệ với chúng tôi bằng cách mở ticket support hoặc để được hỗ trợ nhanh nhất."
      }
    },
    {
      "@type": "Question",
      "name": "Nếu không hài lòng với dịch vụ tôi có được hoàn lại phí không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chúng tôi sẽ hoàn trả lại 100% số tiền chúng tôi đã nhận với điều kiện: lý do bạn không hài lòng là đúng hoặc bạn không vi phạm quy định sử dụng dịch vụ của chúng tôi. Xem thêm về quy định hoàn tiền tại đây."
      }
    },
    {
      "@type": "Question",
      "name": "Sau bao lâu tôi có thể sử dụng dịch vụ sau khi hoàn tất thanh toán?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hệ thống của GOFIBER tạo tài khoản và cài đặt các dịch vụ cho khách hàng hoàn toàn tự động và gần như hoàn thành ngay lập tức sau khi thanh toán cho đơn hàng được xác nhận thành công. Đối với các khách hàng sử dụng dịch vụ máy chủ ảo VPS có mở thêm yêu cầu hỗ trợ cài các panel như Aapanel hay Directadmin, thời gian để các chuyên viên hệ thống hoàn tất cài đặt thường cộng thêm từ 30-60 phút."
      }
    },
    {
      "@type": "Question",
      "name": "Tôi đang sử dụng dịch vụ hosting ở nơi khác, làm sao để chuyển sang dịch vụ của GOFIBER?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hiện tại GOFIBER đang có chính sách hỗ trợ chuyển server từ nhà cung cấp cũ của quý khách về GOFIBER hoàn toàn miễn phí. Quý khách có thể mở ticket để gửi yêu cầu cho các chuyên viên phụ trách để nhờ thực hiện chuyển data về hộ nếu muốn. Website của quý khách sau khi chuyển về được các chuyên viên kiểm tra và đảm bảo vận hành trơn tru trước khi bàn giao lại cho quý khách."
      }
    },
    {
      "@type": "Question",
      "name": "Tôi có thể nâng cấp gói dịch vụ đang sử dụng không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bất cứ lúc nào khách hàng cũng có thể chọn để nâng cấp dịch vụ đang sử dụng lên các gói cao cấp hơn. Hệ thống của GOFIBER tự động tính toán phần chi phí và quý khách chỉ phải chi trả cho phần chênh lệch giữa hai gói dịch vụ khi nâng cấp. Việc thanh toán gói dịch vụ nâng cấp theo giá mới sẽ bắt đầu vào chu kỳ gia hạn dịch vụ tiếp theo dựa trên tài khoản của khách hàng."
      }
    },
    {
      "@type": "Question",
      "name": "Tôi có thể liên hệ với GOFIBER qua đâu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GOFIBER có đa dạng kênh liên lạc nhằm hỗ trợ khách hàng tốt nhất. Bạn có thể liên hệ với chúng tôi qua FanPage Facebook, TikTok, Email,... để được hỗ trợ tức thời, hãy liên hệ với chúng tôi qua số điện thoại 0989078507 (Tel-Viber-Zalo).Đối với các yêu cầu hỗ trợ liên quan đến các dịch vụ như dịch vụ hosting, dịch vụ máy chủ, dịch vụ máy chủ áo VPS,... chúng tôi khuyến khích khách hàng mở yêu cầu hỗ trợ qua hệ thống ticket để được hỗ trợ hiệu quả nhất và bảo mật nhất."
      }
    },
    {
      "@type": "Question",
      "name": "Các hình thức thanh toán sử dụng dịch vụ",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Có 2 hình thức thanh toán:Một là, thanh toán bằng tiền mặt tại văn phòng Công ty GOFIBER: Quý khách đến và thực hiện thanh toán bằng tiền mặt trực tiếp tại văn phòng Công ty TNHH Công Nghệ Phần Mềm GOFIBER  tại địa chỉ: Số 131, Đường CN11, P. Sơn Kỳ, Q. Tân Phú, TP.HCM). Hai là, thanh toán qua hình thức chuyển khoản. Khách hàng có thể thanh toán dịch vụ qua chuyển khoản ngân hàng, VISA, ví Momo, QR code."
      }
    },
    {
      "@type": "Question",
      "name": "Tôi lỡ quên gia hạn dịch vụ thì dữ liệu có thể phục hồi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dữ liệu là điều quý khách không phải lo khi sử dụng các dịch vụ của GOFIBER. Hệ thống của chúng tôi được cài đặt để thực hiện backup dữ liệu của quý khách thường xuyên trên cấp độ server. Do đó quý khách hàng hoàn toàn có thể liên hệ với nhân viên hỗ trợ để được hỗ trợ nhận lại dữ liệu khi cần thiết. Theo chính sách bảo lưu của GOFIBER, dữ liệu của quý khách cùng tên miền, nếu lỡ quên gia hạn, được hỗ trợ “giữ hộ” miễn phí với thời hạn lên đến 12 tháng. Sau khi dịch vụ đã hết hạn, nếu có bất kỳ vấn đề phát sinh gì xin Quý khách vui lòng liên hệ với NVKD đang làm việc hoặc hotline/livechat để được giải quyết."
      }
    },
    {
      "@type": "Question",
      "name": "GOFIBER có giữ bí mật các thông tin dữ liệu cá nhân của tôi không?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GOFIBER cam kết các thông tin và dữ liệu của khách hàng luôn được bảo mật theo tiêu chuẩn chung của Pháp luật Việt Nam và Tiêu chí riêng của GOFIBER."
      }
    },
    {
      "@type": "Question",
      "name": "Có thể dùng thử mà không cần thanh toán?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GOFIBER là một thương hiệu uy tín với các chính sách dùng thử tốt nhất hiện nay. Khách hàng có thể đăng ký dùng thử với bộ phận Kinh doanh để được trải nghiệm thử 7 ngày hoàn toàn miễn phí. Thủ tục dùng thử tại GOFIBER thường không cần xét duyệt và chờ đợi, kích hoạt dùng thử trong 5 phút. Bất cứ lúc nào trong thời hạn dùng thử, khách hàng cũng có thể chủ động tiến hành thanh toán để có nâng cấp tài khoản thành chính thức. Có thể nói, hoàn toàn không có khác biệt giữa chất lượng dịch vụ của tài khoản dùng thử và tài khoản chính thức."
      }
    }
  ]
}
type Props = {
  tags: any[];
};

function WebHostingPage({ tags }: Props) {

  const dispatch = useAppDispatch();
  const [packageSelect, setPackageSelect] = useState();
  const [hostings, setHostings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getHostings = async () => {
    try {
      setIsLoading(true);

      const params = {
        status: 1,
      };

      const result = await dispatch(getAllHosting(params)).unwrap();

      const { hosting } = result?.data;

      setHostings(hosting || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getHostings();
  }, []);

  const renderSlideHire = {
    loading: <SkeletonSlide />,
    notLoading: (
      <div>
        <SliderHostingPrice
          data={hostings}
          onSelectPackage={setPackageSelect}
        />
      </div>
    ),
  };

  return (
    <>
      <Head>

        {tags.map((tag, index) => (

          <React.Fragment key={index}>{parse(tag)}</React.Fragment>
        ))}
      </Head>
      <Script type="application/ld+json" id="dichvuHosting" dangerouslySetInnerHTML={{
        __html: `{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Tôi có dự án ở lớp cần có thể cài đặt website ASP/ ASP.NET, dịch vụ hosting GOFIBER có hỗ trợ không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ngoài các gói dịch vụ hosting trên Linux, thường chuyên dụng cho web hosting chạy PHP và MySQL, GOFIBER cũng cung cấp các gói dịch vụ hosting trên Windows. Sản phẩm web hosting chạy Windows là một trong những sản phẩm lý tưởng và chuyên dụng dành cho website phát triển trên mã nguồn ASP/ ASP.NET."
            }
          },{
            "@type": "Question",
            "name": "Dịch vụ hosting của GOFIBER hỗ trợ tôi cài đặt website thế nào?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Với các gói web hosting giá rẻ đến cao cấp của dịch vụ hosting tại GOFIBER thì quý khách luôn có thể yêu cầu nhân viên kỹ thuật hỗ trợ khi gặp vấn đề trong việc cài đặt WordPress. Đặc biệt, các gói Hosting WordPress tại GOFIBER còn được tích hợp sẵn các phần mềm hỗ trợ trên tầng server nhằm giúp các website WordPress vận hành tối ưu hơn."
            }
          },{
            "@type": "Question",
            "name": "Nâng cấp gói hosting như thế nào? Có ảnh hưởng gì đến các trang web đang chạy hay không?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bạn có thể chọn để nâng cấp các gói dịch vụ hosting mà mình đang sử dụng bất cứ lúc nào mà không phải lo việc ảnh hưởng đến các trang web đang chạy. Việc nâng cấp gói hosting dù là về dung lượng SSD, CORE hay RAM đều được diễn ra ở thượng tầng máy chủ. Việc gián đoạn dịch vụ nếu có cũng chỉ mất khoảng một phút để các kỹ thuật viên restart lại hệ thống sau khi nâng cấp."
            }
          },{
            "@type": "Question",
            "name": "Nên sử dụng hosting có dung lượng bao nhiêu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mức dung lượng (disk space) của hosting mà bạn cần thường sẽ tùy thuộc hoàn toàn vào nhu cầu sử dụng của bạn. Với các trang web đơn giản, ít hình ảnh và các định dạng media thì chỉ cần một web hosting khoản từ 5-10GB. Tại GOFIBER, quý khách có thể nâng cấp gói dịch vụ lưu trữ của web hosting lên bất cứ lúc nào."
            }
          },{
            "@type": "Question",
            "name": "Các phiên bản PHP hỗ trợ trên hosting GOFIBER",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tất cả máy chủ hosting tại GOFIBER đều hỗ trợ PHP 5.6 đến PHP 8.1 hoặc hơn, đảm bảo tương thích với mọi mã nguồn website. Hệ quản trị cơ sở dữ liệu (database) sử dụng MariaDB 10.2 đến mới nhất, hoặc MySQL phiên bản từ 5.1 đến 5.5."
            }
          },{
            "@type": "Question",
            "name": "Hosting giá rẻ: của rẻ có bị ôi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nhiều người cho rằng hosting giá rẻ không bao giờ mang lại chất lượng cao, song nhận định này không hẳn đúng. Trên thực tế, tùy vào mục đích và nhu cầu sử dụng của doanh nghiệp mà bạn cần các gói hosting khác nhau. Nếu là cá nhân hoặc doanh nghiệp nhỏ, quý khách hoàn toàn có thể chọn gói hosting giá rẻ để tối ưu chi phí. Sau một thời gian hoạt động nếu doanh nghiệp cần không gian lưu trữ lớn hơn lúc đó có thể nâng cấp hosting cũng không muộn."
            }
          }]
        }
        `,
      }}></Script>

      <div id="web-hosting">
        <BannerV2Page
          styleLinkName={{ maxWidth: "400px" }}
          image="https://gofiber.b-cdn.net/new-design/Web-Hosting/desktop-web-hosting.png"
          imageDesktop="https://gofiber.b-cdn.net/new-design/Web-Hosting/dt-web-hosting.png"
          imageSmall="https://gofiber.b-cdn.net/new-design/Web-Hosting/mb-web-hosting.png"
          imageTablet="https://gofiber.b-cdn.net/new-design/Web-Hosting/tl-web-hosting.png"
          name="Dịch vụ hosting,
          web hosting giá rẻ"
          divImport="true"
          data={dataForBanner}
          extra="Các dịch vụ công nghệ do GOFIBER cung cấp như dịch vụ hosting, web hosting giá rẻ,... mang đến sự khác biệt với tính ổn định cao, tốc độ truy cập nhanh, UPTIME lên đến 99%, miễn phí chứng chỉ SSL trọn đời, hỗ trợ kỹ thuật 24/7."
          extra1="Hosting giá rẻ cao cấp tại GOFIBER được trang bị ổ cứng NVMe và SSD Enterprise RAID-10, hỗ trợ đắc lực cho tốc độ truy cập của website, cùng băng thông không giới hạn đáp ứng nhu cầu của đại đa số các khách hàng hiện nay."
        />

        <div className="containerForHosting" style={{ maxWidth: "910px" }}>


        </div>
        <Banner />
        <BannerForHosting imageDesktop="https://gofiber.b-cdn.net/new-design/Web-Hosting/banner.png" imageTablet="https://gofiber.b-cdn.net/new-design/Web-Hosting/banner-tablet.png" imageSmall="https://gofiber.b-cdn.net/new-design/Web-Hosting/banner-mobile.png" />
        <section className="section-info-web-hosting">
          <div className="container">
            <div className="row justify-content-center align-items-center flex-row-reverse">
              <div className="col col-12 col-md-6">
                <div className="img text-center text-md-left">
                  <img
                    src={WEB_HOSTING_IMAGE.CLOUD2}
                    width={1000}
                    height={500}
                    alt="Cloud-hosting-rafiki"
                  />
                </div>
              </div>

              <div className="col col-12 col-md-6 dichvuHostingInfo">
                <h4 className="h4">Secure Shell (SSH)</h4>
                <p>
                  Cung cấp tài khoản và cho phép sử dụng shell command qua giao thức bảo mật chuẩn SSH trên mọi gói dịch vụ hosting, bao gồm cả hosting giá rẻ.
                </p>
                <h4 className="h4">PHP 5.6 đến PHP 8.1</h4>
                <p>
                  Hỗ trợ cài đặt sẵn hoặc cài đặt theo yêu cầu của khách hàng các phiên bản PHP từ 5.6 đến 8.1. Với công nghệ FPM, mỗi website trên hosting của quý khách có thể sử dụng một phiên bản PHP khác nhau.
                </p>
                <h4 className="h4">SSL miễn phí</h4>
                <p>
                  Bất cứ website nào đặt trên hệ thống dịch vụ hosting của GOFIBER đều được cấp chứng chỉ SSL miễn phí.
                </p>
                <h4 className="h4">Chuyển dữ liệu 24/7</h4>
                <p>
                  Hỗ trợ miễn phí việc chuyển dữ liệu của khách hàng từ hosting khác về hosting của GOFIBER. Bộ phận kỹ thuật sẽ đảm cho website của quý khách vận hành trơn tru trước khi chuyển giao lại.
                </p>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mt-4">
              <div className="col col-12 col-md-6">
                <div className="img text-center text-md-left">
                  <img
                    src={WEB_HOSTING_IMAGE.CLOUD1}
                    width={1000}
                    height={500}
                    alt="Cloud-hosting-amico-2"
                  />
                </div>
              </div>
              <div className="col col-12 col-md-6">
                <h4 className="h4">Ngăn chặn mã độc</h4>
                <p>
                  Các website được lưu trữ trên hệ thống máy chủ của GOFIBER, bao gồm cả dịch vụ hosting đều được quét mã độc tự động hàng ngày bằng công cụ “Quét chống mã độc Imunify360”
                </p>
                <h4 className="h4">Hệ thống cảnh báo Monitor</h4>
                <p>
                  Dữ liệu trên host của bạn sẽ được tự động sao lưu mỗi ngày, bao gồm sao lưu database và sao lưu tập tin và thư mục. Các bản backup được lưu thành 7 bản khác nhau để bạn có thể tự khôi phục một phần hoặc toàn bộ bất cứ lúc nào.
                </p>

                <h4 className="h4">Sao lưu mỗi ngày</h4>
                <p>
                  Dữ liệu trên host của bạn sẽ được tự động sao lưu mỗi ngày, bao gồm sao lưu database và sao lưu tập tin và thư mục. Các bản backup được lưu thành 7 bản khác nhau để bạn có thể tự khôi phục một phần hoặc toàn bộ bất cứ lúc nào.

                </p>
                <h4 className="h4">Bảo mật dữ liệu</h4>
                <p>
                  Hệ thống CloudLinux với đặc tính bảo mật nền tảng sẽ giúp hạn chế và ngăn chặn tối đa việc bị tấn công lỗ hổng thông qua Local Attack.

                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="d-flex mt-5 mx-auto justify-content-center " style={{ fontWeight: "600", fontSize: "32px", lineHeight: "48px" }}>Hỏi & đáp liên quan đến dịch vụ Hosting</div>
        <div className="d-flex mt-2 mx-auto justify-content-center   text-center dichVuHostingBanner w-sm-100">Khi đi thuê hosting, đa số các khách hàng thường có những thắc mắc về dịch vụ và sản phẩm gần như giống nhau. GOFIBER và các chuyên gia tư vấn của mình đã tổng hợp lại để quý khách hàng  có thể tham khảo nhanh một số vấn đề như sau:
        </div>
        <Question showContent={false} isHosting={true} data={question} />

        {/* <section className="section-contact">
        <div className="section-content position-relative">
          <div className="row justify-content-center">
            <div className="col col-12">
              <div className="col-inner">
                <div className="row row-title justify-content-center">
                  <div className="col col-12 col-md-6 col-lg-4 col-title-3 text-center">
                    <h2 className="m-0">
                      BẠN QUAN TÂM GÌ ĐẾN DỊCH VỤ CỦA CHÚNG TÔI
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <BuyPackage packageSelect={packageSelect} />
          </div>
        </div>
      </section> */}
        {/* <Contact /> */}
        <div className="d-flex mt-5 mx-auto justify-content-center " style={{ fontWeight: "600", fontSize: "32px", lineHeight: "48px" }}>Bạn vẫn có thắc mắc cần được tư vấn?</div>
        <Contact showTitle={false} />
        <BuyPackage packageSelect={packageSelect} />
      </div >
    </>
  );
}

export default WebHostingPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const params: any = {
      link: "/dich-vu-hosting",
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
