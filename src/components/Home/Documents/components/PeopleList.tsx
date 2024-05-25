import { peopleData } from "../types/people.interface";
import styles from "./peopleList.module.css";

export const PeopleList: React.FC<peopleData> = ({ name, telephone }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_inner}>
        <div className={styles.card__inner_text}>{name}</div>
        <div className={styles.card__inner_text}>{telephone}</div>
        <div className={styles.card__block_buttons}>
          <button className={`${styles.cart_button} ${styles.green}`}>
            Документы
          </button>
          <button className={`${styles.cart_button} ${styles.purple}`}>
            Реестр счёта
            <span className={styles.cart__button_count}>5</span>
          </button>
        </div>
      </div>
    </div>
  );
};
