import { Link } from "react-router-dom";
import { link_icon } from "../../app/icons";
import { Button } from "./buttons";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_user}>
          <div className={styles.header_userImg}></div>
          <div className={styles.header_userInfo}>
            <span className={styles.header_user_jobTitle}>Клиент</span>
            <div className={styles.header_userName}>
              <h3 className={styles.header_user_name}>Селезнев Артур</h3>
              <div className={styles.header__user_buttons}>
                <Link to={"/profile"} className={styles.header__buttons_item}>
                  <img src={link_icon.profile} alt="" />
                </Link>
                <Link to={"/settings"} className={styles.header__buttons_item}>
                  <img src={link_icon.settings} alt="" />
                </Link>
                <Link
                  to={"/subscription"}
                  className={styles.header__buttons_item}
                >
                  <img src={link_icon.sub} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.header_buttons}>
          <Button icon={link_icon.update} alt={"обновить"} />
          <Button
            icon={link_icon.notifications}
            alt={"уведомления"}
            notificationCount={33}
            link={"/notifications"}
          />
          <Button icon={link_icon.log_out} alt={"выйти"} />
        </div>
      </div>
    </div>
  );
};
