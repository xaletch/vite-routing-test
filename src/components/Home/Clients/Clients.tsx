import styles from "./clients.module.css";
import { ClientsList } from "./components/ClientsList";

export const Clients = () => {
  return (
    <div className={styles.clients_card}>
      <div className={styles.clients__card_head}>
        <div className={styles.head__card_item}>Наименование</div>
        <div className={styles.head__card_item}>Номер телефона</div>
        <div className={styles.head__card_item}>Интеграции</div>
        <div className={styles.head__card_item}>Партнёры</div>
      </div>
      <div className={styles.clients__card_content}>
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <ClientsList key={index} />
          ))}
      </div>
    </div>
  );
};
