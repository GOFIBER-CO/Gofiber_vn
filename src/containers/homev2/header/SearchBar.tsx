import { useAppDispatch, useAppSelector } from "@/src/redux";
import { updateSearchValue } from "@/src/redux/slice";
import { ICON_IMAGE } from "@/src/utils";
import React from "react";

type Props = {
  isFixed?: boolean;
  visibleFixed?: boolean;
};

function SearchBar({ isFixed = false, visibleFixed = false }: Props) {
  const dispatch = useAppDispatch();
  const { searchValue, visibleSearch } = useAppSelector((state) => state.home);

  const handleSearch = (value: string) => {
    dispatch(updateSearchValue(value));
  };

  const isShow = () => {
    if (isFixed) return visibleFixed && searchValue && visibleSearch;

    return visibleSearch && searchValue;
  };

  const handleClearSearch = () => {
    dispatch(updateSearchValue(""));
  };

  return (
    <div className="hide-for-small">
      <div className={`search-bar ${visibleSearch ? "show" : ""}`}>
        <div className="wrapper-search-bar">
          <input
            value={searchValue}
            onChange={(e) => handleSearch(e?.target?.value || "")}
            placeholder="Nhập từ khóa"
          />
          <div className="d-flex align-items-center">
            {searchValue && (
              <button
                onClick={handleClearSearch}
                className="btn0 btn-clear-search"
              >
                x
              </button>
            )}
            <button className="btn0">
              <img
                src={ICON_IMAGE.SEARCH}
                width={18}
                height={18}
                alt="Search"
              />
            </button>
          </div>
        </div>
      </div>

      <div className={`search-result ${isShow() ? "show" : ""}`}>
        <div className="title">Kết quả tìm kiếm</div>
      </div>
    </div>
  );
}

export default SearchBar;
