/* eslint-disable react/jsx-no-target-blank */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HeaderFixed from "../containers/homev2/header/HeaderFixed";
import HeaderLarge from "../containers/homev2/header/HeaderLarge";
import HeaderMedium from "../containers/homev2/header/HeaderMedium";
import { useAppSelector } from "../redux";

const menuLv1 = [
  {
    id: 2,
    name: "Tin tức",
    link: "/tin-tuc",
  },
  {
    id: 3,
    name: "Liên hệ",
    link: "/lien-he",
  },
];

const menuLv2 = [
  {
    id: 1,
    name: "Hosting",
    link: "/dich-vu-hosting",
  },
  {
    id: 2,
    name: "Server",
    link: "/thue-may-chu-vat-ly",
  },
  {
    id: 3,
    name: "VPS",
    link: "/thue-vps",
  },
  {
    id: 4,
    name: "Thiết kế Website",
    link: "/dich-vu-thiet-ke-website-chuyen-nghiep",
  },
  {
    id: 5,
    name: "Dịch vụ khác",
    link: "/dich-vu",
  },
];

function HeaderV2() {
  const { drawer } = useAppSelector((state) => state.home);
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleAdvanceMenu, setVisibleAdvanceMenu] = useState<boolean>(false);

  const handleChangeVisibleAdvanceMenu = (value: boolean) => {
    setVisibleAdvanceMenu(value);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setVisible(true);
      } else {
        setVisibleAdvanceMenu(false);
        setVisible(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY >= 200) {
          setVisible(true);
        } else {
          setVisibleAdvanceMenu(false);
          setVisible(false);
        }
      });
    };
  }, []);

  return (
    <header className="container">
      <div className="position-relative">
        <div className="header-v2">
          <div
            style={{ display: "flex" }}
            className={`menu-lv1 align-items-center justify-content-between py-3 hide-for-small ${drawer ? "d-none" : ""
              }`}
          >
            <div className="hot-line">Hotline: 0985 07 85 07</div>
            <ul className="ul d-flex">
              <li className="menu-item">
                <a
                  target="_blank"
                  href="https://go.vngserver.vn/"
                  rel="noopener nofollow"
                  className="a"
                >
                  Tài khoản
                </a>
              </li>
              {menuLv1.map((item) => (
                <li key={item.id} className="menu-item">
                  <Link className="a" href={item.link}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <HeaderFixed
            onChangeIsibleAdvanceMenu={handleChangeVisibleAdvanceMenu}
            visibleAdvanceMenu={visibleAdvanceMenu}
            menuLv2={menuLv2}
            visible={visible}
          />

          <HeaderLarge menuLv2={menuLv2} />

          <HeaderMedium />
        </div>
      </div>
    </header>
  );
}

export default HeaderV2;
