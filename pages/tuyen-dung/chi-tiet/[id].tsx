import TextIconButton from '@/src/components/button/TextIconButton';
import RecruitItem from '@/src/containers/recruit/RecruitItem';
import { useAppDispatch } from '@/src/redux';
import { getRecruitById, getRelativeRecruits } from '@/src/redux/slice/recruitSlice';
import { formatNumber } from '@/src/utils';
import { Form } from 'antd';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const data = [
    {
        id: 1,
        image: 'https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/2021/01/Recruitment-l%C3%A0-g%C3%AC-3.jpg',
        title: 'Tuyển dụng vị trí UX/UI',
        fromSalary: 1000000,
        toSalary: 1000000,
        description: `Open cho ứng viên tất cả level [Fresher - Senior] Số lượng tuyển: (02 ứng viên) 
        Range lương: Thỏa thuận Mô tả công việc Tham gia dự án trực tiếp cùng các chuyên gia IT Consultant`
    },
    {
        id: 2,
        image: 'https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/2021/01/Recruitment-l%C3%A0-g%C3%AC-3.jpg',
        title: 'Tuyển dụng vị trí UX/UI',
        fromSalary: 1000000,
        toSalary: 1000000,
        description: `Open cho ứng viên tất cả level [Fresher - Senior] Số lượng tuyển: (02 ứng viên) 
        Range lương: Thỏa thuận Mô tả công việc Tham gia dự án trực tiếp cùng các chuyên gia IT Consultant`
    },
    {
        id: 3,
        image: 'https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/2021/01/Recruitment-l%C3%A0-g%C3%AC-3.jpg',
        title: 'Tuyển dụng vị trí UX/UI',
        fromSalary: 1000000,
        toSalary: 1000000,
        description: `Open cho ứng viên tất cả level [Fresher - Senior] Số lượng tuyển: (02 ứng viên) 
        Range lương: Thỏa thuận Mô tả công việc Tham gia dự án trực tiếp cùng các chuyên gia IT Consultant`
    },
]

const OverviewItem = ({ name, children, image }: { name: string, children: React.ReactNode, image: any }) => {
    return (
        <div className='overview_item mt-2 d-flex align-items-start'>
            <Image src={image} alt={name} />
            <span>
                {children}
            </span>
        </div>
    )
}

function RecruitDetail() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { id } = router.query;
    const [recruit, setRecruit] = useState<any>({});
    const [relativeRecruits, setRelativeRecruits] = useState<any[]>([]);

    const getRecruit = async (id: any) => {
        try {
            const result = await dispatch(getRecruitById(id)).unwrap();

            const { data } = result?.data;

            setRecruit(data || {})
        } catch (error) {
            console.log(error)
        }
    }

    const getRelatedRecruits = async (id: any) => {
        try {
            const params = {
                pageSize: 3,
                pageIndex: 1,
                domain: 'gofiber.vn',
                id
            }

            const result = await dispatch(getRelativeRecruits(params)).unwrap();

            const { data } = result?.data;

            setRelativeRecruits(data || []);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id) {
            getRecruit(id);
            getRelatedRecruits(id);
        }
    }, [id])

    return (
        <div id='recruit-detail'>
            <section>
                <div className='banner banner-page image-large hide-for-medium'>
                    <div className='fill'>
                        <div className='banner-bg fill'>
                            <div className='banner-layers'>
                                <div className='banner-link large' style={{ width: '60%' }}>
                                    <h3 className='h3 text-uppercase'>{recruit?.title}</h3>
                                    <div className='mt-2 text-icon-info d-flex align-items-start'>
                                        <Image src={require("@/public/images/icons/calendar.svg")} alt={"Thời gian"} />
                                        <span>{moment(recruit?.createdAt).format("DD/MM/YYYY")}</span>
                                    </div>
                                    <div className='mt-2 text-icon-info d-flex align-items-start'>
                                        <Image src={require("@/public/images/icons/dollar-circle.svg")} alt={"Thời gian"} />
                                        <span>Lương: <strong className="color_primary">{formatNumber(recruit?.fromSalary)} - {formatNumber(recruit?.toSalary)} VNĐ</strong></span>
                                    </div>
                                    <div className='mt-3'>
                                        <TextIconButton type='button' name='Nộp đơn ứng tuyển' />
                                    </div>
                                    <div className='d-flex'>
                                        <div className='link d-flex align-items-center justify-content-center mt-4'>
                                            <Link href='/'>Trang chủ</Link>
                                            <a className='mx-2'>{'>'}</a>
                                            <Link href='/tuyen-dung'>Tuyển dụng</Link>
                                            <a className='mx-2'>{'>'}</a>
                                            <a>Chi tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='banner banner-page image-medium show-for-medium'>
                    <div className='fill'>
                        <div className='banner-bg fill'>
                            <div className='banner-layers'>
                                <div className='banner-link large' style={{ width: '80%' }}>
                                    <h3 className='h3 text-uppercase'>{recruit?.title}</h3>
                                    <div className='mt-2 text-icon-info d-flex align-items-start'>
                                        <Image src={require("@/public/images/icons/calendar.svg")} alt={"Thời gian"} />
                                        <span>{moment().format("DD/MM/YYYY")}</span>
                                    </div>
                                    <div className='mt-2 text-icon-info d-flex align-items-start'>
                                        <Image src={require("@/public/images/icons/dollar-circle.svg")} alt={"Thời gian"} />
                                        <span>Lương: <strong className="color_primary">{formatNumber(recruit?.fromSalary)} - {formatNumber(recruit?.toSalary)} VNĐ</strong></span>
                                    </div>
                                    <div className='mt-3'>
                                        <TextIconButton type='button' name='Nộp đơn ứng tuyển' />
                                    </div>
                                    <div className='d-flex'>
                                        <div className='link d-flex align-items-center justify-content-center mt-4'>
                                            <Link href='/'>Trang chủ</Link>
                                            <a className='mx-2'>{'>'}</a>
                                            <Link href='/tuyen-dung'>Tuyển dụng</Link>
                                            <a className='mx-2'>{'>'}</a>
                                            <a>Chi tiết</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='container'>
                <section className='mt-4'>
                    <div className='row'>
                        <div className='col col-12 col-md-8'>
                            <div className='description_job'>
                                <div dangerouslySetInnerHTML={{
                                    __html: recruit?.content
                                }}>

                                </div>
                            </div>
                        </div>

                        <div className='col col-12 col-md-4'>
                            <div className='mt-3 mt-md-0 overview_job'>
                                <h4 className='h4 title'>Tổng quan về công việc</h4>
                                <div className='divider'></div>
                                <div>
                                    <div className='overview_name'>Thu nhập</div>
                                    <OverviewItem image={require("@/public/images/icons/empty-wallet-add.svg")} name='Thu nhập'>
                                        Lên tới: <strong className='color_primary'>{formatNumber(recruit?.toSalary)} VNĐ</strong>
                                    </OverviewItem>
                                </div>
                                <div className='divider'></div>
                                <div>
                                    <div className='overview_name'>Số lượng cần tuyển</div>
                                    <OverviewItem image={require("@/public/images/icons/profile-2user.svg")} name='Số lượng cần tuyển'>
                                        Lên tới: <strong className='color_primary'>{recruit?.numberMember} Ứng viên</strong>
                                    </OverviewItem>
                                </div>
                                <div className='divider'></div>
                                <div>
                                    <div className='overview_name'>Địa điểm làm việc</div>
                                    <OverviewItem image={require("@/public/images/icons/location.svg")} name='Địa điểm làm việc'>
                                        {recruit?.location}
                                    </OverviewItem>
                                </div>
                                <div className='divider'></div>
                                <div>
                                    <div className='overview_name'>Hạn ứng tuyển</div>
                                    <OverviewItem image={require("@/public/images/icons/clock.svg")} name='Hạn ứng tuyển'>
                                        {moment(recruit?.expireDate).format("DD/MM/YYYY")}
                                    </OverviewItem>
                                </div>
                            </div>

                            <div className='mt-3 overview_job'>
                                <h4 className='h4 title'>Thông tin liên hệ</h4>
                                <div className='divider'></div>
                                <div>
                                    <div className='overview_name'>Người liên hệ</div>
                                    <OverviewItem image={require("@/public/images/icons/profile-2user.svg")} name='Thu nhập'>
                                        <strong className='color_primary'>{recruit?.contact?.name}</strong>
                                    </OverviewItem>
                                </div>
                                <div className='divider'></div>
                                <div>
                                    <div className='overview_name'>Số điện thoại</div>
                                    <OverviewItem image={require("@/public/images/icons/profile-2user.svg")} name='Số điện thoại'>
                                        {recruit?.contact?.phoneNumber}
                                    </OverviewItem>
                                </div>
                                <div className='divider'></div>
                                <div>
                                    <div className='overview_name'>Email</div>
                                    <OverviewItem image={require("@/public/images/icons/sms.svg")} name='Email'>
                                        {recruit?.contact?.email}
                                    </OverviewItem>
                                </div>
                            </div>
                        </div>

                        <div className='col col-12 col-md-8 mt-3'>
                            <div className='application_job'>
                                <h4 className='h4 title'>Nộp đơn ứng tuyển</h4>
                                <div className='mt-4'>
                                    <label className='d-block'>
                                        Cv/Sơ yếu lý lịch
                                    </label>
                                    <button type='button' className='btn0 btn-upload mt-2'>Click để tải lên CV/ Sơ yếu lí lịch của bạn</button>
                                </div>
                                <div className='mt-4'>
                                    <label className='d-block'>
                                        Họ và tên <strong style={{ color: 'red' }}>*</strong>
                                    </label>
                                    <input className='mt-2' />
                                </div>
                                <div className='mt-4'>
                                    <label className='d-block'>
                                        Email <strong style={{ color: 'red' }}>*</strong>
                                    </label>
                                    <input className='mt-2' />
                                </div>
                                <div className='mt-4'>
                                    <label className='d-block'>
                                        Số điện thoại <strong style={{ color: 'red' }}>*</strong>
                                    </label>
                                    <input className='mt-2' />
                                </div>
                                <button onClick={() => null} type='submit' className='btn0 btn-application mt-4 '>
                                    Nộp hồ sơ ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    relativeRecruits?.length > 0 && <section className='section-recruit'>
                        <div className='row'>
                            <h4 className='h4'>Các bài đăng tuyển dụng khác</h4>
                        </div>
                        <div className='row'>
                            {
                                relativeRecruits.map((item, index) => (
                                    <RecruitItem item={item} wrapperClassName={`col col-12 col-sm-6 col-lg-4 secondary`} key={index} />
                                ))
                            }
                        </div>
                    </section>
                }
            </div>
        </div>
    )
}

export default RecruitDetail