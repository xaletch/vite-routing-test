import { link_icon } from "../../../app/icons";
import "./notificationsItem.css";
import { notificationsItem } from "./types/notificationsItems.interface";

export const NotificationsItem: React.FC<notificationsItem> = ({
  name,
  date,
  time,
  text,
}) => {
  return (
    <div className="notification__content-item">
      <div className="notification__items-inner">
        <div className="notification__item-content">
          <div className="notification__item-head">
            <span className="item__name">{name}</span>
            <div className="item__date">
              <span>{date}</span>
              <span>{time}</span>
            </div>
          </div>
          <p className="item__text">{text}</p>
        </div>
        <div className="notification__control-buttons">
          <button className="item__control-button">
            <img src={link_icon.letter} alt="" />
          </button>
          <button className="item__control-button">
            <img src={link_icon.notification_cross} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
