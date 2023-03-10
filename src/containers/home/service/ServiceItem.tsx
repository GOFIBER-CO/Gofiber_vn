import TextIconButton from "@/src/components/button/TextIconButton";
import { ICON } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  item: any;
};
function ServiceItem({ item }: Props) {
  return (
    <div className="service_item mt-2">
      <div className="img text-center">
        <img width={500} height={500} src={item.image} alt={item.title} />
      </div>
      <h4 className="mt-2">{item.title}</h4>
      <p className="font_size_14 font_weight_500">{item.content1}</p>
      <p className="font_size_14 font_weight_500">{item.content2}</p>
      <Link className="a" href="/">
        <TextIconButton
          styles={{ boxShadow: "none" }}
          className="mt-2"
          icon={ICON.RIGHT}
          name="Xem thêm"
          color="white"
        />
      </Link>
    </div>
  );
}

export default ServiceItem;
