import { Link } from "react-router-dom";
import styles from "./cardHead.module.css";
import { cardHeadInterface } from "./types/cardHead.interface";

export const CardHead: React.FC<cardHeadInterface> = ({
  name,
  link,
  href,
  children,
}) => {
  return (
    <div className={styles.card__inner}>
      <div className={styles.card__head}>
        <p className={styles.card__head_name}>{name}</p>
        <Link className={styles.card__head_link} to={`/${href}`}>
          {link}
        </Link>
      </div>
      {children}
    </div>
  );
};
