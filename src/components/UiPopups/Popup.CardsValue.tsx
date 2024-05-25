import React, { useState } from "react";

import "./popup.css";

import { link_icon } from "../../app/icons";
import { setSelectedNum } from "../../redux/slice/stock.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const CardsValue = () => {
  const dispatch = useDispatch();
  const { num, selectedNum } = useSelector((state: RootState) => state.stock);

  const [isOpenSort, setIsOpenSort] = useState<boolean>(false);

  const sortOpen = () => {
    setIsOpenSort(!isOpenSort);
  };

  const selectCount = (num: number) => {
    dispatch(setSelectedNum(num));
    setIsOpenSort(false);
  };

  return (
    <div className="popup">
      <div className="popup-selected" onClick={sortOpen}>
        <div className="popup-count">{selectedNum}</div>
        <span className="popup-icon">
          <img src={link_icon.popup} alt="" />
        </span>
      </div>
      <div className={`popup-list ${isOpenSort ? "open" : ""}`}>
        {num.map((number, index) => (
          <React.Fragment key={index}>
            <div className="popup-item" onClick={() => selectCount(number)}>
              {number}
            </div>
            {index === num.length - 1 ? null : (
              <div className="popup-item-line"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
