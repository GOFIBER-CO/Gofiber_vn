import { ICON_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

type Props = {
  item: any;
};

function BasicServiceItem({ item }: Props) {
  return (
    <div className="col col-12 col-md-6 col-lg-4 py-2 px-2 px-xl-4 mt-4">
      <div className="basic-service-item">
        <div className="basic-service-item-wrapper">
          <div className="img">
            <img src={item?.image} alt={item?.name} />
          </div>
          <div className="mt-3 name">{item?.name}</div>
          <div className="mt-3 content number_line_3">
            Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret
            reprehendunt.
          </div>
          <div className="see-more text-center">
            <Link
              href={item?.link}
              className="d-flex align-items-center justify-content-center"
            >
              <span>Xem thêm</span>
              <Icon icon={"ph:caret-circle-right-fill"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicServiceItem;
