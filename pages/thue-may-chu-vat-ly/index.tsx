import { SeoApi } from "@/src/api/seo";
import BannerPage from "@/src/components/banner/BannerPage";
import BannerV2Page from "@/src/components/banner/BannerV2Page";
import BuyPackage from "@/src/containers/BuyPackage";
import Contact from "@/src/containers/home/contact";
import Question from "@/src/containers/home/question";
import SliderPhysicalServer from "@/src/containers/rent-physical-server/SliderPhysicalServer";
import SliderPhysicalServerPlace from "@/src/containers/rent-physical-server/SliderPhysicalServerPlace";
import { useAppDispatch, useAppSelector } from "@/src/redux";
import { updateBuyPackage } from "@/src/redux/slice";
import { ICON, PHYSICAL_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
import Script from "next/script";


const banner = {
  large: PHYSICAL_IMAGE.BANNER_LARGE,
  medium: PHYSICAL_IMAGE.BANNER_MEDIUM,
  small: PHYSICAL_IMAGE.BANNER_SMALL,
};

const tabs = [
  {
    id: "1",
    name: "Thuê máy chủ vật lý",
    data: [
      {
        id: 1,
        price: "1200000",
        name: "Computer S1",
        data: ["4GB RAM", "500GB Dung lượng ổ SSD", "100 GB Băng thông"],
        isBest: true,
      },
      {
        id: 2,
        name: "Computer S2",
        price: "1500000",
        data: ["8GB RAM", "500GB Dung lượng ổ SSD", "100 GB Băng thông"],
      },
      {
        id: 3,
        name: "Computer S3",
        price: "1700000",
        data: ["4GB RAM", "2 x 500GB Dung lượng ổ SSD", "100 GB Băng thông"],
      },
      {
        id: 4,
        name: "Computer S4",
        price: "1900000",
        data: ["4GB RAM", "3 x 500GB Dung lượng ổ SSD", "100 GB Băng thông"],
      },
      {
        id: 5,
        name: "Computer S5",
        price: "2100000",
        data: ["8GB RAM", "2 x 500GB Dung lượng ổ SSD", "100 GB Băng thông"],
      },
    ],
  },
  {
    id: "2",
    name: "Thuê chỗ đặt máy chủ",
    data: [
      {
        id: 1,
        name: "Location S1",
        price: "200000",
        data: [
          "Tốc độ mạng: 50MBps",
          "Ổ cấm mạng: 1GBps",
          "Bandwidth (Data transfer): Unlimited",
          "Công suất điện tiêu chuẩn: 350W",
          "Quản trị máy chủ: Miễn phí",
          "Phí khởi tạo dịch vụ: Miễn phí",
          "Số địa chỉ IP tĩnh: 02 IP",
        ],
        isBest: true,
      },
      {
        id: 2,
        name: "Location S2",
        price: "220000",
        data: [
          "Tốc độ mạng: 100MBps",
          "Ổ cấm mạng: 1GBps",
          "Bandwidth (Data transfer): Unlimited",
          "Công suất điện tiêu chuẩn: 350W",
          "Quản trị máy chủ: Miễn phí",
          "Phí khởi tạo dịch vụ: Miễn phí",
          "Số địa chỉ IP tĩnh: 04 IP",
        ],
      },
      {
        id: 3,
        name: "Location S3",
        price: "250000",
        data: [
          "Tốc độ mạng: 200MBps",
          "Ổ cấm mạng: 1GBps",
          "Bandwidth (Data transfer): Unlimited",
          "Công suất điện tiêu chuẩn: 350W",
          "Quản trị máy chủ: Miễn phí",
          "Phí khởi tạo dịch vụ: Miễn phí",
          "Số địa chỉ IP tĩnh: 06 IP",
        ],
      },
      {
        id: 4,
        name: "Location S4",
        price: "260000",
        data: [
          "Tốc độ mạng: 300MBps",
          "Ổ cấm mạng: 1GBps",
          "Bandwidth (Data transfer): Unlimited",
          "Công suất điện tiêu chuẩn: 350W",
          "Quản trị máy chủ: Miễn phí",
          "Phí khởi tạo dịch vụ: Miễn phí",
          "Số địa chỉ IP tĩnh: 06 IP",
        ],
      },
      {
        id: 5,
        name: "Location S5",
        price: "290000",
        data: [
          "Tốc độ mạng: 500MBps",
          "Ổ cấm mạng: 1GBps",
          "Bandwidth (Data transfer): Unlimited",
          "Công suất điện tiêu chuẩn: 350W",
          "Quản trị máy chủ: Miễn phí",
          "Phí khởi tạo dịch vụ: Miễn phí",
          "Số địa chỉ IP tĩnh: 02 IP",
        ],
      },
      {
        id: 6,
        name: "Location S6",
        price: "310000",
        data: [
          "Tốc độ mạng: 800MBps",
          "Ổ cấm mạng: 1GBps",
          "Bandwidth (Data transfer): Unlimited",
          "Công suất điện tiêu chuẩn: 350W",
          "Quản trị máy chủ: Miễn phí",
          "Phí khởi tạo dịch vụ: Miễn phí",
          "Số địa chỉ IP tĩnh: 02 IP",
        ],
      },
    ],
  },
];

const physicalServerPlace = [
  {
    id: "viettel",
    image: PHYSICAL_IMAGE.VIETTEL,
    data: [
      {
        id: 1,
        link: "/",
        name: "Cấp chứng nhận hệ thống quản lý chất lượng ISO 9001:2008 và hệ thống an toàn an ninh ISO 27001:2013",
      },
      {
        id: 2,
        link: "/",
        name: "Các datacenter đạt tiêu chuẩn Rated 3 - TIA 942 đáp ứng nhu cầu khách hàng từ cơ bản đến nâng cao và các tiêu chí khắt khe của mọi khách hàng.",
      },
      {
        id: 3,
        link: "/",
        name: "Sự lựa chọn hàng đầu của mọi khách hàng khi có đội ngũ chuyên môn cao, sẵn sàng đáp ứng 24/24",
      },
    ],
  },
  {
    id: "Vnpt",
    image: PHYSICAL_IMAGE.VNPT,
    data: [
      {
        id: 1,
        link: "/",
        name: "Cấp các chứng chỉ ISO/IEC 27001:2005 và tiêu chuẩn quốc tế Tier 3",
      },
      {
        id: 2,
        link: "/",
        name: `
				Mạng Backbone 1, 71bps chiếm trên 65% thị phần dịch vụ 
                Internet tại Việt Nam.Tổng dung lượng băng thông quốc tế đạt 885Gbps(chiếm 70 % băng thông quốc tế tại Việt Nam)`,
      },
      {
        id: 3,
        link: "/",
        name: `Tốc độ đường truyền cao nhất tại thị trường Việt Nam giúp hệ thống khách hàng 
                vận hành nhanh chóng. Datacenter đảm bảo vận hành 99,99% thời gian downtime 
                cùng hệ thống phụ trợ điều hòa và nhiệt độ giúp hệ thống hoạt động hiệu quả.`,
      },
    ],
  },
  {
    id: "Fpt",
    image: PHYSICAL_IMAGE.FPT,
    data: [
      {
        id: 1,
        link: "/",
        name: "Đạt các tiêu chuẩn chất lượng ISO 9001:2008 và các chứng chỉ ISO 50001:2011. Đặc biệt, đạt tiêu chuẩn quốc tế Tier 3",
      },
      {
        id: 2,
        link: "/",
        name: `Băng thông kết nối trong nước với các ISP khác hơn 500Gbps và tổng băng thông kết nối quốc tế lên đến 380Gbps`,
      },
      {
        id: 3,
        link: "/",
        name: `Được đánh giá là một trung tâm dữ liệu an toàn và bảo mật. Đội ngũ chuyên môn cao và phục vụ 24/24`,
      },
    ],
  },
];

const question = [
  {
    id: "1",
    title: "Máy chủ vật lý là gì ?",
    content: (
      <p>
        Máy chủ vật lý (Dedicated Server) hay còn gọi là server vật lý, máy chủ
        chuyên dụng được kết nối internet hoặc một mạng máy tính có IP tĩnh,
        hiệu suất xử lý cao dành riêng cho một tác vụ cụ thể. Hay nói cách khác,
        máy chủ vật lý là một CPU công suất lớn, tính năng đa dạng đáp ứng nhu
        cầu lưu trữ, xử lý dữ liệu lớn hơn một máy tính thông thường gấp nhiều
        lần.
      </p>
    ),
  },
  {
    id: "2",
    title: "Lợi ích khi thuê server vật lý là gì?",
    content: (
      <>
        <p>
          Thực tế, việc đầu tư lắp đặt một chiếc máy chủ vật lý rất tốn kém và
          phức tạp. Bởi vậy, lựa chọn thuê server chính là hướng đi tối ưu và
          tiết kiệm cho doanh nghiệp. Cụ thể:
        </p>
        <ul>
          <li>
            <strong>Tiết kiệm chi phí:</strong> Giảm khoản chi phí cho đầu tư,
            bảo trì hệ thống. Doanh nghiệp không tốn thêm chi phí khi tạo thêm
            nhiều site. Bởi những điều này sẽ được nhà cung cấp dịch vụ lo.
          </li>
          <li>
            <strong>Lưu trữ dữ liệu lớn:</strong> Doanh nghiệp có thể sử dụng
            nguồn tài nguyên khổng lồ để đặt quảng cáo, chương trình liên kết
            bán hàng… tùy ý trên website. Đảm bảo mọi lượng truy cập lớn đồng
            thời.
          </li>
          <li>
            <strong>Lưu trữ dữ liệu lớn:</strong> Hệ thống server bảo mật và
            chuyên nghiệp
          </li>
          <li>
            <strong>Dễ dàng điều khiển:</strong> Khách hàng có thể điều khiển
            các máy chủ từ xa nhờ trình duyệt website hoặc các thiết bị thông
            minh mà không cần sự trợ giúp của máy chủ.
          </li>
          <li>
            <strong>Tùy chỉnh dễ dàng, nhanh chóng:</strong> Bạn sẽ có thể điều
            chỉnh, thiết lập server theo yêu cầu bạn muốn.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "3",
    title: "Lưu ý khi thuê máy chủ vật lý",
    content: (
      <>
        <p>
          Một số điều cần lưu ý dành cho bạn khi đang có nhu cầu sử dụng dịch vụ
          thuê máy chủ vật lý:
        </p>
        <p>
          <strong>Cấu hình server</strong>
        </p>
        <p>
          Việc nắm rõ cấu hình máy chủ sẽ giúp khách hàng tối ưu chi phí và tiện
          trong việc quản lý, cài đặt và sử dụng. Trong đó, bạn cần quan tâm các
          thông số từ cấu hình, CPU, Ram, công suất, hãng máy tính… Nếu như bạn
          chưa nắm rõ hoặc định hướng rõ ràng thì các doanh nghiệp cho thuê máy
          chủ vật lý sẽ giúp bạn tư vấn.
        </p>
        <p>
          <strong>Băng thông (Bandwidth)</strong>
        </p>
        <p>
          Bạn nên quan tâm về vấn đề đường truyền các cổng card mạng trong nước
          và quốc tế. Bởi, khi nhận báo giá tốc độ internet cao nhưng thực tế
          thì tốc độ thì rất thấp. Đây cũng là một trong những lý do khiến
          website của bạn không đạt hiệu quả
        </p>
        <p>
          <strong>Mức chi phí</strong>
        </p>
        <p>
          Yếu tố đặc biệt cần quan tâm khi có nhu cầu thuê máy chủ vật lý. Tất
          nhiên, các đơn vị dịch vụ sẽ báo giá cố định niêm yết cho bạn ở một số
          cấu hình có sẵn. Đối với trường hợp, bổ sung thêm các dịch vụ như IP,
          RAM, băng thông… thì phải xem xét về mức giá.
        </p>
        <p>
          <strong>Khả năng dự phòng và mở rộng</strong>
        </p>
        <p>
          Trao đổi rõ ràng về khả năng dự phòng cũng như việc mở rộng một số tài
          nguyên của máy chủ vật lý.
        </p>
        <p>
          <ul>
            <li>
              Nếu như xảy ra sự cố sập nguồn thì phải có máy phát hoặc hệ thống
              UPS có sẵn để đáp ứng
            </li>
            <li>Nếu dịch vụ ISP bị gián đoạn thì tìm giải pháp thay thế sẵn</li>
            <li>Máy chủ quá tải thì phải có server chuẩn bị để dự phòng</li>
          </ul>
        </p>

        <p>
          <strong>Chỗ đặt vị trí máy chủ</strong>
        </p>
        <p>
          Khi bạn chọn thuê máy chủ vật lý từ các doanh nghiệp cho thuê server
          riêng thì cũng nên cần quan tâm vị trí đặt máy chỉ. Thông thường, các
          nhà cung cấp dịch vụ thuê máy chủ đặt ở trung tâm dữ liệu. Bạn nên
          biết vị trí máy chủ đặt ở đâu để khi gặp sự cố có thể xử lý ngay lập
          tức.
        </p>
        <p>
          Bạn không thể xử lý qua máy tính hay điện thoại mà phải đến trực tiếp
          nơi đặt máy chủ. Nhưng để vào kiểm tra thì cần phải được sự thông báo
          từ bên phía trung tâm dữ liệu từ nhà cung cấp.
        </p>
      </>
    ),
  },
  {
    id: "4",
    title: "Chính sách hỗ trợ khách hàng",
    content: (
      <>
        <p>
          Các chính sách và điều khoản khách hàng cũng là một yếu tố bạn cần
          quan tâm khi thuê máy chủ vật lý tại các đơn vị. Ứng với mỗi chính
          sách sẽ là quyền lợi bảo vệ bạn khi cần thiết. Chẳng hạn:
        </p>
        <p>
          <ul>
            <li>
              Chính sách bảo mật thông tin: Bảo vệ thông tin dữ liệu của khách
              hàng được an toàn
            </li>
            <li>
              Chính sách thanh toán: Thời gian thanh toán, bằng cách nào, gia
              hạn thanh toán như thế nào…
            </li>
            <li>
              Chính sách hoàn hủy dịch vụ: Có được hoàn dịch vụ không, thời gian
              hoàn bao lâu, hoàn có được trả tiền không…
            </li>
            <li>
              Điều khoản và điều kiện: Nắm các điều khoản và điều kiện cần thiết
              theo quy định riêng của từng công ty
            </li>
          </ul>
        </p>
        <p>
          Cùng với đó là sự hỗ trợ tư vấn trực tiếp của đội ngũ nhân sự khi sử
          dụng dịch vụ. Đặc biệt là nhà cung cấp có hỗ trợ 24/7 khi gặp rủi ro
          hay không? Bởi nếu không được hỗ trợ thì sẽ ảnh hưởng đến hoạt động
          kinh doanh và vận hành.
        </p>
      </>
    ),
  },
  {
    id: "5",
    title: "Thời gian Setup máy chủ khi thanh toán xong là bao lâu?",
    content: (
      <>
        <p>
          Khi khách hàng hoàn thành việc thanh toán thì sẽ được triển khai setup
          nhanh chóng.
        </p>
        <p>
          <ul>
            <li>Đối với yêu cầu cài đặt cơ bản từ 24 – 48h</li>
            <li>
              Đối với yêu cầu cài đặt tư vấn cấu hình phức tạp từ 48 – 72h
            </li>
          </ul>
        </p>
      </>
    ),
  },
];

type Props = {
  tags: any[];
};

function RentPhysicalServerPage({ tags }: Props) {
  const dispatch = useAppDispatch();
  const { buyPackage } = useAppSelector((state) => state.home);
  const [tab, setTab] = useState(tabs[0]);
  const [packageSelect, setPackageSelect] = useState();

  useEffect(() => {
    const scroll = document.getElementById("buy-package");
    if (buyPackage?.count > 0) {
      scroll?.scrollIntoView({ behavior: "smooth" });
      setPackageSelect(buyPackage?.item);
    }

    return () => {
      dispatch(updateBuyPackage(0));
    };
  }, []);

  return (
    <>
      <Head>

        {tags.map((tag, index) => (
          <React.Fragment key={index}>{parse(tag)}</React.Fragment>
        ))}
      </Head>

      <div id="rent-vps">
        <section>
          <BannerV2Page
            image="https://gofiber.b-cdn.net/new-design/Thue-may-chu-vat-ly/desktop-thue-may-chu-vat-ly.png"
            imageDesktop={banner.large}
            imageSmall={banner.small}
            imageTablet={banner.medium}
            name="Thuê máy chủ vật lý/ Thuê chỗ đặt máy chủ"
            extra="Những giao diện website mà gofiber.vn cung cấp luôn làm hài lòng khách hàng. Sự hài lòng của khách hàng là động lực để chúng tôi phát triển"
          />
        </section>
        <div className="container">
          <section className="section-hire">
            <div className="d-flex justify-content-center flex-wrap mt-4 pt-4">
              {tabs.map((item) => (
                <button
                  onClick={() => setTab(item)}
                  key={item.id}
                  className={`btn0 btn-tab m-1 ${tab.id === item.id ? "active" : ""
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="mt-3">
              <SliderPhysicalServer
                data={tab?.data || []}
                name={tab?.name}
                onSelectPackage={setPackageSelect}
              />
            </div>
          </section>

          <section className="section-hire">
            <div className="text-center py-4">
              <h3 className="h3">Lợi ích của máy chủ vật lý là gì?</h3>
            </div>

            <div className="row justify-content-center align-items-center flex-row-reverse">
              <div className="col col-12 col-md-6">
                <div className="img text-center text-md-left">
                  <img
                    src={PHYSICAL_IMAGE.BENEFIT.FIRST}
                    width={500}
                    height={500}
                    alt="anh-maychuvatly1"
                  />
                </div>
              </div>
              <div className="col col-12 col-md-6">
                <h4 className="h4">Tốc độ nhanh chóng</h4>
                <p>
                  Các ứng dụng và website của bạn có thể sử dụng tất cả các tài
                  nguyên trên server mà không cần phải chia sẻ tài nguyên với
                  bất kỳ ai. Bởi vì, tài nguyên trong server không giới hạn nhờ
                  vào sự linh hoạt trong nâng cấp các thiết bị phần cứng và phần
                  mềm. Đồng thời, sức tải của server có thể mở rộng vô hạn.
                </p>
                <h4 className="h4">Tính an toàn và bảo mật dữ liệu cao</h4>
                <p>
                  Máy chủ vật lý có hiệu suất hoạt động và khả năng bảo mật dữ
                  liệu cao nhất trong các loại máy chủ khác. Bởi vì, các website
                  và dữ liệu đều nằm ngoài Public Cloud
                </p>
                <h4 className="h4">Kiểm soát chặt chẽ</h4>
                <p>
                  Một server vật lý cho phép bạn điều hành kiểm soát một lúc
                  nhiều phần cứng và phần mềm hơn so với việc bỏ nhiều chi phí
                  thuê máy chủ ảo.
                </p>
              </div>
            </div>
            <div className="row justify-content-center align-items-center mt-4">
              <div className="col col-12 col-md-6">
                <div className="img text-center text-md-left">
                  <img
                    src={PHYSICAL_IMAGE.BENEFIT.SECOND}
                    width={500}
                    height={500}
                    alt="anh-may-chu-vat-ly-2"
                  />
                </div>
              </div>
              <div className="col col-12 col-md-6">
                <h4 className="h4">Khả năng mở rộng</h4>
                <p>
                  Bạn có thể sử dụng thêm CPU, nhiều dung lượng đĩa… Đặc biệt,
                  bạn hoàn toàn có thể nâng cấp server khi có nhu cầu lưu trữ,
                  xử lý lượng thông tin khổng lồ, giải phóng băng thông đảm bảo
                  cho lượng truy cập lớn đồng thời.
                </p>
                <h4 className="h4">Tùy chỉnh dễ dàng</h4>
                <p>
                  Mọi thiết lập trên server vật lý đều được tùy chỉnh dễ dàng
                  theo ý muốn của bạn.
                </p>
              </div>
            </div>
          </section>


        </div>

        <section className="section-hire">
          <div className="row justify-content-center">
            <div className="img text-center">
              <img
                src={PHYSICAL_IMAGE.SERVER}
                alt="anh-thue-may-chu"
                width={1000}
                height={500}
              />
            </div>
          </div>
        </section>
        <div className="container">
          <Question data={question} />

          {/* <Contact /> */}

          <BuyPackage packageSelect={packageSelect} />
        </div>
      </div>
    </>
  );
}

export default RentPhysicalServerPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const params: any = {
      link: "/thue-may-chu-vat-ly",
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
