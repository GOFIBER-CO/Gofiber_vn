import { useAppDispatch, useAppSelector } from "@/src/redux";
import { updateVisibleSearch } from "@/src/redux/slice";
import { ICON, ICON_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AdvanceMenu from "./AdvanceMenu";
import SearchBar from "./SearchBar";

type Props = {
  menuLv2: any[];
};

function HeaderLarge({ menuLv2 }: Props) {
  const dispatch = useAppDispatch();
  const { drawer } = useAppSelector((state) => state.home);
  const { visibleSearch } = useAppSelector((state) => state.home);
  const [visible, setVisible] = useState<boolean>(false);

  const handleChangeVisible = (value: boolean) => {
    setVisible(value);
  };

  const handleChangeVisibleSearch = (value: boolean) => {
    dispatch(updateVisibleSearch(value));
  };

  return (
    <div
      className={`menu-lv2 hide-for-968 position-relative ${
        drawer ? "d-none" : ""
      }`}
    >
      <Link className="a" href="/">
        <Image
          id="logo"
          className="logo-left logo"
          src={require("@/public/images/logo.png")}
          alt=""
        />
      </Link>
      <div className="position-relative">
        <ul className="ul d-flex align-items-center">
          <li className="menu-item">
            <Link
              className="a"
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
              <Link className="a" href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <SearchBar />
      </div>
      <div>
        <button
          onClick={() => handleChangeVisibleSearch(!visibleSearch)}
          className="btn0 btn-search"
        >
          {visibleSearch ? (
            <Icon icon={ICON.SEARCH_OFF} />
          ) : (
            <img src={ICON_IMAGE.SEARCH} width={22} height={22} alt="Search" />
          )}
        </button>
      </div>
      <AdvanceMenu onChange={handleChangeVisible} visible={visible} />
    </div>
  );
}

export default HeaderLarge;
