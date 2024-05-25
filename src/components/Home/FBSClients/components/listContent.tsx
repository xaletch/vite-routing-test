import { link_icon } from "../../../../app/icons";
import { listContentInterface } from "../types/listContent.interface";
import styles from "./listContent.module.css";

export const ListContent: React.FC<listContentInterface> = ({
  newItem,
  assembly,
  delivery,
}) => {
  return (
    <div className={styles.card_block}>
      <p className={styles.card__content_name}>
        {"ИП Ахмедов Бахтовар Бахромович"}
      </p>
      <div className={styles.card__content_card}>
        <div className={`${styles.card_item} green`}>
          <div className={styles.card__item_inner}>
            <img src={link_icon.green_box} alt="Новые" />
            <span className={styles.card__item_count}>{newItem}</span>
          </div>
        </div>
        <div className={`${styles.card_item} orange`}>
          <div className={styles.card__item_inner}>
            <img src={link_icon.assembly} alt="На сборке" />
            <span className={styles.card__item_count}>{assembly}</span>
          </div>
        </div>
        <div className={`${styles.card_item} purple`}>
          <div className={styles.card__item_inner}>
            <img src={link_icon.delivery} alt="В доставке" />
            <span className={styles.card__item_count}>{delivery}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
