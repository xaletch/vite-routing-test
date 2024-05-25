import { ListItem } from "./components/ListItem";
import styles from "./warehouse.module.css";

export const Warehouse = () => {
  return (
    <div className={styles.warehouse_content}>
      <div className={styles.warehouse__content_inner}>
        <div className={styles.warehouse_head}>
          <div className={styles.warehouse__head_item}>Фото</div>
          <div className={styles.warehouse__head_item}>Баркод</div>
          <div className={styles.warehouse__head_item}>Артикул</div>
          <div className={styles.warehouse__head_item}>Клиент</div>
          <div className={styles.warehouse__head_item}>Ячейка</div>
          <div className={styles.warehouse__head_item}>Статус</div>
          <div className={styles.warehouse__head_item}>Короб.</div>
          <div className={styles.warehouse__head_item}>Ресурс</div>
          <div className={styles.warehouse__head_item}>Кол.</div>
          <div className={styles.warehouse__head_item}>Время</div>
        </div>
        <div className={styles.warehouse__content_list}>
          {Array(2)
            .fill(null)
            .map((_, index) => (
              <ListItem key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};
