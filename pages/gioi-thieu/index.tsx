import BannerPage from "@/src/components/banner/BannerPage";
import TitleWithLine from "@/src/components/TitleWithLine";
import TextIconPrice from "@/src/components/web-hosting/TextIconPrice";
import ChoiceList from "@/src/containers/introduction/choice";
import OurProducts from "@/src/containers/web-design/OurProducts";
import { INTRODUCE_IMAGE } from "@/src/utils";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Introduction() {
  const banner = {
    large: INTRODUCE_IMAGE.BANNER_LARGE,
    medium: INTRODUCE_IMAGE.BANNER_MEDIUM,
    small: INTRODUCE_IMAGE.BANNER_SMALL,
  };

  return (
    <>
      <Head>
        <title>
          Thông tin giới thiệu công ty TNHH Công Nghệ Phần Mềm Gofiber
        </title>
        <link rel="canonical" href="https://gofiber.vn/gioi-thieu" />
      </Head>
      <div id="introduction">
        <section>
          <BannerPage image={banner} name="Giới thiệu" />
        </section>
        <div className="container">
          <div className="row justify-content-center mt-4">
            <h2 className="h2 my-4 text-center color_primary text-uppercase">
              Công ty TNHH Công Nghệ Phần Mềm GOFIBER
            </h2>
            {/* <p className="mt-4">
              Gofiber.vn là đơn vị kinh doanh dịch vụ thiết kế website giá rẻ
              chuyên nghiệp mọi lĩnh vực cho khách hàng. Bên cạnh việc thiết kế,
              đơn vị còn chú trọng công tác bảo trì, nâng cấp và chăm sóc khách
              hàng khi khách hàng có yêu cầu. Chúng tôi mong muốn góp một chút
              công sức của mình cho sự phát triển của lĩnh vực thiết kế website
              tại TP. Hồ Chí Minh nói riêng và cũng như Việt Nam nói chung.
            </p>
            <p>
              Từ khi thành lập đến nay, Gofiber.vn đã có những thành tựu đáng kể
              với nguồn nhân lực ngày càng dồi dào, đầy nhiệt huyết, trách
              nhiệm, sức sáng tạo và chuyên môn cao. Sự thành công này, có phần
              đóng góp không nhỏ của đội ngũ cộng tác viên mà chúng tôi may mắn
              được hợp tác trong quá trình làm việc.
            </p>

            <div className="col col-12 col-md-10">
              <p className="mt-4">
                Chúng tôi tự tin sẽ đem lại những bản thiết kế website và chiến
                lược website phù hợp để phục vụ quý khách theo những tiêu chí:
              </p>
              <TextIconPrice content="Đẹp" color="blue" />
              <TextIconPrice content="Bảo mật" color="blue" />
              <TextIconPrice content="Sáng tạo" color="blue" />
              <TextIconPrice
                content="Đem lại lợi thế kinh doanh trực tuyến thực sự cho doanh nghiệp"
                color="blue"
              />
            </div> */}
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col col-12 col-lg-8">
              <TitleWithLine title="SỨ MỆNH VÀ TẦM NHÌN" />
            </div>
            <p>
              Tiền thân là đơn vị giàu kinh nghiệm hoạt động trong lĩnh vực
              thiết kế website giá rẻ và các dịch vụ SEO tổng thể cũng như
              chuyên sâu. GOFIBER tự hào đã hỗ trợ đắc lực và hiệu quả cho các
              đối tượng khách hàng là cá nhân, tổ chức và cả doanh nghiệp
            </p>
            <p>
              Bước sang năm 2023, chúng tôi cảm thấy đã đến lúc phát huy thêm
              nữa các giá trị của mình, nâng tầm các dịch vụ sẵn có lên một tầm
              cao mới đồng thời xây dựng thêm các dịch vụ chuyên nghiệp khác,
              đặc biệt là dịch vụ Cho thuê{" "}
              <Link href={"/"}>hosting và máy chủ VPS hiệu năng cao.</Link>
            </p>
            <p>
              Với nguồn nhân lực chất lượng, không ngừng được nâng cao và phát
              triển, GOFIBER tự tin sẽ có thể đáp ứng gần như mọi nhu cầu của
              khách hàng. Cho dù đó là nhu cầu cơ sở hạ tầng như hosting, máy
              chủ, VPS hay dịch vụ thiết kế website và hỗ trợ SEO tổng thể và
              chuyên sâu, chúng tôi cam kết sẽ làm 100% khách hàng của mình hài
              lòng.
            </p>
          </div>

          <OurProducts />

          <section className="section-other-service">
            <div className="row justify-content-center">
              <div className="col col-12 col-lg-8">
                <TitleWithLine title="CÁC DỊCH VỤ KHÁC" />
              </div>
              <p>
                Luôn tự hào là một trong những đơn vị thiết kế website giá rẻ có
                sản phẩm đầu ra tốt nhất hiện nay, GOFIBER chúng tôi luôn hiểu
                và có sẵn{" "}
                <strong>giải pháp cho mọi vấn đề của khách hàng</strong> đồng
                thời đảm bảo các tiêu chí như:
              </p>
              <TextIconPrice content="Giao diện đẹp mắt" color="blue" />
              <TextIconPrice
                content="Đảm bảo tính bảo mật và đạt tối ưu hóa cao"
                color="blue"
              />
              <TextIconPrice
                content="Mang lại lợi ích cạnh tranh so với website đối thủ"
                color="blue"
              />
              <p className="mt-2">
                <strong>
                  Ngoài ra, với mỗi một dự án chúng tôi đề xem như dự án của
                  chính mình và đảm bảo điều kiện thuận lợi nhất để khách hàng
                  có được kết quả mong muốn
                </strong>
              </p>
            </div>
          </section>

          <section className="section-choice">
            <div className="section-content position-relative">
              <div className="row justify-content-center">
                <div className="col col-12">
                  <TitleWithLine title="CHỌN GOFIBER LÀ LỰA CHỌN ĐÚNG ĐẮN NHẤT" />
                  {/* <h2 className="h2 mt-4 text-center color_primary">
                    CHỌN GOFIBER LÀ LỰA CHỌN ĐÚNG ĐẮN NHẤT
                  </h2> */}
                </div>
              </div>
              <ChoiceList />
            </div>
          </section>

          {/* <section className="section-other-service">
            <div className="section-content position-relative">
              <div className="row justify-content-center">
                <div className="col col-12">
                  <h2 className="h2 mt-4 text-center color_primary">
                    Gofiber bắt đầu triển khai thiết kế Web giá rẻ
                  </h2>
                </div>
              </div>
              <div className="row align-items-center mt-4 flex-row-reverse">
                <div className="col col-12 col-lg-6 text-center">
                  <div className="img">
                    <img
                      width={1000}
                      height={500}
                      src={INTRODUCE_IMAGE.CHEAP_WEBSITE}
                      alt="Các dịch vụ khác"
                    />
                  </div>
                </div>
                <div className="col col-12 col-lg-6">
                  <p>
                    Ngoài ra, với mỗi một dự án chúng tôi đề Đi kèm sự phát
                    triển về nguồn lực, sau hơn 1 năm hoạt động, gofiber.vn đã
                    tạo nên một hình ảnh chất lượng và uy tín cho mình, là sự
                    lựa chọn ưu tiên của nhiều khách hàng khi có nhu cầu thành
                    lập website kinh doanh.
                  </p>
                  <p className="mt-4">
                    Website của chúng tôi làm ra là phải chất lượng. Chúng tôi
                    không bàn giao cho khách hàng của mình một đống rác, lòng tự
                    trọng của lập trình viên không cho phép chúng tôi làm điều
                    đó.
                  </p>
                  <p className="mt-4">
                    Tuy nhiên, mọi chuyện đã thay đổi kể từ nay khi chúng tôi
                    triển khai thử nghiệm cách thức xây dựng website phổ thông,
                    các web giới thiệu doanh nghiệp, công ty và bán hàng. Từ đó
                    đã nhận được kết quả rất khả quan. Website vẫn có những hiệu
                    ứng hình ảnh lung linh, một thiết kế đẹp, tốc độ load nhanh
                    và quan trọng là thời gian phát triển thấp. GOFIBER.VN xin
                    phép được giới thiệu: kho website mẫu dựng sẵn với đầy đủ
                    tính năng, chuẩn SEO và chuẩn hiển thị di động mới nhất
                  </p>
                </div>
              </div>
            </div>
          </section> */}

          {/* <section className="section-other-service">
            <div className="section-content position-relative">
              <div className="row justify-content-center">
                <div className="col col-12 col-md-10 col-lg-8">
                  <h2 className="h2 my-4 text-center color_primary">
                    Tại sao lại chọn Website theo mẫu có sẵn?
                  </h2>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col col-12 col-lg-7">
                  <h2 className="h2 mt-4 text-center">
                    Nền tảng website giá rẻ đầu tiên được thiết kế dành riêng
                    cho người Việt
                  </h2>
                  <div className="row justify-content-center">
                    <div className="col col-12 col-md-10">
                      <p className="mt-4">
                        Đa phần các mẫu website được các công ty khác đăng lên
                        đều là sản phẩm của các tác giả nước ngoài, thực tế nó
                        mang lại một vấn đề rất lớn mà bạn không để ý: gu của
                        người Việt rất khác
                      </p>

                      <ul className="has-style" style={{ fontStyle: "normal" }}>
                        <li>
                          <p>
                            Không thích nhìn các layout/hình ảnh quá lớn
                            (fullscreen, fullwidth, tràn màn hình) mà chủ yếu
                            thích nội dung gọn gàng, co cụm dễ tìm. Phần này
                            người Việt khá giống gu của người Nhật
                          </p>
                        </li>
                        <li>
                          <p>
                            Đa phần máy tính vẫn còn có cấu hình thấp, các hiệu
                            ứng trên website ( mà đa phần đều khá ngô nghê chứ
                            không thật sự hoàn hảo ) mà khi truy cập sẽ làm máy
                            của người dùng giật/lag {"->"} mất khách hàng
                          </p>
                        </li>
                        <li>
                          <p>
                            Font chữ, hình ảnh decor trang trí…không phải là
                            Tiếng Việt hoặc người Á Đông
                          </p>
                        </li>
                        <li>
                          <p>
                            Cách dàn trang, điểm nhấn không được chú trọng, chủ
                            yếu các tác giả chi làm cho tổng thể nhìn sơ qua thì
                            đẹp và khi áp dụng nội dung thật vào sẽ làm website
                            bị loãng.
                          </p>
                        </li>
                      </ul>

                      <div className="img text-center">
                        <img
                          src={INTRODUCE_IMAGE.WHY.FIRST}
                          width={1000}
                          height={500}
                          alt="Nền tảng website giá rẻ đầu tiên được thiết kế
                                    dành riêng cho người Việt"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col col-12 col-lg-7">
                  <h2 className="h2 mt-4 text-center">
                    Chi phí thấp nhất cho một Website Đẹp/ Chuẩn / Tiện
                  </h2>
                  <div className="row justify-content-center">
                    <div className="col col-12 col-md-10">
                      <p className="mt-4">
                        Khi bắt đầu, chi phí đầu tư không rộng rãi như những
                        doanh nghiệp thâm niên hàng chục năm khác thì bạn nên
                        lựa chọn một giải pháp website đúng vừa tầm. Nhất là khi
                        website của bạn:
                      </p>

                      <ul className="has-style" style={{ fontStyle: "normal" }}>
                        <li>
                          <p>Đơn giản chỉ để dùng giới thiệu doanh nghiệp</p>
                        </li>
                        <li>
                          <p>Bán hàng online trong giai đoạn mới bắt đầu</p>
                        </li>
                        <li>
                          <p>Website tin tức cấu trúc đơn giản, ít bộ phận</p>
                        </li>
                        <li>
                          <p>Website du lịch bán tour giai đoạn mới bắt đầu</p>
                        </li>
                        <li>
                          <p>
                            Landing page, giới thiệu bất động sản dành cho những
                            nhà môi giới nhỏ
                          </p>
                        </li>
                      </ul>

                      <div className="img text-center">
                        <img
                          src={INTRODUCE_IMAGE.WHY.SECOND}
                          width={1000}
                          height={500}
                          alt="Chi phí thấp nhất cho một Website Đẹp/ Chuẩn / Tiện"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col col-12 col-lg-7">
                  <h2 className="h2 mt-4 text-center">
                    Sử dụng nền tảng Wordpress giúp cho việc thuê mướn nhân sự
                    đơn giản đến không tưởng
                  </h2>
                  <div className="row justify-content-center">
                    <div className="col col-12 col-md-10">
                      <p className="mt-4">
                        Hệ thống mẫu website có sẵn của Gofiber.vn hoạt động
                        trên nền tảng CMS số một thế giới: WordPress với hơn 80%
                        – vài tỷ website trên thế giới đang sử dụng.
                      </p>

                      <p>
                        Khoan nói chuyên sâu về các tính năng khác, một ưu điểm
                        rất tiện lợi ở WordPress chính là tính phổ biến của nó,
                        bạn có thể dễ đàng thuê mướn các vị trí: quản trị viên,
                        Content writer, SEO, Marketing online hay thậm chí là
                        lập trình viên mà không cần phải tốn giây nào để
                        training. Hầu hết các nhân sự này đều biết sử dụng
                        WordPress.
                      </p>

                      <div className="img text-center">
                        <img
                          src={INTRODUCE_IMAGE.WHY.THIRD}
                          width={1000}
                          height={500}
                          alt=" Sử dụng nền tảng 
                                            Wordpress giúp cho việc thuê mướn nhân sự đơn giản đến không tưởng"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col col-12 col-lg-7">
                  <h2 className="h2 mt-4 text-center">
                    Không cần / Không nhất thiết phải chi hàng trăm triệu cho
                    nền tảng Website và ứng dụng ở thời điểm ban đầu
                  </h2>
                  <div className="row justify-content-center">
                    <div className="col col-12 col-md-10">
                      <p className="mt-4">
                        Trong giai đoạn internet hiện nay, website có thể được
                        tích hợp thêm hàng trăm các tính năng tiện lợi khác nhau
                        cho khách hàng sử dụng. Cũng như tích hợp thêm các tính
                        năng thiên về phần quản lý dành cho công ty theo dõi sự
                        hiệu quả trong kinh doanh. Có rất nhiều thứ mà bạn có
                        thể làm được với website của công ty/doanh nghiệp – tuy
                        nhiên hiện tại có thể bạn chưa cần tới. Thay vì tập
                        trung nguồn lực phát triển phần còn lại của kinh doanh.
                      </p>

                      <div className="img text-center">
                        <img
                          src={INTRODUCE_IMAGE.WHY.FOURTH}
                          width={1000}
                          height={500}
                          alt="Không cần / Không nhất thiết phải chi hàng trăm triệu
                                    cho nền tảng Website và ứng dụng ở thời điểm ban đầu"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* <section className="section-other-service">
            <div className="section-content position-relative">
              <div className="row justify-content-center">
                <div className="col col-12">
                  <TitleWithLine title="NHỮNG LỢI ÍCH KHI CHỌN WEBSITE THEO MẪU CÓ SẴN" />
                </div>
              </div>

              <div className="row justify-content-center align-items-center flex-row-reverse">
                <div className="col col-12 col-md-6">
                  <div className="img text-center text-md-left">
                    <img
                      src={INTRODUCE_IMAGE.WHY.FIRST}
                      width={500}
                      height={500}
                      alt="anh-maychuvatly1"
                    />
                  </div>
                </div>
                <div className="col col-12 col-md-6">
                  <h4 className="h4">
                    01. NỀN TẢNG WEBSITE ĐƯỢC THIẾT KẾ DÀNH RIÊNG CHO NGƯỜI VIỆT
                  </h4>
                  <p className="mt-4">
                    Nếu như ở các đơn vị khác thì mẫu website có sẵn thường phục
                    vụ cho người nước ngoài và được thiết kế bởi các chuyên gia
                    nước ngoài. Điều này có một bất lợi là gu thẩm mỹ và góc
                    nhìn về sự thuận tiện của họ thường khác với người Việt rất
                    nhiều.
                  </p>
                  <p>
                    Với các mẫu website xây dựng bởi GOFIBER dành cho thị trường
                    Việt thì phong cách thiết kế và sự tiện lợi đáp ứng hầu hết
                    thói quen của người Việt. Khách hàng của bạn sẽ dễ dàng hơn
                    rất nhiều trong việc lướt web và đưa ra quyết định mang lại
                    sự chuyển đổi có giá trị.
                  </p>
                </div>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col col-12 col-md-6">
                  <div className="img text-center text-md-left">
                    <img
                      src={INTRODUCE_IMAGE.WHY.SECOND}
                      width={500}
                      height={500}
                      alt="anh-maychuvatly2"
                    />
                  </div>
                </div>
                <div className="col col-12 col-md-6">
                  <h4 className="h4">
                    02. CHI PHÍ THẤP NHƯNG HIỆU QUẢ LẠI CAO
                  </h4>
                  <p className="mt-4">
                    Với những dự án xây dựng và thiết kế website giá rẻ dựa trên
                    các mẫu có sẵn thì chi phí thường được tiết kiệm hơn rất
                    nhiều. Việc tiết kiệm chi phí chủ yếu nhờ vào việc không
                    phải phát triển từ đầu mà chủ yếu là hiệu chỉnh lại cái có
                    sẵn cho phù hợp với ngách của website.
                  </p>
                  <p>
                    Khi phát triển trên cái có sẵn cũng đồng nghĩa phía
                    developer có nhiều thời gian hơn cho việc cấu hình các tính
                    năng quan trọng khác và nhờ vậy mà hiệu quả đạt được của dự
                    án thường cao hơn.
                  </p>
                </div>
              </div>

              <div className="row justify-content-center align-items-center flex-row-reverse">
                <div className="col col-12 col-md-6">
                  <div className="img text-center text-md-left">
                    <img
                      src={INTRODUCE_IMAGE.WHY.THIRD}
                      width={500}
                      height={500}
                      alt="anh-maychuvatly3"
                    />
                  </div>
                </div>
                <div className="col col-12 col-md-6">
                  <h4 className="h4">03. SỬ DỤNG NỀN TẢNG WORDPRESS</h4>
                  <p className="mt-4">
                    Wordpress là một nền tảng lý tưởng và sẵn có cho hầu hết mọi
                    nhu cầu từ cơ bản đến nâng cao. Một CMS có số người dùng
                    ‘khủng’ nhất hiện nay và được support bởi lực lượng
                    developer hùng hậu, tài năng và kinh nghiệm từ khắp nơi trên
                    thế giới.
                  </p>
                  <p>
                    Nhờ vào các ưu thế đó bạn rất dễ dàng tìm được người hỗ trợ
                    về sau cho dự án của mình. Nếu bạn không có thời gian cho
                    việc quản trị website, làm SEO, làm nội dung thì dịch vụ
                    chăm sóc website chuyên nghiệp của GOFIBER sẵn sàng hỗ trợ
                    bạn. Nếu bạn không thích GOFIBER thì cũng không sao, hầu như
                    tất cả nhân sự SEO, Content và Marketing ngày nay đều am
                    hiểu về Wordpress và có thể hỗ trợ bạn.
                  </p>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
}

export default Introduction;
