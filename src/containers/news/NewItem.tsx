import { formatNumber, RECRUIT_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  wrapperClassName: string;
  item: any;
  cateList?: any
  key?: any
};
const getTime = (time?: any, like?: any, view?: any) => {
  const date = new Date(time);
  const dateString = date.toLocaleDateString(); // returns "3/6/2023" (or equivalent in your local time zone)
  const timeString = date.toLocaleTimeString(); // returns "9:32:50 AM" (or equivalent in your local time zone)
  const weekday = date.toLocaleString('vi-VN', { weekday: 'long' });
  return dateString
};

function NewItem({ wrapperClassName, item, cateList, key }: Props) {
  return (
    <div className={`${wrapperClassName} `}>
      <div style={{ height: "auto" }} className="recruit-item mt-4">
        <Link className="a" href={`/${item.slug}`}>
          <div className="img">
            <img
              src={item.thumb || RECRUIT_IMAGE.ILLUSTRATION}
              alt={item.title}
              className="small"
              width={3000}
              height={100}
            />
          </div>
          <div className="recruit-info mx-4 mt-3 pb-3">
            <div className=" number_line_1  mb-2">{getTime(item.createdAt)}</div>
            <div className="title number_line_1  ">{item.title}</div>




            <p className="mt-2 mb-0 number_line_3" dangerouslySetInnerHTML={{ __html: item?.description }}></p>

            {/* <div
              className="d-flex align-items-center mt-3 see-more  a"
            >
              <span>Xem thêm</span>
              <Icon icon={"ph:caret-circle-right-fill"} />
            </div> */}
          </div>
          <div className="forCate">

            {cateList?.map((item: any, index: any) => (
              <>
                <Link href={`/tin-tuc/${item?.slug}`} >

                  <div className=" number_line_1  ">{item?.name}</div>
                </Link>
              </>
            ))}
          </div >
        </Link>
      </div>
    </div>
  );
}

export default NewItem;
