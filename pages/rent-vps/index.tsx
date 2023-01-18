import BannerPage from '@/src/components/banner/BannerPage';
import Question from '@/src/containers/home/question';
import BuyPackage from '@/src/containers/rent-vps/BuyPackage';
import SliderHire from '@/src/containers/rent-vps/SliderHire';
import Image from 'next/image';
import React, { useState } from 'react';

const banner = {
  large: 'https://gofiber.vn/wp-content/uploads/2022/12/banner-thuevpsmanh.png',
  medium: 'https://gofiber.vn/wp-content/uploads/2022/12/bg-thuevpsmanh-1.png',
  small: 'https://gofiber.vn/wp-content/uploads/2022/12/bg-thuevpsmanh.png',
};

const tabs = [
  {
    id: 'vps',
    name: 'VPS',
  },
  {
    id: 'Server Việt Nam',
    name: 'Server Việt Nam',
  },
  {
    id: 'Server US',
    name: 'Server US',
    isUpdating: true,
  },
  {
    id: 'Server Alibaba',
    name: 'Server Alibaba',
    isUpdating: true,
  },
  {
    id: 'Server Singapore',
    name: 'Server Singapor',
    isUpdating: true,
  },
  {
    id: 'Server Japan',
    name: 'Server Japan',
    isUpdating: true,
  },
];

const question = [
  {
    id: '1',
    title: ' VPS là gì?',
    content: (
      <>
        <p>
          Vẫn còn nhiều người thắc mắc cách thuê VPS phù hợp với túi tiền cũng
          như nhu cầu sử dụng. VPS được chia thành nhiều gói tương ứng với các
          mức giá khác nhau.
        </p>
      </>
    ),
  },
  {
    id: '2',
    title: 'Cách thuê VPS chuẩn',
    content: (
      <>
        <p>
          VPS là máy chủ ảo được một dịch vụ lưu trữ Internet bán dưới dạng dịch
          vụ. VPS chạy bản sao hệ điều hành và khách hàng có quyền truy cập
          superuser vào phiên bản hệ điều hành đó. Vì thế họ có thể cài đặt hầu
          hết mọi phần mềm chạy trên hệ điều hành đó.
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
          <strong>SSD CLOUD VPS B</strong>: gói này có giá cao hơn hai gói trên.
          Được trang bị lõi xử lý 3 cores, SSD CLOUD VPS C giúp gia tăng tốc độ
          xử lý dữ liệu một cách nhanh chóng. Dung lượng lưu trữ trên SSD CLOUD
          VPS C là 50GB và trên RAM là 2GB. Với những bạn muốn xử lý công việc
          nhanh chóng và thuận tiện thì đây là gói rất đáng để đầu tư.
        </p>
      </>
    ),
  },
  {
    id: '3',
    title: 'Tại sao nên dùng VPS',
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
    id: '4',
    title: 'Các thông số quan trọng trong VPS',
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
    id: '5',
    title: 'VPS được dùng làm gì ?',
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

function RentVps() {
  const [tab, setTab] = useState(tabs[0]);
  const [packageSelect, setPackageSelect] = useState({});
  return (
    <div id="rent-vps">
      <section>
        <BannerPage image={banner} name="Thuê VPS" />
      </section>
      <div className="container">
        <section className="section-hire">
          <div className="text-center">
            <h3 className="h3">Thuê VPS</h3>
          </div>
          <div className="d-flex justify-content-center flex-wrap mt-4 pt-4">
            {tabs.map((item) => (
              <button
                onClick={() => setTab(item)}
                key={item.id}
                className={`btn0 btn-tab m-1 ${tab.id === item.id ? 'active' : ''
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
                    <Image
                      src={require('@/public/images/vps/updating2.gif')}
                      alt="Đang cập nhật"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <SliderHire tab={tab.id} onSelectPackage={setPackageSelect} />
            )}
          </div>
        </section>

        <section className="section-hire">
          <div className="text-center pt-4">
            <h3 className="h3">Kiến trúc VPS của chúng tôi</h3>
          </div>

          <div className="row justify-content-center align-items-center flex-row-reverse">
            <div className="col col-12 col-md-6">
              <div className="img text-center text-md-left">
                <Image
                  src={require('@/public/images/vps/anh-kien-truc-vps2.png')}
                  alt="anh-kien-truc-vps2"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <h4 className="h4">Ổ Cứng SSD và Sức Mạnh Vi Xử Lý</h4>
              <p>
                Ở Gofiber, mỗi máy chủ ảo VPS server đều sử dụng vi xử lý Intel
                Xeon mới nhất, hàng terabytes ổ cứng SSD NVMe và 512 GB RAM.
                Điều này giúp cung cấp đủ tốc độ xử lý cho mọi dự án từ vừa đến
                lớn.
              </p>
              <h4 className="h4">Đường mạng 100 Mb/s</h4>
              <p>
                Thời gian uptime được đảm bảo 99.99% với hệ thống cloud server
                mạnh mẽ từ công ty Gofiber. Giờ đây, bạn không phải lo server
                không ổn định nữa, hãy để khách có trải nghiệm tốt nhất khi truy
                cập vào website của bạn.
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
                <Image
                  src={require('@/public/images/vps/anh-kien-truc-vps.png')}
                  alt="anh-kien-truc-vps"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <h4 className="h4">Toàn quyền root</h4>
              <p>
                Bạn được toàn quyền kiểm soát VPS với mức cao nhất không giới
                hạn. Với quyền root server bạn có thể tùy chỉnh sâu hơn vào hệ
                thống VPS cũng như có quyền giám sát tài nguyên máy chủ VPS theo
                thời gian thực.
              </p>
              <h4 className="h4">IPv6 riêng</h4>
              <p>
                Kể cả VPS rẻ nhất chúng tôi cũng sử dụng IPv6 native giúp giảm
                độ trễ, tối ưu hóa tốc độ mạng cũng như giúp server không bị đưa
                vào danh sách đen. Công nghệ IP mới nhất giúp kết nối tới VPS
                server vừa nhanh chóng lại vô cùng an toàn.
              </p>
              <h4 className="h4">Backup và Snapshot</h4>
              <p>
                Có backup tự động và snapshot thủ công, bạn hãy yên tâm rằng
                website và VPS server sẽ được khôi phục lại trong ít phút.
              </p>
            </div>
          </div>
        </section>

        <Question data={question} />

        <section className="section-contact">
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
        </section>
      </div>
    </div>
  );
}

export default RentVps;
