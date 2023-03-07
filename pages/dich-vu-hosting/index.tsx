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
        <p><span >Ngo&agrave;i c&aacute;c g&oacute;i dịch vụ hosting tr&ecirc;n Linux, thường chuy&ecirc;n dụng cho web hosting chạy PHP v&agrave; MySQL, GOFIBER cũng cung cấp c&aacute;c g&oacute;i dịch vụ hosting tr&ecirc;n Windows. Sản phẩm web hosting chạy Windows l&agrave; một trong những sản phẩm l&yacute; tưởng v&agrave; chuy&ecirc;n dụng d&agrave;nh cho website ph&aacute;t triển tr&ecirc;n m&atilde; nguồn ASP/ ASP.NET.</span></p>
      </>
    ),
  },
  {
    id: "2",
    title: "Dịch vụ hosting của GOFIBER hỗ trợ tôi cài đặt website thế nào?",
    content: (
      <>
        <p dir="ltr" >Với c&aacute;c g&oacute;i web hosting gi&aacute; rẻ đến cao cấp của dịch vụ hosting tại GOFIBER th&igrave; qu&yacute; kh&aacute;ch lu&ocirc;n c&oacute; thể y&ecirc;u cầu nh&acirc;n vi&ecirc;n kỹ thuật hỗ trợ khi gặp vấn đề trong việc c&agrave;i đặt WordPress. Đặc biệt, c&aacute;c g&oacute;i Hosting WordPress tại GOFIBER c&ograve;n được t&iacute;ch hợp sẵn c&aacute;c phần mềm hỗ trợ tr&ecirc;n tầng server nhằm gi&uacute;p c&aacute;c website WordPress vận h&agrave;nh tối ưu hơn.</p>
      </>
    ),
  },
  {
    id: "3",
    title: "Nâng cấp gói hosting như thế nào? Có ảnh hưởng gì đến các trang web đang chạy hay không ?",
    content: (
      <>
        <p dir="ltr" >Bạn c&oacute; thể chọn để n&acirc;ng cấp c&aacute;c g&oacute;i dịch vụ hosting m&agrave; m&igrave;nh đang sử dụng bất cứ l&uacute;c n&agrave;o m&agrave; kh&ocirc;ng phải lo việc ảnh hưởng đến c&aacute;c trang web đang chạy. Việc n&acirc;ng cấp g&oacute;i hosting d&ugrave; l&agrave; về dung lượng SSD, CORE hay RAM đều được diễn ra ở thượng tầng m&aacute;y chủ. Việc gi&aacute;n đoạn dịch vụ nếu c&oacute; cũng chỉ mất khoảng một ph&uacute;t để c&aacute;c kỹ thuật vi&ecirc;n restart lại hệ thống sau khi n&acirc;ng cấp.</p>
        {/* <p>
          <ul style={{ listStyle: "outside" }}>
            <li>
              <strong>Tốc độ trang Web</strong>: Nếu bạn chọn gói Hosting kém
              chất lượng, trang Web có thể tải chậm. Nó sẽ khiến trải nghiệm
              khách hàng kém đi, và còn có thể bị các công cụ tìm kiếm phạt, thứ
              hạng của trang trong kết quả tìm kiếm bị giảm xuống.
            </li>
            <li>
              <strong>Website luôn hoạt động:</strong>: Dịch vụ Hosting chất
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
        <p dir="ltr" >Mức dung lượng (disk space) của hosting m&agrave; bạn cần thường sẽ t&ugrave;y thuộc ho&agrave;n to&agrave;n v&agrave;o nhu cầu sử dụng của bạn. Với c&aacute;c trang web đơn giản, &iacute;t h&igrave;nh ảnh v&agrave; c&aacute;c định dạng media th&igrave; chỉ cần một web hosting khoản từ 5-10GB. Tại GOFIBER, qu&yacute; kh&aacute;ch c&oacute; thể n&acirc;ng cấp g&oacute;i dịch vụ lưu trữ của web hosting l&ecirc;n bất cứ l&uacute;c n&agrave;o.</p>
      </>
    ),
  },
  {
    id: "5",
    title: "Các phiên bản PHP hỗ trợ trên hosting GOFIBER ",
    content: (
      <>
        <p>Tất cả m&aacute;y chủ hosting tại GOFIBER đều hỗ trợ PHP 5.6 đến PHP 8.1 hoặc hơn, đảm bảo tương th&iacute;ch với mọi m&atilde; nguồn website. Hệ quản trị cơ sở dữ liệu (database) sử dụng MariaDB 10.2 đến mới nhất, hoặc MySQL phi&ecirc;n bản từ 5.1 đến 5.5.</p>
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
        <p>Nhiều người cho rằng hosting gi&aacute; rẻ kh&ocirc;ng bao giờ mang lại chất lượng cao, song nhận định n&agrave;y kh&ocirc;ng hẳn đ&uacute;ng. Tr&ecirc;n thực tế, t&ugrave;y v&agrave;o mục đ&iacute;ch v&agrave; nhu cầu sử dụng của doanh nghiệp m&agrave; bạn cần c&aacute;c g&oacute;i hosting kh&aacute;c nhau.&nbsp;</p>
        <p>

        </p>
        <p>Nếu l&agrave; c&aacute; nh&acirc;n hoặc doanh nghiệp nhỏ, qu&yacute; kh&aacute;ch ho&agrave;n to&agrave;n c&oacute; thể chọn g&oacute;i hosting gi&aacute; rẻ để tối ưu chi ph&iacute;. Sau một thời gian hoạt động nếu doanh nghiệp cần kh&ocirc;ng gian lưu trữ lớn hơn l&uacute;c đ&oacute; c&oacute; thể n&acirc;ng cấp hosting cũng kh&ocirc;ng muộn.</p>

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

              <div className="col col-12 col-md-6">
                <h4 className="h4">Chuyên gia hỗ trợ hosting 24/7</h4>
                <p>
                  Ngoài hỗ trợ tiếng Anh 24/7, chuyên gia đào tạo từ công ty
                  Gofiber còn hỗ trợ kỹ thuật toàn thời gian bằng tiếng Việt cho
                  bạn. Nếu có vấn đề xảy ra, bạn không cần lo lắng vì đã có
                  chúng tôi trợ giúp.
                </p>
                <h4 className="h4">Server host công nghệ hàng đầu</h4>
                <p>
                  Bạn lo lắng trang web chậm ảnh hưởng đến uy tín công ty? Đừng
                  lo lắng vì đã có chúng tôi! Với gói máy chủ host chạy trên hạ
                  tầng HTTP/3 kết hợp cơ chế tự phát hiện và sửa lỗi, ổ cứng SSD
                  và không giới hạn băng thông, website của bạn sẽ đạt tốc độ
                  cao nhất.
                </p>
                <h4 className="h4">Server host công nghệ hàng đầu</h4>
                <p>
                  Các chuyên gia kỹ thuật sẽ giúp bạn chuyển website tới
                  Hostinger một cách miễn phí để bạn có thể tập trung vào công
                  việc chính của bạn nhanh hơn.
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
                <h4 className="h4">Hosting tối ưu WordPress</h4>
                <p>
                  Mọi gói hosting của Gofiber đều tối ưu cho WordPress. Các công
                  cụ tăng tốc WordPress cùng máy chủ với LiteSpeed sẽ giúp trang
                  web bạn đạt tốc độ nhanh nhất.
                </p>
                <h4 className="h4">Bảo mật tối đa</h4>
                <p>
                  Cài SSL để chống lại các cuộc tấn công mạng và nâng cao tính
                  bảo mật. Ngay từ lúc bạn mua domain và hosting, công ty chúng
                  tôi sẽ tặng SSL để bảo vệ trang web bạn được an toàn.
                </p>
                <h4 className="h4">Không cần kinh nghiệm làm web</h4>
                <p>
                  Sử dụng dịch vụ của chúng tôi, bạn không cần có kinh nghiệm
                  làm web. Nhờ công cụ quản lý có giao diện trực quan và thân
                  thiện với người dùng, bạn có thể mua web hosting và vận hành
                  một cách hiệu quả. Phần lớn khách hàng của chúng tôi không
                  phải lập trình viên nhưng họ khởi chạy website chỉ trong ít
                  phút.
                </p>
              </div>
            </div>
          </div>
        </section>


        <Question showContent={false} data={question} />

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
