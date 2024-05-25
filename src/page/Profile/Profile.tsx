import { useState } from "react";
import { link_icon } from "../../app/icons";
import "./profile.css";

export const Profile = () => {
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [seePassword, setSeePassword] = useState<boolean>(false);

  return (
    <div className="profile">
      <h2 className="page__title">Профиль</h2>
      <div className="profile__wrapper">
        <div className="profile__form">
          <div className="profile__form-inputs">
            <div className="input__wrapper">
              <label className="input__name" htmlFor="name">
                Имя <span>*</span>
              </label>
              <input type="text" id="name" />
            </div>
            <div className="input__wrapper">
              <label className="input__name" htmlFor="surname">
                Фамилия <span>*</span>
              </label>
              <input type="text" id="surname" />
            </div>
            <div className="input__wrapper">
              <label className="input__name" htmlFor="patronymic">
                Отчество <span>*</span>
              </label>
              <input type="text" id="patronymic" />
            </div>
            <div className="input__wrapper">
              <label className="input__name" htmlFor="email">
                Эл. почта <span>*</span>
              </label>
              <input type="email" id="email" />
            </div>
            <div className="input__wrapper">
              <label className="input__name" htmlFor="telephone">
                Номер телефона <span>*</span>
              </label>
              <input type="tel" id="telephone" />
            </div>
            <div className="input__wrapper">
              <label className="input__name" htmlFor="password">
                Пароль <span>*</span>
              </label>

              <div className="input_block">
                <input
                  type={seePassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {password?.length && (
                  <div
                    className="input__icon"
                    onClick={() => setSeePassword(!seePassword)}
                  >
                    <img src={link_icon.eye_password} alt="" />
                  </div>
                )}
              </div>
            </div>
            <div className="input__wrapper">
              <label className="input__name" htmlFor="confirmPassword">
                Подтвердите пароль <span>*</span>
              </label>

              <div className="input_block">
                <input
                  type={seePassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPassword?.length && (
                  <div
                    className="input__icon"
                    onClick={() => setSeePassword(!seePassword)}
                  >
                    <img src={link_icon.eye_password} alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="profile__form-buttons">
            <button className="profile__button-cancel profile__button">
              Отмена
            </button>
            <button className="profile__button-save profile__button">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
