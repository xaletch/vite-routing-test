import { EmployeesList } from "./components/EmployeesList";
import styles from "./employees.module.css";

export const Employees = () => {
  return (
    <div className={styles.card_inner}>
      <div className={styles.card__inner_head}>
        <div className={styles.card__head_item}>Имя</div>
        <div className={styles.card__head_item}>Роли</div>
        <div className={styles.card__head_item}>Отдел</div>
      </div>
      <div className={styles.card__inner_list}>
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <EmployeesList
              key={index}
              name={"Фаррух Ниезов"}
              role={"Водитель"}
              department={"Тех. персонал"}
            />
          ))}
      </div>
    </div>
  );
};
