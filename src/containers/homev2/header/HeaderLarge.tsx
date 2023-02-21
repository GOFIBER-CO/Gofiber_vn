import { ICON, ICON_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AdvanceMenu from "./AdvanceMenu";

type Props = {
  menuLv2: any[];
};

function HeaderLarge({ menuLv2 }: Props) {
  const [visible, setVisible] = useState<boolean>(false);

  const handleChangeVisible = (value: boolean) => {
    setVisible(value);
  };

  return (
    <div className="menu-lv2 hide-for-968 position-relative">
      <Link href="/">
        <Image
          id="logo"
          className="logo-left logo"
          src={require("@/public/images/logo.png")}
          alt=""
        />
      </Link>
      <div>
        <ul className="ul d-flex align-items-center">
          <li className="menu-item">
            <Link
              onClick={(e) => {
                e.stopPropagation();
                setVisible(!visible);
              }}
              href=""
            >
              Sản phẩm
              <Icon
                style={{ width: "24px", height: "24px" }}
                icon={ICON.DOWN}
              />
            </Link>
          </li>
          {menuLv2.map((item) => (
            <li className="menu-item" key={item.id}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="btn0 btn-search">
          <img src={ICON_IMAGE.SEARCH} width={22} height={22} alt="Search" />
        </button>
      </div>
      <AdvanceMenu onChange={handleChangeVisible} visible={visible} />
    </div>
  );
}

export default HeaderLarge;
