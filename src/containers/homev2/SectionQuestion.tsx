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
        ‘Hosting giá rẻ nhất Việt Nam’ chưa bao giờ nằm trong chiến lược của
        GoFiber. Thay vào đó, chúng tôi đặt sự ưu tiên trong việc hài hoà giữa
        chất lượng dịch vụ mình cung cấp với mức phí dịch vụ hợp lý dành cho mọi
        đối tượng khách hàng.
      </p>
    ),
  },
  {
    id: "3",
    title:
      "GoFiber có hỗ trợ Domain Name Servers (DNS) trong trường hợp tôi chưa có Hosting hay không? ",
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
    id: "4",
    title: "Nếu không hài lòng với dịch vụ tôi có được hoàn lại phí không?",
    content: (
      <p>
        Chúng tôi sẽ hoàn trả lại 100% số tiền chúng tôi đã nhận với điều kiện:
        lý do bạn không hài lòng là đúng hoặc bạn không vi phạm quy định sử dụng
        dịch vụ của chúng tôi. Xem thêm về quy định hoàn tiền
      </p>
    ),
  },
  {
    id: "5",
    title:
      "Sau bao lâu tôi có thể sử dụng dịch vụ sau khi hoàn tất thanh toán?",
    content: (
      <p>
        Hệ thống của GOFIBER tạo tài khoản và cài đặt các dịch vụ cho khách hàng
        <strong>hoàn toàn tự động và gần như hoàn thành ngay lập tức </strong>
        sau khi thanh toán cho đơn hàng được xác nhận thành công.
      </p>
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
