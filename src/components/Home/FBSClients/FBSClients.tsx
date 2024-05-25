import { link_icon } from "../../../app/icons";

import styles from "./clients.module.css";
import { ListContent } from "./components/listContent";

export const FBSClients = () => {
  return (
    <>
      <div className={styles.card__head_info}>
        {/* НОВЫЕ */}
        <div className={`${styles.card__head_item} ${styles.green}`}>
          <div className={styles.card__item_inner}>
            <img src={link_icon.green_box} alt="Новые" />
            <p className={styles.card__item_name}>Новые: </p>
            <span className={styles.card__item_count}>{"15"}</span>
          </div>
        </div>

        {/* На сборке */}
        <div className={`${styles.card__head_item} ${styles.orange}`}>
          <div className={styles.card__item_inner}>
            <img src={link_icon.assembly} alt="На сборке" />
            <p className={styles.card__item_name}>На сборке: </p>
            <span className={styles.card__item_count}>{"0"}</span>
          </div>
        </div>

        {/* В доставке */}
        <div className={`${styles.card__head_item} ${styles.purple}`}>
          <div className={styles.card__item_inner}>
            <img src={link_icon.delivery} alt="В доставке" />
            <p className={styles.card__item_name}>В доставке: </p>
            <span className={styles.card__item_count}>{"2"}</span>
          </div>
        </div>
      </div>

      <div className={styles.cards_content}>
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <ListContent newItem={6} assembly={0} delivery={1} key={index} />
          ))}
      </div>
    </>
  );
};
