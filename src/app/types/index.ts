// styles
export interface StylesHeadCart {
  card__inner: string;
  card__head: string;
}

export type navbarItemsProps = {
  icon: string;
  name: string;
  link: string;
  isMenu?: boolean;
  notificationCount?: number;
};

export type headerButton = {
  icon: string;
  alt: string;
  notificationCount?: number;
  link?: string;
};
