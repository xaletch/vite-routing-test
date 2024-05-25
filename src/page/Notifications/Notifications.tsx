import { NotificationsItem } from "../../components/Notifications/Item/NotificationsItem";
import { Sort } from "../../components/Notifications/Sort/Sort";

import "./notifications.css";

export const Notifications = () => {
  return (
    <div className="notifications">
      <h2 className="page__title">Уведомления</h2>
      <div className="notifications__wrapper">
        <Sort />
        <div className="notifications__content">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <NotificationsItem
                key={index}
                name={"Оповещение системы"}
                date={"15.10.2023"}
                time={"20:21"}
                text={
                  "Этикетки продуктов клиента ИП Ахмедов Бахтовар Бахромович были успешно сгенерированы"
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
};
