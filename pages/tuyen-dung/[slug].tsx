import { fetchApi } from "@/src/api";
import TextIconButton from "@/src/components/button/TextIconButton";
import RecruitItem from "@/src/containers/recruit/RecruitItem";
import { useAppDispatch } from "@/src/redux";
import {
  getRecruitById,
  getRecruitBySlug,
  getRelativeRecruits,
} from "@/src/redux/slice/recruitSlice";
import { convertObjectToQuery, formatNumber } from "@/src/utils";
import { fromTuyenDungvalidationSchema } from "@/src/utils/fromvalidation";
import moment from "moment";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
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
];

const OverviewItem = ({
  name,
  children,
  image,
}: {
  name: string;
  children: React.ReactNode;
  image: any;
}) => {
  return (
    <div className="overview_item mt-2 d-flex align-items-start">
      <Image src={image} alt={name} />
      <span>{children}</span>
    </div>
  );
};

type Props = {
  title: any;
};

function RecruitDetail({ title }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const [recruit, setRecruit] = useState<any>({});
  const [typeImage, setTypeImage] = useState<any>("");
  const [resMessage, setResMessage] = useState<any>("");
  const [loadingState, setLoadingState] = useState<any>(null)
  useState(() => {
    const handleChangeUrl = async () => {
      if (slug == "nhan-vien-it-cty-gofiber") {
        setTypeImage("for-IT")
      } else if (slug == "nhan-vien-content-seo-cty-gofiber") {
        setTypeImage("for-content-seo")
      } else if (slug == "mobile-developer") {
        setTypeImage("for-mobile")
      } else if (slug == "system-admin-cty-gofiber") {
        setTypeImage("for-system")
      } else if (slug == "nhan-vien-sale-cty-gofiber") {
        setTypeImage("for-sales")
      } else if (slug == "nhan-vien-seo-cty-gofiber") {
        setTypeImage("for-seo")

      }
      else {
        setTypeImage("for-default")
      }
    }
    handleChangeUrl()

  })

  const [relativeRecruits, setRelativeRecruits] = useState<any[]>([]);
  const [file, setFile] = useState<any>(null);
  const options = [
    { value: "", text: "--Bạn hãy chọn vị trí--" },
    { value: "SEO", text: "SEO" },
    { value: "Developer", text: "Developer" },
    { value: "Hr", text: "Hr" },
    { value: "Sales", text: "Sales" },
  ];
  const handleSubmit = async (values: any) => {
    const Baseurl = ""
    var formData = new FormData();
    formData.append("name", values.name);
    formData.append("number", values.number);
    formData.append("file", values.file);
    formData.append("email", values.number);
    formData.append("role", values.role);


    setLoadingState(true)
    await axios({
      url: "https://api.gofiber.vn/api/uploadCV",
      method: "POST", data: formData, headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    ).then(response => {
      setResMessage(response.data.result)
    }).catch(error => {

      setResMessage(error)

    });
    setLoadingState(false)
    // try {
    //   const response = await fetch("/upload", {
    //     method: "POST",
    //     body: formData,
    //   });

    // } catch (error) {
    // }
  };

  const getRecruit = async (slug: any) => {
    try {
      const params = {
        slug,
        domain: process.env.NEXT_PUBLIC_DOMAIN,
      };
      const result = await dispatch(getRecruitBySlug(params)).unwrap();

      const { data } = result?.data;

      setRecruit(data || {});
    } catch (error) {
      console.log(error);
    }
  };

  const getRelatedRecruits = async (slug: any) => {
    try {
      const params = {
        pageSize: 3,
        pageIndex: 1,
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        slug,
      };

      const result = await dispatch(getRelativeRecruits(params)).unwrap();

      const { data } = result?.data;

      setRelativeRecruits(data || []);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (slug) {
      getRecruit(slug);
      getRelatedRecruits(slug);
    }
  }, [slug]);


  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href="https://gofiber.vn/tuyen-dung" />
      </Head>
      <div id="recruit-detail">
        <section>
          <div className={`banner  banner-page  image-large-${typeImage} hide-for-medium`} >
            <div className="fill">
              <div className="banner-bg fill">
                <div className="banner-layers">
                  <div className="banner-link large" style={{ width: "60%", marginLeft: "60px" }}>
                    <h1 className="h1 text-uppercase" style={{ marginTop: "30px" }}>{recruit?.title}</h1>
                    <div className="mt-2 text-icon-info d-flex align-items-start">
                      <Image
                        src={require("@/public/images/icons/calendar.svg")}
                        alt={"Thời gian"}
                      />
                      <span>
                        {moment(recruit?.createdAt).format("DD/MM/YYYY")}
                      </span>
                    </div>
                    <div className="mt-2 text-icon-info d-flex align-items-start">
                      <Image
                        src={require("@/public/images/icons/dollar-circle.svg")}
                        alt={"Thời gian"}
                      />
                      <span>
                        Lương:{" "}
                        <strong className="color_primary">
                          {formatNumber(recruit?.fromSalary)} -{" "}
                          {formatNumber(recruit?.toSalary)} VNĐ
                        </strong>
                      </span>
                    </div>
                    <div className="mt-3">
                      <TextIconButton type="button" name="Nộp đơn ứng tuyển" />
                    </div>
                    <div className="d-flex">
                      <div className="link d-flex align-items-center justify-content-center mt-4">
                        <Link className="a" href="/">
                          Trang chủ
                        </Link>
                        <a className="a mx-2 a">{">"}</a>
                        <Link className="a" href="/tuyen-dung">
                          Tuyển dụng
                        </Link>
                        <a className="a mx-2">{">"}</a>
                        <a>Chi tiết</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`banner banner-page image-medium-${typeImage} show-for-medium  `}>
            <div className="fill">
              <div className="banner-bg fill">
                <div className="banner-layers">
                  <div className="banner-link large" style={{ width: "80%" }}>
                    <h3 className="h3 text-uppercase">{recruit?.title}</h3>
                    <div className="mt-2 text-icon-info d-flex align-items-start">
                      <Image
                        src={require("@/public/images/icons/calendar.svg")}
                        alt={"Thời gian"}
                      />
                      <span>{moment().format("DD/MM/YYYY")}</span>
                    </div>
                    <div className="mt-2 text-icon-info d-flex align-items-start">
                      <Image
                        src={require("@/public/images/icons/dollar-circle.svg")}
                        alt={"Thời gian"}
                      />
                      <span>
                        Lương:{" "}
                        <strong className="color_primary">
                          {formatNumber(recruit?.fromSalary)} -{" "}
                          {formatNumber(recruit?.toSalary)} VNĐ
                        </strong>
                      </span>
                    </div>
                    <div className="mt-3">
                      <TextIconButton type="button" name="Nộp đơn ứng tuyển" />
                    </div>
                    <div className="d-flex">
                      <div className="link d-flex align-items-center justify-content-center mt-4">
                        <Link className="a" href="/">
                          Trang chủ
                        </Link>
                        <a className="mx-2 a">{">"}</a>
                        <Link className="a" href="/tuyen-dung">
                          Tuyển dụng
                        </Link>
                        <a className="mx-2 a">{">"}</a>
                        <a>Chi tiết</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`banner banner-page image-medium-${typeImage} show-for-small hide-for-medium hide-for-large`}>
            <div className="fill">
              <div className="banner-bg fill">
                <div className="banner-layers">
                  <div className="banner-link large" style={{ width: "80%" }}>
                    <h3 className="h3 text-uppercase">{recruit?.title}</h3>
                    <div className="mt-2 text-icon-info d-flex align-items-start">
                      <Image
                        src={require("@/public/images/icons/calendar.svg")}
                        alt={"Thời gian"}
                      />
                      <span>{moment().format("DD/MM/YYYY")}</span>
                    </div>
                    <div className="mt-2 text-icon-info d-flex align-items-start">
                      <Image
                        src={require("@/public/images/icons/dollar-circle.svg")}
                        alt={"Thời gian"}
                      />
                      <span>
                        Lương:{" "}
                        <strong className="color_primary">
                          {formatNumber(recruit?.fromSalary)} -{" "}
                          {formatNumber(recruit?.toSalary)} VNĐ
                        </strong>
                      </span>
                    </div>
                    <div className="mt-3">
                      <TextIconButton type="button" name="Nộp đơn ứng tuyển" />
                    </div>
                    <div className="d-flex">
                      <div className="link d-flex align-items-center justify-content-center mt-4">
                        <Link className="a" href="/">
                          Trang chủ
                        </Link>
                        <a className="mx-2 a">{">"}</a>
                        <Link className="a" href="/tuyen-dung">
                          Tuyển dụng
                        </Link>
                        <a className="mx-2 a">{">"}</a>
                        <a>Chi tiết</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <div className="container">
          <section className="mt-4">
            <div className="row">
              <div className="col col-12 col-md-8">
                <div className="description_job">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: recruit?.content,
                    }}
                  ></div>
                </div>
              </div>

              <div className="col col-12 col-md-4">
                <div className="mt-3 mt-md-0 overview_job">
                  <h4 className="h4 title">Tổng quan về công việc</h4>
                  <div className="divider"></div>
                  <div>
                    <div className="overview_name">Thu nhập</div>
                    <OverviewItem
                      image={require("@/public/images/icons/empty-wallet-add.svg")}
                      name="Thu nhập"
                    >
                      Lên tới:{" "}
                      <strong className="color_primary">
                        {formatNumber(recruit?.toSalary)} VNĐ
                      </strong>
                    </OverviewItem>
                  </div>
                  <div className="divider"></div>
                  <div>
                    <div className="overview_name">Số lượng cần tuyển</div>
                    <OverviewItem
                      image={require("@/public/images/icons/profile-2user.svg")}
                      name="Số lượng cần tuyển"
                    >
                      Lên tới:{" "}
                      <strong className="color_primary">
                        {recruit?.numberMember} Ứng viên
                      </strong>
                    </OverviewItem>
                  </div>
                  <div className="divider"></div>
                  <div>
                    <div className="overview_name">Địa điểm làm việc</div>
                    <OverviewItem
                      image={require("@/public/images/icons/location.svg")}
                      name="Địa điểm làm việc"
                    >
                      {recruit?.location}
                    </OverviewItem>
                  </div>
                  <div className="divider"></div>
                  <div>
                    <div className="overview_name">Hạn ứng tuyển</div>
                    <OverviewItem
                      image={require("@/public/images/icons/clock.svg")}
                      name="Hạn ứng tuyển"
                    >
                      {moment(recruit?.expireDate).format("DD/MM/YYYY")}
                    </OverviewItem>
                  </div>
                </div>

                <div className="mt-3 overview_job">
                  <h4 className="h4 title">Thông tin liên hệ</h4>
                  <div className="divider"></div>
                  <div>
                    <div className="overview_name">Người liên hệ</div>
                    <OverviewItem
                      image={require("@/public/images/icons/profile-2user.svg")}
                      name="Thu nhập"
                    >
                      <strong className="color_primary">
                        {recruit?.contact?.name}
                      </strong>
                    </OverviewItem>
                  </div>
                  <div className="divider"></div>
                  <div>
                    <div className="overview_name">Số điện thoại</div>
                    <OverviewItem
                      image={require("@/public/images/icons/profile-2user.svg")}
                      name="Số điện thoại"
                    >
                      {recruit?.contact?.phoneNumber}
                    </OverviewItem>
                  </div>
                  <div className="divider"></div>
                  <div>
                    <div className="overview_name">Email</div>
                    <OverviewItem
                      image={require("@/public/images/icons/sms.svg")}
                      name="Email"
                    >
                      {recruit?.contact?.email}
                    </OverviewItem>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-md-8 mt-3">
                <Formik
                  initialValues={{
                    file: null as any,
                    role: "" as string,
                    name: "" as string,
                    number: "" as string,
                    email: "" as string,
                  }}
                  onSubmit={handleSubmit}
                  validationSchema={fromTuyenDungvalidationSchema as any}
                >
                  {({
                    values,
                    errors,
                    handleChange,
                    touched,
                    isSubmitting,
                    isValid,
                    setFieldValue,
                  }) => (
                    <>
                      <Form>
                        <div className="application_job">
                          <h4 className="h4 title">Nộp đơn ứng tuyển</h4>
                          <div className="mt-10">
                            <label className="d-block">
                              Cv/Sơ yếu lý lịch (pdf, jpg, png,jpeg, docx, doc){" "}
                              {errors.file && (
                                <strong style={{ color: "red" }}>*</strong>
                              )}
                            </label>
                            <input
                              type="file"
                              className="btn0 btn-upload mt-2 "
                              onChange={(event: any) => {
                                setFieldValue("file", event?.target?.files[0]);
                              }}
                              style={{
                                paddingBottom: "60px",
                                paddingLeft: "40px",
                              }}
                            />
                          </div>
                          {errors.file && (
                            <div className="mx-2">
                              {" "}
                              <span className="text-danger font-weight-bold">
                                {errors.file as any}
                              </span>
                            </div>
                          )}
                          <div className="mt-4">
                            <label className="d-block">
                              Chọn Vị Trí{" "}
                              {touched.role && errors.role && (
                                <strong style={{ color: "red" }}>*</strong>
                              )}
                            </label>
                            <select
                              name="role"
                              className="form-select"
                              aria-label="Default select example"
                              value={values.role}
                              onChange={handleChange}
                            >
                              {options.map((option) => (
                                <option
                                  key={option.value}
                                  value={option.value}
                                  label={option.value}
                                >
                                  {option.text}
                                </option>
                              ))}
                            </select>
                            {touched.role && errors.role && (
                              <div className="mx-2">
                                {" "}
                                <span className="text-danger font-weight-bold">
                                  {errors.name}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="mt-4">
                            <label className="d-block">
                              Họ và tên{" "}
                              {errors.name && (
                                <strong style={{ color: "red" }}>*</strong>
                              )}
                            </label>
                            <Field name="name" type="text" className="mt-2" />
                            {touched.name && errors.name && (
                              <div className="mx-2">
                                {" "}
                                <span className="text-danger font-weight-bold">
                                  {errors.name}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="mt-2">
                            <label className="d-block">
                              Email{" "}
                              {errors.email && (
                                <strong style={{ color: "red" }}>*</strong>
                              )}
                            </label>
                            <Field name="email" type="text" className="mt-2" />
                          </div>
                          {touched.email && errors.email && (
                            <div className="mx-2">
                              {" "}
                              <span className="text-danger font-weight-bold">
                                {errors.email}
                              </span>
                            </div>
                          )}
                          <div className="mt-4">
                            <label className="d-block">
                              Số điện thoại{" "}
                              {errors.number && (
                                <strong style={{ color: "red" }}>*</strong>
                              )}
                            </label>
                            <Field name="number" type="text" className="mt-2" />
                            {touched.number && errors.number && (
                              <div className="mx-2">
                                {" "}
                                <span className="text-danger font-weight-bold">
                                  {errors.number}
                                </span>
                              </div>
                            )}
                          </div>
                          {resMessage !== "" ?
                            <div className=" my-3"> <span className={`mx-auto text-success  font-weight-bold`}>
                              {resMessage}
                            </span></div> : null}
                          <button
                            disabled={!isValid}

                            onClick={(e) => null}
                            type="submit"
                            className={`btn0 btn-application mt-3  ${!isValid && "opacity-25 cursor-not-allowed"} mt - 4`}
                          >
                            Đang bài vào đây
                          </button>
                        </div>
                      </Form>
                    </>
                  )}
                </Formik>
              </div>
            </div>
          </section>
          {relativeRecruits?.length > 0 && (
            <section className="section-recruit">
              <div className="row">
                <h4 className="h4">Các bài đăng tuyển dụng khác</h4>
              </div>
              <div className="row">
                {relativeRecruits.map((item, index) => (
                  <RecruitItem
                    item={item}
                    wrapperClassName={`col col - 12 col - sm - 6 col - lg - 4 secondary`}
                    key={index}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default RecruitDetail;

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  try {
    const { slug } = query;
    const params: any = {
      slug,
      domain: process.env.NEXT_PUBLIC_DOMAIN,
    };

    const url = `/ recruits / getRecruitBySlug` + convertObjectToQuery(params);

    const response = await fetchApi().get(url);
    const title = response?.data?.data?.title;

    if (!title) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: {
        ...(title ? { title } : {}),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
}
