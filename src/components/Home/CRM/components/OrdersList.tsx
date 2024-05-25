import styles from "./orderList.module.css";
export const OrdersList = () => {
  return (
    <div className={styles.order_item}>
      <div className={styles.order__item_inner}>
        <div className={styles.order__item_text}>1520</div>
        <div className={styles.order__item_text}>Фаррух Ниезов</div>
        <div className={styles.order__item_text}>Фаррух Ниезов</div>
        <div className={styles.order__item_text}>Новый</div>
        <div className={styles.order__item_text}>Все</div>
      </div>
    </div>
  );
};
