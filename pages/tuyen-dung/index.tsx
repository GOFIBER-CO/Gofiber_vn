import React, { useEffect, useState } from "react";
import BannerPage from "@/src/components/banner/BannerPage";
import RecruitItem from "@/src/containers/recruit/RecruitItem";
import TextIconButton from "@/src/components/button/TextIconButton";
import Image from "next/image";
import { useAppDispatch } from "@/src/redux";
import { getRecruitsByDomain } from "@/src/redux/slice/recruitSlice";
import { RECRUIT_IMAGE } from "@/src/utils";
import Skeleton from "react-loading-skeleton";
import Head from "next/head";

const banner = {
  large: RECRUIT_IMAGE.BANNER_LARGE,
  medium: RECRUIT_IMAGE.BANNER_MEDIUM,
  small: RECRUIT_IMAGE.BANNER_SMALL,
};

const data = [
  {
    id: 1,
    image:
      "https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/2021/01/Recruitment-l%C3%A0-g%C3%AC-3.jpg",
    title: "Tuyển dụng vị trí UX/UI",
    fromSalary: 1000000,
    toSalary: 1000000,
    description: `Open cho ứng viên tất cả level [Fresher - Senior] Số lượng tuyển: (02 ứng viên) 
        Range lương: Thỏa thuận Mô tả công việc Tham gia dự án trực tiếp cùng các chuyên gia IT Consultant`,
  },
  {
    id: 2,
    image:
      "https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/2021/01/Recruitment-l%C3%A0-g%C3%AC-3.jpg",
    title: "Tuyển dụng vị trí UX/UI",
    fromSalary: 1000000,
    toSalary: 1000000,
    description: `Open cho ứng viên tất cả level [Fresher - Senior] Số lượng tuyển: (02 ứng viên) 
        Range lương: Thỏa thuận Mô tả công việc Tham gia dự án trực tiếp cùng các chuyên gia IT Consultant`,
  },
  {
    id: 3,
    image:
      "https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/2021/01/Recruitment-l%C3%A0-g%C3%AC-3.jpg",
    title: "Tuyển dụng vị trí UX/UI",
    fromSalary: 1000000,
    toSalary: 1000000,
    description: `Open cho ứng viên tất cả level [Fresher - Senior] Số lượng tuyển: (02 ứng viên) 
        Range lương: Thỏa thuận Mô tả công việc Tham gia dự án trực tiếp cùng các chuyên gia IT Consultant`,
  },
  {
    id: 4,
    image:
      "https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/2021/01/Recruitment-l%C3%A0-g%C3%AC-3.jpg",
    title: "Tuyển dụng vị trí UX/UI",
    fromSalary: 1000000,
    toSalary: 1000000,
    description: `Open cho ứng viên tất cả level [Fresher - Senior] Số lượng tuyển: (02 ứng viên) 
        Range lương: Thỏa thuận Mô tả công việc Tham gia dự án trực tiếp cùng các chuyên gia IT Consultant`,
  },
  {
    id: 5,
    image:
      "https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/2021/01/Recruitment-l%C3%A0-g%C3%AC-3.jpg",
    title: "Tuyển dụng vị trí UX/UI",
    fromSalary: 1000000,
    toSalary: 1000000,
    description: `Open cho ứng viên tất cả level [Fresher - Senior] Số lượng tuyển: (02 ứng viên) 
        Range lương: Thỏa thuận Mô tả công việc Tham gia dự án trực tiếp cùng các chuyên gia IT Consultant`,
  },
  {
    id: 6,
    image:
      "https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/2021/01/Recruitment-l%C3%A0-g%C3%AC-3.jpg",
    title: "Tuyển dụng vị trí UX/UI",
    fromSalary: 1000000,
    toSalary: 1000000,
    description: `Open cho ứng viên tất cả level [Fresher - Senior] Số lượng tuyển: (02 ứng viên) 
        Range lương: Thỏa thuận Mô tả công việc Tham gia dự án trực tiếp cùng các chuyên gia IT Consultant`,
  },
  {
    id: 7,
    image:
      "https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/2021/01/Recruitment-l%C3%A0-g%C3%AC-3.jpg",
    title: "Tuyển dụng vị trí UX/UI",
    fromSalary: 1000000,
    toSalary: 1000000,
    description: `Open cho ứng viên tất cả level [Fresher - Senior] Số lượng tuyển: (02 ứng viên) 
        Range lương: Thỏa thuận Mô tả công việc Tham gia dự án trực tiếp cùng các chuyên gia IT Consultant`,
  },
];

const SkeletonItem = () => {
  return (
    <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
      <div className="p-2 recruit-item-skeleton">
        <Skeleton style={{ height: "200px" }} count={1} />
        <Skeleton style={{ height: "24px", width: "70%" }} className="mt-4" />
        <Skeleton style={{ height: "16px", width: "60%" }} className="mt-2" />
        <Skeleton style={{ height: "16px", width: "60%" }} className="mt-2" />
        <Skeleton style={{ height: "72px" }} className="mt-2" />
      </div>
    </div>
  );
};

function Recruit() {
  const dispatch = useAppDispatch();
  const [recruits, setRecruits] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getRecruits = async () => {
    try {
      setIsLoading(true);
      const result = await dispatch(
        getRecruitsByDomain({
          pageSize: 7,
          pageIndex: 1,
          status: 1,
          domain: "gofiber.vn",
        })
      ).unwrap();

      const { data } = result?.data;

      setRecruits(data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecruits();
  }, []);

  const render = {
    isLoading: (
      <div className="row">
        {[1, 2].map((item) => (
          <SkeletonItem key={item} />
        ))}
      </div>
    ),
    notLoading: (
      <>
        {recruits?.length === 0 ? (
          <div className="row justify-content-center">
            <div className="col col-12 col-md-6 col-lg-6">
              <div className="img">
                <Image
                  src={require("@/public/images/nodata.png")}
                  alt="Hiện tại không có bài viết1"
                />
              </div>
              <h4 className="h4 text-center">Hiện tại không có tuyển dụng</h4>
            </div>
          </div>
        ) : (
          <>
            <div className="row">
              {recruits.map((item, index) => (
                <RecruitItem
                  item={item}
                  wrapperClassName={`col ${
                    index === -1
                      ? "col-12 primary"
                      : "col-12 col-md-6 mt-4 secondary"
                  }`}
                  key={index}
                />
              ))}
            </div>
            <div className="row">
              <div className="mt-4 d-flex justify-content-center">
                <button
                  type="button"
                  className={`btn0 button_text_icon button_text_icon__white mt-4`}
                >
                  <span>Xem thêm</span>
                  <Image
                    style={{ marginLeft: "8px" }}
                    src={require("@/public/images/icons/right.svg")}
                    alt="Xem thêm"
                  />
                </button>
              </div>
            </div>
          </>
        )}
      </>
    ),
  };

  return (
    <>
      <Head>
        <title>Cơ hội việc làm với công ty công nghệ hàng đầu</title>
        <link rel="canonical" href="https://gofiber.vn/tuyen-dung" />
      </Head>
      <div id="recruit">
        <section>
          <BannerPage image={banner} name="Tuyển dụng" />
        </section>
        <div className="container">
          <section className="section-recruit">
            {isLoading ? render["isLoading"] : render["notLoading"]}
          </section>
        </div>
      </div>
    </>
  );
}

export default Recruit;
