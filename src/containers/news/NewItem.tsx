import { formatNumber, RECRUIT_IMAGE } from "@/src/utils";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  wrapperClassName: string;
  item: any;
};

function NewItem({ wrapperClassName, item }: Props) {
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
            <div className="title number_line_1  ">{item.title}</div>
            <p className="mt-2 mb-0 number_line_3" dangerouslySetInnerHTML={{ __html: item?.description }}></p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NewItem;
