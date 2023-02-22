import BannerPage from "@/src/components/banner/BannerPage";
import BuyPackage from "@/src/containers/BuyPackage";
import Contact from "@/src/containers/home/contact";
import Question from "@/src/containers/home/question";
import SliderHostingPrice from "@/src/containers/web-hosting/SliderHostingPrice";
import { useAppDispatch } from "@/src/redux";
import { getAllHosting } from "@/src/redux/slice/hostingSlice";
import { WEB_HOSTING_IMAGE } from "@/src/utils";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

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
    link: "/hosting-khung-gia-re",
  },
  {
    id: "2",
    title: "Thiết kế Website",
    className: "second",
    link: "/thiet-ke-website",
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
    title: "Web Hosting là gì?",
    content: (
      <>
        <p>
          Nhằm tránh việc nhầm lẫn định nghĩa của host, nếu host cung cấp dịch
          vụ nào đó, dịch vụ đó sẽ được nói rõ và dùng server thay vì dùng host.
        </p>
        <p>
          Các định nghĩa đầy đủ về hosting phải là hosting server nhưng thường
          được viết tắt là hosting.
        </p>
        <p>
          Ví dụ: Web hosting là dịch vụ mà một tổ chức (A) cung cấp tài nguyên
          của server cho một tổ chức khác (gọi là B) để sử dụng tài nguyên đó
          làm host cho trang web của mình.
        </p>
        <p>
          Lúc này A và B đều là nhà cung cấp dịch vụ: A cung cấp web hosting cho
          B, B cung cấp dịch vụ web cho người dùng.
        </p>
        <p>
          Để tránh nhầm lẫn, trong hai cách gọi web host/web server và mail
          host/mail server thì web server và mail server được sử dụng nhiều hơn.
          Còn lại web hosting, cloud hosting, email hosting được dùng để chỉ nhà
          cung cấp dịch vụ host.
        </p>
        <p>
          Nếu chú ý, bạn sẽ thấy rằng khi search “web host” trên Google kết quả
          trả về sẽ là “web hosting”.
        </p>
      </>
    ),
  },
  {
    id: "2",
    title: "Web Hosting hoạt động như thế nào?",
    content: (
      <>
        <p>
          Khi thuê hosting, khách hàng sẽ được cung cấp một server lưu trữ. Khi
          web hoạt động trên Internet, server này có nhiệm vụ truyền tải nội
          dung, tập tin từ phía server lên trình duyệt để người dùng đọc và hiểu
          các thông tin trên website.
        </p>
        <p>
          Tùy mức gói cước mà nhà cung cấp sẽ cấu hình theo thông số hosting
          khách hàng sử dụng. Trong quá trình sử dụng, nếu người thuê có nhu cầu
          nâng cấp hay giảm gói hosting thì nhà cung cấp sẽ điều chỉnh lại những
          thông số này.
        </p>
        <p>
          Phía người dùng chỉ cần upload files và cấu hình các thông tin cần
          thiết. Bên cạnh đó, người dùng có thể truy cập vào quản lý hosting
          thông qua FTP hoặc truy cập địa chỉ IP hay địa chỉ tên miền của
          hosting.
        </p>
      </>
    ),
  },
  {
    id: "3",
    title: "Hosting ảnh hưởng như thế nào đến SEO ?",
    content: (
      <>
        <p>
          Bạn cần dùng dịch vụ Web Hosting nếu muốn đăng trang Web lên Internet.
          Khi người dùng muốn xem trang web của bạn, họ chỉ cần nhập tên miền
          hoặc địa chỉ IP của trang Web vào trình duyệt.
        </p>
        <p>
          Khi khách truy cập vào trang web của bạn, máy tính của họ sẽ kết nối
          với máy chủ của bạn. Khi ấy trang Web của bạn sẽ được chuyển đến họ
          thông qua trình duyệt.
        </p>
        <p>
          Web Hosting ảnh hưởng đến quá trình SEO khi nó là một trong những yếu
          tố được Google xem xét và quyết định Website nào sẽ hiển thị cho truy
          vấn tìm kiếm.
        </p>
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
        <p>
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
        </p>
      </>
    ),
  },
  {
    id: "4",
    title: "Mối quan hệ giữa Hosting và Domain",
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
        <p>
          <strong>Hosting</strong> và <strong>Domain</strong> là 2 dịch vụ khác
          nhau. Một website phải có cả hai dịch vụ trên thì mới có thể hoạt động
          bình thường.
        </p>
        <p>
          1 hệ thống tên miền cũng giống 1 cuốn danh bạ thường xuyên được
          update. Sau mỗi tên miền là địa chỉ của dịch vụ lưu trữ file của mỗi
          website
        </p>
        <p>
          Nếu không có tên miền thì sẽ không có cách nào tìm ra website. Và nếu
          không có hosting thì bạn không thể xây website được.
        </p>
      </>
    ),
  },
  {
    id: "5",
    title: "Sự khác nhau giữa Domain và Hosting là gì",
    content: (
      <>
        <p>
          Cả hai yếu tố Domain và Web Hosting hoạt động song song với nhau. Tuy
          nhiên, giữa hosting và domain cũng có sự khác biệt. Vậy điểm khác nhau
          giữa hosting và domain là gì?
        </p>
        <p>
          Dưới đây là một{" "}
          <strong>số sự khác biệt giữa hosting và domain</strong> mà bạn cần
          biết trước khi chuẩn bị tạo trang web cho mình.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Domain</strong>
              </td>
              <td>
                <strong>Hosting</strong>
              </td>
            </tr>
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

            <tr>
              <td>
                Domain là một địa chỉ có tên của một địa điểm internet cũng như
                là địa chỉ giúp nhận dạng.
              </td>
              <td>
                Hosting là dịch vụ lưu trữ dữ liệu được chia nhỏ thành các máy
                chủ (server), giúp bạn dễ dàng đăng tải và xuất bản website và
                app lên internet.
              </td>
            </tr>
            <tr>
              <td>
                Domain giúp mang lại dấu ấn thương hiệu qua việc phân biệt trang
                web của bạn với những trang web khác.
              </td>
              <td>
                Hosting cung cấp tài nguyên và không gian để trang web hoạt động
                đồng thời là nơi lưu trữ dữ liệu website, trong đó có cả domain.
              </td>
            </tr>

            <tr>
              <td>
                Tên miền của của mỗi website không giống nhau và phải được đăng
                ký theo đúng quy trình.
              </td>
              <td>
                Các trang web có thể dùng chung một hosting. Bạn có thể mua hoặc
                thuê hosting tùy theo nhu cầu sử dụng.
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
];

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

function WebHosting() {
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
        <title>Dịch vụ hosting và web hosting giá rẻ, free chứng chỉ SSL</title>
        <link rel="canonical" href="https://gofiber.vn/hosting-khung-gia-re" />
      </Head>
      <div id="web-hosting">
        <section>
          <BannerPage image={banner} name="Web Hosting" />
        </section>
        <div className="container">
          <section className="mt-4 text-center">
            <h3 className="h3 mt-4">
              Mua Hosting đang được tin dùng bởi hàng ngàn người
            </h3>
            <p className="mt-3">
              GoFiber là nhà cung cấp dịch vụ lưu trữ web hosting được đánh giá
              “tuyệt vời” bởi hàng ngàn người dùng thực tế.
            </p>
          </section>
          <section className="section-hosting-price">
            <h3 className="h3 text-center">Bảng giá hosting</h3>
            <div>
              {isLoading
                ? renderSlideHire["loading"]
                : renderSlideHire["notLoading"]}
            </div>
            <div className="mt-4 text-center">
              <Link className="a" href="/chinh-sach-thanh-toan">
                <span className="color_primary">Điều khoản thanh toán</span>
              </Link>
            </div>
          </section>
        </div>
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

        <section className="section-search-other container">
          <h3 className="h3 text-center">Bạn đang cần tìm gì khác?</h3>
          <div className="section-search-other__list hide-for-small">
            <div className="row justify-content-center">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="col col-12 col-md-6 col-lg-4 mt-4"
                >
                  <div
                    className={`d-flex align-items-center justify-content-center section-search-other__item section-search-other__item__${item.className}`}
                  >
                    <Link className="a" href={item.link}>
                      {item.title}
                    </Link>
                  </div>
                </div>
              ))}
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

        <BuyPackage packageSelect={packageSelect} />
      </div>
    </>
  );
}

export default WebHosting;
