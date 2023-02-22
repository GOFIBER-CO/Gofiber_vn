import TitleWithLine from "@/src/components/TitleWithLine";
import { ICON } from "@/src/utils";
import { Icon } from "@iconify/react";
import { Collapse } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const { Panel } = Collapse;

const dummyData = [
  {
    id: "1",
    title: "GOFIBER cung cấp những dịch vụ công nghệ gì?",
    content: (
      <p>
        Hiện nay GOFIBER đang cung cấp các dịch vụ công nghệ như web hosting,
        server máy chủ vật lý tốc độ cao, VPS SSD giá rẻ, VPS treo game,
        Firewall anti DDoS, chứng chỉ SSL,...
      </p>
    ),
  },
  {
    id: "2",
    title: "Chi phí ở đây đã rẻ nhất hay chưa?",
    content: (
      <p>
        “Hosting rẻ nhất Việt Nam” chưa bao giờ nằm trong chiến lược của
        GOFIBER. Thay vào đó chúng tôi đặt sự ưu tiên trong việc{" "}
        <strong>hài hòa giữa chất lượng dịch vụ và mức phí hợp lý </strong>dành
        cho mọi đối tượng khách hàng.
      </p>
    ),
  },
  {
    id: "3",
    title:
      "GOFIBER có hỗ trợ Domain Name Servers (DNS) trong trường hợp tôi chưa có Hosting không?",
    content: (
      <p>
        Trong trường hợp bạn chưa đăng ký dịch vụ Hosting, GOFIBER sẽ hỗ trợ 1
        DNS dành cho tên miền mà bạn đã đăng ký để trỏ về. Vì vậy, trong trường
        hợp bạn cần sự hỗ trợ hãy liên hệ với chúng tôi bằng cách mở ticket
        support hoặc để được hỗ trợ nhanh nhất.
      </p>
    ),
  },
  {
    id: "4",
    title: "Nếu không hài lòng với dịch vụ tôi có được hoàn lại phí không?",
    content: (
      <p>
        Chúng tôi sẽ hoàn trả lại 100% số tiền chúng tôi đã nhận với điều kiện:
        lý do bạn không hài lòng là đúng hoặc bạn không vi phạm quy định sử dụng
        dịch vụ của chúng tôi. Xem thêm về quy định hoàn tiền tại đây.
      </p>
    ),
  },
  {
    id: "5",
    title:
      "Sau bao lâu tôi có thể sử dụng dịch vụ sau khi hoàn tất thanh toán?",
    content: (
      <>
        <p>
          Hệ thống của GOFIBER tạo tài khoản và cài đặt các dịch vụ cho khách
          hàng{" "}
          <strong>hoàn toàn tự động và gần như hoàn thành ngay lập tức </strong>
          sau khi thanh toán cho đơn hàng được xác nhận thành công.
        </p>
        <p>
          Đối với các khách hàng sử dụng dịch vụ máy chủ ảo VPS có mở thêm yêu
          cầu hỗ trợ cài các panel như Aapanel hay Directadmin, thời gian để các
          chuyên viên hệ thống hoàn tất cài đặt thường cộng thêm từ 30-60 phút.
        </p>
      </>
    ),
  },
  {
    id: "6",
    title:
      "Tôi đang sử dụng dịch vụ Hosting ở nơi khác, làm sao để chuyển sang dịch vụ của GoFiber?",
    content: (
      <p>
        Hiện tại GOFIBER đang có chính sách hỗ trợ chuyển server từ nhà cung cấp
        cũ của quý khách về GOFIBER hoàn toàn miễn phí. Quý khách có thể mở
        ticket để gửi yêu cầu cho các chuyên viên phụ trách để nhờ thực hiện
        chuyển data về hộ nếu muốn. Website của quý khách sau khi chuyển về được
        các chuyên viên kiểm tra và đảm bảo vận hành trơn tru trước khi bàn giao
        lại cho quý khách.
      </p>
    ),
  },
  {
    id: "7",
    title: "Tôi có thể nâng cấp gói dịch vụ đang sử dụng không?",
    content: (
      <p>
        Bất cứ lúc nào khách hàng cũng có thể chọn để nâng cấp dịch vụ đang sử
        dụng lên các gói cao cấp hơn. Hệ thống của GOFIBER tự động tính toán
        phần chi phí và quý khách chỉ phải chi trả cho phần chênh lệch giữa hai
        gói dịch vụ khi nâng cấp. Việc thanh toán gói dịch vụ nâng cấp theo giá
        mới sẽ bắt đầu vào chu kỳ gia hạn dịch vụ tiếp theo dựa trên tài khoản
        của khách hàng.
      </p>
    ),
  },
  {
    id: "8",
    title: "Tôi có thể liên hệ với GOFIBER qua đâu?",
    content: (
      <>
        <p>
          GOFIBER có đa dạng kênh liên lạc nhằm hỗ trợ khách hàng tốt nhất. Bạn
          có thể liên hệ với chúng tôi qua FanPage Facebook, TikTok, Email,...
          để được hỗ trợ tức thời, hãy liên hệ với chúng tôi qua số điện thoại
          0989078507 (Tel-Viber-Zalo).
        </p>
        <p>
          Đối với các yêu cầu hỗ trợ liên quan đến các dịch vụ như dịch vụ
          hosting, dịch vụ máy chủ, dịch vụ máy chủ áo VPS,... chúng tôi khuyến
          khích khách hàng mở yêu cầu hỗ trợ qua hệ thống ticket để được hỗ trợ
          hiệu quả nhất và bảo mật nhất.
        </p>
      </>
    ),
  },
  {
    id: "9",
    title: "Các hình thức thanh toán sử dụng dịch vụ",
    content: (
      <>
        <p>Có 2 hình thức thanh toán.</p>
        <p>
          <strong>
            Một là, thanh toán bằng tiền mặt tại văn phòng Công ty GOFIBER:
          </strong>
          <br />
          Quý khách đến và thực hiện thanh toán bằng tiền mặt trực tiếp tại văn
          phòng Công ty TNHH Công Nghệ Phần Mềm GOFIBER tại địa chỉ: Số 131,
          Đường CN11, P. Sơn Kỳ, Q. Tân Phú, TP.HCM.
        </p>
        <p>
          <strong>Hai là, thanh toán qua hình thức chuyển khoản:</strong>
          <br />
          Khách hàng có thể thanh toán dịch vụ qua chuyển khoản ngân hàng, VISA,
          ví Momo, QR code. Xem chi tiết hướng dẫn thanh toán tại đây.
        </p>
      </>
    ),
  },
  {
    id: "10",
    title: "Tôi lỡ quên gia hạn dịch vụ thì dữ liệu có thể phục hồi?",
    content: (
      <>
        <p>
          Dữ liệu là điều quý khách không phải lo khi sử dụng các dịch vụ của
          GOFIBER. Hệ thống của chúng tôi được cài đặt để thực hiện backup dữ
          liệu của quý khách thường xuyên trên cấp độ server. Do đó quý khách
          hàng hoàn toàn có thể liên hệ với nhân viên hỗ trợ để được hỗ trợ nhận
          lại dữ liệu khi cần thiết.
        </p>
        <p>
          Theo chính sách bảo lưu của GOFIBER, dữ liệu của quý khách cùng tên
          miền, nếu lỡ quên gia hạn, được hỗ trợ{" "}
          <strong>“giữ hộ” miễn phí với thời hạn lên đến 12 tháng</strong>. Sau
          khi dịch vụ đã hết hạn, nếu có bất kỳ vấn đề phát sinh gì xin Quý
          khách vui lòng liên hệ với NVKD đang làm việc hoặc hotline/livechat để
          được giải quyết.
        </p>
      </>
    ),
  },
  {
    id: "11",
    title: "GOFIBER có giữ bí mật các thông tin dữ liệu cá nhân của tôi không?",
    content: (
      <p>
        GOFIBER cam kết các thông tin và dữ liệu của khách hàng luôn được bảo
        mật theo tiêu chuẩn chung của Pháp luật Việt Nam và Tiêu chí riêng của
        GOFIBER.
      </p>
    ),
  },
  {
    id: "12",
    title: "Có thể dùng thử mà không cần thanh toán?",
    content: (
      <>
        <p>
          GOFIBER là một thương hiệu uy tín với các chính sách dùng thử tốt nhất
          hiện nay. Khách hàng có thể đăng ký dùng thử với bộ phận Kinh doanh để
          được trải nghiệm thử 7 ngày hoàn toàn miễn phí. Thủ tục dùng thử tại
          GOFIBER thường không cần xét duyệt và chờ đợi, kích hoạt dùng thử
          trong 5 phút.
        </p>
        <p>
          Bất cứ lúc nào trong thời hạn dùng thử, khách hàng cũng có thể chủ
          động tiến hành thanh toán để có nâng cấp tài khoản thành chính thức.
          Có thể nói, hoàn toàn không có khác biệt giữa chất lượng dịch vụ của
          tài khoản dùng thử và tài khoản chính thức.
        </p>
      </>
    ),
  },
];

type Props = {
  data?: any[];
  showContent?: boolean;
};

function SectionQuestion({ data = dummyData, showContent = true }: Props) {
  const [chosen, setChosen] = useState<string>("");

  return (
    <section className="section-question">
      <div data-aos="fade-up" className="container">
        <div className="text-center">
          <h2 className="h2">Khách hàng thường hỏi GOFIBER những gì?</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="wrapper_question">
              <Collapse
                accordion
                bordered={false}
                onChange={(e) => setChosen(e as string)}
                expandIcon={(e) => (
                  <Icon className="icon-edit" icon={ICON.EDIT} />
                )}
              >
                {data.map((item) => (
                  <Panel
                    extra={
                      <Icon
                        className={`icon-expand ${
                          chosen === item.id ? "active" : ""
                        }`}
                        icon={ICON.DOWN}
                      />
                    }
                    header={item.title}
                    key={item.id}
                  >
                    <>
                      <div className="row position-relative mb-3">
                        <div className="divider"></div>
                      </div>
                      {item.content}
                    </>
                  </Panel>
                ))}
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionQuestion;
