import React from "react";

import styles from "./button.module.css";

import { headerButton } from "../../../app/types";
import { Link } from "react-router-dom";

export const Button: React.FC<headerButton> = ({
  icon,
  alt,
  notificationCount,
  link,
}) => {
  return (
    <>
      {link ? (
        <Link to={link}>
          <button className={styles.button}>
            <img src={icon} alt={alt} />
            {notificationCount !== undefined && notificationCount > 0 && (
              <span className={styles.button_notification}>
                {notificationCount}
              </span>
            )}
          </button>
        </Link>
      ) : (
        <button className={styles.button}>
          <img src={icon} alt={alt} />
          {notificationCount !== undefined && notificationCount > 0 && (
            <span className={styles.button_notification}>
              {notificationCount}
            </span>
          )}
        </button>
      )}
    </>
  );
};
