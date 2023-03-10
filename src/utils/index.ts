import ReactHtmlParser from 'react-html-parser';

export enum ICON {
  DOWN = 'material-symbols:keyboard-arrow-down-rounded',
  MENU = 'material-symbols:menu-rounded',
  RIGHT = 'material-symbols:arrow-right-alt-rounded',
  EDIT = 'majesticons:edit-pen-4-line',
  RIGHT_CIRCLE = 'material-symbols:swipe-right-alt-outline',
  CHECKED = 'mdi:check-bold',
  CALL = 'material-symbols:call',
  POLICY = 'material-symbols:policy-outline-rounded',
  STAR = 'mdi:star',
  PREV = 'material-symbols:chevron-left-rounded',
  NEXT = 'material-symbols:chevron-right-rounded',
  SEARCH_OFF = 'tabler:search-off',
}

export enum NEWS_TAB {
  ALL = 'all',
  NEWS = 'news',
  EVENT = 'event',
}

export const env = {
  FP_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_FP_PUBLIC_API_KEY,
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
};

export const DOMAIN = 'localhost:3000';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const openNotificationWithIcon = (
  type: NotificationType,
  message: String,
  description: String,
  api: any
) => {
  api[type]({
    message: message,
    description: description,
    // duration: 0,
    style: { marginTop: '50px' },
  });
};

export const formatNumber = (number: any) => {
  return new Intl.NumberFormat('en-US').format(parseInt(number || 0));
};

export const convertObjectToQuery = (obj: any) => {
  const keys = Object.keys(obj);
  let query = '?';
  keys.forEach(key => {
    if (obj[key] !== undefined && obj[key] !== '') {
      query +=
        typeof obj[key] === 'string'
          ? `${key}=${obj[key]}&`
          : `${key}=${JSON.stringify(obj[key])}&`;
    }
  });
  return query;
};

export const appendTagToHead = (tags: any[]) => {
  tags.forEach((item: any) => {
    const [convert] = ReactHtmlParser(item);
    const tag = document.createElement(convert?.type as string);

    Object.entries(convert?.props).forEach(prop => {
      if (prop[1]) {
        tag.setAttribute(prop[0], prop[1] as string);
      }
    });
    document.head.appendChild(tag);
  });
};

const BUNNY_URL = 'https://gofiber.b-cdn.net/';

const getImageWithBunnyUrl = (path: string) => {
  return BUNNY_URL + path;
};

export const HOME_IMAGE = {
  MY_SERVICE: {
    WEB_DESIGN: getImageWithBunnyUrl('Desktop/Trang-chu/thiet-ke-website.png'),
    RENT_SERVICE: getImageWithBunnyUrl(
      'Desktop/Trang-chu/thue-server-gia-re.png'
    ),
    HOSTING_VPS: getImageWithBunnyUrl(
      'Desktop/Trang-chu/hosting-vps%20khung%20gia%20re.png'
    ),
    BUILD_CONTENT: getImageWithBunnyUrl(
      'Desktop/Trang-chu/xay-dung-noi-dung-chat-luong.png'
    ),
    CARE_WEBSITE: getImageWithBunnyUrl(
      'Desktop/Trang-chu/an-toan-va-bao-mat.png'
    ),
    INFRASTRUCTURE: getImageWithBunnyUrl('Desktop/Trang-chu/ha-tang.png'),
  },
  HOT: {
    CLOUD_VPS: getImageWithBunnyUrl('Desktop/Trang-chu/image%2014.png'),
    SEO: getImageWithBunnyUrl('Desktop/Trang-chu/image%2011.png'),
    SSL: getImageWithBunnyUrl('Desktop/Trang-chu/image%2012.png'),
    FIREWALL: getImageWithBunnyUrl('Desktop/Trang-chu/image%208.png'),
    VPS: getImageWithBunnyUrl('Desktop/Trang-chu/image%209.png'),
  },
  NEWS: getImageWithBunnyUrl('Desktop/Trang-chu/tin-tuc-1.png'),
  WHY: {
    CHEAP: getImageWithBunnyUrl('Desktop/Trang-chu/gia-re-on-dinh.png'),
    SECURITY: getImageWithBunnyUrl('Desktop/Trang-chu/bao-mat-toi-da.png'),
    SUPPORT: getImageWithBunnyUrl('Desktop/Trang-chu/ho-tro-ky-thuat-247.png'),
  },
  CUSTOMER: {
    FIRST: getImageWithBunnyUrl('Desktop/Trang-chu/tai-tro-1.png'),
    SECOND: getImageWithBunnyUrl('Desktop/Trang-chu/tai-tro-2.png'),
    THIRD: getImageWithBunnyUrl('Desktop/Trang-chu/tai-tro-3.png'),
    FOURTH: getImageWithBunnyUrl('Desktop/Trang-chu/tai-tro-4-bao-vn.png'),
    FIFTH: getImageWithBunnyUrl('Desktop/Trang-chu/tai-tro-5.png'),
  },
  // INIT: getImageWithBunnyUrl("Desktop/Trang-chu/Init.gif"),
  INIT: getImageWithBunnyUrl('Desktop/Trang-chu/ezgif.com-gif-maker.webm'),
};

export const INTRODUCE_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl('new-design/gioi-thieu/gioi-thieu.png'),
  BANNER_MEDIUM: getImageWithBunnyUrl(
    'new-design/gioi-thieu/tablet-gioi-thieu.png'
  ),
  BANNER_SMALL: getImageWithBunnyUrl(
    'new-design/gioi-thieu/mobile-gioi-thieu.png'
  ),
  CHOICE: {
    SEO: getImageWithBunnyUrl('Desktop/Gioi-thieu/Seo.png'),
    CMS: getImageWithBunnyUrl('Desktop/Gioi-thieu/nentangcms.png'),
    QUALITY: getImageWithBunnyUrl('Desktop/Gioi-thieu/chatluong.png'),
    FEATURE: getImageWithBunnyUrl('Desktop/Gioi-thieu/tinhnangtuychon.png'),
  },
  CHEAP_WEBSITE: getImageWithBunnyUrl('Desktop/Gioi-thieu/image%206.png'),
  WHY: {
    FIRST: getImageWithBunnyUrl('Desktop/Gioi-thieu/Group%2036.png'),
    SECOND: getImageWithBunnyUrl('Desktop/Gioi-thieu/Downfall-amico%202.png'),
    THIRD: getImageWithBunnyUrl(
      'Desktop/Gioi-thieu/Generating%20new%20leads-bro%202.png'
    ),
    FOURTH: getImageWithBunnyUrl('Desktop/Gioi-thieu/E-Wallet-bro%202.png'),
  },
};

export const SERVICE_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl('Desktop/Dich-vu/bg-dichvu.png'),
  BANNER_MEDIUM: getImageWithBunnyUrl('Tablet/Dich-vu/bg-dichvu.png'),
  BANNER_SMALL: getImageWithBunnyUrl('Mobile/Dich-vu/Group%20237.png'),
  MY_SERVICE: {
    WEB_DESIGN: getImageWithBunnyUrl('Desktop/Dich-vu/bg-1.png'),
    WEB_HOSTING: getImageWithBunnyUrl('Desktop/Dich-vu/bg-2.png'),
    FIREWALL: getImageWithBunnyUrl('Desktop/Dich-vu/bg-3.png'),
    VPS: getImageWithBunnyUrl('Desktop/Dich-vu/bg-4.png'),
    SSL: getImageWithBunnyUrl('Desktop/Dich-vu/bg-5.png'),
    PHYSICAL: getImageWithBunnyUrl('Desktop/Dich-vu/bg-6.png'),
  },
};
export const WEB_DESIGN_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl(
    'new-design/thiet-ke-web/desktop-thiet-ke-web%20(2).png'
  ),
  BANNER_MEDIUM: getImageWithBunnyUrl(
    'new-design/thiet-ke-web/tablet%20-%20thiet-ke-web.png'
  ),
  BANNER_SMALL: getImageWithBunnyUrl(
    'new-design/thiet-ke-web/mobile-%20thiet-ke-web.png'
  ),
  AGENCY1: getImageWithBunnyUrl('Desktop/Thiet-ke-web/Agency%201.png'),
  AGENCY2: getImageWithBunnyUrl('Desktop/Thiet-ke-web/Agency%202.png'),
  EDUCATION: getImageWithBunnyUrl('Desktop/Thiet-ke-web/Education.png'),
  PORTFOLIO: getImageWithBunnyUrl('Desktop/Thiet-ke-web/Portfolio.png'),
  BLOG: getImageWithBunnyUrl('Desktop/Thiet-ke-web/Blog.png'),
};

export const WEB_HOSTING_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl(
    'Desktop/Hosting-khung-gia-re/banner-webhosting.png'
  ),
  BANNER_MEDIUM: getImageWithBunnyUrl(
    'Tablet/Hosting-khung-gia-re/bg-webhosting.png'
  ),
  BANNER_SMALL: getImageWithBunnyUrl(
    'Mobile/Hosting-khung-gia-re/bg-webhosting.png'
  ),
  CLOUD1: getImageWithBunnyUrl(
    'Desktop/Hosting-khung-gia-re/Cloud%20hosting-amico%201.png'
  ),
  CLOUD2: getImageWithBunnyUrl(
    'Desktop/Hosting-khung-gia-re/Cloud%20hosting-rafiki%201.png'
  ),
};

export const FIREWALL_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl(
    'Desktop/Dich-vu-firewall/banner-firewall.png'
  ),
  BANNER_MEDIUM: getImageWithBunnyUrl(
    'Tablet/Dich-vu-firewall/bg-firewall.png'
  ),
  BANNER_SMALL: getImageWithBunnyUrl('Mobile/Dich-vu-firewall/bg-firewall.png'),
  STEP1: getImageWithBunnyUrl('Desktop/Dich-vu-firewall/Step-1.png'),
  STEP2: getImageWithBunnyUrl('Desktop/Dich-vu-firewall/Step-2.png'),
  STEP3: getImageWithBunnyUrl('Desktop/Dich-vu-firewall/Step-3.png'),
  STEP4: getImageWithBunnyUrl('Desktop/Dich-vu-firewall/Step-4.png'),
  STEP5: getImageWithBunnyUrl('Desktop/Dich-vu-firewall/Step-5.png'),
  STEP6: getImageWithBunnyUrl('Desktop/Dich-vu-firewall/Step-6.png'),
  SECURITY: getImageWithBunnyUrl(
    'Desktop/Dich-vu-firewall/anh-baovetoandien.png'
  ),
};

export const VPS_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl(
    'new-design/Thue-vps-manh/desktop-thue-vps-manh-1.png'
  ),
  BANNER_MEDIUM: getImageWithBunnyUrl(
    'new-design/Thue-vps-manh/tablet-thue-vps-manh.png'
  ),
  BANNER_SMALL: getImageWithBunnyUrl(
    'new-design/Thue-vps-manh/mobile-thue-vps-manh.png'
  ),
  VPS1: getImageWithBunnyUrl('Desktop/Thue-VPS/anh-kien-truc-vps.png'),
  VPS2: getImageWithBunnyUrl('Desktop/Thue-VPS/anh-kien-truc-vps2.png'),
  UPDATING: getImageWithBunnyUrl('Desktop/Thue-VPS/updating2.gif'),
};
export const SSL_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl(
    'Desktop/Chung-chi-ssl/banner-chungchissl.png'
  ),
  BANNER_MEDIUM: getImageWithBunnyUrl(
    'Tablet/Chung-chi-ssl/bg%20-chungchissl.png'
  ),
  BANNER_SMALL: getImageWithBunnyUrl('Mobile/Chung-chi-ssl/bg-chungchissl.png'),
  POPULAR: {
    FIRST: getImageWithBunnyUrl(
      'Desktop/Chung-chi-ssl/anh-3loaisslphobien.png'
    ),
    SECOND: getImageWithBunnyUrl(
      'Desktop/Chung-chi-ssl/anh-3loaisslphobien2.png'
    ),
    THIRD: getImageWithBunnyUrl(
      'Desktop/Chung-chi-ssl/anh-3loaisslphobien3.png'
    ),
  },
  WHY: {
    FIRST: getImageWithBunnyUrl('Desktop/Chung-chi-ssl/anh-ssl.png'),
    SECOND: getImageWithBunnyUrl('Desktop/Chung-chi-ssl/anh-ssl2.png'),
    THIRD: getImageWithBunnyUrl('Desktop/Chung-chi-ssl/anh-ssl3.png'),
  },
};

export const PHYSICAL_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl(
    'new-design/Thue-may-chu-vat-ly/dt-thue-may-chu-vat-ly.png'
  ),
  BANNER_MEDIUM: getImageWithBunnyUrl(
    'new-design/Thue-may-chu-vat-ly/tab%20-%20thue-may-chu-vat-ly.png'
  ),
  BANNER_SMALL: getImageWithBunnyUrl(
    'new-design/Thue-may-chu-vat-ly/mb-thue-may-chu-vat-ly.png'
  ),
  BENEFIT: {
    FIRST: getImageWithBunnyUrl(
      'Desktop/Thue-may-chu-vat-ly/anh-may-chu-vat-ly.png'
    ),
    SECOND: getImageWithBunnyUrl(
      'Desktop/Thue-may-chu-vat-ly/anh-may-chu-vat-ly-2.png'
    ),
  },
  SERVER: getImageWithBunnyUrl(
    'Desktop/Thue-may-chu-vat-ly/anh-thue-may-chu.png'
  ),
  FPT: getImageWithBunnyUrl('Desktop/Thue-may-chu-vat-ly/Fpt.png'),
  VIETTEL: getImageWithBunnyUrl('Desktop/Thue-may-chu-vat-ly/Viettel.png'),
  VNPT: getImageWithBunnyUrl('Desktop/Thue-may-chu-vat-ly/Vnpt.png'),
};

export const CONTACT_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl('Desktop/Lien-he/background-lien-he.png'),
  BANNER_MEDIUM: getImageWithBunnyUrl('Tablet/Lien-he/tablet-lienhe.png'),
  BANNER_SMALL: getImageWithBunnyUrl('Mobile/Lien-he/background-lien-he.png'),
  ILLUSTRATION: getImageWithBunnyUrl('Desktop/Lien-he/anh-lien-he.png'),
  EMAIL: getImageWithBunnyUrl('Desktop/Lien-he/icon-email.png'),
  PHONE: getImageWithBunnyUrl('Desktop/Lien-he/icon-so-dien-thoai.png'),
  LOCATION: getImageWithBunnyUrl('Desktop/Lien-he/icon-dia-diem.png'),
};

export const RECRUIT_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl('new-design/tuyen-dung/dt-tuyen-dung.png'),
  BANNER_MEDIUM: getImageWithBunnyUrl(
    'new-design/tuyen-dung/tablet-tuyen-dung.png'
  ),
  BANNER_SMALL: getImageWithBunnyUrl(
    'new-design/tuyen-dung/mobile-tuyen-dung.png'
  ),
  ILLUSTRATION: getImageWithBunnyUrl('Desktop/Tuyen-dung/anh-minh-hoa-4.png'),
};

export const POLICY_IMAGE = {
  INFORMATION_SECURITY: {
    BANNER_LARGE: getImageWithBunnyUrl(
      'Desktop/Chinh-sach/bg-chinhsachbaomat.png'
    ),
    BANNER_MEDIUM: getImageWithBunnyUrl(
      'Tablet/Chinh-sach/tablet-chinhsachbaomat.png'
    ),
    BANNER_SMALL: getImageWithBunnyUrl(
      'Mobile/Chinh-sach/mobile-chinhsachbaomat.png'
    ),
  },

  DELIVERY_PRODUCT: {
    BANNER_LARGE: getImageWithBunnyUrl(
      'Desktop/Chinh-sach/bg-dieukhoanvadieukien.png'
    ),
    BANNER_MEDIUM: getImageWithBunnyUrl(
      'Tablet/Chinh-sach/tablet-dieukhoanvadieukien.png'
    ),
    BANNER_SMALL: getImageWithBunnyUrl(
      'Mobile/Chinh-sach/mobile-dieukhoanvadieukien.png'
    ),
  },

  GUARANTEE: {
    BANNER_LARGE: getImageWithBunnyUrl(
      'Desktop/Chinh-sach/bg-chinhsachhoanhuydichvu.png'
    ),
    BANNER_MEDIUM: getImageWithBunnyUrl(
      'Tablet/Chinh-sach/tablet-chinhsachhoanhuydichvu.png'
    ),
    BANNER_SMALL: getImageWithBunnyUrl(
      'Mobile/Chinh-sach/mobile-chinhsachhoanhuydichvu.png'
    ),
  },

  PAYMENT: {
    BANNER_LARGE: getImageWithBunnyUrl(
      'Desktop/Chinh-sach/bg-chinhsachthanhtoan.png'
    ),
    BANNER_MEDIUM: getImageWithBunnyUrl(
      'Tablet/Chinh-sach/tablet-chinhsachthanhtoan.png'
    ),
    BANNER_SMALL: getImageWithBunnyUrl(
      'Mobile/Chinh-sach/mobile-chinhsachthanhtoan.png'
    ),
  },
};

export const NEWS_IMAGE = {
  BANNER_LARGE: getImageWithBunnyUrl('Desktop/Tin-tuc/bg-tin%20tuc.png'),
  BANNER_MEDIUM: getImageWithBunnyUrl('Tablet/Tin-tuc/tablet-%20tin%20t???c.png'),
  BANNER_SMALL: getImageWithBunnyUrl('Mobile/Tin-tuc/mobile-%20tin%20t???c.png'),
};

export const ICON_IMAGE = {
  MESSENGER: getImageWithBunnyUrl('Desktop/Trang-chu/icon-messenger.png'),
  SEARCH: getImageWithBunnyUrl('Desktop/Trang-chu/icon-search.png'),
  STAR: getImageWithBunnyUrl('Desktop/Trang-chu/icon-star.png'),
  RIGHT: getImageWithBunnyUrl('Desktop/Trang-chu-2/icon-right.png'),
};

export const HOME2_IMAGE = {
  INTRO: getImageWithBunnyUrl('Desktop/Trang-chu-2/Intro.png'),
  EXTRA_INTRO: {
    _247: getImageWithBunnyUrl('Desktop/Trang-chu-2/intro-247.png'),
    FREE: getImageWithBunnyUrl('Desktop/Trang-chu-2/intro-free.png'),
    SPEED: getImageWithBunnyUrl('Desktop/Trang-chu-2/intro-speed.png'),
  },
  HOT_PRODUCT: {
    VPS1GB: getImageWithBunnyUrl('Desktop/Trang-chu-2/vps-1gb.png'),
    VPS2GB: getImageWithBunnyUrl('Desktop/Trang-chu-2/vps-2gb.png'),
    VPS4GB: getImageWithBunnyUrl('Desktop/Trang-chu-2/vps-4gb.png'),
    VPS8GB: getImageWithBunnyUrl('Desktop/Trang-chu-2/vps-8gb.png'),
    VPS16GB: getImageWithBunnyUrl('Desktop/Trang-chu-2/vps-16gb.png'),
    VPS32GB: getImageWithBunnyUrl('Desktop/Trang-chu-2/vps-32gb.png'),
    COMPUTER1S: getImageWithBunnyUrl('Desktop/Trang-chu-2/computer-s1.png'),
    LOCATION1S: getImageWithBunnyUrl('Desktop/Trang-chu-2/location-s1.png'),
  },
  HOT_SERVICE: {
    WEB_HOSTING: getImageWithBunnyUrl(
      'Desktop/Trang-chu-2/hot-service-web-hosting.png'
    ),
    PHYSICAL_SERVER: getImageWithBunnyUrl(
      'Desktop/Trang-chu-2/hot-service-physical-server.png'
    ),
    VPS: getImageWithBunnyUrl('Desktop/Trang-chu-2/hot-service-vps.png'),
  },

  BASIC_SERVICE: {
    BUILD_CONTENT: getImageWithBunnyUrl(
      'Desktop/Trang-chu-2/basic-service-build-content.png'
    ),
    CARE: getImageWithBunnyUrl('Desktop/Trang-chu-2/basic-service-care.png'),
    ENTITY: getImageWithBunnyUrl('Desktop/Trang-chu-2/basic-service-enity.png'),
    WEB_DESIGN: getImageWithBunnyUrl(
      'Desktop/Trang-chu-2/basic-service-web-design.png'
    ),
    KEY_WORD: getImageWithBunnyUrl(
      'Desktop/Trang-chu-2/basic-service-key-word.png'
    ),
    SEO_FULL: getImageWithBunnyUrl(
      'Desktop/Trang-chu-2/basic-service-seo-full.png'
    ),
  },

  OTHER_SERVICE: {
    DDOS: getImageWithBunnyUrl('Desktop/Trang-chu-2/other-service-ddos.png'),
    SSL: getImageWithBunnyUrl('Desktop/Trang-chu-2/other-service-ssl.png'),
  },

  WHY_CHOOSE: {
    INVEST: getImageWithBunnyUrl('Desktop/Trang-chu-2/why-choose-invest.png'),
    EMPLOYEE: getImageWithBunnyUrl(
      'Desktop/Trang-chu-2/why-choose-employee.png'
    ),
    SUPPORT: getImageWithBunnyUrl('Desktop/Trang-chu-2/why-choose-support.png'),
    CUSTOMER: getImageWithBunnyUrl(
      'Desktop/Trang-chu-2/why-choose-customer.png'
    ),
    TECHNOLOGY: getImageWithBunnyUrl(
      'Desktop/Trang-chu-2/why-choose-technology.png'
    ),
    POLICY: getImageWithBunnyUrl('Desktop/Trang-chu-2/why-choose-policy.png'),
  },
  FEEDBACK: {
    UYEN: getImageWithBunnyUrl('Desktop/Trang-chu-2/feedback-uyen-uyen.jpg'),
    PHUONG_NHI: getImageWithBunnyUrl(
      'Desktop/Trang-chu-2/feedback-phuong-nhi.jpg'
    ),
    HOANG_MINH: getImageWithBunnyUrl(
      'Desktop/Trang-chu-2/feedback-hoang-minh.jpg'
    ),
    SON_TUNG: getImageWithBunnyUrl('Desktop/Trang-chu-2/feedback-son-tung.jpg'),
  },
  FOOTER: {
    PHONE: getImageWithBunnyUrl('Desktop/Trang-chu-2/footer-2-phone.png'),
    MESSAGE: getImageWithBunnyUrl('Desktop/Trang-chu-2/footer-2-message.png'),
    LOCATION: getImageWithBunnyUrl('Desktop/Trang-chu-2/footer-2-location.png'),
    PBN: getImageWithBunnyUrl('Desktop/Trang-chu-2/footer-2-pbn.png'),
    TRAFFIC: getImageWithBunnyUrl('Desktop/Trang-chu-2/footer-2-traffic.png'),
    BACKLINK: getImageWithBunnyUrl('Desktop/Trang-chu-2/footer-2-backlink.png'),
    PROTECTED: getImageWithBunnyUrl(
      'Desktop/Trang-chu-2/footer-2-protected.png'
    ),
  },
};
