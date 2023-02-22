import { Icon } from "@iconify/react";
import { Drawer, Menu, MenuProps } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import EffectButton from "../components/button/EffectButton";
import { ICON } from "../utils";

type Props = {
  visible: boolean;
  onClose: () => void;
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Giới thiệu", "/gioi-thieu", null),
  getItem("Dịch vụ", "2", null, [
    getItem(
      "Thiết kế Website",
      "/thiet-ke-website",
      <Image
        className="menu_icon"
        src={require("@/public/images/icons/icon-1.svg")}
        alt="Thiết kế website"
      />
    ),
    getItem(
      "Hosting khủng giá rẻ ",
      "/hosting-khung-gia-re",
      <Image
        className="menu_icon"
        src={require("@/public/images/icons/icon-2.svg")}
        alt="Hosting khủng giá rẻ"
      />
    ),
    getItem(
      "Dịch vụ DDos",
      "/dich-vu-ddos",
      <Image
        className="menu_icon"
        src={require("@/public/images/icons/icon-3.svg")}
        alt="Dịch vụ Firewall"
      />
    ),
    getItem(
      "Thuê VPS",
      "/thue-vps",
      <Image
        className="menu_icon"
        src={require("@/public/images/icons/icon-4.svg")}
        alt="Thuê VPS"
      />
    ),
    getItem(
      "Chứng chỉ SSL",
      "/chung-chi-ssl",
      <Image
        className="menu_icon"
        src={require("@/public/images/icons/icon-5.svg")}
        alt="Chứng chỉ SSL"
      />
    ),
    getItem(
      "Thuê máy chủ vật lý",
      "/thue-may-chu-vat-ly",
      <Image
        className="menu_icon"
        src={require("@/public/images/icons/icon-6.svg")}
        alt="Thuê máy chủ vật lý"
      />
    ),
  ]),

  getItem("Liên hệ", "/lien-he", null),
  getItem("Tuyển dụng", "/tuyen-dung", null),
];

const logo = (
  <div className="img p-3">
    <Image
      style={{ width: "auto", height: "48px" }}
      src={require("@/public/images/logo.png")}
      alt="logo"
    />
  </div>
);

function DrawerMenu({ onClose, visible }: Props) {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <div>
      <Drawer
        onClose={onClose}
        rootClassName="drawer_menu"
        placement="left"
        title={logo}
        open={visible}
      >
        <div className="wrapper_drawer">
          <Menu
            onClick={(e) => handleRedirect(e.key)}
            style={{ width: "100%" }}
            mode="inline"
            items={items}
          />
        </div>
        <div className="mt-4 text-center mx-0">
          <a href="tel:0989078507" className="btn0 btn-support mx-0">
            <Icon icon={ICON.CALL} />
            Hỗ trợ 24/7: 0989.07.85.07
          </a>
        </div>

        <ul className="ul d-flex m-0 p-0 mt-4 align-items-center justify-content-center">
          <li>
            <EffectButton
              className="shadow border"
              name="Đăng ký"
              color="white"
            />
          </li>
          <li className="mx-2">
            <EffectButton name="Đăng nhập" className="shadow" color="primary" />
          </li>
        </ul>
      </Drawer>
    </div>
  );
}

export default DrawerMenu;
