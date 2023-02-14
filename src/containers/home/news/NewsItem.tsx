import { HOME_IMAGE } from "@/src/utils";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  item: any;
};

function NewsItem({ item }: Props) {
  return (
    <div className="col col-12 col-sm-6 col-lg-4" data-aos="fade-up">
      <div className="news_item">
        <Link href={`/${item?.slug}`}>
          <div className="box-image">
            <div className="image-cover">
              <img
                style={{
                  borderRadius: "10px 10px 0px 0px",
                  minHeight: "300px",
                  maxHeight: "300px",
                }}
                className="img"
                src={item?.thumb || HOME_IMAGE.NEWS}
                width={500}
                height={500}
                alt={item?._id}
              />
            </div>
          </div>
          <div className="wrapper_content">
            <div className="time">
              {moment(item?.createdAt).format("DD/MM/YYYY")}
            </div>
            <div className="title mt-2 number_line_2">{item.title}</div>
          </div>
        </Link>
        <div className={`type news`}>{"Tin tức"}</div>
      </div>
    </div>
  );
}

export default NewsItem;
