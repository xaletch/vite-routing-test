import { link_icon } from "../../../../app/icons";
import styles from "./clientsList.module.css";

export const ClientsList = () => {
  return (
    <div className={styles.card_content}>
      <div className={styles.card__content_inner}>
        <div className={styles.card_name}>ИП Ахмедов Бахтовар Бахромович</div>
        <div className={styles.card_name}>79999190874</div>
        <div className={styles.card_integration}>
          <div className={styles.card__integration_name}>
            Wildberries:
            <span>
              <img src={link_icon.integration_success} alt="успешно" />
            </span>
          </div>
          <div className={styles.card__integration_name}>
            Ozon:
            <span>
              <img src={link_icon.integration_error} alt="ошибка" />
            </span>
          </div>
        </div>

        <div className={styles.shortcut_button}>
          <button className={styles.button}>
            <img src={link_icon.user_orange} alt="1" />
          </button>
          <button className={styles.button}>
            <img src={link_icon.lock} alt="2" />
          </button>
          <button className={styles.button}>
            <img src={link_icon.key} alt="3" />
          </button>
          <button className={styles.button}>
            <img src={link_icon.copy} alt="4" />
          </button>
          <button className={styles.button}>
            <img src={link_icon.share} alt="5" />
          </button>
          <button className={styles.button}>
            <img src={link_icon.eye} alt="6" />
          </button>
          <button className={styles.button}>
            <img src={link_icon.edit} alt="7" />
          </button>
          <button className={styles.button}>
            <img src={link_icon.deleted} alt="8" />
          </button>
        </div>
      </div>
    </div>
  );
};
