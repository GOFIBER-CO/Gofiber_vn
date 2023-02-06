import BannerPage from '@/src/components/banner/BannerPage';
import BuyPackage from '@/src/containers/BuyPackage';
import Contact from '@/src/containers/home/contact';
import Question from '@/src/containers/home/question';
import SliderHostingPrice from '@/src/containers/web-hosting/SliderHostingPrice';
import { WEB_HOSTING_IMAGE } from '@/src/utils';
import Link from 'next/link';
import React, { useState } from 'react';

const banner = {
  large: WEB_HOSTING_IMAGE.BANNER_LARGE,
  medium: WEB_HOSTING_IMAGE.BANNER_MEDIUM,
  small: WEB_HOSTING_IMAGE.BANNER_SMALL
}

const data = [
  {
    id: '1',
    title: 'Web Hosting',
    className: 'first',
    link: '/hosting-khung-gia-re'
  },
  {
    id: '2',
    title: 'Thiết kế Website',
    className: 'second',
    link: '/thiet-ke-website'
  },
  {
    id: '3',
    title: 'Thuê VPS',
    className: 'third',
    link: '/thue-vps'
  },
  {
    id: '4',
    title: 'Thuê máy chủ vật lý Thuê chỗ đặt máy chủ',
    className: 'fourth',
    link: '/thue-may-chu-vat-ly'
  },
  {
    id: '5',
    title: 'Firewall',
    className: 'firth',
    link: '/dich-vu-firewall'
  },
  {
    id: '6',
    title: 'Chứng chỉ SSL',
    className: 'sixth',
    link: '/chung-chi-ssl'
  },
];

const question = [
  {
    id: '1',
    title: 'Web Hosting là gì?',
    content: (
      <>
        <p>
          Nếu như có một dịch vụ nào đó được cung cấp trên một host, ta sẽ gọi
          dịch vụ đó được host. Mặt khác, bất cứ thứ gì cung cấp dịch vụ được
          gọi là server nên host đó lúc này chính là <strong>server</strong>. Vì
          vậy, <strong>host</strong> hay <strong>server</strong> có rất nhiều
          trường hợp được dùng tương đương nhau.
        </p>
        <p>
          Để tránh việc nhầm lẫn về định nghĩa của host, nếu như host cung cấp
          dịch vụ nào đó, dịch vụ sẽ được nói rõ và dùng server thay vì host. Ví
          dụ một <strong>web host/web server</strong> là một{' '}
          <strong>host</strong>
          cung cấp dịch vụ về truy cập trang web, một{' '}
          <strong>mail host/mail server</strong> là một host cung cấp dịch vụ
          mail.
        </p>
        <p>
          Mở rộng ra với định nghĩa các host cung cấp dịch vụ, chúng ta có thêm
          định nghĩa hosting. Hosting có nghĩa là “cung cấp việc host”. Các định
          nghĩa về hosting đầy đủ phải là hosting service, nhưng thông thường
          được viết tắt là hosting.
        </p>
        <p>
          Ví dụ: <strong>Web hosting service (hay Web hosting)</strong> là một
          dịch vụ mà một tổ chức cung cấp tài nguyên của server (tổ chức này
          được gọi là hosting company, tạm gọi là B) cung cấp cho một tổ chức
          khác (tạm gọi là A) sử dụng tài nguyên đó làm host cho trang web của
          mình.
        </p>
        <p>
          Lúc này, sẽ có hai nhà cung cấp dịch vụ: B cung cấp dịch vụ web
          hosting cho A và A cung cấp dịch vụ web cho người dùng. Nói cách khác,
          B cung cấp tài nguyên để A chạy web server và A dùng Web server đó để
          cung cấp dịch vụ cho người dùng.
        </p>
        <p>
          Tóm lại để tránh nhầm lẫn, trong hai cách gọi web host/web server và
          mail host/mail server, thường thì web server và mail server sẽ được sử
          dụng nhiều hơn, còn web hosting, cloud hosting, email hosting sẽ dùng
          để chỉ những nhà cung cấp dịch vụ host.
        </p>
        <p>
          Nếu như search “web host” trên google, các kết quả trả về đều là các
          kết quả của “web hosting”.
        </p>
      </>
    ),
  },
  {
    id: '2',
    title: 'Web Hosting hoạt động như thế nào?',
    content: (
      <>
        <p>
          Các đơn vị dịch vụ hosting sẽ cung cấp cho khách hàng một server lưu
          trữ, khi website hoạt động trên internet sẽ giúp truyền tải các nội
          dung, tập tin từ phía server lên trình duyệt giúp người dùng đọc và
          hiểu được thông tin trên website.
        </p>
        <p>
          Tùy vào mức độ gói cước đăng ký, nhà cung cấp sẽ cấu hình theo thông
          số hosting để khách hàng sử dụng. Dựa theo nhu cầu nâng cấp hay giảm
          xuống gói hosting, nhà cung cấp sẽ điều chỉnh lại những thông số này.
        </p>
        <p>
          Về phía người dùng chỉ cần upload các files và cấu hình các thông tin
          cần thiết. Người dùng có thể truy cập vào quản lý hosting thông qua
          FTP hay truy cập địa chỉ tên miền hoặc địa chỉ IP của hosting.
        </p>
      </>
    ),
  },
  {
    id: '3',
    title: 'Hosting ảnh hưởng như thế nào đến SEO ?',
    content: (
      <>
        <p>
          Để đăng trang Web lên Internet, bạn cần sử dụng{' '}
          <strong>dịch vụ Web Hosting</strong>. Nhờ đó, khi người dùng muốn xem
          trang Web của bạn, họ chỉ cần nhập địa chỉ trang Web, hoặc tên miền
          của bạn vào trình duyệt.
        </p>
        <p>
          Sau đó, máy tính của người dùng kết nối với máy chủ của bạn, trang Web
          của bạn sẽ được chuyển đến họ thông qua trình duyệt.
        </p>
        <p>
          Tôi được biết rằng, <strong>Web Hosting</strong> cũng là một trong
          những yếu tố Google xem xét đến khi quyết định Website nào sẽ hiển thị
          cho truy vấn tìm kiếm.
        </p>
        <p>
          <ul style={{ listStyle: 'outside' }}>
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
        </p>
      </>
    ),
  },
  {
    id: '4',
    title: 'Mối quan hệ giữa Hosting và Domain',
    content: (
      <>
        <p>
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
        </p>
      </>
    ),
  },
  {
    id: '5',
    title: 'Sự khác nhau giữa Domain và Hosting là gì',
    content: (
      <>
        <p>
          Cả hai yếu tố Domain và Web Hosting hoạt động song song với nhau. Tuy
          nhiên, giữa hosting và domain cũng có sự khác biệt. Vậy điểm khác nhau
          giữa hosting và domain là gì?
        </p>
        <p>
          Dưới đây là một{' '}
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
            <tr>
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
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
];

function WebHosting() {
  const [packageSelect, setPackageSelect] = useState();

  return (
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
            <SliderHostingPrice onSelectPackage={setPackageSelect} />
          </div>
          <div className='mt-4 text-center'>
            <Link href="/">
              <span className='color_primary'>
                Điều khoản thanh toán
              </span>
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
                bạn. Nếu có vấn đề xảy ra, bạn không cần lo lắng vì đã có chúng
                tôi trợ giúp.
              </p>
              <h4 className="h4">Server host công nghệ hàng đầu</h4>
              <p>
                Bạn lo lắng trang web chậm ảnh hưởng đến uy tín công ty? Đừng lo
                lắng vì đã có chúng tôi! Với gói máy chủ host chạy trên hạ tầng
                HTTP/3 kết hợp cơ chế tự phát hiện và sửa lỗi, ổ cứng SSD và
                không giới hạn băng thông, website của bạn sẽ đạt tốc độ cao
                nhất.
              </p>
              <h4 className="h4">Server host công nghệ hàng đầu</h4>
              <p>
                Các chuyên gia kỹ thuật sẽ giúp bạn chuyển website tới Hostinger
                một cách miễn phí để bạn có thể tập trung vào công việc chính
                của bạn nhanh hơn.
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
                Mọi gói hosting của chúng tôi đều tối ưu cho WordPress. Máy chủ
                với LiteSpeed và các công cụ tăng tốc WordPress sẽ giúp trang
                web bạn đạt tốc độ nhanh nhất.
              </p>
              <h4 className="h4">Bảo mật tối đa</h4>
              <p>
                Bạn lo lắng trang web chậm ảnh hưởng đến uy tín công ty? Đừng lo
                lắng vì đã có chúng tôi! Với gói máy chủ host chạy trên hạ tầng
                HTTP/3 kết hợp cơ chế tự phát hiện và sửa lỗi, ổ cứng SSD và
                không giới hạn băng thông, website của bạn sẽ đạt tốc độ cao
                nhất.
              </p>
              <h4 className="h4">Không cần kinh nghiệm làm web</h4>
              <p>
                Bạn có biết, bạn có thể mua web hosting và vận hành hiệu quả nhờ
                công cụ quản lý có giao diện trực quan, thân thiện với người
                dùng. Hầu hết khách hàng của chúng tôi không phải là lập trình
                viên và họ đều có thể khởi chạy website trong ít phút.
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
              <div key={item.id} className="col col-12 col-md-6 col-lg-4 mt-4">
                <div
                  className={`d-flex align-items-center justify-content-center section-search-other__item section-search-other__item__${item.className}`}
                >
                  <Link href={item.link}>{item.title}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Question data={question} />

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
  );
}

export default WebHosting;
