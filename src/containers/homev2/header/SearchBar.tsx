import { useAppDispatch, useAppSelector } from "@/src/redux";
import {
  searchByDomain,
  updateSearchData,
  updateSearchValue,
} from "@/src/redux/slice";
import { env, ICON_IMAGE } from "@/src/utils";
import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import SearchItem from "@/src/components/SearchItem";
import { useRouter } from "next/router";

type Props = {
  isFixed?: boolean;
  visibleFixed?: boolean;
};

const RenderSearch = ({
  item,
  type,
  handleClearSearch,
}: {
  item: any;
  type: any;
  handleClearSearch: any;
}) => {
  const router = useRouter();

  if (type === "vps") {
    return (
      <SearchItem
        image="https://gofiber.b-cdn.net/Desktop/Trang-chu-2/vps-1gb.png"
        title={item?.name}
        extra={item?.extra}
      />
    );
  }

  return (
    <SearchItem
      image={item?.thumb}
      extra={item?.description}
      title={item?.title}
      onClick={() => {
        router.push(`/${item?.slug}`);
        handleClearSearch();
      }}
    />
  );
};

function SearchBar({ isFixed = false, visibleFixed = false }: Props) {
  const dispatch = useAppDispatch();
  const { searchData } = useAppSelector((state) => state.home);
  const { searchValue, visibleSearch } = useAppSelector((state) => state.home);

  const handleSearch = (value: string) => {
    dispatch(updateSearchValue(value));
    if (value) debounceSearch(value);
    else {
      setTimeout(() => {
        dispatch(updateSearchData([]));
      }, 300);
    }
  };

  const isShow = () => {
    if (isFixed) return visibleFixed && searchValue && visibleSearch;

    return visibleSearch && searchValue;
  };

  const searchByDomainApi = async (value: string) => {
    try {
      const params = {
        domain: env.DOMAIN,
        search: value,
      };
      await dispatch(searchByDomain(params)).unwrap();
    } catch (error) {
      console.log("error", error);
    }
  };

  const debounceSearch = useCallback(
    debounce((value) => searchByDomainApi(value), 500),
    []
  );

  const handleClearSearch = () => {
    dispatch(updateSearchValue(""));
    setTimeout(() => {
      dispatch(updateSearchData([]));
    }, 300);
  };

  const render = {
    loading: (
      <div>
        <div className="animated-text">??ANG T??M KI???M...</div>
      </div>
    ),
    notLoading: (
      <>
        {searchData?.map((item) => {
          return (
            <>
              {item?.data?.length > 0 && (
                <div className="wrapper-result mt-3" key={item?.title}>
                  <div className="title">{item?.title}</div>
                  <div className="mt-2">
                    {item?.data?.map((e: any, index: number) => (
                      <RenderSearch
                        handleClearSearch={handleClearSearch}
                        type={item?.type}
                        item={e}
                        key={e?._id}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          );
        })}
        {searchData?.length === 2 &&
          searchData?.[0]?.data?.length === 0 &&
          searchData?.[1]?.data?.length === 0 && (
            <div className="not-found">
              <img
                src="https://gofiber.b-cdn.net/new-design/search.png"
                alt="Kh??ng t??m th???y k???t qu???"
              />
              <div className="animated-text small">
                KH??NG T??M TH???Y K???T QU???...
              </div>
            </div>
          )}
      </>
    ),
  };

  return (
    <div className="">
      <div className={`search-bar ${visibleSearch ? "show" : ""}`}>
        <div className="wrapper-search-bar">
          <input
            value={searchValue}
            onChange={(e) => handleSearch(e?.target?.value || "")}
            placeholder="Nh???p t??? kh??a"
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
        <div className="title">K???t qu??? t??m ki???m</div>

        <div>
          {searchData?.length === 0 ? render["loading"] : render["notLoading"]}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
