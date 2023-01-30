import BannerPage from '@/src/components/banner/BannerPage';
import SpecificationItem from '@/src/components/firewall/SpecificationItem';
import TitleWithLine from '@/src/components/TitleWithLine';
import BuyPackage from '@/src/containers/firewall/BuyPackage';
import SecurityItem from '@/src/containers/firewall/security/SecurityItem';
import SliderSpecification from '@/src/containers/firewall/SliderSpecification';
import Contact from '@/src/containers/home/contact';
import Question from '@/src/containers/home/question';
import { FIREWALL_IMAGE, formatNumber } from '@/src/utils';
import Image from 'next/image';
import React from 'react';

const banner = {
  large: FIREWALL_IMAGE.BANNER_LARGE,
  medium: FIREWALL_IMAGE.BANNER_MEDIUM,
  small: FIREWALL_IMAGE.BANNER_SMALL
}

const specification = [
  {
    title: 'Băng thông',
    fw1: {
      content: '1 Core',
    },
    fw2: {
      content: '1 Core',
    },
    fw3: {
      content: '1 Core',
    },
    fw4: {
      content: '1 Core',
    },
    fw5: {
      content: '1 Core',
    },
    fw6: {
      content: '1 Core',
    },
  },
  {
    title: 'Số lượng IP Backend',
    fw1: {
      content: '300Mbs',
    },
    fw2: {
      content: '700Mbs',
    },
    fw3: {
      content: '1.5GB',
    },
    fw4: {
      content: '5GB',
    },
    fw5: {
      content: '10GB',
    },
    fw6: {
      content: '20GB',
    },
  },
  {
    title: 'Chống Botnet',
    fw1: {
      checked: true,
    },
    fw2: {
      checked: true,
    },
    fw3: {
      checked: true,
    },
    fw4: {
      checked: true,
    },
    fw5: {
      checked: true,
    },
    fw6: {
      checked: true,
    },
  },
  {
    title: 'Chống SYN Flood',
    fw1: {
      checked: true,
    },
    fw2: {
      checked: true,
    },
    fw3: {
      checked: true,
    },
    fw4: {
      checked: true,
    },
    fw5: {
      checked: true,
    },
    fw6: {
      checked: true,
    },
  },
  {
    title: 'Chống SYN Flood Fake Source IP',
    fw1: {
      checked: true,
    },
    fw2: {
      checked: true,
    },
    fw3: {
      checked: true,
    },
    fw4: {
      checked: true,
    },
    fw5: {
      checked: true,
    },
    fw6: {
      checked: true,
    },
  },
  {
    title: 'Chống ICMP/ICMP',
    fw1: {
      checked: true,
    },
    fw2: {
      checked: true,
    },
    fw3: {
      checked: true,
    },
    fw4: {
      checked: true,
    },
    fw5: {
      checked: true,
    },
    fw6: {
      checked: true,
    },
  },
  {
    title: 'Chống GRE Flood',
    fw1: {
      checked: true,
    },
    fw2: {
      checked: true,
    },
    fw3: {
      checked: true,
    },
    fw4: {
      checked: true,
    },
    fw5: {
      checked: true,
    },
    fw6: {
      checked: true,
    },
  },
  {
    title: 'Chống TOS Flood',
    fw1: {
      checked: true,
    },
    fw2: {
      checked: true,
    },
    fw3: {
      checked: true,
    },
    fw4: {
      checked: true,
    },
    fw5: {
      checked: true,
    },
    fw6: {
      checked: true,
    },
  },
  {
    title: 'Đường mạng 100 mb/s',
    fw1: {
      checked: true,
    },
    fw2: {
      checked: true,
    },
    fw3: {
      checked: true,
    },
    fw4: {
      checked: true,
    },
    fw5: {
      checked: true,
    },
    fw6: {
      checked: true,
    },
  },
  {
    title: 'Hỗ trợ IPv4&IPv6',
    fw1: {
      checked: true,
    },
    fw2: {
      checked: true,
    },
    fw3: {
      checked: true,
    },
    fw4: {
      checked: true,
    },
    fw5: {
      checked: true,
    },
    fw6: {
      checked: true,
    },
  },
  {
    title: 'Hỗ trợ 24/7',
    fw1: {
      checked: true,
    },
    fw2: {
      checked: true,
    },
    fw3: {
      checked: true,
    },
    fw4: {
      checked: true,
    },
    fw5: {
      checked: true,
    },
    fw6: {
      checked: true,
    },
  },
];

const security = [
  {
    id: '1',
    title: 'Lớp 6: Tấn công tầng Ứng dụng',
    content1: 'Algorithm- based Authentication',
    content2: 'Advanced Pattern Matching',
    image: FIREWALL_IMAGE.STEP6,
  },
  {
    id: '2',
    title: 'Lớp 5: Tấn công tầng Network',
    content1: 'Algorithm- based Authentication',
    content2: 'TCP Connection Vertication',
    image: FIREWALL_IMAGE.STEP5,
  },
  {
    id: '3',
    title: 'Lớp 4: Tấn công đã có chữ ký',
    content1: 'Block Access based on Gofiber’s Signature Database',
    content2: 'Block traffic from well-known tools: t50,hping…',
    image: FIREWALL_IMAGE.STEP4,
  },
  {
    id: '4',
    title: 'Lớp 3: Danh sách tin cậy',
    content1: 'User Configured Blacklist/Whitelist',
    content2: 'Firewall Auto-learned Blacklist/Whitelist',
    image: FIREWALL_IMAGE.STEP3,
  },
  {
    id: '5',
    title: 'Lớp 2: Kiểm soát truy cập',
    content1: 'GeoIP Rules',
    content2: 'Port Filtering',
    image: FIREWALL_IMAGE.STEP2,
  },
  {
    id: '6',
    title: 'Lớp 1: Phân tích giao thức',
    content1: 'Drop Malformed Packet',
    content2: 'Drop Not Allowed Protocols',
    image: FIREWALL_IMAGE.STEP1,
  },
];

const question = [
  {
    id: '1',
    title: 'Firewall là gì?',
    content: (
      <>
        <p>
          Firewall (tường lửa) là một bức tường hệ thống an ninh mạng giúp ngăn
          chặn sự xâm nhập trái phép bởi một số truy cập và bảo vệ nguồn thông
          tin nội bộ của các cá nhân, tổ chức, doanh nghiệp. Đây là một thuật
          ngữ chuyên ngành mạng máy tính thường hay sử dụng.
        </p>
        <p>
          Tường lửa tồn tại ở loại phần cứng, phần mềm hoặc kết hợp cả hai với
          nhau hoạt động trong môi trường mạng làm ranh giới bảo mật bên trong
          và bên ngoài của hệ thống mạng máy tính.
        </p>
        <p>
          Kết hợp với chương trình Anti-virus và hệ thống tường lửa bảo mật sẽ
          ngăn chặn mọi thâm nhập trái phép, độc hại.
        </p>
      </>
    ),
  },
  {
    id: '2',
    title: 'Vai trò của firewall là gì?',
    content: (
      <>
        <p>
          Tường lửa được coi là một kỹ thuật tích hợp vào hệ thống mạng với mục
          đích hỗ trợ người dùng chống lại mọi sự xâm nhập trái phép từ các kẻ
          xấu. Đồng thời, bảo vệ thông tin dữ liệu quan trọng bên trong khỏi bởi
          các tấn công từ bên ngoài. Cụ thể:
        </p>
        <p>
          <ul>
            <li>
              Cho phép hoặc vô hiệu hóa các truy cập bên ngoài, đảm bảo chỉ có
              thông tin chỉ có trong mạng nội bộ
            </li>
            <li>Cho phép hoặc vô hiệu hóa các truy cập bên ngoài vào trong</li>
            <li>Phát hiện và ngăn chặn kịp thời các cuộc tấn công bên ngoài</li>
            <li>Hỗ trợ kiểm soát mọi truy cập người dùng</li>
            <li>
              Quản lý và kiểm soát chặt chẽ luồng dữ liệu trên hệ thống mạng
            </li>
            <li>
              Xác thực và lọc các thông tin, gói lưu chuyển trên hệ thống mạng
            </li>
            <li>
              Nắm được thông tin kẻ xấu cố gắng truy cập vào hệ thống mạng
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: '3',
    title: 'Firewall nào tốt nhất hiện tại?',
    content: (
      <>
        <p>
          Hiện nay, các sản phẩm phần mềm tường lửa tốt nhất hiện nay có nhiều
          cấu hình khác nhau. Tùy thuộc vào từng nhu cầu và các yếu tố khác mà
          có thể đưa ra sự lựa chọn thích hợp.
        </p>
      </>
    ),
  },
  {
    id: '4',
    title: 'Firewall nào tốt nhất hiện tại?',
    content: (
      <>
        <p>
          Thực tế, không phải cái gì cũng hoàn hảo về mọi mặt, kể cả tường lửa.
          Mặc dù, nó cung cấp nhiều tính năng hữu ích bảo vệ người dùng nhưng
          cũng không thể tránh các nhược điểm. Chẳng hạn:
        </p>
        <p>
          <ul>
            <li>
              Tấn công nội bộ: Tường lửa cũng là một công cụ máy móc nên khó
              tránh khỏi việc phân biệt được đâu là nội dung tốt, đâu là nội
              dung xấu. Đơn thuần, tường lửa chỉ hỗ trợ máy tính ngăn chặn xâm
              nhập nguồn thông tin không mong muốn cần xác minh thông tin. Bởi
              vậy, một số hành vi tấn công nội bộ như nghe trộm, truyền dữ liệu
              nhạy cảm, ăn cắp phá hoại thông tin… sẽ không thể ngăn chặn.
            </li>
            <li>
              Từ chối các cuộc tấn công dịch vụ phân tán: Tường lửa khó có thể
              ngăn chặn được nếu cuộc tấn công đó không đi qua nó. Ngoài ra,
              Firewall không thể rà soát, quét diệt virus. Cuộc tấn công sẽ gây
              tắc nghẽn kết nối để chặn lưu lượng truy cập ở đích, tập trung
              khai thác tài nguyên ở server hoặc nhắm vào các ứng dụng.
            </li>
            <li>
              Các phần mềm độc hại: Sự phát triển của hệ thống mạng kéo theo sự
              ra đời các phần mềm độc hại. Điều này gây khó khăn cho hệ thống
              bảo mật mạng của tường lửa
            </li>
            <li>
              Không được cập nhật cấu hình: Tường lửa cần phải được cập nhật cấu
              hình liên tục để đảm bảo phát hiện và ngăn chặn kịp thời các mã
              độc. Nếu các quản trị viên không bảo trì, nâng cấp thì sẽ tạo ra
              lỗ hỏng, tạo cơ hội kẻ xấu tấn công.
            </li>
          </ul>
        </p>
      </>
    ),
  },
];

function Firewall() {
  return (
    <div id="firewall">
      <section>
        <BannerPage image={banner} name="Firewall" />
      </section>
      <div className="container">
        <section className="section-specification hide-for-medium">
          <div className="row">
            <div className="col col-12">
              <div
                className="price-firewall title pb-2"
              >
                <div className="name-server">
                  <p>Tính năng</p>
                </div>
                <div className="name-server info-server">
                  Firewall 1<br />
                  <span className='price'>
                    {formatNumber(91800)} VNĐ/Th
                  </span>
                </div>
                <div className="name-server info-server">
                  Firewall 2<br />
                  <span className='price'>
                    {formatNumber(91800)} VNĐ/Th
                  </span>
                </div>
                <div className="name-server info-server">
                  Firewall 3<br />
                  <span className='price'>
                    {formatNumber(91800)} VNĐ/Th
                  </span>
                </div>
                <div className="name-server info-server">
                  Firewall 4<br />
                  <span className='price'>
                    {formatNumber(91800)} VNĐ/Th
                  </span>
                </div>
                <div className="name-server info-server">
                  Firewall 5<br />
                  <span className='price'>
                    {formatNumber(91800)} VNĐ/Th
                  </span>
                </div>
                <div className="name-server info-server">
                  Firewall 6<br />
                  <span className='price'>
                    {formatNumber(91800)} VNĐ/Th
                  </span>
                </div>
              </div>
              <div className="price-firewall specification-item mt-2">
                {specification.map((item, index) => (
                  <SpecificationItem key={index} item={item} />
                ))}
                <div className="name-server"></div>
                <div className="info-server">
                  <button className="btn0 btn-price">Chọn</button>
                </div>
                <div className="info-server">
                  <button className="btn0 btn-price">Chọn</button>
                </div>
                <div className="info-server">
                  <button className="btn0 btn-price">Chọn</button>
                </div>
                <div className="info-server">
                  <button className="btn0 btn-price">Chọn</button>
                </div>
                <div className="info-server">
                  <button className="btn0 btn-price">Chọn</button>
                </div>
                <div className="info-server">
                  <button className="btn0 btn-price">Chọn</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-specification hide-for-large">
          <div className="row">
            <div className="col col-6">
              <div className="" style={{ width: '100% !important' }}>
                <div className="name-server" style={{ borderBottom: '1px solid #d6d6d6' }}>
                  <p style={{ margin: '0px', lineHeight: '42px' }}>Tính năng</p>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '100%' }}>
                <div className="name-server">
                  <p>Băng thông</p>
                </div>
                <div style={{ minHeight: '41px' }} className="name-server number_line_1">
                  <p>Số lượng IP Backend</p>
                </div>
                <div className="name-server">
                  <p>Chống Botnet</p>
                </div>
                <div className="name-server">
                  <p>Chống SYN Flood</p>
                </div>
                <div style={{ minHeight: '41px' }} className="name-server number_line_1">
                  <p>Chống SYN Flood Fake Source IP</p>
                </div>
                <div className="name-server">
                  <p>Chống ICMP/ICMP</p>
                </div>
                <div className="name-server">
                  <p>Chống GRE Flood</p>
                </div>
                <div className="name-server">
                  <p>Chống TOS Flood</p>
                </div>
                <div style={{ minHeight: '41px' }} className="name-server number_line_1">
                  <p>Đường mạng 100 mb/s</p>
                </div>
                <div className="name-server">
                  <p>Hỗ trợ IPv4&amp;IPv6</p>
                </div>
                <div className="name-server">
                  <p>Hỗ trợ 24/7</p>
                </div>
              </div>
            </div>
            <div className="col col-6">
              <SliderSpecification />
            </div>
          </div>
        </section>

        <section className="section-security">
          <div className="section-content position-relative">
            <div className="row justify-content-center">
              <div className="col col-12 col-md-6 col-lg-4">
                <TitleWithLine title='BẢO VỆ TOÀN DIỆN' />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col col-12 col-md-12 col-lg-8">
                {security.map((item) => (
                  <SecurityItem key={item.id} item={item} />
                ))}
              </div>
              <div className="col col-12 col-md-4 hide-for-medium">
                <div className="img">
                  <Image
                    src={FIREWALL_IMAGE.SECURITY}
                    width={500}
                    height={1500}
                    alt="Bảo vệ toàn diện"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Question data={question} />

        <Contact />
      </div>
    </div>
  );
}

export default Firewall;
