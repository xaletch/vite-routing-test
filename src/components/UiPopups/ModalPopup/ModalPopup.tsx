import React from "react";
import { link_icon } from "../../../app/icons";
import "./modalPopup.css";
import { ModalPopupProps } from "./types/modalPopup.interface";

export const ModalPopup: React.FC<ModalPopupProps> = ({
  selectValue,
  setSelectValue,
  popupValue,
  isOpen,
  handleClick,
  popupName,
  grid,
  errors,
}) => {
  return (
    <div
      className="modal-popup"
      onClick={handleClick}
      style={grid ? { gridColumn: grid } : {}}
    >
      {popupName && (
        <div className="modal-popup__name">
          {popupName} <span>*</span>
        </div>
      )}
      <div
        className={`modal-popup__selected ${popupName ? "popup-name" : ""} ${
          errors ? "require" : ""
        }`}
      >
        <div className="modal-popup__selected-text">{selectValue}</div>
        <span className="modal-popup__selected-icon">
          <img src={link_icon.popup} alt="" />
        </span>
      </div>
      <div className={`modal-popup__list ${isOpen ? "open" : ""}`}>
        {popupValue.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className="modal-popup__item"
              onClick={() => setSelectValue(item)}
            >
              {item}
            </div>
            {index === popupValue.length - 1 ? null : (
              <div className="modal-popup__item-line"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
