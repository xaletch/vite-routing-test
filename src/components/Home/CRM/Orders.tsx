import { OrdersList } from "./components/OrdersList";
import styles from "./orders.module.css";
export const Orders = () => {
  return (
    <div className={styles.order_content}>
      <div className={styles.order__content_head}>
        <div className={styles.head_item}>ID</div>
        <div className={styles.head_item}>Заказчик</div>
        <div className={styles.head_item}>Принят</div>
        <div className={styles.head_item}>Статус</div>
        <div className={styles.head_item}>Продукты</div>
      </div>
      <div className={styles.order__list_content}>
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <OrdersList key={index} />
          ))}
      </div>
    </div>
  );
};
