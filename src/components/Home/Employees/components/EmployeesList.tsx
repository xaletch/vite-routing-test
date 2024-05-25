import { link_icon } from "../../../../app/icons";
import { employeesItem } from "../types/employees.interface";
import styles from "./employeesList.module.css";

export const EmployeesList: React.FC<employeesItem> = ({
  name,
  role,
  department,
}) => {
  return (
    <div className={styles.card__list_item}>
      <div className={styles.card__item_name}>{name}</div>
      <div className={styles.card__item_name}>{role}</div>
      <div className={styles.card__item_name}>{department}</div>
      <div className={styles.shortcut__button}>
        <button className={styles.button}>
          <img src={link_icon.user} alt="пользователь" />
        </button>
        <button className={styles.button}>
          <img src={link_icon.edit} alt="редактировать" />
        </button>
        <button className={styles.button}>
          <img src={link_icon.deleted} alt="удалить" />
        </button>
      </div>
    </div>
  );
};
