import { PeopleList } from "./components/PeopleList";
import styles from "./documents.module.css";

export const Documents = () => {
  return (
    <div className={styles.documents_card}>
      <div className={styles.documents__card_head}>
        <p>Клиент</p>
        <p>Номер телефона</p>
      </div>
      <div className={styles.documents__people}>
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <PeopleList
              name={"ИП Ахмедов Бахтовар Бахромович"}
              telephone={"79777973721"}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};
