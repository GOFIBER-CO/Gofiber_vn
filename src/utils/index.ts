export enum ICON {
  DOWN = "material-symbols:keyboard-arrow-down-rounded",
  MENU = "material-symbols:menu-rounded",
  RIGHT = "material-symbols:arrow-right-alt-rounded",
  EDIT = "majesticons:edit-pen-4-line",
  RIGHT_CIRCLE = "material-symbols:swipe-right-alt-outline",
  CHECKED = "mdi:check-bold",
  CALL = "material-symbols:call",
}

export enum NEWS_TAB {
  ALL = "all",
  NEWS = "news",
  EVENT = "event",
}

export const env = {
  FP_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_FP_PUBLIC_API_KEY,
};

export const DOMAIN = "localhost:3000";

export type NotificationType = "success" | "info" | "warning" | "error";

export const openNotificationWithIcon = (
  type: NotificationType,
  message: String,
  description: String,
  api: any
) => {
  api[type]({
    message: message,
    description: description,
  });
};

export const formatNumber = (number: any) => {
  return new Intl.NumberFormat("en-US").format(parseInt(number || 0));
};

export const convertObjectToQuery = (obj: any) => {
  const keys = Object.keys(obj);
  let query = "?";
  keys.forEach((key) => {
    if (obj[key] !== undefined && obj[key] !== "") {
      query +=
        typeof obj[key] === "string"
          ? `${key}=${obj[key]}&`
          : `${key}=${JSON.stringify(obj[key])}&`;
    }
  });
  return query;
};

const BUNNY_URL = "https://gofiber.b-cdn.net/";

const getImageWithBunnyUrl = (path: string) => {
  return BUNNY_URL + path;
};

export const HOME_IMAGE = {
  MY_SERVICE: {
    WEB_DESIGN: getImageWithBunnyUrl("Desktop/Trang-chu/thiet-ke-website.png"),
    RENT_SERVICE: getImageWithBunnyUrl(
      "Desktop/Trang-chu/thue-server-gia-re.png"
    ),
    HOSTING_VPS: getImageWithBunnyUrl(
      "Desktop/Trang-chu/hosting-vps%20khung%20gia%20re.png"
    ),
    BUILD_CONTENT: getImageWithBunnyUrl(
      "Desktop/Trang-chu/xay-dung-noi-dung-chat-luong.png"
    ),
    CARE_WEBSITE: getImageWithBunnyUrl(
      "Desktop/Trang-chu/an-toan-va-bao-mat.png"
    ),
    INFRASTRUCTURE: getImageWithBunnyUrl("Desktop/Trang-chu/ha-tang.png"),
  },
  HOT: {
    CLOUD_VPS: getImageWithBunnyUrl("Desktop/Trang-chu/image%2014.png"),
    SEO: getImageWithBunnyUrl("Desktop/Trang-chu/image%2011.png"),
    SSL: getImageWithBunnyUrl("Desktop/Trang-chu/image%2012.png"),
    FIREWALL: getImageWithBunnyUrl("Desktop/Trang-chu/image%208.png"),
    VPS: getImageWithBunnyUrl("Desktop/Trang-chu/image%209.png"),
  },
  NEWS: getImageWithBunnyUrl("Desktop/Trang-chu/tin-tuc-1.png"),
  WHY: {
    CHEAP: getImageWithBunnyUrl("Desktop/Trang-chu/gia-re-on-dinh.png"),
    SECURITY: getImageWithBunnyUrl("Desktop/Trang-chu/bao-mat-toi-da.png"),
    SUPPORT: getImageWithBunnyUrl("Desktop/Trang-chu/ho-tro-ky-thuat-247.png"),
  },
  CUSTOMER: {
    FIRST: getImageWithBunnyUrl("Desktop/Trang-chu/tai-tro-1.png"),
    SECOND: getImageWithBunnyUrl("Desktop/Trang-chu/tai-tro-2.png"),
    THIRD: getImageWithBunnyUrl("Desktop/Trang-chu/tai-tro-3.png"),
    FOURTH: getImageWithBunnyUrl("Desktop/Trang-chu/tai-tro-4.png"),
    FIFTH: getImageWithBunnyUrl("Desktop/Trang-chu/tai-tro-5.png"),
  },
};

export const INTRODUCE_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl("Desktop/Gioi-thieu/bg-gioithieu.png"),
  BANNER_MEDIUM: getImageWithBunnyUrl("Tablet/Gioi-thieu/Group%20221.png"),
  BANNER_SMALL: getImageWithBunnyUrl("Mobile/Gioi-thieu/Group%20222.png"),
  CHOICE: {
    SEO: getImageWithBunnyUrl("Desktop/Gioi-thieu/Seo.png"),
    CMS: getImageWithBunnyUrl("Desktop/Gioi-thieu/nentangcms.png"),
    QUALITY: getImageWithBunnyUrl("Desktop/Gioi-thieu/chatluong.png"),
    FEATURE: getImageWithBunnyUrl("Desktop/Gioi-thieu/tinhnangtuychon.png"),
  },
  CHEAP_WEBSITE: getImageWithBunnyUrl("Desktop/Gioi-thieu/image%206.png"),
  WHY: {
    FIRST: getImageWithBunnyUrl("Desktop/Gioi-thieu/Group%2036.png"),
    SECOND: getImageWithBunnyUrl("Desktop/Gioi-thieu/Downfall-amico%202.png"),
    THIRD: getImageWithBunnyUrl(
      "Desktop/Gioi-thieu/Generating%20new%20leads-bro%202.png"
    ),
    FOURTH: getImageWithBunnyUrl("Desktop/Gioi-thieu/E-Wallet-bro%202.png"),
  },
};

export const SERVICE_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl("Desktop/Dich-vu/bg-dichvu.png"),
  BANNER_MEDIUM: getImageWithBunnyUrl("Tablet/Dich-vu/bg-dichvu.png"),
  BANNER_SMALL: getImageWithBunnyUrl("Mobile/Dich-vu/Group%20237.png"),
  MY_SERVICE: {
    WEB_DESIGN: getImageWithBunnyUrl("Desktop/Dich-vu/bg-1.png"),
    WEB_HOSTING: getImageWithBunnyUrl("Desktop/Dich-vu/bg-2.png"),
    FIREWALL: getImageWithBunnyUrl("Desktop/Dich-vu/bg-3.png"),
    VPS: getImageWithBunnyUrl("Desktop/Dich-vu/bg-4.png"),
    SSL: getImageWithBunnyUrl("Desktop/Dich-vu/bg-5.png"),
    PHYSICAL: getImageWithBunnyUrl("Desktop/Dich-vu/bg-6.png"),
  },
};
export const WEB_DESIGN_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl(
    "Desktop/Thiet-ke-web/banner-thietketweb.png"
  ),
  BANNER_MEDIUM: getImageWithBunnyUrl("Tablet/Thiet-ke-web/thiet-ke-web.png"),
  BANNER_SMALL: getImageWithBunnyUrl("Mobile/Thiet-ke-web/bg-thietkeweb.png"),
  AGENCY1: getImageWithBunnyUrl("Desktop/Thiet-ke-web/Agency%201.png"),
  AGENCY2: getImageWithBunnyUrl("Desktop/Thiet-ke-web/Agency%202.png"),
  EDUCATION: getImageWithBunnyUrl("Desktop/Thiet-ke-web/Education.png"),
  PORTFOLIO: getImageWithBunnyUrl("Desktop/Thiet-ke-web/Portfolio.png"),
  BLOG: getImageWithBunnyUrl("Desktop/Thiet-ke-web/Blog.png"),
};

export const WEB_HOSTING_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl(
    "Desktop/Hosting-khung-gia-re/banner-webhosting.png"
  ),
  BANNER_MEDIUM: getImageWithBunnyUrl(
    "Tablet/Hosting-khung-gia-re/bg-webhosting.png"
  ),
  BANNER_SMALL: getImageWithBunnyUrl(
    "Mobile/Hosting-khung-gia-re/bg-webhosting.png"
  ),
  CLOUD1: getImageWithBunnyUrl(
    "Desktop/Hosting-khung-gia-re/Cloud%20hosting-amico%201.png"
  ),
  CLOUD2: getImageWithBunnyUrl(
    "Desktop/Hosting-khung-gia-re/Cloud%20hosting-rafiki%201.png"
  ),
};

export const FIREWALL_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl(
    "Desktop/Dich-vu-firewall/banner-firewall.png"
  ),
  BANNER_MEDIUM: getImageWithBunnyUrl(
    "Tablet/Dich-vu-firewall/bg-firewall.png"
  ),
  BANNER_SMALL: getImageWithBunnyUrl("Mobile/Dich-vu-firewall/bg-firewall.png"),
  STEP1: getImageWithBunnyUrl("Desktop/Dich-vu-firewall/Step-1.png"),
  STEP2: getImageWithBunnyUrl("Desktop/Dich-vu-firewall/Step-2.png"),
  STEP3: getImageWithBunnyUrl("Desktop/Dich-vu-firewall/Step-3.png"),
  STEP4: getImageWithBunnyUrl("Desktop/Dich-vu-firewall/Step-4.png"),
  STEP5: getImageWithBunnyUrl("Desktop/Dich-vu-firewall/Step-5.png"),
  STEP6: getImageWithBunnyUrl("Desktop/Dich-vu-firewall/Step-6.png"),
  SECURITY: getImageWithBunnyUrl(
    "Desktop/Dich-vu-firewall/anh-baovetoandien.png"
  ),
};

export const VPS_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl("Desktop/Thue-VPS/banner-thuevpsmanh.png"),
  BANNER_MEDIUM: getImageWithBunnyUrl("Tablet/Thue-vps/bg-thuevpsmanh.png"),
  BANNER_SMALL: getImageWithBunnyUrl("Mobile/Thue-vps/bg-thuevpsmanh.png"),
  VPS1: getImageWithBunnyUrl("Desktop/Thue-VPS/anh-kien-truc-vps.png"),
  VPS2: getImageWithBunnyUrl("Desktop/Thue-VPS/anh-kien-truc-vps2.png"),
};
export const SSL_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl(
    "Desktop/Chung-chi-ssl/banner-chungchissl.png"
  ),
  BANNER_MEDIUM: getImageWithBunnyUrl(
    "Tablet/Chung-chi-ssl/bg%20-chungchissl.png"
  ),
  BANNER_SMALL: getImageWithBunnyUrl("Mobile/Chung-chi-ssl/bg-chungchissl.png"),
  POPULAR: {
    FIRST: getImageWithBunnyUrl(
      "Desktop/Chung-chi-ssl/anh-3loaisslphobien.png"
    ),
    SECOND: getImageWithBunnyUrl(
      "Desktop/Chung-chi-ssl/anh-3loaisslphobien2.png"
    ),
    THIRD: getImageWithBunnyUrl(
      "Desktop/Chung-chi-ssl/anh-3loaisslphobien3.png"
    ),
  },
  WHY: {
    FIRST: getImageWithBunnyUrl("Desktop/Chung-chi-ssl/anh-ssl.png"),
    SECOND: getImageWithBunnyUrl("Desktop/Chung-chi-ssl/anh-ssl2.png"),
    THIRD: getImageWithBunnyUrl("Desktop/Chung-chi-ssl/anh-ssl3.png"),
  },
};

export const PHYSICAL_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl(
    "Desktop/Thue-may-chu-vat-ly/banner-thuechodatmaychu.png"
  ),
  BANNER_MEDIUM: getImageWithBunnyUrl(
    "Tablet/Thue-may-chu-vat-ly/bg-thuemaychuvatly.png"
  ),
  BANNER_SMALL: getImageWithBunnyUrl(
    "Mobile/Thue-may-chu-vat-ly/bg-thuemaychuvatly.png"
  ),
  BENEFIT: {
    FIRST: getImageWithBunnyUrl(
      "Desktop/Thue-may-chu-vat-ly/anh-may-chu-vat-ly.png"
    ),
    SECOND: getImageWithBunnyUrl(
      "Desktop/Thue-may-chu-vat-ly/anh-may-chu-vat-ly-2.png"
    ),
  },
  SERVER: getImageWithBunnyUrl(
    "Desktop/Thue-may-chu-vat-ly/anh-thue-may-chu.png"
  ),
};

export const CONTACT_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl("Desktop/Lien-he/background-lien-he.png"),
  BANNER_MEDIUM: getImageWithBunnyUrl("Tablet/Lien-he/tablet-lienhe.png"),
  BANNER_SMALL: getImageWithBunnyUrl("Mobile/Lien-he/background-lien-he.png"),
  ILLUSTRATION: getImageWithBunnyUrl("Desktop/Lien-he/anh-lien-he.png"),
  EMAIL: getImageWithBunnyUrl("Desktop/Lien-he/icon-email.png"),
  PHONE: getImageWithBunnyUrl("Desktop/Lien-he/icon-so-dien-thoai.png"),
  LOCATION: getImageWithBunnyUrl("Desktop/Lien-he/icon-dia-diem.png"),
};

export const RECRUIT_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl("Desktop/Tuyen-dung/tuyen-dung.png"),
  BANNER_MEDIUM: getImageWithBunnyUrl("Tablet/Tuyen-dung/tuyen-dung.png"),
  BANNER_SMALL: getImageWithBunnyUrl("Mobile/Tuyen-dung/tuyen-dung.png"),
  ILLUSTRATION: getImageWithBunnyUrl("Desktop/Tuyen-dung/anh-minh-hoa-4.png"),
};
