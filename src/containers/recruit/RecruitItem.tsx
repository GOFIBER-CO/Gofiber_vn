import { formatNumber, RECRUIT_IMAGE } from '@/src/utils';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    wrapperClassName: string;
    item: any;
}

function RecruitItem({ wrapperClassName, item }: Props) {
    return (
        <div className={`${wrapperClassName}`}>
            <div className='recruit-item mt-4'>
                <Link href={`/tuyen-dung/chi-tiet/${item._id}`}>
                    <div className='img'>
                        <Image src={item.image || RECRUIT_IMAGE.ILLUSTRATION} alt={item.title} width={3000}
                            height={100} />
                    </div>
                    <div className='recruit-info'>
                        <div className='title number_line_1'>{item.title}</div>
                        <div className='mt-2 text-icon-info d-flex align-items-start'>
                            <Image src={require("@/public/images/icons/calendar.svg")} alt={"Thời gian"} />
                            <span>Hạn nộp hồ sơ: {moment(item?.expireDate).format("DD/MM/YYYY")}</span>
                        </div>
                        <div className='mt-2 text-icon-info d-flex align-items-start'>
                            <Image src={require("@/public/images/icons/dollar-circle.svg")} alt={"Lương"} />
                            <span>Lương: <strong className="color_primary">{formatNumber(item.fromSalary)} - {formatNumber(item.toSalary)} VNĐ</strong></span>
                        </div>
                        <p className='mt-2 mb-0'>
                            {item.description}
                        </p>
                    </div>
                </Link>

            </div>
        </div >
    )
}

export default RecruitItem