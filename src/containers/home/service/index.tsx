import { HOME_IMAGE } from "@/src/utils";
import React from "react";
import ServiceItem from "./ServiceItem";

const data = [
  {
    id: 1,
    title: "Dịch vụ thiết kế Website",
    content1: `Giao diện đẹp mắt, thân thiện với người dùng và công cụ tìm kiếm... là 
              những yếu tố luôn được đảm bảo trong bất ky sản phẩm nào do đội ngữ GOFIBER làm ra. 
              Ngoài ra, các mẫu websitedo chúng tôi thiết kế cũng luôn được đảm bảo sự hiển thị đồng bộ và đẹp mắt trên các thiết bị khác nhau.`,
    content2: `
              Tốc độ load của website cũng được đội ngũ nhân viên giàu kinh nghiệm của GOFIBER theo dõi 
              và tối ưu kỹ càng trước khi bàn giao cho khách hàng.
        `,
    image: HOME_IMAGE.MY_SERVICE.WEB_DESIGN,
  },
  {
    id: 2,
    title: "Cho thuê server giá rẻ",
    content1: `Đi lên từ dịch vụ nền tảng là Thiết kế Website giá rẻ nên 
          GOFIBER hiểu rõ những mong muốn của khách hàng của mình về dịch vụ hosting cũng như cho thuê server giá rẻ với cấu hình cao..`,
    content2: `
          Chúng tôi tự hào là một trong những công ty cung cấp dịch vụ cho thuê hosting và máy 
          chủ hiệu năng cao với giá thành cực kỳ hợp lý… có thể đáp ứng gần như mọi nhu cầu từ cơ bản đến chuyên nghiệp.
        `,
    image: HOME_IMAGE.MY_SERVICE.RENT_SERVICE,
  },
  {
    id: 6,
    title: "Hạ tầng an toàn và bảo mật",
    content1: `Cơ sở hạ tầng của GOFIBER được đầu tư và trang bị chỉn chu với các thiết bị được 
          chuyển giao từ những thương hiệu nổi tiếng như Dell, HP… có tính bảo mật và ổn định cao.`,
    content2: `
      Đường truyền tốc độ cao được bảo mật với các phần mềm Firewall bản 
      quyền nổi tiếng để giảm thiểu rủi ro mã độc cho website cũng như bảo vệ dữ liệu của khách hàng.
          `,
    image: HOME_IMAGE.MY_SERVICE.INFRASTRUCTURE,
  },
  {
    id: 3,
    title: "Cung cấp hosting và VPS ‘khủng’ giá rẻ",
    content1: `Nhằm tri ân những khách hàng của mình, GOFIBER đặc biệt chú trọng 
          các giải pháp công nghệ nhằm đáp ứng nhu cầu hosting và VPS ‘khủng’ với ngân sách vừa phải. Tóm lại, mọi yếu tố để giúp bạn khởi động dự án của mình 
          đã được đội ngũ giàu kinh nghiệm của GOFIBER chuẩn bị sẵn. 
          Hãy liên hệ ngay với nhân viên sale để được tư vấn ngay hôm nay.`,
    image: HOME_IMAGE.MY_SERVICE.HOSTING_VPS,
  },
  {
    id: 4,
    title: "Xây dựng nội dung chất lượng",
    content1: `Đội ngũ content của GOFIBER được 
          đào tạo bài bản và chuyên sâu về SEO luôn sẵn sàng hỗ trợ khách hàng trong việc chuẩn bị nội dung cho website của mình. 
          Đây là một trong những thế mạnh của dịch vụ xây dựng nội dung của chúng tôi nhiều năm qua.`,
    image: HOME_IMAGE.MY_SERVICE.BUILD_CONTENT,
  },
  {
    id: 5,
    title: "Dịch vụ chăm sóc Website chuyên nghiệp",
    content1: `Không phải chủ dự án nào cũng có thời gian để chăm sóc website của mình sau khi xây dựng. 
          Trong đó, có không ít các chủ website còn mắc phải sai lầm nghiêm trọng là không quan tâm và đầu tư nội dung ngay từ đầu cho website. 
          Điều này thường dẫn đến hệ quả là website không phát huy được hết giá trị của nó, khiến cho sự đầu tư và các cơ hội khác bị bỏ lỡ.`,
    content2: `
          Dịch vụ chăm sóc website chuyên nghiệp của GOFIBER được sinh ra để hỗ trợ cho các các nhân và doanh nghiệp
           sở hữu website vận hành website của mình hiệu quả hơn và nhận được nhiều lợi ích rõ ràng hơn.
          `,
    image: HOME_IMAGE.MY_SERVICE.CARE_WEBSITE,
  },
];

function ServiceList() {
  return (
    <div className="service_list">
      {data.map((item) => (
        <ServiceItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ServiceList;
