import { link_icon } from "../../../../app/icons";
import { callCenterItems } from "../types/callCenter.interface";
import styles from "./callCenterList.module.css";

export const CallCenterList: React.FC<callCenterItems> = ({
  deliveryNumber,
  creationDate,
  legalEntity,
  stage,
  typeStatus,
  typeTime,
  executor,
}) => {
  return (
    <div className={styles.card_inner}>
      <div className={styles.delivery}>{deliveryNumber}</div>
      <div>{creationDate}</div>
      <div>{legalEntity}</div>
      <div>{stage}</div>
      <div className={styles.request_type}>
        <div className={styles.type}>{typeStatus}</div>
        <span className={styles.time}>{typeTime}</span>
      </div>
      <div>{executor}</div>
      <div className={styles.action_button}>
        <button>
          <img src={link_icon.user} alt="пользователь" />
        </button>
        <button>
          <img src={link_icon.barcode} alt="qr-код" />
        </button>
        <button>
          <img src={link_icon.eye} alt="скрыть" />
        </button>
        <button>
          <img src={link_icon.deleted} alt="удалить" />
        </button>
      </div>
    </div>
  );
};
