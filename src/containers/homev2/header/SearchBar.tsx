import { useAppSelector } from "@/src/redux";
import { ICON_IMAGE } from "@/src/utils";
import React from "react";

function SearchBar() {
  const { searchValue, visibleSearch } = useAppSelector((state) => state.home);

  return (
    <div className={`search-bar ${visibleSearch ? "show" : ""}`}>
      <div className="wrapper-search-bar">
        <input placeholder="Tìm kiếm ngay" />
        <button className="btn0">
          <img src={ICON_IMAGE.SEARCH} width={18} height={18} alt="Search" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
