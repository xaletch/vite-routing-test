import styles from "./navbar.module.css";

import { link_img } from "../../app/images/link_img";
import { NavbarItems } from "./Items/NavbarItems";
import { link_icon } from "../../app/icons";

import { navbarItemsProps } from "../../app/types/index";

import { navbarProps } from "./types/navbar.interface";

const navbarItemsArray = [
  {
    icon: link_icon.home,
    name: "Главная",
    link: "/",
  },
  {
    icon: link_icon.calendar,
    name: "Календарь",
    link: "/calendar",
  },
  {
    icon: link_icon.sklad,
    name: "Склад",
    link: "/stock",
  },
  {
    icon: link_icon.fbs,
    name: "FBS",
    link: "/fbs",
    notificationCount: 23,
  },
  {
    icon: link_icon.call_center,
    name: "Центр заявок",
    link: "/call-center",
  },
  {
    icon: link_icon.clients,
    name: "Клиенты",
    link: "/clients",
  },
  {
    icon: link_icon.document,
    name: "Документы",
    link: "/documents",
  },
  {
    icon: link_icon.employees,
    name: "Сотрудники",
    link: "/employees",
  },
  {
    icon: link_icon.crm_icon,
    name: "CRM",
    link: "/crm",
  },
  {
    icon: link_icon.dbs_icon,
    name: "DBS",
    link: "/dbs",
  },
];

export const Navbar: React.FC<navbarProps> = ({
  collapse,
  resetWidth,
  navbarRef,
  isMenu,
}) => {
  return (
    <div
      className={`${styles.navbar}`}
      style={{ transition: "all .5s ease" }}
      ref={navbarRef}
    >
      <div
        className={`${styles.navbar_inner} ${isMenu ? `${styles.reduce}` : ""}`}
      >
        {!isMenu ? (
          <button className={styles.navbar__reduce_button} onClick={collapse}>
            <img src={link_icon.reduce_menu} alt="" />
          </button>
        ) : (
          <button className={styles.navbar__reduce_open} onClick={resetWidth}>
            <img src={link_icon.reduce_menu} alt="" />
          </button>
        )}

        <div>
          <img src={link_img.logo} alt="logo" />
        </div>
        <div className={styles.navbar__wrapper} style={{ overflowX: "hidden" }}>
          <div
            className={`${styles.navbar_list} ${
              isMenu ? `${styles.reduce}` : ""
            }`}
            style={{ overflow: "hidden" }}
          >
            {navbarItemsArray.map((obj: navbarItemsProps, index) => (
              <NavbarItems {...obj} key={index} isMenu={isMenu} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
