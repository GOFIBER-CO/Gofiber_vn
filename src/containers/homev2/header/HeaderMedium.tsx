import { useAppDispatch, useAppSelector } from "@/src/redux";
import { updateDrawer } from "@/src/redux/slice";
import { ICON, ICON_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeaderMedium() {
  const dispatch = useAppDispatch();

  return (
    <div className="menu-lv2 menu-lv2-medium show-for-968">
      <Link href="/">
        <Image
          id="logo"
          className="logo-left logo"
          src={require("@/public/images/logo.png")}
          alt=""
        />
      </Link>
      <div>
        <button className="btn0 btn-search hide-for-small">
          <img src={ICON_IMAGE.SEARCH} width={16} height={16} alt="Search" />
        </button>
        <button
          onClick={() => dispatch(updateDrawer(true))}
          className="btn0 btn-menu"
        >
          <Icon icon={ICON.MENU} />
        </button>
      </div>
    </div>
  );
}

export default HeaderMedium;
