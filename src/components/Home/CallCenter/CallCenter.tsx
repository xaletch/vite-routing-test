import styles from "./callCenter.module.css";
import { CallCenterList } from "./components/CallCenterList";

export const CallCenter = () => {
  return (
    <div className={styles.card_inner}>
      <div className={styles.card_head}>
        <div className={styles.card__head_item}>Номер поставки</div>
        <div className={styles.card__head_item}>Дата создания</div>
        <div className={styles.card__head_item}>Юридическое лицо</div>
        <div className={styles.card__head_item}>Этап</div>
        <div className={styles.card__head_item}>Тип заявки</div>
        <div className={styles.card__head_item}>Исполнитель</div>
      </div>
      <div className={styles.callCenter_items}>
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <CallCenterList
              key={index}
              deliveryNumber={"WH-R-2995"}
              creationDate={"13.11.2023"}
              legalEntity={"ИП Ахмедов Бахтовар Бахромович"}
              stage={"Приемка груза"}
              typeStatus={"Разгрузка"}
              typeTime={"00:00"}
              executor={"ИП Ахмедов Бахтовар Бахромович"}
            />
          ))}
      </div>
    </div>
  );
};
