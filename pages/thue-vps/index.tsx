import BannerPage from "@/src/components/banner/BannerPage";
import Contact from "@/src/containers/home/contact";
import Question from "@/src/containers/home/question";
import BuyPackage from "@/src/containers/BuyPackage";
import SliderHire from "@/src/containers/rent-vps/SliderHire";
import { VPS_IMAGE } from "@/src/utils";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/src/redux";
import { getAllVpsByVpsTab } from "@/src/redux/slice/vpsSlice";
import Skeleton from "react-loading-skeleton";
import Head from "next/head";
import { updateBuyPackage } from "@/src/redux/slice";
import { GetServerSidePropsContext } from "next";
import { SeoApi } from "@/src/api/seo";
import parse from 'html-react-parser';
import BannerV2Page from "@/src/components/banner/BannerV2Page";
import Script from "next/script";

const banner = {
  large: VPS_IMAGE.BANNER_LARGE,
  medium: VPS_IMAGE.BANNER_MEDIUM,
  small: VPS_IMAGE.BANNER_SMALL,
};

const tabs = [
  {
    id: "vps",
    name: "VPS",
  },
  {
    id: "Server Việt Nam",
    name: "Server Việt Nam",
  },
  {
    id: "Server US",
    name: "Server US",
    isUpdating: true,
  },
  {
    id: "Server Alibaba",
    name: "Server Alibaba",
    isUpdating: true,
  },
  {
    id: "Server Singapore",
    name: "Server Singapor",
    isUpdating: true,
  },
  {
    id: "Server Japan",
    name: "Server Japan",
    isUpdating: true,
  },
];

const question = [
  {
    id: "1",
    title: " VPS là gì?",
    content: (
      <>
        <p>
          VPS là máy chủ ảo được một dịch vụ lưu trữ Internet bán dưới dạng dịch
          vụ. VPS chạy bản sao hệ điều hành và khách hàng có quyền truy cập
          superuser vào phiên bản hệ điều hành đó. Vì thế họ có thể cài đặt hầu
          hết mọi phần mềm chạy trên hệ điều hành đó.
        </p>
      </>
    ),
  },
  {
    id: "2",
    title: "Cách thuê VPS chuẩn",
    content: (
      <>
        <p>
          Vẫn còn nhiều người thắc mắc cách thuê VPS phù hợp với túi tiền cũng
          như nhu cầu sử dụng. VPS được chia thành nhiều gói tương ứng với các
          mức giá khác nhau.
        </p>
        <p>
          Chất lượng đi đôi với giá thành, nghĩa là dung lượng lưu trữ của những
          gói mức trung bình sẽ thấp hơn dung lượng gói thuê với mức giá cao.
        </p>
        <p>
          Chúng tôi khuyên bạn nên thuê gói VPS phù hợp với mục đích sử dụng.
          Điều đó giúp bạn tiết kiệm được khoản tiền cũng như tránh bị quá tải
          hay thừa không gian lưu trữ dữ liệu trên VPS.
        </p>
        <p>
          <h4 className="h4">Đối với cá nhân</h4>
        </p>
        <p>
          Cá nhân thường dùng những gói VPS có giá thành thấp hoặc trung bình.
          Chẳng hạn như:
        </p>
        <p>
          <strong>SSD CLOUD VPS A</strong>: sở hữu ưu điểm nổi bật nhưng giá
          thành cực kỳ thấp. Đây là gói VPS thấp nhất so với các gói còn lại.
          Trên SSD có dung lượng lưu trữ là 15GB và trên RAM là 1GB. Vì vậy, với
          người dùng sử dụng VPS có khối lưu trữ ít hoặc vừa phải có thể chọn
          gói VPS này.
        </p>
        <p>
          <strong>SSD CLOUD VPS B</strong>: gói này có giá cao hơn SSD CLOUD VPS
          A đồng nghĩa với tốc độ truyền tải dữ liệu của nó sẽ nhanh hơn. Lưu
          trữ trên SSD CLOUD VPS B có dung lượng là 25GB và trên RAM là 1.5MB.
          Với cá nhân muốn có kho lưu trữ thoải mái cùng tốc độ xử lý dữ liệu
          nhanh thì đừng bỏ qua gói này.
        </p>
        <p>
          <strong>SSD CLOUD VPS C</strong>: gói này có giá cao hơn hai gói trên.
          Được trang bị lõi xử lý 3 cores, SSD CLOUD VPS C giúp gia tăng tốc độ
          xử lý dữ liệu một cách nhanh chóng. Dung lượng lưu trữ trên SSD CLOUD
          VPS C là 50GB và trên RAM là 2GB. Với những bạn muốn xử lý công việc
          nhanh chóng và thuận tiện thì đây là gói rất đáng để đầu tư.
        </p>
      </>
    ),
  },
  {
    id: "3",
    title: "Tại sao nên dùng VPS",
    content: (
      <>
        <p>
          Bạn đã biết ưu điểm khi sử dụng VPS chưa? Nếu bạn còn phân vân nên
          dùng VPS hay không thì hãy xem qua những ưu điểm mà máy chủ ảo này
          mang lại nhé:
        </p>
        <p>
          <ul>
            <li>
              Tài nguyên sử dụng một cách độc lập, không chia sẻ hay dùng chung
              với người dùng khác.
            </li>
            <li>
              VPS cung cấp băng thông và dung lượng khổng lồ để đáp ứng mọi nhu
              cầu của người dùng.
            </li>
            <li>
              Tiết kiệm chi phí hơn so với thuê máy chủ riêng. Ngoài ra việc lắp
              đặt cũng vô cùng dễ dàng và nhanh chóng.
            </li>
            <li>
              Bạn không cần khởi động lại hệ thống vì VPS dễ dàng nâng cấp.
            </li>
            <li>Bạn có quyền lựa chọn cấu hình VPS phù hợp.</li>
            <li>
              So với Shared Hosting thì VPS giúp bạn có nhiều quyền kiểm soát
              hơn.
            </li>
            <li>Tính năng bảo mật dữ liệu vượt trội.</li>
            <li>
              Việc kiểm tra vận hành sẽ dễ dàng hơn do nhiều VPS nằm tập trung
              trên 1 hệ thống máy chủ.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: "4",
    title: "Các thông số quan trọng trong VPS",
    content: (
      <>
        <p>
          Bạn cần lưu ý các thông số kỹ thuật sau để có được máy chủ ảo phù hợp
          với nhu cầu của bản thân trước khi lựa chọn mua hoặc thuê VPS.
        </p>
        <p>
          <b>RAM&nbsp;</b>
        </p>
        <p>
          RAM đóng vai trò xử lý đoạn mã PHP, truy xuất dữ liệu của database với
          MySQL hay các ứng dụng, hỗ trợ đọc ghi dữ liệu. Vì vậy, việc VPS có
          nhiều RAM khả năng truy xuất dữ liệu sẽ tốt hơn
        </p>
        <p>Muốn xác định dung lượng RAM phù hợp cần dựa vào 2 yếu tố:</p>
        <p>
          <ul>
            <li>Lưu lượng truy cập website.</li>
            <li>Tối ưu VPS theo nhu cầu sử dụng.</li>
          </ul>
        </p>
        <p>
          Hiện nay, các dịch vụ VPS đều cung cấp RAM từ 512MB – 16GB. Nếu bạn
          cần máy chủ cho WordPress thì RAM ít nhất phải là 1GB.
        </p>
        <p>
          <b>SWAP</b>
        </p>
        <p>
          SWAP không phải là bộ nhớ độc lập mà nó chính là không gian lưu trữ có
          trên cứng. Đây là bộ nhớ ảo để lưu các hành động đã xử lý trước đó.
          Mặc dù không được sử dụng nhiều nhưng SWAP thật sự hữu ích khi bộ nhớ
          RAM bị quá tải.
        </p>
        <p>
          <b>Disk: Ổ đĩa cứng hoặc ổ cứng</b>
        </p>
        <p>
          Disk là một thiết bị đóng vai trò vô cùng quan trọng. Chúng được sử
          dụng để lưu trữ dữ liệu, các tập tin nguồn của website, các file của
          hệ điều hành.
        </p>
        <p>Ổ cứng gồm 2 loại:&nbsp;</p>
        <p>
          <ul>
            <li>
              Hard Disk Drive (HDD) là loại ổ cứng được dùng nhiều trên máy
              tính. Ưu điểm của HDD là giá rẻ, dung lượng lớn tuy nhiên khuyết
              điểm của nó là tốc độ truy xuất chậm, dễ hư hỏng và có khả năng
              mất dữ liệu.
            </li>
            <li>
              Solid State Drive (viết tắt là SSD) có tốc độ truy cập siêu nhanh,
              gấp 300 lần so với ổ HDD. Ngoài ra, SSD còn có độ bền cao, đảm bảo
              dữ liệu được an toàn. Với nhiều ưu điểm như thế nên giá thành ổ
              SSD cao hơn HDD.
            </li>
          </ul>
        </p>
        <p>
          <b>CPU Core</b>
        </p>
        <p>
          Dù thuê VPS ở bất kỳ quốc gia nào bạn cũng không được bỏ qua yếu tố
          CPU Core. CPU Core là lõi xử lý của CPU. Với tiêu chí này, bạn cần
          quan tâm đến tốc độ xung nhịp, số Core.
        </p>
        <p>
          Các server chuyên dụng thông thường có số lượng Core cố định rồi được
          chia cho tất cả máy chủ ảo có trong nó. Số Core càng cao thì máy chủ
          xử lý càng nhanh càng hiệu quả.
        </p>
        <p>
          Các nhà cung cấp dịch vụ VPS hiện nay thường thiết kế số core từ 1 đến
          6.
        </p>
        <p>
          <b>Băng thông&nbsp;</b>
        </p>
        <p>
          Băng thông là lượng dữ liệu được truyền tải trong một đơn vị thời
          gian. Băng thông càng rộng thì tốc độ dữ liệu tải càng nhanh.
        </p>
        <p>
          <b>IP</b>
        </p>
        <p>Bạn sẽ được cung cấp địa chỉ IP khi thuê VPS.</p>
        <p>
          <b>Hệ điều hành</b>
        </p>
        <p>
          VPS có hai hệ điều hành phổ biến là Windows và Linux. Trong đó, Linux
          cho phép người dùng thao tác linh hoạt trên máy chủ đồng thời hỗ trợ
          nhiều ứng dụng với chi phí rẻ hơn so với hệ điều hành Windows. Vì vậy,
          bạn nên cân nhắc chọn hệ điều hành phù hợp với nhu cầu sử dụng.
        </p>
      </>
    ),
  },
  {
    id: "5",
    title: "VPS được dùng làm gì ?",
    content: (
      <>
        <p>Hiện nay VPS được dùng cho những nhu cầu như:&nbsp;</p>
        <p>
          <ul>
            <li>
              Lưu trữ website đa dịch vụ (website bán hàng, đa dịch vụ, thương
              mại điện tại, những trang web có lượng truy cập lớn…)
            </li>
            <li>Máy chủ game</li>
            <li>
              Tạo môi trường ảo để lập trình, phân tích vi rút, nghiên cứu…
            </li>
            <li>Chạy chương trình truyền thông trực tiếp</li>
            <li>Lưu trữ các dữ liệu như hình ảnh, tài liệu, video…</li>
            <li>Máy chủ cho hệ thống email doanh nghiệp</li>
            <li>Phát triển platform</li>
          </ul>
        </p>
        <p>
          VPS không những dùng trong các doanh nghiệp mà còn được những mô hình
          kinh doanh nhỏ lẻ ưa chuộng.
        </p>
      </>
    ),
  },
];

const SkeletonSlide = () => (
  <>
    <div className="d-flex justify-content-center mt-4">
      <Skeleton
        count={1}
        style={{ height: "40px", width: "100px", borderRadius: "32px" }}
      />
      <Skeleton
        className="mx-2"
        count={1}
        style={{ height: "40px", width: "100px", borderRadius: "32px" }}
      />
      <Skeleton
        count={1}
        style={{ height: "40px", width: "100px", borderRadius: "32px" }}
      />
    </div>
    <div className="row mt-4 justify-content-center">
      {[
        "mt-0 mt-lg-3",
        "mt-0 d-none d-lg-block",
        "mt-lg-3 mt-0 d-none d-md-block",
      ].map((i, index) => (
        <div
          key={index}
          className={`col col-12 col-sm-8 col-md-6 col-lg-4 ${i}`}
        >
          <Skeleton count={1} style={{ width: "100%", minHeight: "600px" }} />
        </div>
      ))}
    </div>
  </>
);

type Props = {
  tags: any[];
};

function RentVps({ tags }: Props) {
  const { buyPackage } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();
  const [tab, setTab] = useState<any>();
  const [packageSelect, setPackageSelect] = useState();
  const [vps, setVps] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const scroll: any = document.getElementById("buy-package");
    if (buyPackage?.count > 0) {
      setPackageSelect(buyPackage?.item);

      setTimeout(() => {
        const offset = -100;
        const y =
          scroll.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 200);
    }

    return () => {
      dispatch(updateBuyPackage(0));
    };
  }, []);

  const getVps = async () => {
    try {
      setIsLoading(true);

      const result = await dispatch(getAllVpsByVpsTab({})).unwrap();

      const { data } = result?.data;

      setTab(data[0]);
      setVps(data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getVps();
  }, []);

  const renderSlideHire = {
    loading: <SkeletonSlide />,
    notLoading: (
      <>
        <div className="d-flex justify-content-center flex-wrap mt-4 pt-4">
          {vps.map((item) => (
            <button
              onClick={() => setTab(item)}
              key={item._id}
              className={`btn0 btn-tab m-1 ${tab?._id === item?._id ? "active" : ""
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="mt-3">
          {tab?.isUpdating ? (
            <div id="slider-hire">
              <div className="text-center pt-4">
                <div className="img">
                  <img src={VPS_IMAGE.UPDATING} alt="Đang cập nhật" />
                </div>
              </div>
            </div>
          ) : (
            <SliderHire
              data={tab?.vps || []}
              onSelectPackage={setPackageSelect}
            />
          )}
        </div>
      </>
    ),
  };

  return (
    <>
      <Head>
        {tags.map((tag, index) => (
          <React.Fragment key={index}>{parse(tag)}</React.Fragment>
        ))}
      </Head>
      <Script id="script" dangerouslySetInnerHTML={{
        __html: `
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
`}}></Script>
      <div id="rent-vps">
        <BannerV2Page
          styleLinkName={{ maxWidth: "400px" }}
          image={banner.large}
          imageSmall={banner.small}
          imageTablet={banner.medium}
          imageDesktop="https://gofiber.b-cdn.net/new-design/Thue-vps-manh/desktop-thue-vps-manh.png"
          name="Thuê VPS Mạnh"
          extra="Những giao diện website mà gofiber.vn cung cấp luôn làm hài lòng khách hàng. Sự hài lòng của khách hàng là động lực để chúng tôi phát triển"
        />

        <div className="container">
          <section className="section-hire">
            <div className="text-center">
              <h3 className="h3">Thuê VPS</h3>
            </div>
            {isLoading
              ? renderSlideHire["loading"]
              : renderSlideHire["notLoading"]}
          </section>

          <section className="section-hire">
            <div className="text-center pt-4">
              <h3 className="h3">Kiến trúc VPS của chúng tôi</h3>
            </div>

            <div className="row justify-content-center align-items-center flex-row-reverse">
              <div className="col col-12 col-md-6">
                <div className="img text-center text-md-left">
                  <img
                    src={VPS_IMAGE.VPS2}
                    width={1000}
                    height={500}
                    alt="anh-kien-truc-vps2"
                  />
                </div>
              </div>
              <div className="col col-12 col-md-6">
                <h4 className="h4">Ổ Cứng SSD và Sức Mạnh Vi Xử Lý</h4>
                <p>
                  Ở Gofiber, mỗi máy chủ ảo VPS server đều sử dụng vi xử lý
                  Intel Xeon mới nhất, hàng terabytes ổ cứng SSD NVMe và 512 GB
                  RAM. Điều này giúp cung cấp đủ tốc độ xử lý cho mọi dự án từ
                  vừa đến lớn.
                </p>
                <h4 className="h4">Đường mạng 1000 Mb/s</h4>
                <p>
                  Thời gian uptime được đảm bảo 99.99% với hệ thống cloud server
                  mạnh mẽ từ công ty Gofiber. Giờ đây, bạn không phải lo server
                  không ổn định nữa, hãy để khách có trải nghiệm tốt nhất khi
                  truy cập vào website của bạn.
                </p>
                <h4 className="h4">Hỗ trợ NFS (Network File System)</h4>
                <p>
                  VPS hỗ trợ NFS giúp bạn đưa dữ liệu và file hệ thống lên đám
                  mây. Chúng tôi sẽ gắn ổ cứng NFS vào máy tính của bạn và tăng
                  dung lượng ổ cứng SSD để bạn có thể truy cập dữ liệu mọi lúc.
                </p>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mt-4">
              <div className="col col-12 col-md-6">
                <div className="img text-center text-md-left">
                  <img
                    src={VPS_IMAGE.VPS1}
                    width={1000}
                    height={500}
                    alt="anh-kien-truc-vps"
                  />
                </div>
              </div>
              <div className="col col-12 col-md-6">
                <h4 className="h4">Toàn quyền root</h4>
                <p>
                  Bạn được toàn quyền kiểm soát VPS với mức cao nhất không giới
                  hạn. Với quyền root server bạn có thể tùy chỉnh sâu hơn vào hệ
                  thống VPS cũng như có quyền giám sát tài nguyên máy chủ VPS
                  theo thời gian thực.
                </p>
                <h4 className="h4">IPv6 riêng</h4>
                <p>
                  Kể cả VPS rẻ nhất chúng tôi cũng sử dụng IPv6 native giúp giảm
                  độ trễ, tối ưu hóa tốc độ mạng cũng như giúp server không bị
                  đưa vào danh sách đen. Công nghệ IP mới nhất giúp kết nối tới
                  VPS server vừa nhanh chóng lại vô cùng an toàn.
                </p>
                <h4 className="h4">Backup và Snapshot</h4>
                <p>
                  Có backup tự động và snapshot thủ công, bạn hãy yên tâm rằng
                  website và VPS server sẽ được khôi phục lại trong ít phút.
                </p>
              </div>
            </div>
          </section>

          <Question showContent={false} data={question} />

          {/* <Contact /> */}

          <BuyPackage packageSelect={packageSelect} />
        </div>
      </div>
    </>
  );
}

export default RentVps;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const params: any = {
      link: "/thue-vps",
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
