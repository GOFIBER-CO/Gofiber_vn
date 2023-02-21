import { HOME2_IMAGE } from "@/src/utils";
import React from "react";
import BasicServiceItem from "./BasicServiceItem";

const data = [
  {
    id: 1,
    name: "Thiết kế Website",
    content: `Giao diện đẹp mắt, thân thiện với người dùng và các công cụ tìm kiếm… là những yếu tố luôn được đảm bảo trong bất kỳ sản phẩm nào do đội ngũ 
    GOFIBER làm ra. Ngoài ra, các mẫu website do chúng tôi thiết kế cũng luôn đảm bảo sự hiển thị đồng bộ và đẹp mắt trên các thiết bị khác nhau.`,
    link: "/",
    image: HOME2_IMAGE.BASIC_SERVICE.WEB_DESIGN,
  },
  {
    id: 2,
    name: `Chăm sóc Website chuyên nghiệp`,
    content: `Đây là dịch vụ tiện ích đặc biệt nhằm hỗ trợ các khách hàng của GOFIBER trong việc chăm sóc và bảo trì website sau khi hoàn tất và nghiệm thu. Nhiều chủ dự án dự gặp phải vấn đề trong việc sắp xếp 
    thời gian trong việc chăm sóc website của mình sau khi xây dựng. Một số ít lại gặp vấn đề liên quan đến kỹ thuật hoặc không biết nên triển khai những gì tiếp theo để mang lại hiệu quả mong muốn.`,
    link: "/",
    image: HOME2_IMAGE.BASIC_SERVICE.CARE,
  },
  {
    id: 3,
    name: "SEO tổng thể",
    content: `Đây là một trong những dịch vụ SEO được các khách hàng của GOFIBER ưa chuộng và sử dụng nhiều nhất. 
    Những website kinh doanh có nhu cầu cạnh tranh về thứ hạng website và từ khóa ngành luôn cần thực hiện và duy trì 
    SEO tổng thể thường xuyên. Đặc biệt, giải pháp SEO chuyên nghiệp của chúng 
    tôi giúp cải thiện thứ hạng Google dễ dàng hơn với hệ thống website vệ tinh có IP “sạch” và riêng biệt.`,
    link: "/",
    image: HOME2_IMAGE.BASIC_SERVICE.SEO_FULL,
  },
  {
    id: 4,
    name: "SEO từ khóa",
    content: `Bên cạnh SEO tổng thể thì SEO từ khóa ngành hay từ khóa ngách cũng là một dịch vụ nền tảng nổi trội của GOFIBER. Khách hàng của bất kỳ dịch vụ 
    nào tại GOFIBER đều được tư vấn bộ từ khóa miễn phí cũng như phương hướng triển khai website mang tối ưu nhất. `,
    link: "/",
    image: HOME2_IMAGE.BASIC_SERVICE.KEY_WORD,
  },
  {
    id: 5,
    name: "Entity SEO",
    content: `Đây là một khái niệm tuy mới mà cũ của SEO, và đang là một trong những gói dịch vụ được “đặt” nhiều nhất từ các 
    khách hàng của GOFIBER. Hiệu quả của việc làm entity đang được đánh giá rất cao trong SEO nhất là khi nó được cho là mang lại sự 
    tăng hạng từ khóa nhanh chóng và bền vững.`,
    link: "/",
    image: HOME2_IMAGE.BASIC_SERVICE.ENTITY,
  },
  {
    id: 6,
    name: "Xây dựng nội dung chất lượng",
    content: `Đi kèm với dịch vụ chăm sóc website chuyên nghiệp không thể thiếu những nội dung chất lượng. 
    Dịch vụ xây dựng nội dung chất lượng và chuẩn SEO do GOFIBER cung cấp đã và đang làm hài lòng những khách hàng khó tính nhất.`,
    link: "/",
    image: HOME2_IMAGE.BASIC_SERVICE.BUILD_CONTENT,
  },
];

function BasicService() {
  return (
    <section className="section-basic-service">
      <div className="container">
        <div data-aos="fade-up" className="text-center">
          <h2 className="h2">Dịch vụ nền tảng GoFiber</h2>
        </div>

        <div className="mt-4 row" data-aos="fade-up">
          {data.map((item) => (
            <BasicServiceItem item={item} key={item?.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BasicService;
