import { useAppDispatch, useAppSelector } from "@/src/redux";
import { updateDrawer, updateVisibleSearch } from "@/src/redux/slice";
import { ICON, ICON_IMAGE } from "@/src/utils";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";

function HeaderMedium() {
  const dispatch = useAppDispatch();
  const { drawer } = useAppSelector((state) => state.home);
  const { visibleSearch } = useAppSelector((state) => state.home);

  const handleChangeVisibleSearch = (value: boolean) => {
    dispatch(updateVisibleSearch(value));
  };

  return (
    <div
      className={`menu-lv2 menu-lv2-medium show-for-968 ${
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
      <div
        className="position-relative"
        style={{ width: "45%", background: "red" }}
      >
        <SearchBar />
      </div>
      <div>
        <button
          onClick={() => handleChangeVisibleSearch(!visibleSearch)}
          className="btn0 btn-search hide-for-small"
        >
          {visibleSearch ? (
            <Icon
              style={{ width: "22px", height: "22px" }}
              icon={ICON.SEARCH_OFF}
            />
          ) : (
            <img src={ICON_IMAGE.SEARCH} width={16} height={16} alt="Search" />
          )}
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
