import { link_icon } from "../../../app/icons";
import styles from "./cardItem.module.css";
import { StockCard } from "./types/cardItem.interface";

export const CardItem: React.FC<StockCard> = ({
  index,
  selectedStyle,
  image,
  barcode,
  article,
  client,
  cell,
  status,
  box,
  resource,
  qty,
  time,
  isSelected,
  onSelectionChange,
  hidden,
}) => {
  const handleCheckboxChange = () => {
    onSelectionChange(index, !isSelected);
  };

  return (
    <div className={`${styles.card} ${hidden ? `${styles.card__hidden}` : ""}`}>
      <div
        className={`${styles.card__wrapper} ${
          styles[`card__wrapper_${selectedStyle}`]
        }`}
      >
        <div
          className={`${styles.card__content} ${
            styles[`card__content_${selectedStyle}`]
          }`}
        >
          <div
            className={`${styles.card__selected} ${
              styles[`card__selected_${selectedStyle}`]
            } ${isSelected ? styles.card__selected_checkbox_selected : ""}`}
            onClick={handleCheckboxChange}
          >
            {isSelected && (
              <div className={styles.card__selected_checked}>
                <img src={link_icon.selected} alt="выбранный" />
              </div>
            )}
          </div>
          <div className={styles.card__content_item}>
            <div className={styles.card__item_title}>Фото</div>
            <div className={styles.card__item_name}>
              <img src={image} alt={article} />
            </div>
          </div>
          <div className={styles.card__content_item}>
            <div className={styles.card__item_title}>Баркод</div>
            <div className={styles.card__item_name}>{barcode}</div>
          </div>
          <div className={styles.card__content_item}>
            <div className={styles.card__item_title}>Артикул</div>
            <div className={styles.card__item_name}>{article}</div>
          </div>
          <div className={styles.card__content_item}>
            <div className={styles.card__item_title}>Клиент</div>
            <div className={styles.card__item_name}>{client}</div>
          </div>
          <div className={styles.card__content_item}>
            <div className={styles.card__item_title}>Ячейка</div>
            <div
              className={
                cell
                  ? `${styles.card__item_button} ${styles.card__item_button_yellow}`
                  : `${styles.card__item_none}`
              }
            >
              {cell ? cell : "-"}
            </div>
          </div>
          <div className={styles.card__content_item}>
            <div className={styles.card__item_title}>Статус</div>
            <div
              className={`${styles.card__item_button} ${
                status === "Отбытие"
                  ? `${styles["card__item_button_orange"]}`
                  : `${styles["card__item_button_green"]}`
              } `}
            >
              {status}
            </div>
          </div>
          <div className={styles.card__content_item}>
            <div className={styles.card__item_title}>Короб.</div>
            <div
              className={`${styles.card__item_name} ${styles.card__item_name_box}`}
            >
              {box}
            </div>
          </div>
          <div className={styles.card__content_item}>
            <div className={styles.card__item_title}>Ресурс</div>
            <div
              className={`${styles.card__item_name} ${styles.card__item_name_box}`}
            >
              <span>Заявка</span>
              {resource}
            </div>
          </div>
          <div className={styles.card__content_item}>
            <div className={styles.card__item_title}>Кол.</div>
            <div className={styles.card__item_name}>{qty}</div>
          </div>
          <div className={styles.card__content_item}>
            <div className={styles.card__item_title}>Время</div>
            <div className={styles.card__item_name}>{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className={styles.card__col_name}>
<div className={styles.card__col_name_wrapper}>
  <div
    className={`${styles.card__col_title} ${styles.card__col_title_img}`}
  >
    Фото
  </div>
  <div className={styles.card__col_title}>Баркод</div>
  <div className={styles.card__col_title}>Артикул</div>
  <div className={styles.card__col_title}>Клиент</div>
  <div className={styles.card__col_title}>Ячейка</div>
  <div className={styles.card__col_title}>Статус</div>
  <div className={styles.card__col_title}>Короб.</div>
  <div className={styles.card__col_title}>Ресурс</div>
  <div className={styles.card__col_title}>Кол.</div>
  <div className={styles.card__col_title}>Время</div>
</div>
</div>
<div className={styles.card__content}>
<div className={`${styles[`card__content_${selectedStyle}`]}`}>
  <img
    src={image}
    alt={article}
    className={styles.card__content_item}
  />
  <div className={styles.card__content_item}>{barcode}</div>
  <div className={styles.card__content_item}>{article}</div>
  <div className={styles.card__content_item}>{client}</div>
  <div className={styles.card__content_item}>{cell}</div>
  <div className={styles.card__content_item}>{status}</div>
  <div className={styles.card__content_item}>{box}</div>
  <div className={styles.card__content_item}>{resource}</div>
  <div className={styles.card__content_item}>{qty}</div>
  <div className={styles.card__content_item}>{time}</div>
</div>
</div> */
}
