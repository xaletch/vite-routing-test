import { MessageItemProps } from "./types/messageItem.interface";

import "./messageItem.css";

export const MessageItem: React.FC<MessageItemProps> = ({
  name,
  date,
  time,
  text,
}) => {
  return (
    <div className="message-item">
      <div className="message__item-inner">
        <div className="message__item-head">
          <span className="message__item-name">{name}</span>
          <div className="message__item-date">
            <span>{date}</span>
            <span>{time}</span>
          </div>
        </div>
        <p className="message__item-text">{text}</p>
      </div>
    </div>
  );
};
