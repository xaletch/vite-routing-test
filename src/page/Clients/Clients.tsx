import { useEffect, useState } from "react";
import { Search } from "../../components/UiInputs/Search/Search";
import { Button } from "../../components/Buttons/UIButtons/Button";
import { ModalWindow } from "../../components/ModalsWindow/ModalWindow";
import { ModalMenu } from "../../components/ModalsWindow/Menu/ModalMenu";
import { CardsValue } from "../../components/UiPopups/Popup.CardsValue";
import { ClientCard } from "../../components/Clients/ClientCard/ClientCard";
import { link_icon } from "../../app/icons";

import "./clients.css";
import { Textarea } from "../../components/UiInputs/Textarea/Textarea";
import { Input } from "../../components/UiInputs/Input/Input";
import { ModalPopup } from "../../components/UiPopups/ModalPopup/ModalPopup";

const testPopupValue = ["Партнер 1", "Партнер 2", "Партнер 3"];

export const Clients = () => {
  const [isModalMenu, setIsModalMenu] = useState<boolean>(false);
  const [isModalCreate, setIsModalCreate] = useState<boolean>(false);
  const [searchClient, setSearchClient] = useState("");
  const [textareaValue, setTextareaValue] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");

  const [popupValue, setPopupValue] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState<string>("Выбрать");
  const [isPopup, setIsPopup] = useState<boolean>(false);

  const clientSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchClient(e.target.value);
  };

  const handleSearch = () => {
    try {
      console.log("поиск: ", searchClient);
    } catch (err) {
      console.log(err);
    }
  };

  const sendMessage = () => {
    try {
      if (textareaValue) {
        console.log({ message: textareaValue });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changePassword = () => {
    try {
      if (
        password &&
        confirmationPassword &&
        password === confirmationPassword
      ) {
        console.log({
          password: password,
          confirmationPassword: confirmationPassword,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseCreate = () => {
    setSelectValue("Выбрать");
    setPassword("");
    setConfirmationPassword("");
    setIsModalCreate(false);
  };

  // POPUP VALUE
  useEffect(() => {
    if (testPopupValue) {
      setPopupValue(testPopupValue);
    }
  }, []);

  const selectedPartner = () => {
    if (selectValue !== "Выбрать") {
      console.log({ selectPartner: selectValue });
    }
  };

  return (
    <>
      <div className="clients">
        <div className="clients__wrapper">
          <div className="clients__head wrapper__head">
            <h2 className="page__title">Клиенты</h2>
            <div className="clients__head-control wrapper__head-control">
              <Search
                value={searchClient}
                placeholder="Поиск по наименованию, телефону"
                onChange={clientSearch}
                handleSearch={handleSearch}
              />
              <div className="clients__head-control_button wrapper__head-control_button">
                <Button
                  color={"#54b800"}
                  colorText={"#ffffff"}
                  name={"Отправить сообщение"}
                  onClick={() => setIsModalMenu(!isModalMenu)}
                />
                <Button
                  color={"#8653d4"}
                  colorText={"#ffffff"}
                  name={"Создать"}
                  href={"create"}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <CardsValue />
          </div>
          <div className="container">
            <div className="clients__information">
              <div className="clients__information-head">
                <div className="clients__information-head_item">
                  Наименование
                </div>
                <div className="clients__information-head_item">
                  <span>
                    <img src={link_icon.swap} alt="swap" />
                  </span>
                  Номер телефона
                </div>
                <div className="clients__information-head_item">
                  <span>
                    <img src={link_icon.swap} alt="swap" />
                  </span>
                  Интеграции
                </div>
                <div className="clients__information-head_item">Партнёры</div>
              </div>
              <div className="clients__information-content">
                <ClientCard
                  clientName={"ИП Ахмедов Бахтовар Бахромович"}
                  telephone={"79999190874"}
                  integrationWB={true}
                  integrationOzon={false}
                  partners={""}
                >
                  <button
                    className="clients__card-control-button"
                    onClick={() => setIsModalCreate(!isModalCreate)}
                  >
                    <img src={link_icon.user_orange} alt="1" />
                  </button>
                  <button
                    className="clients__card-control-button"
                    onClick={() => {}}
                  >
                    <img src={link_icon.lock} alt="2" />
                  </button>
                  <button
                    className="clients__card-control-button"
                    onClick={() => {}}
                  >
                    <img src={link_icon.key} alt="3" />
                  </button>
                  <button
                    className="clients__card-control-button"
                    onClick={() => {}}
                  >
                    <img src={link_icon.copy} alt="4" />
                  </button>
                  <button
                    className="clients__card-control-button"
                    onClick={() => {}}
                  >
                    <img src={link_icon.share} alt="5" />
                  </button>
                  <button
                    className="clients__card-control-button"
                    onClick={() => {}}
                  >
                    <img src={link_icon.eye} alt="6" />
                  </button>
                  <button
                    className="clients__card-control-button"
                    onClick={() => {}}
                  >
                    <img src={link_icon.edit} alt="7" />
                  </button>
                  <button
                    className="clients__card-control-button"
                    onClick={() => {}}
                  >
                    <img src={link_icon.deleted} alt="8" />
                  </button>
                </ClientCard>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalMenu && (
        <ModalWindow setIsModalMenu={setIsModalMenu}>
          <ModalMenu
            menuName={"Отправить сообщение"}
            setIsModalMenu={setIsModalMenu}
          >
            <Textarea
              name={"Сообщение для всех клиентов"}
              value={textareaValue}
              setValue={setTextareaValue}
            />
            <Button
              color={"#54b800"}
              colorText={"#ffffff"}
              name={"История сообщений"}
              href={"message-history"}
              onClick={() => {}}
            />
            <Button
              color={"#8653d4"}
              colorText={"#ffffff"}
              name={"Отправить"}
              onClick={sendMessage}
            />
          </ModalMenu>
        </ModalWindow>
      )}
      {isModalCreate && (
        <ModalWindow setIsModalMenu={setIsModalCreate}>
          <ModalMenu
            menuName={"Партнёры клиента"}
            setIsModalMenu={setIsModalCreate}
          >
            <ModalPopup
              selectValue={selectValue}
              setSelectValue={setSelectValue}
              popupValue={popupValue}
              isOpen={isPopup}
              handleClick={() => setIsPopup(!isPopup)}
            />
            <Button
              color={"#f1f0fe"}
              colorText={"#8653d4"}
              name={"Отменить"}
              onClick={handleCloseCreate}
            />
            <Button
              color={"#8653d4"}
              colorText={"#ffffff"}
              name={"Сохранить"}
              onClick={selectedPartner}
            />
          </ModalMenu>

          <ModalMenu
            menuName={"Сменить пароль клиента"}
            setIsModalMenu={setIsModalCreate}
          >
            <Input
              name={"Новый пароль"}
              inputType={"password"}
              value={password}
              setValue={setPassword}
              passwordIcon={link_icon.eye_password}
              require={true}
            />
            <Input
              name={"Подтверждение пароля"}
              inputType={"password"}
              value={confirmationPassword}
              setValue={setConfirmationPassword}
              passwordIcon={link_icon.eye_password}
              require={true}
            />

            <Button
              color={"#f1f0fe"}
              colorText={"#8653d4"}
              name={"Отменить"}
              onClick={handleCloseCreate}
            />
            <Button
              color={"#8653d4"}
              colorText={"#ffffff"}
              name={"Сменить пароль"}
              onClick={changePassword}
            />
          </ModalMenu>
        </ModalWindow>
      )}
    </>
  );
};
