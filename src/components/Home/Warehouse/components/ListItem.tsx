import { link_img } from "../../../../app/images/link_img";
import styles from "./listItem.module.css";

export const ListItem = () => {
  return (
    <div className={styles.list_content}>
      <div className={styles.list__content_inner}>
        <img src={link_img.nega} alt="test" />
        <div className={styles.list__content_item}>{"2038590377750"}</div>
        <div className={styles.list__content_item}>{"Течфлис-черный"}</div>
        <div className={styles.list__content_item}>
          {"Ахмедов Бахтовар Бахромович"}
        </div>

        {/*  */}
        <div className={`${styles.list__content_button} ${styles.yellow}`}>
          1
        </div>
        <div className={`${styles.list__content_button} ${styles.orange}`}>
          Отбытие
        </div>

        {/*  */}
        <div className={styles.list__item_box}>{"WH-B-19"}</div>

        {/*  */}
        <div className={styles.list__item_sprat}>
          Заявка:
          <div className={styles.list__sprat_c}>{"WH-R-2185"}</div>
        </div>

        {/*  */}
        <div className={styles.list__content_item}>{50}</div>
        <div className={styles.list__content_item}>{"18.10.2023 12:37"}</div>
      </div>
    </div>
  );
};
