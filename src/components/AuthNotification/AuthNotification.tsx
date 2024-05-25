import { NotificationAuthProps } from "./types/notification.interface";

import "./authNotification.css";

export const AuthNotification: React.FC<NotificationAuthProps> = ({
  message,
  close,
}) => {
  return (
    <div className="notification">
      <div className="notification__inner">
        <div className="notification__inner-message">{message}</div>
        <div className="notification__close" onClick={() => close(false)}>
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6478 1.64775C11.8674 1.42808 11.8674 1.07192 11.6478 0.852252C11.4281 0.632583 11.0719 0.632583 10.8523 0.852252L6.00001 5.70452L1.14775 0.852255C0.928078 0.632585 0.571922 0.632585 0.352252 0.852255C0.132583 1.07192 0.132583 1.42808 0.352252 1.64775L5.20451 6.50001L0.352273 11.3523C0.132603 11.5719 0.132603 11.9281 0.352273 12.1477C0.571943 12.3674 0.928098 12.3674 1.14777 12.1477L6.00001 7.29551L10.8523 12.1477C11.0719 12.3674 11.4281 12.3674 11.6477 12.1477C11.8674 11.9281 11.8674 11.5719 11.6477 11.3523L6.7955 6.50001L11.6478 1.64775Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
