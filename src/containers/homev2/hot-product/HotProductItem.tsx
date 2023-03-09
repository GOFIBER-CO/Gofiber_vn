import TextIconButton from "@/src/components/button/TextIconButton";
import { useAppDispatch } from "@/src/redux";
import { updateBuyPackage } from "@/src/redux/slice";
import { formatNumber, ICON, ICON_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/src/utils/animation";


type Props = {
  item: any;
};

const Rate = ({ rate }: { rate?: number }) => {
  const render = {
    none: <></>,
    has: (
      <>
        {Array.from({ length: rate || 0 }).map((_, index: number) => (
          <div className="rate-item" key={index}>
            <Icon icon={ICON.STAR} />
          </div>
        ))}
      </>
    ),
  };

  return <div className="rate">{!rate ? render["none"] : render["has"]}</div>;
};

function HotProductItem({ item }: Props) {
  const dispatch = useAppDispatch();

  const handleChooseProduct = (item: any) => {

    dispatch(
      updateBuyPackage({
        count: 1,
        item,
      })
    );
  };

  return (


    <div className="col col-12 col-md-6 col-lg-3 py-2 px-2 px-xl-4 mt-4">


      <div className="hot-product-item">
        <div className="hot-product-item-wrapper position-relative">
          <img
            style={item?.style ? item?.style : {}}
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
          />

          <div className="title " >{item.name}</div>
          <div className="extra" >{item.extra}</div>
          <div className="price">{formatNumber(item.price)} VND / Tháng</div>
          <div className="price-discount">
            {item?.discount && `${formatNumber(item?.startPrice)} VND / Tháng`}
          </div>

          <div style={{ marginTop: "50px" }}>
            <Link
              className="a"
              onClick={() => handleChooseProduct(item)}
              href={item?.link}
            >
              <TextIconButton
                className="btn-primary-to-white"
                name="Đặt hàng"
                styles={{ boxShadow: "none" }}
              />
            </Link>
          </div>
          <Rate rate={item?.rate || 0} />
          {item?.discount && <div className="discount">{item?.discount}%</div>}
        </div>
      </div>
    </div>


  );
}

export default HotProductItem;
