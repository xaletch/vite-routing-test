import React from "react";

import styles from "./navbarItems.module.css";

import { navbarItemsProps } from "../../../app/types";
import { Link, useLocation } from "react-router-dom";

export const NavbarItems: React.FC<navbarItemsProps> = ({
  icon,
  name,
  notificationCount,
  link,
  isMenu,
}) => {
  const location = useLocation();

  const isActive = location.pathname === link;

  return (
    <Link to={link} className={`${styles.navbar_linkItem}`}>
      <div
        className={`${styles.navbar_item} ${isActive ? styles.active : ""} ${
          isMenu ? styles.reduce : ""
        }`}
      >
        <img src={icon} alt={name} />
        <p>{name}</p>
        {notificationCount !== undefined && notificationCount > 0 && (
          <span className={styles.navbar_notification}>
            {notificationCount}
          </span>
        )}
      </div>
    </Link>
  );
};
