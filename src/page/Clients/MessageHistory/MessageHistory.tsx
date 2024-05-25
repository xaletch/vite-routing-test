import { link_icon } from "../../../app/icons";
import { Button } from "../../../components/Buttons/UIButtons/Button";
import { MessageItem } from "../../../components/MessageItem/MessageItem";

import "./messageHistory.css";

export const MessageHistory = () => {
  return (
    <div className="messages">
      <div className="messages__wrapper">
        <div className="messages__head wrapper__head">
          <h2 className="page__title">История сообщений</h2>
          <div className="messages__head-control wrapper__head-control">
            <Button
              name={"Назад"}
              color={"#ffffff"}
              colorText={"#8653d4"}
              href={"/clients"}
              icon={link_icon.back_arrow}
            />
          </div>
        </div>
        <div className="container">
          <div className="message__content">
            <MessageItem
              name={"Murod null"}
              date={"2023-09-28"}
              time={"16:13:50"}
              text={
                "Этикетки продуктов клиента ИП Ахмедов Бахтовар Бахромович отправил"
              }
            />
            <MessageItem
              name={"Murod null"}
              date={"2023-09-28"}
              time={"16:13:51"}
              text={
                "Этикетки продуктов клиента ИП Ахмедов Бахтовар Бахромович отправил"
              }
            />
            <MessageItem
              name={"Murod null"}
              date={"2023-09-28"}
              time={"16:13:52"}
              text={
                "Этикетки продуктов клиента ИП Ахмедов Бахтовар Бахромович отправил"
              }
            />
            <MessageItem
              name={"Murod null"}
              date={"2023-09-28"}
              time={"16:13:53"}
              text={
                "Этикетки продуктов клиента ИП Ахмедов Бахтовар Бахромович отправил"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
