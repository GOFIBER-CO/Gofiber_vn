export enum ICON {
  DOWN = 'material-symbols:keyboard-arrow-down-rounded',
  MENU = 'material-symbols:menu-rounded',
  RIGHT = 'material-symbols:arrow-right-alt-rounded',
  EDIT = 'majesticons:edit-pen-4-line',
  RIGHT_CIRCLE = 'material-symbols:swipe-right-alt-outline',
  CHECKED = 'mdi:check-bold',
}

export enum NEWS_TAB {
  ALL = 'all',
  NEWS = 'news',
  EVENT = 'event',
}

export const env = {
  FP_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_FP_PUBLIC_API_KEY,
};

export const DOMAIN = 'localhost:3000';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const openNotificationWithIcon = (
  type: NotificationType,
  message: String,
  description: String,
  api: any,
) => {
  api[type]({
    message: message,
    description: description,
  });
};

export const formatNumber = (number: any) => {
  return new Intl.NumberFormat('en-US').format(parseInt(number || 0));
};
