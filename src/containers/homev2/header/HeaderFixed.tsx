import { useAppDispatch } from "@/src/redux";
import { updateDrawer } from "@/src/redux/slice";
import { ICON, ICON_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { render } from "react-dom";
import AdvanceMenu from "./AdvanceMenu";

type Props = {
  visible: boolean;
  menuLv2: any[];
  visibleAdvanceMenu: boolean;
  onChangeIsibleAdvanceMenu: (e: boolean) => void;
};

function HeaderFixed({
  visible,
  menuLv2,
  onChangeIsibleAdvanceMenu,
  visibleAdvanceMenu,
}: Props) {
  const dispatch = useAppDispatch();

  return (
    <div id="header-fixed" className={`${visible ? "show" : ""}`}>
      <div className="container">
        <div className="position-relative hide-for-968">
          <div className="d-flex align-items-center justify-content-between">
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
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onChangeIsibleAdvanceMenu(!visibleAdvanceMenu);
                    }}
                  >
                    Sản phẩm
                    <Icon
                      style={{ width: "22px", height: "22px" }}
                      icon={ICON.DOWN}
                    />
                  </a>
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
                <img
                  src={ICON_IMAGE.SEARCH}
                  width={22}
                  height={22}
                  alt="Search"
                />
              </button>
            </div>
          </div>
          <AdvanceMenu
            onChange={onChangeIsibleAdvanceMenu}
            visible={visibleAdvanceMenu}
          />
        </div>

        <div className="menu-lv2-medium show-for-968">
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
              <img
                src={ICON_IMAGE.SEARCH}
                width={16}
                height={16}
                alt="Search"
              />
            </button>
            <button
              onClick={() => dispatch(updateDrawer(true))}
              className="btn0 btn-menu"
            >
              <Icon icon={ICON.MENU} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderFixed;
