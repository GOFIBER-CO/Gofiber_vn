import BannerPage from "@/src/components/banner/BannerPage";
import BuyPackage from "@/src/containers/BuyPackage";
import Contact from "@/src/containers/home/contact";
import Question from "@/src/containers/home/question";
import SliderSSL from "@/src/containers/ssl/SliderSSL";
import { ICON, SSL_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import Head from "next/head";
import React, { useState } from "react";

const banner = {
  large: SSL_IMAGE.BANNER_LARGE,
  medium: SSL_IMAGE.BANNER_MEDIUM,
  small: SSL_IMAGE.BANNER_SMALL,
};

const question = [
  {
    id: "1",
    title: "Chứng chỉ SSL là gì?",
    content: (
      <p>
        SSl (viết tắt của Secure Sockets Layer) là chứng chỉ số dùng để xác thực
        danh tính website và mã hóa thông tin người dùng bằng công nghệ SSL. Đây
        là một trong những chứng chỉ an ninh công nghệ toàn cầu liên quan đến
        bảo mật website và và quyền riêng tư của người dùng khi truy cập vào một
        website nào đó. Do đó, các thông tin dữ liệu sẽ được mã hóa một cách cẩn
        thận trước khi gửi tới máy chủ chứa website. Hiện nay, chứng chỉ SSL
        được hàng triệu cá nhân/tổ chức sử dụng nhằm mục đích bảo vệ và bảo mật
        thông tin website và khách hàng.
      </p>
    ),
  },
  {
    id: "2",
    title: "Làm thế nào để mua chứng chỉ SSL?",
    content: (
      <>
        <p>
          <strong>Quyết định lựa chọn loại chứng chỉ SSL thích hợp</strong>
        </p>
        <p>
          Trên thị trường hiện nay có rất nhiều loại chứng chỉ chỉ số SSL và
          nhiều đơn vị phát hành. Bởi vậy, việc của bạn là lựa chọn đúng chứng
          chỉ SSL cho website của mình cũng như ngân sách.
        </p>
        <p>
          Để có thể đưa ra sự lựa chọn hợp lý nhất cho mình, bạn cần trả lời các
          câu hỏi này:
        </p>
        <ul>
          <li>Chứng chỉ số SSL cần cho bao nhiêu tên miền?</li>
          <li>
            Website của bạn có cần hiện tên công ty trên thanh địa chỉ không?
          </li>
          <li>
            Bạn có muốn mua trực tiếp từ nhà cung cấp chứng chỉ quốc tế không?
          </li>
          <li>Mức ngân sách cho việc mua chứng chỉ SSL của bạn bao nhiêu?</li>
          <li>...</li>
        </ul>
        <p>
          Từ việc trả lời các câu hỏi này phần nào giúp bạn lựa chọn được loại
          chứng chỉ SSL phù hợp bạn cần.
        </p>
        <p>
          <strong>Tạo CSR và hồ sơ đăng ký</strong>
        </p>
        <p>
          Sau khi bạn đã có quyết định về việc lựa chọn loại chứng chỉ SSL phù
          hợp thì sẽ cần phải tạo CSR gửi tới nhà cung cấp CA để tạo một chứng
          chỉ SSL. Ngoài ra, với chứng chỉ OV SSL và EV SSL thì cần phải có thêm
          chứng từ chứng minh tư cách pháp nhân công ty như giấy phép kinh doanh
          của doanh nghiệp, bản đăng ký sử dụng chứng thư (Extended SSL
          Certificate Request) đã được ký, đóng dấu
        </p>
        <p>
          <strong>Chứng chỉ SSL được nhà cung cấp ban hành</strong>
        </p>
        <p>
          Sau khi đã được chứng thực quyền quản lý tên miền thành công thì chứng
          chỉ SSL của bạn sẽ được ban hành. Sau đó, bạn chỉ cần cài đặt SSL lên
          trên website của bạn và kiểm tra chứng chỉ số đã được hiển thị chưa và
          khắc phục các lỗi từ website (nếu có).
        </p>
      </>
    ),
  },
  {
    id: "3",
    title: "Chứng chỉ nào tốt nhất?",
    content: (
      <>
        <h3 className="h3">Top 6 loại chứng chỉ số SSL tốt nhất hiện nay</h3>
        <p className="mt-3">
          <h6>Rapid</h6>
        </p>
        <p>
          Một chứng chỉ được sở hữu và điều hành bởi Geo Trust – một thương hiệu
          lớn trong ngành chứng thực số. Chứng chỉ số Rapid SSL phù hợp với các
          đối tượng cá nhân/doanh nghiệp nhỏ đang sở hữu website cần mua chứng
          thực để tăng độ tin cậy trong kinh doanh trực tuyến.
        </p>
        <p className="mt-3">
          <h6>Comodo</h6>
        </p>
        <p>
          Comodo SSL là một nhà cung cấp chứng chỉ SSL phổ biến với nhiều loại
          từ DV đến Wildcard. Đơn vị mang đến độ uy tín cao, hỗ trợ nhanh và
          dịch vụ bảo hành hoàn tiền rất tốt cho người mua.
        </p>
        <p className="mt-3">
          <h6>Globalsign</h6>
        </p>
        <p>
          Globalsign cung cấp chứng chỉ số phù hợp với các doanh nghiệp mảng
          thương mại điện tử. Với các tính năng nổi bật:
        </p>
        <ul>
          <li>Bảo vệ các phần mềm độc hại và lừa đảo trực tuyến</li>
          <li>Hỗ trợ SANs cho mọi tên miền (kể cả tên miền con)</li>
          <li>Hỗ trợ tư vấn khách hàng trực tiếp và trực tuyến nhanh chóng</li>
        </ul>
        <p className="mt-3">
          <h6>Thawte</h6>
        </p>
        <p>
          Thawte là một thương hiệu cung cấp SSL đang tin tưởng, nhận được sự
          lựa chọn của hàng triệu người dùng trên toàn thế giới. Được mua lại
          bởi Symantec, trở thành nhà cung cấp đáng tin cậy hàng đầu.
        </p>
        <p className="mt-3">
          <h6>GeoTrust</h6>
        </p>
        <p>
          GeoTrust là một nơi cung cấp chứng chỉ số SSL đáng tin cậy thế giới
          với hơn 100.000 khách hàng tại hơn 150 quốc gia. Các sản phẩm tại đây
          có mức giá phải chăng nhưng vẫn đảm bảo được độ an toàn và bảo mật.
        </p>
        <p className="mt-3">
          <h6>DigiCert</h6>
        </p>
        <p>
          DigiCert được đánh giá là nhà cung cấp SSl cho doanh nghiệp đáng lựa
          chọn. Một nhà cung cấp uy tín, bảo hành và chăm sóc khách hàng tốt
          nhất với phương châm ‘Thành công của bạn được xây dựng trên sự tin
          tưởng’. DigiCert cung cấp chủ yếu dòng OV/EV SSL với mức giá phải
          chăng cho mọi đối tượng khách hàng. Đơn vị đã và đang nhận được nhiều
          đánh giá tích cực từ phía khách hàng.
        </p>
      </>
    ),
  },
  {
    id: "4",
    title: "Có nên mua SSL không?",
    content: (
      <>
        <p>
          Khi sử dụng chứng chỉ số SSL sẽ mang lại nhiều lợi ích cho website.
          Chẳng hạn:
        </p>
        <ul>
          <li>
            Ưu tiên tăng thứ hạng SEO: Sử dụng giao thức bảo mật SSL thì website
            của bạn sẽ được cộng điểm xếp hàng vượt qua các đối thủ. Bởi, Google
            coi SLL là một phần thước đo quan trọng đánh giá thứ hạng website
            trên kết quả tìm kiếm.
          </li>
          <li>
            Mã hóa và bảo mật thông tin: Mọi thông tin liên quan giữa máy chủ
            với trình duyệt, ứng dụng sẽ được mã hóa nên chỉ người nhận đích
            thực mới có thể giải mã được. Bởi vậy, mọi dữ liệu thông tin sẽ được
            bảo mật an toàn rất cao. Ngăn cản việc hacker tấn công vào hệ thống
            website của bạn để đánh cắp thông tin.
          </li>
          <li>
            Tăng traffic, sự tin tưởng: Tích hợp SSL không chỉ giúp website
            không bị sập và người khác đánh cắp thông tin sẽ góp phần tăng
            traffic. Khi website có SSL bảo mật thông tin sẽ giúp tăng sự tin
            tưởng người truy cập tăng tỷ lệ chuyển đổi và tăng doanh số bán
            hàng.
          </li>
          <li>
            Cung cấp xác thực, chống giả mạo: Khi bạn đăng ký chứng chỉ số sẽ
            được xác thực thông tin mới cấp chứng chỉ SSL cho website. Bởi vậy,
            khi có người giả mạo sẽ dễ bị phát hiện.
          </li>
          <li>
            Ưu thế khi chạy quảng cáo Google, Facebook: Mọi dịch vụ quảng cáo
            đều ưu tiên các website có chứng chỉ SSL bảo vệ. Đây là một lợi thế
            mà ít người dùng biết và sử dụng.
          </li>
          <li>
            Bảo vệ các giao dịch thanh toán: Lợi thế này áp dụng với các cá
            nhân/doanh nghiệp có website là một trang thương mại điện tử hoặc hỗ
            trợ thanh toán qua mạng sẽ rất cần thiết và giải pháp hàng đầu để
            bạn lựa chọn.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "5",
    title: "Một số lưu ý khi cài đặt chứng chỉ SSL:",
    content: (
      <>
        <ul>
          <li>
            Đảm bảo tên miền đăng ký SSL đang hoạt động, không bị khóa, hết hạn…
          </li>
          <li>
            Không được bỏ sót hoặc các lỗi ở các bước thực hiện khi cài đặt
            chứng chỉ SSL. Nếu không sẽ gây ra hậu quả nghiêm trọng.
          </li>
          <li>
            Cần phải gắn mã theo dõi Google Analytics và Webmasster khi chuyển
            đổi tử http {">"} https.
          </li>
          <li>
            Khi thay đổi địa chỉ IP sẽ mất khá nhiều thời gian để xác thực SSL.
          </li>
          <li>
            cPanel hoặc Directadmin hoàn toàn có thể hoạt động nhiều chứng chỉ
            SSL trên 1 IP.
          </li>
          <li>
            Có thể đăng ký nhiều tên miền (kể cả tên miền con) trong chứng chỉ
            SSL.
          </li>
          <li>Có thể gia hạn chứng chỉ SSL lên đến 5 năm.</li>
        </ul>
      </>
    ),
  },
];

function SSL() {
  const [packageSelect, setPackageSelect] = useState();

  return (
    <>
      <Head>
        <title>Chứng chỉ bảo mật cho website - Đăng ký SSL</title>
        <link rel="canonical" href="https://gofiber.vn/chung-chi-ssl" />
      </Head>
      <div id="rent-vps">
        <section>
          <BannerPage
            extra="Hãy tự bảo vệ website của bạn được an toàn và bảo mật bằng việc mua chứng chỉ SSL ngay."
            bannerLinkLargeWidth="30%"
            bannerLinkMediumWidth="46%"
            image={banner}
            name="Chứng chỉ SSL"
          />
        </section>
        <div className="container">
          <section className="section-hire">
            <div className="text-center">
              <h3 className="h3">SSL cho website</h3>
            </div>
            <SliderSSL onSelectPackage={setPackageSelect} />
          </section>

          <section className="section-info-ssl">
            <div className="row justify-content-center">
              <div className="col col-12 col-md-4 text-center">
                <h3 className="h3">Danh sách 3 loại SSL phổ biến</h3>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col col-12 col-md-8 text-center">
                <p style={{ color: "#777777" }} className="mt-4 text-center">
                  Xác thực tên miền
                  <img
                    className="image-ssl mt-1 mt-md-0"
                    src={SSL_IMAGE.POPULAR.FIRST}
                    width={800}
                    height={500}
                    alt="Xác thực tên miền"
                  />
                </p>
                <p style={{ color: "#777777" }} className="mt-4 text-center">
                  Xác thực tổ chức
                  <img
                    className="image-ssl mt-1 mt-md-0"
                    src={SSL_IMAGE.POPULAR.SECOND}
                    width={800}
                    height={500}
                    alt="Xác thực tổ chức"
                  />
                </p>
                <p style={{ color: "#777777" }} className="mt-4 text-center">
                  Xác thực doanh nghiệp mở rộng
                  <img
                    className="image-ssl mt-1 mt-md-0"
                    src={SSL_IMAGE.POPULAR.THIRD}
                    width={800}
                    height={500}
                    alt="Xác thực doanh nghiệp mở rộng"
                  />
                </p>
              </div>
            </div>
          </section>

          <section className="section-info-ssl">
            <div className="row justify-content-center">
              <div className="col col-12 col-md-8">
                <div className="text-center">
                  <h2 className="h2">Tại sao bạn cần sử dụng chứng chỉ SSL?</h2>
                </div>
                <p style={{ color: "#777777" }} className="mt-4">
                  Mua chứng chỉ SSL sẽ giúp website của bạn được an toàn và bảo
                  mật hơn với thanh địa chỉ có chìa khóa xanh. Mọi thông tin dữ
                  liệu của website và khách hàng sẽ được mã hóa nhằm tránh nguy
                  cơ bị tấn công từ hacker. Đồng thời, đảm bảo độ tin cậy và
                  niềm tin cho khách hàng khi truy cập vào website.
                </p>
                <div className="row align-items-center">
                  <div className="col col-12 col-md-6 m-0 p-0">
                    <div className="text-icon red mt-2">
                      <Icon icon={ICON.CHECKED} />
                      <p className="px-2">SSL Không hợp lệ</p>
                    </div>
                    <p className="red">
                      Thông tin, dữ liệu có thể bị nghe lén hoặc đánh cắp trong
                      quá trình truy cập website của bạn
                    </p>
                    <div className="text-icon green mt-2">
                      <Icon icon={ICON.CHECKED} />
                      <p className="px-2">SSL Không hợp lệ</p>
                    </div>
                    <p className="green">
                      Thông tin, dữ liệu trao đổi được bảo mật và trang web của
                      bạn được tin cậy
                    </p>
                  </div>
                  <div className="col col-12 col-md-6">
                    <div className="img d-flex justify-content-center">
                      <img
                        src={SSL_IMAGE.WHY.FIRST}
                        width={400}
                        height={200}
                        alt="anh-ssl"
                      />
                    </div>
                    <div className="img d-flex justify-content-center">
                      <img
                        src={SSL_IMAGE.WHY.SECOND}
                        width={400}
                        height={200}
                        alt="anh-ssl2"
                      />
                    </div>
                    <div className="img d-flex justify-content-center">
                      <img
                        src={SSL_IMAGE.WHY.THIRD}
                        width={400}
                        height={200}
                        alt="anh-ssl3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Question data={question} />

          {/* <Contact /> */}

          {/* <BuyPackage packageSelect={packageSelect} /> */}
        </div>
      </div>
    </>
  );
}

export default SSL;
