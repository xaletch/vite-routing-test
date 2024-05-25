import { Link } from "react-router-dom";
import "./settings.css";
import { link_icon } from "../../app/icons";

export const Settings = () => {
  return (
    <div className="settings">
      <h2 className="page__title">Настройки</h2>
      <div className="settings__wrapper">
        <Link to={""} className="settings__card">
          <div className="settings__card-inner">
            <div className="settings__card-icon">
              <img src={link_icon.settings_system} alt="" />
            </div>
            <p className="settings__card-name">Настройки системы</p>
          </div>
        </Link>
        <Link to={""} className="settings__card">
          <div className="settings__card-inner">
            <div className="settings__card-icon">
              <img src={link_icon.warehouse} alt="" />
            </div>
            <p className="settings__card-name">Склады</p>
          </div>
        </Link>
        <Link to={""} className="settings__card">
          <div className="settings__card-inner">
            <div className="settings__card-icon">
              <img src={link_icon.my_company} alt="" />
            </div>
            <p className="settings__card-name">Мои компании</p>
          </div>
        </Link>
        <Link to={""} className="settings__card">
          <div className="settings__card-inner">
            <div className="settings__card-icon">
              <img src={link_icon.box} alt="" />
            </div>
            <p className="settings__card-name">Коробки</p>
          </div>
        </Link>
        <Link to={""} className="settings__card">
          <div className="settings__card-inner">
            <div className="settings__card-icon">
              <img src={link_icon.num_services} alt="" />
            </div>
            <p className="settings__card-name">Нм. услуг</p>
          </div>
        </Link>
        <Link to={""} className="settings__card">
          <div className="settings__card-inner">
            <div className="settings__card-icon">
              <img src={link_icon.num_product} alt="" />
            </div>
            <p className="settings__card-name">Нм. Товара</p>
          </div>
        </Link>
        <Link to={""} className="settings__card">
          <div className="settings__card-inner">
            <div className="settings__card-icon">
              <img src={link_icon.label_templates} alt="" />
            </div>
            <p className="settings__card-name">
              Шаблон этикетки товаров по умолчанию
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
