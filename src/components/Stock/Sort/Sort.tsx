import { link_icon } from "../../../app/icons";
import { sortContent } from "./types/sort.interface";

import "./sort.css";
import React from "react";
import Calendar from "./Calendar";

export const Sort: React.FC<sortContent> = ({
  name,
  selectValue,
  list,
  isOpen,
  togglePopup,
  setSelected,
}) => {
  const selectedItem = (value: string) => {
    setSelected(value);
    togglePopup();
  };

  const selectDate = (date: string) => {
    setSelected(date);
    togglePopup();
  };

  return (
    <div className="stock__sort-block">
      <span className="stock__sort-block_name">{name}</span>
      <div className="stock__popup stock__sort-popup">
        <div className="stock__popup-selected" onClick={togglePopup}>
          <div className="stock__popup-count stock__sort-popup-count">
            {selectValue}
          </div>
          <span className="stock__popup-icon">
            <img src={link_icon.popup} alt="" />
          </span>
        </div>
        {isOpen ? (
          <div className="stock__popup-list open">
            {name === "От" || name === "До" ? (
              <Calendar onSelectDate={selectDate} />
            ) : (
              list?.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className="stock__popup-item"
                    onClick={() => selectedItem(item)}
                  >
                    {item}
                  </div>
                  {index === list.length - 1 ? null : (
                    <div className="stock__popup-item-line"></div>
                  )}
                </React.Fragment>
              ))
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};
